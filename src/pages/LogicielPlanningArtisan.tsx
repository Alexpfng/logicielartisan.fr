import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { CheckCircle2, ArrowRight, Calendar, Bell, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "Qu'est-ce qu'un logiciel de planning pour artisan ?", answer: "C'est un outil qui aide à organiser ses rendez-vous et ses interventions, en gardant chaque créneau rattaché à un dossier client. Il évite de jongler entre l'agenda papier, l'agenda téléphone et les SMS." },
  { question: "Est-ce qu'on peut prendre rendez-vous depuis son téléphone ?", answer: "Oui. L'application est pensée mobile-first : vous gérez les rendez-vous, les déplacements et les interventions directement depuis le téléphone, entre deux chantiers." },
  { question: "Comment éviter d'oublier un rendez-vous client ?", answer: "Chaque rendez-vous est lié au dossier client correspondant. Vous gardez une vision claire de vos créneaux et l'outil vous aide à ne pas perdre de demande en route." },
  { question: "Est-ce que ça remplace mon agenda Google ou Apple ?", answer: "Non, ce n'est pas un calendrier généraliste. L'outil se concentre sur l'organisation des rendez-vous liés aux demandes clients et chantiers, en complément de votre agenda personnel si besoin." },
  { question: "Pourquoi être plus réactif change tout ?", answer: "Dans le BTP, l'artisan qui répond et propose un créneau en premier remporte souvent le chantier. Un planning clair, accessible depuis le téléphone, vous permet d'être ce premier-là, sans stress." },
];

const LogicielPlanningArtisan = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
        { "@type": "ListItem", position: 2, name: "Logiciel planning artisan", item: "https://logiciel-artisan.fr/logiciel-planning-artisan" },
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
        path="/logiciel-planning-artisan"
        title="Logiciel planning artisan : organiser ses rendez-vous et rester réactif"
        description="Un planning simple pensé pour les artisans du BTP : rendez-vous liés aux dossiers clients, gestion mobile-first, réactivité terrain. Test gratuit."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel planning artisan</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel planning artisan : organiser ses rendez-vous sans rien laisser passer</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Un planning d'artisan du BTP, ce n'est pas un agenda de bureau. C'est une suite de rendez-vous mouvants, d'urgences, de visites de chantier. Il vous faut un outil mobile, simple, capable de relier chaque créneau au bon dossier client.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Le planning d'un artisan, c'est particulier</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Un artisan ne vit pas sur un fauteuil de bureau. Son planning bouge en permanence : un client qui rappelle pour avancer un rendez-vous, une urgence qui décale la journée, une visite de chantier qui dure plus longtemps que prévu. Les agendas généralistes ne sont pas pensés pour ce rythme-là.</p>
            <p>Un <strong className="text-foreground">logiciel de planning pour artisan</strong> doit faire trois choses simples : rester accessible depuis le téléphone, relier chaque créneau au bon dossier client, et permettre de proposer un créneau au client sans perdre dix minutes à chercher l'info.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce qu'apporte un planning relié aux dossiers clients</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Calendar, title: "Rendez-vous liés au dossier", desc: "Chaque rendez-vous garde le contexte du chantier et du client." },
              { icon: Smartphone, title: "Tout depuis le téléphone", desc: "Vous gérez vos créneaux en déplacement, sans rentrer au bureau." },
              { icon: Bell, title: "Moins d'oublis", desc: "Les demandes en attente restent visibles, pas noyées dans une boîte mail." },
              { icon: Zap, title: "Réactivité terrain", desc: "Proposer un créneau au client en quelques secondes, sans hésiter." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">La réactivité, ça change tout dans le BTP</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Dans le bâtiment, l'artisan qui répond le premier et qui propose un créneau clair remporte une bonne partie des chantiers. Le client veut être rassuré, savoir qu'il a affaire à un professionnel organisé. Si vous mettez deux jours à proposer un rendez-vous, vous laissez la place au confrère.</p>
            <p>Avec un planning relié à vos demandes entrantes, vous voyez tout : ce qui est nouveau, ce qui attend une réponse, ce qui est calé, ce qui doit être relancé. Cette clarté vous rend plus rapide sans vous demander plus d'efforts.</p>
            <p>Et parce que tout est mobile, vous pouvez confirmer un créneau au moment même où le client vous appelle, debout sur un chantier, sans avoir à dire "je vous rappelle ce soir pour vous dire".</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À découvrir aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/logiciel-gestion-chantier" className="text-primary hover:underline">Logiciel de gestion de chantier</Link></li>
            <li><Link to="/assistant-administratif-artisan" className="text-primary hover:underline">Assistant administratif terrain pour artisan</Link></li>
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
          <h2 className="text-heading text-primary-foreground mb-6">Un planning clair, depuis votre téléphone</h2>
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

export default LogicielPlanningArtisan;
