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

export default function Services() {
  return (
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
  );
}
