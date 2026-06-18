import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "Combien de temps un artisan passe-t-il sur l'administratif ?", answer: "Les retours terrain situent souvent ce temps entre 5 et 10 heures par semaine pour un artisan seul ou en petite équipe — soit l'équivalent d'une journée complète chaque semaine, hors temps de chantier." },
  { question: "Qu'est-ce qu'on peut vraiment automatiser sans perdre le contrôle ?", answer: "Tout ce qui est répétitif : saisie d'une nouvelle demande, classement de photos, envoi de relances, rappels de rendez-vous, structuration de notes vocales. Les décisions et la facturation restent encadrées par l'artisan." },
  { question: "Faut-il abandonner son cahier ou son tableur ?", answer: "Pas du jour au lendemain. Le plus efficace est de basculer un seul flux à la fois — par exemple les nouvelles demandes — et de garder le reste en parallèle quelques semaines, jusqu'à se sentir à l'aise." },
  { question: "Est-ce que l'automatisation rend l'artisan plus distant des clients ?", answer: "Non, c'est même souvent l'inverse. Moins de temps passé à courir après la paperasse, c'est plus de temps pour répondre vite, rappeler quand il faut et soigner la relation." },
];

const AutomatiserAdministratifArtisan = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Automatiser l'administratif artisan", item: "https://logiciel-artisan.fr/automatiser-administratif-artisan" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/automatiser-administratif-artisan"
        title="Automatiser l'administratif d'un artisan : par où commencer"
        description="Comment réduire le temps passé sur l'administratif grâce à l'automatisation et à la centralisation des demandes. Méthode concrète pour un artisan du BTP."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Automatiser l'administratif artisan</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Automatiser son administratif d'artisan : par où commencer concrètement</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            L'administratif n'est pas le métier d'un artisan, mais il prend pourtant chaque semaine plusieurs heures — souvent sur le temps personnel. La bonne nouvelle, c'est qu'une grande partie de cette charge peut être réduite, sans changer de métier ni devenir informaticien. Voici une méthode simple, étape par étape.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Étape 1 — Centraliser toutes les demandes</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Aujourd'hui, les demandes arrivent par téléphone, SMS, WhatsApp, email, formulaire, recommandation. Tant que tout est éparpillé, rien ne peut être automatisé. La première étape — et la plus libératrice — consiste à tout faire atterrir au même endroit. Une seule boîte d'entrée pour les nouvelles demandes, qu'elles viennent d'où elles viennent.</p>
            <p>C'est précisément la promesse d'assistants métier comme <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bulbiz</a> : centraliser les demandes clients pour ne plus jamais perdre une affaire dans un fil de SMS.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Étape 2 — Faire structurer l'information à votre place</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Une fois les demandes centralisées, l'outil les transforme automatiquement en fiches structurées : nom du client, lieu, nature de l'intervention, urgence, pièces jointes. Vous arrêtez de recopier dix fois les mêmes coordonnées d'un canal à l'autre. C'est peut-être l'automatisation qui rend le plus de temps, à long terme.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Étape 3 — Déléguer les rappels et les relances</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Tout ce qui est récurrent peut être confié à un système : rappel d'un rendez-vous la veille, relance d'un devis non répondu, notification d'un dossier inactif depuis trois semaines. Vous gardez le contrôle final, mais vous n'avez plus à tout porter dans votre tête.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Étape 4 — Garder le minimum nécessaire de "manuel"</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>L'objectif n'est pas de tout automatiser, mais de ne plus faire à la main ce qui ne demande pas votre jugement. Vous gardez le manuel pour ce qui compte : décider d'un prix, parler à un client, organiser une journée de chantier compliquée. Tout le reste — la "tuyauterie" — peut tourner tout seul.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À lire aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/automatisation-ia-btp" className="text-primary hover:underline">Panorama de l'automatisation et de l'IA dans le BTP</Link></li>
            <li><Link to="/automatiser-relances-clients" className="text-primary hover:underline">Automatiser les relances clients</Link></li>
            <li><Link to="/ia-pour-artisans" className="text-primary hover:underline">IA pour artisans : usages concrets</Link></li>
            <li><Link to="/assistant-administratif-artisan" className="text-primary hover:underline">Assistant administratif artisan</Link></li>
          </ul>

          <p className="text-muted-foreground text-body-lg">Pour voir cette méthode incarnée dans un outil concret, vous pouvez <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">en savoir plus sur Bulbiz</a>.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-8">Questions fréquentes</h2>
          <FAQAccordion items={faqItems} showSchema />
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default AutomatiserAdministratifArtisan;
