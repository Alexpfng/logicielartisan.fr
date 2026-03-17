import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">LA</span>
              </div>
              <span className="font-bold text-lg">logiciel-artisan.fr</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Le guide de référence pour aider les artisans à mieux s'organiser avec les bons outils numériques.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-50">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Accueil</Link></li>
              <li><Link to="/bulbiz-avis" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Notre avis sur Bulbiz</Link></li>
              <li><Link to="/logiciel-artisan" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Logiciel artisan</Link></li>
              <li><Link to="/faq" className="text-sm opacity-70 hover:opacity-100 transition-opacity">FAQ</Link></li>
            </ul>
          </div>

          {/* Pages SEO */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-50">Ressources</h4>
            <ul className="space-y-3">
              <li><Link to="/application-artisan" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Application artisan</Link></li>
              <li><Link to="/logiciel-btp" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Logiciel BTP</Link></li>
              <li><a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Bulbiz.io</a></li>
              <li><a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Tester Bulbiz</a></li>
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
