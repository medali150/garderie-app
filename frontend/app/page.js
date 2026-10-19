import Image from "next/image";

const services = [
  {
    icon: "🌈",
    title: "Garde à la journée",
    description:
      "Un accueil bienveillant et sécurisé, adapté au rythme de chaque enfant, de 7 h 30 à 18 h 30.",
  },
  {
    icon: "🧠",
    title: "Éveil et apprentissage",
    description:
      "Des activités créatives et ludiques pour grandir, explorer et apprendre en s'amusant chaque jour.",
  },
  {
    icon: "🍎",
    title: "Repas et sieste",
    description:
      "Des repas équilibrés préparés avec soin et un espace calme pour recharger les petites batteries.",
  },
];

export default function Home() {
  return (
    <>
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

      <main>
        <section id="accueil" className="hero-section py-5">
          <div className="container py-lg-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="badge rounded-pill text-bg-warning mb-3 px-3 py-2">
                  Un monde de découvertes
                </span>
                <h1 className="display-3 fw-bold text-dark mb-4">
                  Grandir avec le sourire, chaque jour.
                </h1>
                <p className="lead text-secondary mb-4">
                  Aux Petits Soleils, chaque enfant évolue dans un cocon
                  chaleureux, entouré d&apos;attention et de bienveillance.
                  Nous accompagnons les premiers pas vers l&apos;autonomie
                  dans la joie et la douceur.
                </p>
                <a className="btn btn-warning btn-lg rounded-pill px-4" href="#contact">
                  Inscrire mon enfant <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="hero-image-wrapper rounded-4 overflow-hidden shadow">
                  <Image
                    src="/garderie-hero.svg"
                    alt="Enfants jouant joyeusement dans une garderie"
                    width={800}
                    height={560}
                    className="img-fluid w-100"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-5 bg-white">
          <div className="container py-lg-4">
            <div className="text-center mb-5">
              <span className="text-warning-emphasis fw-semibold">Notre accompagnement</span>
              <h2 className="display-6 fw-bold mt-2">Tout pour s&apos;épanouir</h2>
              <p className="text-secondary mb-0">
                Un quotidien pensé pour le bonheur et le développement des petits.
              </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {services.map((service) => (
                <div className="col" key={service.title}>
                  <article className="card service-card h-100 border-0 shadow-sm rounded-4 p-3">
                    <div className="card-body">
                      <div className="service-icon mb-3" aria-hidden="true">{service.icon}</div>
                      <h3 className="h4 card-title fw-bold">{service.title}</h3>
                      <p className="card-text text-secondary mb-0">{service.description}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="activites" className="py-5 activity-section">
          <div className="container text-center py-4">
            <h2 className="h1 fw-bold">Des journées pleines de vie</h2>
            <p className="lead text-secondary mb-0">
              Jeux, histoires, musique et plein air : chaque moment devient une aventure.
            </p>
          </div>
        </section>

        <section id="contact" className="py-5 bg-warning-subtle">
          <div className="container text-center py-4">
            <h2 className="h1 fw-bold">Faisons connaissance</h2>
            <p className="text-secondary mb-4">
              Venez visiter notre garderie et découvrir notre univers.
            </p>
            <a className="btn btn-dark btn-lg rounded-pill px-4" href="mailto:bonjour@petitssoleils.fr">
              Nous contacter
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
