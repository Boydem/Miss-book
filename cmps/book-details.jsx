const { useState, useEffect } = React

export function BookDetails({ book }) {
  return (
    <section className="book-details flex flex-column justify-center">
      <img className="book-img" src={book.thumbnail} alt={book.title} />
      <h1 className="book-d-title">{book.title}</h1>
      <p className="book-d-desc muted">{book.description}</p>
      <h5 className="book-d-price">
        {book.listPrice.amount}
        {book.listPrice.currencyCode}
      </h5>
    </section>
  )
}
