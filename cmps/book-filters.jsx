const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"

export function BookFilter({ onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(
    bookService.getDefaultFilter()
  )
  useEffect(() => {}, [filterByToEdit])

  return (
    <section className="book-filter">
      <form className="book-filter-form">
        <input type="text" value="" placeholder="hello filter txt" />
      </form>
    </section>
  )
}
