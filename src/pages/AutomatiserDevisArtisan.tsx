import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "Un outil avec IA peut-il rédiger un devis complet à ma place ?", answer: "Non, et il faut s'en méfier si on le promet. L'IA aide à structurer la demande, à lister rapidement les éléments visibles sur une photo, à proposer une trame. Le chiffrage, la marge et la signature restent de la responsabilité de l'artisan." },
  { question: "C'est compatible avec mon logiciel de devis ou de comptabilité ?", answer: "Un assistant terrain a vocation à préparer le devis en amont — demande, photos, matériel, contexte — puis à transmettre une trame propre. Le devis officiel et la facturation peuvent rester dans votre outil habituel." },
  { question: "Combien de temps on peut vraiment gagner par devis ?", answer: "Cela dépend des chantiers, mais beaucoup d'artisans rapportent qu'ils passent de 20-30 minutes par devis simple à quelques minutes pour la partie préparation. Le temps gagné se cumule très vite sur une semaine." },
  { question: "Est-ce que ça fonctionne aussi pour les dépannages rapides ?", answer: "Oui, et c'est même là que l'effet est le plus net. Pour un dépannage, on perd vite plus de temps à 'paperasser' qu'à intervenir. Une préparation automatisée fait gagner un temps disproportionné." },
];

const AutomatiserDevisArtisan = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Automatiser les devis artisan", item: "https://logiciel-artisan.fr/automatiser-devis-artisan" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/automatiser-devis-artisan"
        title="Automatiser ses devis d'artisan : ce qui est possible en 2026"
        description="Comment automatiser et accélérer la préparation des devis pour un artisan du BTP grâce à l'IA : photos, notes vocales, matériel. Sans remplacer la comptabilité."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Automatiser les devis artisan</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Automatiser la préparation des devis : ce qui est vraiment possible</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            Le devis, c'est souvent le sas qui sépare un client intéressé d'un chantier gagné. Et c'est aussi la tâche que les artisans repoussent le plus, parce qu'elle se fait le soir, fatigué, après une journée de travail. Bonne nouvelle : en 2026, une grande partie de la préparation peut être automatisée. Soyons précis sur ce qui marche, et ce qui ne marche pas.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Ce que l'automatisation prend en charge</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>La partie la plus chronophage d'un devis n'est pas le calcul. C'est le recueil : se souvenir précisément de ce que le client a demandé, retrouver les photos prises sur place, lister le matériel nécessaire, structurer le tout proprement. C'est là que l'IA apporte le plus :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transcription automatique d'une note vocale prise sur place.</li>
              <li>Identification, à partir des photos, des éléments à prévoir.</li>
              <li>Génération d'une trame de devis structurée (poste par poste).</li>
              <li>Pré-remplissage des coordonnées et du contexte client.</li>
            </ul>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce qui reste à l'artisan</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Soyons honnêtes : le chiffrage exact, la marge, les conditions particulières et la signature ne se délèguent pas à une machine. Un assistant terrain comme <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bulbiz</a> sert à préparer le terrain — pas à se substituer à un logiciel de comptabilité ou à votre jugement professionnel. C'est précisément cette clarté qui fait la différence entre un outil sérieux et un outil qui survend.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Un exemple concret</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Visite chez un client pour une rénovation de salle de bains. L'artisan prend cinq photos (existant, arrivées d'eau, sol), enregistre une note vocale de 90 secondes décrivant ce que le client veut, puis enchaîne sur son rendez-vous suivant. Le soir, au lieu de passer 40 minutes à reconstituer la visite, il ouvre l'application : la note est transcrite, les photos sont rangées dans le bon dossier, une liste de matériel pré-établie attend d'être ajustée. Il valide, complète son prix, et le devis part le lendemain matin.</p>
            <p>Sur trois rendez-vous par semaine, c'est facilement deux heures regagnées — et un délai de réponse divisé par deux.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Pour aller plus loin</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/automatisation-ia-btp" className="text-primary hover:underline">Panorama de l'automatisation et de l'IA dans le BTP</Link></li>
            <li><Link to="/automatiser-relances-clients" className="text-primary hover:underline">Automatiser les relances de devis</Link></li>
            <li><Link to="/logiciel-devis-facture-artisan" className="text-primary hover:underline">Logiciel devis facture pour artisan</Link></li>
            <li><Link to="/ia-pour-artisans" className="text-primary hover:underline">IA pour artisans : usages concrets</Link></li>
          </ul>

          <p className="text-muted-foreground text-body-lg">Pour voir à quoi ressemble cette préparation automatisée dans un vrai outil métier, vous pouvez <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">en savoir plus sur Bulbiz</a>.</p>
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

export default AutomatiserDevisArtisan;
