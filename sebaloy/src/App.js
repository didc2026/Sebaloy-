import "./App.css";

function App() {
  return (
    <div className="home">
      <nav className="navbar">
        <h1>সেবালয় Sebaloy</h1>

        <div className="menu">
          <a href="/">Home</a>
          <a href="/">Medicines</a>
          <a href="/">Diagnostics</a>
          <a href="/">Healthcare</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h2>Your Trusted Healthcare Platform</h2>

          <h1>সেবালয় Sebaloy</h1>

          <p>
            Buy medicines, healthcare products and diagnostic services
            easily from trusted suppliers.
          </p>

          <button>Explore Now</button>
        </div>
      </section>
    </div>
  );
}

export default App;