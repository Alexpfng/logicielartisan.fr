import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "L'IA est-elle vraiment utile pour un artisan qui travaille seul ?", answer: "Oui, et même particulièrement pour lui. Sans secrétariat, c'est lui qui prend chaque appel, écrit chaque devis, range chaque photo. L'IA prend en charge ces tâches répétitives et rend ces dix minutes par client au métier ou à la famille." },
  { question: "Faut-il payer cher pour avoir de l'IA dans son outil ?", answer: "Plus en 2026. Les fonctions d'IA pour structurer une demande, dicter une note ou trier des photos sont désormais intégrées à des outils accessibles, à des tarifs comparables à un simple logiciel de devis classique." },
  { question: "Et la sécurité des données clients ?", answer: "C'est un vrai sujet. Préférez un outil clair sur où sont stockées les données et qui s'engage sur l'hébergement européen. Évitez de coller des informations clients dans des outils d'IA grand public sans cadre professionnel." },
  { question: "Que faire si je ne suis pas à l'aise avec la technologie ?", answer: "Commencez par un seul cas d'usage : dicter vos demandes clients au lieu de les écrire, par exemple. Une fois le réflexe pris, le reste vient naturellement. L'IA bien conçue ne demande pas de formation." },
];

const IaPourArtisans = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "IA pour artisans", item: "https://logiciel-artisan.fr/ia-pour-artisans" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/ia-pour-artisans"
        title="IA pour artisans : usages concrets, sans jargon"
        description="Comment l'intelligence artificielle aide concrètement les artisans du BTP au quotidien : structurer les demandes, gagner du temps, ne rien oublier. Sans jargon."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">IA pour artisans</span>
          </div>
          <h1 className="text-display text-foreground mb-6">IA pour artisans : à quoi ça sert vraiment au quotidien</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            Quand on parle d'intelligence artificielle, beaucoup d'artisans pensent à un sujet "pas pour eux". Pourtant, derrière le mot un peu intimidant, il y a surtout du temps gagné, des oublis évités et une charge mentale qui baisse. Voici ce que ça change concrètement, sans jargon.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Structurer une demande client en quelques secondes</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Un client appelle pour une fuite, un autre envoie une photo de tableau électrique sur WhatsApp, un troisième laisse un message vocal de deux minutes. En fin de journée, tout est mélangé dans la tête, dans les SMS et sur un bout de papier dans la camionnette. L'IA, ici, sert à transformer ces messages bruts en fiches claires : qui, quoi, où, urgence, photos rattachées. Ce n'est pas magique, c'est juste très utile.</p>
            <p>Résultat : plus aucune demande oubliée au fond d'une boîte mail, et un suivi qui tient la route même quand la semaine s'emballe.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Dicter au lieu d'écrire</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Sur un chantier, taper une note sur un clavier de téléphone avec les doigts pleins de plâtre, ça ne se fait pas. Dicter, oui. Les outils modernes transcrivent fidèlement la voix, la nettoient et la rangent dans le bon dossier client. Cinq secondes au lieu de deux minutes. Multipliez par dix interventions par semaine et vous récupérez plusieurs heures.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ne plus rien oublier</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>L'IA bien intégrée à un outil métier rappelle au bon moment : "ce devis n'a pas eu de réponse depuis 12 jours", "cette photo n'est rattachée à aucun chantier", "ce client demandait à être recontacté cette semaine". C'est une mémoire externe qui ne dort jamais. Des assistants comme <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bulbiz</a> sont conçus précisément autour de cette idée : ne laisser tomber ni un client, ni un devis, ni une demande.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce que l'IA ne fait PAS (et c'est normal)</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Soyons clairs pour ne pas vendre du rêve : l'IA ne remplace pas l'œil de l'artisan sur un chantier, ne juge pas si un client est sérieux, ne signe pas un devis à votre place et ne tient pas votre comptabilité. Elle prépare, structure, range, rappelle. Tout le reste — le métier, la décision, la relation humaine — reste entièrement chez vous.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À lire aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/automatisation-ia-btp" className="text-primary hover:underline">Panorama de l'automatisation et de l'IA dans le BTP</Link></li>
            <li><Link to="/automatiser-devis-artisan" className="text-primary hover:underline">Automatiser la préparation des devis</Link></li>
            <li><Link to="/ia-suivi-chantier" className="text-primary hover:underline">IA et suivi de chantier</Link></li>
            <li><Link to="/application-artisan" className="text-primary hover:underline">L'application terrain pour artisans</Link></li>
          </ul>

          <p className="text-muted-foreground text-body-lg">Pour voir comment ces idées se concrétisent dans un outil pensé pour les artisans du BTP, vous pouvez <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">découvrir Bulbiz</a>.</p>
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

export default IaPourArtisans;
