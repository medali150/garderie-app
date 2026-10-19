"use client";

import { useEffect, useState } from "react";
import { getGarderie } from "@/lib/api";

export default function Navbar() {
  const [garderie, setGarderie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getGarderie()
      .then(setGarderie)
      .catch((requestError) => setError(requestError.message));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold text-warning-emphasis" href="#accueil">
          <span className="fs-3" aria-hidden="true">🌞</span>
          <span>
            {garderie ? garderie.nom : <span className="spinner-border spinner-border-sm" aria-label="Chargement du nom" />}
          </span>
        </a>
        {error && <div className="alert alert-danger py-1 px-2 mb-0 me-2 small" role="alert">{error}</div>}
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
            <li className="nav-item"><a className="nav-link" href="#accueil">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#activites">Activités</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
