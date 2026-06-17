import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { CheckCircle2, ArrowRight, Link2, Layers, TrendingUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "Quel outil de gestion choisir quand on est artisan du BTP ?", answer: "Le bon outil dépend de votre vraie contrainte. Si votre quotidien, c'est gérer des demandes qui arrivent de partout et garder le suivi, vous avez besoin d'un assistant administratif terrain mobile-first, pas d'un ERP lourd. Si votre activité est très orientée comptabilité, vous garderez votre logiciel de compta en complément." },
  { question: "Est-ce que c'est adapté à un artisan seul ?", answer: "Oui, particulièrement. Les artisans seuls sont les premiers à souffrir d'un manque d'organisation : pas de secrétariat, peu de temps, beaucoup de canaux. Un outil simple qui centralise tout fait gagner un temps précieux." },
  { question: "Quels métiers du BTP utilisent ce type d'outil ?", answer: "Plombiers, électriciens, chauffagistes, peintres, menuisiers, carreleurs, couvreurs, maçons, professionnels de la rénovation… L'approche universelle de centralisation des demandes s'adapte à tous les métiers du bâtiment." },
  { question: "Faut-il abandonner ses outils actuels ?", answer: "Non. Cet outil se concentre sur la centralisation des demandes clients, l'organisation des dossiers et le suivi. Il complète vos outils existants — comptabilité, agenda, etc. — sans chercher à tout remplacer." },
  { question: "Comment commencer sans se tromper ?", answer: "Le mieux est de tester gratuitement, en conditions réelles, sur une ou deux semaines. Vous verrez vite si l'outil correspond à votre façon de travailler. L'inscription est gratuite et sans engagement." },
];

const OutilGestionArtisanBtp = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
        { "@type": "ListItem", position: 2, name: "Outil gestion artisan BTP", item: "https://logiciel-artisan.fr/outil-gestion-artisan-btp" },
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
        path="/outil-gestion-artisan-btp"
        title="Outil de gestion artisan BTP : centraliser les demandes et le quotidien"
        description="Vue d'ensemble d'un outil de gestion pensé pour les artisans du BTP : centralisation multi-canal, dossiers clients, planning, suivi. Test gratuit, sans engagement."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Outil gestion artisan BTP</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Outil de gestion pour artisan du BTP : centraliser, organiser, respirer</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Choisir le bon outil de gestion quand on est artisan du bâtiment, c'est moins une question de fonctionnalités qu'une question de réalité terrain. Voici une vue d'ensemble d'une approche pensée pour les artisans du BTP — simple, mobile, sans usine à gaz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Pourquoi les ERP classiques ne sont pas pensés pour vous</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>La plupart des outils de gestion BTP du marché ont été conçus pour des bureaux d'études ou des entreprises de taille moyenne. Ils empilent les modules, demandent du paramétrage, supposent qu'on s'y connecte sur PC. Pour un artisan indépendant ou une petite entreprise du bâtiment, c'est trop, trop tôt, et souvent trop cher.</p>
            <p>La réalité d'un artisan terrain est plus simple. Le problème principal n'est pas "comment je pilote ma marge analytique par centre de coût". Le problème est : <strong className="text-foreground">"comment je centralise mes demandes et je garde le suivi sans me cramer le soir"</strong>.</p>
            <p>C'est exactement ce qu'un bon outil de gestion pour artisan du BTP doit résoudre, en commençant par là.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">L'approche centralisée, en 4 idées simples</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Link2, title: "Un lien unique de demande", desc: "Partagé partout : fiche Google, site, signature mail, QR code. Toutes les demandes arrivent au même endroit." },
              { icon: Layers, title: "Un dossier par client/chantier", desc: "Coordonnées, photos, échanges, rendez-vous, statut. Plus rien d'éparpillé." },
              { icon: TrendingUp, title: "Un suivi clair", desc: "Vous voyez quels dossiers avancent, lesquels attendent, lesquels demandent une relance." },
              { icon: Heart, title: "Mobile-first et simple", desc: "Pensé pour le téléphone, sans formation. Vous l'utilisez immédiatement." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce que ça change au quotidien</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Concrètement, un artisan qui passe sur cette approche arrête de chercher les infos dans dix endroits différents. Plus de photos perdues dans la galerie, plus de SMS oubliés, plus de devis qui prennent la poussière sans réponse. Tout est dans un endroit unique, accessible depuis le téléphone, organisé par dossier.</p>
            <p>Et parce que l'IA peut analyser les photos et les notes vocales pour suggérer une liste de matériel, vous gagnez encore du temps avant chaque chantier — sans que la machine décide à votre place.</p>
            <p>Le bénéfice n'est pas seulement du temps gagné. C'est aussi une <strong className="text-foreground">tranquillité d'esprit</strong> : vous savez où vous en êtes, vos clients sentent que vous êtes organisé, et votre activité devient plus simple à faire tourner — même seul.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À explorer</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/assistant-administratif-artisan" className="text-primary hover:underline">Assistant administratif terrain</Link></li>
            <li><Link to="/logiciel-btp" className="text-primary hover:underline">Logiciel BTP pour le bâtiment</Link></li>
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
          <h2 className="text-heading text-primary-foreground mb-6">Voyez par vous-même, en quelques minutes</h2>
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

export default OutilGestionArtisanBtp;
