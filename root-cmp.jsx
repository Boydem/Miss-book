import { Home } from "./pages/home.jsx";

export function App() {
  return (
    <section className="app">
      <header className="app-header">
        <h1>Book Shop</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Home />
      </main>
    </section>
  );
}
