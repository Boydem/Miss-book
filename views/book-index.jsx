const { useState, useEffect } = React

import { BookFilter } from "../cmps/book-filters.jsx"
import { BookList } from "../cmps/book-list.jsx"
import { bookService } from "../services/book.service.js"

export function BookIndex() {
  const [books, setBooks] = useState([])
  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

  useEffect(() => {
    loadBooks()
  }, [filterBy])

  function loadBooks() {
    bookService.query(filterBy).then((books) => setBooks(books))
  }

  function onSetFilter(filterBy) {
    setFilterBy(filterBy)
  }
  console.log("filterBy:", filterBy)
  return (
    <section className="book-index">
      <BookFilter onSetFilter={onSetFilter} />
      <BookList books={books} />
    </section>
  )
}
