# NextRead

NextRead is a polished, responsive book recommendation website built with HTML, CSS, and vanilla JavaScript. Readers choose an audience, book type, genres, moods, and preferred length; NextRead scores a curated local library and suggests the strongest matches.

## Main features

- Five-question recommendation quiz with accessible validation
- Primary-genre-weighted scoring and varied top-three results
- Dynamic explanations based on actual matching preferences
- 547 unique, recognizable books spanning 39 configured genres
- Primary-first genre browsing with totals and six-at-a-time “Show More” results
- Search by title, author, or genre
- Audience-aware “Surprise Me” recommendations
- Persistent Want to Read, Currently Reading, and Finished lists
- CSS-generated covers with no copyrighted cover images
- Accessible FAQ accordion, mobile navigation, and responsive layouts

## File structure

```text
nextread/
├── index.html   # Semantic page structure and content
├── styles.css   # Design system, layout, and responsive styles
├── books.js     # Configuration, expanded library, and validation
├── app.js       # Quiz, scoring, browse, search, and reading-list logic
└── README.md    # Project documentation
```

## How to run

No installation, server, dependency, or build step is required.

1. Open the `nextread` folder.
2. Double-click `index.html` or open it in a modern browser.
3. Complete the quiz, browse a genre, search the collection, or choose “Surprise Me.”

The project works directly from local files and does not require an internet connection.

## Expanded library organization

`books.js` keeps four kinds of data together:

1. Configuration arrays for audiences, book types, grouped genres, moods, and length categories.
2. A `book()` helper that produces consistently structured book objects.
3. A protected 92-book base collection plus an additive supplemental catalog, producing 547 fiction and nonfiction titles.
4. `validateBookLibrary()`, a reusable development validator.

The current collection contains 274 fiction and 273 nonfiction books. It preserves the complete 92-book base library, restores every protected title from the earlier version, and exceeds the 350-book requirement.

### Why `primaryGenre` exists

Every book has one `primaryGenre`. It must match the first item in the book’s `genres` array and represents the genre most central to that title.

Primary genres are used to:

- Award a stronger quiz score than secondary genres.
- Place the most relevant books first when browsing a genre.
- Generate clearer match explanations.
- Show a primary-genre badge on result cards.

### Genre coverage rules

For every configured genre, the library guarantees:

- Its individual updated minimum is met; required totals range from 12 to 22 books.
- At least five books use the genre as their `primaryGenre`.
- Browse Genres always returns a substantial, primary-first result set.
- Quiz recommendations have several meaningful primary matches available.

Genres must be genuinely central to each tagged book. Unrelated tags must not be added merely to satisfy a count.

## Recommendation scoring

Each book receives:

- Reader category match: **+4**
- Book type match: **+3**
- Selected genre matching `primaryGenre`: **+6**
- Each selected secondary genre match: **+4**
- Each matching mood: **+2**
- Length match: **+2**

A selected genre receives either the primary score or the secondary score, never both. “Either” and “No Preference” remain neutral. Ties are randomized, while the selection step favors different primary genres and authors when similarly scored alternatives exist. A single-genre quiz normally includes at least one book with that primary genre.

## Book object example

```js
{
  id: "the-hobbit",
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  type: "Fiction",
  primaryGenre: "Adventure",
  genres: ["Adventure", "Fantasy"],
  audiences: ["Children", "Middle Grade", "Teenagers", "Young Adults", "Adults", "All Ages"],
  moods: ["Adventurous", "Exciting", "Hopeful"],
  length: "Standard Read",
  description: "A comfort-loving hobbit discovers courage on a quest through a perilous world.",
  classicOrModern: "Classic",
  seriesType: "Standalone"
}
```

Descriptions must be original and spoiler-free. Exact page counts are intentionally not stored because editions vary. Only `Quick Read`, `Standard Read`, `Long Read`, and `Epic Read` are valid book lengths. Real cover images are not included; the interface creates decorative covers with CSS.

## How to add a book safely

1. Add one `book(...)` entry to the `books` array in `books.js`.
2. Give it a unique ID and a real title and author.
3. Use only `Fiction` or `Nonfiction` for `type`.
4. Choose one to four configured genres.
5. Set `primaryGenre` to the first genre in the array.
6. Add at least one valid audience and one to four valid moods.
7. Use a supported general length category.
8. Write an original, spoiler-free description.
9. Reload the page and run `validateBookLibrary()` in the browser console.

## Running library validation

`books.js` runs validation automatically during development. You can run it again from the browser console:

```js
validateBookLibrary()
```

A valid library logs:

```text
All previous books were preserved and the expanded NextRead library passed validation.
```

The returned object includes `valid`, `warnings`, and generated `stats`. To check a specific genre after adding or changing a book:

```js
validateBookLibrary().stats.genreCoverage["Poetry"]
```

The result reports:

- `total`: every book carrying the genre
- `required`: the configured minimum for that genre
- `total`: every unique book carrying the genre
- `primary`: books using it as `primaryGenre`
- `uniqueAuthors`: distinct authors represented
- `pass`: whether the total and five-primary requirements are both met

Validation also prints a `console.table()` report for all genres, plus original, added, final, fiction, nonfiction, audience, mood, and length totals.

## Protected-book preservation

Before the large additive expansion, the 92 existing IDs were captured in `originalBookIds`. Nine required titles found in the earlier project version were restored using their original IDs. `previouslyRequiredBookIds` combines both protected sets.

Run the preservation check independently with:

```js
validateOriginalBooksWerePreserved()
```

The expanded validator fails if any protected ID disappears. New titles are deduplicated by ID and title-author combination, so cross-genre books remain single records with up to four accurate genres.

## localStorage

The reading list is saved under `nextread-reading-list-v1`. It maps each saved book ID to `want`, `current`, or `finished`, and is restored when the page reloads. Clearing browser storage also clears the list.

## Future feature roadmap

These features are intentionally not implemented in this version:

- User accounts
- Cloud database
- Real book-cover images
- Open Library or Google Books API
- User ratings and reviews
- Reading progress by page
- Advanced content filters
- Dark mode
- AI-generated recommendations
- Social book clubs
- Teacher and student accounts
- Administrative book-management dashboard
