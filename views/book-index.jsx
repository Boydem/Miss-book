const { useState, useEffect } = React

import { BookDetails } from "../cmps/book-details.jsx"
import { BookFilter } from "../cmps/book-filters.jsx"
import { BookList } from "../cmps/book-list.jsx"

import { bookService } from "../services/book.service.js"

export function BookIndex() {
  const [selectedBook, selectBook] = useState(null)
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

  function onBookDetails(bookId) {
    bookService.get(bookId)
    selectBook(books.find((book) => bookId === book.id))
  }

  return (
    <section className='book-index'>
      {!selectedBook && (
        <div>
          <BookFilter onSetFilter={onSetFilter} />
          <BookList onBookDetails={onBookDetails} books={books} />
        </div>
      )}

      {selectedBook && (
        <BookDetails book={selectedBook} selectBook={selectBook} />
      )}
    </section>
  )
}
