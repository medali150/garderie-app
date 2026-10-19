"use client";

import { useEffect, useState } from "react";
import { getActivites } from "@/lib/api";

export default function Activites() {
  const [activites, setActivites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getActivites()
      .then(setActivites)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="activites" className="py-5 activity-section">
      <div className="container py-lg-4">
        <div className="text-center mb-5">
          <h2 className="h1 fw-bold">Des journées pleines de vie</h2>
          <p className="lead text-secondary mb-0">Jeux, histoires, musique et plein air : chaque moment devient une aventure.</p>
        </div>
        {loading && <div className="text-center"><span className="spinner-border text-success" role="status" aria-label="Chargement des activités" /></div>}
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        {!loading && !error && (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {activites.map((activite) => (
              <div className="col" key={activite.id}>
                <article className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <div className="fs-1 mb-3" aria-hidden="true">{activite.icone}</div>
                    <h3 className="h4 card-title fw-bold">{activite.nom}</h3>
                    <p className="card-text text-secondary">{activite.description}</p>
                    <span className="badge text-bg-light">De {activite.ageMin} à {activite.ageMax} ans</span>
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
