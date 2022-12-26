const { NavLink } = ReactRouterDOM

export function AppHeader() {
  return (
    <header className='app-header full main-layout'>
      <div className='container flex justify-between align-center'>
        <h1>
          ByTheBook <i className='fa-solid fa-book'></i>
        </h1>
        <nav className='main-nav'>
          <ul className='nav-links clean-list flex align-center'>
            <li key={"home"}>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
            </li>
            <li key={"about"}>
              <NavLink to='/about' className='nav-link'>
                About
              </NavLink>
            </li>
            <li key={"book"}>
              <NavLink to='/book' className='nav-link'>
                Books
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
