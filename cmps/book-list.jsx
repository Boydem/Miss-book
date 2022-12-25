const { useState, useEffect } = React
import { BookPreview } from "./book-preview.jsx"

export function BookList({ books }) {
  return (
    <ul className="book-list clean-list">
      {books.map((book) => {
        return (
          <li key={`${book.id}`}>
            <BookPreview book={book} />
          </li>
        )
      })}
    </ul>
  )
}
