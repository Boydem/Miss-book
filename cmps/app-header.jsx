export function AppHeader({ setPage }) {
  return (
    <header className="app-header full main-layout">
      <div className="container flex justify-between align-center">
        <h1>Hello Book Shop</h1>
        <nav className="main-nav">
          <ul className="nav-links clean-list flex align-center">
            <li key={"home"}>
              <a
                onClick={() => {
                  setPage("home")
                }}
                href="#"
                className="nav-link">
                Home
              </a>
            </li>
            <li key={"about"}>
              <a
                onClick={() => {
                  setPage("about")
                }}
                href="#"
                className="nav-link">
                about
              </a>
            </li>
            <li key={"book"}>
              <a
                onClick={() => {
                  setPage("book")
                }}
                href="#"
                className="nav-link">
                book
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
