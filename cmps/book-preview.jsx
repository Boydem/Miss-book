const { Link } = ReactRouterDOM

export function BookPreview({ book, onRemoveBook }) {
  return (
    <article className={`book-preview`}>
      <div className='book-img-overlay'>
        {book.listPrice.isOnSale && (
          <div className='book-p-sale-tag'>Sale!</div>
        )}
        <div className='book-btns'>
          <Link to={`/book/${book.id}`}>
            <i className='fa-solid fa-info'></i>
          </Link>
          <a
            onClick={() => {
              onRemoveBook(book.id)
            }}>
            <i className='fa-regular fa-trash-can'></i>
          </a>
        </div>
        <img className='book-img' src={book.thumbnail} alt={book.title} />
      </div>
      <h1 className='book-p-title line-clamp'>{book.title}</h1>
      <p className='book-p-desc muted line-clamp'>{book.description}</p>
      <h5 className='book-p-price'>
        {book.listPrice.amount}
        {book.listPrice.currencyCode}
      </h5>
    </article>
  )
}
