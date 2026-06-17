import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { ArrowRight, Paintbrush, Image, CalendarRange, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "À quoi sert un logiciel pour peintre ?", answer: "À organiser les visites de chantier, les prises de mesures de surfaces, les photos avant/après, et à enchaîner sereinement les chantiers de rénovation. C'est un assistant administratif terrain, pas un outil de devis-facture." },
  { question: "Comment ça aide pour les devis surfaces ?", answer: "Lors de la visite, vous notez les pièces, les surfaces approximatives, le nombre de couches, les particularités (plafonds, boiseries, papier peint à enlever). Tout est rattaché au dossier pour rédiger un devis propre derrière." },
  { question: "Est-ce que je peux stocker les photos avant/après ?", answer: "Oui. Les photos avant servent à préparer le chantier et à le chiffrer correctement. Les photos après valorisent votre travail, rassurent le client et alimentent votre book sans avoir à les chercher dans la galerie du téléphone." },
  { question: "Est-ce adapté aux chantiers de rénovation longs ?", answer: "Oui. Une rénovation peinture s'étale souvent sur plusieurs jours ou semaines, avec des couches qui doivent sécher, des reprises, parfois plusieurs corps de métier qui se croisent. Garder un planning clair par chantier aide à tenir les délais." },
  { question: "C'est un logiciel de comptabilité ?", answer: "Non. C'est un outil qui prépare l'administratif et organise le terrain, pas un logiciel comptable ni un ERP." },
];

const LogicielPeintre = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Logiciel peintre", item: "https://logiciel-artisan.fr/logiciel-peintre" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/logiciel-peintre"
        title="Logiciel peintre : devis surfaces, chantiers et photos avant/après"
        description="Un assistant terrain pour peintres en bâtiment : visites, surfaces, photos avant/après, planning des chantiers de rénovation. Test gratuit."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel peintre</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel peintre : enchaîner les chantiers de rénovation sans rien perdre en route</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Un peintre en bâtiment passe rarement plus d'une heure au bureau. La vraie organisation se joue chez les clients : pièces à voir, surfaces à mesurer, photos à prendre, devis à préparer le soir. Un bon outil terrain doit s'adapter à ce rythme, pas l'inverse.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Le quotidien d'un peintre, entre visites et chantiers en cours</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Une journée type, c'est souvent : un chantier en cours le matin (préparation des supports, couches qui s'enchaînent), une visite chez un prospect le midi, du temps de séchage l'après-midi qu'on met à profit pour aller voir un autre client, et le soir, les devis à boucler pour les visites de la semaine. Ce rythme demande de garder beaucoup d'informations en tête.</p>
            <p>Quand chaque visite donne lieu à des notes sur un cahier différent et à des photos perdues dans la galerie du téléphone, on finit par bâcler les devis ou par en oublier. C'est là qu'un <strong className="text-foreground">assistant administratif pour peintre</strong> change la vie : il garde tout au même endroit, par client, par chantier.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce qu'un outil bien pensé doit savoir gérer</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Paintbrush, title: "Visites et surfaces", desc: "Vous notez les pièces, les m², les particularités, sans tableur." },
              { icon: Image, title: "Photos avant / après", desc: "Tout reste classé par chantier, prêt à servir de preuve ou de book." },
              { icon: CalendarRange, title: "Planning des chantiers", desc: "Les enchaînements s'organisent visuellement, séchage compris." },
              { icon: Layers, title: "Détails techniques", desc: "Type de support, nombre de couches, finitions, particularités du chantier." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">Pourquoi les photos avant/après comptent autant</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>En peinture, l'effet visuel est tout. Les photos avant servent à chiffrer correctement (état du support, ancien revêtement, fissures à reprendre, papier peint à décoller). Les photos après valorisent un travail souvent invisible pour qui ne connaît pas le métier : on ne voit plus la préparation, seulement le résultat propre.</p>
            <p>Centraliser ces photos par chantier vous permet d'avoir, sans effort, un portfolio toujours à jour. Vous pouvez montrer du concret à un prospect qui hésite, ou rappeler à un client mécontent que le mur de départ n'avait rien à voir avec ce qu'il a aujourd'hui.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À découvrir aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/logiciel-artisan" className="text-primary hover:underline">Logiciel artisan : la vue d'ensemble</Link></li>
            <li><Link to="/logiciel-planning-artisan" className="text-primary hover:underline">Logiciel planning artisan</Link></li>
            <li><Link to="/logiciel-menuisier" className="text-primary hover:underline">Logiciel menuisier (métier voisin)</Link></li>
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
          <h2 className="text-heading text-primary-foreground mb-6">Vos chantiers de peinture, mieux suivis</h2>
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

export default LogicielPeintre;
