import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "Au bout de combien de temps faut-il relancer un client ?", answer: "Une première relance courte 5 à 7 jours après l'envoi du devis fonctionne très bien. Une seconde, 10 à 15 jours plus tard, permet de débloquer les indécis. Au-delà, mieux vaut une relance plus humaine, par téléphone." },
  { question: "Est-ce que relancer fait fuir les clients ?", answer: "Au contraire, dans la majorité des cas. Un client occupé est souvent reconnaissant qu'on lui rappelle un devis qu'il avait mis de côté. Le tout est de relancer poliment, brièvement et au bon moment." },
  { question: "Peut-on personnaliser les relances automatiques ?", answer: "Oui. Les outils sérieux permettent d'adapter le ton, le délai et le canal (email, SMS). L'objectif n'est pas d'envoyer du spam, mais des messages que vous auriez écrits vous-même si vous aviez eu le temps." },
  { question: "Quels résultats attendre ?", answer: "Beaucoup d'artisans rapportent qu'une simple relance bien chronométrée permet de signer un devis sur deux ou trois qui serait sinon resté sans réponse. Sur l'année, l'effet sur le chiffre d'affaires est très net." },
];

const AutomatiserRelancesClients = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Automatiser les relances clients", item: "https://logiciel-artisan.fr/automatiser-relances-clients" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/automatiser-relances-clients"
        title="Automatiser les relances clients pour un artisan du BTP"
        description="Comment automatiser le suivi et les relances clients pour ne plus laisser filer un devis : délais, canaux, bonnes pratiques et erreurs à éviter."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Automatiser les relances clients</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Automatiser les relances clients : le levier qu'on sous-estime</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            La majorité des devis qui ne se transforment pas en chantier ne sont pas perdus parce qu'ils étaient trop chers. Ils sont perdus parce qu'ils sont restés sans suite. Personne n'a relancé. Pourtant, un message bref envoyé au bon moment suffit, dans la majorité des cas, à débloquer la décision.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Pourquoi les artisans ne relancent pas</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Trois raisons reviennent toujours : on n'y pense pas, on n'a pas le temps, on a peur de déranger. Pourtant, du point de vue du client, ces trois réflexes coûtent cher. Une demande qui reste sans réponse pendant trois semaines envoie un message bien plus négatif qu'une relance polie au bon moment.</p>
            <p>L'automatisation règle les deux premiers points (l'oubli et le temps) et la formulation soignée règle le troisième (la peur de déranger).</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À quoi ressemble une bonne séquence de relance</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Un schéma simple qui fonctionne sur le terrain :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>J+5 à J+7</strong> : court message email, ton humain ("juste pour m'assurer que vous avez bien reçu le devis").</li>
              <li><strong>J+12 à J+15</strong> : seconde relance avec une question ouverte ("avez-vous besoin d'un ajustement sur certains postes ?").</li>
              <li><strong>J+25 environ</strong> : appel ou SMS personnalisé.</li>
            </ul>
            <p>Un assistant terrain comme <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bulbiz</a> peut s'occuper des deux premières étapes sans intervention, et vous alerter pour la troisième pour garder la touche humaine.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Les erreurs à éviter</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Relancer trop tôt (avant 48 h), relancer trop souvent (trois fois la même semaine), envoyer un message générique qui ne reprend pas le contexte du devis, ou utiliser un ton commercial agressif : tout cela transforme une relance utile en irritation. Mieux vaut peu de relances bien tournées que beaucoup de relances mal calibrées.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À lire aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/automatisation-ia-btp" className="text-primary hover:underline">Panorama de l'automatisation et de l'IA dans le BTP</Link></li>
            <li><Link to="/automatiser-devis-artisan" className="text-primary hover:underline">Automatiser la préparation des devis</Link></li>
            <li><Link to="/automatiser-administratif-artisan" className="text-primary hover:underline">Automatiser l'administratif</Link></li>
            <li><Link to="/logiciel-gestion-client-artisan" className="text-primary hover:underline">Gestion client artisan</Link></li>
          </ul>

          <p className="text-muted-foreground text-body-lg">Pour voir comment cette séquence de relance s'intègre à un outil métier, vous pouvez <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">découvrir Bulbiz</a>.</p>
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

export default AutomatiserRelancesClients;
