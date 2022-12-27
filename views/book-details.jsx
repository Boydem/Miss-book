const { useEffect, useState } = React
const { Link, useParams, useNavigate } = ReactRouterDOM

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
  }, [params.bookId])

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

  function onBookNav(direction) {
    bookService.getNextBook(direction, book.id).then((book) => {
      navigate(`/book/${book.id}`)
    })
  }

  function onRemoveReview(book, revId) {
    bookService.removeReview(book, revId).then(() => {
      loadBook()
    })
  }

  function addBookReview(book, review) {
    bookService.addReview(book, review).then((book) => {
      setBook({ ...book })
    })
  }

  function onGoBack() {
    navigate(-1)
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
      <nav className='details-nav flex align-center justify-between'>
        <button className='btn-detalis absolute btn-left' onClick={onGoBack}>
          <i className='fa-solid fa-xmark'></i>
        </button>
        <Link
          className='btn-detalis absolute btn-right'
          to={`/book/edit/${book.id}`}>
          <i className='fa-solid fa-pen-to-square'></i>
        </Link>
        <button
          className='btn-detalis btn-left'
          onClick={() => {
            onBookNav("prev")
          }}>
          <i class='fa-solid fa-arrow-left'></i> Prev
        </button>
        <button
          className='btn-detalis btn-right'
          onClick={() => {
            onBookNav("next")
          }}>
          Next <i class='fa-solid fa-arrow-right'></i>
        </button>
      </nav>
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
