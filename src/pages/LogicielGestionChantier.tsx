import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { CheckCircle2, ArrowRight, HardHat, Camera, MessageSquare, ListChecks } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "Qu'est-ce qu'un logiciel de gestion de chantier pour artisan ?", answer: "C'est un outil qui regroupe en un seul endroit toutes les informations liées à un chantier : coordonnées client, description du besoin, photos, échanges, rendez-vous et statut d'avancement. L'objectif est d'arrêter de jongler entre WhatsApp, Notes, Photos et SMS." },
  { question: "Faut-il être plusieurs sur le chantier pour que ce soit utile ?", answer: "Non. Même un artisan seul gagne énormément à centraliser ses chantiers. Plus de dossier oublié, plus de photo perdue, plus de client à rappeler trois fois pour la même info." },
  { question: "Est-ce que ça fonctionne sans connexion ?", answer: "L'outil est pensé mobile-first. Vous consultez et travaillez sur vos chantiers depuis votre téléphone, même dans des conditions de terrain. La synchronisation se fait dès que vous retrouvez du réseau." },
  { question: "Peut-on partager les photos avec le client ?", answer: "Les photos et infos restent rattachées au dossier du chantier. Le partage avec le client se fait au cas par cas, selon ce que vous souhaitez lui montrer." },
  { question: "Est-ce que c'est compliqué à mettre en place ?", answer: "Non. Vous créez votre compte, vous obtenez votre lien de demande à partager, et chaque nouveau chantier devient automatiquement un dossier organisé. Pas de paramétrage lourd." },
];

const LogicielGestionChantier = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
        { "@type": "ListItem", position: 2, name: "Logiciel gestion chantier", item: "https://logiciel-artisan.fr/logiciel-gestion-chantier" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })),
    },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/logiciel-gestion-chantier"
        title="Logiciel gestion chantier artisan : centraliser infos, photos et suivi"
        description="Comment un assistant terrain aide les artisans du BTP à centraliser les infos, photos et échanges de chaque chantier. Plus de dossiers éparpillés entre WhatsApp, SMS et galerie photo."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel gestion chantier</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel de gestion de chantier : un dossier clair pour chaque intervention</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Pour un artisan du BTP, un chantier ne vit pas dans un seul endroit. Photos dans la galerie, SMS du client, WhatsApp pour les ajustements, papier dans le camion… La bonne solution est de tout ramener au même endroit, simplement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Le vrai problème : un chantier éparpillé</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Sur le terrain, les infos d'un même chantier vivent dans dix endroits différents. La demande initiale est dans un appel manqué. Les photos sont sur le téléphone, mélangées avec celles de la famille. Le client précise un détail par SMS, change un horaire par WhatsApp, ajoute une exigence par mail. Et au moment de chercher quelque chose, on perd un quart d'heure.</p>
            <p>Un <strong className="text-foreground">logiciel de gestion de chantier pensé pour les artisans</strong> n'essaie pas d'imposer une méthode bureau. Il fait l'inverse : il ramène tout ce qui concerne un chantier dans un seul dossier accessible depuis le téléphone, sans changer vos habitudes terrain.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce que vous retrouvez dans chaque dossier chantier</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: HardHat, title: "Infos client centralisées", desc: "Coordonnées, adresse, description du besoin, le tout structuré dès la demande." },
              { icon: Camera, title: "Photos rattachées au chantier", desc: "Plus de photos perdues dans la galerie du téléphone. Tout est lié au bon dossier." },
              { icon: MessageSquare, title: "Historique des échanges", desc: "Vous retrouvez vite ce qui a été dit, demandé, modifié." },
              { icon: ListChecks, title: "Suivi de l'avancement", desc: "Vous savez où vous en êtes sur chaque chantier en un coup d'œil." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">Pensé pour le terrain, pas pour le bureau</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>La plupart des logiciels de gestion de chantier sont nés pour les bureaux d'études et les gros groupes. Ils sont lourds, demandent de la formation, supposent qu'on a un PC ouvert toute la journée. Ce n'est pas le quotidien d'un artisan du bâtiment.</p>
            <p>Cette solution part de l'inverse : <strong className="text-foreground">vous travaillez depuis votre téléphone</strong>. Vous ouvrez un dossier entre deux interventions, vous ajoutez une photo, vous consultez l'historique, vous notez un détail vocal pour préparer le devis. L'IA peut analyser les photos et les notes vocales pour suggérer une liste de matériel — un vrai gain de temps avant de remonter en camion.</p>
            <p>Le résultat : moins de stress, moins d'oublis, et des chantiers menés avec plus de clarté du début à la fin.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Pour aller plus loin</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/logiciel-planning-artisan" className="text-primary hover:underline">Logiciel de planning artisan : organiser ses rendez-vous</Link></li>
            <li><Link to="/application-artisan" className="text-primary hover:underline">Application artisan mobile-first</Link></li>
            <li><Link to="/" className="text-primary hover:underline">Le nouveau logiciel préféré des artisans du BTP</Link></li>
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
          <h2 className="text-heading text-primary-foreground mb-6">Centralisez vos chantiers en quelques minutes</h2>
          <p className="text-primary-foreground/80 text-body-lg mb-8">Test gratuit, sans engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
              Tester gratuitement <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-primary-foreground border border-primary-foreground/40 font-semibold rounded-xl hover:bg-primary-foreground/10 transition-all">
              Découvrir la solution
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LogicielGestionChantier;
