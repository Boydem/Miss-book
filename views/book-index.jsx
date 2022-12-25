const { useState, useEffect } = React

import { BookFilter } from "../cmps/book-filters.jsx"
import { BookList } from "../cmps/book-list.jsx"
import { bookService } from "../services/book.service.js"

export function BookIndex() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
    console.log("books:", books)
  }, [])

  function loadBooks() {
    bookService.query().then((books) => setBooks(books))
  }

  return (
    <section className="book-index">
      <BookFilter />
      <BookList books={books} />
    </section>
  )
}
