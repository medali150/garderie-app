"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getGarderie } from "@/lib/api";

export default function Hero() {
  const [garderie, setGarderie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getGarderie()
      .then(setGarderie)
      .catch((requestError) => setError(requestError.message));
  }, []);

  return (
    <section id="accueil" className="hero-section py-5">
      <div className="container py-lg-5">
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        {!garderie && !error && (
          <div className="text-center py-5">
            <span className="spinner-border text-warning" role="status" aria-label="Chargement de la garderie" />
          </div>
        )}
        {garderie && (
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge rounded-pill text-bg-warning mb-3 px-3 py-2">Un monde de découvertes</span>
              <h1 className="display-3 fw-bold text-dark mb-4">{garderie.slogan}</h1>
              <p className="lead text-secondary mb-4">{garderie.description}</p>
              <a className="btn btn-warning btn-lg rounded-pill px-4" href="#contact">
                Inscrire mon enfant <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-wrapper rounded-4 overflow-hidden shadow">
                <Image
                  src={garderie.imageHero}
                  alt={`Enfants accueillis à ${garderie.nom}`}
                  width={800}
                  height={560}
                  className="img-fluid w-100"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
