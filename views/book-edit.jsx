import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookEdit() {
  const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())

  // useEffect(() => {}, [bookToEdit])

  function handleForm({ target }) {
    let { type, name: field, value } = target
    value = type === "number" ? +value : value
    setBookToEdit((prevBook) => ({ ...prevBook, [field]: value }))
  }
  console.log("bookToEdit:", bookToEdit)
  return (
    <section className='book-edit'>
      <h1>Hello from Book Edit</h1>
      <form>
        <input
          type='text'
          name='title'
          id='bookTitle'
          placeholder='Enter Book Title'
          onChange={handleForm}
          value={bookToEdit.title}
        />
        <input
          type='number'
          name='price'
          id='bookPrice'
          placeholder='Enter Book Price'
          onChange={handleForm}
          value={bookToEdit.price}
        />
      </form>
    </section>
  )
}
