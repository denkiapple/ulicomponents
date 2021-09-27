import './App.css';

function App() {
  return (
    <div className="app">
      <div className="hero">
        UliComponents
      </div>

      <header className="header">
        <div className="nav-links">
          <p>
            Instalation
          </p>
          <p>
            Components
          </p>
          <p>
            About
          </p>
        </div>
        <a
          className="link"
          href="https://github.com/denkiapple/ulicomponents"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github repo
        </a>
      </header>

      <main>
        <section>
          <h2>
            Instalation
          </h2>
        </section>

        <section>
          <h2>
            Components
          </h2>
        </section>

        <section>
          <h2>
            About
          </h2>
        </section>
      </main>
    </div>
  );
}

export default App;
