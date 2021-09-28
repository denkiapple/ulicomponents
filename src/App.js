import './App.css';

function App() {
  return (
    <div className="app">
      <div className="hero">
        {"<"}
        <span>
          Uli
        </span>
        {"Components />"}
      </div>

      <header className="header">
        <div className="nav-links">
          <p>
            {"<UC />"}
          </p>
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
          <p>
            You can install this components and use them freely in your app by follwing the instructions below:
          </p>
        </section>

        <section>
          <h2>
            Components
          </h2>
          <p>
            Components are the bulding blocks of any React app, 
          </p>
        </section>

        <section>
          <h2>
            About
          </h2>
          <p>
            This project was made by Ulises Torner in 2021.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
