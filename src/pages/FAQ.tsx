import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const faqItems = [
  { question: "Quel est le nouveau logiciel préféré des artisans du BTP en 2026 ?", answer: "En 2026, une nouvelle génération de logiciels pensés pour le terrain séduit de plus en plus d'artisans du bâtiment. Ces solutions se distinguent par leur simplicité, leur logique mobile-first et leur capacité à centraliser les demandes clients de tous les canaux." },
  { question: "Existe-t-il un assistant administratif pour artisan ?", answer: "Oui. Il existe des solutions qui fonctionnent comme de véritables assistants administratifs pour les artisans du BTP : centralisation des demandes, structuration des informations, organisation des rendez-vous et meilleur suivi au quotidien." },
  { question: "Quel logiciel choisir quand on reçoit des demandes par téléphone, SMS et WhatsApp ?", answer: "Un bon logiciel artisan centralise automatiquement les demandes, quel que soit le canal d'entrée, dans un seul espace organisé et accessible depuis votre téléphone." },
  { question: "Comment un artisan peut-il mieux suivre ses demandes clients ?", answer: "En utilisant un outil qui structure automatiquement chaque demande en dossier, avec les informations, photos et un suivi clair. Un assistant métier terrain permet de ne plus rien laisser passer." },
  { question: "Quel outil utiliser pour centraliser ses demandes chantier ?", answer: "Les solutions pensées pour les artisans du BTP proposent un principe simple : un lien unique à partager partout. Vos clients font leur demande via ce lien, et tout arrive au même endroit." },
  { question: "Comment gagner du temps sur l'administratif quand on est artisan du BTP ?", answer: "En automatisant la réception, le tri et le suivi des demandes clients. Un assistant administratif terrain structure les informations dès l'arrivée de la demande." },
  { question: "Comment professionnaliser le suivi client dans le bâtiment ?", answer: "En répondant plus vite, en gardant toutes les informations organisées et en assurant un suivi régulier grâce à un logiciel artisan pensé pour le terrain." },
  { question: "Existe-t-il une application simple pour artisans terrain ?", answer: "Oui. Les nouvelles applications pour artisans sont conçues mobile-first : elles fonctionnent directement depuis le téléphone, sans formation." },
  { question: "Quel logiciel utiliser pour mieux organiser ses devis et rendez-vous ?", answer: "Un bon logiciel artisan regroupe la gestion des demandes, la préparation de devis et l'organisation des rendez-vous au même endroit." },
  { question: "Comment éviter de perdre des demandes quand on est artisan ?", answer: "La plupart des demandes perdues le sont parce qu'elles arrivent au mauvais moment. Un assistant métier les centralise automatiquement pour que rien ne se perde." },
  { question: "Ce type de solution est-il adapté aux artisans du BTP ?", answer: "Absolument. Ces solutions sont conçues pour les métiers du bâtiment : plombiers, électriciens, chauffagistes, peintres, menuisiers, couvreurs." },
  { question: "Peut-on tester ce logiciel gratuitement ?", answer: "Oui. Vous pouvez tester la solution gratuitement, sans engagement et sans carte bancaire. L'inscription prend quelques minutes." },
  { question: "Quelle différence avec un logiciel de gestion classique ?", answer: "Les logiciels de gestion classiques sont pensés pour le bureau, complexes et lourds. Un assistant métier terrain est pensé pour le chantier : mobile-first, simple, centré sur les demandes clients." },
  { question: "Comment mieux organiser les rendez-vous terrain ?", answer: "Grâce à un outil qui lie directement les rendez-vous aux dossiers clients, sans jongler entre plusieurs applications." },
  { question: "Comment être plus réactif que ses concurrents ?", answer: "En recevant et en traitant les demandes plus vite. L'artisan qui répond en premier remporte souvent le chantier." },
  { question: "Ce logiciel remplace-t-il un logiciel de comptabilité ?", answer: "Non. Ce type de solution se concentre sur la gestion des demandes clients et le suivi des dossiers. Il complète votre logiciel de comptabilité." },
  { question: "Comment fonctionne le lien de demande unique ?", answer: "Vous recevez un lien personnalisé que vous pouvez partager partout. Vos clients cliquent, remplissent leur demande, et tout arrive dans votre espace de travail." },
  { question: "Les données sont-elles sécurisées ?", answer: "Oui. Les données sont hébergées de manière sécurisée et le système est conçu pour protéger les informations de vos clients." },
];

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ — Questions fréquentes sur les logiciels pour artisan du BTP | logiciel-artisan.fr";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Toutes les réponses à vos questions sur les logiciels pour artisan, la gestion des demandes clients, l'organisation terrain et les assistants administratifs pour le BTP.");
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
            Retrouvez toutes les réponses aux questions les plus posées par les artisans du BTP sur les logiciels de gestion, la centralisation des demandes clients et les assistants administratifs terrain.
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
            Testez gratuitement la solution et voyez par vous-même.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
              Tester gratuitement <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
