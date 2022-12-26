import { BookPreview } from "./book-preview.jsx"

export function BookList({ books }) {
  if (!books.length)
    return (
      <div className='prev-err'>
        <i className='fa-solid fa-exclamation'></i> Couldnt find matching
        results
      </div>
    )
  return (
    <ul className='book-list clean-list'>
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
