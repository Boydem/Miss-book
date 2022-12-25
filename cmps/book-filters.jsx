const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"

export function BookFilter({ onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(
    bookService.getDefaultFilter()
  )
  useEffect(() => {}, [filterByToEdit])

  function handleFilters({ target }) {
    let { value, type, name: field } = target
    if (type === "range") value = +value
    setFilterByToEdit((prevFilter) => {
      return { ...prevFilter, [field]: value }
    })
  }
  return (
    <section className="book-filter">
      <form className="book-filter-form">
        <label htmlFor="title">
          <input
            onChange={handleFilters}
            type="text"
            id="title"
            name="title"
            value={filterByToEdit.title}
            placeholder="Search by title"
          />
        </label>
        <label htmlFor="maxPrice">
          <input
            onChange={handleFilters}
            type="range"
            min="0"
            max="500"
            id="maxPrice"
            name="maxPrice"
            value={filterByToEdit.maxPrice}
            placeholder="Max Price"
          />
        </label>
      </form>
    </section>
  )
}
