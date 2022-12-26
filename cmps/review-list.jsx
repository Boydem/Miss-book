import { BookPreview } from "./book-preview.jsx"

export function ReviewList({ book, onRemoveReview }) {
  if (!book.reviews)
    return (
      <div className='err-wrapper'>
        <div className='prev-err'>
          <i className='fa-solid fa-exclamation'></i> Couldnt find any previous
          reviews
        </div>
      </div>
    )
  return (
    <ul className='book-list clean-list'>
      {book.reviews.map((review) => {
        return (
          <li key={`${review.id}`}>
            <button
              onClick={() => {
                onRemoveReview(book.id, review.id)
              }}>
              X
            </button>
            <h3>{review.fullname}</h3>
            <h4>{review.rating}</h4>
            <p>{review.readAt}</p>
          </li>
        )
      })}
    </ul>
  )
}
