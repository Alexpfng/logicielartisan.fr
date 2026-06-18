import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "Qu'est-ce que l'automatisation dans le BTP en 2026 ?", answer: "C'est l'ensemble des outils numériques qui prennent en charge des tâches répétitives — saisie d'une demande client, classement de photos de chantier, relance d'un devis, organisation d'un planning — pour que l'artisan se concentre sur son métier. En 2026, ces outils s'appuient de plus en plus sur de l'IA pour structurer l'information à partir de notes vocales, de photos ou de simples messages reçus." },
  { question: "L'IA va-t-elle remplacer les artisans ?", answer: "Non. L'IA ne pose pas un carrelage, ne soude pas un tuyau et ne rassure pas un client sur un chantier. Elle aide à organiser, structurer et préparer le travail administratif autour du métier. Le savoir-faire reste celui de l'artisan." },
  { question: "Faut-il être à l'aise avec l'informatique pour s'y mettre ?", answer: "De moins en moins. Les outils pensés pour le terrain fonctionnent surtout à la voix, à la photo et avec des écrans très simples sur smartphone. L'objectif des nouvelles solutions est précisément de ne pas demander de compétences techniques." },
  { question: "Quels usages sont vraiment matures aujourd'hui ?", answer: "La structuration automatique des demandes clients, l'aide à la préparation de devis, le suivi de chantier par photos et notes vocales, et les relances automatisées font partie des usages les plus stables et les plus utiles au quotidien." },
  { question: "Est-ce que c'est réservé aux grosses entreprises du BTP ?", answer: "Au contraire. Les artisans seuls ou en petite équipe sont souvent les plus gagnants : ils n'ont pas de secrétariat, donc chaque heure administrative économisée se ressent immédiatement sur leur quotidien." },
];

const AutomatisationIaBtp = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Automatisation et IA dans le BTP", item: "https://logiciel-artisan.fr/automatisation-ia-btp" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/automatisation-ia-btp"
        title="Automatisation et IA dans le BTP en 2026 : panorama complet"
        description="Panorama 2026 de l'automatisation et de l'IA dans le BTP : devis, relances, suivi de chantier, photos, notes vocales et planning. Usages concrets pour artisans."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Automatisation et IA dans le BTP</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Automatisation et IA dans le BTP en 2026 : ce qui change vraiment</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            L'automatisation et l'intelligence artificielle ne sont plus un sujet de salon professionnel. En 2026, elles font partie du quotidien d'un nombre croissant d'artisans du BTP — souvent sans même qu'ils s'en rendent compte. Cette page fait le point, sans jargon, sur ce qui est réellement utile sur le terrain.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">De quoi parle-t-on exactement ?</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>L'automatisation, dans le BTP, ce n'est pas un robot qui pose des fenêtres. C'est plutôt tout ce qui tourne autour du chantier : une demande client transformée automatiquement en fiche structurée, un devis pré-rempli à partir d'une photo, une relance envoyée toute seule au bon moment, un planning qui se met à jour quand un rendez-vous change. L'IA vient s'ajouter à cette automatisation en comprenant des messages, des photos ou des notes vocales, là où un logiciel classique demanderait une saisie manuelle.</p>
            <p>L'enjeu n'est pas de "remplacer l'humain". Il est de retirer à l'artisan les tâches répétitives qui le tiennent éveillé à 22 h après une journée de chantier, pour qu'il puisse se concentrer sur son cœur de métier et sur la relation client.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Les grands usages matures en 2026</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-8">
            <p>Voici les domaines où l'automatisation et l'IA apportent une vraie valeur aujourd'hui, sans promesses excessives :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Préparation des devis</strong> : structuration de la demande, aide à lister le matériel à partir de photos ou de notes vocales.</li>
              <li><strong>Centralisation des demandes</strong> : appels, SMS, formulaires regroupés au même endroit pour ne plus rien perdre.</li>
              <li><strong>Relances clients</strong> : suivi automatique des devis envoyés et rappels au bon moment.</li>
              <li><strong>Suivi de chantier</strong> : photos et notes vocales rattachées automatiquement au bon dossier client.</li>
              <li><strong>Planning</strong> : organisation visuelle de la semaine, ajustement rapide en cas d'imprévu.</li>
              <li><strong>Réduction de l'administratif</strong> : moins de double saisie, moins de copier-coller entre les outils.</li>
            </ul>
            <p>Des assistants métier comme <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bulbiz</a> regroupent plusieurs de ces usages dans un outil unique pensé pour le terrain, plutôt que de cumuler trois ou quatre applications mal connectées entre elles.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Pourquoi ça décolle maintenant</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Trois choses ont changé en peu de temps : la qualité des modèles d'IA qui comprennent enfin des photos et des notes vocales correctement, la généralisation du smartphone professionnel chez les artisans, et la prise de conscience que le carnet papier + le fil de SMS + la boîte mail ne tiennent plus le rythme dès qu'on dépasse quelques chantiers en parallèle.</p>
            <p>Résultat : des outils qui demandaient hier une vraie formation se prennent en main aujourd'hui en quelques minutes, parfois rien qu'en parlant à l'application.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Pages associées dans ce dossier</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/ia-pour-artisans" className="text-primary hover:underline">IA pour artisans : usages concrets au quotidien</Link></li>
            <li><Link to="/automatiser-devis-artisan" className="text-primary hover:underline">Automatiser la préparation des devis</Link></li>
            <li><Link to="/automatiser-relances-clients" className="text-primary hover:underline">Automatiser les relances clients</Link></li>
            <li><Link to="/automatiser-administratif-artisan" className="text-primary hover:underline">Automatiser l'administratif d'un artisan</Link></li>
            <li><Link to="/ia-suivi-chantier" className="text-primary hover:underline">IA et suivi de chantier</Link></li>
            <li><Link to="/logiciel-artisan" className="text-primary hover:underline">Vue d'ensemble du logiciel artisan</Link></li>
          </ul>

          <h2 className="text-heading text-foreground mb-6">Par où commencer concrètement</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Le plus efficace n'est pas de tout automatiser d'un coup, mais d'identifier la tâche qui vous coûte le plus de temps ou d'énergie mentale — souvent : ne pas perdre une demande, ou relancer un devis au bon moment — et de commencer par là. Une fois ce point réglé, l'effet boule de neige fait le reste.</p>
            <p>Pour creuser le sujet et voir comment ces usages s'incarnent dans un outil pensé pour les artisans, vous pouvez <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">en savoir plus sur Bulbiz</a>.</p>
          </div>
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

export default AutomatisationIaBtp;
