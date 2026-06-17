import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { CheckCircle2, ArrowRight, Brain, Clock, Inbox, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "Qu'est-ce qu'un assistant administratif pour artisan ?", answer: "C'est un outil pensé pour décharger l'artisan du BTP de la partie administrative répétitive : centraliser les demandes clients, structurer les informations, organiser les rendez-vous et assurer le suivi. Il agit comme un assistant terrain disponible en permanence depuis le téléphone." },
  { question: "Est-ce qu'il remplace une vraie secrétaire ?", answer: "Non, ce n'est pas une personne. C'est un outil qui automatise les tâches simples et répétitives — recevoir une demande, la structurer, la classer, vous notifier — pour que vous gardiez du temps pour les chantiers. Beaucoup d'artisans indépendants l'utilisent justement parce qu'ils n'ont pas de secrétariat." },
  { question: "Pour qui c'est le plus utile ?", answer: "Pour les artisans indépendants et petites entreprises du bâtiment qui reçoivent des demandes par plusieurs canaux et qui n'ont pas de personnel administratif dédié. C'est aussi utile pour ceux qui en ont, en complément, pour fluidifier la circulation de l'information." },
  { question: "Combien de temps faut-il pour le mettre en place ?", answer: "Quelques minutes. Vous créez votre compte, vous obtenez votre lien à partager, et vous pouvez commencer à recevoir des demandes structurées immédiatement. Pas de formation requise." },
  { question: "Est-ce que mes données et celles de mes clients sont protégées ?", answer: "Oui. Les données sont hébergées de manière sécurisée et le système est pensé pour protéger les informations clients et professionnelles." },
];

const AssistantAdministratifArtisan = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
        { "@type": "ListItem", position: 2, name: "Assistant administratif artisan", item: "https://logiciel-artisan.fr/assistant-administratif-artisan" },
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
        path="/assistant-administratif-artisan"
        title="Assistant administratif artisan : décharger le BTP de l'admin chronophage"
        description="Un assistant administratif terrain pour artisans du BTP : centralisation des demandes, organisation des rendez-vous, suivi clair, depuis le téléphone. Pour les indépendants et petites entreprises du bâtiment."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Assistant administratif artisan</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Assistant administratif pour artisan : l'outil qui rend vos journées plus simples</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            La plupart des artisans du BTP n'ont pas de secrétariat. Pourtant, l'administratif ne s'arrête jamais : appels, devis à préparer, rendez-vous à caler, relances à faire. Un assistant administratif terrain vous décharge des tâches répétitives, depuis votre téléphone.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">L'admin, c'est ce qui tue le temps d'un artisan</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Un plombier, un électricien, un peintre, un menuisier… leur métier, c'est le chantier. Mais ils passent tous une part importante de leur semaine à autre chose : décrocher, rappeler, recopier des coordonnées, chercher une photo, relancer un devis, caler un rendez-vous. Cette charge invisible finit en heures supplémentaires le soir et le week-end.</p>
            <p>Un <strong className="text-foreground">assistant administratif pour artisan</strong> ne cherche pas à imiter une secrétaire. Il automatise les tâches répétitives : recevoir une demande, la structurer proprement, la classer, vous notifier, et garder le suivi à jour. Vous gardez la main sur ce qui compte vraiment.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce que l'assistant fait pour vous, concrètement</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Inbox, title: "Reçoit toutes les demandes", desc: "Téléphone, SMS, WhatsApp, Google, formulaire : tout arrive au même endroit." },
              { icon: Brain, title: "Structure l'information", desc: "L'IA analyse photos et vocaux pour préparer une liste de matériel et des pistes utiles." },
              { icon: Clock, title: "Suit les dossiers", desc: "Plus de devis oubliés, plus de client sans réponse, plus de relance manquée." },
              { icon: Smartphone, title: "Disponible en permanence", desc: "Depuis votre téléphone, sur chantier, en déplacement, le soir." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">Un assistant honnête sur ce qu'il fait</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Cet assistant administratif n'est <strong className="text-foreground">pas un ERP</strong>, ni un logiciel de comptabilité. Il ne vous fera pas votre TVA, il ne remplacera pas votre expert-comptable, et il ne décide pas du prix de vos devis. Ce qu'il fait, en revanche, il le fait bien : ramener toute la partie "demande client + suivi" dans un seul endroit clair et accessible.</p>
            <p>C'est ce qui en fait un outil particulièrement utile pour les artisans indépendants : il vous donne les bénéfices d'un secrétariat (organisation, réactivité, professionnalisme) sans la complexité ni le coût.</p>
            <p>Pour beaucoup d'artisans du BTP, c'est ce qui fait basculer une activité d'un mode "je cours après le temps" à un mode "je sais où j'en suis, je peux respirer".</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Pour aller plus loin</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/logiciel-devis-facture-artisan" className="text-primary hover:underline">Préparer ses devis sans courir après l'info</Link></li>
            <li><Link to="/outil-gestion-artisan-btp" className="text-primary hover:underline">Outil de gestion pour artisan du BTP : vue d'ensemble</Link></li>
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
          <h2 className="text-heading text-primary-foreground mb-6">Reprenez du temps sur l'admin</h2>
          <p className="text-primary-foreground/80 text-body-lg mb-8">Test gratuit, sans engagement, sans carte bancaire.</p>
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

export default AssistantAdministratifArtisan;
