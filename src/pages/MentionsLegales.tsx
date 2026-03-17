import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const MentionsLegales = () => {
  useEffect(() => {
    document.title = "Mentions légales — logiciel-artisan.fr";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Mentions légales</span>
          </div>
          <h1 className="text-display text-foreground mb-8">Mentions légales</h1>
          <div className="prose max-w-none text-muted-foreground space-y-6 text-body-lg">
            <h2 className="text-heading text-foreground">Éditeur du site</h2>
            <p>Le site logiciel-artisan.fr est un site d'information indépendant.</p>
            <p>Pour toute question, vous pouvez nous contacter via les informations disponibles sur le site.</p>

            <h2 className="text-heading text-foreground">Hébergement</h2>
            <p>Ce site est hébergé par Lovable (lovable.dev).</p>

            <h2 className="text-heading text-foreground">Propriété intellectuelle</h2>
            <p>L'ensemble des contenus présents sur le site logiciel-artisan.fr (textes, images, graphismes, logo, icônes) sont protégés par le droit d'auteur et le droit de propriété intellectuelle.</p>
            <p>Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces éléments est strictement interdite sans l'accord écrit préalable de l'éditeur.</p>

            <h2 className="text-heading text-foreground">Liens externes</h2>
            <p>Le site logiciel-artisan.fr peut contenir des liens hypertextes vers d'autres sites, notamment vers bulbiz.io et app.bulbiz.io. L'éditeur ne saurait être tenu responsable du contenu de ces sites externes.</p>

            <h2 className="text-heading text-foreground">Limitation de responsabilité</h2>
            <p>Les informations contenues sur ce site sont aussi précises que possible. Cependant, elles peuvent contenir des imprécisions ou des erreurs. L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
