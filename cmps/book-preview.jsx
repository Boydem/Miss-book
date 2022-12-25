export function BookPreview({ book }) {
  console.log("book:", book)

  return (
    <article className="book-preview">
      <div className="book-img-overlay">
        <div className="book-btns">
          <button>
            <i className="fa-solid fa-circle-info"></i>
          </button>
          <button>
            <i className="fa-solid fa-share-nodes"></i>
          </button>
        </div>
        <img
          className="book-img"
          src="assets\imgs\adventures-of-Sherlock-Holmes.jpg"
          alt={book.title}
        />
      </div>
      <h1>Hello {book.title}</h1>
      <p>{book.description}</p>
      <h5>
        {book.listPrice.amount}
        {book.listPrice.currencyCode}
      </h5>
    </article>
  )
}
