import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { ArrowRight, Flame, CalendarCheck, Wrench, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "À quoi sert un logiciel pour chauffagiste ?", answer: "À gérer le flot de demandes du quotidien : entretiens annuels de chaudière, dépannages en plein hiver, remplacements d'appareils, suivi des contrats d'entretien. Tout est centralisé pour éviter qu'une demande se perde." },
  { question: "Est-il utile pour les entretiens annuels obligatoires ?", answer: "Oui. Chaque client d'entretien a son dossier, avec l'historique des passages et les photos de la chaudière. Vous retrouvez en un clin d'œil ce qui a été fait l'année précédente." },
  { question: "Comment gérer les urgences en hiver ?", answer: "Les demandes de dépannage chauffage arrivent en rafale dès qu'il fait froid. Avec une file de demandes claire, vous voyez immédiatement quoi traiter en premier et vous rappelez vos clients sans en oublier." },
  { question: "Est-ce que ça gère mes contrats d'entretien ?", answer: "Bulbiz n'est pas un logiciel de contrats au sens strict, mais il vous aide à garder un suivi propre des clients sous contrat et à préparer les passages annuels sans rien laisser passer." },
  { question: "Est-ce que ça fait la comptabilité ?", answer: "Non. C'est un assistant administratif terrain. Il prépare les dossiers et organise les demandes, pas les écritures comptables." },
];

const LogicielChauffagiste = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Logiciel chauffagiste", item: "https://logiciel-artisan.fr/logiciel-chauffagiste" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/logiciel-chauffagiste"
        title="Logiciel chauffagiste : entretiens, dépannages et remplacements"
        description="Un assistant terrain pour chauffagistes : entretiens annuels, dépannages d'hiver, remplacements de chaudière et suivi des contrats. Test gratuit."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel chauffagiste</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel chauffagiste : tenir entretiens, dépannages et remplacements sans rien lâcher</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Entre les entretiens annuels qu'il faut planifier, les dépannages qui explosent dès la première vague de froid et les remplacements de chaudières à organiser, un chauffagiste a besoin d'un outil capable de suivre le rythme — sans paperasse de bureau en plus.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Trois saisons, trois rythmes différents</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>En automne, c'est la course aux entretiens annuels : les clients qui appellent en urgence parce qu'ils ont reçu le rappel de leur assurance, ceux qu'il faut relancer parce qu'on ne les a pas vus depuis deux ans, ceux qui basculent vers vous parce que leur ancien chauffagiste a arrêté. Sans suivi clair, on entretient deux fois la même chaudière et on en oublie trois autres.</p>
            <p>En hiver, c'est l'urgence pure : plus d'eau chaude, plus de chauffage, fuite sur un circuit. Les appels s'enchaînent et il faut prioriser, parfois entre une personne âgée sans chauffage et un dépannage moins critique. Une file de demandes lisible vous évite de répondre au hasard.</p>
            <p>Le reste de l'année, ce sont les <strong className="text-foreground">remplacements</strong> : chaudière en fin de vie, passage à une pompe à chaleur, mise en place d'un ballon thermodynamique. Des dossiers plus longs, avec visite, devis, choix matériel, planification de la dépose et de la pose.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce qu'un assistant terrain change pour vous</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: CalendarCheck, title: "Entretiens annuels suivis", desc: "Un dossier par client, l'historique des passages, les photos de la chaudière." },
              { icon: Flame, title: "Urgences d'hiver triées", desc: "Vous voyez d'un coup d'œil les dépannages à traiter en priorité." },
              { icon: Wrench, title: "Remplacements organisés", desc: "Visite, photos de l'existant, marque et modèle pressentis : tout reste rattaché au dossier." },
              { icon: FileText, title: "Contrats d'entretien lisibles", desc: "Une vision claire des clients sous contrat, sans tableur à mettre à jour à la main." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">Pourquoi la mémoire client est centrale</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Un client de chauffagiste, c'est rarement un client one-shot. Il revient chaque année pour l'entretien, vous rappelle en cas de panne, vous redemande un devis dans cinq ans pour changer la chaudière. Avoir l'historique de ce client, ses interventions passées, le modèle de sa chaudière, ses spécificités d'installation, ça fait gagner un temps fou et ça rassure énormément.</p>
            <p>Avec un assistant terrain qui garde tout ça, vous arrivez chez un client sans avoir à lui redemander ce qui a déjà été fait. Vous êtes perçu comme un professionnel sérieux, organisé, qui n'oublie rien. C'est exactement ce qui fait revenir les gens et qui pousse au bouche-à-oreille.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À découvrir aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/logiciel-artisan" className="text-primary hover:underline">Logiciel artisan : la vue d'ensemble</Link></li>
            <li><Link to="/logiciel-planning-artisan" className="text-primary hover:underline">Logiciel planning artisan</Link></li>
            <li><Link to="/logiciel-electricien" className="text-primary hover:underline">Logiciel électricien (métier voisin)</Link></li>
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
          <h2 className="text-heading text-primary-foreground mb-6">Tenez votre saison sans rien lâcher</h2>
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

export default LogicielChauffagiste;
