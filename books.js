(function () {
  "use strict";

  const fictionGenres = [
    "Action", "Adventure", "Contemporary Fiction", "Crime", "Drama", "Dystopian",
    "Fantasy", "Historical Fiction", "Horror", "Magical Realism", "Mystery",
    "Romance", "Science Fiction", "Thriller", "Young Adult"
  ];

  const nonfictionGenres = [
    "Biography and Autobiography", "Business and Entrepreneurship", "Education",
    "Finance", "Health and Wellness", "History", "Memoir", "Philosophy",
    "Psychology", "Science", "Self-Improvement", "Technology", "Travel", "True Crime"
  ];

  const additionalGenres = [
    "Essays", "Graphic Novels and Comics", "Humor and Comedy", "Poetry",
    "Politics", "Religion and Spirituality", "Short Stories", "Sports",
    "Survival", "War"
  ];

  const config = {
    audiences: ["Children", "Middle Grade", "Teenagers", "Young Adults", "Adults", "All Ages"],
    types: ["Fiction", "Nonfiction", "Either"],
    genreGroups: [
      { label: "Fiction genres", genres: fictionGenres },
      { label: "Nonfiction genres", genres: nonfictionGenres },
      { label: "Additional genres and formats", genres: additionalGenres }
    ],
    moods: [
      "Adventurous", "Dark", "Emotional", "Exciting", "Funny", "Hopeful",
      "Inspiring", "Mysterious", "Relaxing", "Romantic", "Suspenseful",
      "Thought-provoking"
    ],
    lengths: [
      { label: "Quick Read", description: "Usually fewer than 200 pages." },
      { label: "Standard Read", description: "Usually between 200 and 400 pages." },
      { label: "Long Read", description: "Usually between 400 and 600 pages." },
      { label: "Epic Read", description: "Usually more than 600 pages." },
      { label: "No Preference", description: "Any book length is fine." }
    ]
  };

  function book(id, title, author, type, genres, audiences, moods, length, description, classicOrModern, seriesType) {
    return { id, title, author, type, genres, audiences, moods, length, description, classicOrModern, seriesType };
  }

  const books = [
    book("the-hobbit", "The Hobbit", "J.R.R. Tolkien", "Fiction", ["Fantasy", "Adventure"], ["Middle Grade", "Teenagers", "Young Adults", "Adults"], ["Adventurous", "Exciting", "Hopeful"], "Standard Read", "A comfort-loving hobbit is swept into a perilous quest filled with riddles, treasure, and unexpected courage.", "Classic", "Series"),
    book("harry-potter-philosophers-stone", "Harry Potter and the Philosopher’s Stone", "J.K. Rowling", "Fiction", ["Fantasy", "Adventure", "Young Adult"], ["Middle Grade", "Teenagers", "Young Adults"], ["Adventurous", "Mysterious", "Exciting"], "Standard Read", "An overlooked boy discovers a hidden magical world, new friends, and a mystery rooted in his own past.", "Modern", "Series"),
    book("the-hunger-games", "The Hunger Games", "Suzanne Collins", "Fiction", ["Dystopian", "Action", "Young Adult"], ["Teenagers", "Young Adults", "Adults"], ["Dark", "Exciting", "Suspenseful"], "Standard Read", "A resourceful teenager is forced into a brutal televised contest and must decide what survival will cost.", "Modern", "Series"),
    book("the-martian", "The Martian", "Andy Weir", "Fiction", ["Science Fiction", "Survival", "Adventure"], ["Young Adults", "Adults"], ["Exciting", "Funny", "Hopeful"], "Standard Read", "Stranded on Mars, an ingenious astronaut relies on science, humor, and stubborn optimism to stay alive.", "Modern", "Standalone"),
    book("project-hail-mary", "Project Hail Mary", "Andy Weir", "Fiction", ["Science Fiction", "Adventure", "Mystery"], ["Young Adults", "Adults"], ["Exciting", "Mysterious", "Hopeful"], "Long Read", "A lone astronaut awakens far from Earth and pieces together a mission that may determine humanity’s future.", "Modern", "Standalone"),
    book("a-wrinkle-in-time", "A Wrinkle in Time", "Madeleine L’Engle", "Fiction", ["Science Fiction", "Fantasy", "Adventure"], ["Children", "Middle Grade", "Teenagers"], ["Adventurous", "Mysterious", "Hopeful"], "Quick Read", "Three young travelers cross strange worlds to rescue a missing father and confront a force of conformity.", "Classic", "Series"),
    book("the-giver", "The Giver", "Lois Lowry", "Fiction", ["Dystopian", "Science Fiction", "Young Adult"], ["Middle Grade", "Teenagers", "Young Adults"], ["Dark", "Emotional", "Thought-provoking"], "Quick Read", "A boy in an orderly society inherits memories that reveal the painful truth behind his community’s calm.", "Modern", "Series"),
    book("wonder", "Wonder", "R.J. Palacio", "Fiction", ["Contemporary Fiction", "Drama", "Young Adult"], ["Middle Grade", "Teenagers", "All Ages"], ["Emotional", "Hopeful", "Inspiring"], "Standard Read", "A child attending school for the first time changes the people around him through courage and everyday kindness.", "Modern", "Standalone"),
    book("holes", "Holes", "Louis Sachar", "Fiction", ["Adventure", "Mystery", "Young Adult"], ["Middle Grade", "Teenagers"], ["Funny", "Mysterious", "Hopeful"], "Standard Read", "At a desert camp, a boy digs holes, uncovers an old family story, and finds that coincidences have roots.", "Modern", "Standalone"),
    book("the-lightning-thief", "The Lightning Thief", "Rick Riordan", "Fiction", ["Fantasy", "Adventure", "Young Adult"], ["Middle Grade", "Teenagers"], ["Adventurous", "Funny", "Exciting"], "Standard Read", "A boy who never quite fits in discovers his mythic heritage and races across America on a dangerous quest.", "Modern", "Series"),
    book("the-maze-runner", "The Maze Runner", "James Dashner", "Fiction", ["Dystopian", "Action", "Mystery"], ["Teenagers", "Young Adults"], ["Dark", "Mysterious", "Suspenseful"], "Standard Read", "A teenager wakes without memories inside a shifting maze where escape depends on cooperation and nerve.", "Modern", "Series"),
    book("one-of-us-is-lying", "One of Us Is Lying", "Karen M. McManus", "Fiction", ["Mystery", "Thriller", "Young Adult"], ["Teenagers", "Young Adults"], ["Mysterious", "Suspenseful", "Dark"], "Standard Read", "Five students enter detention, but only four leave, and every survivor has a secret worth protecting.", "Modern", "Series"),
    book("hound-baskervilles", "The Hound of the Baskervilles", "Arthur Conan Doyle", "Fiction", ["Mystery", "Crime", "Horror"], ["Teenagers", "Young Adults", "Adults"], ["Mysterious", "Dark", "Suspenseful"], "Quick Read", "A legendary hound, a lonely moor, and a family curse test a famous detective’s faith in reason.", "Classic", "Series"),
    book("murder-orient-express", "Murder on the Orient Express", "Agatha Christie", "Fiction", ["Mystery", "Crime", "Thriller"], ["Young Adults", "Adults"], ["Mysterious", "Suspenseful", "Thought-provoking"], "Standard Read", "A snowbound luxury train becomes a locked-room puzzle when a passenger is found dead overnight.", "Classic", "Series"),
    book("pride-prejudice", "Pride and Prejudice", "Jane Austen", "Fiction", ["Romance", "Drama", "Humor and Comedy"], ["Young Adults", "Adults"], ["Romantic", "Funny", "Thought-provoking"], "Standard Read", "Sharp first impressions and social expectations complicate a spirited young woman’s path toward understanding.", "Classic", "Standalone"),
    book("little-women", "Little Women", "Louisa May Alcott", "Fiction", ["Historical Fiction", "Drama", "Romance"], ["Teenagers", "Young Adults", "Adults"], ["Emotional", "Hopeful", "Inspiring"], "Long Read", "Four sisters grow through ambition, loss, creativity, and love while building lives true to themselves.", "Classic", "Standalone"),
    book("the-book-thief", "The Book Thief", "Markus Zusak", "Fiction", ["Historical Fiction", "War", "Young Adult"], ["Teenagers", "Young Adults", "Adults"], ["Dark", "Emotional", "Thought-provoking"], "Long Read", "In wartime Germany, a young reader steals books and finds refuge in words amid danger and grief.", "Modern", "Standalone"),
    book("the-night-circus", "The Night Circus", "Erin Morgenstern", "Fiction", ["Fantasy", "Magical Realism", "Romance"], ["Young Adults", "Adults"], ["Mysterious", "Romantic", "Thought-provoking"], "Long Read", "A nocturnal circus becomes the stage for a lifelong magical contest between two gifted illusionists.", "Modern", "Standalone"),
    book("coraline", "Coraline", "Neil Gaiman", "Fiction", ["Horror", "Fantasy", "Adventure"], ["Middle Grade", "Teenagers", "Young Adults"], ["Dark", "Mysterious", "Adventurous"], "Quick Read", "A curious girl opens a forbidden door to a charming copy of home that hides a hungry danger.", "Modern", "Standalone"),
    book("the-alchemist", "The Alchemist", "Paulo Coelho", "Fiction", ["Magical Realism", "Adventure", "Philosophy"], ["Teenagers", "Young Adults", "Adults"], ["Inspiring", "Hopeful", "Thought-provoking"], "Quick Read", "A shepherd follows a recurring dream across the desert and learns to notice the language of purpose.", "Modern", "Standalone"),
    book("diary-wimpy-kid", "Diary of a Wimpy Kid", "Jeff Kinney", "Fiction", ["Humor and Comedy", "Graphic Novels and Comics", "Young Adult"], ["Children", "Middle Grade"], ["Funny", "Relaxing"], "Standard Read", "A middle-schooler records friendship mishaps, family chaos, and his highly selective version of events.", "Modern", "Series"),
    book("smile", "Smile", "Raina Telgemeier", "Fiction", ["Graphic Novels and Comics", "Memoir", "Young Adult"], ["Children", "Middle Grade", "Teenagers"], ["Funny", "Emotional", "Hopeful"], "Standard Read", "A dental accident adds another challenge to the awkward, funny, and deeply familiar years of middle school.", "Modern", "Standalone"),
    book("atomic-habits", "Atomic Habits", "James Clear", "Nonfiction", ["Self-Improvement", "Psychology", "Health and Wellness"], ["Young Adults", "Adults"], ["Inspiring", "Hopeful", "Thought-provoking"], "Standard Read", "A practical exploration of how tiny repeated choices can reshape routines, environments, and long-term outcomes.", "Modern", "Standalone"),
    book("psychology-money", "The Psychology of Money", "Morgan Housel", "Nonfiction", ["Finance", "Psychology", "Essays"], ["Young Adults", "Adults"], ["Thought-provoking", "Inspiring"], "Standard Read", "Short lessons examine why behavior and personal history matter as much as numbers in financial decisions.", "Modern", "Standalone"),
    book("educated", "Educated", "Tara Westover", "Nonfiction", ["Memoir", "Education", "Biography and Autobiography"], ["Young Adults", "Adults"], ["Emotional", "Inspiring", "Thought-provoking"], "Standard Read", "A woman raised far from formal schooling recounts how education transformed her world and tested family bonds.", "Modern", "Standalone"),
    book("becoming", "Becoming", "Michelle Obama", "Nonfiction", ["Memoir", "Biography and Autobiography", "Politics"], ["Teenagers", "Young Adults", "Adults"], ["Inspiring", "Hopeful", "Emotional"], "Long Read", "A reflective life story traces family, work, public service, and the ongoing process of defining one’s voice.", "Modern", "Standalone"),
    book("steve-jobs", "Steve Jobs", "Walter Isaacson", "Nonfiction", ["Biography and Autobiography", "Technology", "Business and Entrepreneurship"], ["Young Adults", "Adults"], ["Inspiring", "Thought-provoking"], "Epic Read", "A detailed portrait examines the intensity, imagination, contradictions, and influence of a technology entrepreneur.", "Modern", "Standalone"),
    book("sapiens", "Sapiens", "Yuval Noah Harari", "Nonfiction", ["History", "Science", "Philosophy"], ["Young Adults", "Adults"], ["Thought-provoking", "Inspiring"], "Long Read", "A broad survey connects biology, culture, belief, and power across the long arc of human history.", "Modern", "Standalone"),
    book("brief-history-time", "A Brief History of Time", "Stephen Hawking", "Nonfiction", ["Science", "Education", "Philosophy"], ["Young Adults", "Adults"], ["Thought-provoking", "Inspiring", "Mysterious"], "Standard Read", "An accessible journey through space, time, black holes, and the questions at the edge of cosmology.", "Modern", "Standalone"),
    book("diary-young-girl", "The Diary of a Young Girl", "Anne Frank", "Nonfiction", ["Memoir", "History", "War"], ["Teenagers", "Young Adults", "Adults"], ["Emotional", "Dark", "Hopeful"], "Standard Read", "A young writer records daily life, fear, hope, and growing self-knowledge while hiding during wartime.", "Classic", "Standalone"),
    book("into-the-wild", "Into the Wild", "Jon Krakauer", "Nonfiction", ["Biography and Autobiography", "Travel", "Survival"], ["Young Adults", "Adults"], ["Adventurous", "Dark", "Thought-provoking"], "Standard Read", "An investigation follows an idealistic traveler into the Alaskan wilderness and considers the choices that led there.", "Modern", "Standalone"),
    book("born-a-crime", "Born a Crime", "Trevor Noah", "Nonfiction", ["Memoir", "Humor and Comedy", "History"], ["Teenagers", "Young Adults", "Adults"], ["Funny", "Emotional", "Inspiring"], "Standard Read", "Comic and candid stories reveal a childhood shaped by apartheid, resourcefulness, and a formidable mother.", "Modern", "Standalone"),
    book("shoe-dog", "Shoe Dog", "Phil Knight", "Nonfiction", ["Business and Entrepreneurship", "Memoir", "Sports"], ["Young Adults", "Adults"], ["Inspiring", "Exciting", "Thought-provoking"], "Long Read", "An entrepreneur looks back on uncertain early years, risky decisions, and the people who built a global company.", "Modern", "Standalone"),
    book("seven-habits", "The 7 Habits of Highly Effective People", "Stephen R. Covey", "Nonfiction", ["Self-Improvement", "Business and Entrepreneurship", "Psychology"], ["Young Adults", "Adults"], ["Inspiring", "Thought-provoking", "Hopeful"], "Long Read", "A principles-focused framework invites readers to align daily actions with priorities, relationships, and purpose.", "Modern", "Standalone"),
    book("henrietta-lacks", "The Immortal Life of Henrietta Lacks", "Rebecca Skloot", "Nonfiction", ["Science", "Biography and Autobiography", "Health and Wellness"], ["Young Adults", "Adults"], ["Emotional", "Thought-provoking", "Inspiring"], "Long Read", "Science and family history meet in an account of cells that changed medicine without their donor’s knowledge.", "Modern", "Standalone"),
    book("mans-search-meaning", "Man’s Search for Meaning", "Viktor E. Frankl", "Nonfiction", ["Psychology", "Philosophy", "Memoir"], ["Young Adults", "Adults"], ["Dark", "Inspiring", "Thought-provoking"], "Quick Read", "A psychiatrist reflects on suffering, responsibility, and the human capacity to seek meaning in extreme conditions.", "Classic", "Standalone"),
    book("boys-in-boat", "The Boys in the Boat", "Daniel James Brown", "Nonfiction", ["Sports", "History", "Biography and Autobiography"], ["Teenagers", "Young Adults", "Adults"], ["Inspiring", "Exciting", "Hopeful"], "Long Read", "Nine rowers from working-class backgrounds chase an unlikely Olympic victory through discipline and trust.", "Modern", "Standalone"),
    book("in-cold-blood", "In Cold Blood", "Truman Capote", "Nonfiction", ["True Crime", "Crime", "History"], ["Young Adults", "Adults"], ["Dark", "Suspenseful", "Thought-provoking"], "Standard Read", "A carefully reported account examines a rural crime, its aftermath, and the people caught in its widening shadow.", "Classic", "Standalone"),
    book("the-poet-x", "The Poet X", "Elizabeth Acevedo", "Fiction", ["Poetry", "Young Adult", "Contemporary Fiction"], ["Teenagers", "Young Adults"], ["Emotional", "Inspiring", "Hopeful"], "Quick Read", "A teenager finds room for her questions, anger, and growing confidence through the poems she writes in secret.", "Modern", "Standalone"),
    book("siddhartha", "Siddhartha", "Hermann Hesse", "Fiction", ["Religion and Spirituality", "Philosophy", "Historical Fiction"], ["Young Adults", "Adults"], ["Thought-provoking", "Inspiring", "Relaxing"], "Quick Read", "A restless seeker moves through study, pleasure, loss, and quiet attention while looking for an authentic path.", "Classic", "Standalone"),
    book("interpreter-maladies", "Interpreter of Maladies", "Jhumpa Lahiri", "Fiction", ["Short Stories", "Contemporary Fiction", "Drama"], ["Young Adults", "Adults"], ["Emotional", "Thought-provoking", "Relaxing"], "Standard Read", "Linked by longing and cultural distance, these intimate stories follow people navigating family, love, and belonging.", "Modern", "Standalone")
  ];

  window.NextReadData = Object.freeze({ config, books });
}());
