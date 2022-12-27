const { Link } = ReactRouterDOM
import { BookPreview } from "./book-preview.jsx"

export function BookList({ books, onRemoveBook, onAddBook }) {
  if (!books.length)
    return (
      <div className='prev-err'>
        <i className='fa-solid fa-exclamation'></i> Couldnt find matching
        results
      </div>
    )
  return (
    <ul className='book-list clean-list'>
      <li key={`${"newBookArticle"}`}>
        <article className={`book-preview add-book`}>
          <Link to='/book/edit'>
            <div className='book-btns'>
              <i className='fa-regular fa-plus'></i>
            </div>
          </Link>
        </article>
      </li>
      {books.map((book) => {
        return (
          <li key={`${book.id}`}>
            <BookPreview book={book} onRemoveBook={onRemoveBook} />
          </li>
        )
      })}
    </ul>
  )
}
