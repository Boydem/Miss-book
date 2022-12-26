const { Link, useParams, useNavigate } = ReactRouterDOM
const { useEffect, useState } = React

import { AddReview } from "../cmps/add-review.jsx"
import { ReviewList } from "../cmps/review-list.jsx"
import { bookService } from "../services/book.service.js"
import { Loader } from "./loader.jsx"

export function BookDetails() {
  const [book, setBook] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadBook()
  }, [])

  function loadBook() {
    bookService
      .get(params.bookId)
      .then((book) => {
        setBook(book)
      })
      .catch((err) => {
        console.log(err, " had issue in BookDetails cmp")
        navigate("/book")
      })
  }

  function onRemoveReview(bookId, revId) {
    bookService.removeReview(bookId, revId).then(() => {
      loadBook()
    })
  }

  function addBookReview(bookId, review) {
    bookService.addReview(bookId, review).then(() => {
      loadBook()
    })
  }

  function onGoBack() {
    navigate("/book")
  }

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

  if (!book) return <Loader />

  return (
    <section className='book-details'>
      <div className='details-btns flex align-center justify-between'>
        <button className='btn-back' onClick={onGoBack}>
          <i className='fa-solid fa-arrow-left'></i>
        </button>
        <Link className='btn-edit btn-back' to={`/book/edit/${book.id}`}>
          <i className='fa-regular fa-pen-to-square'></i>
        </Link>
      </div>
      <img className='book-img' src={book.thumbnail} alt={book.title} />
      <div className='txt-wrapper'>
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
      <div className='reviews'>
        <AddReview book={book} addBookReview={addBookReview} />
        <ReviewList book={book} onRemoveReview={onRemoveReview} />
      </div>
    </section>
  )
}
