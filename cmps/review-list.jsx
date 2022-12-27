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
    <ul className='review-list clean-list'>
      {book.reviews.map((review) => {
        return (
          <li key={`${review.id}`}>
            <button
              className='absolute-i-btn'
              onClick={() => {
                onRemoveReview(book, review.id)
              }}>
              <i className='fa-regular fa-trash-can'></i>
            </button>
            <h3 className='rev-name'>Full Name: {review.fullname}</h3>
            <h4 className='rev-rate'>Rate: {review.rating}</h4>
            <p className='rev-read-at'>Read At: {review.readAt}</p>
          </li>
        )
      })}
    </ul>
  )
}
