export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold text-warning-emphasis" href="#accueil">
          <span className="fs-3" aria-hidden="true">🌞</span>
          <span>Les Petits Soleils</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavigation"
          aria-controls="mainNavigation"
          aria-expanded="false"
          aria-label="Ouvrir le menu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavigation">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#accueil">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#activites">Activités</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
