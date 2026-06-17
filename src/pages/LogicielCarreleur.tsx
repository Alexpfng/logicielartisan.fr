import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { ArrowRight, Ruler, Image, Palette, CalendarClock } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "À quoi sert un logiciel pour carreleur ?", answer: "À noter les métrés de surface pendant la visite, garder les choix matériaux du client, conserver les photos avant/après et organiser les plannings de pose chantier par chantier." },
  { question: "Est-ce que je peux noter les métrés sur place ?", answer: "Oui. Pendant la visite, vous saisissez surfaces et particularités (plinthes, frises, douche à l'italienne, raccords). Tout est rattaché au dossier client pour préparer le devis sans rien oublier." },
  { question: "Comment garder les choix de matériaux ?", answer: "Référence du carrelage, format, finition, fournisseur, calepinage souhaité : tout reste dans la fiche du chantier, accessible aussi bien depuis le téléphone que depuis l'ordinateur." },
  { question: "Est-il utile pour les photos avant/après ?", answer: "Oui. Les photos d'avant (support, anciens carreaux, état des joints) servent à chiffrer correctement. Les photos d'après valorisent votre travail et alimentent votre book sans effort." },
  { question: "C'est un logiciel de devis et de comptabilité ?", answer: "Non. C'est un assistant administratif terrain qui prépare l'information ; les devis, factures et comptabilité restent gérés par vos outils habituels." },
];

const LogicielCarreleur = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Logiciel carreleur", item: "https://logiciel-artisan.fr/logiciel-carreleur" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/logiciel-carreleur"
        title="Logiciel carreleur : métrés, matériaux et plannings de pose"
        description="Un assistant terrain pour carreleurs : métrés sur place, choix matériaux, photos avant/après, plannings de pose. Pensé pour les artisans du carrelage. Test gratuit."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel carreleur</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel carreleur : préparer ses devis, ses poses et ses choix matériaux proprement</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            La pose de carrelage demande beaucoup de précision en amont : surfaces correctes, choix du matériau, calepinage, particularités du support. Tout ce qui n'est pas noté pendant la visite finit par coûter cher au moment de la pose.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Tout se joue à la visite</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Un carreleur le sait : si la visite est bâclée, le chantier le sera aussi. Les surfaces mal mesurées, les chutes mal anticipées, les détails techniques oubliés (siphon, ressaut, raccord avec un parquet existant), tout ça finit par mordre sur la marge et créer de la tension avec le client.</p>
            <p>Un <strong className="text-foreground">assistant terrain pour carreleur</strong> ne remplace pas votre œil de pro. Il sert à ce que tout ce que votre œil a vu lors de la visite reste consigné dans un endroit unique, lisible, retrouvable plus tard sans fouiller dans dix carnets.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Les piliers d'un outil bien pensé pour le carrelage</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Ruler, title: "Métrés et particularités", desc: "Surfaces, plinthes, ressauts, raccords : tout est noté au moment de la visite." },
              { icon: Palette, title: "Choix matériaux client", desc: "Référence, format, fournisseur, calepinage : on garde le détail des décisions." },
              { icon: Image, title: "Photos avant / après", desc: "Le support de départ et le rendu final, rangés par chantier." },
              { icon: CalendarClock, title: "Plannings de pose", desc: "On voit s'enchaîner les chantiers sans risque de doublon ou d'oubli." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">Le choix matériaux, une étape souvent sous-estimée</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Entre la visite et la commande chez le fournisseur, il se passe parfois plusieurs semaines. Le client a changé d'avis, vous avez fait dix autres devis entre-temps, et la fameuse référence "celle que je vous avais montrée sur le téléphone" n'est plus si claire. Conserver une trace écrite des choix (référence exacte, format, couleur, finition) évite des erreurs coûteuses.</p>
            <p>Cette traçabilité protège aussi votre relation client : en cas de litige sur le rendu, vous avez la preuve que c'est bien ce qui avait été décidé ensemble.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À découvrir aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/logiciel-artisan" className="text-primary hover:underline">Logiciel artisan : la vue d'ensemble</Link></li>
            <li><Link to="/logiciel-gestion-chantier" className="text-primary hover:underline">Logiciel de gestion de chantier</Link></li>
            <li><Link to="/logiciel-peintre" className="text-primary hover:underline">Logiciel peintre (métier voisin)</Link></li>
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
          <h2 className="text-heading text-primary-foreground mb-6">Vos chantiers de carrelage, préparés au millimètre</h2>
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

export default LogicielCarreleur;
