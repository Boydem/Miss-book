export function BookDetails({ book, selectBook }) {
  function getPageCountTag(pageCount) {
    if (pageCount > 500) {
      return <span className='tag serious-tag'>Serious reading</span>
    } else if (pageCount > 200) {
      return <span className='tag descent-tag'>Descent reading</span>
    } else if (pageCount < 100) {
      return <span className='tag light-tag'>Light reading</span>
    } else {
      return ""
    }
  }
  function getPublishedDateTag(publishedDate) {
    const date = new Date().getFullYear()
    if (publishedDate < date - 10) {
      return <span className='tag descent-tag'>Vintage</span>
    } else {
      return <span className='tag light-tag'>New</span>
    }
  }
  return (
    <section className='book-details'>
      <img className='book-img' src={book.thumbnail} alt={book.title} />
      <div className='txt-wrapper'>
        <button
          className='btn-back'
          onClick={() => {
            selectBook(null)
          }}>
          Back
        </button>
        <h1 className='book-d-title'>{book.title}</h1>
        <h2 className='book-d-subtitle'>{book.subtitle}</h2>
        <hr />
        <div className='container flex'>
          <h4>
            Language: <span>{book.language}</span>
          </h4>
          |
          <h4>
            Categories: <span>{book.categories.join(", ")}</span>
          </h4>
          |
          <h4>
            Pages:
            <span>
              {book.pageCount} {getPageCountTag(book.pageCount)}
            </span>
          </h4>
          |
          <h4>
            Published:
            <span>
              {book.publishedDate} {getPublishedDateTag(book.publishedDate)}
            </span>
          </h4>
        </div>
        <p className='book-d-desc muted'>{book.description}</p>

        <h3 className='book-d-price'>
          {book.listPrice.amount}
          {book.listPrice.currencyCode}
        </h3>
      </div>
    </section>
  )
}
