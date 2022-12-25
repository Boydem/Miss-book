export function BookPreview({ book, onBookDetails }) {
  return (
    <article className="book-preview">
      <div className="book-img-overlay">
        <div className="book-btns">
          <button
            onClick={() => {
              onBookDetails(book.id)
            }}>
            <i className="fa-solid fa-circle-info"></i>
          </button>
          <button>
            <i className="fa-solid fa-share-nodes"></i>
          </button>
        </div>
        <img className="book-img" src={book.thumbnail} alt={book.title} />
      </div>
      <h1 className="book-p-title line-clamp">{book.title}</h1>
      <p className="book-p-desc muted line-clamp">{book.description}</p>
      <h5 className="book-p-price">
        {book.listPrice.amount}
        {book.listPrice.currencyCode}
      </h5>
    </article>
  )
}
