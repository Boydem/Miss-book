import { BookPreview } from "./book-preview.jsx"

export function ReviewList({ book, onRemoveReview }) {
  if (!book.reviews)
    return (
      <div className='prev-err'>
        <i className='fa-solid fa-exclamation'></i> Couldnt find matching
        results
      </div>
    )
  return (
    <ul className='book-list clean-list'>
      {book.reviews.map((review) => {
        return (
          <li key={`${review.id}`}>
            <button onClick={onRemoveReview}>X</button>
            <h3>{review.fullname}</h3>
            <h4>{review.rating}</h4>
            <p>{review.readAt}</p>
          </li>
        )
      })}
    </ul>
  )
}
