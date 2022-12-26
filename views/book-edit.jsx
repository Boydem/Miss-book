const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { eventBusService } from "../services/event-bus.service.js"

export function BookEdit() {
  const [checked, setChecked] = useState({ isOn: false, name: "" })
  const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
  const navigate = useNavigate()
  const { bookId } = useParams()
  // useEffect(() => {}, [bookToEdit])

  useEffect(() => {
    if (!bookId) return
    loadBook()
  }, [])

  useEffect(() => {
    if (!checked.name) return
    handleForm({
      target: { type: "checkbox", name: checked.name, value: checked.isOn },
    })
  }, [checked])

  function loadBook() {
    bookService
      .get(bookId)
      .then((book) => {
        setBookToEdit(book)
      })
      .catch((err) => {
        console.log(err, " had issue in BookDetails cmp")
        navigate("/book")
      })
  }

  function onSaveBook(ev) {
    ev.preventDefault()
    bookService.save(bookToEdit).then((book) => {
      navigate("/book")
      console.log("book:", book)
    })
  }

  function handleForm({ target }) {
    const listPriceFields = ["amount", "isOnSale", "currencyCode"]
    let { type, name: field, value } = target
    value = type === "number" ? +value : value
    if (listPriceFields.includes(field)) {
      setBookToEdit((prevBook) => {
        prevBook.listPrice[field] = value
        return { ...prevBook }
      })
    } else {
      if (field === "categories") {
        console.log("categories:", value.split(","))
        setBookToEdit((prevBook) => ({
          ...prevBook,
          [field]: value.split(","),
        }))
      } else {
        setBookToEdit((prevBook) => ({ ...prevBook, [field]: value }))
      }
    }
  }
  // console.log("bookToEdit:", bookToEdit)
  return (
    <section className='book-edit'>
      <h2>{!bookId ? "Add Book" : "Edit Book"}</h2>
      <form onSubmit={onSaveBook}>
        <div className='form-group'>
          <label htmlFor='title'>Book title </label>
          <input
            required
            type='text'
            name='title'
            id='title'
            placeholder='Enter book title'
            onChange={handleForm}
            value={bookToEdit.title}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='subtitle'>Book subtitle </label>
          <input
            required
            type='text'
            name='subtitle'
            id='subtitle'
            placeholder='Enter book subtitle'
            onChange={handleForm}
            value={bookToEdit.subtitle}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='categories'>Book Categories </label>
          <input
            required
            type='text'
            name='categories'
            id='categories'
            placeholder='*Seperated with comma( , )'
            onChange={handleForm}
            value={bookToEdit.categories}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='language'>Book language </label>
          <input
            required
            type='text'
            name='language'
            id='language'
            placeholder='Enter book language'
            onChange={handleForm}
            value={bookToEdit.language}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='publishedDate'>Published year </label>
          <input
            required
            type='number'
            name='publishedDate'
            id='publishedDate'
            placeholder='Enter published year'
            onChange={handleForm}
            value={bookToEdit.publishedDate}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='pageCount'>Pages count </label>
          <input
            required
            type='number'
            name='pageCount'
            id='pageCount'
            placeholder='Enter pages count'
            onChange={handleForm}
            value={bookToEdit.pageCount}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Price </label>
          <input
            required
            type='number'
            name='amount'
            id='amount'
            placeholder='Enter price'
            onChange={handleForm}
            value={bookToEdit.listPrice.amount}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='isOnSale'>Book on sale ? </label>
          <input
            type='checkbox'
            name='isOnSale'
            id='isOnSale'
            placeholder='Enter isOnSale'
            defaultChecked={checked.isOn}
            onChange={() =>
              setChecked({ isOn: !checked.isOn, name: "isOnSale" })
            }
            value={bookToEdit.listPrice.isOnSale}
          />
        </div>
        <button type='submit'>{!bookId ? "Add Book" : "Save"}</button>
        <Link to='/book'>Cancel</Link>
      </form>
    </section>
  )
}
