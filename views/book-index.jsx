const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"

import { BookFilter } from "../cmps/book-filters.jsx"
import { BookList } from "../cmps/book-list.jsx"
import { Loader } from "../cmps/loader.jsx"

export function BookIndex() {
  const [isLoading, setIsLoading] = useState(true)
  const [books, setBooks] = useState([])
  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

  useEffect(() => {
    setIsLoading(true)
    loadBooks()
  }, [filterBy])

  function loadBooks() {
    bookService.query(filterBy).then((books) => {
      setIsLoading(false)
      setBooks(books)
      if (!books.length) {
        showErrorMsg(`Couldnt Find Results`)
      }
    })
  }

  function onSetFilter(filterBy) {
    setFilterBy(filterBy)
    showSuccessMsg(
      `Title:${filterBy.title ? filterBy.title : "All"}, Max Price:${
        filterBy.maxPrice
      }`
    )
  }
  console.log("books:", books)
  return (
    <section className='book-index'>
      <div>
        <BookFilter onSetFilter={onSetFilter} />
        {!isLoading && <BookList books={books} />}
        {isLoading && <Loader />}
      </div>
    </section>
  )
}
