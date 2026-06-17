import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { ArrowRight, CheckCircle2, Smartphone, Inbox, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "Quels sont les critères pour choisir le meilleur logiciel artisan ?", answer: "Quatre critères clés : simplicité d'utilisation (sans formation lourde), accès mobile depuis le téléphone, centralisation des demandes clients, et suivi clair des chantiers en cours. Le reste est secondaire." },
  { question: "Faut-il choisir un ERP ou un assistant terrain ?", answer: "Un ERP est pertinent pour les structures déjà grosses, avec un service administratif dédié. Pour un artisan seul ou en petite équipe, un assistant terrain — léger, mobile, centré sur le quotidien — est généralement bien plus adapté." },
  { question: "Le mobile est-il vraiment indispensable ?", answer: "Oui. Un artisan passe l'essentiel de sa journée hors du bureau. Un outil qui n'est confortable que sur ordinateur finit par ne pas être utilisé. Le mobile-first n'est pas un argument marketing, c'est une condition de survie de l'outil." },
  { question: "Comment éviter les usines à gaz ?", answer: "Tester soi-même avant de s'engager. Un bon logiciel artisan se prend en main en quelques minutes, pas en deux jours de formation. Si l'outil demande un manuel pour être utilisé, c'est qu'il n'est pas fait pour le terrain." },
  { question: "Pourquoi parler d'un \"assistant terrain\" plutôt que d'un logiciel classique ?", answer: "Parce que la promesse n'est pas la même. Un logiciel classique vous demande de saisir des données. Un assistant terrain vous aide à transformer ce qui se passe sur les chantiers (demandes, photos, notes vocales) en informations bien rangées, sans surcharge administrative." },
  { question: "Comment tester avant de choisir ?", answer: "La plupart des solutions sérieuses proposent un essai gratuit. Profitez-en pour entrer deux ou trois vrais clients, simuler une journée type, et voir si l'outil vous fait vraiment gagner du temps." },
];

const MeilleurLogicielArtisan = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Meilleur logiciel artisan 2026", item: "https://logiciel-artisan.fr/meilleur-logiciel-artisan" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/meilleur-logiciel-artisan"
        title="Meilleur logiciel artisan 2026 : critères de choix et bonnes pratiques"
        description="Comment choisir le meilleur logiciel pour artisan du BTP en 2026 : simplicité, mobile-first, centralisation des demandes, suivi terrain. Guide honnête, sans faux comparatifs."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Meilleur logiciel artisan 2026</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Meilleur logiciel artisan en 2026 : les vrais critères de choix</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Choisir le "meilleur" logiciel pour un artisan du BTP, ce n'est pas une question de classement marketing. C'est une question d'adéquation entre l'outil et la réalité du terrain. Voici les critères qui comptent vraiment, et comment trancher sans se tromper.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Critère 1 — La simplicité d'utilisation</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-10">
            <p>Le meilleur logiciel artisan n'est pas le plus complet, c'est le plus utilisé. Et pour qu'un outil soit utilisé, il faut qu'il soit simple : prise en main en quelques minutes, pas en deux jours de formation. Un artisan n'a pas de temps à consacrer à apprendre une interface. S'il faut un mode d'emploi, c'est déjà perdu.</p>
            <p>La règle simple : si vous ne savez pas créer un client et une demande en moins de deux minutes lors du test, passez votre chemin.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Critère 2 — Le mobile-first</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-10">
            <p>Un artisan vit avec son téléphone. C'est là que tombent les appels, les SMS, les photos. Un logiciel qui n'est confortable que sur ordinateur est, dans les faits, un logiciel qui ne sera jamais ouvert. Le mobile-first n'est pas un détail technique, c'est ce qui fait la différence entre un outil qui sert tous les jours et un outil qu'on a abandonné au bout de deux semaines.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Critère 3 — La centralisation des demandes</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-10">
            <p>Les demandes clients arrivent par tous les canaux : téléphone, SMS, mail, formulaire de site, bouche-à-oreille. Si chaque canal reste dans son coin, on perd des demandes — c'est mathématique. Le meilleur logiciel artisan est celui qui vous permet de tout consolider à un seul endroit, comme une boîte de réception unique pour votre activité.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Critère 4 — Le suivi clair des chantiers et clients</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-10">
            <p>Capter une demande, c'est bien. La suivre jusqu'à la facturation, c'est mieux. Un bon outil garde un fil clair pour chaque chantier (à devis, accepté, en cours, terminé) et pour chaque client (historique, devis envoyés, relances). Sans ce suivi, vous repasserez votre temps à chercher où vous en êtes plutôt qu'à avancer.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Les piliers résumés</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: CheckCircle2, title: "Simple à prendre en main", desc: "Quelques minutes, pas une formation." },
              { icon: Smartphone, title: "Mobile-first", desc: "Confortable sur téléphone, dans la camionnette comme sur le chantier." },
              { icon: Inbox, title: "Demandes centralisées", desc: "Une boîte de réception unique pour ne plus rien perdre." },
              { icon: Compass, title: "Suivi clair", desc: "Vous savez où en est chaque chantier et chaque client." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">Et concrètement : pourquoi un assistant terrain coche ces cases</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Un assistant administratif terrain ne cherche pas à remplacer votre logiciel de devis-factures ou votre comptable. Il vient se placer en amont, au moment où la matière administrative se crée : un appel, une visite, une photo, une note vocale. Il transforme ce flux quotidien en dossiers propres, sans vous demander d'effort de saisie supplémentaire.</p>
            <p>C'est précisément ce profil — simple, mobile, centralisateur, orienté suivi — qui correspond aux critères du meilleur logiciel artisan en 2026. Le bon test reste le même : essayez deux ou trois jours sur vos vraies demandes, et regardez si vous gagnez du temps. C'est la seule métrique qui compte.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À découvrir aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/logiciel-artisan" className="text-primary hover:underline">Logiciel artisan : la vue d'ensemble</Link></li>
            <li><Link to="/outil-gestion-artisan-btp" className="text-primary hover:underline">Outil de gestion pour artisan BTP</Link></li>
            <li><Link to="/logiciel-artisan-gratuit" className="text-primary hover:underline">Logiciel artisan gratuit : ce qu'il faut savoir</Link></li>
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
          <h2 className="text-heading text-primary-foreground mb-6">Le meilleur outil, c'est celui qui vous fait vraiment gagner du temps</h2>
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

export default MeilleurLogicielArtisan;
