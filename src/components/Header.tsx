import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoArtisan from "@/assets/logo-artisan.png";
import { Menu, X } from "lucide-react";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Fonctionnalités", href: "/#fonctionnalites" },
  { label: "Avis", href: "/bulbiz-avis" },
  { label: "FAQ", href: "/faq" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/90 backdrop-blur-xl shadow-card border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
          <img src={logoArtisan} alt="logiciel-artisan.fr" className="w-8 h-8 rounded-lg" />
          <span className="hidden sm:inline">logiciel-artisan.fr</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.href.startsWith("/#") ? (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <CTAButton variant="secondary" size="default">Découvrir la solution</CTAButton>
          <CTAButton variant="primary" size="default">Tester gratuitement</CTAButton>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="container-wide py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              item.href.startsWith("/#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-foreground py-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-base font-medium text-foreground py-2"
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <CTAButton variant="primary" size="lg">Tester gratuitement</CTAButton>
              <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
