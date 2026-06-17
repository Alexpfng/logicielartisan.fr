import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { ArrowRight, Ruler, Camera, Hammer, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "À quoi sert un logiciel pour menuisier ?", answer: "À garder propre chaque dossier client : prises de cotes, photos de l'existant, choix d'essence ou de finitions, suivi de la fabrication en atelier et de la pose. C'est un assistant administratif terrain, pas un logiciel CAO." },
  { question: "Est-il adapté aux chantiers de sur-mesure ?", answer: "Oui. Le sur-mesure demande beaucoup d'informations dès la visite : cotes, photos, attentes du client, contraintes du support. Tout reste regroupé dans un seul dossier, accessible en atelier comme sur le chantier." },
  { question: "Puis-je stocker mes prises de cotes ?", answer: "Vous pouvez les saisir sous forme de notes et les compléter de photos. L'idée n'est pas de remplacer un plan CAO mais de ne plus perdre les cotes notées sur un coin de feuille." },
  { question: "Est-ce que ça suit la fabrication et la pose ?", answer: "Oui, dans la mesure où chaque dossier client suit l'avancement : visite faite, devis envoyé, en fabrication, prêt à poser, posé. C'est un suivi simple, lisible, sans usine à gaz." },
  { question: "Est-ce un logiciel de devis-facture ?", answer: "Non. C'est un outil qui prépare le travail administratif : descriptifs, photos, liste de fournitures. Le devis et la facture restent à éditer avec votre outil habituel." },
];

const LogicielMenuisier = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Logiciel menuisier", item: "https://logiciel-artisan.fr/logiciel-menuisier" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/logiciel-menuisier"
        title="Logiciel menuisier : sur-mesure, prises de cotes et suivi de pose"
        description="Un assistant terrain pour menuisiers : prises de cotes, photos, suivi des fabrications sur-mesure et des poses. Pensé pour les artisans du bois. Test gratuit."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel menuisier</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel menuisier : suivre le sur-mesure, de la prise de cotes à la pose</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            La menuiserie, c'est rarement deux chantiers pareils. Une bibliothèque encastrée chez un particulier, une cuisine sur-mesure, des fenêtres bois à reprendre à l'identique, une porte d'entrée avec quincaillerie spécifique. Chaque dossier a ses détails — et ces détails ne doivent pas se perdre.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Le sur-mesure ne pardonne pas l'à-peu-près</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Quand un menuisier prend des cotes chez un client, chaque millimètre compte. Une cote mal notée, un retour sur place perdu, une photo introuvable au moment de lancer l'atelier — et c'est une pièce à refaire, un client mécontent, une marge qui fond. Le sur-mesure se joue beaucoup dans la qualité de l'information remontée du chantier.</p>
            <p>Un <strong className="text-foreground">assistant terrain pour menuisier</strong> n'est pas là pour remplacer le mètre ni le crayon. Il est là pour que les cotes, les photos, les choix d'essence ou de finition restent attachés au bon dossier client, accessibles en atelier comme sur le chantier, sans avoir à rappeler le client pour lui demander "vous vouliez bien du chêne, c'est ça ?".</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce que vous gagnez à centraliser les dossiers</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Ruler, title: "Cotes et notes au même endroit", desc: "Plus de feuilles volantes, plus de carnets dans la camionnette." },
              { icon: Camera, title: "Photos rattachées au client", desc: "Pièce, support, contrainte technique : tout reste lié au dossier." },
              { icon: Hammer, title: "Choix matériaux et finitions", desc: "Essence, teinte, quincaillerie : les décisions du client sont tracées." },
              { icon: PackageCheck, title: "Suivi fabrication / pose", desc: "Vous savez où en est chaque chantier sans courir après l'info." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">De la visite client à la pose finale</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Le parcours type est toujours un peu le même : prise de contact, visite avec relevé, devis, accord du client, lancement en atelier, livraison et pose. Mais entre chaque étape, il y a des allers-retours, des modifications, parfois un changement d'essence ou une cote qui change parce que le client a fait casser une cloison.</p>
            <p>Garder ce parcours visible et propre pour chaque chantier, c'est éviter les oublis et les "ah mais je croyais qu'on était d'accord sur autre chose". Le client voit que vous êtes carré, l'atelier sait exactement ce qu'il fabrique, et la pose se passe sans mauvaise surprise.</p>
            <p>C'est aussi un confort pour vous : à la fin d'une grosse journée, vous n'avez pas à reconstituer mentalement tous les dossiers en cours. Tout est rangé, lisible, prêt à être repris le lendemain matin.</p>
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
          <h2 className="text-heading text-primary-foreground mb-6">Le sur-mesure, suivi proprement</h2>
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

export default LogicielMenuisier;
