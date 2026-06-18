import { Link } from "react-router-dom";
import logoArtisan from "@/assets/logo-artisan.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoArtisan} alt="logiciel-artisan.fr" className="w-8 h-8 rounded-lg" />
              <span className="font-bold text-lg">logiciel-artisan.fr</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Le guide de référence pour aider les artisans du BTP à mieux s'organiser avec les bons outils numériques.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-50">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Accueil</Link></li>
              <li><Link to="/bulbiz-avis" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Notre avis</Link></li>
              <li><Link to="/faq" className="text-sm opacity-70 hover:opacity-100 transition-opacity">FAQ</Link></li>
              <li><a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Découvrir la solution</a></li>
              <li><a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Tester gratuitement</a></li>
            </ul>
          </div>

          {/* Pages SEO — Logiciels */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-50">Logiciels</h4>
            <ul className="space-y-3">
              <li><Link to="/logiciel-artisan" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Logiciel artisan</Link></li>
              <li><Link to="/logiciel-btp" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Logiciel BTP</Link></li>
              <li><Link to="/logiciel-devis-facture-artisan" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Logiciel devis facture</Link></li>
              <li><Link to="/logiciel-gestion-chantier" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Gestion de chantier</Link></li>
              <li><Link to="/logiciel-planning-artisan" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Planning artisan</Link></li>
              <li><Link to="/logiciel-electricien" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Logiciel électricien</Link></li>
              <li><Link to="/logiciel-chauffagiste" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Logiciel chauffagiste</Link></li>
              <li><Link to="/logiciel-menuisier" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Logiciel menuisier</Link></li>
              <li><Link to="/logiciel-peintre" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Logiciel peintre</Link></li>
              <li><Link to="/logiciel-couvreur" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Logiciel couvreur</Link></li>
              <li><Link to="/logiciel-macon" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Logiciel maçon</Link></li>
              <li><Link to="/logiciel-carreleur" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Logiciel carreleur</Link></li>
            </ul>
          </div>

          {/* Pages SEO — Ressources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-50">Ressources</h4>
            <ul className="space-y-3">
              <li><Link to="/application-artisan" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Application artisan</Link></li>
              <li><Link to="/assistant-administratif-artisan" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Assistant administratif</Link></li>
              <li><Link to="/outil-gestion-artisan-btp" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Outil gestion BTP</Link></li>
              <li><Link to="/logiciel-gestion-client-artisan" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Gestion client artisan</Link></li>
              <li><Link to="/meilleur-logiciel-artisan" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Meilleur logiciel 2026</Link></li>
              <li><Link to="/logiciel-artisan-gratuit" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Logiciel artisan gratuit</Link></li>
            </ul>
          </div>

          {/* Pages SEO — Automatisation & IA */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-50">Automatisation & IA</h4>
            <ul className="space-y-3">
              <li><Link to="/automatisation-ia-btp" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Automatisation & IA dans le BTP</Link></li>
              <li><Link to="/ia-pour-artisans" className="text-sm opacity-70 hover:opacity-100 transition-opacity">IA pour artisans</Link></li>
              <li><Link to="/automatiser-devis-artisan" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Automatiser les devis</Link></li>
              <li><Link to="/automatiser-relances-clients" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Automatiser les relances</Link></li>
              <li><Link to="/automatiser-administratif-artisan" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Automatiser l'administratif</Link></li>
              <li><Link to="/ia-suivi-chantier" className="text-sm opacity-70 hover:opacity-100 transition-opacity">IA et suivi de chantier</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-50">Légal</h4>
            <ul className="space-y-3">
              <li><Link to="/mentions-legales" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Mentions légales</Link></li>
              <li><Link to="/politique-de-confidentialite" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} logiciel-artisan.fr — Site indépendant
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
