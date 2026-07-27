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

  function validateBookLibrary() {
    const warnings = [];
    const warn = (message) => { warnings.push(message); console.warn(message); };
    const allGenres = config.genreGroups.flatMap((group) => group.genres);
    const validTypes = config.types.filter((type) => type !== "Either");
    const validLengths = config.lengths.map((item) => item.label).filter((length) => length !== "No Preference");
    const requiredFields = ["id", "title", "author", "type", "primaryGenre", "genres", "audiences", "moods", "length", "description", "classicOrModern", "seriesType"];
    const ids = new Set();
    const titleAuthors = new Set();

    books.forEach((item, index) => {
      const label = item.title || `Book at index ${index}`;
      requiredFields.forEach((field) => { if (!(field in item)) warn(`Required field warning: "${label}" is missing ${field}.`); });
      ["id", "title", "author", "description"].forEach((field) => {
        if (typeof item[field] !== "string" || !item[field].trim()) warn(`Empty field warning: "${label}" has an empty ${field}.`);
      });
      ["genres", "audiences", "moods"].forEach((field) => {
        if (!Array.isArray(item[field]) || item[field].length === 0) warn(`Empty field warning: "${label}" has no ${field}.`);
      });
      if (item.genres.length > 4) warn(`Genre count warning: "${label}" has more than four genres.`);
      if (item.moods.length > 4) warn(`Mood count warning: "${label}" has more than four moods.`);
      if (ids.has(item.id)) warn(`Duplicate ID warning: "${item.id}" appears more than once.`);
      ids.add(item.id);
      const titleAuthorKey = `${item.title}::${item.author}`.toLowerCase();
      if (titleAuthors.has(titleAuthorKey)) warn(`Duplicate book warning: "${item.title}" by ${item.author} appears more than once.`);
      titleAuthors.add(titleAuthorKey);
      if (item.primaryGenre !== item.genres[0]) warn(`Primary genre warning: "${label}" must list ${item.primaryGenre} first.`);
      if (!item.genres.includes(item.primaryGenre)) warn(`Primary genre warning: "${label}" does not include ${item.primaryGenre}.`);
      if (!allGenres.includes(item.primaryGenre)) warn(`Invalid primary genre warning: "${label}" uses ${item.primaryGenre}.`);
      item.genres.filter((genre) => !allGenres.includes(genre)).forEach((genre) => warn(`Invalid genre warning: "${label}" uses ${genre}.`));
      item.moods.filter((mood) => !config.moods.includes(mood)).forEach((mood) => warn(`Invalid mood warning: "${label}" uses ${mood}.`));
      item.audiences.filter((audience) => !config.audiences.includes(audience)).forEach((audience) => warn(`Invalid audience warning: "${label}" uses ${audience}.`));
      if (!validTypes.includes(item.type)) warn(`Invalid type warning: "${label}" uses ${item.type}.`);
      if (!validLengths.includes(item.length)) warn(`Invalid length warning: "${label}" uses ${item.length}.`);
    });

    const genreCoverage = Object.fromEntries(allGenres.map((genre) => [genre, {
      total: books.filter((item) => item.genres.includes(genre)).length,
      topTwo: books.filter((item) => item.genres.slice(0, 2).includes(genre)).length,
      primary: books.filter((item) => item.primaryGenre === genre).length
    }]));
    allGenres.forEach((genre) => {
      const coverage = genreCoverage[genre];
      if (coverage.topTwo < 2) warn(`Genre coverage warning: "${genre}" has only ${coverage.topTwo} book(s) in the first two genres. At least 2 are required.`);
      if (coverage.primary < 1) warn(`Primary genre warning: "${genre}" has no primary-genre book.`);
    });

    const countBy = (values, getter) => Object.fromEntries(values.map((value) => [value, books.filter((item) => getter(item).includes(value)).length]));
    const audienceCounts = countBy(config.audiences, (item) => item.audiences);
    const moodCounts = countBy(config.moods, (item) => item.moods);
    const typeCounts = Object.fromEntries(validTypes.map((type) => [type, books.filter((item) => item.type === type).length]));
    const lengthCounts = Object.fromEntries(validLengths.map((length) => [length, books.filter((item) => item.length === length).length]));
    const audienceMinimums = { Children: 10, "Middle Grade": 12, Teenagers: 15, "Young Adults": 20, Adults: 30, "All Ages": 10 };
    const typeMinimums = { Fiction: 40, Nonfiction: 30 };
    const lengthMinimums = { "Quick Read": 15, "Standard Read": 30, "Long Read": 20, "Epic Read": 5 };

    if (books.length < 80) warn(`Library size warning: only ${books.length} books are available. At least 80 are required.`);
    Object.entries(audienceMinimums).forEach(([audience, minimum]) => {
      if (audienceCounts[audience] < minimum) warn(`Audience balance warning: "${audience}" has ${audienceCounts[audience]} books. At least ${minimum} are required.`);
    });
    Object.entries(typeMinimums).forEach(([type, minimum]) => {
      if (typeCounts[type] < minimum) warn(`Book type warning: "${type}" has ${typeCounts[type]} books. At least ${minimum} are required.`);
    });
    config.moods.forEach((mood) => {
      if (moodCounts[mood] < 5) warn(`Mood balance warning: "${mood}" has ${moodCounts[mood]} books. At least 5 are required.`);
    });
    Object.entries(lengthMinimums).forEach(([length, minimum]) => {
      if (lengthCounts[length] < minimum) warn(`Length balance warning: "${length}" has ${lengthCounts[length]} books. At least ${minimum} are required.`);
    });

    const stats = { total: books.length, fiction: typeCounts.Fiction, nonfiction: typeCounts.Nonfiction, genres: allGenres.length, genreCoverage, audienceCounts, moodCounts, typeCounts, lengthCounts };
    if (!warnings.length) console.log("NextRead library validation passed.");
    return { valid: warnings.length === 0, warnings, stats };
  }

  const validation = validateBookLibrary();
  window.validateBookLibrary = validateBookLibrary;
  window.NextReadData = Object.freeze({ config, books, validateBookLibrary, validation });
}());
