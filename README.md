# NextRead

NextRead is a polished, responsive book recommendation website built with HTML, CSS, and vanilla JavaScript. It asks readers about their audience, preferred book type, genres, mood, and ideal book length, then scores a local collection to suggest the closest matches.

## Main features

- Five-question recommendation quiz with helpful validation
- Score-based recommendations with randomized tie-breaking
- Explanations built from each reader’s actual matching preferences
- “Surprise Me” suggestions that respect a selected audience
- Search by title, author, or genre
- Browsable grouped genre collection
- Want to Read, Currently Reading, and Finished lists
- Reading-list persistence using browser `localStorage`
- CSS-generated book covers with no external images
- Accessible FAQ accordion and mobile navigation
- Responsive layouts for phone, tablet, and desktop

## File structure

```text
nextread/
├── index.html   # Page structure and content
├── styles.css   # Design system, layout, and responsive styles
├── books.js     # Configuration arrays and book collection
├── app.js       # Quiz, recommendations, search, and reading-list logic
└── README.md    # Project documentation
```

## How to run

No installation or build step is required.

1. Open the `nextread` folder.
2. Double-click `index.html`, or open it from any modern web browser.
3. Complete the quiz, browse a genre, or use “Surprise Me.”

The project works directly from the local files and does not need an internet connection.

## Recommendation scoring

Each book receives a score based on the current quiz:

- Reader category match: **+4**
- Book type match: **+3**
- Each matching genre: **+4**
- Each matching mood: **+2**
- Length match: **+2**

“Either” and “No Preference” are neutral and do not penalize a book. Books are sorted from highest to lowest score, and tied books receive a randomized order. The top three are shown. When no book matches every active preference, NextRead identifies the results as the closest available choices.

## How localStorage is used

The reading list is saved in the browser under the key `nextread-reading-list-v1`. The stored value maps each saved book’s ID to one of three statuses:

```json
{
  "the-hobbit": "want",
  "atomic-habits": "current",
  "wonder": "finished"
}
```

The list is restored whenever the page loads. It belongs only to the current browser and device; clearing browser storage also clears the list.

## How to add another book

Open `books.js` and add another `book(...)` entry to the `books` array using this order:

```js
book(
  "unique-id",
  "Book Title",
  "Author Name",
  "Fiction",
  ["Fantasy", "Adventure"],
  ["Teenagers", "Adults"],
  ["Adventurous", "Exciting"],
  "Standard Read",
  "A short original description without major spoilers.",
  "Modern",
  "Standalone"
)
```

Use a unique lowercase ID, choose values that exist in the configuration arrays, and use only a general length category.

## How to add another genre

1. Open `books.js`.
2. Add the genre name to the appropriate configuration array: `fictionGenres`, `nonfictionGenres`, or `additionalGenres`.
3. Add that exact genre string to any relevant books.

The quiz and Browse Genres interface are generated from those arrays, so no HTML changes are needed.

## Future feature roadmap

These ideas are intentionally not implemented in this first version:

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
