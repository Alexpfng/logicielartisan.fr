import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { ArrowRight, HardHat, ClipboardCheck, Camera, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "À quoi sert un logiciel pour maçon ?", answer: "À suivre des chantiers longs (gros œuvre, extensions, rénovations lourdes), centraliser les demandes de devis, conserver les photos d'avancement et garder la trace de chaque décision client sans tout garder en tête." },
  { question: "Comment ça aide sur un chantier de gros œuvre ?", answer: "Un chantier de maçonnerie s'étale sur plusieurs semaines, parfois plusieurs mois. Avoir un dossier vivant — photos d'avancement, notes du client, étapes franchies — permet de reprendre le travail sans rien oublier, même après une longue interruption." },
  { question: "Puis-je conserver les photos d'avancement ?", answer: "Oui. Les photos prises à chaque étape (fondations, élévation, dalle, finitions) restent rattachées au dossier chantier. Utile pour le client, pour vous, et en cas de litige." },
  { question: "Est-ce un logiciel de devis-factures ou de comptabilité ?", answer: "Non. C'est un assistant administratif terrain. Il prépare et organise les informations chantier ; les devis et la comptabilité restent gérés par vos outils habituels." },
  { question: "Est-ce adapté à un maçon seul ou à une petite équipe ?", answer: "Oui. L'outil est pensé pour les artisans seuls comme pour les petites équipes du BTP, sans paramétrage compliqué." },
];

const LogicielMacon = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Logiciel maçon", item: "https://logiciel-artisan.fr/logiciel-macon" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/logiciel-macon"
        title="Logiciel maçon : suivre les chantiers longs et les demandes de devis"
        description="Un assistant terrain pour maçons : gros œuvre, suivi d'avancement, photos chantier, demandes de devis centralisées. Pensé pour les artisans du BTP. Test gratuit."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel maçon</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel maçon : tenir le fil de chaque chantier, du devis au dernier coup de truelle</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Un maçon mène souvent plusieurs chantiers en parallèle, sur des durées longues. Entre les demandes de devis qui tombent, les visites de terrain et les chantiers en cours, il faut un outil capable de garder la mémoire de tout, sans paperasse de bureau.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Le gros œuvre demande de la mémoire, pas de la mémoire vive</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Un chantier de maçonnerie, c'est rarement bouclé en une semaine. Une extension, une dalle, un mur porteur, une rénovation lourde — tout ça s'étale dans le temps, avec des interruptions liées au séchage, à la météo, ou à l'attente d'un autre corps de métier. Pendant ce temps, d'autres chantiers démarrent, d'autres demandes arrivent, et le risque c'est de mélanger les informations dans sa tête.</p>
            <p>Un <strong className="text-foreground">logiciel pour maçon</strong> bien pensé ne cherche pas à tout faire. Il cherche à garder une mémoire propre par chantier : qui est le client, ce qui a été validé, ce qui reste à faire, où en est l'avancement, quelles photos ont été prises à quel moment.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce qu'un assistant terrain change concrètement</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Building2, title: "Un dossier par chantier", desc: "Toutes les infos d'un chantier au même endroit, du premier appel à la réception." },
              { icon: Camera, title: "Photos d'avancement", desc: "Fondations, élévation, dalle, finitions : la mémoire visuelle du chantier reste organisée." },
              { icon: ClipboardCheck, title: "Demandes de devis triées", desc: "Les nouvelles demandes ne se perdent plus dans les SMS et la boîte mail." },
              { icon: HardHat, title: "Suivi des étapes clés", desc: "Vous voyez où en est chaque chantier sans avoir à appeler vos compagnons." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">Capter et trier les demandes de devis</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Les demandes de devis en maçonnerie sont souvent floues au début : "j'aimerais agrandir ma maison", "il faut refaire un mur dans le jardin", "j'ai une terrasse à reprendre". Avant de chiffrer, il faut voir, mesurer, comprendre. Garder ces demandes dans un endroit clair, avec leur statut (à rappeler, visite prévue, devis envoyé, en attente de retour), vous évite de laisser dormir des opportunités.</p>
            <p>Plus vous traitez vite et proprement la première demande, plus vous mettez de chances de votre côté pour décrocher le chantier. Et plus vous gardez un historique propre, plus c'est facile de relancer un client trois mois plus tard sans lui redonner l'impression que vous avez tout oublié.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Photos et traçabilité : votre meilleure protection</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Sur un gros chantier, il n'est pas rare d'avoir des désaccords avec un client : un point qui semblait évident, une finition mal interprétée, un détail technique mal compris. Avoir des photos datées, des notes claires, une trace de ce qui a été validé, ça désamorce énormément de conflits — et ça donne une image de sérieux qui rassure les futurs clients.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À découvrir aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/logiciel-artisan" className="text-primary hover:underline">Logiciel artisan : la vue d'ensemble</Link></li>
            <li><Link to="/logiciel-gestion-chantier" className="text-primary hover:underline">Logiciel de gestion de chantier</Link></li>
            <li><Link to="/logiciel-couvreur" className="text-primary hover:underline">Logiciel couvreur (métier voisin)</Link></li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-8">Questions fréquentes</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </SectionWrapper>

      <section className="section-padding bg-primary">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="text-heading text-primary-foreground mb-6">Vos chantiers de maçonnerie, suivis sans rien lâcher</h2>
          <p className="text-primary-foreground/80 text-body-lg mb-8">Test gratuit, sans engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">Tester gratuitement <ArrowRight className="w-4 h-4 ml-2" /></a>
            <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-primary-foreground border border-primary-foreground/40 font-semibold rounded-xl hover:bg-primary-foreground/10 transition-all">Découvrir la solution</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LogicielMacon;
