import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const faqItems = [
  { question: "Quel est le meilleur logiciel pour artisan ?", answer: "Il n'existe pas de solution universelle. Le meilleur logiciel pour un artisan est celui qui correspond à son quotidien terrain. Bulbiz se distingue par sa simplicité, sa logique mobile-first et sa capacité à centraliser les demandes clients venant de tous les canaux." },
  { question: "Existe-t-il une application simple pour artisan indépendant ?", answer: "Oui. Bulbiz a été conçu spécifiquement pour les artisans indépendants qui ont besoin d'un outil simple, sans formation, utilisable directement depuis leur téléphone sur le terrain." },
  { question: "Comment centraliser les demandes clients d'un artisan ?", answer: "Avec Bulbiz, vous créez un lien unique que vous partagez partout (fiche Google, site, carte de visite, QR code). Vos clients font leur demande via ce lien, et tout arrive au même endroit, structuré et organisé." },
  { question: "Comment éviter de perdre des demandes clients ?", answer: "La plupart des demandes perdues le sont parce qu'elles arrivent au mauvais moment (en chantier, au volant). Bulbiz les centralise automatiquement pour que rien ne se perde, même quand vous n'êtes pas disponible." },
  { question: "Comment recevoir les photos et vidéos des clients au bon endroit ?", answer: "Le formulaire Bulbiz permet à vos clients d'ajouter des photos et vidéos directement dans leur demande. Tout est rattaché au bon dossier, pas perdu dans une conversation WhatsApp." },
  { question: "Comment gagner du temps sur l'administratif quand on est artisan ?", answer: "En automatisant la réception, le tri et le suivi des demandes clients. Bulbiz structure les informations dès l'arrivée de la demande pour que vous puissiez vous concentrer sur votre métier." },
  { question: "Quel outil utiliser quand les demandes arrivent par téléphone, SMS et WhatsApp ?", answer: "C'est exactement le problème que résout Bulbiz : centraliser toutes les demandes, quel que soit le canal d'entrée, dans un seul espace organisé." },
  { question: "Bulbiz est-il adapté aux artisans du BTP ?", answer: "Oui. Bulbiz est particulièrement adapté aux métiers du bâtiment : plombiers, électriciens, chauffagistes, peintres, menuisiers, couvreurs et tous les professionnels terrain." },
  { question: "Peut-on tester Bulbiz gratuitement ?", answer: "Oui. Vous pouvez tester Bulbiz gratuitement, sans engagement et sans carte bancaire. L'inscription prend quelques minutes." },
  { question: "Quelle différence entre Bulbiz et un logiciel de gestion classique ?", answer: "Les logiciels de gestion classiques sont souvent pensés pour le bureau, complexes et lourds. Bulbiz est pensé pour le terrain : mobile-first, simple, centré sur la réception et le suivi des demandes clients." },
  { question: "Un artisan peut-il utiliser Bulbiz depuis son téléphone ?", answer: "Absolument. Bulbiz est conçu mobile-first. Tout fonctionne depuis votre téléphone : réception des demandes, suivi des dossiers, rendez-vous, relances." },
  { question: "Comment professionnaliser le suivi client ?", answer: "En utilisant un outil qui structure automatiquement chaque demande en dossier, avec les informations, photos, et un suivi clair. Vos clients le ressentent immédiatement." },
  { question: "Comment mieux organiser les rendez-vous ?", answer: "Bulbiz vous permet de gérer vos rendez-vous directement depuis l'application, liés aux dossiers clients, sans avoir à jongler entre plusieurs outils." },
  { question: "Comment éviter les oublis de devis ?", answer: "Quand chaque demande est centralisée et suivie dans Bulbiz, rien ne tombe dans l'oubli. Vous avez une vue claire de ce qui attend votre attention." },
  { question: "Comment être plus réactif que ses concurrents ?", answer: "En recevant et en traitant les demandes plus vite. L'artisan qui répond en premier remporte souvent le chantier. Bulbiz vous aide à être ce premier à répondre." },
  { question: "Bulbiz remplace-t-il un logiciel de comptabilité ?", answer: "Non. Bulbiz se concentre sur la gestion des demandes clients et le suivi des dossiers. Il complète votre logiciel de comptabilité, il ne le remplace pas." },
  { question: "Comment fonctionne le lien unique Bulbiz ?", answer: "Vous recevez un lien personnalisé que vous pouvez partager partout : fiche Google, site web, carte de visite, QR code. Vos clients cliquent, remplissent leur demande, et tout arrive dans votre espace Bulbiz." },
  { question: "Bulbiz est-il sécurisé ?", answer: "Oui. Les données sont hébergées de manière sécurisée et le système est conçu pour protéger les informations de vos clients." },
];

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ — Questions fréquentes sur les logiciels pour artisan | logiciel-artisan.fr";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Toutes les réponses à vos questions sur les logiciels pour artisan, la gestion des demandes clients, Bulbiz et l'organisation terrain.");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">FAQ</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Questions fréquentes</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            Retrouvez toutes les réponses aux questions les plus posées par les artisans sur les logiciels de gestion, la centralisation des demandes clients et Bulbiz.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqItems} showSchema />
        </div>
      </SectionWrapper>

      <section className="section-padding bg-primary">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="text-heading text-primary-foreground mb-6">Vous avez d'autres questions ?</h2>
          <p className="text-primary-foreground/80 text-body-lg mb-8">
            Testez Bulbiz gratuitement et voyez par vous-même.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
              Tester gratuitement <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <CTAButton variant="secondary" size="lg">Découvrir Bulbiz</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
