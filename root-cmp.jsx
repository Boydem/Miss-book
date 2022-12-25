const { useState } = React

import { AppHeader } from "./cmps/app-header.jsx"
import { AppFooter } from "./cmps/app-footer.jsx"

import { Home } from "./views/home.jsx"
import { AboutUs } from "./views/about-us.jsx"
import { BookIndex } from "./views/book-index.jsx"

export function App() {
  const [page, setPage] = useState("book")
  console.log("page is", page)
  return (
    <section className="app main-layout">
      <AppHeader setPage={setPage} />
      <main>
        {page === "home" && <Home />}
        {page === "about" && <AboutUs />}
        {page === "book" && <BookIndex />}
      </main>
    </section>
  )
}
