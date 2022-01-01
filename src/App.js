import "./App.css";


export default function App() {
  return (
    <div className="App">
      <header className="header">
        Micho pregunta
        <nav className="nav">navegar... y se marcho .... </nav>
      </header>
      <div className="padre">
        <section className="sectionl">
          section
          <header className="headerl"> heder</header>
          <article className="articuloi">
            articulo
            <header className="header2">header</header>
            <p className="parrafo">parrafo</p>
            <div className="papa">
              <p className="parrafo1">parrafo</p>
              <aside className="aside1">aside</aside>
            </div>
            <footer className="pie">footer</footer>
          </article>
        </section>

        <section className="sectionr">
          section
          <header className="headerr">extra extra</header>
          <nav className="navr"> y nave.. otra vez</nav>
        </section>
      </div>
      <footer className="piepie">footer</footer>
    </div>
  );
}
