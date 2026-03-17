import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    document.title = "Politique de confidentialité — logiciel-artisan.fr";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Politique de confidentialité</span>
          </div>
          <h1 className="text-display text-foreground mb-8">Politique de confidentialité</h1>
          <div className="prose max-w-none text-muted-foreground space-y-6 text-body-lg">
            <h2 className="text-heading text-foreground">Collecte des données</h2>
            <p>Le site logiciel-artisan.fr ne collecte aucune donnée personnelle directement. Les liens présents sur le site peuvent rediriger vers des services tiers (bulbiz.io, app.bulbiz.io) qui ont leurs propres politiques de confidentialité.</p>

            <h2 className="text-heading text-foreground">Cookies</h2>
            <p>Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de traçage n'est utilisé sans votre consentement explicite.</p>

            <h2 className="text-heading text-foreground">Services tiers</h2>
            <p>Le site peut utiliser des services d'analyse d'audience anonymisés pour améliorer l'expérience utilisateur. Ces données sont agrégées et ne permettent pas d'identifier individuellement les visiteurs.</p>

            <h2 className="text-heading text-foreground">Vos droits</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.</p>
            <p>Pour exercer ces droits, vous pouvez nous contacter via les coordonnées disponibles dans les mentions légales.</p>

            <h2 className="text-heading text-foreground">Modifications</h2>
            <p>Cette politique de confidentialité peut être modifiée à tout moment. Les modifications prennent effet dès leur publication sur le site.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
