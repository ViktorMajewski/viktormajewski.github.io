const publications = [
  {
    year: "2026",
    type: "Preprint",
    title: "Non-Existence of Smooth Full-Holonomy Cayley Fibrations",
    authors: "with Jianfeng Lin and Jacek Rzemieniecki",
    href: "https://arxiv.org/abs/2603.26920",
    tag: "arXiv:2603.26920",
  },
  {
    year: "2025",
    type: "Preprint",
    title: "Spin(7)-Orbifold Resolutions",
    authors: "",
    href: "https://arxiv.org/abs/2509.16057",
    tag: "arXiv:2509.16057",
  },
  {
    year: "2025",
    type: "Preprint",
    title: "Dirac Operators on Orbifold Resolutions: Uniform Elliptic Theory",
    authors: "",
    href: "https://arxiv.org/abs/2503.08395",
    tag: "arXiv:2503.08395",
  },
];

const talks = [
  {
    date: "Apr 2026",
    place: "Fields Institute, Toronto",
    title: "Dirac Operators and the Boundary of Exceptional Holonomy Moduli Spaces",
  },
  {
    date: "Nov 2025",
    place: "Rome · Kiel · Hamburg",
    title: "Spin(7)-Orbifold Resolutions",
  },
  {
    date: "Oct 2025",
    place: "Brussels",
    title: "Spin(7)-Orbifold Resolutions",
  },
  {
    date: "May 2025",
    place: "Regensburg",
    title: "Spin(7)-Orbifold Resolutions",
  },
  {
    date: "Apr 2025",
    place: "Stony Brook",
    title: "Dirac Operators on Orbifold Resolutions",
  },
  {
    date: "Oct 2024",
    place: "SLMath, Berkeley",
    title: "Dirac Operators on Orbifold Resolutions",
    href: "https://vimeo.com/1015452578",
  },
];

const conferences = [
  {
    year: "2025",
    name: "Geometric Moduli Spaces — Rigidity, Genericity, Stability",
    href: "https://www.claymath.org/events/geometric-moduli-spaces-rigidity-genericity-stability/",
  },
  {
    year: "2025",
    name: "New Directions in G₂ Geometry",
    href: "https://aimath.org/pastworkshops/g2geometry.html",
  },
  {
    year: "2024",
    name: "Special Geometric Structures and Analysis",
    href: "https://www.slmath.org/programs/361",
  },
  {
    year: "2024",
    name: "BRIDGES Meeting, Cargèse",
    href: "https://bridges.geotop.ime.unicamp.br/",
  },
  {
    year: "2024",
    name: "Special Holonomy and Geometric Structures on Complex Manifolds",
    href: "https://impa.br/wp-content/uploads/2024/03/Programa-Geral-Horizontal_holonomy-1.pdf",
  },
  {
    year: "2023",
    name: "BIGW: Geometric Flows and Related Topics",
    href: "https://danielplatt.github.io/bigw/",
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
       <a className="wordmark" href="#top" aria-label="Viktor Majewski, home">
          <img className="monogram monogram-icon" src="./favicon-mark.svg" alt="" />
          <span>Viktor Majewski</span>
        </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#teaching">Teaching</a>
            <a href="#talks">Talks</a>
          </nav>
          <a className="nav-contact" href="mailto:viktor.majewski@uwaterloo.ca">
            Email <Arrow />
          </a>
        </div>
      </header>

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Differential Geometer · University of Waterloo</p>
            <h1>
              <em>Special holonomy and gauge theory</em>
                <span className="h1-subline"> Moduli spaces, degenerations, and categorified enumerative geometry.</span>
              </h1>
            <p className="hero-intro">
              I work in differential geometry and geometric analysis, with a
              focus on special holonomy spaces, gauge theory, calibrated geometry and enumerative invariants.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#publications">
                View research <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-secondary" href="./viktor-majewski-cv.pdf">
                Curriculum vitae <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <figure className="portrait-wrap">
            <div className="portrait-frame">
              <img
                className="portrait"
                src="./viktor-majewski.jpg"
                alt="Viktor Majewski in front of the New Palace in Potsdam"
              />
              <span className="portrait-mark" aria-hidden="true">
                Φ
              </span>
            </div>
            <figcaption>
              <span>Viktor Frederik Majewski</span>
            </figcaption>
          </figure>

          <aside className="current-note1" aria-label="Current position1">
            <p>
              I am a postdoctoral researcher at the University of Waterloo working with <a href="https://www.math.uwaterloo.ca/~karigian/">Spiro Karigiannis</a>.
              I am joining the University of Regensburg in April 2027 to work with <a href="https://ammann.app.uni-regensburg.de/">Bernd Ammann</a>.
            </p>
          </aside>

          <aside className="current-note2" aria-label="Previous positions2">
            <p>
              I obtained my PhD in 2025 at the Humboldt-Universität zu Berlin under the supervison of  <a href="https://walpu.ski/">Thomas Walpuski</a>. I was a member of the <a href="https://www.math-berlin.de/">BMS</a> and a student representative. 
            </p>
          </aside>

        </section>

        <section className="statement section-shell" id="research">
          <div className="section-label">
            <span>02</span>
            <p>Research</p>
          </div>
          <div className="statement-content">
            <div className="statement-grid">
              <p>
                A central theme of my work is the interaction between gauge
                theory and calibrated geometry. I use geometric, algebraic and analytic methods to understand moduli spaces near their
                singular and non-compact boundaries.
              </p>
              <p>
                My broader aim is to understand the moduli spaces of special holonomy metrics,
                understand their degenerations, and develop categorifications of possible enumerative
                invariants.
              </p>
            </div>
            <div className="topics" aria-label="Research topics">
              <span>Special holonomy</span>
              <span>Dirac operators</span>
              <span>Gauge theory</span>
              <span>Geometric analysis</span>
              <span>Calibrated geometry</span>
            </div>
          </div>
        </section>

        <section className="publications section-shell" id="publications">
          <div className="section-label section-label-light">
            <span>03</span>
            <p>Selected work</p>
          </div>
          <div className="publication-content">
            <div className="section-heading-row">
              <h2>Publications &amp; preprints</h2>
              <a className="text-link light-link" href="./viktor-majewski-cv.pdf">
                Full CV <Arrow />
              </a>
            </div>
            <div className="publication-list">
              {publications.map((paper) => (
                <a
                  className="publication-item"
                  href={paper.href}
                  key={paper.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="paper-meta">
                    <span>{paper.year}</span>
                    <span>{paper.type}</span>
                  </div>
                  <div>
                    <h3>{paper.title}</h3>
                    {paper.authors && <p>{paper.authors}</p>}
                  </div>
                  <div className="paper-link">
                    <span>{paper.tag}</span>
                    <Arrow />
                  </div>
                </a>
              ))}
              <a
                className="publication-item thesis-item"
                href="https://edoc.hu-berlin.de/items/ba399c8e-acf7-4229-94cd-b7b55c47392a"
                target="_blank"
                rel="noreferrer"
              >
                <div className="paper-meta">
                  <span>2025</span>
                  <span>Doctoral thesis</span>
                </div>
                <div>
                  <h3>
                    Dirac Operators on Orbifold Resolutions and their
                    Applications to the Construction of Exceptional Holonomy
                    Metrics
                  </h3>
                  <p>Humboldt-Universität zu Berlin</p>
                </div>
                <div className="paper-link">
                  <span>Repository</span>
                  <Arrow />
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="teaching section-shell" id="teaching">
          <div className="section-label">
            <span>04</span>
            <p>Teaching</p>
          </div>
          <div className="teaching-content">
            <div className="section-heading-row">
              <h2>Teaching mathematics as a geometric language.</h2>
            </div>
            <div className="course-grid">
              <article className="course-card featured-course">
                <div>
                  <span className="course-year">2026</span>
                  <span className="course-role">Lecturer</span>
                </div>
                <h3>Spin Geometry</h3>
                <p>
                  Graduate topics course on Clifford algebras, Dirac operators,
                  index theory, and geometric applications.
                </p>
                <span className="course-place">University of Waterloo</span>
              </article>
              <article className="course-card">
                <div>
                  <span className="course-year">2026</span>
                  <span className="course-role">Lecturer</span>
                </div>
                <h3>MATH 136</h3>
                <p>Linear Algebra 1 for Honours Mathematics.</p>
                <a href="https://open.math.uwaterloo.ca/1">
                  Course page <Arrow />
                </a>
              </article>
              <article className="course-card past-teaching">
                <div>
                  <span className="course-year">2019–2021</span>
                  <span className="course-role">Tutor</span>
                </div>
                <h3>Earlier teaching</h3>
                <p>
                  Differential Geometry, Mathematics for Physicists, and
                  Analysis I–II at the University of Göttingen.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="talks section-shell" id="talks">
          <div className="section-label">
            <span>05</span>
            <p>Talks &amp; travel</p>
          </div>
          <div className="talks-content">
            <div className="section-heading-row">
              <h2>Recent talks</h2>
              <a
                className="text-link"
                href="https://vimeo.com/1015452578"
                target="_blank"
                rel="noreferrer"
              >
                Watch a recorded talk <Arrow />
              </a>
            </div>
            <div className="timeline">
              {talks.map((talk, index) => (
                <div className="talk-row" key={`${talk.date}-${talk.place}`}>
                  <span className="talk-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{talk.title}</h3>
                    <p>{talk.place}</p>
                  </div>
                  <time>{talk.date}</time>
                  {talk.href && (
                    <a
                      className="row-link"
                      href={talk.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Watch ${talk.title}`}
                    >
                      <Arrow />
                    </a>
                  )}
                </div>
              ))}
            </div>

            <details className="conference-drawer">
              <summary>
                <span>Selected conferences &amp; programmes</span>
                <span aria-hidden="true">+</span>
              </summary>
              <div className="conference-grid">
                {conferences.map((conference) => (
                  <a
                    href={conference.href}
                    key={conference.name}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{conference.year}</span>
                    <p>{conference.name}</p>
                    <Arrow />
                  </a>
                ))}
              </div>
            </details>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <p className="eyebrow">Get in touch</p>
          <a className="footer-email" href="mailto:viktor.majewski@uwaterloo.ca">
            viktor.majewski<span>@uwaterloo.ca</span>
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            Department of Mathematics · University of Waterloo<br />
            Waterloo, Ontario, Canada
          </p>
          <div>
            <a href="https://arxiv.org/a/majewski_v_1.html" target="_blank" rel="noreferrer">
              arXiv <Arrow />
            </a>
            <a href="./viktor-majewski-cv.pdf">CV <Arrow /></a>
            <a href="#top">Back to top ↑</a>
          </div>
          <p className="copyright">© 2026 Viktor Majewski</p>
        </div>
      </footer>
    </main>
  );
}
