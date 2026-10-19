import Image from "next/image";

export default function Hero() {
  return (
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
  );
}
