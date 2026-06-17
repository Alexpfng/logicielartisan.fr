import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import Seo from "@/components/Seo";
import { CheckCircle2, ArrowRight, Smartphone, Wifi, Battery, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ApplicationArtisan = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Application artisan", item: "https://logiciel-artisan.fr/application-artisan" },
    ],
  };
  return (
    <div className="min-h-screen">
      <Seo
        path="/application-artisan"
        title="Application Artisan BTP 2026 — L'app mobile pour gérer vos demandes terrain"
        description="Découvrez la meilleure application pour artisan du BTP. Mobile-first, simple et efficace. Gérez vos demandes clients et votre organisation terrain depuis votre téléphone. Test gratuit."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Application artisan</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Application artisan : votre assistant administratif mobile pour le BTP</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Votre bureau, c'est votre téléphone. La bonne application artisan doit être mobile-first, simple et pensée pour le quotidien terrain des artisans du BTP.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Pourquoi une application mobile pour artisan du BTP ?</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Un artisan du BTP passe la majorité de son temps sur le terrain. Entre les chantiers, les déplacements et les rendez-vous, le bureau n'est plus le centre de l'activité.</p>
            <p>C'est pourquoi une <strong className="text-foreground">application artisan</strong> doit être pensée mobile-first. Pas une version réduite d'un logiciel bureau, mais un véritable assistant administratif conçu dès le départ pour fonctionner sur téléphone.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Smartphone, title: "Interface mobile native", desc: "Conçue pour le pouce, pas pour la souris." },
              { icon: Wifi, title: "Notifications en temps réel", desc: "Recevez chaque nouvelle demande instantanément." },
              { icon: Battery, title: "Léger et rapide", desc: "Pas d'application lourde à installer." },
              { icon: MapPin, title: "Utilisable partout", desc: "Sur chantier, dans le camion, en déplacement." },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">L'application artisan pensée terrain</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Cette application a été conçue mobile-first pour les artisans du BTP. Tout est accessible depuis votre téléphone :</p>
            <ul className="space-y-2 ml-4">
              {["Réception des demandes clients", "Consultation des dossiers", "Gestion des rendez-vous", "Suivi des demandes et relances", "Photos et documents liés aux chantiers"].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="pt-2">L'expérience est fluide, rapide et adaptée à la réalité du terrain. Pas besoin de formation.</p>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-primary-foreground mb-4">Testez l'application gratuitement</h2>
            <p className="text-primary-foreground/80 mb-6">Sans engagement. Mis en place en quelques minutes.</p>
            <a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
              Commencer gratuitement <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default ApplicationArtisan;
