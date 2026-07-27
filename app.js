(function () {
  "use strict";

  const { config, books } = window.NextReadData;
  const storageKey = "nextread-reading-list-v1";
  const statusLabels = {
    want: "Want to Read",
    current: "Currently Reading",
    finished: "Finished"
  };
  const emptyMessages = {
    want: "Your reading list is empty. Discover a book and save it here.",
    current: "You are not currently reading a book.",
    finished: "You have not marked any books as finished yet."
  };

  const elements = {
    form: document.querySelector("#recommendation-form"),
    audienceOptions: document.querySelector("#audience-options"),
    typeOptions: document.querySelector("#type-options"),
    genreOptions: document.querySelector("#genre-options"),
    moodOptions: document.querySelector("#mood-options"),
    lengthOptions: document.querySelector("#length-options"),
    genreCounter: document.querySelector("#genre-counter"),
    quizStatus: document.querySelector("#quiz-status"),
    results: document.querySelector("#results"),
    resultsGrid: document.querySelector("#results-grid"),
    resultsHeading: document.querySelector("#results-heading"),
    resultsIntro: document.querySelector("#results-intro"),
    resultsKicker: document.querySelector("#results-kicker"),
    closestMessage: document.querySelector("#closest-message"),
    browseGenres: document.querySelector("#browse-genre-options"),
    libraryStats: document.querySelector("#library-stats"),
    showMoreWrap: document.querySelector("#show-more-wrap"),
    showMoreButton: document.querySelector("#show-more-books"),
    search: document.querySelector("#book-search"),
    readingListStatus: document.querySelector("#reading-list-status"),
    navToggle: document.querySelector(".nav-toggle"),
    navLinks: document.querySelector("#nav-links")
  };

  let readingList = loadReadingList();
  let recommendationTimer;
  let browseState = { genre: "", matches: [], visibleCount: 6 };

  function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function createChoiceInput({ name, value, type = "radio", description = "", chip = false }) {
    const id = `${name}-${slugify(value)}`;
    const input = document.createElement("input");
    input.className = "option-input";
    input.type = type;
    input.name = name;
    input.value = value;
    input.id = id;

    const label = document.createElement("label");
    label.className = chip ? "chip-label" : "option-label";
    label.htmlFor = id;

    const text = document.createElement("span");
    text.textContent = value;
    if (description) {
      const small = document.createElement("small");
      small.textContent = description;
      text.append(small);
    }
    label.append(text);

    return [input, label];
  }

  function renderSingleChoiceOptions(container, values, name) {
    values.forEach((item) => {
      const value = typeof item === "string" ? item : item.label;
      const description = typeof item === "string" ? "" : item.description;
      container.append(...createChoiceInput({ name, value, description }));
    });
  }

  function renderGenreOptions() {
    config.genreGroups.forEach((group) => {
      const section = document.createElement("section");
      section.className = "genre-group";
      const heading = document.createElement("h4");
      heading.textContent = group.label;
      const chips = document.createElement("div");
      chips.className = "chip-grid";

      group.genres.forEach((genre) => {
        chips.append(...createChoiceInput({
          name: "genres",
          value: genre,
          type: "checkbox",
          chip: true
        }));
      });
      section.append(heading, chips);
      elements.genreOptions.append(section);
    });
  }

  function renderMoodOptions() {
    config.moods.forEach((mood) => {
      elements.moodOptions.append(...createChoiceInput({
        name: "moods",
        value: mood,
        type: "checkbox",
        chip: true
      }));
    });
  }

  function renderBrowseGenres() {
    config.genreGroups.forEach((group) => {
      const section = document.createElement("section");
      section.className = "genre-group";
      const heading = document.createElement("h4");
      heading.textContent = group.label;
      const buttons = document.createElement("div");
      buttons.className = "button-row";

      group.genres.forEach((genre) => {
        const button = document.createElement("button");
        button.className = "browse-genre-button";
        button.type = "button";
        button.dataset.genre = genre;
        button.textContent = genre;
        buttons.append(button);
      });
      section.append(heading, buttons);
      elements.browseGenres.append(section);
    });
  }

  function selectedValues(name) {
    return [...elements.form.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
  }

  function collectQuizPreferences() {
    return {
      audience: elements.form.elements.audience?.value || "",
      type: elements.form.elements.type?.value || "",
      genres: selectedValues("genres"),
      moods: selectedValues("moods"),
      length: elements.form.elements.length?.value || "No Preference"
    };
  }

  function setFieldError(field, message) {
    document.querySelector(`#${field}-error`).textContent = message;
    const question = elements.form.querySelector(`[data-question="${field}"]`);
    if (message) {
      question.setAttribute("aria-invalid", "true");
    } else {
      question.removeAttribute("aria-invalid");
    }
  }

  function validatePreferences(preferences) {
    const errors = [];
    setFieldError("audience", preferences.audience ? "" : "Choose who the book is for.");
    setFieldError("type", preferences.type ? "" : "Choose a book type.");
    setFieldError("genre", "");

    if (!preferences.audience) errors.push("audience");
    if (!preferences.type) errors.push("type");
    if (!preferences.genres.length) {
      setFieldError("genre", "Choose at least one genre.");
      errors.push("genres");
    }

    if (errors.length) {
      elements.quizStatus.textContent = "Please complete the highlighted questions.";
      const firstName = errors[0] === "genres" ? "genres" : errors[0];
      elements.form.querySelector(`input[name="${firstName}"]`)?.focus();
      return false;
    }
    elements.quizStatus.textContent = "";
    return true;
  }

  function audienceMatches(book, audience) {
    if (audience === "All Ages") return book.audiences.includes("All Ages");
    return book.audiences.includes("All Ages") || book.audiences.includes(audience);
  }

  function calculateBookScore(book, preferences) {
    let score = 0;
    if (audienceMatches(book, preferences.audience)) score += 4;
    if (preferences.type !== "Either" && preferences.type && book.type === preferences.type) score += 3;
    preferences.genres.forEach((genre) => {
      if (book.primaryGenre === genre) score += 6;
      else if (book.genres.includes(genre)) score += 4;
    });
    preferences.moods.forEach((mood) => {
      if (book.moods.includes(mood)) score += 2;
    });
    if (preferences.length !== "No Preference" && book.length === preferences.length) score += 2;
    return score;
  }

  function isStrongMatch(book, preferences) {
    const audienceMatch = audienceMatches(book, preferences.audience);
    const typeMatch = preferences.type === "Either" || book.type === preferences.type;
    const genreMatch = preferences.genres.every((genre) => book.genres.includes(genre));
    const moodMatch = !preferences.moods.length || preferences.moods.some((mood) => book.moods.includes(mood));
    const lengthMatch = preferences.length === "No Preference" || book.length === preferences.length;
    return audienceMatch && typeMatch && genreMatch && moodMatch && lengthMatch;
  }

  function recommendBooks(preferences, limit = 3) {
    const ranked = books
      .filter((book) => audienceMatches(book, preferences.audience))
      .map((book) => ({ book, score: calculateBookScore(book, preferences), tieBreaker: Math.random() }))
      .sort((a, b) => b.score - a.score || a.tieBreaker - b.tieBreaker);
    const selected = [];
    const selectedIds = new Set();
    const addResult = (entry) => {
      if (!entry || selectedIds.has(entry.book.id) || selected.length >= limit) return;
      selected.push(entry.book);
      selectedIds.add(entry.book.id);
    };

    preferences.genres.forEach((genre) => {
      const bestPrimary = ranked.find((entry) => entry.book.primaryGenre === genre && entry.score >= ranked[0].score - 4);
      addResult(bestPrimary);
    });

    ranked.forEach((entry) => {
      const repeatsAuthor = selected.some((book) => book.author === entry.book.author);
      const repeatsPrimary = selected.filter((book) => book.primaryGenre === entry.book.primaryGenre).length >= 2;
      if (!repeatsAuthor && !repeatsPrimary) addResult(entry);
    });
    ranked.forEach(addResult);
    return selected.slice(0, limit);
  }

  function formatList(items) {
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} and ${items[1]}`;
    return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
  }

  function buildMatchExplanation(book, preferences) {
    const primaryMatches = preferences.genres.filter((genre) => book.primaryGenre === genre);
    const secondaryMatches = preferences.genres.filter((genre) => genre !== book.primaryGenre && book.genres.includes(genre));
    const moodMatches = preferences.moods.filter((mood) => book.moods.includes(mood));
    const details = [];
    if (secondaryMatches.length) details.push(`${formatList(secondaryMatches)} as an additional genre`);
    if (moodMatches.length) details.push(`the ${formatList(moodMatches.map((mood) => mood.toLowerCase()))} mood you selected`);
    if (preferences.length !== "No Preference" && book.length === preferences.length) details.push(`your ${preferences.length.toLowerCase()} preference`);
    if (primaryMatches.length) {
      return `This is a strong ${book.primaryGenre} match${details.length ? ` with ${formatList(details)}` : ""}.`;
    }
    if (details.length) return `This book matches ${formatList(details)}.`;
    return "This book is one of the closest choices in our collection.";
  }

  function coverTheme(book) {
    return [...book.genres[0]].reduce((total, character) => total + character.charCodeAt(0), 0) % 6;
  }

  function createBookCard(book, matchReason = "") {
    const article = document.createElement("article");
    article.className = "book-card";
    article.dataset.bookId = book.id;

    const cover = document.createElement("div");
    cover.className = `book-cover cover-theme-${coverTheme(book)}`;
    cover.setAttribute("aria-label", `Decorative placeholder cover for ${book.title}`);
    cover.innerHTML = `
      <span class="cover-genre">${book.primaryGenre}</span>
      <span class="cover-initial" aria-hidden="true">${book.title.charAt(0)}</span>
      <strong class="cover-title">${book.title}</strong>
      <span class="cover-author">${book.author}</span>
    `;

    const content = document.createElement("div");
    content.className = "book-content";

    const metadata = [
      `Length: ${book.length}`,
      `Genres: ${book.genres.slice(0, 3).join(", ")}`,
      `Audience: ${book.audiences.slice(0, 2).join(", ")}`,
      `Mood: ${book.moods.slice(0, 2).join(", ")}`
    ]
      .map((item) => `<span class="meta-pill">${item}</span>`)
      .join("");

    content.innerHTML = `
      <div class="book-label-row">
        <p class="book-type">${book.type}</p>
        <span class="primary-genre-badge">${book.primaryGenre}</span>
      </div>
      <h3>${book.title}</h3>
      <p class="book-author">by ${book.author}</p>
      <div class="book-meta" aria-label="Book details">${metadata}</div>
      <p class="book-description">${book.description}</p>
      ${matchReason ? `<p class="match-reason"><strong>Why it matches:</strong> ${matchReason}</p>` : ""}
      <div class="book-actions">
        <button class="button button-primary button-small" type="button" data-action="want" data-book-id="${book.id}">Add to Want to Read</button>
        <button class="button button-quiet button-small" type="button" data-action="current" data-book-id="${book.id}">Mark as Currently Reading</button>
        <button class="button button-secondary button-small" type="button" data-action="similar" data-book-id="${book.id}">Find Similar Books</button>
      </div>
    `;

    article.append(cover, content);
    return article;
  }

  function showResultsArea({ heading, intro, kicker, showClosest = false }) {
    elements.resultsHeading.textContent = heading;
    elements.resultsIntro.textContent = intro;
    elements.resultsKicker.textContent = kicker;
    elements.closestMessage.hidden = !showClosest;
    elements.results.hidden = false;
  }

  function renderRecommendations(recommendations, preferences, options = {}) {
    elements.resultsGrid.replaceChildren();
    elements.showMoreWrap.hidden = true;
    const {
      heading = "We found your next read!",
      intro = "These books match the interests and preferences you selected.",
      kicker = "Chosen for you",
      showClosest = false
    } = options;

    showResultsArea({ heading, intro, kicker, showClosest });
    recommendations.forEach((book) => {
      const reason = preferences ? buildMatchExplanation(book, preferences) : "";
      elements.resultsGrid.append(createBookCard(book, reason));
    });
  }

  function scrollToResults() {
    elements.results.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleRecommendationSubmit(event) {
    event.preventDefault();
    const preferences = collectQuizPreferences();
    if (!validatePreferences(preferences)) return;

    window.clearTimeout(recommendationTimer);
    elements.quizStatus.classList.add("is-loading");
    elements.quizStatus.textContent = "Searching our bookshelves for your perfect match…";
    elements.form.querySelector('button[type="submit"]').disabled = true;

    recommendationTimer = window.setTimeout(() => {
      const recommendations = recommendBooks(preferences);
      const showClosest = !recommendations.some((book) => isStrongMatch(book, preferences));
      renderRecommendations(recommendations, preferences, { showClosest });
      elements.quizStatus.textContent = "Your recommendations are ready.";
      elements.quizStatus.classList.remove("is-loading");
      elements.form.querySelector('button[type="submit"]').disabled = false;
      scrollToResults();
    }, 650);
  }

  function surpriseMe() {
    const audience = elements.form.elements.audience?.value || "";
    const candidates = audience && audience !== "All Ages"
      ? books.filter((book) => audienceMatches(book, audience))
      : books;
    const book = candidates[Math.floor(Math.random() * candidates.length)];
    renderRecommendations([book], null, {
      heading: "Here is your surprise recommendation!",
      intro: audience ? `A random pick suitable for ${audience.toLowerCase()}.` : "One unexpected pick from the NextRead shelves.",
      kicker: "A little serendipity"
    });
    scrollToResults();
  }

  function clearQuiz() {
    window.clearTimeout(recommendationTimer);
    elements.form.reset();
    ["audience", "type", "genre", "mood"].forEach((field) => setFieldError(field, ""));
    elements.genreCounter.textContent = "0 of 3 genres selected";
    elements.quizStatus.classList.remove("is-loading");
    elements.quizStatus.textContent = "Your choices have been cleared.";
    elements.form.querySelector('button[type="submit"]').disabled = false;
  }

  function enforceSelectionLimit(event, name, maximum, errorId, errorMessage) {
    if (!event.target.matches(`input[name="${name}"]`)) return;
    const selected = selectedValues(name);
    if (selected.length > maximum) {
      event.target.checked = false;
      document.querySelector(`#${errorId}`).textContent = errorMessage;
    } else {
      document.querySelector(`#${errorId}`).textContent = "";
    }
    if (name === "genres") {
      const count = selectedValues("genres").length;
      elements.genreCounter.textContent = `${count} of 3 genres selected`;
    }
  }

  function renderBrowseGenreResults(shouldScroll = true) {
    const visibleBooks = browseState.matches.slice(0, browseState.visibleCount);
    elements.resultsGrid.replaceChildren();
    showResultsArea({
      heading: `${browseState.genre} Books (${browseState.matches.length})`,
      intro: `Showing ${visibleBooks.length} of ${browseState.matches.length} books from our ${browseState.genre.toLowerCase()} shelf. Primary matches appear first.`,
      kicker: "Browse the collection"
    });
    visibleBooks.forEach((book) => elements.resultsGrid.append(createBookCard(book)));
    elements.showMoreWrap.hidden = browseState.visibleCount >= browseState.matches.length;
    if (shouldScroll) scrollToResults();
  }

  function filterBooksByGenre(genre) {
    const matches = books
      .filter((book) => book.genres.includes(genre))
      .sort((a, b) => Number(b.primaryGenre === genre) - Number(a.primaryGenre === genre) || a.title.localeCompare(b.title));
    browseState = { genre, matches, visibleCount: 6 };
    renderBrowseGenreResults();
  }

  function searchBooks(query) {
    elements.showMoreWrap.hidden = true;
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      elements.results.hidden = true;
      return;
    }
    const matches = books.filter((book) => {
      const searchable = [book.title, book.author, ...book.genres].join(" ").toLowerCase();
      return searchable.includes(normalizedQuery);
    }).slice(0, 6);

    elements.resultsGrid.replaceChildren();
    showResultsArea({
      heading: "Search Results",
      intro: matches.length
        ? `Showing books that match “${query.trim()}”.`
        : "We could not find a book matching your search.",
      kicker: "Search the shelves"
    });

    if (matches.length) {
      matches.forEach((book) => elements.resultsGrid.append(createBookCard(book)));
    } else {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "We could not find a book matching your search.";
      elements.resultsGrid.append(empty);
    }
  }

  function loadReadingList() {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey));
      if (!stored || typeof stored !== "object" || Array.isArray(stored)) return {};
      return Object.fromEntries(
        Object.entries(stored).filter(([id, status]) =>
          books.some((book) => book.id === id) && Object.hasOwn(statusLabels, status)
        )
      );
    } catch {
      return {};
    }
  }

  function saveReadingList() {
    localStorage.setItem(storageKey, JSON.stringify(readingList));
  }

  function announceReadingList(message) {
    elements.readingListStatus.textContent = "";
    window.requestAnimationFrame(() => {
      elements.readingListStatus.textContent = message;
    });
  }

  function updateBookStatus(bookId, status) {
    const book = books.find((item) => item.id === bookId);
    if (!book || !Object.hasOwn(statusLabels, status)) return;
    readingList[bookId] = status;
    saveReadingList();
    renderReadingList();
    announceReadingList(`${book.title} moved to ${statusLabels[status]}.`);
  }

  function removeFromReadingList(bookId) {
    const book = books.find((item) => item.id === bookId);
    if (!book || !readingList[bookId]) return;
    delete readingList[bookId];
    saveReadingList();
    renderReadingList();
    announceReadingList(`${book.title} was removed from your reading list.`);
  }

  function createReadingItem(book, status) {
    const item = document.createElement("article");
    item.className = "reading-item";
    const options = Object.entries(statusLabels)
      .map(([value, label]) => `<option value="${value}" ${value === status ? "selected" : ""}>${label}</option>`)
      .join("");
    item.innerHTML = `
      <h4>${book.title}</h4>
      <p>${book.author} · ${book.length}</p>
      <div class="reading-item-controls">
        <label class="sr-only" for="status-${book.id}">Reading status for ${book.title}</label>
        <select id="status-${book.id}" data-reading-status data-book-id="${book.id}">${options}</select>
        <button class="remove-book" type="button" data-remove-book="${book.id}">Remove</button>
      </div>
    `;
    return item;
  }

  function renderReadingList() {
    const containers = {
      want: document.querySelector("#want-list"),
      current: document.querySelector("#current-list"),
      finished: document.querySelector("#finished-list")
    };
    const grouped = { want: [], current: [], finished: [] };

    Object.entries(readingList).forEach(([bookId, status]) => {
      const book = books.find((item) => item.id === bookId);
      if (book && grouped[status]) grouped[status].push(book);
    });

    Object.keys(grouped).forEach((status) => {
      containers[status].replaceChildren();
      document.querySelector(`#${status}-count`).textContent = grouped[status].length;
      if (!grouped[status].length) {
        const empty = document.createElement("p");
        empty.className = "empty-state";
        empty.textContent = emptyMessages[status];
        containers[status].append(empty);
      } else {
        grouped[status].forEach((book) => containers[status].append(createReadingItem(book, status)));
      }
    });
  }

  function initializeFaqAccordion() {
    document.querySelectorAll(".faq-item button").forEach((button) => {
      button.addEventListener("click", () => {
        const answer = document.querySelector(`#${button.getAttribute("aria-controls")}`);
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        answer.hidden = expanded;
      });
    });
  }

  function initializeNavigation() {
    elements.navToggle.addEventListener("click", () => {
      const expanded = elements.navToggle.getAttribute("aria-expanded") === "true";
      elements.navToggle.setAttribute("aria-expanded", String(!expanded));
      elements.navLinks.classList.toggle("is-open", !expanded);
      document.body.classList.toggle("nav-open", !expanded);
    });

    elements.navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        elements.navToggle.setAttribute("aria-expanded", "false");
        elements.navLinks.classList.remove("is-open");
        document.body.classList.remove("nav-open");
      });
    });
  }

  function initializeEventListeners() {
    elements.form.addEventListener("submit", handleRecommendationSubmit);
    elements.form.addEventListener("change", (event) => {
      enforceSelectionLimit(event, "genres", 3, "genre-error", "You can select a maximum of three genres.");
      enforceSelectionLimit(event, "moods", 2, "mood-error", "You can select a maximum of two moods.");
    });
    document.querySelector("#clear-quiz").addEventListener("click", clearQuiz);
    document.querySelectorAll(".js-surprise").forEach((button) => button.addEventListener("click", surpriseMe));

    elements.browseGenres.addEventListener("click", (event) => {
      const button = event.target.closest("[data-genre]");
      if (button) filterBooksByGenre(button.dataset.genre);
    });

    elements.search.addEventListener("input", (event) => searchBooks(event.target.value));
    elements.showMoreButton.addEventListener("click", () => {
      browseState.visibleCount += 6;
      renderBrowseGenreResults(false);
    });

    document.addEventListener("click", (event) => {
      const actionButton = event.target.closest("[data-action]");
      if (actionButton) {
        const { action, bookId } = actionButton.dataset;
        if (action === "want" || action === "current") {
          updateBookStatus(bookId, action);
        } else if (action === "similar") {
          const book = books.find((item) => item.id === bookId);
          if (book) filterBooksByGenre(book.genres[0]);
        }
      }

      const removeButton = event.target.closest("[data-remove-book]");
      if (removeButton) removeFromReadingList(removeButton.dataset.removeBook);
    });

    document.querySelector("#reading-list").addEventListener("change", (event) => {
      if (event.target.matches("[data-reading-status]")) {
        updateBookStatus(event.target.dataset.bookId, event.target.value);
      }
    });
  }

  function initializeApp() {
    renderSingleChoiceOptions(elements.audienceOptions, config.audiences, "audience");
    renderSingleChoiceOptions(elements.typeOptions, config.types, "type");
    renderGenreOptions();
    renderMoodOptions();
    renderSingleChoiceOptions(elements.lengthOptions, config.lengths, "length");
    renderBrowseGenres();
    elements.libraryStats.textContent = `Explore ${books.length} books: ${books.filter((book) => book.type === "Fiction").length} fiction and ${books.filter((book) => book.type === "Nonfiction").length} nonfiction titles across ${config.genreGroups.flatMap((group) => group.genres).length} genres.`;
    renderReadingList();
    initializeFaqAccordion();
    initializeNavigation();
    initializeEventListeners();
  }

  initializeApp();
}());
