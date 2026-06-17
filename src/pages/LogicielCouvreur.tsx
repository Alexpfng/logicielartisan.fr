import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { ArrowRight, CloudRain, Home, Camera, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "À quoi sert un logiciel pour couvreur ?", answer: "À centraliser les demandes (urgences de fuite, devis de réfection, entretien de toiture), à conserver les photos prises en hauteur et à organiser un planning souvent dicté par la météo." },
  { question: "Comment gérer les urgences de toiture ?", answer: "Après une tempête ou un gros orage, les appels affluent. Une file de demandes claire permet de prioriser ce qui est vraiment urgent (fuite active, tuile arrachée) et de rappeler les autres clients sans rien oublier." },
  { question: "Est-ce que je peux stocker mes photos de toiture ?", answer: "Oui. Les photos prises en hauteur (drone, perche, échelle) restent rattachées au dossier client, ce qui évite de retourner sur le toit pour vérifier un détail." },
  { question: "Comment l'outil aide-t-il face à la météo ?", answer: "Il ne prédit pas la météo, mais il vous aide à garder un planning souple : un chantier reporté à cause de la pluie peut être déplacé proprement, sans perdre la demande, et les clients voient que vous restez carré même quand le temps complique tout." },
  { question: "Est-ce un logiciel de devis-facture ou de compta ?", answer: "Non. C'est un assistant administratif terrain qui prépare les dossiers (photos, descriptifs, métrés) pour que les devis et la comptabilité, faits ailleurs, soient plus rapides." },
];

const LogicielCouvreur = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Logiciel couvreur", item: "https://logiciel-artisan.fr/logiciel-couvreur" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/logiciel-couvreur"
        title="Logiciel couvreur : urgences toiture, devis et chantiers en hauteur"
        description="Un assistant terrain pour couvreurs : urgences de fuite, photos de toiture, devis de réfection, planning sensible à la météo. Test gratuit."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel couvreur</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel couvreur : tenir les urgences toiture et les chantiers en hauteur</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Un couvreur travaille avec la météo, en hauteur, souvent dans l'urgence. Quand une tempête passe, le téléphone n'arrête plus. Sans un outil capable de capter et de trier ces demandes, on rate des chantiers — ou pire, on en oublie un qui devient critique.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Un métier rythmé par la météo et l'urgence</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>La couverture n'est pas un métier comme les autres. Une nuit de vent fort, et le lendemain ce sont vingt appels en deux heures : tuiles cassées, faîtage déplacé, fuite en plein salon. Au milieu de ces urgences, il faut continuer à avancer les chantiers de réfection complète, qui se planifient des semaines à l'avance — et qui sautent dès qu'il pleut trois jours d'affilée.</p>
            <p>Sans un endroit unique pour poser ces demandes et garder le fil, on finit par traiter au feeling : on rappelle ceux dont on se souvient, on oublie ceux qui ont laissé un message au mauvais moment. Un <strong className="text-foreground">assistant administratif pour couvreur</strong> sert exactement à éviter ça.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce que vous devez pouvoir faire depuis le terrain</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: AlertTriangle, title: "Trier les urgences", desc: "Une fuite active ne passe pas après un devis d'entretien." },
              { icon: Camera, title: "Garder les photos en hauteur", desc: "Drone, perche ou échelle : les photos restent dans le bon dossier." },
              { icon: Home, title: "Suivre les réfections", desc: "Visite, devis, planification, pose : chaque étape reste visible." },
              { icon: CloudRain, title: "Encaisser les reports météo", desc: "Un chantier décalé reste propre, le client est tenu informé." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">Photos de toiture : une mémoire qui ne se perd pas</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Monter sur un toit prend du temps et de l'énergie. C'est dommage de devoir y retourner juste parce qu'on a oublié de prendre une photo du faîtage, ou parce qu'on ne retrouve plus celle de la cheminée prise il y a trois mois. Quand toutes les photos d'un chantier restent rangées dans son dossier, on s'épargne ces allers-retours.</p>
            <p>C'est aussi un atout commercial : montrer au client des photos précises de l'état de sa toiture avant intervention, c'est lui prouver le sérieux du diagnostic. Et quand on lui présente la facture, des photos après chantier valorisent immédiatement le travail réalisé.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Quand la météo s'en mêle, le planning doit tenir</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Un couvreur sait qu'une grosse partie de son planning est suspendue au temps qu'il fait. Décaler un chantier de deux jours n'est pas un drame en soi — à condition de pouvoir le faire proprement, sans tout perdre. Un outil qui garde une vue claire des chantiers en cours, des urgences et des reports vous permet de réagir vite et de rassurer les clients à chaque déplacement de créneau.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À découvrir aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/logiciel-artisan" className="text-primary hover:underline">Logiciel artisan : la vue d'ensemble</Link></li>
            <li><Link to="/logiciel-gestion-chantier" className="text-primary hover:underline">Logiciel de gestion de chantier</Link></li>
            <li><Link to="/logiciel-planning-artisan" className="text-primary hover:underline">Logiciel planning artisan</Link></li>
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
          <h2 className="text-heading text-primary-foreground mb-6">Vos toitures, vos urgences, sous contrôle</h2>
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

export default LogicielCouvreur;
