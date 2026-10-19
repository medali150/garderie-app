"use client";

import { useEffect, useState } from "react";
import { getServices } from "@/lib/api";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getServices()
      .then(setServices)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="services" className="py-5 bg-white">
      <div className="container py-lg-4">
        <div className="text-center mb-5">
          <span className="text-warning-emphasis fw-semibold">Notre accompagnement</span>
          <h2 className="display-6 fw-bold mt-2">Tout pour s&apos;épanouir</h2>
          <p className="text-secondary mb-0">Un quotidien pensé pour le bonheur et le développement des petits.</p>
        </div>
        {loading && <div className="text-center"><span className="spinner-border text-warning" role="status" aria-label="Chargement des services" /></div>}
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        {!loading && !error && (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {services.map((service) => (
              <div className="col" key={service.id}>
                <article className="card service-card h-100 border-0 shadow-sm rounded-4 p-3">
                  <div className="card-body">
                    <div className="service-icon mb-3" aria-hidden="true">{service.icone}</div>
                    <h3 className="h4 card-title fw-bold">{service.titre}</h3>
                    <p className="card-text text-secondary mb-0">{service.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
