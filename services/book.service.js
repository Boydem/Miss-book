import { utilService } from "./util.service.js"
import { storageService } from "./async-storage.service.js"

const BOOK_DB = "bookDB"
_createBooks()

export const bookService = {
  query, // List
  get, // Read
  remove, // Delete
  save, // Update/Create
  getDefaultFilter
}

function getDefaultFilter() {
    return { title: '', maxPrice: '' }
}

function query(filterBy = getDefaultFilter()) {
  return storageService.query(BOOK_DB).then((books) => {
    if(filterBy.title){
        const regex = new RegExp(filterBy.title,'i')
        books = books.filter(book => regex.test(book.title))
    }
    if(filterBy.maxPrice){
        books = books.filter(book=>book.listPrice.amount <= filterBy.maxPrice)
    }
    return books
  })
}

function get(bookId) {
  return storageService.get(BOOK_DB, bookId)
}

function remove(bookId) {
  return storageService.remove(BOOK_DB, bookId)
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOK_DB, book)
  } else {
    return storageService.post(BOOK_DB, book)
  }
}

function _createBook(title, { amount, isOnSale, currencyCode = "EUR" }) {
  return {
    id: utilService.makeId(),
    title,
    description: "placerat nisi sodales suscipit tellus",
    thumbnail: "http://ca.org/books-photos/20.jpg",
    listPrice: {
      amount,
      currencyCode,
      isOnSale,
    },
  }
}

function _createBooks() {
  let books = utilService.loadFromStorage(BOOK_DB)
  if (!books || !books.length) {
    fetch('../demo-data/books.json')
  .then((booksJSON) => booksJSON.json())
  .then((books) =>{
    utilService.saveToStorage(BOOK_DB, books)
});
  }
  console.log("creating books...", books)
}

// function _createBooks() {
//   let books = utilService.loadFromStorage(BOOK_DB)
//   if (!books || !books.length) {
//     books = []
//     books.push(
//       _createBook("Puki", {
//         amount: 300,
//         isOnSale: false,
//         currencyCode: "USD",
//       })
//     )
//     books.push(
//       _createBook("Buki", {
//         amount: 120,
//         isOnSale: true,
//       })
//     )
//     books.push(
//       _createBook("subali", {
//         amount: 50,
//         isOnSale: false,
//       })
//     )
//     books.push(
//       _createBook("mitsu", {
//         amount: 200,
//         isOnSale: false,
//       })
//     )
//     utilService.saveToStorage(BOOK_DB, books)
//   }
//   console.log("creating books...", books)
// }
