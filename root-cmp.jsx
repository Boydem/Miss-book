const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { AppHeader } from "./cmps/app-header.jsx"

import { Home } from "./views/home.jsx"
import { AboutUs } from "./views/about-us.jsx"
import { BookIndex } from "./views/book-index.jsx"
import { BookDetails } from "./views/book-details.jsx"
import { BookEdit } from "./views/book-edit.jsx"
import { UserMsg } from "./cmps/user-msg.jsx"

export function App() {
  return (
    <Router>
      <section className='app main-layout'>
        <AppHeader />
        <main>
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<AboutUs />} path='/about' />
            <Route element={<BookIndex />} path='/book' />
            <Route element={<BookDetails />} path='/book/:bookId' />
            <Route element={<BookEdit />} path='/book/edit' />
            <Route element={<BookEdit />} path='/book/edit/:bookId' />
          </Routes>
        </main>
        <UserMsg />
      </section>
    </Router>
  )
}
