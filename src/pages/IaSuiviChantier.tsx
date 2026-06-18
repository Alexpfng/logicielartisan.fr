import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "Comment une IA peut-elle suivre un chantier ?", answer: "Elle ne 'voit' pas le chantier comme un chef de chantier humain. En revanche, elle est très efficace pour rattacher automatiquement chaque photo, chaque note vocale et chaque message au bon dossier client, et pour structurer ces informations dans une chronologie claire." },
  { question: "Faut-il prendre des photos d'une manière particulière ?", answer: "Non. Un bon outil accepte n'importe quelle photo prise au téléphone, dans n'importe quel ordre. Le tri se fait automatiquement à partir du contexte (client en cours, géolocalisation, intervention active)." },
  { question: "Et si je travaille avec plusieurs collaborateurs ?", answer: "L'intérêt est encore plus grand. Chacun peut documenter sa partie sans coordination manuelle, et l'historique du chantier reste consultable au même endroit par tout le monde." },
  { question: "Les notes vocales remplacent-elles vraiment le compte rendu écrit ?", answer: "Dans la majorité des cas, oui. La transcription est aujourd'hui assez fidèle pour produire un compte rendu lisible, qu'il suffit éventuellement de relire. Le gain de temps est très net pour ceux qui détestent écrire." },
];

const IaSuiviChantier = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "IA et suivi de chantier", item: "https://logiciel-artisan.fr/ia-suivi-chantier" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/ia-suivi-chantier"
        title="IA et suivi de chantier : photos, notes vocales, organisation"
        description="Comment l'IA aide à organiser et suivre un chantier : photos rattachées au bon dossier, notes vocales structurées automatiquement, chronologie claire."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">IA et suivi de chantier</span>
          </div>
          <h1 className="text-display text-foreground mb-6">IA et suivi de chantier : la fin du dossier qui se perd</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            Un chantier, en pratique, ce n'est pas un plan bien rangé : c'est des dizaines de photos prises à la volée, des notes vocales entre deux interventions, des messages envoyés au client à la pause déjeuner et des modifications de dernière minute. L'IA bien intégrée à un outil terrain consiste à donner du sens à tout ce flux, sans demander à l'artisan d'y passer ses soirées.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Le vrai problème : la dispersion</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>La plupart des artisans n'ont pas un problème de quantité d'information sur un chantier : ils ont un problème de dispersion. Les photos sont dans la galerie du téléphone, mélangées avec des photos personnelles. Les notes vocales sont dans une appli, les messages clients dans une autre. Au moment de produire un compte rendu, ou pire, au moment d'un litige, retrouver l'info devient un cauchemar.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce que change une bonne organisation assistée par IA</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Voici les bénéfices concrets quand chaque élément se range tout seul dans le bon dossier :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Toutes les photos d'un chantier accessibles en deux clics, dans l'ordre chronologique.</li>
              <li>Les notes vocales transcrites et lisibles, sans avoir à réécouter chaque enregistrement.</li>
              <li>Un historique clair des échanges avec le client.</li>
              <li>Des comptes rendus de visite produits presque automatiquement.</li>
              <li>Une mémoire complète du chantier en cas de question, six mois plus tard.</li>
            </ul>
            <p>Des assistants comme <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bulbiz</a> sont pensés autour de cette logique terrain plutôt qu'autour d'un planning théorique.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Un exemple : la photo qui sauve un litige</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Quatre mois après la fin d'un chantier, un client conteste un point. Sans suivi structuré, l'artisan passe deux soirées à éplucher son téléphone pour retrouver les photos d'avant intervention. Avec un suivi assisté, il ouvre le dossier client, filtre par date et envoie la preuve en cinq minutes. Ce gain de temps là, on ne le voit pas tous les jours — mais le jour où il arrive, il vaut tout le reste.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À lire aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/automatisation-ia-btp" className="text-primary hover:underline">Panorama de l'automatisation et de l'IA dans le BTP</Link></li>
            <li><Link to="/ia-pour-artisans" className="text-primary hover:underline">IA pour artisans : usages concrets</Link></li>
            <li><Link to="/automatiser-administratif-artisan" className="text-primary hover:underline">Automatiser l'administratif</Link></li>
            <li><Link to="/logiciel-gestion-chantier" className="text-primary hover:underline">Logiciel de gestion de chantier</Link></li>
          </ul>

          <p className="text-muted-foreground text-body-lg">Pour voir à quoi ressemble un suivi de chantier réellement assisté, vous pouvez <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">découvrir Bulbiz</a>.</p>
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

export default IaSuiviChantier;
