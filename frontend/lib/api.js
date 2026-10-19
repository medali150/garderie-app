const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

async function fetchApi(path) {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    throw new Error(`La requête API a échoué (${response.status}).`);
  }

  return response.json();
}

export function getGarderie() {
  return fetchApi("/api/garderie");
}

export function getServices() {
  return fetchApi("/api/services");
}

export function getActivites() {
  return fetchApi("/api/activites");
}
