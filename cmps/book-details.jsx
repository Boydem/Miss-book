const { useState, useEffect } = React

export function BookDetails({ book }) {
  console.log("book:", book)
  return (
    <section className="book-details ">
      <img className="book-img" src={book.thumbnail} alt={book.title} />
      <div className="txt-wrapper">
        <h1 className="book-d-title">{book.title}</h1>
        <h2 className="book-d-subtitle">{book.subtitle}</h2>
        <hr />
        <div className="container flex">
          <h4>
            Language: <span>{book.language}</span>
          </h4>{" "}
          |
          <h4>
            Categories: <span>{book.categories.join(", ")}</span>
          </h4>{" "}
          |
          <h4>
            Pages: <span>{book.pageCount}</span>
          </h4>{" "}
          |
          <h4>
            Published: <span>{book.publishedDate}</span>
          </h4>
        </div>
        <p className="book-d-desc muted">{book.description}</p>

        <h3 className="book-d-price">
          {book.listPrice.amount}
          {book.listPrice.currencyCode}
        </h3>
      </div>
    </section>
  )
}
