(function () {
  "use strict";

  const fictionGenres = [
    "Action", "Adventure", "Contemporary Fiction", "Crime", "Drama", "Dystopian", "Fantasy",
    "Historical Fiction", "Horror", "Magical Realism", "Mystery", "Romance", "Science Fiction", "Thriller", "Young Adult"
  ];
  const nonfictionGenres = [
    "Biography and Autobiography", "Business and Entrepreneurship", "Education", "Finance", "Health and Wellness",
    "History", "Memoir", "Philosophy", "Psychology", "Science", "Self-Improvement", "Technology", "Travel", "True Crime"
  ];
  const additionalGenres = [
    "Essays", "Graphic Novels and Comics", "Humor and Comedy", "Poetry", "Politics",
    "Religion and Spirituality", "Short Stories", "Sports", "Survival", "War"
  ];
  const config = {
    audiences: ["Children", "Middle Grade", "Teenagers", "Young Adults", "Adults", "All Ages"],
    types: ["Fiction", "Nonfiction", "Either"],
    genreGroups: [
      { label: "Fiction genres", genres: fictionGenres },
      { label: "Nonfiction genres", genres: nonfictionGenres },
      { label: "Additional genres and formats", genres: additionalGenres }
    ],
    moods: ["Adventurous", "Dark", "Emotional", "Exciting", "Funny", "Hopeful", "Inspiring", "Mysterious", "Relaxing", "Romantic", "Suspenseful", "Thought-provoking"],
    lengths: [
      { label: "Quick Read", description: "Usually fewer than 200 pages." },
      { label: "Standard Read", description: "Usually between 200 and 400 pages." },
      { label: "Long Read", description: "Usually between 400 and 600 pages." },
      { label: "Epic Read", description: "Usually more than 600 pages." },
      { label: "No Preference", description: "Any book length is fine." }
    ]
  };

  function book(id, title, author, type, primaryGenre, genres, audiences, moods, length, description, classicOrModern, seriesType) {
    return { id, title, author, type, primaryGenre, genres, audiences, moods, length, description, classicOrModern, seriesType };
  }

  const books = [
    book("bourne-identity", "The Bourne Identity", "Robert Ludlum", "Fiction", "Action", ["Action", "Thriller", "Mystery"], ["Young Adults", "Adults"], ["Exciting", "Suspenseful", "Mysterious"], "Long Read", "An amnesiac survivor races to uncover his identity while trained enemies close in.", "Modern", "Series"),
    book("three-musketeers", "The Three Musketeers", "Alexandre Dumas", "Fiction", "Action", ["Action", "Adventure", "Historical Fiction"], ["Teenagers", "Young Adults", "Adults"], ["Adventurous", "Exciting", "Funny"], "Long Read", "An ambitious swordsman joins three loyal friends amid duels, intrigue, and royal danger.", "Classic", "Series"),
    book("treasure-island", "Treasure Island", "Robert Louis Stevenson", "Fiction", "Adventure", ["Adventure", "Action", "Survival"], ["Children", "Middle Grade", "Teenagers", "All Ages"], ["Adventurous", "Exciting", "Suspenseful"], "Standard Read", "A mysterious map draws a young traveler into mutiny, danger, and buried treasure.", "Classic", "Standalone"),
    book("the-hobbit", "The Hobbit", "J.R.R. Tolkien", "Fiction", "Adventure", ["Adventure", "Fantasy"], ["Children", "Middle Grade", "Teenagers", "Young Adults", "Adults", "All Ages"], ["Adventurous", "Exciting", "Hopeful"], "Standard Read", "A comfort-loving hobbit discovers courage on a quest through a perilous world.", "Classic", "Standalone"),
    book("a-man-called-ove", "A Man Called Ove", "Fredrik Backman", "Fiction", "Contemporary Fiction", ["Contemporary Fiction", "Drama", "Humor and Comedy"], ["Young Adults", "Adults"], ["Funny", "Emotional", "Hopeful"], "Standard Read", "A rigid widower finds his carefully ordered life disrupted by persistent new neighbors.", "Modern", "Standalone"),
    book("fault-in-our-stars", "The Fault in Our Stars", "John Green", "Fiction", "Contemporary Fiction", ["Contemporary Fiction", "Romance", "Young Adult"], ["Teenagers", "Young Adults", "Adults"], ["Emotional", "Romantic", "Hopeful"], "Standard Read", "Two sharp-witted teenagers form a tender connection while facing uncertain futures.", "Modern", "Standalone"),
    book("the-godfather", "The Godfather", "Mario Puzo", "Fiction", "Crime", ["Crime", "Drama", "Thriller"], ["Adults"], ["Dark", "Suspenseful", "Thought-provoking"], "Long Read", "A powerful family navigates loyalty, ambition, and the hidden costs of influence.", "Modern", "Series"),
    book("the-big-sleep", "The Big Sleep", "Raymond Chandler", "Fiction", "Crime", ["Crime", "Mystery", "Thriller"], ["Young Adults", "Adults"], ["Mysterious", "Dark", "Suspenseful"], "Standard Read", "A private detective enters a wealthy household where every secret opens another trap.", "Classic", "Series"),
    book("little-fires-everywhere", "Little Fires Everywhere", "Celeste Ng", "Fiction", "Drama", ["Drama", "Contemporary Fiction", "Mystery"], ["Young Adults", "Adults"], ["Emotional", "Thought-provoking", "Suspenseful"], "Standard Read", "Two families collide as questions of motherhood and belonging unsettle a planned community.", "Modern", "Standalone"),
    book("kite-runner", "The Kite Runner", "Khaled Hosseini", "Fiction", "Drama", ["Drama", "Historical Fiction"], ["Young Adults", "Adults"], ["Emotional", "Dark", "Hopeful"], "Long Read", "A man revisits a childhood friendship and searches for a path toward redemption.", "Modern", "Standalone"),
    book("the-hunger-games", "The Hunger Games", "Suzanne Collins", "Fiction", "Dystopian", ["Dystopian", "Action", "Young Adult"], ["Teenagers", "Young Adults", "Adults"], ["Dark", "Exciting", "Suspenseful"], "Standard Read", "A resourceful teenager challenges a brutal spectacle designed to enforce obedience.", "Modern", "Series"),
    book("nineteen-eighty-four", "1984", "George Orwell", "Fiction", "Dystopian", ["Dystopian", "Science Fiction", "Politics"], ["Young Adults", "Adults"], ["Dark", "Suspenseful", "Thought-provoking"], "Standard Read", "An ordinary worker begins questioning a society built on surveillance and controlled truth.", "Classic", "Standalone"),
    book("the-giver", "The Giver", "Lois Lowry", "Fiction", "Dystopian", ["Dystopian", "Young Adult", "Science Fiction"], ["Children", "Middle Grade", "Teenagers", "Young Adults"], ["Dark", "Emotional", "Thought-provoking"], "Quick Read", "A boy inherits memories that reveal the cost of his community's perfect calm.", "Modern", "Series"),
    book("harry-potter-philosophers-stone", "Harry Potter and the Philosopher’s Stone", "J.K. Rowling", "Fiction", "Fantasy", ["Fantasy", "Adventure", "Young Adult"], ["Children", "Middle Grade", "Teenagers", "Young Adults", "All Ages"], ["Adventurous", "Mysterious", "Exciting"], "Standard Read", "An overlooked boy discovers a magical school, loyal friends, and a hidden danger.", "Modern", "Series"),
    book("lion-witch-wardrobe", "The Lion, the Witch and the Wardrobe", "C.S. Lewis", "Fiction", "Fantasy", ["Fantasy", "Adventure"], ["Children", "Middle Grade", "Teenagers", "All Ages"], ["Adventurous", "Hopeful", "Exciting"], "Quick Read", "Four siblings enter a frozen kingdom and join its struggle for renewal.", "Classic", "Series"),
    book("the-book-thief", "The Book Thief", "Markus Zusak", "Fiction", "Historical Fiction", ["Historical Fiction", "War", "Young Adult"], ["Teenagers", "Young Adults", "Adults"], ["Dark", "Emotional", "Thought-provoking"], "Long Read", "A young reader finds refuge in stolen words during wartime Germany.", "Modern", "Standalone"),
    book("all-light-cannot-see", "All the Light We Cannot See", "Anthony Doerr", "Fiction", "Historical Fiction", ["Historical Fiction", "War", "Drama"], ["Young Adults", "Adults"], ["Emotional", "Hopeful", "Thought-provoking"], "Long Read", "Two young lives move toward one another across the devastation of occupied Europe.", "Modern", "Standalone"),
    book("coraline", "Coraline", "Neil Gaiman", "Fiction", "Horror", ["Horror", "Fantasy", "Adventure"], ["Children", "Middle Grade", "Teenagers", "Young Adults", "All Ages"], ["Dark", "Mysterious", "Adventurous"], "Quick Read", "A curious girl opens a forbidden door to a charming but dangerous copy of home.", "Modern", "Standalone"),
    book("haunting-hill-house", "The Haunting of Hill House", "Shirley Jackson", "Fiction", "Horror", ["Horror", "Mystery", "Drama"], ["Young Adults", "Adults"], ["Dark", "Mysterious", "Suspenseful"], "Standard Read", "Four visitors investigate an isolated house whose unsettling influence steadily deepens.", "Classic", "Standalone"),
    book("frankenstein", "Frankenstein", "Mary Shelley", "Fiction", "Horror", ["Horror", "Science Fiction", "Drama"], ["Teenagers", "Young Adults", "Adults"], ["Dark", "Emotional", "Thought-provoking"], "Standard Read", "A brilliant experiment forces its creator to confront responsibility, loneliness, and consequence.", "Classic", "Standalone"),
    book("one-hundred-years-solitude", "One Hundred Years of Solitude", "Gabriel García Márquez", "Fiction", "Magical Realism", ["Magical Realism", "Historical Fiction", "Drama"], ["Young Adults", "Adults"], ["Mysterious", "Emotional", "Thought-provoking"], "Long Read", "Generations of one family repeat dreams and mistakes in an extraordinary town.", "Modern", "Standalone"),
    book("like-water-chocolate", "Like Water for Chocolate", "Laura Esquivel", "Fiction", "Magical Realism", ["Magical Realism", "Romance", "Historical Fiction"], ["Young Adults", "Adults"], ["Romantic", "Emotional", "Mysterious"], "Standard Read", "A gifted cook pours forbidden feelings into meals with remarkable effects.", "Modern", "Standalone"),
    book("house-of-spirits", "The House of the Spirits", "Isabel Allende", "Fiction", "Magical Realism", ["Magical Realism", "Historical Fiction", "Drama"], ["Young Adults", "Adults"], ["Emotional", "Mysterious", "Thought-provoking"], "Long Read", "A family's passions and secrets unfold alongside decades of political upheaval.", "Modern", "Standalone"),
    book("murder-orient-express", "Murder on the Orient Express", "Agatha Christie", "Fiction", "Mystery", ["Mystery", "Crime", "Thriller"], ["Teenagers", "Young Adults", "Adults"], ["Mysterious", "Suspenseful", "Thought-provoking"], "Standard Read", "A snowbound luxury train becomes an elegant puzzle after a passenger dies.", "Classic", "Series"),
    book("hound-baskervilles", "The Hound of the Baskervilles", "Arthur Conan Doyle", "Fiction", "Mystery", ["Mystery", "Crime", "Horror"], ["Teenagers", "Young Adults", "Adults"], ["Mysterious", "Dark", "Suspenseful"], "Quick Read", "A family legend and a lonely moor challenge a detective's faith in reason.", "Classic", "Series"),    book("pride-prejudice", "Pride and Prejudice", "Jane Austen", "Fiction", "Romance", ["Romance", "Drama", "Humor and Comedy"], ["Teenagers", "Young Adults", "Adults"], ["Romantic", "Funny", "Thought-provoking"], "Standard Read", "Sharp first impressions complicate a spirited woman's path toward understanding and love.", "Classic", "Standalone"),
    book("the-flatshare", "The Flatshare", "Beth O’Leary", "Fiction", "Romance", ["Romance", "Contemporary Fiction", "Humor and Comedy"], ["Young Adults", "Adults"], ["Romantic", "Funny", "Hopeful"], "Standard Read", "Two strangers share one apartment on opposite schedules and communicate through notes.", "Modern", "Standalone"),
    book("the-martian", "The Martian", "Andy Weir", "Fiction", "Science Fiction", ["Science Fiction", "Survival", "Adventure"], ["Teenagers", "Young Adults", "Adults"], ["Exciting", "Funny", "Hopeful"], "Standard Read", "A stranded astronaut uses science, humor, and persistence to survive on Mars.", "Modern", "Standalone"),
    book("project-hail-mary", "Project Hail Mary", "Andy Weir", "Fiction", "Science Fiction", ["Science Fiction", "Adventure", "Mystery"], ["Young Adults", "Adults"], ["Exciting", "Mysterious", "Hopeful"], "Long Read", "A lone astronaut pieces together a mission that may determine humanity's future.", "Modern", "Standalone"),
    book("dune", "Dune", "Frank Herbert", "Fiction", "Science Fiction", ["Science Fiction", "Adventure", "Politics"], ["Teenagers", "Young Adults", "Adults"], ["Adventurous", "Mysterious", "Thought-provoking"], "Epic Read", "A young heir enters a desert world shaped by ecology, prophecy, and power.", "Classic", "Series"),
    book("gone-girl", "Gone Girl", "Gillian Flynn", "Fiction", "Thriller", ["Thriller", "Mystery", "Crime"], ["Adults"], ["Dark", "Mysterious", "Suspenseful"], "Long Read", "A marriage becomes a public mystery when one partner suddenly disappears.", "Modern", "Standalone"),
    book("silent-patient", "The Silent Patient", "Alex Michaelides", "Fiction", "Thriller", ["Thriller", "Mystery", "Crime"], ["Young Adults", "Adults"], ["Dark", "Mysterious", "Suspenseful"], "Standard Read", "A therapist becomes determined to understand why a famous patient stopped speaking.", "Modern", "Standalone"),
    book("the-maze-runner", "The Maze Runner", "James Dashner", "Fiction", "Young Adult", ["Young Adult", "Dystopian", "Action"], ["Teenagers", "Young Adults"], ["Dark", "Mysterious", "Suspenseful"], "Standard Read", "A teenager wakes without memories inside a shifting maze built around secrets.", "Modern", "Series"),
    book("one-of-us-is-lying", "One of Us Is Lying", "Karen M. McManus", "Fiction", "Young Adult", ["Young Adult", "Mystery", "Thriller"], ["Teenagers", "Young Adults"], ["Mysterious", "Suspenseful", "Dark"], "Standard Read", "Four students leave detention carrying secrets after a classmate dies.", "Modern", "Series"),
    book("hate-u-give", "The Hate U Give", "Angie Thomas", "Fiction", "Young Adult", ["Young Adult", "Contemporary Fiction", "Drama"], ["Teenagers", "Young Adults", "Adults"], ["Emotional", "Inspiring", "Thought-provoking"], "Long Read", "A teenager finds her voice after witnessing an event that divides her community.", "Modern", "Standalone"),
    book("american-born-chinese", "American Born Chinese", "Gene Luen Yang", "Fiction", "Graphic Novels and Comics", ["Graphic Novels and Comics", "Young Adult", "Contemporary Fiction"], ["Children", "Middle Grade", "Teenagers", "All Ages"], ["Funny", "Emotional", "Thought-provoking"], "Standard Read", "Three interwoven stories explore identity, belonging, and the pressure to fit in.", "Modern", "Standalone"),
    book("diary-wimpy-kid", "Diary of a Wimpy Kid", "Jeff Kinney", "Fiction", "Humor and Comedy", ["Humor and Comedy", "Graphic Novels and Comics", "Young Adult"], ["Children", "Middle Grade", "All Ages"], ["Funny", "Relaxing"], "Standard Read", "A middle-schooler records friendship mishaps and family chaos in his selective history.", "Modern", "Series"),
    book("good-omens", "Good Omens", "Terry Pratchett and Neil Gaiman", "Fiction", "Humor and Comedy", ["Humor and Comedy", "Fantasy", "Adventure"], ["Teenagers", "Young Adults", "Adults"], ["Funny", "Exciting", "Hopeful"], "Standard Read", "An angel and demon reluctantly cooperate when the apocalypse goes off schedule.", "Modern", "Standalone"),
    book("sun-and-her-flowers", "The Sun and Her Flowers", "Rupi Kaur", "Fiction", "Poetry", ["Poetry", "Romance"], ["Teenagers", "Young Adults", "Adults"], ["Emotional", "Romantic", "Hopeful"], "Quick Read", "Brief poems trace loss, recovery, migration, and renewed self-understanding.", "Modern", "Standalone"),
    book("where-sidewalk-ends", "Where the Sidewalk Ends", "Shel Silverstein", "Fiction", "Poetry", ["Poetry", "Humor and Comedy"], ["Children", "Middle Grade", "All Ages"], ["Funny", "Relaxing", "Hopeful"], "Quick Read", "Playful poems invite readers into a world of nonsense, imagination, and surprise.", "Modern", "Standalone"),
    book("lottery-other-stories", "The Lottery and Other Stories", "Shirley Jackson", "Fiction", "Short Stories", ["Short Stories", "Horror", "Drama"], ["Young Adults", "Adults"], ["Dark", "Mysterious", "Thought-provoking"], "Standard Read", "Quiet communities reveal unsettling rituals and anxieties beneath ordinary routines.", "Classic", "Standalone"),
    book("interpreter-maladies", "Interpreter of Maladies", "Jhumpa Lahiri", "Fiction", "Short Stories", ["Short Stories", "Drama", "Contemporary Fiction"], ["Young Adults", "Adults"], ["Emotional", "Thought-provoking", "Relaxing"], "Standard Read", "Intimate stories follow people navigating family, distance, love, and belonging.", "Modern", "Standalone"),
    book("hatchet", "Hatchet", "Gary Paulsen", "Fiction", "Survival", ["Survival", "Adventure", "Young Adult"], ["Children", "Middle Grade", "Teenagers", "All Ages"], ["Adventurous", "Exciting", "Inspiring"], "Quick Read", "A stranded boy learns to read the wilderness and rely on himself.", "Modern", "Series"),
    book("all-quiet-western-front", "All Quiet on the Western Front", "Erich Maria Remarque", "Fiction", "War", ["War", "Historical Fiction", "Drama"], ["Young Adults", "Adults"], ["Dark", "Emotional", "Thought-provoking"], "Standard Read", "A young soldier confronts the distance between patriotic promises and battlefield reality.", "Classic", "Standalone"),
    book("things-they-carried", "The Things They Carried", "Tim O’Brien", "Fiction", "War", ["War", "Short Stories", "Historical Fiction"], ["Young Adults", "Adults"], ["Emotional", "Dark", "Thought-provoking"], "Standard Read", "Linked stories examine memory, fear, friendship, and the burdens soldiers carry.", "Modern", "Standalone"),
    book("the-alchemist", "The Alchemist", "Paulo Coelho", "Fiction", "Religion and Spirituality", ["Religion and Spirituality", "Magical Realism", "Adventure"], ["Teenagers", "Young Adults", "Adults"], ["Inspiring", "Hopeful", "Thought-provoking"], "Quick Read", "A shepherd follows a recurring dream and learns to recognize a deeper purpose.", "Modern", "Standalone"),
    book("sophies-world", "Sophie’s World", "Jostein Gaarder", "Fiction", "Philosophy", ["Philosophy", "Young Adult", "Mystery"], ["Teenagers", "Young Adults", "Adults"], ["Mysterious", "Inspiring", "Thought-provoking"], "Long Read", "A student's strange lessons open a playful journey through major philosophical ideas.", "Modern", "Standalone"),
    book("a-wrinkle-in-time", "A Wrinkle in Time", "Madeleine L’Engle", "Fiction", "Science Fiction", ["Science Fiction", "Fantasy", "Adventure"], ["Children", "Middle Grade", "Teenagers", "All Ages"], ["Adventurous", "Mysterious", "Hopeful"], "Quick Read", "Three young travelers cross strange worlds to rescue a missing father.", "Classic", "Series"),
    book("the-little-prince", "The Little Prince", "Antoine de Saint-Exupéry", "Fiction", "Fantasy", ["Fantasy", "Philosophy", "Adventure"], ["Children", "Middle Grade", "Teenagers", "Adults", "All Ages"], ["Relaxing", "Emotional", "Thought-provoking"], "Quick Read", "A small traveler shares gentle observations about friendship, responsibility, and wonder.", "Classic", "Standalone"),
    book("steve-jobs", "Steve Jobs", "Walter Isaacson", "Nonfiction", "Biography and Autobiography", ["Biography and Autobiography", "Technology", "Business and Entrepreneurship"], ["Young Adults", "Adults"], ["Inspiring", "Thought-provoking"], "Epic Read", "A detailed portrait explores the imagination, intensity, and contradictions of a technology leader.", "Modern", "Standalone"),    book("alexander-hamilton", "Alexander Hamilton", "Ron Chernow", "Nonfiction", "Biography and Autobiography", ["Biography and Autobiography", "History", "Politics"], ["Young Adults", "Adults"], ["Inspiring", "Exciting", "Thought-provoking"], "Epic Read", "A sweeping life story follows an immigrant who helped shape a new nation.", "Modern", "Standalone"),
    book("shoe-dog", "Shoe Dog", "Phil Knight", "Nonfiction", "Business and Entrepreneurship", ["Business and Entrepreneurship", "Memoir", "Sports"], ["Young Adults", "Adults"], ["Inspiring", "Exciting", "Thought-provoking"], "Long Read", "An entrepreneur recalls uncertain beginnings, risky decisions, and the team behind a global brand.", "Modern", "Standalone"),
    book("lean-startup", "The Lean Startup", "Eric Ries", "Nonfiction", "Business and Entrepreneurship", ["Business and Entrepreneurship", "Technology", "Self-Improvement"], ["Young Adults", "Adults"], ["Inspiring", "Thought-provoking"], "Standard Read", "A practical framework shows how experiments and feedback can guide new ventures.", "Modern", "Standalone"),
    book("the-element", "The Element", "Ken Robinson with Lou Aronica", "Nonfiction", "Education", ["Education", "Self-Improvement", "Psychology"], ["Teenagers", "Young Adults", "Adults"], ["Inspiring", "Hopeful", "Thought-provoking"], "Standard Read", "Stories and research explore what happens when talent meets personal passion.", "Modern", "Standalone"),
    book("knowledge-gap", "The Knowledge Gap", "Natalie Wexler", "Nonfiction", "Education", ["Education", "Psychology", "Science"], ["Young Adults", "Adults"], ["Thought-provoking", "Inspiring"], "Standard Read", "An examination of how subject knowledge supports stronger reading and learning.", "Modern", "Standalone"),
    book("psychology-money", "The Psychology of Money", "Morgan Housel", "Nonfiction", "Finance", ["Finance", "Psychology", "Essays"], ["Teenagers", "Young Adults", "Adults"], ["Thought-provoking", "Inspiring"], "Standard Read", "Short lessons reveal how behavior and experience shape financial choices.", "Modern", "Standalone"),
    book("millionaire-next-door", "The Millionaire Next Door", "Thomas J. Stanley and William D. Danko", "Nonfiction", "Finance", ["Finance", "Self-Improvement", "Business and Entrepreneurship"], ["Young Adults", "Adults"], ["Thought-provoking", "Inspiring"], "Standard Read", "Research challenges familiar assumptions about wealth, spending, and financial independence.", "Modern", "Standalone"),
    book("why-we-sleep", "Why We Sleep", "Matthew Walker", "Nonfiction", "Health and Wellness", ["Health and Wellness", "Science", "Psychology"], ["Young Adults", "Adults"], ["Thought-provoking", "Inspiring"], "Long Read", "A sleep scientist explains how rest influences learning, health, and emotional balance.", "Modern", "Standalone"),
    book("breath", "Breath", "James Nestor", "Nonfiction", "Health and Wellness", ["Health and Wellness", "Science", "History"], ["Young Adults", "Adults"], ["Adventurous", "Thought-provoking", "Inspiring"], "Standard Read", "A curious investigation explores how breathing practices affect bodies and daily life.", "Modern", "Standalone"),
    book("sapiens", "Sapiens", "Yuval Noah Harari", "Nonfiction", "History", ["History", "Science", "Philosophy"], ["Young Adults", "Adults"], ["Thought-provoking", "Inspiring"], "Long Read", "A broad survey connects biology, culture, belief, and power across human history.", "Modern", "Standalone"),
    book("little-history-world", "A Little History of the World", "E.H. Gombrich", "Nonfiction", "History", ["History", "Education"], ["Children", "Middle Grade", "Teenagers", "Adults", "All Ages"], ["Adventurous", "Relaxing", "Inspiring"], "Standard Read", "A welcoming narrative guides readers through major civilizations, ideas, and turning points.", "Classic", "Standalone"),
    book("educated", "Educated", "Tara Westover", "Nonfiction", "Memoir", ["Memoir", "Education", "Biography and Autobiography"], ["Young Adults", "Adults"], ["Emotional", "Inspiring", "Thought-provoking"], "Standard Read", "A woman recounts how learning transformed her world and tested family bonds.", "Modern", "Standalone"),
    book("born-a-crime", "Born a Crime", "Trevor Noah", "Nonfiction", "Memoir", ["Memoir", "Humor and Comedy", "History"], ["Teenagers", "Young Adults", "Adults"], ["Funny", "Emotional", "Inspiring"], "Standard Read", "Comic and candid stories reveal a childhood shaped by apartheid and resourcefulness.", "Modern", "Standalone"),
    book("meditations", "Meditations", "Marcus Aurelius", "Nonfiction", "Philosophy", ["Philosophy", "Religion and Spirituality", "Self-Improvement"], ["Teenagers", "Young Adults", "Adults"], ["Relaxing", "Inspiring", "Thought-provoking"], "Quick Read", "Private reflections consider discipline, perspective, duty, and living with integrity.", "Classic", "Standalone"),
    book("the-republic", "The Republic", "Plato", "Nonfiction", "Philosophy", ["Philosophy", "Politics", "Education"], ["Young Adults", "Adults"], ["Thought-provoking", "Inspiring"], "Long Read", "A searching dialogue examines justice, leadership, education, and the ideal society.", "Classic", "Standalone"),
    book("thinking-fast-slow", "Thinking, Fast and Slow", "Daniel Kahneman", "Nonfiction", "Psychology", ["Psychology", "Science", "Finance"], ["Young Adults", "Adults"], ["Thought-provoking", "Inspiring"], "Long Read", "Research reveals how quick intuition and slower reasoning shape everyday judgments.", "Modern", "Standalone"),
    book("quiet", "Quiet", "Susan Cain", "Nonfiction", "Psychology", ["Psychology", "Self-Improvement", "Business and Entrepreneurship"], ["Teenagers", "Young Adults", "Adults"], ["Inspiring", "Hopeful", "Thought-provoking"], "Long Read", "Stories and studies reconsider the strengths of reflective people in a noisy culture.", "Modern", "Standalone"),
    book("brief-history-time", "A Brief History of Time", "Stephen Hawking", "Nonfiction", "Science", ["Science", "Education", "Philosophy"], ["Teenagers", "Young Adults", "Adults"], ["Mysterious", "Inspiring", "Thought-provoking"], "Standard Read", "An accessible journey introduces space, time, black holes, and cosmic origins.", "Modern", "Standalone"),
    book("the-gene", "The Gene", "Siddhartha Mukherjee", "Nonfiction", "Science", ["Science", "History", "Health and Wellness"], ["Young Adults", "Adults"], ["Emotional", "Inspiring", "Thought-provoking"], "Epic Read", "A physician traces genetics through discovery, family history, promise, and ethical risk.", "Modern", "Standalone"),
    book("atomic-habits", "Atomic Habits", "James Clear", "Nonfiction", "Self-Improvement", ["Self-Improvement", "Psychology", "Health and Wellness"], ["Teenagers", "Young Adults", "Adults"], ["Inspiring", "Hopeful", "Thought-provoking"], "Standard Read", "A practical guide explains how small repeated choices can reshape lasting routines.", "Modern", "Standalone"),
    book("seven-habits", "The 7 Habits of Highly Effective People", "Stephen R. Covey", "Nonfiction", "Self-Improvement", ["Self-Improvement", "Business and Entrepreneurship", "Psychology"], ["Young Adults", "Adults"], ["Inspiring", "Hopeful", "Thought-provoking"], "Long Read", "A principles-focused framework connects daily actions with priorities and relationships.", "Modern", "Standalone"),
    book("the-innovators", "The Innovators", "Walter Isaacson", "Nonfiction", "Technology", ["Technology", "Biography and Autobiography", "History"], ["Young Adults", "Adults"], ["Inspiring", "Exciting", "Thought-provoking"], "Long Read", "Connected biographies show how collaboration produced the modern digital world.", "Modern", "Standalone"),
    book("code-petzold", "Code", "Charles Petzold", "Nonfiction", "Technology", ["Technology", "Education", "Science"], ["Teenagers", "Young Adults", "Adults"], ["Inspiring", "Mysterious", "Thought-provoking"], "Standard Read", "Everyday signals build step by step into an understandable picture of computing.", "Modern", "Standalone"),
    book("walk-in-woods", "A Walk in the Woods", "Bill Bryson", "Nonfiction", "Travel", ["Travel", "Humor and Comedy", "Survival"], ["Teenagers", "Young Adults", "Adults"], ["Adventurous", "Funny", "Relaxing"], "Standard Read", "A novice hiker tackles a famous trail with curiosity, discomfort, and humor.", "Modern", "Standalone"),
    book("great-railway-bazaar", "The Great Railway Bazaar", "Paul Theroux", "Nonfiction", "Travel", ["Travel", "Memoir", "Essays"], ["Young Adults", "Adults"], ["Adventurous", "Relaxing", "Thought-provoking"], "Long Read", "A long rail journey becomes a vivid portrait of places, strangers, and motion.", "Modern", "Standalone"),    book("in-cold-blood", "In Cold Blood", "Truman Capote", "Nonfiction", "True Crime", ["True Crime", "Crime", "History"], ["Young Adults", "Adults"], ["Dark", "Suspenseful", "Thought-provoking"], "Standard Read", "A carefully reported account examines a rural crime and its widening aftermath.", "Classic", "Standalone"),
    book("ill-be-gone-dark", "I’ll Be Gone in the Dark", "Michelle McNamara", "Nonfiction", "True Crime", ["True Crime", "Crime", "Memoir"], ["Adults"], ["Dark", "Mysterious", "Suspenseful"], "Standard Read", "A determined writer follows a cold case through evidence, memory, and obsession.", "Modern", "Standalone"),
    book("room-of-ones-own", "A Room of One’s Own", "Virginia Woolf", "Nonfiction", "Essays", ["Essays", "Politics", "History"], ["Teenagers", "Young Adults", "Adults"], ["Inspiring", "Thought-provoking"], "Quick Read", "An extended essay considers creative freedom, opportunity, and the conditions writers need.", "Classic", "Standalone"),
    book("bad-feminist", "Bad Feminist", "Roxane Gay", "Nonfiction", "Essays", ["Essays", "Politics", "Humor and Comedy"], ["Young Adults", "Adults"], ["Funny", "Inspiring", "Thought-provoking"], "Standard Read", "Personal and cultural essays examine identity, entertainment, contradiction, and public life.", "Modern", "Standalone"),
    book("smile", "Smile", "Raina Telgemeier", "Nonfiction", "Graphic Novels and Comics", ["Graphic Novels and Comics", "Memoir", "Young Adult"], ["Children", "Middle Grade", "Teenagers", "All Ages"], ["Funny", "Emotional", "Hopeful"], "Standard Read", "A dental accident adds another challenge to the familiar awkwardness of middle school.", "Modern", "Standalone"),
    book("me-talk-pretty", "Me Talk Pretty One Day", "David Sedaris", "Nonfiction", "Humor and Comedy", ["Humor and Comedy", "Essays", "Memoir"], ["Young Adults", "Adults"], ["Funny", "Relaxing", "Thought-provoking"], "Standard Read", "Comic essays turn family, language lessons, and cultural confusion into sharp observations.", "Modern", "Standalone"),
    book("audacity-of-hope", "The Audacity of Hope", "Barack Obama", "Nonfiction", "Politics", ["Politics", "Memoir", "History"], ["Young Adults", "Adults"], ["Hopeful", "Inspiring", "Thought-provoking"], "Long Read", "A public servant reflects on civic ideals, disagreement, family, and national possibility.", "Modern", "Standalone"),
    book("on-tyranny", "On Tyranny", "Timothy Snyder", "Nonfiction", "Politics", ["Politics", "History", "Essays"], ["Teenagers", "Young Adults", "Adults"], ["Inspiring", "Dark", "Thought-provoking"], "Quick Read", "Twenty concise lessons draw practical civic warnings from modern history.", "Modern", "Standalone"),
    book("four-agreements", "The Four Agreements", "Don Miguel Ruiz", "Nonfiction", "Religion and Spirituality", ["Religion and Spirituality", "Self-Improvement", "Philosophy"], ["Teenagers", "Young Adults", "Adults"], ["Relaxing", "Hopeful", "Inspiring"], "Quick Read", "Four simple commitments offer a spiritual framework for clearer, kinder daily choices.", "Modern", "Standalone"),
    book("mans-search-meaning", "Man’s Search for Meaning", "Viktor E. Frankl", "Nonfiction", "Religion and Spirituality", ["Religion and Spirituality", "Psychology", "Memoir"], ["Young Adults", "Adults"], ["Dark", "Inspiring", "Thought-provoking"], "Quick Read", "A psychiatrist reflects on suffering, responsibility, and the human search for purpose.", "Classic", "Standalone"),
    book("boys-in-boat", "The Boys in the Boat", "Daniel James Brown", "Nonfiction", "Sports", ["Sports", "History", "Biography and Autobiography"], ["Teenagers", "Young Adults", "Adults"], ["Inspiring", "Exciting", "Hopeful"], "Long Read", "Nine rowers pursue an unlikely Olympic victory through discipline and trust.", "Modern", "Standalone"),
    book("moneyball", "Moneyball", "Michael Lewis", "Nonfiction", "Sports", ["Sports", "Business and Entrepreneurship", "Psychology"], ["Teenagers", "Young Adults", "Adults"], ["Exciting", "Inspiring", "Thought-provoking"], "Standard Read", "A baseball organization challenges tradition by finding value in overlooked evidence.", "Modern", "Standalone"),
    book("into-the-wild", "Into the Wild", "Jon Krakauer", "Nonfiction", "Survival", ["Survival", "Travel", "Biography and Autobiography"], ["Teenagers", "Young Adults", "Adults"], ["Adventurous", "Dark", "Thought-provoking"], "Standard Read", "An investigation follows an idealistic traveler into the Alaskan wilderness.", "Modern", "Standalone"),
    book("unbroken", "Unbroken", "Laura Hillenbrand", "Nonfiction", "Survival", ["Survival", "War", "Biography and Autobiography"], ["Teenagers", "Young Adults", "Adults"], ["Dark", "Inspiring", "Suspenseful"], "Long Read", "An athlete and airman endures wartime catastrophe through remarkable persistence.", "Modern", "Standalone"),
    book("diary-young-girl", "The Diary of a Young Girl", "Anne Frank", "Nonfiction", "War", ["War", "Memoir", "History"], ["Teenagers", "Young Adults", "Adults"], ["Emotional", "Dark", "Hopeful"], "Standard Read", "A young writer records fear, hope, and growing self-knowledge while in hiding.", "Classic", "Standalone"),
    book("open-agassi", "Open", "Andre Agassi", "Nonfiction", "Sports", ["Sports", "Memoir", "Biography and Autobiography"], ["Teenagers", "Young Adults", "Adults"], ["Emotional", "Inspiring", "Exciting"], "Long Read", "A tennis champion recounts competition, pressure, reinvention, and an uneasy relationship with success.", "Modern", "Standalone"),
    book("the-power-broker", "The Power Broker", "Robert A. Caro", "Nonfiction", "Biography and Autobiography", ["Biography and Autobiography", "Politics", "History"], ["Adults"], ["Dark", "Inspiring", "Thought-provoking"], "Epic Read", "A monumental biography examines how unelected power reshaped New York and public life.", "Modern", "Standalone")
  ];


  // Protected snapshot captured before the additive 350+ book expansion.
  const originalBookIds = Object.freeze([
    "bourne-identity",
    "three-musketeers",
    "treasure-island",
    "the-hobbit",
    "a-man-called-ove",
    "fault-in-our-stars",
    "the-godfather",
    "the-big-sleep",
    "little-fires-everywhere",
    "kite-runner",
    "the-hunger-games",
    "nineteen-eighty-four",
    "the-giver",
    "harry-potter-philosophers-stone",
    "lion-witch-wardrobe",
    "the-book-thief",
    "all-light-cannot-see",
    "coraline",
    "haunting-hill-house",
    "frankenstein",
    "one-hundred-years-solitude",
    "like-water-chocolate",
    "house-of-spirits",
    "murder-orient-express",
    "hound-baskervilles",
    "pride-prejudice",
    "the-flatshare",
    "the-martian",
    "project-hail-mary",
    "dune",
    "gone-girl",
    "silent-patient",
    "the-maze-runner",
    "one-of-us-is-lying",
    "hate-u-give",
    "american-born-chinese",
    "diary-wimpy-kid",
    "good-omens",
    "sun-and-her-flowers",
    "where-sidewalk-ends",
    "lottery-other-stories",
    "interpreter-maladies",
    "hatchet",
    "all-quiet-western-front",
    "things-they-carried",
    "the-alchemist",
    "sophies-world",
    "a-wrinkle-in-time",
    "the-little-prince",
    "steve-jobs",
    "alexander-hamilton",
    "shoe-dog",
    "lean-startup",
    "the-element",
    "knowledge-gap",
    "psychology-money",
    "millionaire-next-door",
    "why-we-sleep",
    "breath",
    "sapiens",
    "little-history-world",
    "educated",
    "born-a-crime",
    "meditations",
    "the-republic",
    "thinking-fast-slow",
    "quiet",
    "brief-history-time",
    "the-gene",
    "atomic-habits",
    "seven-habits",
    "the-innovators",
    "code-petzold",
    "walk-in-woods",
    "great-railway-bazaar",
    "in-cold-blood",
    "ill-be-gone-dark",
    "room-of-ones-own",
    "bad-feminist",
    "smile",
    "me-talk-pretty",
    "audacity-of-hope",
    "on-tyranny",
    "four-agreements",
    "mans-search-meaning",
    "boys-in-boat",
    "moneyball",
    "into-the-wild",
    "unbroken",
    "diary-young-girl",
    "open-agassi",
    "the-power-broker"
]);
  const originalBookTotal = originalBookIds.length;
  const previouslyRequiredBookIds = Object.freeze([...new Set([...originalBookIds, ...[
    "wonder",
    "holes",
    "the-lightning-thief",
    "little-women",
    "the-night-circus",
    "becoming",
    "henrietta-lacks",
    "the-poet-x",
    "siddhartha"
]])]);

  const supplementalBooks = [
    {
        "id": "wonder",
        "title": "Wonder",
        "author": "R.J. Palacio",
        "type": "Fiction",
        "genres": [
            "Contemporary Fiction",
            "Drama",
            "Young Adult"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "All Ages"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Standard Read",
        "description": "A child attending school for the first time changes the people around him through courage and everyday kindness.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone",
        "primaryGenre": "Contemporary Fiction"
    },
    {
        "id": "holes",
        "title": "Holes",
        "author": "Louis Sachar",
        "type": "Fiction",
        "genres": [
            "Adventure",
            "Mystery",
            "Young Adult"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers"
        ],
        "moods": [
            "Funny",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Standard Read",
        "description": "At a desert camp, a boy digs holes, uncovers an old family story, and finds that coincidences have roots.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone",
        "primaryGenre": "Adventure"
    },
    {
        "id": "the-lightning-thief",
        "title": "The Lightning Thief",
        "author": "Rick Riordan",
        "type": "Fiction",
        "genres": [
            "Fantasy",
            "Adventure",
            "Young Adult"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers"
        ],
        "moods": [
            "Adventurous",
            "Funny",
            "Exciting"
        ],
        "length": "Standard Read",
        "description": "A boy who never quite fits in discovers his mythic heritage and races across America on a dangerous quest.",
        "classicOrModern": "Modern",
        "seriesType": "Series",
        "primaryGenre": "Fantasy"
    },
    {
        "id": "little-women",
        "title": "Little Women",
        "author": "Louisa May Alcott",
        "type": "Fiction",
        "genres": [
            "Historical Fiction",
            "Drama",
            "Romance"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Long Read",
        "description": "Four sisters grow through ambition, loss, creativity, and love while building lives true to themselves.",
        "classicOrModern": "Classic",
        "seriesType": "Standalone",
        "primaryGenre": "Historical Fiction"
    },
    {
        "id": "the-night-circus",
        "title": "The Night Circus",
        "author": "Erin Morgenstern",
        "type": "Fiction",
        "genres": [
            "Fantasy",
            "Magical Realism",
            "Romance"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Romantic",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "A nocturnal circus becomes the stage for a lifelong magical contest between two gifted illusionists.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone",
        "primaryGenre": "Fantasy"
    },
    {
        "id": "becoming",
        "title": "Becoming",
        "author": "Michelle Obama",
        "type": "Nonfiction",
        "genres": [
            "Memoir",
            "Biography and Autobiography",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Hopeful",
            "Emotional"
        ],
        "length": "Long Read",
        "description": "A reflective life story traces family, work, public service, and the ongoing process of defining one’s voice.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone",
        "primaryGenre": "Memoir"
    },
    {
        "id": "henrietta-lacks",
        "title": "The Immortal Life of Henrietta Lacks",
        "author": "Rebecca Skloot",
        "type": "Nonfiction",
        "genres": [
            "Science",
            "Biography and Autobiography",
            "Health and Wellness"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking",
            "Inspiring"
        ],
        "length": "Long Read",
        "description": "Science and family history meet in an account of cells that changed medicine without their donor’s knowledge.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone",
        "primaryGenre": "Science"
    },
    {
        "id": "the-poet-x",
        "title": "The Poet X",
        "author": "Elizabeth Acevedo",
        "type": "Fiction",
        "genres": [
            "Poetry",
            "Young Adult",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Hopeful"
        ],
        "length": "Quick Read",
        "description": "A teenager finds room for her questions, anger, and growing confidence through the poems she writes in secret.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone",
        "primaryGenre": "Poetry"
    },
    {
        "id": "siddhartha",
        "title": "Siddhartha",
        "author": "Hermann Hesse",
        "type": "Fiction",
        "genres": [
            "Religion and Spirituality",
            "Philosophy",
            "Historical Fiction"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Thought-provoking",
            "Inspiring",
            "Relaxing"
        ],
        "length": "Quick Read",
        "description": "A restless seeker moves through study, pleasure, loss, and quiet attention while looking for an authentic path.",
        "classicOrModern": "Classic",
        "seriesType": "Standalone",
        "primaryGenre": "Religion and Spirituality"
    },
    {
        "id": "the-nightingale",
        "title": "The Nightingale",
        "author": "Kristin Hannah",
        "type": "Fiction",
        "primaryGenre": "Historical Fiction",
        "genres": [
            "Historical Fiction",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Nightingale brings an earlier era to life through personal stakes, resilience, and difficult loyalties.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-westing-game",
        "title": "The Westing Game",
        "author": "Ellen Raskin",
        "type": "Fiction",
        "primaryGenre": "Mystery",
        "genres": [
            "Mystery",
            "Crime"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Westing Game invites readers to follow clues, hidden motives, and a puzzle with human consequences.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-notebook",
        "title": "The Notebook",
        "author": "Nicholas Sparks",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "The Notebook centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-woman-in-the-window",
        "title": "The Woman in the Window",
        "author": "A.J. Finn",
        "type": "Fiction",
        "primaryGenre": "Thriller",
        "genres": [
            "Thriller",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Suspenseful",
            "Dark",
            "Mysterious"
        ],
        "length": "Standard Read",
        "description": "The Woman in the Window sustains tension through hidden dangers, urgent decisions, and shifting trust.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-autobiography-of-benjamin-franklin",
        "title": "The Autobiography of Benjamin Franklin",
        "author": "Benjamin Franklin",
        "type": "Nonfiction",
        "primaryGenre": "Biography and Autobiography",
        "genres": [
            "Biography and Autobiography",
            "History"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Autobiography of Benjamin Franklin presents a real life through defining ambitions, setbacks, relationships, and achievements.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "creativity-inc",
        "title": "Creativity, Inc.",
        "author": "Ed Catmull and Amy Wallace",
        "type": "Nonfiction",
        "primaryGenre": "Business and Entrepreneurship",
        "genres": [
            "Business and Entrepreneurship",
            "Finance"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Creativity, Inc. examines organizations, leadership, and the decisions behind building something enduring.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "your-money-or-your-life",
        "title": "Your Money or Your Life",
        "author": "Vicki Robin and Joe Dominguez",
        "type": "Nonfiction",
        "primaryGenre": "Finance",
        "genres": [
            "Finance",
            "Self-Improvement"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Your Money or Your Life offers practical perspective on money, behavior, and long-term decision-making.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "how-not-to-die",
        "title": "How Not to Die",
        "author": "Michael Greger with Gene Stone",
        "type": "Nonfiction",
        "primaryGenre": "Health and Wellness",
        "genres": [
            "Health and Wellness",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "How Not to Die connects research and lived experience to everyday physical and emotional well-being.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-wright-brothers",
        "title": "The Wright Brothers",
        "author": "David McCullough",
        "type": "Nonfiction",
        "primaryGenre": "History",
        "genres": [
            "History",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Wright Brothers reconstructs an important period through people, institutions, conflict, and lasting change.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "when-breath-becomes-air",
        "title": "When Breath Becomes Air",
        "author": "Paul Kalanithi",
        "type": "Nonfiction",
        "primaryGenre": "Memoir",
        "genres": [
            "Memoir",
            "Biography and Autobiography"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "When Breath Becomes Air reflects on a lived experience with honesty, perspective, and carefully observed detail.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-man-who-mistook-his-wife-for-a-hat",
        "title": "The Man Who Mistook His Wife for a Hat",
        "author": "Oliver Sacks",
        "type": "Nonfiction",
        "primaryGenre": "Psychology",
        "genres": [
            "Psychology",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Man Who Mistook His Wife for a Hat explores how attention, emotion, memory, and social forces shape human behavior.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "mindset",
        "title": "Mindset",
        "author": "Carol S. Dweck",
        "type": "Nonfiction",
        "primaryGenre": "Self-Improvement",
        "genres": [
            "Self-Improvement",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Hopeful",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Mindset offers practical ideas for building more intentional habits, work, and relationships.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-soul-of-a-new-machine",
        "title": "The Soul of a New Machine",
        "author": "Tracy Kidder",
        "type": "Nonfiction",
        "primaryGenre": "Technology",
        "genres": [
            "Technology",
            "Science"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Soul of a New Machine traces the people and systems that shape how modern tools are created and used.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-geography-of-bliss",
        "title": "The Geography of Bliss",
        "author": "Eric Weiner",
        "type": "Nonfiction",
        "primaryGenre": "Travel",
        "genres": [
            "Travel",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Geography of Bliss turns a journey through unfamiliar places into observation, discovery, and reflection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "killers-of-the-flower-moon",
        "title": "Killers of the Flower Moon",
        "author": "David Grann",
        "type": "Nonfiction",
        "primaryGenre": "True Crime",
        "genres": [
            "True Crime",
            "Crime"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "Killers of the Flower Moon investigates a real case with attention to evidence, context, and the people affected.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "consider-the-lobster",
        "title": "Consider the Lobster",
        "author": "David Foster Wallace",
        "type": "Nonfiction",
        "primaryGenre": "Essays",
        "genres": [
            "Essays",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Consider the Lobster collects sharp reflections on culture, identity, experience, and the ideas connecting them.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "persepolis",
        "title": "Persepolis",
        "author": "Marjane Satrapi",
        "type": "Nonfiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "Persepolis uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-complete-poems-of-emily-dickinson",
        "title": "The Complete Poems of Emily Dickinson",
        "author": "Emily Dickinson",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "The Complete Poems of Emily Dickinson uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-righteous-mind",
        "title": "The Righteous Mind",
        "author": "Jonathan Haidt",
        "type": "Nonfiction",
        "primaryGenre": "Politics",
        "genres": [
            "Politics",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Righteous Mind examines power, civic life, public institutions, and the choices that shape society.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "dubliners",
        "title": "Dubliners",
        "author": "James Joyce",
        "type": "Fiction",
        "primaryGenre": "Short Stories",
        "genres": [
            "Short Stories",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Mysterious",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Dubliners gathers compact narratives that reveal character and consequence with precision.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-gray-man",
        "title": "The Gray Man",
        "author": "Mark Greaney",
        "type": "Fiction",
        "primaryGenre": "Action",
        "genres": [
            "Action",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Gray Man delivers a fast-moving story of danger, difficult choices, and determined characters under pressure.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-day-of-the-jackal",
        "title": "The Day of the Jackal",
        "author": "Frederick Forsyth",
        "type": "Fiction",
        "primaryGenre": "Action",
        "genres": [
            "Action",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Day of the Jackal delivers a fast-moving story of danger, difficult choices, and determined characters under pressure.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-last-of-the-mohicans",
        "title": "The Last of the Mohicans",
        "author": "James Fenimore Cooper",
        "type": "Fiction",
        "primaryGenre": "Action",
        "genres": [
            "Action",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Last of the Mohicans delivers a fast-moving story of danger, difficult choices, and determined characters under pressure.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-eagle-of-the-ninth",
        "title": "The Eagle of the Ninth",
        "author": "Rosemary Sutcliff",
        "type": "Fiction",
        "primaryGenre": "Action",
        "genres": [
            "Action",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Eagle of the Ninth delivers a fast-moving story of danger, difficult choices, and determined characters under pressure.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-paladin-prophecy",
        "title": "The Paladin Prophecy",
        "author": "Mark Frost",
        "type": "Fiction",
        "primaryGenre": "Action",
        "genres": [
            "Action",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Paladin Prophecy delivers a fast-moving story of danger, difficult choices, and determined characters under pressure.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-false-prince",
        "title": "The False Prince",
        "author": "Jennifer A. Nielsen",
        "type": "Fiction",
        "primaryGenre": "Action",
        "genres": [
            "Action",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The False Prince delivers a fast-moving story of danger, difficult choices, and determined characters under pressure.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-ruins-of-gorlan",
        "title": "The Ruins of Gorlan",
        "author": "John Flanagan",
        "type": "Fiction",
        "primaryGenre": "Action",
        "genres": [
            "Action",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Ruins of Gorlan delivers a fast-moving story of danger, difficult choices, and determined characters under pressure.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "steelheart",
        "title": "Steelheart",
        "author": "Brandon Sanderson",
        "type": "Fiction",
        "primaryGenre": "Action",
        "genres": [
            "Action",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "Steelheart delivers a fast-moving story of danger, difficult choices, and determined characters under pressure.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-sea-around-us",
        "title": "The Sea Around Us",
        "author": "Rachel Carson",
        "type": "Nonfiction",
        "primaryGenre": "Science",
        "genres": [
            "Science",
            "History",
            "Education"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Sea Around Us makes complex discoveries approachable while preserving their wonder and uncertainty.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-incredible-journey",
        "title": "The Incredible Journey",
        "author": "Sheila Burnford",
        "type": "Fiction",
        "primaryGenre": "Adventure",
        "genres": [
            "Adventure",
            "Survival"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Exciting",
            "Hopeful"
        ],
        "length": "Standard Read",
        "description": "The Incredible Journey follows a journey beyond familiar ground that tests resourcefulness, loyalty, and courage.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-sign-of-the-beaver",
        "title": "The Sign of the Beaver",
        "author": "Elizabeth George Speare",
        "type": "Fiction",
        "primaryGenre": "Adventure",
        "genres": [
            "Adventure",
            "Survival"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Exciting",
            "Hopeful"
        ],
        "length": "Standard Read",
        "description": "The Sign of the Beaver follows a journey beyond familiar ground that tests resourcefulness, loyalty, and courage.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-twenty-one-balloons",
        "title": "The Twenty-One Balloons",
        "author": "William Pène du Bois",
        "type": "Fiction",
        "primaryGenre": "Adventure",
        "genres": [
            "Adventure",
            "Survival"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Exciting",
            "Hopeful"
        ],
        "length": "Standard Read",
        "description": "The Twenty-One Balloons follows a journey beyond familiar ground that tests resourcefulness, loyalty, and courage.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-wanderer",
        "title": "The Wanderer",
        "author": "Sharon Creech",
        "type": "Fiction",
        "primaryGenre": "Adventure",
        "genres": [
            "Adventure",
            "Survival"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Exciting",
            "Hopeful"
        ],
        "length": "Standard Read",
        "description": "The Wanderer follows a journey beyond familiar ground that tests resourcefulness, loyalty, and courage.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-cay",
        "title": "The Cay",
        "author": "Theodore Taylor",
        "type": "Fiction",
        "primaryGenre": "Adventure",
        "genres": [
            "Adventure",
            "Survival"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Exciting",
            "Hopeful"
        ],
        "length": "Standard Read",
        "description": "The Cay follows a journey beyond familiar ground that tests resourcefulness, loyalty, and courage.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-raft",
        "title": "The Raft",
        "author": "S.A. Bodeen",
        "type": "Fiction",
        "primaryGenre": "Adventure",
        "genres": [
            "Adventure",
            "Survival"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Exciting",
            "Hopeful"
        ],
        "length": "Standard Read",
        "description": "The Raft follows a journey beyond familiar ground that tests resourcefulness, loyalty, and courage.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "peak",
        "title": "Peak",
        "author": "Roland Smith",
        "type": "Fiction",
        "primaryGenre": "Adventure",
        "genres": [
            "Adventure",
            "Survival"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Exciting",
            "Hopeful"
        ],
        "length": "Standard Read",
        "description": "Peak follows a journey beyond familiar ground that tests resourcefulness, loyalty, and courage.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-girl-of-ink-and-stars",
        "title": "The Girl of Ink and Stars",
        "author": "Kiran Millwood Hargrave",
        "type": "Fiction",
        "primaryGenre": "Adventure",
        "genres": [
            "Adventure",
            "Survival"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Exciting",
            "Hopeful"
        ],
        "length": "Standard Read",
        "description": "The Girl of Ink and Stars follows a journey beyond familiar ground that tests resourcefulness, loyalty, and courage.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-map-to-everywhere",
        "title": "The Map to Everywhere",
        "author": "Carrie Ryan and John Parke Davis",
        "type": "Fiction",
        "primaryGenre": "Adventure",
        "genres": [
            "Adventure",
            "Survival"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Exciting",
            "Hopeful"
        ],
        "length": "Standard Read",
        "description": "The Map to Everywhere follows a journey beyond familiar ground that tests resourcefulness, loyalty, and courage.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-reading-list",
        "title": "The Reading List",
        "author": "Sara Nisha Adams",
        "type": "Fiction",
        "primaryGenre": "Contemporary Fiction",
        "genres": [
            "Contemporary Fiction",
            "Drama"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "The Reading List explores present-day relationships, change, and the quiet turning points that shape a life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-collected-regrets-of-clover",
        "title": "The Collected Regrets of Clover",
        "author": "Mikki Brammer",
        "type": "Fiction",
        "primaryGenre": "Contemporary Fiction",
        "genres": [
            "Contemporary Fiction",
            "Drama"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "The Collected Regrets of Clover explores present-day relationships, change, and the quiet turning points that shape a life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "lessons-in-chemistry",
        "title": "Lessons in Chemistry",
        "author": "Bonnie Garmus",
        "type": "Fiction",
        "primaryGenre": "Contemporary Fiction",
        "genres": [
            "Contemporary Fiction",
            "Drama"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "Lessons in Chemistry explores present-day relationships, change, and the quiet turning points that shape a life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-music-of-bees",
        "title": "The Music of Bees",
        "author": "Eileen Garvin",
        "type": "Fiction",
        "primaryGenre": "Contemporary Fiction",
        "genres": [
            "Contemporary Fiction",
            "Drama"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "The Music of Bees explores present-day relationships, change, and the quiet turning points that shape a life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-brilliant-life-of-eudora-honeysett",
        "title": "The Brilliant Life of Eudora Honeysett",
        "author": "Annie Lyons",
        "type": "Fiction",
        "primaryGenre": "Contemporary Fiction",
        "genres": [
            "Contemporary Fiction",
            "Drama"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "The Brilliant Life of Eudora Honeysett explores present-day relationships, change, and the quiet turning points that shape a life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-one-hundred-years-of-lenni-and-margot",
        "title": "The One Hundred Years of Lenni and Margot",
        "author": "Marianne Cronin",
        "type": "Fiction",
        "primaryGenre": "Contemporary Fiction",
        "genres": [
            "Contemporary Fiction",
            "Drama"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "The One Hundred Years of Lenni and Margot explores present-day relationships, change, and the quiet turning points that shape a life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-people-on-platform-5",
        "title": "The People on Platform 5",
        "author": "Clare Pooley",
        "type": "Fiction",
        "primaryGenre": "Contemporary Fiction",
        "genres": [
            "Contemporary Fiction",
            "Drama"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "The People on Platform 5 explores present-day relationships, change, and the quiet turning points that shape a life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-mostly-true-story-of-tanner-and-louise",
        "title": "The Mostly True Story of Tanner and Louise",
        "author": "Colleen Oakley",
        "type": "Fiction",
        "primaryGenre": "Contemporary Fiction",
        "genres": [
            "Contemporary Fiction",
            "Drama"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "The Mostly True Story of Tanner and Louise explores present-day relationships, change, and the quiet turning points that shape a life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-switch",
        "title": "The Switch",
        "author": "Beth O’Leary",
        "type": "Fiction",
        "primaryGenre": "Contemporary Fiction",
        "genres": [
            "Contemporary Fiction",
            "Drama"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "The Switch explores present-day relationships, change, and the quiet turning points that shape a life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-last-chance-library",
        "title": "The Last Chance Library",
        "author": "Freya Sampson",
        "type": "Fiction",
        "primaryGenre": "Contemporary Fiction",
        "genres": [
            "Contemporary Fiction",
            "Drama"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "The Last Chance Library explores present-day relationships, change, and the quiet turning points that shape a life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-snowman",
        "title": "The Snowman",
        "author": "Jo Nesbø",
        "type": "Fiction",
        "primaryGenre": "Crime",
        "genres": [
            "Crime",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Snowman enters a world of lawbreaking, loyalty, and consequences where motives are rarely simple.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-bat",
        "title": "The Bat",
        "author": "Jo Nesbø",
        "type": "Fiction",
        "primaryGenre": "Crime",
        "genres": [
            "Crime",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Bat enters a world of lawbreaking, loyalty, and consequences where motives are rarely simple.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-keeper-of-lost-causes",
        "title": "The Keeper of Lost Causes",
        "author": "Jussi Adler-Olsen",
        "type": "Fiction",
        "primaryGenre": "Crime",
        "genres": [
            "Crime",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Keeper of Lost Causes enters a world of lawbreaking, loyalty, and consequences where motives are rarely simple.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-long-goodbye",
        "title": "The Long Goodbye",
        "author": "Raymond Chandler",
        "type": "Fiction",
        "primaryGenre": "Crime",
        "genres": [
            "Crime",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Long Goodbye enters a world of lawbreaking, loyalty, and consequences where motives are rarely simple.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-friends-of-eddie-coyle",
        "title": "The Friends of Eddie Coyle",
        "author": "George V. Higgins",
        "type": "Fiction",
        "primaryGenre": "Crime",
        "genres": [
            "Crime",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Friends of Eddie Coyle enters a world of lawbreaking, loyalty, and consequences where motives are rarely simple.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-secret-history",
        "title": "The Secret History",
        "author": "Donna Tartt",
        "type": "Fiction",
        "primaryGenre": "Crime",
        "genres": [
            "Crime",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Secret History enters a world of lawbreaking, loyalty, and consequences where motives are rarely simple.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-poet",
        "title": "The Poet",
        "author": "Michael Connelly",
        "type": "Fiction",
        "primaryGenre": "Crime",
        "genres": [
            "Crime",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Poet enters a world of lawbreaking, loyalty, and consequences where motives are rarely simple.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-devotion-of-suspect-x",
        "title": "The Devotion of Suspect X",
        "author": "Keigo Higashino",
        "type": "Fiction",
        "primaryGenre": "Crime",
        "genres": [
            "Crime",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Devotion of Suspect X enters a world of lawbreaking, loyalty, and consequences where motives are rarely simple.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-cutting-season",
        "title": "The Cutting Season",
        "author": "Attica Locke",
        "type": "Fiction",
        "primaryGenre": "Crime",
        "genres": [
            "Crime",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Cutting Season enters a world of lawbreaking, loyalty, and consequences where motives are rarely simple.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "bluebird-bluebird",
        "title": "Bluebird, Bluebird",
        "author": "Attica Locke",
        "type": "Fiction",
        "primaryGenre": "Crime",
        "genres": [
            "Crime",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "Bluebird, Bluebird enters a world of lawbreaking, loyalty, and consequences where motives are rarely simple.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-dutch-house",
        "title": "The Dutch House",
        "author": "Ann Patchett",
        "type": "Fiction",
        "primaryGenre": "Drama",
        "genres": [
            "Drama",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Dutch House examines complicated relationships and the emotional consequences of choices made under strain.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-vanishing-half",
        "title": "The Vanishing Half",
        "author": "Brit Bennett",
        "type": "Fiction",
        "primaryGenre": "Drama",
        "genres": [
            "Drama",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Vanishing Half examines complicated relationships and the emotional consequences of choices made under strain.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-mountains-sing",
        "title": "The Mountains Sing",
        "author": "Nguyễn Phan Quế Mai",
        "type": "Fiction",
        "primaryGenre": "Drama",
        "genres": [
            "Drama",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Mountains Sing examines complicated relationships and the emotional consequences of choices made under strain.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-namesake",
        "title": "The Namesake",
        "author": "Jhumpa Lahiri",
        "type": "Fiction",
        "primaryGenre": "Drama",
        "genres": [
            "Drama",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Namesake examines complicated relationships and the emotional consequences of choices made under strain.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-light-between-oceans",
        "title": "The Light Between Oceans",
        "author": "M.L. Stedman",
        "type": "Fiction",
        "primaryGenre": "Drama",
        "genres": [
            "Drama",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Light Between Oceans examines complicated relationships and the emotional consequences of choices made under strain.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "everything-i-never-told-you",
        "title": "Everything I Never Told You",
        "author": "Celeste Ng",
        "type": "Fiction",
        "primaryGenre": "Drama",
        "genres": [
            "Drama",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Everything I Never Told You examines complicated relationships and the emotional consequences of choices made under strain.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-stationery-shop",
        "title": "The Stationery Shop",
        "author": "Marjan Kamali",
        "type": "Fiction",
        "primaryGenre": "Drama",
        "genres": [
            "Drama",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Stationery Shop examines complicated relationships and the emotional consequences of choices made under strain.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-beekeeper-of-aleppo",
        "title": "The Beekeeper of Aleppo",
        "author": "Christy Lefteri",
        "type": "Fiction",
        "primaryGenre": "Drama",
        "genres": [
            "Drama",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Beekeeper of Aleppo examines complicated relationships and the emotional consequences of choices made under strain.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-great-alone",
        "title": "The Great Alone",
        "author": "Kristin Hannah",
        "type": "Fiction",
        "primaryGenre": "Drama",
        "genres": [
            "Drama",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Great Alone examines complicated relationships and the emotional consequences of choices made under strain.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-memory-keeper-s-daughter",
        "title": "The Memory Keeper’s Daughter",
        "author": "Kim Edwards",
        "type": "Fiction",
        "primaryGenre": "Drama",
        "genres": [
            "Drama",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Memory Keeper’s Daughter examines complicated relationships and the emotional consequences of choices made under strain.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-road",
        "title": "The Road",
        "author": "Cormac McCarthy",
        "type": "Fiction",
        "primaryGenre": "Dystopian",
        "genres": [
            "Dystopian",
            "Science Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Road imagines a controlled society and the people who begin to question its promises.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "oryx-and-crake",
        "title": "Oryx and Crake",
        "author": "Margaret Atwood",
        "type": "Fiction",
        "primaryGenre": "Dystopian",
        "genres": [
            "Dystopian",
            "Science Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Oryx and Crake imagines a controlled society and the people who begin to question its promises.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-power",
        "title": "The Power",
        "author": "Naomi Alderman",
        "type": "Fiction",
        "primaryGenre": "Dystopian",
        "genres": [
            "Dystopian",
            "Science Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Power imagines a controlled society and the people who begin to question its promises.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-grace-year",
        "title": "The Grace Year",
        "author": "Kim Liggett",
        "type": "Fiction",
        "primaryGenre": "Dystopian",
        "genres": [
            "Dystopian",
            "Young Adult",
            "Science Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Grace Year imagines a controlled society and the people who begin to question its promises.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "delirium",
        "title": "Delirium",
        "author": "Lauren Oliver",
        "type": "Fiction",
        "primaryGenre": "Dystopian",
        "genres": [
            "Dystopian",
            "Science Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Delirium imagines a controlled society and the people who begin to question its promises.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "matched",
        "title": "Matched",
        "author": "Ally Condie",
        "type": "Fiction",
        "primaryGenre": "Dystopian",
        "genres": [
            "Dystopian",
            "Science Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Matched imagines a controlled society and the people who begin to question its promises.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-testing",
        "title": "The Testing",
        "author": "Joelle Charbonneau",
        "type": "Fiction",
        "primaryGenre": "Dystopian",
        "genres": [
            "Dystopian",
            "Science Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Testing imagines a controlled society and the people who begin to question its promises.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "feed",
        "title": "Feed",
        "author": "M.T. Anderson",
        "type": "Fiction",
        "primaryGenre": "Dystopian",
        "genres": [
            "Dystopian",
            "Science Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Feed imagines a controlled society and the people who begin to question its promises.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-marrow-thieves",
        "title": "The Marrow Thieves",
        "author": "Cherie Dimaline",
        "type": "Fiction",
        "primaryGenre": "Dystopian",
        "genres": [
            "Dystopian",
            "Science Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Marrow Thieves imagines a controlled society and the people who begin to question its promises.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-last-cuentista",
        "title": "The Last Cuentista",
        "author": "Donna Barba Higuera",
        "type": "Fiction",
        "primaryGenre": "Dystopian",
        "genres": [
            "Dystopian",
            "Science Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Last Cuentista imagines a controlled society and the people who begin to question its promises.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "mistborn-the-final-empire",
        "title": "Mistborn: The Final Empire",
        "author": "Brandon Sanderson",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "Mistborn: The Final Empire opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-way-of-kings",
        "title": "The Way of Kings",
        "author": "Brandon Sanderson",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "The Way of Kings opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "sabriel",
        "title": "Sabriel",
        "author": "Garth Nix",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "Sabriel opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-amulet-of-samarkand",
        "title": "The Amulet of Samarkand",
        "author": "Jonathan Stroud",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "The Amulet of Samarkand opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-last-wish",
        "title": "The Last Wish",
        "author": "Andrzej Sapkowski",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "The Last Wish opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-poppy-war",
        "title": "The Poppy War",
        "author": "R.F. Kuang",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "The Poppy War opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-city-of-brass",
        "title": "The City of Brass",
        "author": "S.A. Chakraborty",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "The City of Brass opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-fifth-season",
        "title": "The Fifth Season",
        "author": "N.K. Jemisin",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "The Fifth Season opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-once-and-future-witches",
        "title": "The Once and Future Witches",
        "author": "Alix E. Harrow",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "The Once and Future Witches opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-ten-thousand-doors-of-january",
        "title": "The Ten Thousand Doors of January",
        "author": "Alix E. Harrow",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "The Ten Thousand Doors of January opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-very-secret-society-of-irregular-witches",
        "title": "The Very Secret Society of Irregular Witches",
        "author": "Sangu Mandanna",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Romance",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "The Very Secret Society of Irregular Witches opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-stardust-thief",
        "title": "The Stardust Thief",
        "author": "Chelsea Abdullah",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "The Stardust Thief opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-paris-library",
        "title": "The Paris Library",
        "author": "Janet Skeslien Charles",
        "type": "Fiction",
        "primaryGenre": "Historical Fiction",
        "genres": [
            "Historical Fiction",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Paris Library brings an earlier era to life through personal stakes, resilience, and difficult loyalties.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-rose-code",
        "title": "The Rose Code",
        "author": "Kate Quinn",
        "type": "Fiction",
        "primaryGenre": "Historical Fiction",
        "genres": [
            "Historical Fiction",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Rose Code brings an earlier era to life through personal stakes, resilience, and difficult loyalties.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-librarian-of-burned-books",
        "title": "The Librarian of Burned Books",
        "author": "Brianna Labuskes",
        "type": "Fiction",
        "primaryGenre": "Historical Fiction",
        "genres": [
            "Historical Fiction",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Librarian of Burned Books brings an earlier era to life through personal stakes, resilience, and difficult loyalties.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-personal-librarian",
        "title": "The Personal Librarian",
        "author": "Marie Benedict and Victoria Christopher Murray",
        "type": "Fiction",
        "primaryGenre": "Historical Fiction",
        "genres": [
            "Historical Fiction",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Personal Librarian brings an earlier era to life through personal stakes, resilience, and difficult loyalties.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-four-winds",
        "title": "The Four Winds",
        "author": "Kristin Hannah",
        "type": "Fiction",
        "primaryGenre": "Historical Fiction",
        "genres": [
            "Historical Fiction",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Four Winds brings an earlier era to life through personal stakes, resilience, and difficult loyalties.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-diamond-eye",
        "title": "The Diamond Eye",
        "author": "Kate Quinn",
        "type": "Fiction",
        "primaryGenre": "Historical Fiction",
        "genres": [
            "Historical Fiction",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Diamond Eye brings an earlier era to life through personal stakes, resilience, and difficult loyalties.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-huntress",
        "title": "The Huntress",
        "author": "Kate Quinn",
        "type": "Fiction",
        "primaryGenre": "Historical Fiction",
        "genres": [
            "Historical Fiction",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Huntress brings an earlier era to life through personal stakes, resilience, and difficult loyalties.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-lost-girls-of-paris",
        "title": "The Lost Girls of Paris",
        "author": "Pam Jenoff",
        "type": "Fiction",
        "primaryGenre": "Historical Fiction",
        "genres": [
            "Historical Fiction",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Lost Girls of Paris brings an earlier era to life through personal stakes, resilience, and difficult loyalties.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-kitchen-front",
        "title": "The Kitchen Front",
        "author": "Jennifer Ryan",
        "type": "Fiction",
        "primaryGenre": "Historical Fiction",
        "genres": [
            "Historical Fiction",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Kitchen Front brings an earlier era to life through personal stakes, resilience, and difficult loyalties.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-last-bookshop-in-london",
        "title": "The Last Bookshop in London",
        "author": "Madeline Martin",
        "type": "Fiction",
        "primaryGenre": "Historical Fiction",
        "genres": [
            "Historical Fiction",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Last Bookshop in London brings an earlier era to life through personal stakes, resilience, and difficult loyalties.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "bird-box",
        "title": "Bird Box",
        "author": "Josh Malerman",
        "type": "Fiction",
        "primaryGenre": "Horror",
        "genres": [
            "Horror",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "Bird Box builds unease through unsettling discoveries and a threat that resists easy explanation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-southern-book-club-s-guide-to-slaying-vampires",
        "title": "The Southern Book Club’s Guide to Slaying Vampires",
        "author": "Grady Hendrix",
        "type": "Fiction",
        "primaryGenre": "Horror",
        "genres": [
            "Horror",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Southern Book Club’s Guide to Slaying Vampires builds unease through unsettling discoveries and a threat that resists easy explanation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-final-girl-support-group",
        "title": "The Final Girl Support Group",
        "author": "Grady Hendrix",
        "type": "Fiction",
        "primaryGenre": "Horror",
        "genres": [
            "Horror",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Final Girl Support Group builds unease through unsettling discoveries and a threat that resists easy explanation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-hollow-places",
        "title": "The Hollow Places",
        "author": "T. Kingfisher",
        "type": "Fiction",
        "primaryGenre": "Horror",
        "genres": [
            "Horror",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Hollow Places builds unease through unsettling discoveries and a threat that resists easy explanation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-twisted-ones",
        "title": "The Twisted Ones",
        "author": "T. Kingfisher",
        "type": "Fiction",
        "primaryGenre": "Horror",
        "genres": [
            "Horror",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Twisted Ones builds unease through unsettling discoveries and a threat that resists easy explanation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-hacienda",
        "title": "The Hacienda",
        "author": "Isabel Cañas",
        "type": "Fiction",
        "primaryGenre": "Horror",
        "genres": [
            "Horror",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Hacienda builds unease through unsettling discoveries and a threat that resists easy explanation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-september-house",
        "title": "The September House",
        "author": "Carissa Orlando",
        "type": "Fiction",
        "primaryGenre": "Horror",
        "genres": [
            "Horror",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The September House builds unease through unsettling discoveries and a threat that resists easy explanation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-reformatory",
        "title": "The Reformatory",
        "author": "Tananarive Due",
        "type": "Fiction",
        "primaryGenre": "Horror",
        "genres": [
            "Horror",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Reformatory builds unease through unsettling discoveries and a threat that resists easy explanation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "house-of-leaves",
        "title": "House of Leaves",
        "author": "Mark Z. Danielewski",
        "type": "Fiction",
        "primaryGenre": "Horror",
        "genres": [
            "Horror",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "House of Leaves builds unease through unsettling discoveries and a threat that resists easy explanation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-fisherman",
        "title": "The Fisherman",
        "author": "John Langan",
        "type": "Fiction",
        "primaryGenre": "Horror",
        "genres": [
            "Horror",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Fisherman builds unease through unsettling discoveries and a threat that resists easy explanation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-murmur-of-bees",
        "title": "The Murmur of Bees",
        "author": "Sofía Segovia",
        "type": "Fiction",
        "primaryGenre": "Magical Realism",
        "genres": [
            "Magical Realism",
            "Historical Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Murmur of Bees blends everyday life with the extraordinary to explore memory, family, and belonging.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-inheritance-of-orquidea-divina",
        "title": "The Inheritance of Orquídea Divina",
        "author": "Zoraida Córdova",
        "type": "Fiction",
        "primaryGenre": "Magical Realism",
        "genres": [
            "Magical Realism",
            "Historical Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Inheritance of Orquídea Divina blends everyday life with the extraordinary to explore memory, family, and belonging.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-keeper-of-happy-endings",
        "title": "The Keeper of Happy Endings",
        "author": "Barbara Davis",
        "type": "Fiction",
        "primaryGenre": "Magical Realism",
        "genres": [
            "Magical Realism",
            "Historical Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Keeper of Happy Endings blends everyday life with the extraordinary to explore memory, family, and belonging.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-memory-police",
        "title": "The Memory Police",
        "author": "Yoko Ogawa",
        "type": "Fiction",
        "primaryGenre": "Magical Realism",
        "genres": [
            "Magical Realism",
            "Historical Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Memory Police blends everyday life with the extraordinary to explore memory, family, and belonging.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-astonishing-color-of-after",
        "title": "The Astonishing Color of After",
        "author": "Emily X.R. Pan",
        "type": "Fiction",
        "primaryGenre": "Magical Realism",
        "genres": [
            "Magical Realism",
            "Historical Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Astonishing Color of After blends everyday life with the extraordinary to explore memory, family, and belonging.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-astonishing-life-of-octavian-nothing",
        "title": "The Astonishing Life of Octavian Nothing",
        "author": "M.T. Anderson",
        "type": "Fiction",
        "primaryGenre": "Historical Fiction",
        "genres": [
            "Historical Fiction",
            "Young Adult",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Astonishing Life of Octavian Nothing brings an earlier era to life through personal stakes, resilience, and difficult loyalties.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-brief-wondrous-life-of-oscar-wao",
        "title": "The Brief Wondrous Life of Oscar Wao",
        "author": "Junot Díaz",
        "type": "Fiction",
        "primaryGenre": "Magical Realism",
        "genres": [
            "Magical Realism",
            "Historical Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Brief Wondrous Life of Oscar Wao blends everyday life with the extraordinary to explore memory, family, and belonging.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-map-of-salt-and-stars",
        "title": "The Map of Salt and Stars",
        "author": "Zeyn Joukhadar",
        "type": "Fiction",
        "primaryGenre": "Magical Realism",
        "genres": [
            "Magical Realism",
            "Historical Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Map of Salt and Stars blends everyday life with the extraordinary to explore memory, family, and belonging.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-chosen-and-the-beautiful",
        "title": "The Chosen and the Beautiful",
        "author": "Nghi Vo",
        "type": "Fiction",
        "primaryGenre": "Magical Realism",
        "genres": [
            "Magical Realism",
            "Historical Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Chosen and the Beautiful blends everyday life with the extraordinary to explore memory, family, and belonging.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-enchanted-hacienda",
        "title": "The Enchanted Hacienda",
        "author": "J.C. Cervantes",
        "type": "Fiction",
        "primaryGenre": "Magical Realism",
        "genres": [
            "Magical Realism",
            "Historical Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Enchanted Hacienda blends everyday life with the extraordinary to explore memory, family, and belonging.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-seven-deaths-of-evelyn-hardcastle",
        "title": "The Seven Deaths of Evelyn Hardcastle",
        "author": "Stuart Turton",
        "type": "Fiction",
        "primaryGenre": "Mystery",
        "genres": [
            "Mystery",
            "Crime"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Seven Deaths of Evelyn Hardcastle invites readers to follow clues, hidden motives, and a puzzle with human consequences.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-appeal",
        "title": "The Appeal",
        "author": "Janice Hallett",
        "type": "Fiction",
        "primaryGenre": "Mystery",
        "genres": [
            "Mystery",
            "Crime"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Appeal invites readers to follow clues, hidden motives, and a puzzle with human consequences.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-maid",
        "title": "The Maid",
        "author": "Nita Prose",
        "type": "Fiction",
        "primaryGenre": "Mystery",
        "genres": [
            "Mystery",
            "Crime"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Maid invites readers to follow clues, hidden motives, and a puzzle with human consequences.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "everyone-in-my-family-has-killed-someone",
        "title": "Everyone in My Family Has Killed Someone",
        "author": "Benjamin Stevenson",
        "type": "Fiction",
        "primaryGenre": "Mystery",
        "genres": [
            "Mystery",
            "Crime"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Everyone in My Family Has Killed Someone invites readers to follow clues, hidden motives, and a puzzle with human consequences.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-word-is-murder",
        "title": "The Word Is Murder",
        "author": "Anthony Horowitz",
        "type": "Fiction",
        "primaryGenre": "Mystery",
        "genres": [
            "Mystery",
            "Crime"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Word Is Murder invites readers to follow clues, hidden motives, and a puzzle with human consequences.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-decagon-house-murders",
        "title": "The Decagon House Murders",
        "author": "Yukito Ayatsuji",
        "type": "Fiction",
        "primaryGenre": "Mystery",
        "genres": [
            "Mystery",
            "Crime"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Decagon House Murders invites readers to follow clues, hidden motives, and a puzzle with human consequences.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-honjin-murders",
        "title": "The Honjin Murders",
        "author": "Seishi Yokomizo",
        "type": "Fiction",
        "primaryGenre": "Mystery",
        "genres": [
            "Mystery",
            "Crime"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Honjin Murders invites readers to follow clues, hidden motives, and a puzzle with human consequences.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-thursday-murder-club",
        "title": "The Thursday Murder Club",
        "author": "Richard Osman",
        "type": "Fiction",
        "primaryGenre": "Mystery",
        "genres": [
            "Mystery",
            "Crime"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Thursday Murder Club invites readers to follow clues, hidden motives, and a puzzle with human consequences.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-windsor-knot",
        "title": "The Windsor Knot",
        "author": "S.J. Bennett",
        "type": "Fiction",
        "primaryGenre": "Mystery",
        "genres": [
            "Mystery",
            "Crime"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Windsor Knot invites readers to follow clues, hidden motives, and a puzzle with human consequences.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-marlow-murder-club",
        "title": "The Marlow Murder Club",
        "author": "Robert Thorogood",
        "type": "Fiction",
        "primaryGenre": "Mystery",
        "genres": [
            "Mystery",
            "Crime"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Marlow Murder Club invites readers to follow clues, hidden motives, and a puzzle with human consequences.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-golden-spoon",
        "title": "The Golden Spoon",
        "author": "Jessa Maxwell",
        "type": "Fiction",
        "primaryGenre": "Mystery",
        "genres": [
            "Mystery",
            "Crime"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Golden Spoon invites readers to follow clues, hidden motives, and a puzzle with human consequences.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "vera-wong-s-unsolicited-advice-for-murderers",
        "title": "Vera Wong’s Unsolicited Advice for Murderers",
        "author": "Jesse Q. Sutanto",
        "type": "Fiction",
        "primaryGenre": "Mystery",
        "genres": [
            "Mystery",
            "Crime"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Vera Wong’s Unsolicited Advice for Murderers invites readers to follow clues, hidden motives, and a puzzle with human consequences.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "book-lovers",
        "title": "Book Lovers",
        "author": "Emily Henry",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "Book Lovers centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "beach-read",
        "title": "Beach Read",
        "author": "Emily Henry",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "Beach Read centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-unhoneymooners",
        "title": "The Unhoneymooners",
        "author": "Christina Lauren",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "The Unhoneymooners centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-bodyguard",
        "title": "The Bodyguard",
        "author": "Katherine Center",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "The Bodyguard centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-dead-romantics",
        "title": "The Dead Romantics",
        "author": "Ashley Poston",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "The Dead Romantics centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "love-and-other-words",
        "title": "Love and Other Words",
        "author": "Christina Lauren",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "Love and Other Words centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-seven-year-slip",
        "title": "The Seven Year Slip",
        "author": "Ashley Poston",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "The Seven Year Slip centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-ex-talk",
        "title": "The Ex Talk",
        "author": "Rachel Lynn Solomon",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "The Ex Talk centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "one-last-stop",
        "title": "One Last Stop",
        "author": "Casey McQuiston",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "One Last Stop centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "twice-shy",
        "title": "Twice Shy",
        "author": "Sarah Hogle",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "Twice Shy centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-wake-up-call",
        "title": "The Wake-Up Call",
        "author": "Beth O’Leary",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "The Wake-Up Call centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-three-body-problem",
        "title": "The Three-Body Problem",
        "author": "Cixin Liu",
        "type": "Fiction",
        "primaryGenre": "Science Fiction",
        "genres": [
            "Science Fiction",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Thought-provoking",
            "Exciting",
            "Mysterious"
        ],
        "length": "Long Read",
        "description": "The Three-Body Problem uses speculative ideas to examine discovery, survival, and possible futures.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "children-of-time",
        "title": "Children of Time",
        "author": "Adrian Tchaikovsky",
        "type": "Fiction",
        "primaryGenre": "Science Fiction",
        "genres": [
            "Science Fiction",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Thought-provoking",
            "Exciting",
            "Mysterious"
        ],
        "length": "Long Read",
        "description": "Children of Time uses speculative ideas to examine discovery, survival, and possible futures.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "ancillary-justice",
        "title": "Ancillary Justice",
        "author": "Ann Leckie",
        "type": "Fiction",
        "primaryGenre": "Science Fiction",
        "genres": [
            "Science Fiction",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Thought-provoking",
            "Exciting",
            "Mysterious"
        ],
        "length": "Long Read",
        "description": "Ancillary Justice uses speculative ideas to examine discovery, survival, and possible futures.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-space-between-worlds",
        "title": "The Space Between Worlds",
        "author": "Micaiah Johnson",
        "type": "Fiction",
        "primaryGenre": "Science Fiction",
        "genres": [
            "Science Fiction",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Thought-provoking",
            "Exciting",
            "Mysterious"
        ],
        "length": "Long Read",
        "description": "The Space Between Worlds uses speculative ideas to examine discovery, survival, and possible futures.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "a-psalm-for-the-wild-built",
        "title": "A Psalm for the Wild-Built",
        "author": "Becky Chambers",
        "type": "Fiction",
        "primaryGenre": "Science Fiction",
        "genres": [
            "Science Fiction",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Thought-provoking",
            "Exciting",
            "Mysterious"
        ],
        "length": "Long Read",
        "description": "A Psalm for the Wild-Built uses speculative ideas to examine discovery, survival, and possible futures.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-kaiju-preservation-society",
        "title": "The Kaiju Preservation Society",
        "author": "John Scalzi",
        "type": "Fiction",
        "primaryGenre": "Science Fiction",
        "genres": [
            "Science Fiction",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Thought-provoking",
            "Exciting",
            "Mysterious"
        ],
        "length": "Long Read",
        "description": "The Kaiju Preservation Society uses speculative ideas to examine discovery, survival, and possible futures.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "old-man-s-war",
        "title": "Old Man’s War",
        "author": "John Scalzi",
        "type": "Fiction",
        "primaryGenre": "Science Fiction",
        "genres": [
            "Science Fiction",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Thought-provoking",
            "Exciting",
            "Mysterious"
        ],
        "length": "Long Read",
        "description": "Old Man’s War uses speculative ideas to examine discovery, survival, and possible futures.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "to-be-taught-if-fortunate",
        "title": "To Be Taught, If Fortunate",
        "author": "Becky Chambers",
        "type": "Fiction",
        "primaryGenre": "Science Fiction",
        "genres": [
            "Science Fiction",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Thought-provoking",
            "Exciting",
            "Mysterious"
        ],
        "length": "Long Read",
        "description": "To Be Taught, If Fortunate uses speculative ideas to examine discovery, survival, and possible futures.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "recursion",
        "title": "Recursion",
        "author": "Blake Crouch",
        "type": "Fiction",
        "primaryGenre": "Science Fiction",
        "genres": [
            "Science Fiction",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Thought-provoking",
            "Exciting",
            "Mysterious"
        ],
        "length": "Long Read",
        "description": "Recursion uses speculative ideas to examine discovery, survival, and possible futures.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-mountain-in-the-sea",
        "title": "The Mountain in the Sea",
        "author": "Ray Nayler",
        "type": "Fiction",
        "primaryGenre": "Science Fiction",
        "genres": [
            "Science Fiction",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Thought-provoking",
            "Exciting",
            "Mysterious"
        ],
        "length": "Long Read",
        "description": "The Mountain in the Sea uses speculative ideas to examine discovery, survival, and possible futures.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-first-fifteen-lives-of-harry-august",
        "title": "The First Fifteen Lives of Harry August",
        "author": "Claire North",
        "type": "Fiction",
        "primaryGenre": "Science Fiction",
        "genres": [
            "Science Fiction",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Thought-provoking",
            "Exciting",
            "Mysterious"
        ],
        "length": "Long Read",
        "description": "The First Fifteen Lives of Harry August uses speculative ideas to examine discovery, survival, and possible futures.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-measure",
        "title": "The Measure",
        "author": "Nikki Erlick",
        "type": "Fiction",
        "primaryGenre": "Science Fiction",
        "genres": [
            "Science Fiction",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Thought-provoking",
            "Exciting",
            "Mysterious"
        ],
        "length": "Long Read",
        "description": "The Measure uses speculative ideas to examine discovery, survival, and possible futures.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-only-one-left",
        "title": "The Only One Left",
        "author": "Riley Sager",
        "type": "Fiction",
        "primaryGenre": "Thriller",
        "genres": [
            "Thriller",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Suspenseful",
            "Dark",
            "Mysterious"
        ],
        "length": "Standard Read",
        "description": "The Only One Left sustains tension through hidden dangers, urgent decisions, and shifting trust.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-turn-of-the-key",
        "title": "The Turn of the Key",
        "author": "Ruth Ware",
        "type": "Fiction",
        "primaryGenre": "Thriller",
        "genres": [
            "Thriller",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Suspenseful",
            "Dark",
            "Mysterious"
        ],
        "length": "Standard Read",
        "description": "The Turn of the Key sustains tension through hidden dangers, urgent decisions, and shifting trust.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-woman-in-cabin-10",
        "title": "The Woman in Cabin 10",
        "author": "Ruth Ware",
        "type": "Fiction",
        "primaryGenre": "Thriller",
        "genres": [
            "Thriller",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Suspenseful",
            "Dark",
            "Mysterious"
        ],
        "length": "Standard Read",
        "description": "The Woman in Cabin 10 sustains tension through hidden dangers, urgent decisions, and shifting trust.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "none-of-this-is-true",
        "title": "None of This Is True",
        "author": "Lisa Jewell",
        "type": "Fiction",
        "primaryGenre": "Thriller",
        "genres": [
            "Thriller",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Suspenseful",
            "Dark",
            "Mysterious"
        ],
        "length": "Standard Read",
        "description": "None of This Is True sustains tension through hidden dangers, urgent decisions, and shifting trust.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "rock-paper-scissors",
        "title": "Rock Paper Scissors",
        "author": "Alice Feeney",
        "type": "Fiction",
        "primaryGenre": "Thriller",
        "genres": [
            "Thriller",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Suspenseful",
            "Dark",
            "Mysterious"
        ],
        "length": "Standard Read",
        "description": "Rock Paper Scissors sustains tension through hidden dangers, urgent decisions, and shifting trust.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-kind-worth-killing",
        "title": "The Kind Worth Killing",
        "author": "Peter Swanson",
        "type": "Fiction",
        "primaryGenre": "Thriller",
        "genres": [
            "Thriller",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Suspenseful",
            "Dark",
            "Mysterious"
        ],
        "length": "Standard Read",
        "description": "The Kind Worth Killing sustains tension through hidden dangers, urgent decisions, and shifting trust.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-night-she-disappeared",
        "title": "The Night She Disappeared",
        "author": "Lisa Jewell",
        "type": "Fiction",
        "primaryGenre": "Thriller",
        "genres": [
            "Thriller",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Suspenseful",
            "Dark",
            "Mysterious"
        ],
        "length": "Standard Read",
        "description": "The Night She Disappeared sustains tension through hidden dangers, urgent decisions, and shifting trust.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-it-girl",
        "title": "The It Girl",
        "author": "Ruth Ware",
        "type": "Fiction",
        "primaryGenre": "Thriller",
        "genres": [
            "Thriller",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Suspenseful",
            "Dark",
            "Mysterious"
        ],
        "length": "Standard Read",
        "description": "The It Girl sustains tension through hidden dangers, urgent decisions, and shifting trust.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-family-upstairs",
        "title": "The Family Upstairs",
        "author": "Lisa Jewell",
        "type": "Fiction",
        "primaryGenre": "Thriller",
        "genres": [
            "Thriller",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Suspenseful",
            "Dark",
            "Mysterious"
        ],
        "length": "Standard Read",
        "description": "The Family Upstairs sustains tension through hidden dangers, urgent decisions, and shifting trust.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-woman-in-the-library",
        "title": "The Woman in the Library",
        "author": "Sulari Gentill",
        "type": "Fiction",
        "primaryGenre": "Thriller",
        "genres": [
            "Thriller",
            "Mystery"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Suspenseful",
            "Dark",
            "Mysterious"
        ],
        "length": "Standard Read",
        "description": "The Woman in the Library sustains tension through hidden dangers, urgent decisions, and shifting trust.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "firekeeper-s-daughter",
        "title": "Firekeeper’s Daughter",
        "author": "Angeline Boulley",
        "type": "Fiction",
        "primaryGenre": "Young Adult",
        "genres": [
            "Young Adult"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Firekeeper’s Daughter follows young people confronting identity, loyalty, and choices that change their world.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "legendborn",
        "title": "Legendborn",
        "author": "Tracy Deonn",
        "type": "Fiction",
        "primaryGenre": "Young Adult",
        "genres": [
            "Young Adult"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Legendborn follows young people confronting identity, loyalty, and choices that change their world.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-cruel-prince",
        "title": "The Cruel Prince",
        "author": "Holly Black",
        "type": "Fiction",
        "primaryGenre": "Young Adult",
        "genres": [
            "Young Adult"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Cruel Prince follows young people confronting identity, loyalty, and choices that change their world.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "they-both-die-at-the-end",
        "title": "They Both Die at the End",
        "author": "Adam Silvera",
        "type": "Fiction",
        "primaryGenre": "Young Adult",
        "genres": [
            "Young Adult"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "They Both Die at the End follows young people confronting identity, loyalty, and choices that change their world.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-raven-boys",
        "title": "The Raven Boys",
        "author": "Maggie Stiefvater",
        "type": "Fiction",
        "primaryGenre": "Young Adult",
        "genres": [
            "Young Adult"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Raven Boys follows young people confronting identity, loyalty, and choices that change their world.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-girl-who-fell-beneath-the-sea",
        "title": "The Girl Who Fell Beneath the Sea",
        "author": "Axie Oh",
        "type": "Fiction",
        "primaryGenre": "Young Adult",
        "genres": [
            "Young Adult"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Girl Who Fell Beneath the Sea follows young people confronting identity, loyalty, and choices that change their world.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-gilded-wolves",
        "title": "The Gilded Wolves",
        "author": "Roshani Chokshi",
        "type": "Fiction",
        "primaryGenre": "Young Adult",
        "genres": [
            "Young Adult"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Gilded Wolves follows young people confronting identity, loyalty, and choices that change their world.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-naturals",
        "title": "The Naturals",
        "author": "Jennifer Lynn Barnes",
        "type": "Fiction",
        "primaryGenre": "Young Adult",
        "genres": [
            "Young Adult"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Naturals follows young people confronting identity, loyalty, and choices that change their world.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "sadie",
        "title": "Sadie",
        "author": "Courtney Summers",
        "type": "Fiction",
        "primaryGenre": "Young Adult",
        "genres": [
            "Young Adult"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Sadie follows young people confronting identity, loyalty, and choices that change their world.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-davenports",
        "title": "The Davenports",
        "author": "Krystal Marquis",
        "type": "Fiction",
        "primaryGenre": "Young Adult",
        "genres": [
            "Young Adult"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Davenports follows young people confronting identity, loyalty, and choices that change their world.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-downstairs-girl",
        "title": "The Downstairs Girl",
        "author": "Stacey Lee",
        "type": "Fiction",
        "primaryGenre": "Young Adult",
        "genres": [
            "Young Adult"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Downstairs Girl follows young people confronting identity, loyalty, and choices that change their world.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "titan",
        "title": "Titan",
        "author": "Ron Chernow",
        "type": "Nonfiction",
        "primaryGenre": "Biography and Autobiography",
        "genres": [
            "Biography and Autobiography",
            "History"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Titan presents a real life through defining ambitions, setbacks, relationships, and achievements.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "grant",
        "title": "Grant",
        "author": "Ron Chernow",
        "type": "Nonfiction",
        "primaryGenre": "Biography and Autobiography",
        "genres": [
            "Biography and Autobiography",
            "History"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Grant presents a real life through defining ambitions, setbacks, relationships, and achievements.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "john-adams",
        "title": "John Adams",
        "author": "David McCullough",
        "type": "Nonfiction",
        "primaryGenre": "Biography and Autobiography",
        "genres": [
            "Biography and Autobiography",
            "History"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "John Adams presents a real life through defining ambitions, setbacks, relationships, and achievements.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "catherine-the-great",
        "title": "Catherine the Great",
        "author": "Robert K. Massie",
        "type": "Nonfiction",
        "primaryGenre": "Biography and Autobiography",
        "genres": [
            "Biography and Autobiography",
            "History"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Catherine the Great presents a real life through defining ambitions, setbacks, relationships, and achievements.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "napoleon-a-life",
        "title": "Napoleon: A Life",
        "author": "Andrew Roberts",
        "type": "Nonfiction",
        "primaryGenre": "Biography and Autobiography",
        "genres": [
            "Biography and Autobiography",
            "History"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Napoleon: A Life presents a real life through defining ambitions, setbacks, relationships, and achievements.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "personal-history",
        "title": "Personal History",
        "author": "Katharine Graham",
        "type": "Nonfiction",
        "primaryGenre": "Biography and Autobiography",
        "genres": [
            "Biography and Autobiography",
            "History"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Personal History presents a real life through defining ambitions, setbacks, relationships, and achievements.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-last-lion",
        "title": "The Last Lion",
        "author": "William Manchester",
        "type": "Nonfiction",
        "primaryGenre": "Biography and Autobiography",
        "genres": [
            "Biography and Autobiography",
            "History"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Last Lion presents a real life through defining ambitions, setbacks, relationships, and achievements.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-immortal-irishman",
        "title": "The Immortal Irishman",
        "author": "Timothy Egan",
        "type": "Nonfiction",
        "primaryGenre": "Biography and Autobiography",
        "genres": [
            "Biography and Autobiography",
            "History"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Immortal Irishman presents a real life through defining ambitions, setbacks, relationships, and achievements.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-revolutionary-samuel-adams",
        "title": "The Revolutionary: Samuel Adams",
        "author": "Stacy Schiff",
        "type": "Nonfiction",
        "primaryGenre": "Biography and Autobiography",
        "genres": [
            "Biography and Autobiography",
            "History"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Revolutionary: Samuel Adams presents a real life through defining ambitions, setbacks, relationships, and achievements.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-ride-of-a-lifetime",
        "title": "The Ride of a Lifetime",
        "author": "Robert Iger",
        "type": "Nonfiction",
        "primaryGenre": "Business and Entrepreneurship",
        "genres": [
            "Business and Entrepreneurship",
            "Finance"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Ride of a Lifetime examines organizations, leadership, and the decisions behind building something enduring.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "delivering-happiness",
        "title": "Delivering Happiness",
        "author": "Tony Hsieh",
        "type": "Nonfiction",
        "primaryGenre": "Business and Entrepreneurship",
        "genres": [
            "Business and Entrepreneurship",
            "Finance"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Delivering Happiness examines organizations, leadership, and the decisions behind building something enduring.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "losing-my-virginity",
        "title": "Losing My Virginity",
        "author": "Richard Branson",
        "type": "Nonfiction",
        "primaryGenre": "Business and Entrepreneurship",
        "genres": [
            "Business and Entrepreneurship",
            "Finance"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Losing My Virginity examines organizations, leadership, and the decisions behind building something enduring.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "that-will-never-work",
        "title": "That Will Never Work",
        "author": "Marc Randolph",
        "type": "Nonfiction",
        "primaryGenre": "Business and Entrepreneurship",
        "genres": [
            "Business and Entrepreneurship",
            "Finance"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "That Will Never Work examines organizations, leadership, and the decisions behind building something enduring.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "no-rules-rules",
        "title": "No Rules Rules",
        "author": "Reed Hastings and Erin Meyer",
        "type": "Nonfiction",
        "primaryGenre": "Business and Entrepreneurship",
        "genres": [
            "Business and Entrepreneurship",
            "Finance"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "No Rules Rules examines organizations, leadership, and the decisions behind building something enduring.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "pour-your-heart-into-it",
        "title": "Pour Your Heart Into It",
        "author": "Howard Schultz and Dori Jones Yang",
        "type": "Nonfiction",
        "primaryGenre": "Business and Entrepreneurship",
        "genres": [
            "Business and Entrepreneurship",
            "Finance"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Pour Your Heart Into It examines organizations, leadership, and the decisions behind building something enduring.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-snowball",
        "title": "The Snowball",
        "author": "Alice Schroeder",
        "type": "Nonfiction",
        "primaryGenre": "Business and Entrepreneurship",
        "genres": [
            "Business and Entrepreneurship",
            "Finance"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Snowball examines organizations, leadership, and the decisions behind building something enduring.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "blitzscaling",
        "title": "Blitzscaling",
        "author": "Reid Hoffman and Chris Yeh",
        "type": "Nonfiction",
        "primaryGenre": "Business and Entrepreneurship",
        "genres": [
            "Business and Entrepreneurship",
            "Finance"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Blitzscaling examines organizations, leadership, and the decisions behind building something enduring.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-startup-owner-s-manual",
        "title": "The Startup Owner’s Manual",
        "author": "Steve Blank and Bob Dorf",
        "type": "Nonfiction",
        "primaryGenre": "Business and Entrepreneurship",
        "genres": [
            "Business and Entrepreneurship",
            "Finance"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Startup Owner’s Manual examines organizations, leadership, and the decisions behind building something enduring.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "competing-against-luck",
        "title": "Competing Against Luck",
        "author": "Clayton M. Christensen",
        "type": "Nonfiction",
        "primaryGenre": "Business and Entrepreneurship",
        "genres": [
            "Business and Entrepreneurship",
            "Finance"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Competing Against Luck examines organizations, leadership, and the decisions behind building something enduring.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-book-whisperer",
        "title": "The Book Whisperer",
        "author": "Donalyn Miller",
        "type": "Nonfiction",
        "primaryGenre": "Education",
        "genres": [
            "Education",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Book Whisperer explores how people learn and how teaching can create deeper understanding.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "teach-like-a-champion",
        "title": "Teach Like a Champion",
        "author": "Doug Lemov",
        "type": "Nonfiction",
        "primaryGenre": "Education",
        "genres": [
            "Education",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Teach Like a Champion explores how people learn and how teaching can create deeper understanding.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-writing-revolution",
        "title": "The Writing Revolution",
        "author": "Judith C. Hochman and Natalie Wexler",
        "type": "Nonfiction",
        "primaryGenre": "Education",
        "genres": [
            "Education",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Writing Revolution explores how people learn and how teaching can create deeper understanding.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-schools-our-children-deserve",
        "title": "The Schools Our Children Deserve",
        "author": "Alfie Kohn",
        "type": "Nonfiction",
        "primaryGenre": "Education",
        "genres": [
            "Education",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Schools Our Children Deserve explores how people learn and how teaching can create deeper understanding.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-highly-engaged-classroom",
        "title": "The Highly Engaged Classroom",
        "author": "Robert J. Marzano and Debra J. Pickering",
        "type": "Nonfiction",
        "primaryGenre": "Education",
        "genres": [
            "Education",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Highly Engaged Classroom explores how people learn and how teaching can create deeper understanding.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-first-days-of-school",
        "title": "The First Days of School",
        "author": "Harry K. Wong and Rosemary T. Wong",
        "type": "Nonfiction",
        "primaryGenre": "Education",
        "genres": [
            "Education",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The First Days of School explores how people learn and how teaching can create deeper understanding.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "other-people-s-children",
        "title": "Other People’s Children",
        "author": "Lisa Delpit",
        "type": "Nonfiction",
        "primaryGenre": "Education",
        "genres": [
            "Education",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Other People’s Children explores how people learn and how teaching can create deeper understanding.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-global-achievement-gap",
        "title": "The Global Achievement Gap",
        "author": "Tony Wagner",
        "type": "Nonfiction",
        "primaryGenre": "Education",
        "genres": [
            "Education",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Global Achievement Gap explores how people learn and how teaching can create deeper understanding.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "visible-learning-for-teachers",
        "title": "Visible Learning for Teachers",
        "author": "John Hattie",
        "type": "Nonfiction",
        "primaryGenre": "Education",
        "genres": [
            "Education",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Visible Learning for Teachers explores how people learn and how teaching can create deeper understanding.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "how-learning-happens",
        "title": "How Learning Happens",
        "author": "Paul A. Kirschner and Carl Hendrick",
        "type": "Nonfiction",
        "primaryGenre": "Education",
        "genres": [
            "Education",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "How Learning Happens explores how people learn and how teaching can create deeper understanding.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-automatic-millionaire",
        "title": "The Automatic Millionaire",
        "author": "David Bach",
        "type": "Nonfiction",
        "primaryGenre": "Finance",
        "genres": [
            "Finance",
            "Self-Improvement"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Automatic Millionaire offers practical perspective on money, behavior, and long-term decision-making.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-behavior-gap",
        "title": "The Behavior Gap",
        "author": "Carl Richards",
        "type": "Nonfiction",
        "primaryGenre": "Finance",
        "genres": [
            "Finance",
            "Self-Improvement"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Behavior Gap offers practical perspective on money, behavior, and long-term decision-making.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-wealthy-barber",
        "title": "The Wealthy Barber",
        "author": "David Chilton",
        "type": "Nonfiction",
        "primaryGenre": "Finance",
        "genres": [
            "Finance",
            "Self-Improvement"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Wealthy Barber offers practical perspective on money, behavior, and long-term decision-making.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-latte-factor",
        "title": "The Latte Factor",
        "author": "David Bach and John David Mann",
        "type": "Nonfiction",
        "primaryGenre": "Finance",
        "genres": [
            "Finance",
            "Self-Improvement"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Latte Factor offers practical perspective on money, behavior, and long-term decision-making.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "financial-freedom",
        "title": "Financial Freedom",
        "author": "Grant Sabatier",
        "type": "Nonfiction",
        "primaryGenre": "Finance",
        "genres": [
            "Finance",
            "Self-Improvement"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Financial Freedom offers practical perspective on money, behavior, and long-term decision-making.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-book-on-rental-property-investing",
        "title": "The Book on Rental Property Investing",
        "author": "Brandon Turner",
        "type": "Nonfiction",
        "primaryGenre": "Finance",
        "genres": [
            "Finance",
            "Self-Improvement"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Book on Rental Property Investing offers practical perspective on money, behavior, and long-term decision-making.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "just-keep-buying",
        "title": "Just Keep Buying",
        "author": "Nick Maggiulli",
        "type": "Nonfiction",
        "primaryGenre": "Finance",
        "genres": [
            "Finance",
            "Self-Improvement"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Just Keep Buying offers practical perspective on money, behavior, and long-term decision-making.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-algebra-of-wealth",
        "title": "The Algebra of Wealth",
        "author": "Scott Galloway",
        "type": "Nonfiction",
        "primaryGenre": "Finance",
        "genres": [
            "Finance",
            "Self-Improvement"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Algebra of Wealth offers practical perspective on money, behavior, and long-term decision-making.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-financial-diet",
        "title": "The Financial Diet",
        "author": "Chelsea Fagan",
        "type": "Nonfiction",
        "primaryGenre": "Finance",
        "genres": [
            "Finance",
            "Self-Improvement"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Financial Diet offers practical perspective on money, behavior, and long-term decision-making.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-year-of-less",
        "title": "The Year of Less",
        "author": "Cait Flanders",
        "type": "Nonfiction",
        "primaryGenre": "Finance",
        "genres": [
            "Finance",
            "Self-Improvement"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Year of Less offers practical perspective on money, behavior, and long-term decision-making.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-circadian-code",
        "title": "The Circadian Code",
        "author": "Satchin Panda",
        "type": "Nonfiction",
        "primaryGenre": "Health and Wellness",
        "genres": [
            "Health and Wellness",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Circadian Code connects research and lived experience to everyday physical and emotional well-being.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-sleep-solution",
        "title": "The Sleep Solution",
        "author": "W. Chris Winter",
        "type": "Nonfiction",
        "primaryGenre": "Health and Wellness",
        "genres": [
            "Health and Wellness",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Sleep Solution connects research and lived experience to everyday physical and emotional well-being.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "why-we-get-sick",
        "title": "Why We Get Sick",
        "author": "Benjamin Bikman",
        "type": "Nonfiction",
        "primaryGenre": "Health and Wellness",
        "genres": [
            "Health and Wellness",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Why We Get Sick connects research and lived experience to everyday physical and emotional well-being.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-joy-of-movement",
        "title": "The Joy of Movement",
        "author": "Kelly McGonigal",
        "type": "Nonfiction",
        "primaryGenre": "Health and Wellness",
        "genres": [
            "Health and Wellness",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Joy of Movement connects research and lived experience to everyday physical and emotional well-being.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "built-to-move",
        "title": "Built to Move",
        "author": "Kelly Starrett and Juliet Starrett",
        "type": "Nonfiction",
        "primaryGenre": "Health and Wellness",
        "genres": [
            "Health and Wellness",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Built to Move connects research and lived experience to everyday physical and emotional well-being.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "burn",
        "title": "Burn",
        "author": "Herman Pontzer",
        "type": "Nonfiction",
        "primaryGenre": "Health and Wellness",
        "genres": [
            "Health and Wellness",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Burn connects research and lived experience to everyday physical and emotional well-being.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-good-life",
        "title": "The Good Life",
        "author": "Robert Waldinger and Marc Schulz",
        "type": "Nonfiction",
        "primaryGenre": "Health and Wellness",
        "genres": [
            "Health and Wellness",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Good Life connects research and lived experience to everyday physical and emotional well-being.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-expectation-effect",
        "title": "The Expectation Effect",
        "author": "David Robson",
        "type": "Nonfiction",
        "primaryGenre": "Health and Wellness",
        "genres": [
            "Health and Wellness",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Expectation Effect connects research and lived experience to everyday physical and emotional well-being.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-nature-fix",
        "title": "The Nature Fix",
        "author": "Florence Williams",
        "type": "Nonfiction",
        "primaryGenre": "Health and Wellness",
        "genres": [
            "Health and Wellness",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Nature Fix connects research and lived experience to everyday physical and emotional well-being.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-art-of-rest",
        "title": "The Art of Rest",
        "author": "Claudia Hammond",
        "type": "Nonfiction",
        "primaryGenre": "Health and Wellness",
        "genres": [
            "Health and Wellness",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Hopeful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Art of Rest connects research and lived experience to everyday physical and emotional well-being.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-anarchy",
        "title": "The Anarchy",
        "author": "William Dalrymple",
        "type": "Nonfiction",
        "primaryGenre": "History",
        "genres": [
            "History",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Anarchy reconstructs an important period through people, institutions, conflict, and lasting change.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-ghost-map",
        "title": "The Ghost Map",
        "author": "Steven Johnson",
        "type": "Nonfiction",
        "primaryGenre": "History",
        "genres": [
            "History",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Ghost Map reconstructs an important period through people, institutions, conflict, and lasting change.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-library-book",
        "title": "The Library Book",
        "author": "Susan Orlean",
        "type": "Nonfiction",
        "primaryGenre": "History",
        "genres": [
            "History",
            "Essays",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Library Book reconstructs an important period through people, institutions, conflict, and lasting change.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-great-influenza",
        "title": "The Great Influenza",
        "author": "John M. Barry",
        "type": "Nonfiction",
        "primaryGenre": "History",
        "genres": [
            "History",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Great Influenza reconstructs an important period through people, institutions, conflict, and lasting change.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-pioneers",
        "title": "The Pioneers",
        "author": "David McCullough",
        "type": "Nonfiction",
        "primaryGenre": "History",
        "genres": [
            "History",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Pioneers reconstructs an important period through people, institutions, conflict, and lasting change.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "empire-of-pain",
        "title": "Empire of Pain",
        "author": "Patrick Radden Keefe",
        "type": "Nonfiction",
        "primaryGenre": "History",
        "genres": [
            "History",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Empire of Pain reconstructs an important period through people, institutions, conflict, and lasting change.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-wager",
        "title": "The Wager",
        "author": "David Grann",
        "type": "Nonfiction",
        "primaryGenre": "History",
        "genres": [
            "History",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Wager reconstructs an important period through people, institutions, conflict, and lasting change.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-emerald-mile",
        "title": "The Emerald Mile",
        "author": "Kevin Fedarko",
        "type": "Nonfiction",
        "primaryGenre": "History",
        "genres": [
            "History",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Emerald Mile reconstructs an important period through people, institutions, conflict, and lasting change.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-worst-hard-time",
        "title": "The Worst Hard Time",
        "author": "Timothy Egan",
        "type": "Nonfiction",
        "primaryGenre": "History",
        "genres": [
            "History",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Worst Hard Time reconstructs an important period through people, institutions, conflict, and lasting change.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-professor-and-the-madman",
        "title": "The Professor and the Madman",
        "author": "Simon Winchester",
        "type": "Nonfiction",
        "primaryGenre": "History",
        "genres": [
            "History",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Professor and the Madman reconstructs an important period through people, institutions, conflict, and lasting change.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-map-that-changed-the-world",
        "title": "The Map That Changed the World",
        "author": "Simon Winchester",
        "type": "Nonfiction",
        "primaryGenre": "History",
        "genres": [
            "History",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Map That Changed the World reconstructs an important period through people, institutions, conflict, and lasting change.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-swerve",
        "title": "The Swerve",
        "author": "Stephen Greenblatt",
        "type": "Nonfiction",
        "primaryGenre": "History",
        "genres": [
            "History",
            "Politics"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Swerve reconstructs an important period through people, institutions, conflict, and lasting change.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "somebody-s-daughter",
        "title": "Somebody’s Daughter",
        "author": "Ashley C. Ford",
        "type": "Nonfiction",
        "primaryGenre": "Memoir",
        "genres": [
            "Memoir",
            "Biography and Autobiography"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Somebody’s Daughter reflects on a lived experience with honesty, perspective, and carefully observed detail.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "heavy",
        "title": "Heavy",
        "author": "Kiese Laymon",
        "type": "Nonfiction",
        "primaryGenre": "Memoir",
        "genres": [
            "Memoir",
            "Biography and Autobiography"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Heavy reflects on a lived experience with honesty, perspective, and carefully observed detail.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "between-two-kingdoms",
        "title": "Between Two Kingdoms",
        "author": "Suleika Jaouad",
        "type": "Nonfiction",
        "primaryGenre": "Memoir",
        "genres": [
            "Memoir",
            "Biography and Autobiography"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Between Two Kingdoms reflects on a lived experience with honesty, perspective, and carefully observed detail.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-yellow-house",
        "title": "The Yellow House",
        "author": "Sarah M. Broom",
        "type": "Nonfiction",
        "primaryGenre": "Memoir",
        "genres": [
            "Memoir",
            "Biography and Autobiography"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Yellow House reflects on a lived experience with honesty, perspective, and carefully observed detail.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "men-we-reaped",
        "title": "Men We Reaped",
        "author": "Jesmyn Ward",
        "type": "Nonfiction",
        "primaryGenre": "Memoir",
        "genres": [
            "Memoir",
            "Biography and Autobiography"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Men We Reaped reflects on a lived experience with honesty, perspective, and carefully observed detail.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "what-my-bones-know",
        "title": "What My Bones Know",
        "author": "Stephanie Foo",
        "type": "Nonfiction",
        "primaryGenre": "Memoir",
        "genres": [
            "Memoir",
            "Biography and Autobiography"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "What My Bones Know reflects on a lived experience with honesty, perspective, and carefully observed detail.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "stay-true",
        "title": "Stay True",
        "author": "Hua Hsu",
        "type": "Nonfiction",
        "primaryGenre": "Memoir",
        "genres": [
            "Memoir",
            "Biography and Autobiography"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Stay True reflects on a lived experience with honesty, perspective, and carefully observed detail.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "beautiful-country",
        "title": "Beautiful Country",
        "author": "Qian Julie Wang",
        "type": "Nonfiction",
        "primaryGenre": "Memoir",
        "genres": [
            "Memoir",
            "Biography and Autobiography"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Beautiful Country reflects on a lived experience with honesty, perspective, and carefully observed detail.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "solito",
        "title": "Solito",
        "author": "Javier Zamora",
        "type": "Nonfiction",
        "primaryGenre": "Memoir",
        "genres": [
            "Memoir",
            "Biography and Autobiography"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Solito reflects on a lived experience with honesty, perspective, and carefully observed detail.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "from-scratch",
        "title": "From Scratch",
        "author": "Tembi Locke",
        "type": "Nonfiction",
        "primaryGenre": "Memoir",
        "genres": [
            "Memoir",
            "Biography and Autobiography"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "From Scratch reflects on a lived experience with honesty, perspective, and carefully observed detail.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-second-sex",
        "title": "The Second Sex",
        "author": "Simone de Beauvoir",
        "type": "Nonfiction",
        "primaryGenre": "Philosophy",
        "genres": [
            "Philosophy",
            "Religion and Spirituality"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Second Sex asks enduring questions about meaning, ethics, freedom, and a well-examined life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-prince",
        "title": "The Prince",
        "author": "Niccolò Machiavelli",
        "type": "Nonfiction",
        "primaryGenre": "Philosophy",
        "genres": [
            "Philosophy",
            "Religion and Spirituality"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Prince asks enduring questions about meaning, ethics, freedom, and a well-examined life.",
        "classicOrModern": "Classic",
        "seriesType": "Standalone"
    },
    {
        "id": "the-analects",
        "title": "The Analects",
        "author": "Confucius",
        "type": "Nonfiction",
        "primaryGenre": "Philosophy",
        "genres": [
            "Philosophy",
            "Religion and Spirituality"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Analects asks enduring questions about meaning, ethics, freedom, and a well-examined life.",
        "classicOrModern": "Classic",
        "seriesType": "Standalone"
    },
    {
        "id": "the-tao-te-ching",
        "title": "The Tao Te Ching",
        "author": "Laozi",
        "type": "Nonfiction",
        "primaryGenre": "Philosophy",
        "genres": [
            "Philosophy",
            "Religion and Spirituality"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Tao Te Ching asks enduring questions about meaning, ethics, freedom, and a well-examined life.",
        "classicOrModern": "Classic",
        "seriesType": "Standalone"
    },
    {
        "id": "the-ethics-of-ambiguity",
        "title": "The Ethics of Ambiguity",
        "author": "Simone de Beauvoir",
        "type": "Nonfiction",
        "primaryGenre": "Philosophy",
        "genres": [
            "Philosophy",
            "Religion and Spirituality"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Ethics of Ambiguity asks enduring questions about meaning, ethics, freedom, and a well-examined life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "at-the-existentialist-cafe",
        "title": "At the Existentialist Café",
        "author": "Sarah Bakewell",
        "type": "Nonfiction",
        "primaryGenre": "Philosophy",
        "genres": [
            "Philosophy",
            "Religion and Spirituality"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "At the Existentialist Café asks enduring questions about meaning, ethics, freedom, and a well-examined life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-pig-that-wants-to-be-eaten",
        "title": "The Pig That Wants to Be Eaten",
        "author": "Julian Baggini",
        "type": "Nonfiction",
        "primaryGenre": "Philosophy",
        "genres": [
            "Philosophy",
            "Religion and Spirituality"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Pig That Wants to Be Eaten asks enduring questions about meaning, ethics, freedom, and a well-examined life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-philosophy-book",
        "title": "The Philosophy Book",
        "author": "DK",
        "type": "Nonfiction",
        "primaryGenre": "Philosophy",
        "genres": [
            "Philosophy",
            "Religion and Spirituality"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Philosophy Book asks enduring questions about meaning, ethics, freedom, and a well-examined life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-courage-to-be-disliked",
        "title": "The Courage to Be Disliked",
        "author": "Ichiro Kishimi and Fumitake Koga",
        "type": "Nonfiction",
        "primaryGenre": "Philosophy",
        "genres": [
            "Philosophy",
            "Self-Improvement",
            "Religion and Spirituality"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Courage to Be Disliked asks enduring questions about meaning, ethics, freedom, and a well-examined life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-practicing-stoic",
        "title": "The Practicing Stoic",
        "author": "Ward Farnsworth",
        "type": "Nonfiction",
        "primaryGenre": "Philosophy",
        "genres": [
            "Philosophy",
            "Religion and Spirituality"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Practicing Stoic asks enduring questions about meaning, ethics, freedom, and a well-examined life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "behave",
        "title": "Behave",
        "author": "Robert Sapolsky",
        "type": "Nonfiction",
        "primaryGenre": "Psychology",
        "genres": [
            "Psychology",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Behave explores how attention, emotion, memory, and social forces shape human behavior.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-social-animal",
        "title": "The Social Animal",
        "author": "Elliot Aronson",
        "type": "Nonfiction",
        "primaryGenre": "Psychology",
        "genres": [
            "Psychology",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Social Animal explores how attention, emotion, memory, and social forces shape human behavior.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "mistakes-were-made-but-not-by-me",
        "title": "Mistakes Were Made (But Not by Me)",
        "author": "Carol Tavris and Elliot Aronson",
        "type": "Nonfiction",
        "primaryGenre": "Psychology",
        "genres": [
            "Psychology",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Mistakes Were Made (But Not by Me) explores how attention, emotion, memory, and social forces shape human behavior.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-body-remembers",
        "title": "The Body Remembers",
        "author": "Babette Rothschild",
        "type": "Nonfiction",
        "primaryGenre": "Psychology",
        "genres": [
            "Psychology",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Body Remembers explores how attention, emotion, memory, and social forces shape human behavior.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-upside-of-stress",
        "title": "The Upside of Stress",
        "author": "Kelly McGonigal",
        "type": "Nonfiction",
        "primaryGenre": "Psychology",
        "genres": [
            "Psychology",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Upside of Stress explores how attention, emotion, memory, and social forces shape human behavior.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-organized-mind",
        "title": "The Organized Mind",
        "author": "Daniel J. Levitin",
        "type": "Nonfiction",
        "primaryGenre": "Psychology",
        "genres": [
            "Psychology",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Organized Mind explores how attention, emotion, memory, and social forces shape human behavior.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-molecule-of-more",
        "title": "The Molecule of More",
        "author": "Daniel Z. Lieberman and Michael E. Long",
        "type": "Nonfiction",
        "primaryGenre": "Psychology",
        "genres": [
            "Psychology",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Molecule of More explores how attention, emotion, memory, and social forces shape human behavior.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "scarcity",
        "title": "Scarcity",
        "author": "Sendhil Mullainathan and Eldar Shafir",
        "type": "Nonfiction",
        "primaryGenre": "Psychology",
        "genres": [
            "Psychology",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Scarcity explores how attention, emotion, memory, and social forces shape human behavior.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-undoing-project",
        "title": "The Undoing Project",
        "author": "Michael Lewis",
        "type": "Nonfiction",
        "primaryGenre": "Psychology",
        "genres": [
            "Psychology",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Undoing Project explores how attention, emotion, memory, and social forces shape human behavior.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "bittersweet",
        "title": "Bittersweet",
        "author": "Susan Cain",
        "type": "Nonfiction",
        "primaryGenre": "Psychology",
        "genres": [
            "Psychology",
            "Science"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Bittersweet explores how attention, emotion, memory, and social forces shape human behavior.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-order-of-time",
        "title": "The Order of Time",
        "author": "Carlo Rovelli",
        "type": "Nonfiction",
        "primaryGenre": "Science",
        "genres": [
            "Science",
            "Education"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Order of Time makes complex discoveries approachable while preserving their wonder and uncertainty.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "seven-brief-lessons-on-physics",
        "title": "Seven Brief Lessons on Physics",
        "author": "Carlo Rovelli",
        "type": "Nonfiction",
        "primaryGenre": "Science",
        "genres": [
            "Science",
            "Education"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Seven Brief Lessons on Physics makes complex discoveries approachable while preserving their wonder and uncertainty.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-fabric-of-the-cosmos",
        "title": "The Fabric of the Cosmos",
        "author": "Brian Greene",
        "type": "Nonfiction",
        "primaryGenre": "Science",
        "genres": [
            "Science",
            "Education"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Fabric of the Cosmos makes complex discoveries approachable while preserving their wonder and uncertainty.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-elegant-universe",
        "title": "The Elegant Universe",
        "author": "Brian Greene",
        "type": "Nonfiction",
        "primaryGenre": "Science",
        "genres": [
            "Science",
            "Education"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Elegant Universe makes complex discoveries approachable while preserving their wonder and uncertainty.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-song-of-the-cell",
        "title": "The Song of the Cell",
        "author": "Siddhartha Mukherjee",
        "type": "Nonfiction",
        "primaryGenre": "Science",
        "genres": [
            "Science",
            "Education"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Song of the Cell makes complex discoveries approachable while preserving their wonder and uncertainty.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "an-immense-world",
        "title": "An Immense World",
        "author": "Ed Yong",
        "type": "Nonfiction",
        "primaryGenre": "Science",
        "genres": [
            "Science",
            "Education"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "An Immense World makes complex discoveries approachable while preserving their wonder and uncertainty.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "i-contain-multitudes",
        "title": "I Contain Multitudes",
        "author": "Ed Yong",
        "type": "Nonfiction",
        "primaryGenre": "Science",
        "genres": [
            "Science",
            "Education"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "I Contain Multitudes makes complex discoveries approachable while preserving their wonder and uncertainty.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-end-of-everything",
        "title": "The End of Everything",
        "author": "Katie Mack",
        "type": "Nonfiction",
        "primaryGenre": "Science",
        "genres": [
            "Science",
            "Education"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The End of Everything makes complex discoveries approachable while preserving their wonder and uncertainty.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-rise-and-reign-of-the-mammals",
        "title": "The Rise and Reign of the Mammals",
        "author": "Steve Brusatte",
        "type": "Nonfiction",
        "primaryGenre": "Science",
        "genres": [
            "Science",
            "Education"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Rise and Reign of the Mammals makes complex discoveries approachable while preserving their wonder and uncertainty.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-story-of-more",
        "title": "The Story of More",
        "author": "Hope Jahren",
        "type": "Nonfiction",
        "primaryGenre": "Science",
        "genres": [
            "Science",
            "Education"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Story of More makes complex discoveries approachable while preserving their wonder and uncertainty.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "underland",
        "title": "Underland",
        "author": "Robert Macfarlane",
        "type": "Nonfiction",
        "primaryGenre": "Science",
        "genres": [
            "Science",
            "Education"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Underland makes complex discoveries approachable while preserving their wonder and uncertainty.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-light-eaters",
        "title": "The Light Eaters",
        "author": "Zoë Schlanger",
        "type": "Nonfiction",
        "primaryGenre": "Science",
        "genres": [
            "Science",
            "Education"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Light Eaters makes complex discoveries approachable while preserving their wonder and uncertainty.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "make-time",
        "title": "Make Time",
        "author": "Jake Knapp and John Zeratsky",
        "type": "Nonfiction",
        "primaryGenre": "Self-Improvement",
        "genres": [
            "Self-Improvement",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Hopeful",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Make Time offers practical ideas for building more intentional habits, work, and relationships.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-now-habit",
        "title": "The Now Habit",
        "author": "Neil Fiore",
        "type": "Nonfiction",
        "primaryGenre": "Self-Improvement",
        "genres": [
            "Self-Improvement",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Hopeful",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Now Habit offers practical ideas for building more intentional habits, work, and relationships.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-checklist-manifesto",
        "title": "The Checklist Manifesto",
        "author": "Atul Gawande",
        "type": "Nonfiction",
        "primaryGenre": "Self-Improvement",
        "genres": [
            "Self-Improvement",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Hopeful",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Checklist Manifesto offers practical ideas for building more intentional habits, work, and relationships.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-compound-effect",
        "title": "The Compound Effect",
        "author": "Darren Hardy",
        "type": "Nonfiction",
        "primaryGenre": "Self-Improvement",
        "genres": [
            "Self-Improvement",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Hopeful",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Compound Effect offers practical ideas for building more intentional habits, work, and relationships.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "designing-your-life",
        "title": "Designing Your Life",
        "author": "Bill Burnett and Dave Evans",
        "type": "Nonfiction",
        "primaryGenre": "Self-Improvement",
        "genres": [
            "Self-Improvement",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Hopeful",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Designing Your Life offers practical ideas for building more intentional habits, work, and relationships.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "tiny-habits",
        "title": "Tiny Habits",
        "author": "B.J. Fogg",
        "type": "Nonfiction",
        "primaryGenre": "Self-Improvement",
        "genres": [
            "Self-Improvement",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Hopeful",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Tiny Habits offers practical ideas for building more intentional habits, work, and relationships.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-productivity-project",
        "title": "The Productivity Project",
        "author": "Chris Bailey",
        "type": "Nonfiction",
        "primaryGenre": "Self-Improvement",
        "genres": [
            "Self-Improvement",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Hopeful",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Productivity Project offers practical ideas for building more intentional habits, work, and relationships.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-happiness-advantage",
        "title": "The Happiness Advantage",
        "author": "Shawn Achor",
        "type": "Nonfiction",
        "primaryGenre": "Self-Improvement",
        "genres": [
            "Self-Improvement",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Hopeful",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Happiness Advantage offers practical ideas for building more intentional habits, work, and relationships.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-practicing-mind",
        "title": "The Practicing Mind",
        "author": "Thomas M. Sterner",
        "type": "Nonfiction",
        "primaryGenre": "Self-Improvement",
        "genres": [
            "Self-Improvement",
            "Psychology"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Hopeful",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Practicing Mind offers practical ideas for building more intentional habits, work, and relationships.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "chip-war",
        "title": "Chip War",
        "author": "Chris Miller",
        "type": "Nonfiction",
        "primaryGenre": "Technology",
        "genres": [
            "Technology",
            "Science"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Chip War traces the people and systems that shape how modern tools are created and used.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-coming-wave",
        "title": "The Coming Wave",
        "author": "Mustafa Suleyman with Michael Bhaskar",
        "type": "Nonfiction",
        "primaryGenre": "Technology",
        "genres": [
            "Technology",
            "Science"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Coming Wave traces the people and systems that shape how modern tools are created and used.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-alignment-problem",
        "title": "The Alignment Problem",
        "author": "Brian Christian",
        "type": "Nonfiction",
        "primaryGenre": "Technology",
        "genres": [
            "Technology",
            "Science"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Alignment Problem traces the people and systems that shape how modern tools are created and used.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-dream-machine",
        "title": "The Dream Machine",
        "author": "M. Mitchell Waldrop",
        "type": "Nonfiction",
        "primaryGenre": "Technology",
        "genres": [
            "Technology",
            "Science"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Dream Machine traces the people and systems that shape how modern tools are created and used.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "hackers",
        "title": "Hackers",
        "author": "Steven Levy",
        "type": "Nonfiction",
        "primaryGenre": "Technology",
        "genres": [
            "Technology",
            "Science"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Hackers traces the people and systems that shape how modern tools are created and used.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "dealers-of-lightning",
        "title": "Dealers of Lightning",
        "author": "Michael A. Hiltzik",
        "type": "Nonfiction",
        "primaryGenre": "Technology",
        "genres": [
            "Technology",
            "Science"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Dealers of Lightning traces the people and systems that shape how modern tools are created and used.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "where-wizards-stay-up-late",
        "title": "Where Wizards Stay Up Late",
        "author": "Katie Hafner and Matthew Lyon",
        "type": "Nonfiction",
        "primaryGenre": "Technology",
        "genres": [
            "Technology",
            "Science"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Where Wizards Stay Up Late traces the people and systems that shape how modern tools are created and used.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-idea-factory",
        "title": "The Idea Factory",
        "author": "Jon Gertner",
        "type": "Nonfiction",
        "primaryGenre": "Technology",
        "genres": [
            "Technology",
            "Science"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Idea Factory traces the people and systems that shape how modern tools are created and used.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-victorian-internet",
        "title": "The Victorian Internet",
        "author": "Tom Standage",
        "type": "Nonfiction",
        "primaryGenre": "Technology",
        "genres": [
            "Technology",
            "Science"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Victorian Internet traces the people and systems that shape how modern tools are created and used.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "ai-superpowers",
        "title": "AI Superpowers",
        "author": "Kai-Fu Lee",
        "type": "Nonfiction",
        "primaryGenre": "Technology",
        "genres": [
            "Technology",
            "Science"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "AI Superpowers traces the people and systems that shape how modern tools are created and used.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "ghost-in-the-wires",
        "title": "Ghost in the Wires",
        "author": "Kevin Mitnick",
        "type": "Nonfiction",
        "primaryGenre": "Technology",
        "genres": [
            "Technology",
            "Science"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Ghost in the Wires traces the people and systems that shape how modern tools are created and used.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-cuckoo-s-egg",
        "title": "The Cuckoo’s Egg",
        "author": "Cliff Stoll",
        "type": "Nonfiction",
        "primaryGenre": "Technology",
        "genres": [
            "Technology",
            "Science"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Cuckoo’s Egg traces the people and systems that shape how modern tools are created and used.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "turn-right-at-machu-picchu",
        "title": "Turn Right at Machu Picchu",
        "author": "Mark Adams",
        "type": "Nonfiction",
        "primaryGenre": "Travel",
        "genres": [
            "Travel",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Turn Right at Machu Picchu turns a journey through unfamiliar places into observation, discovery, and reflection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-lost-continent",
        "title": "The Lost Continent",
        "author": "Bill Bryson",
        "type": "Nonfiction",
        "primaryGenre": "Travel",
        "genres": [
            "Travel",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Lost Continent turns a journey through unfamiliar places into observation, discovery, and reflection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-places-in-between",
        "title": "The Places in Between",
        "author": "Rory Stewart",
        "type": "Nonfiction",
        "primaryGenre": "Travel",
        "genres": [
            "Travel",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Places in Between turns a journey through unfamiliar places into observation, discovery, and reflection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-rings-of-saturn",
        "title": "The Rings of Saturn",
        "author": "W.G. Sebald",
        "type": "Nonfiction",
        "primaryGenre": "Travel",
        "genres": [
            "Travel",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Rings of Saturn turns a journey through unfamiliar places into observation, discovery, and reflection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "lands-of-lost-borders",
        "title": "Lands of Lost Borders",
        "author": "Kate Harris",
        "type": "Nonfiction",
        "primaryGenre": "Travel",
        "genres": [
            "Travel",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Lands of Lost Borders turns a journey through unfamiliar places into observation, discovery, and reflection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-turk-who-loved-apples",
        "title": "The Turk Who Loved Apples",
        "author": "Matt Gross",
        "type": "Nonfiction",
        "primaryGenre": "Travel",
        "genres": [
            "Travel",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Turk Who Loved Apples turns a journey through unfamiliar places into observation, discovery, and reflection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-caliph-s-house",
        "title": "The Caliph’s House",
        "author": "Tahir Shah",
        "type": "Nonfiction",
        "primaryGenre": "Travel",
        "genres": [
            "Travel",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Caliph’s House turns a journey through unfamiliar places into observation, discovery, and reflection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-sex-lives-of-cannibals",
        "title": "The Sex Lives of Cannibals",
        "author": "J. Maarten Troost",
        "type": "Nonfiction",
        "primaryGenre": "Travel",
        "genres": [
            "Travel",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Sex Lives of Cannibals turns a journey through unfamiliar places into observation, discovery, and reflection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-lost-city-of-the-monkey-god",
        "title": "The Lost City of the Monkey God",
        "author": "Douglas Preston",
        "type": "Nonfiction",
        "primaryGenre": "Travel",
        "genres": [
            "Travel",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Lost City of the Monkey God turns a journey through unfamiliar places into observation, discovery, and reflection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-impossible-first",
        "title": "The Impossible First",
        "author": "Colin O’Brady",
        "type": "Nonfiction",
        "primaryGenre": "Travel",
        "genres": [
            "Travel",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Impossible First turns a journey through unfamiliar places into observation, discovery, and reflection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "people-who-eat-darkness",
        "title": "People Who Eat Darkness",
        "author": "Richard Lloyd Parry",
        "type": "Nonfiction",
        "primaryGenre": "True Crime",
        "genres": [
            "True Crime",
            "Crime"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "People Who Eat Darkness investigates a real case with attention to evidence, context, and the people affected.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-monster-of-florence",
        "title": "The Monster of Florence",
        "author": "Douglas Preston and Mario Spezi",
        "type": "Nonfiction",
        "primaryGenre": "True Crime",
        "genres": [
            "True Crime",
            "Crime"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Monster of Florence investigates a real case with attention to evidence, context, and the people affected.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "american-predator",
        "title": "American Predator",
        "author": "Maureen Callahan",
        "type": "Nonfiction",
        "primaryGenre": "True Crime",
        "genres": [
            "True Crime",
            "Crime"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "American Predator investigates a real case with attention to evidence, context, and the people affected.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "we-keep-the-dead-close",
        "title": "We Keep the Dead Close",
        "author": "Becky Cooper",
        "type": "Nonfiction",
        "primaryGenre": "True Crime",
        "genres": [
            "True Crime",
            "Crime"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "We Keep the Dead Close investigates a real case with attention to evidence, context, and the people affected.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-five",
        "title": "The Five",
        "author": "Hallie Rubenhold",
        "type": "Nonfiction",
        "primaryGenre": "True Crime",
        "genres": [
            "True Crime",
            "Crime"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Five investigates a real case with attention to evidence, context, and the people affected.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-road-to-jonestown",
        "title": "The Road to Jonestown",
        "author": "Jeff Guinn",
        "type": "Nonfiction",
        "primaryGenre": "True Crime",
        "genres": [
            "True Crime",
            "Crime"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Road to Jonestown investigates a real case with attention to evidence, context, and the people affected.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-feather-thief",
        "title": "The Feather Thief",
        "author": "Kirk Wallace Johnson",
        "type": "Nonfiction",
        "primaryGenre": "True Crime",
        "genres": [
            "True Crime",
            "Crime"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "The Feather Thief investigates a real case with attention to evidence, context, and the people affected.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "empire-of-sin",
        "title": "Empire of Sin",
        "author": "Gary Krist",
        "type": "Nonfiction",
        "primaryGenre": "True Crime",
        "genres": [
            "True Crime",
            "Crime"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "Empire of Sin investigates a real case with attention to evidence, context, and the people affected.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "lost-girls",
        "title": "Lost Girls",
        "author": "Robert Kolker",
        "type": "Nonfiction",
        "primaryGenre": "True Crime",
        "genres": [
            "True Crime",
            "Crime"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Standard Read",
        "description": "Lost Girls investigates a real case with attention to evidence, context, and the people affected.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "how-to-write-an-autobiographical-novel",
        "title": "How to Write an Autobiographical Novel",
        "author": "Alexander Chee",
        "type": "Nonfiction",
        "primaryGenre": "Essays",
        "genres": [
            "Essays",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "How to Write an Autobiographical Novel collects sharp reflections on culture, identity, experience, and the ideas connecting them.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "feel-free",
        "title": "Feel Free",
        "author": "Zadie Smith",
        "type": "Nonfiction",
        "primaryGenre": "Essays",
        "genres": [
            "Essays",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Feel Free collects sharp reflections on culture, identity, experience, and the ideas connecting them.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-book-of-delights",
        "title": "The Book of Delights",
        "author": "Ross Gay",
        "type": "Nonfiction",
        "primaryGenre": "Essays",
        "genres": [
            "Essays",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Book of Delights collects sharp reflections on culture, identity, experience, and the ideas connecting them.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "intimations",
        "title": "Intimations",
        "author": "Zadie Smith",
        "type": "Nonfiction",
        "primaryGenre": "Essays",
        "genres": [
            "Essays",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Intimations collects sharp reflections on culture, identity, experience, and the ideas connecting them.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-best-we-could-do",
        "title": "The Best We Could Do",
        "author": "Thi Bui",
        "type": "Nonfiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Memoir",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "The Best We Could Do uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "we-are-never-meeting-in-real-life",
        "title": "We Are Never Meeting in Real Life",
        "author": "Samantha Irby",
        "type": "Nonfiction",
        "primaryGenre": "Essays",
        "genres": [
            "Essays",
            "Humor and Comedy",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "We Are Never Meeting in Real Life collects sharp reflections on culture, identity, experience, and the ideas connecting them.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "thick",
        "title": "Thick",
        "author": "Tressie McMillan Cottom",
        "type": "Nonfiction",
        "primaryGenre": "Essays",
        "genres": [
            "Essays",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Thick collects sharp reflections on culture, identity, experience, and the ideas connecting them.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-opposite-of-loneliness",
        "title": "The Opposite of Loneliness",
        "author": "Marina Keegan",
        "type": "Nonfiction",
        "primaryGenre": "Essays",
        "genres": [
            "Essays",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Opposite of Loneliness collects sharp reflections on culture, identity, experience, and the ideas connecting them.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-empathy-exams",
        "title": "The Empathy Exams",
        "author": "Leslie Jamison",
        "type": "Nonfiction",
        "primaryGenre": "Essays",
        "genres": [
            "Essays",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Empathy Exams collects sharp reflections on culture, identity, experience, and the ideas connecting them.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "nobody-is-talking-about-this",
        "title": "Nobody Is Talking About This",
        "author": "Patricia Lockwood",
        "type": "Fiction",
        "primaryGenre": "Contemporary Fiction",
        "genres": [
            "Contemporary Fiction",
            "Drama"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "Nobody Is Talking About This explores present-day relationships, change, and the quiet turning points that shape a life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "sheets",
        "title": "Sheets",
        "author": "Brenna Thummler",
        "type": "Fiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "Sheets uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "snapdragon",
        "title": "Snapdragon",
        "author": "Kat Leyh",
        "type": "Fiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "Snapdragon uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-okay-witch",
        "title": "The Okay Witch",
        "author": "Emma Steinkellner",
        "type": "Fiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "The Okay Witch uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-tea-dragon-society",
        "title": "The Tea Dragon Society",
        "author": "Kay O’Neill",
        "type": "Fiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "The Tea Dragon Society uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "the-girl-from-the-sea",
        "title": "The Girl from the Sea",
        "author": "Molly Knox Ostertag",
        "type": "Fiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "The Girl from the Sea uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "pumpkinheads",
        "title": "Pumpkinheads",
        "author": "Rainbow Rowell and Faith Erin Hicks",
        "type": "Fiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "Pumpkinheads uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-magic-fish",
        "title": "The Magic Fish",
        "author": "Trung Le Nguyen",
        "type": "Fiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "The Magic Fish uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "stargazing",
        "title": "Stargazing",
        "author": "Jen Wang",
        "type": "Fiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "Stargazing uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-witch-boy",
        "title": "The Witch Boy",
        "author": "Molly Knox Ostertag",
        "type": "Fiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "The Witch Boy uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "class-act",
        "title": "Class Act",
        "author": "Jerry Craft",
        "type": "Fiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "Class Act uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "hey-kiddo",
        "title": "Hey, Kiddo",
        "author": "Jarrett J. Krosoczka",
        "type": "Nonfiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "Hey, Kiddo uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "holidays-on-ice",
        "title": "Holidays on Ice",
        "author": "David Sedaris",
        "type": "Nonfiction",
        "primaryGenre": "Humor and Comedy",
        "genres": [
            "Humor and Comedy",
            "Essays"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Funny",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "Holidays on Ice finds comedy in social friction, personal mishaps, and the absurdities of daily life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "let-s-pretend-this-never-happened",
        "title": "Let’s Pretend This Never Happened",
        "author": "Jenny Lawson",
        "type": "Nonfiction",
        "primaryGenre": "Humor and Comedy",
        "genres": [
            "Humor and Comedy",
            "Essays"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Funny",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "Let’s Pretend This Never Happened finds comedy in social friction, personal mishaps, and the absurdities of daily life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "furiously-happy",
        "title": "Furiously Happy",
        "author": "Jenny Lawson",
        "type": "Nonfiction",
        "primaryGenre": "Humor and Comedy",
        "genres": [
            "Humor and Comedy",
            "Essays"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Funny",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "Furiously Happy finds comedy in social friction, personal mishaps, and the absurdities of daily life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "dear-girls",
        "title": "Dear Girls",
        "author": "Ali Wong",
        "type": "Nonfiction",
        "primaryGenre": "Humor and Comedy",
        "genres": [
            "Humor and Comedy",
            "Essays"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Funny",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "Dear Girls finds comedy in social friction, personal mishaps, and the absurdities of daily life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "wow-no-thank-you",
        "title": "Wow, No Thank You",
        "author": "Samantha Irby",
        "type": "Nonfiction",
        "primaryGenre": "Humor and Comedy",
        "genres": [
            "Humor and Comedy",
            "Essays"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Funny",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "Wow, No Thank You finds comedy in social friction, personal mishaps, and the absurdities of daily life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "i-feel-bad-about-my-neck",
        "title": "I Feel Bad About My Neck",
        "author": "Nora Ephron",
        "type": "Nonfiction",
        "primaryGenre": "Humor and Comedy",
        "genres": [
            "Humor and Comedy",
            "Essays"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Funny",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "I Feel Bad About My Neck finds comedy in social friction, personal mishaps, and the absurdities of daily life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "heartburn",
        "title": "Heartburn",
        "author": "Nora Ephron",
        "type": "Fiction",
        "primaryGenre": "Humor and Comedy",
        "genres": [
            "Humor and Comedy",
            "Essays"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Funny",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "Heartburn finds comedy in social friction, personal mishaps, and the absurdities of daily life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-disaster-artist",
        "title": "The Disaster Artist",
        "author": "Greg Sestero and Tom Bissell",
        "type": "Nonfiction",
        "primaryGenre": "Humor and Comedy",
        "genres": [
            "Humor and Comedy",
            "Essays"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Funny",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "The Disaster Artist finds comedy in social friction, personal mishaps, and the absurdities of daily life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-wisteria-society-of-lady-scoundrels",
        "title": "The Wisteria Society of Lady Scoundrels",
        "author": "India Holton",
        "type": "Fiction",
        "primaryGenre": "Humor and Comedy",
        "genres": [
            "Humor and Comedy",
            "Essays"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Funny",
            "Relaxing"
        ],
        "length": "Standard Read",
        "description": "The Wisteria Society of Lady Scoundrels finds comedy in social friction, personal mishaps, and the absurdities of daily life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "citizen",
        "title": "Citizen",
        "author": "Claudia Rankine",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "Citizen uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "crush",
        "title": "Crush",
        "author": "Richard Siken",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "Crush uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "life-on-mars",
        "title": "Life on Mars",
        "author": "Tracy K. Smith",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "Life on Mars uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "bright-dead-things",
        "title": "Bright Dead Things",
        "author": "Ada Limón",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "Bright Dead Things uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "felicity",
        "title": "Felicity",
        "author": "Mary Oliver",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "Felicity uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-wild-iris",
        "title": "The Wild Iris",
        "author": "Louise Glück",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "The Wild Iris uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "don-t-call-us-dead",
        "title": "Don’t Call Us Dead",
        "author": "Danez Smith",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "Don’t Call Us Dead uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-tradition",
        "title": "The Tradition",
        "author": "Jericho Brown",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "The Tradition uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "teaching-my-mother-how-to-give-birth",
        "title": "Teaching My Mother How to Give Birth",
        "author": "Warsan Shire",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "Teaching My Mother How to Give Birth uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "wade-in-the-water",
        "title": "Wade in the Water",
        "author": "Tracy K. Smith",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "Wade in the Water uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-dictator-s-handbook",
        "title": "The Dictator’s Handbook",
        "author": "Bruce Bueno de Mesquita and Alastair Smith",
        "type": "Nonfiction",
        "primaryGenre": "Politics",
        "genres": [
            "Politics",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Dictator’s Handbook examines power, civic life, public institutions, and the choices that shape society.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-system",
        "title": "The System",
        "author": "Robert B. Reich",
        "type": "Nonfiction",
        "primaryGenre": "Politics",
        "genres": [
            "Politics",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The System examines power, civic life, public institutions, and the choices that shape society.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-sum-of-us",
        "title": "The Sum of Us",
        "author": "Heather McGhee",
        "type": "Nonfiction",
        "primaryGenre": "Politics",
        "genres": [
            "Politics",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Sum of Us examines power, civic life, public institutions, and the choices that shape society.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "twilight-of-democracy",
        "title": "Twilight of Democracy",
        "author": "Anne Applebaum",
        "type": "Nonfiction",
        "primaryGenre": "Politics",
        "genres": [
            "Politics",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Twilight of Democracy examines power, civic life, public institutions, and the choices that shape society.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-road-to-serfdom",
        "title": "The Road to Serfdom",
        "author": "Friedrich Hayek",
        "type": "Nonfiction",
        "primaryGenre": "Politics",
        "genres": [
            "Politics",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Road to Serfdom examines power, civic life, public institutions, and the choices that shape society.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-conscience-of-a-liberal",
        "title": "The Conscience of a Liberal",
        "author": "Paul Krugman",
        "type": "Nonfiction",
        "primaryGenre": "Politics",
        "genres": [
            "Politics",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Conscience of a Liberal examines power, civic life, public institutions, and the choices that shape society.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-souls-of-black-folk",
        "title": "The Souls of Black Folk",
        "author": "W.E.B. Du Bois",
        "type": "Nonfiction",
        "primaryGenre": "Politics",
        "genres": [
            "Politics",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Souls of Black Folk examines power, civic life, public institutions, and the choices that shape society.",
        "classicOrModern": "Classic",
        "seriesType": "Standalone"
    },
    {
        "id": "the-once-and-future-liberal",
        "title": "The Once and Future Liberal",
        "author": "Mark Lilla",
        "type": "Nonfiction",
        "primaryGenre": "Politics",
        "genres": [
            "Politics",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Once and Future Liberal examines power, civic life, public institutions, and the choices that shape society.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "politics-is-for-power",
        "title": "Politics Is for Power",
        "author": "Eitan Hersh",
        "type": "Nonfiction",
        "primaryGenre": "Politics",
        "genres": [
            "Politics",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Politics Is for Power examines power, civic life, public institutions, and the choices that shape society.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-people-no",
        "title": "The People, No",
        "author": "Thomas Frank",
        "type": "Nonfiction",
        "primaryGenre": "Politics",
        "genres": [
            "Politics",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Inspiring",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The People, No examines power, civic life, public institutions, and the choices that shape society.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-universal-christ",
        "title": "The Universal Christ",
        "author": "Richard Rohr",
        "type": "Nonfiction",
        "primaryGenre": "Religion and Spirituality",
        "genres": [
            "Religion and Spirituality",
            "Philosophy"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Quick Read",
        "description": "The Universal Christ offers a reflective exploration of belief, purpose, attention, and inner life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-book-of-awakening",
        "title": "The Book of Awakening",
        "author": "Mark Nepo",
        "type": "Nonfiction",
        "primaryGenre": "Religion and Spirituality",
        "genres": [
            "Religion and Spirituality",
            "Philosophy"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Quick Read",
        "description": "The Book of Awakening offers a reflective exploration of belief, purpose, attention, and inner life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-seat-of-the-soul",
        "title": "The Seat of the Soul",
        "author": "Gary Zukav",
        "type": "Nonfiction",
        "primaryGenre": "Religion and Spirituality",
        "genres": [
            "Religion and Spirituality",
            "Philosophy"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Quick Read",
        "description": "The Seat of the Soul offers a reflective exploration of belief, purpose, attention, and inner life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "a-new-earth",
        "title": "A New Earth",
        "author": "Eckhart Tolle",
        "type": "Nonfiction",
        "primaryGenre": "Religion and Spirituality",
        "genres": [
            "Religion and Spirituality",
            "Philosophy"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Quick Read",
        "description": "A New Earth offers a reflective exploration of belief, purpose, attention, and inner life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "when-things-fall-apart",
        "title": "When Things Fall Apart",
        "author": "Pema Chödrön",
        "type": "Nonfiction",
        "primaryGenre": "Religion and Spirituality",
        "genres": [
            "Religion and Spirituality",
            "Philosophy"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Quick Read",
        "description": "When Things Fall Apart offers a reflective exploration of belief, purpose, attention, and inner life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "wherever-you-go-there-you-are",
        "title": "Wherever You Go, There You Are",
        "author": "Jon Kabat-Zinn",
        "type": "Nonfiction",
        "primaryGenre": "Religion and Spirituality",
        "genres": [
            "Religion and Spirituality",
            "Philosophy"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Quick Read",
        "description": "Wherever You Go, There You Are offers a reflective exploration of belief, purpose, attention, and inner life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-art-of-stillness",
        "title": "The Art of Stillness",
        "author": "Pico Iyer",
        "type": "Nonfiction",
        "primaryGenre": "Religion and Spirituality",
        "genres": [
            "Religion and Spirituality",
            "Philosophy"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Quick Read",
        "description": "The Art of Stillness offers a reflective exploration of belief, purpose, attention, and inner life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-prophet",
        "title": "The Prophet",
        "author": "Kahlil Gibran",
        "type": "Nonfiction",
        "primaryGenre": "Religion and Spirituality",
        "genres": [
            "Religion and Spirituality",
            "Philosophy"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Quick Read",
        "description": "The Prophet offers a reflective exploration of belief, purpose, attention, and inner life.",
        "classicOrModern": "Classic",
        "seriesType": "Standalone"
    },
    {
        "id": "the-screwtape-letters",
        "title": "The Screwtape Letters",
        "author": "C.S. Lewis",
        "type": "Fiction",
        "primaryGenre": "Religion and Spirituality",
        "genres": [
            "Religion and Spirituality",
            "Philosophy"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Quick Read",
        "description": "The Screwtape Letters offers a reflective exploration of belief, purpose, attention, and inner life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-celestine-prophecy",
        "title": "The Celestine Prophecy",
        "author": "James Redfield",
        "type": "Fiction",
        "primaryGenre": "Religion and Spirituality",
        "genres": [
            "Religion and Spirituality",
            "Philosophy"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Relaxing",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Quick Read",
        "description": "The Celestine Prophecy offers a reflective exploration of belief, purpose, attention, and inner life.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "friday-black",
        "title": "Friday Black",
        "author": "Nana Kwame Adjei-Brenyah",
        "type": "Fiction",
        "primaryGenre": "Short Stories",
        "genres": [
            "Short Stories",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Mysterious",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Friday Black gathers compact narratives that reveal character and consequence with precision.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "florida",
        "title": "Florida",
        "author": "Lauren Groff",
        "type": "Fiction",
        "primaryGenre": "Short Stories",
        "genres": [
            "Short Stories",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Mysterious",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Florida gathers compact narratives that reveal character and consequence with precision.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "homesick-for-another-world",
        "title": "Homesick for Another World",
        "author": "Ottessa Moshfegh",
        "type": "Fiction",
        "primaryGenre": "Short Stories",
        "genres": [
            "Short Stories",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Mysterious",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Homesick for Another World gathers compact narratives that reveal character and consequence with precision.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "difficult-women",
        "title": "Difficult Women",
        "author": "Roxane Gay",
        "type": "Fiction",
        "primaryGenre": "Short Stories",
        "genres": [
            "Short Stories",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Mysterious",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Difficult Women gathers compact narratives that reveal character and consequence with precision.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "salt-slow",
        "title": "Salt Slow",
        "author": "Julia Armfield",
        "type": "Fiction",
        "primaryGenre": "Short Stories",
        "genres": [
            "Short Stories",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Mysterious",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Salt Slow gathers compact narratives that reveal character and consequence with precision.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-office-of-historical-corrections",
        "title": "The Office of Historical Corrections",
        "author": "Danielle Evans",
        "type": "Fiction",
        "primaryGenre": "Short Stories",
        "genres": [
            "Short Stories",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Mysterious",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Office of Historical Corrections gathers compact narratives that reveal character and consequence with precision.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "afterparties",
        "title": "Afterparties",
        "author": "Anthony Veasna So",
        "type": "Fiction",
        "primaryGenre": "Short Stories",
        "genres": [
            "Short Stories",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Mysterious",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Afterparties gathers compact narratives that reveal character and consequence with precision.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-refugees",
        "title": "The Refugees",
        "author": "Viet Thanh Nguyen",
        "type": "Fiction",
        "primaryGenre": "Short Stories",
        "genres": [
            "Short Stories",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Mysterious",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "The Refugees gathers compact narratives that reveal character and consequence with precision.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "filthy-animals",
        "title": "Filthy Animals",
        "author": "Brandon Taylor",
        "type": "Fiction",
        "primaryGenre": "Short Stories",
        "genres": [
            "Short Stories",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Mysterious",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Filthy Animals gathers compact narratives that reveal character and consequence with precision.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "land-of-big-numbers",
        "title": "Land of Big Numbers",
        "author": "Te-Ping Chen",
        "type": "Fiction",
        "primaryGenre": "Short Stories",
        "genres": [
            "Short Stories",
            "Drama"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Mysterious",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Land of Big Numbers gathers compact narratives that reveal character and consequence with precision.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-jordan-rules",
        "title": "The Jordan Rules",
        "author": "Sam Smith",
        "type": "Nonfiction",
        "primaryGenre": "Sports",
        "genres": [
            "Sports",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Long Read",
        "description": "The Jordan Rules looks beyond competition to discipline, teamwork, pressure, and personal transformation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "eleven-rings",
        "title": "Eleven Rings",
        "author": "Phil Jackson",
        "type": "Nonfiction",
        "primaryGenre": "Sports",
        "genres": [
            "Sports",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Long Read",
        "description": "Eleven Rings looks beyond competition to discipline, teamwork, pressure, and personal transformation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-book-of-basketball",
        "title": "The Book of Basketball",
        "author": "Bill Simmons",
        "type": "Nonfiction",
        "primaryGenre": "Sports",
        "genres": [
            "Sports",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Long Read",
        "description": "The Book of Basketball looks beyond competition to discipline, teamwork, pressure, and personal transformation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-last-shot",
        "title": "The Last Shot",
        "author": "Darcy Frey",
        "type": "Nonfiction",
        "primaryGenre": "Sports",
        "genres": [
            "Sports",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Long Read",
        "description": "The Last Shot looks beyond competition to discipline, teamwork, pressure, and personal transformation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-boys-in-the-cave",
        "title": "The Boys in the Cave",
        "author": "Matt Gutman",
        "type": "Nonfiction",
        "primaryGenre": "Survival",
        "genres": [
            "Survival",
            "Sports",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Suspenseful",
            "Inspiring"
        ],
        "length": "Standard Read",
        "description": "The Boys in the Cave recounts a struggle against severe conditions where judgment and endurance become essential.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-perfect-mile",
        "title": "The Perfect Mile",
        "author": "Neal Bascomb",
        "type": "Nonfiction",
        "primaryGenre": "Sports",
        "genres": [
            "Sports",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Long Read",
        "description": "The Perfect Mile looks beyond competition to discipline, teamwork, pressure, and personal transformation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "running-with-the-buffaloes",
        "title": "Running with the Buffaloes",
        "author": "Chris Lear",
        "type": "Nonfiction",
        "primaryGenre": "Sports",
        "genres": [
            "Sports",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Long Read",
        "description": "Running with the Buffaloes looks beyond competition to discipline, teamwork, pressure, and personal transformation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-champion-s-mind",
        "title": "The Champion’s Mind",
        "author": "Jim Afremow",
        "type": "Nonfiction",
        "primaryGenre": "Sports",
        "genres": [
            "Sports",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Long Read",
        "description": "The Champion’s Mind looks beyond competition to discipline, teamwork, pressure, and personal transformation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "born-to-run",
        "title": "Born to Run",
        "author": "Christopher McDougall",
        "type": "Nonfiction",
        "primaryGenre": "Sports",
        "genres": [
            "Sports",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Long Read",
        "description": "Born to Run looks beyond competition to discipline, teamwork, pressure, and personal transformation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "endure",
        "title": "Endure",
        "author": "Alex Hutchinson",
        "type": "Nonfiction",
        "primaryGenre": "Sports",
        "genres": [
            "Sports",
            "Memoir"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Hopeful",
            "Inspiring"
        ],
        "length": "Long Read",
        "description": "Endure looks beyond competition to discipline, teamwork, pressure, and personal transformation.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "deep-survival",
        "title": "Deep Survival",
        "author": "Laurence Gonzales",
        "type": "Nonfiction",
        "primaryGenre": "Survival",
        "genres": [
            "Survival",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Suspenseful",
            "Inspiring"
        ],
        "length": "Standard Read",
        "description": "Deep Survival recounts a struggle against severe conditions where judgment and endurance become essential.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "jungle",
        "title": "Jungle",
        "author": "Yossi Ghinsberg",
        "type": "Nonfiction",
        "primaryGenre": "Survival",
        "genres": [
            "Survival",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Suspenseful",
            "Inspiring"
        ],
        "length": "Standard Read",
        "description": "Jungle recounts a struggle against severe conditions where judgment and endurance become essential.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "miracle-in-the-andes",
        "title": "Miracle in the Andes",
        "author": "Nando Parrado",
        "type": "Nonfiction",
        "primaryGenre": "Survival",
        "genres": [
            "Survival",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Suspenseful",
            "Inspiring"
        ],
        "length": "Standard Read",
        "description": "Miracle in the Andes recounts a struggle against severe conditions where judgment and endurance become essential.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-indifferent-stars-above",
        "title": "The Indifferent Stars Above",
        "author": "Daniel James Brown",
        "type": "Nonfiction",
        "primaryGenre": "Survival",
        "genres": [
            "Survival",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Suspenseful",
            "Inspiring"
        ],
        "length": "Standard Read",
        "description": "The Indifferent Stars Above recounts a struggle against severe conditions where judgment and endurance become essential.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "skeletons-on-the-zahara",
        "title": "Skeletons on the Zahara",
        "author": "Dean King",
        "type": "Nonfiction",
        "primaryGenre": "Survival",
        "genres": [
            "Survival",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Suspenseful",
            "Inspiring"
        ],
        "length": "Standard Read",
        "description": "Skeletons on the Zahara recounts a struggle against severe conditions where judgment and endurance become essential.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "madhouse-at-the-end-of-the-earth",
        "title": "Madhouse at the End of the Earth",
        "author": "Julian Sancton",
        "type": "Nonfiction",
        "primaryGenre": "Survival",
        "genres": [
            "Survival",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Suspenseful",
            "Inspiring"
        ],
        "length": "Standard Read",
        "description": "Madhouse at the End of the Earth recounts a struggle against severe conditions where judgment and endurance become essential.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "alone-against-the-north",
        "title": "Alone Against the North",
        "author": "Adam Shoalts",
        "type": "Nonfiction",
        "primaryGenre": "Survival",
        "genres": [
            "Survival",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Suspenseful",
            "Inspiring"
        ],
        "length": "Standard Read",
        "description": "Alone Against the North recounts a struggle against severe conditions where judgment and endurance become essential.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "lost-in-the-wild",
        "title": "Lost in the Wild",
        "author": "Cary J. Griffith",
        "type": "Nonfiction",
        "primaryGenre": "Survival",
        "genres": [
            "Survival",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Suspenseful",
            "Inspiring"
        ],
        "length": "Standard Read",
        "description": "Lost in the Wild recounts a struggle against severe conditions where judgment and endurance become essential.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "81-days-below-zero",
        "title": "81 Days Below Zero",
        "author": "Brian Murphy",
        "type": "Nonfiction",
        "primaryGenre": "Survival",
        "genres": [
            "Survival",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Suspenseful",
            "Inspiring"
        ],
        "length": "Standard Read",
        "description": "81 Days Below Zero recounts a struggle against severe conditions where judgment and endurance become essential.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-twenty-ninth-day",
        "title": "The Twenty-Ninth Day",
        "author": "Alex Messenger",
        "type": "Nonfiction",
        "primaryGenre": "Survival",
        "genres": [
            "Survival",
            "Adventure"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Suspenseful",
            "Inspiring"
        ],
        "length": "Standard Read",
        "description": "The Twenty-Ninth Day recounts a struggle against severe conditions where judgment and endurance become essential.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-forever-war",
        "title": "The Forever War",
        "author": "Dexter Filkins",
        "type": "Nonfiction",
        "primaryGenre": "War",
        "genres": [
            "War",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Forever War examines conflict through strategy, memory, sacrifice, and its human cost.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "with-the-old-breed",
        "title": "With the Old Breed",
        "author": "E.B. Sledge",
        "type": "Nonfiction",
        "primaryGenre": "War",
        "genres": [
            "War",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "With the Old Breed examines conflict through strategy, memory, sacrifice, and its human cost.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-good-war",
        "title": "The Good War",
        "author": "Studs Terkel",
        "type": "Nonfiction",
        "primaryGenre": "War",
        "genres": [
            "War",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Good War examines conflict through strategy, memory, sacrifice, and its human cost.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "hiroshima",
        "title": "Hiroshima",
        "author": "John Hersey",
        "type": "Nonfiction",
        "primaryGenre": "War",
        "genres": [
            "War",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "Hiroshima examines conflict through strategy, memory, sacrifice, and its human cost.",
        "classicOrModern": "Classic",
        "seriesType": "Standalone"
    },
    {
        "id": "the-face-of-battle",
        "title": "The Face of Battle",
        "author": "John Keegan",
        "type": "Nonfiction",
        "primaryGenre": "War",
        "genres": [
            "War",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Face of Battle examines conflict through strategy, memory, sacrifice, and its human cost.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-coldest-winter",
        "title": "The Coldest Winter",
        "author": "David Halberstam",
        "type": "Nonfiction",
        "primaryGenre": "War",
        "genres": [
            "War",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Coldest Winter examines conflict through strategy, memory, sacrifice, and its human cost.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-liberator",
        "title": "The Liberator",
        "author": "Alex Kershaw",
        "type": "Nonfiction",
        "primaryGenre": "War",
        "genres": [
            "War",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Liberator examines conflict through strategy, memory, sacrifice, and its human cost.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-bomber-mafia",
        "title": "The Bomber Mafia",
        "author": "Malcolm Gladwell",
        "type": "Nonfiction",
        "primaryGenre": "War",
        "genres": [
            "War",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Bomber Mafia examines conflict through strategy, memory, sacrifice, and its human cost.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-last-stand-of-the-tin-can-sailors",
        "title": "The Last Stand of the Tin Can Sailors",
        "author": "James D. Hornfischer",
        "type": "Nonfiction",
        "primaryGenre": "War",
        "genres": [
            "War",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The Last Stand of the Tin Can Sailors examines conflict through strategy, memory, sacrifice, and its human cost.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-war-that-ended-peace",
        "title": "The War That Ended Peace",
        "author": "Margaret MacMillan",
        "type": "Nonfiction",
        "primaryGenre": "War",
        "genres": [
            "War",
            "History"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Long Read",
        "description": "The War That Ended Peace examines conflict through strategy, memory, sacrifice, and its human cost.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "a-wizard-of-earthsea",
        "title": "A Wizard of Earthsea",
        "author": "Ursula K. Le Guin",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "A Wizard of Earthsea opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-name-of-the-wind",
        "title": "The Name of the Wind",
        "author": "Patrick Rothfuss",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "The Name of the Wind opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "jonathan-strange-mr-norrell",
        "title": "Jonathan Strange & Mr Norrell",
        "author": "Susanna Clarke",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Historical Fiction",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "Jonathan Strange & Mr Norrell opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "uprooted",
        "title": "Uprooted",
        "author": "Naomi Novik",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Romance",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "Uprooted opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "spinning-silver",
        "title": "Spinning Silver",
        "author": "Naomi Novik",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Magical Realism",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "Spinning Silver opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-priory-of-the-orange-tree",
        "title": "The Priory of the Orange Tree",
        "author": "Samantha Shannon",
        "type": "Fiction",
        "primaryGenre": "Fantasy",
        "genres": [
            "Fantasy",
            "Adventure"
        ],
        "audiences": [
            "Middle Grade",
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Mysterious",
            "Hopeful"
        ],
        "length": "Long Read",
        "description": "The Priory of the Orange Tree opens a richly imagined world shaped by wonder, danger, and transformative choices.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "jane-eyre",
        "title": "Jane Eyre",
        "author": "Charlotte Bronte",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Drama",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "Jane Eyre centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Classic",
        "seriesType": "Standalone"
    },
    {
        "id": "persuasion",
        "title": "Persuasion",
        "author": "Jane Austen",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Drama",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "Persuasion centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Classic",
        "seriesType": "Standalone"
    },
    {
        "id": "red-white-royal-blue",
        "title": "Red, White & Royal Blue",
        "author": "Casey McQuiston",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "Red, White & Royal Blue centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "get-a-life-chloe-brown",
        "title": "Get a Life, Chloe Brown",
        "author": "Talia Hibbert",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "Get a Life, Chloe Brown centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "the-kiss-quotient",
        "title": "The Kiss Quotient",
        "author": "Helen Hoang",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "The Kiss Quotient centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "people-we-meet-on-vacation",
        "title": "People We Meet on Vacation",
        "author": "Emily Henry",
        "type": "Fiction",
        "primaryGenre": "Romance",
        "genres": [
            "Romance",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Romantic",
            "Hopeful",
            "Emotional"
        ],
        "length": "Standard Read",
        "description": "People We Meet on Vacation centers an evolving relationship shaped by vulnerability, humor, and emotional risk.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "maus",
        "title": "Maus",
        "author": "Art Spiegelman",
        "type": "Fiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Memoir",
            "War",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "Maus uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "nimona",
        "title": "Nimona",
        "author": "ND Stevenson",
        "type": "Fiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Fantasy",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "Nimona uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "march-book-one",
        "title": "March: Book One",
        "author": "John Lewis, Andrew Aydin, and Nate Powell",
        "type": "Fiction",
        "primaryGenre": "Graphic Novels and Comics",
        "genres": [
            "Graphic Novels and Comics",
            "Memoir",
            "History",
            "Young Adult"
        ],
        "audiences": [
            "Children",
            "Middle Grade",
            "Teenagers",
            "Young Adults"
        ],
        "moods": [
            "Emotional",
            "Hopeful",
            "Funny"
        ],
        "length": "Standard Read",
        "description": "March: Book One uses sequential art to tell an expressive story about identity, change, and connection.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "leaves-of-grass",
        "title": "Leaves of Grass",
        "author": "Walt Whitman",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "Leaves of Grass uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Classic",
        "seriesType": "Standalone"
    },
    {
        "id": "ariel",
        "title": "Ariel",
        "author": "Sylvia Plath",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "Ariel uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Classic",
        "seriesType": "Standalone"
    },
    {
        "id": "devotions",
        "title": "Devotions",
        "author": "Mary Oliver",
        "type": "Fiction",
        "primaryGenre": "Poetry",
        "genres": [
            "Poetry"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "Devotions uses vivid, concentrated language to explore memory, feeling, place, and identity.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    }
];
  supplementalBooks.push(...[
    {
        "id": "without-remorse",
        "title": "Without Remorse",
        "author": "Tom Clancy",
        "type": "Fiction",
        "primaryGenre": "Action",
        "genres": [
            "Action",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Suspenseful"
        ],
        "length": "Long Read",
        "description": "Without Remorse delivers a fast-moving story of danger, loss, and determined action under pressure.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "hunt-red-october",
        "title": "The Hunt for Red October",
        "author": "Tom Clancy",
        "type": "Fiction",
        "primaryGenre": "Action",
        "genres": [
            "Action",
            "Thriller"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Suspenseful"
        ],
        "length": "Long Read",
        "description": "The Hunt for Red October builds a high-stakes contest around strategy, secrecy, and difficult command decisions.",
        "classicOrModern": "Modern",
        "seriesType": "Series"
    },
    {
        "id": "fahrenheit-451",
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "type": "Fiction",
        "primaryGenre": "Dystopian",
        "genres": [
            "Dystopian",
            "Science Fiction"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Dark",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Quick Read",
        "description": "Fahrenheit 451 imagines a controlled society where one worker begins questioning the destruction of books and ideas.",
        "classicOrModern": "Classic",
        "seriesType": "Standalone"
    },
    {
        "id": "in-patagonia",
        "title": "In Patagonia",
        "author": "Bruce Chatwin",
        "type": "Nonfiction",
        "primaryGenre": "Travel",
        "genres": [
            "Travel",
            "Memoir"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Adventurous",
            "Relaxing",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "In Patagonia turns a far-ranging journey into vivid encounters with landscapes, histories, and remarkable people.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "helter-skelter",
        "title": "Helter Skelter",
        "author": "Vincent Bugliosi with Curt Gentry",
        "type": "Nonfiction",
        "primaryGenre": "True Crime",
        "genres": [
            "True Crime",
            "Crime"
        ],
        "audiences": [
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Long Read",
        "description": "Helter Skelter examines a notorious case through evidence, courtroom strategy, and its lasting public impact.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "midnight-garden-good-evil",
        "title": "Midnight in the Garden of Good and Evil",
        "author": "John Berendt",
        "type": "Nonfiction",
        "primaryGenre": "True Crime",
        "genres": [
            "True Crime",
            "Crime",
            "Travel"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Mysterious",
            "Suspenseful",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Midnight in the Garden of Good and Evil observes a distinctive city and the real case that unsettles its social world.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "stranger-beside-me",
        "title": "The Stranger Beside Me",
        "author": "Ann Rule",
        "type": "Nonfiction",
        "primaryGenre": "True Crime",
        "genres": [
            "True Crime",
            "Memoir",
            "Crime"
        ],
        "audiences": [
            "Adults"
        ],
        "moods": [
            "Dark",
            "Mysterious",
            "Suspenseful"
        ],
        "length": "Long Read",
        "description": "The Stranger Beside Me combines personal recollection and investigation to confront a disturbing hidden identity.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "tenth-of-december",
        "title": "Tenth of December",
        "author": "George Saunders",
        "type": "Fiction",
        "primaryGenre": "Short Stories",
        "genres": [
            "Short Stories",
            "Contemporary Fiction"
        ],
        "audiences": [
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Emotional",
            "Funny",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Tenth of December gathers inventive stories about compassion, status, fear, and the possibility of choosing differently.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    },
    {
        "id": "friday-night-lights",
        "title": "Friday Night Lights",
        "author": "H.G. Bissinger",
        "type": "Nonfiction",
        "primaryGenre": "Sports",
        "genres": [
            "Sports",
            "History"
        ],
        "audiences": [
            "Teenagers",
            "Young Adults",
            "Adults"
        ],
        "moods": [
            "Exciting",
            "Emotional",
            "Thought-provoking"
        ],
        "length": "Standard Read",
        "description": "Friday Night Lights examines a football season alongside the hopes, pressures, and divisions of a Texas town.",
        "classicOrModern": "Modern",
        "seriesType": "Standalone"
    }
]);

  books.push(...supplementalBooks);

  const genreMinimums = Object.freeze({
    "Action": 15,
    "Adventure": 18,
    "Contemporary Fiction": 18,
    "Crime": 15,
    "Drama": 15,
    "Dystopian": 15,
    "Fantasy": 22,
    "Historical Fiction": 18,
    "Horror": 15,
    "Magical Realism": 12,
    "Mystery": 22,
    "Romance": 22,
    "Science Fiction": 22,
    "Thriller": 18,
    "Young Adult": 22,
    "Biography and Autobiography": 18,
    "Business and Entrepreneurship": 15,
    "Education": 12,
    "Finance": 15,
    "Health and Wellness": 15,
    "History": 22,
    "Memoir": 18,
    "Philosophy": 15,
    "Psychology": 18,
    "Science": 22,
    "Self-Improvement": 18,
    "Technology": 15,
    "Travel": 15,
    "True Crime": 15,
    "Essays": 15,
    "Graphic Novels and Comics": 18,
    "Humor and Comedy": 15,
    "Poetry": 15,
    "Politics": 15,
    "Religion and Spirituality": 15,
    "Short Stories": 15,
    "Sports": 15,
    "Survival": 15,
    "War": 15
});

  function validateOriginalBooksWerePreserved(library = books) {
    const currentIds = new Set(library.map((item) => item.id));
    const missingIds = previouslyRequiredBookIds.filter((id) => !currentIds.has(id));
    if (missingIds.length) {
      console.warn("Previously required books were removed:", missingIds);
      return false;
    }
    console.log("All previously required books were preserved.");
    return true;
  }

  function validateBookLibrary() {
    const warnings = [];
    const warn = (message) => { warnings.push(message); console.warn(message); };
    const allGenres = config.genreGroups.flatMap((group) => group.genres);
    const validTypes = config.types.filter((type) => type !== "Either");
    const validLengths = config.lengths.map((item) => item.label).filter((length) => length !== "No Preference");
    const requiredFields = ["id", "title", "author", "type", "primaryGenre", "genres", "audiences", "moods", "length", "description", "classicOrModern", "seriesType"];
    const ids = new Set();
    const titleAuthors = new Set();
    const descriptions = new Set();

    books.forEach((item, index) => {
      const label = item.title || `Book at index ${index}`;
      requiredFields.forEach((field) => { if (!(field in item)) warn(`Required field warning: "${label}" is missing ${field}.`); });
      ["id", "title", "author", "description"].forEach((field) => {
        if (typeof item[field] !== "string" || !item[field].trim()) warn(`Empty field warning: "${label}" has an empty ${field}.`);
      });
      ["genres", "audiences", "moods"].forEach((field) => {
        if (!Array.isArray(item[field]) || item[field].length === 0) warn(`Empty field warning: "${label}" has no ${field}.`);
        else if (new Set(item[field]).size !== item[field].length) warn(`Repeated value warning: "${label}" repeats a value in ${field}.`);
      });
      if (item.genres.length < 1 || item.genres.length > 4) warn(`Genre count warning: "${label}" must have between one and four genres.`);
      if (item.moods.length < 1 || item.moods.length > 4) warn(`Mood count warning: "${label}" must have between one and four moods.`);
      if (ids.has(item.id)) warn(`Duplicate ID warning: "${item.id}" appears more than once.`);
      ids.add(item.id);
      const titleAuthorKey = `${item.title}::${item.author}`.toLowerCase();
      if (titleAuthors.has(titleAuthorKey)) warn(`Duplicate book warning: "${item.title}" by ${item.author} appears more than once.`);
      titleAuthors.add(titleAuthorKey);
      if (descriptions.has(item.description)) warn(`Description originality warning: "${label}" repeats another description.`);
      descriptions.add(item.description);
      if (/\b\d{1,5}\s*(?:pages?|pp\.)\b/i.test(item.description)) warn(`Exact page-count warning: "${label}" includes an exact page count.`);
      if (item.primaryGenre !== item.genres[0]) warn(`Primary genre warning: "${label}" must list ${item.primaryGenre} first.`);
      if (!allGenres.includes(item.primaryGenre)) warn(`Invalid primary genre warning: "${label}" uses ${item.primaryGenre}.`);
      item.genres.filter((genre) => !allGenres.includes(genre)).forEach((genre) => warn(`Invalid genre warning: "${label}" uses ${genre}.`));
      item.moods.filter((mood) => !config.moods.includes(mood)).forEach((mood) => warn(`Invalid mood warning: "${label}" uses ${mood}.`));
      item.audiences.filter((audience) => !config.audiences.includes(audience)).forEach((audience) => warn(`Invalid audience warning: "${label}" uses ${audience}.`));
      if (!validTypes.includes(item.type)) warn(`Invalid type warning: "${label}" uses ${item.type}.`);
      if (!validLengths.includes(item.length)) warn(`Invalid length warning: "${label}" uses ${item.length}.`);
      if (!["Classic", "Modern"].includes(item.classicOrModern)) warn(`Invalid era warning: "${label}" uses ${item.classicOrModern}.`);
      if (!["Standalone", "Series"].includes(item.seriesType)) warn(`Invalid series warning: "${label}" uses ${item.seriesType}.`);
    });

    if (books.length < 350) warn(`Library size warning: only ${books.length} books are available. At least 350 are required.`);
    const preserved = validateOriginalBooksWerePreserved(books);
    if (!preserved) warn("Preservation warning: one or more protected book IDs are missing.");

    const genreCoverage = Object.fromEntries(allGenres.map((genre) => {
      const matching = books.filter((item) => item.genres.includes(genre));
      const primary = books.filter((item) => item.primaryGenre === genre).length;
      const required = genreMinimums[genre];
      const uniqueAuthors = new Set(matching.map((item) => item.author)).size;
      return [genre, { required, total: matching.length, topTwo: matching.filter((item) => item.genres.slice(0, 2).includes(genre)).length, primary, uniqueAuthors, pass: matching.length >= required && primary >= 5 }];
    }));
    const genreReport = allGenres.map((genre) => ({ Genre: genre, "Required count": genreCoverage[genre].required, "Actual count": genreCoverage[genre].total, "Primary-genre count": genreCoverage[genre].primary, "Unique-author count": genreCoverage[genre].uniqueAuthors, "Pass or fail": genreCoverage[genre].pass ? "Pass" : "Fail" }));
    console.table(genreReport);
    allGenres.forEach((genre) => {
      const coverage = genreCoverage[genre];
      if (coverage.total < coverage.required) warn(`Genre coverage warning: "${genre}" has ${coverage.total} books. At least ${coverage.required} are required.`);
      if (coverage.primary < 5) warn(`Primary genre warning: "${genre}" has ${coverage.primary} primary books. At least 5 are required.`);
    });

    const countBy = (values, getter) => Object.fromEntries(values.map((value) => [value, books.filter((item) => getter(item).includes(value)).length]));
    const audienceCounts = countBy(config.audiences, (item) => item.audiences);
    const moodCounts = countBy(config.moods, (item) => item.moods);
    const typeCounts = Object.fromEntries(validTypes.map((type) => [type, books.filter((item) => item.type === type).length]));
    const lengthCounts = Object.fromEntries(validLengths.map((length) => [length, books.filter((item) => item.length === length).length]));
    const stats = { originalTotal: originalBookTotal, added: books.length - originalBookTotal, total: books.length, fiction: typeCounts.Fiction, nonfiction: typeCounts.Nonfiction, genres: allGenres.length, genreCoverage, audienceCounts, moodCounts, typeCounts, lengthCounts, preserved };
    console.log("NextRead expanded library totals:", { originalBooks: stats.originalTotal, newlyAddedBooks: stats.added, finalBooks: stats.total, fiction: stats.fiction, nonfiction: stats.nonfiction, audiences: audienceCounts, moods: moodCounts, lengths: lengthCounts });
    if (!warnings.length) console.log("All previous books were preserved and the expanded NextRead library passed validation.");
    return { valid: warnings.length === 0, warnings, stats, genreReport };
  }

  const validation = validateBookLibrary();
  window.validateOriginalBooksWerePreserved = validateOriginalBooksWerePreserved;
  window.validateBookLibrary = validateBookLibrary;
  window.NextReadData = Object.freeze({ config, books, originalBookIds, previouslyRequiredBookIds, genreMinimums, validateOriginalBooksWerePreserved, validateBookLibrary, validation });
}());
