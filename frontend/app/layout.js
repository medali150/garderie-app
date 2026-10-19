import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "./bootstrap-client";

export const metadata = {
  title: "Garderie App",
  description: "Application web pour une garderie d'enfants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
