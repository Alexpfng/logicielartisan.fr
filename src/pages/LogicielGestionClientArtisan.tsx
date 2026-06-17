import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { ArrowRight, Users, History, BellRing, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "À quoi sert un logiciel de gestion client pour artisan ?", answer: "À centraliser toutes les informations utiles sur chaque client : coordonnées, historique des interventions, demandes en cours, devis envoyés, relances à faire. L'objectif : ne plus chercher l'info à dix endroits différents." },
  { question: "C'est un CRM classique ?", answer: "Pas vraiment. Un CRM est souvent pensé pour des commerciaux assis derrière un écran. Ici, l'outil est pensé pour un artisan qui travaille en mobilité, avec des fiches clients simples et un suivi de demandes accessible depuis le téléphone." },
  { question: "Puis-je voir l'historique d'un client ?", answer: "Oui. Chaque client a son dossier avec les demandes passées, les chantiers réalisés, les notes utiles. Quand il vous rappelle deux ans plus tard, vous retrouvez tout en quelques secondes." },
  { question: "Est-ce que ça aide à relancer les clients ?", answer: "Oui. Les demandes en attente, les devis sans réponse, les chantiers à reprendre restent visibles. Vous savez en un coup d'œil qui rappeler sans dépendre de votre mémoire." },
  { question: "Est-ce que ça remplace ma comptabilité ou mes factures ?", answer: "Non. C'est un assistant administratif terrain centré sur le client et les demandes ; les devis, factures et la comptabilité restent gérés par vos outils habituels." },
];

const LogicielGestionClientArtisan = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Logiciel gestion client artisan", item: "https://logiciel-artisan.fr/logiciel-gestion-client-artisan" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/logiciel-gestion-client-artisan"
        title="Logiciel gestion client artisan : fiches, historique et relances"
        description="Centraliser ses fiches clients, l'historique des chantiers et les demandes à relancer. Un assistant terrain pensé pour les artisans du BTP. Test gratuit."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel gestion client artisan</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel gestion client artisan : garder le contact, l'historique et le suivi de chaque client</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Un artisan du BTP gère souvent des centaines de clients sur plusieurs années. Sans un endroit unique pour ranger les fiches, l'historique et les demandes en cours, on finit par rappeler en double, oublier des relances et perdre des chantiers — pas par manque de sérieux, mais par manque d'outil.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Pourquoi un artisan a besoin d'une vraie gestion client</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Beaucoup d'artisans pensent à tort qu'un fichier client n'est utile que pour les grosses entreprises. En réalité, c'est exactement l'inverse : quand on est seul ou en petite équipe, on n'a pas de secrétariat pour rattraper les oublis. Chaque client perdu, chaque devis sans réponse non relancé, c'est du chiffre qui s'évapore.</p>
            <p>Un <strong className="text-foreground">logiciel de gestion client pour artisan</strong> sert à mettre cette mémoire à jour automatiquement, sans effort de saisie supplémentaire. Le client appelle ? Sa fiche apparaît. Une demande arrive ? Elle se range dans son dossier. Un devis n'a pas reçu de réponse ? Vous le voyez tout de suite.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce qu'apporte un dossier client bien tenu</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Users, title: "Fiches clients propres", desc: "Coordonnées, adresses, particularités du logement, le tout au même endroit." },
              { icon: History, title: "Historique des interventions", desc: "Ce qui a été fait, quand, pour quel prix, avec quelles photos." },
              { icon: FolderOpen, title: "Demandes en cours", desc: "Plus rien ne tombe entre deux mails ou deux SMS." },
              { icon: BellRing, title: "Relances qui ne s'oublient pas", desc: "Vous voyez d'un coup d'œil les devis et chantiers à relancer." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">L'historique, l'arme secrète de l'artisan organisé</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Quand un client vous rappelle deux ou trois ans après un premier chantier, il est généralement très impressionné si vous vous souvenez de ce que vous avez fait chez lui. Pas parce que votre mémoire est exceptionnelle, mais parce que ça lui montre qu'il compte. Avec un historique propre, ce "wow" devient automatique, même si vous avez vu cent autres clients depuis.</p>
            <p>Ce sérieux perçu se traduit très concrètement : plus de chantiers complémentaires, plus de recommandations, plus de fidélité. C'est exactement le genre de petits avantages cumulés qui font la différence entre un artisan qui galère à remplir son planning et un artisan qui choisit ses chantiers.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À découvrir aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/logiciel-artisan" className="text-primary hover:underline">Logiciel artisan : la vue d'ensemble</Link></li>
            <li><Link to="/assistant-administratif-artisan" className="text-primary hover:underline">Assistant administratif terrain pour artisan</Link></li>
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
          <h2 className="text-heading text-primary-foreground mb-6">Vos clients, votre mémoire, au même endroit</h2>
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

export default LogicielGestionClientArtisan;
