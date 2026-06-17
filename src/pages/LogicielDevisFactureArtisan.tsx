import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { CheckCircle2, ArrowRight, FileText, Clock, Users, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "Ce logiciel remplace-t-il mon logiciel de comptabilité ?", answer: "Non. Cette solution n'est pas un logiciel de comptabilité et ne prétend pas l'être. Elle aide à structurer la demande client, préparer les informations utiles au devis et organiser le suivi. Vous continuez à éditer vos factures et votre comptabilité dans votre outil habituel." },
  { question: "Comment l'outil aide-t-il à préparer un devis ?", answer: "Quand une demande arrive (par téléphone, SMS, WhatsApp, formulaire…), elle est automatiquement structurée en dossier avec les coordonnées client, la description du besoin et les photos. Vous avez ainsi toutes les informations utiles pour préparer un devis cohérent, sans avoir à rappeler le client pour combler les trous." },
  { question: "Peut-on suivre les devis envoyés ?", answer: "Oui. Chaque demande client devient un dossier suivi : vous savez où vous en êtes, quels devis sont en attente de réponse et lesquels demandent une relance. Cela évite les devis qui restent sans suite par simple oubli." },
  { question: "Est-ce que l'IA fait le devis à ma place ?", answer: "Non. L'IA analyse les photos et les notes vocales pour suggérer une liste de matériel et donner des pistes utiles. Le devis final reste préparé par vous, qui connaissez votre métier, vos prix et vos contraintes terrain." },
  { question: "Faut-il une formation pour s'en servir ?", answer: "Non. L'outil est pensé pour être utilisé immédiatement, sans formation, directement depuis le téléphone. La prise en main se fait en quelques minutes." },
  { question: "Combien ça coûte ?", answer: "Vous pouvez tester la solution gratuitement, sans engagement et sans carte bancaire. L'inscription prend quelques minutes." },
];

const LogicielDevisFactureArtisan = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
        { "@type": "ListItem", position: 2, name: "Logiciel devis facture artisan", item: "https://logiciel-artisan.fr/logiciel-devis-facture-artisan" },
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
        path="/logiciel-devis-facture-artisan"
        title="Logiciel devis facture artisan : préparer et suivre ses devis sans rien oublier"
        description="Comment un assistant administratif terrain aide les artisans du BTP à structurer leurs demandes, préparer leurs devis plus vite et suivre les relances. Sans remplacer votre logiciel de compta."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel devis facture artisan</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel devis facture artisan : préparer ses devis sans s'éparpiller</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Quand on est artisan du BTP, la moitié du travail de devis se joue avant même de l'écrire : récupérer les bonnes infos client, la bonne description du chantier, les bonnes photos. Un outil pensé pour le terrain peut tout structurer en amont, pour que la préparation du devis devienne enfin simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Pourquoi les devis prennent autant de temps aux artisans</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Sur le papier, faire un devis devrait être rapide. Dans la vraie vie d'un artisan du bâtiment, c'est rarement le cas. La demande arrive par téléphone entre deux interventions, le client envoie une photo sur WhatsApp, ajoute un détail par SMS plus tard, et l'adresse exacte n'arrive parfois qu'au troisième échange.</p>
            <p>Résultat : au moment de poser le devis, il manque toujours quelque chose. Vous devez rappeler, relancer, ressortir les SMS. Le devis tombe à 22h, fatigué, sur un coin de bureau. Et certaines demandes finissent par tomber dans l'oubli.</p>
            <p>Un bon <strong className="text-foreground">logiciel devis facture pour artisan</strong> ne se contente pas d'imprimer un PDF : il vous aide d'abord à <strong className="text-foreground">centraliser et structurer la demande</strong>, pour que la rédaction du devis devienne une formalité.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce que fait l'outil (et ce qu'il ne fait pas)</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              { icon: FileText, title: "Structure chaque demande", desc: "Coordonnées, description, photos et historique au même endroit, prêts pour le devis." },
              { icon: Clock, title: "Vous fait gagner du temps", desc: "Plus besoin de courir après l'info. Tout est déjà là quand vous ouvrez le dossier." },
              { icon: Users, title: "Suit les relances", desc: "Vous voyez quels devis attendent une réponse et lesquels méritent une relance." },
              { icon: ShieldCheck, title: "Ne remplace pas la compta", desc: "Vous continuez à éditer vos factures dans votre logiciel de comptabilité habituel." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-body-lg mb-12">
            L'IA intégrée peut aussi analyser les photos et les notes vocales du client pour suggérer une liste de matériel et donner des pistes. Elle ne décide pas à votre place, elle prépare le terrain pour que vous fassiez un devis plus juste, plus vite.
          </p>

          <h2 className="text-heading text-foreground mb-6">Une logique simple : centraliser, préparer, suivre</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Le principe est volontairement simple. Vous partagez <strong className="text-foreground">un lien unique</strong> partout où les clients vous trouvent : fiche Google, site web, signature mail, QR code sur le camion. Quand un client clique, il décrit son besoin, ajoute photos et coordonnées. Tout arrive dans votre espace, structuré.</p>
            <p>À partir de là, vous avez tout ce qu'il faut pour préparer un devis sérieux. Le dossier garde l'historique, vos échanges, les rendez-vous, et vous savez exactement où vous en êtes. Quand le devis est envoyé, le suivi continue : qui a répondu, qui attend, qui mérite une relance ?</p>
            <p>C'est ce qui fait la différence entre un artisan qui perd des chantiers parce qu'il oublie de relancer, et un artisan qui transforme une majorité de ses demandes en travail réel.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À lire aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/logiciel-artisan" className="text-primary hover:underline">Logiciel artisan : pourquoi c'est devenu indispensable en 2026</Link></li>
            <li><Link to="/logiciel-gestion-chantier" className="text-primary hover:underline">Logiciel de gestion de chantier pour artisans du BTP</Link></li>
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
          <h2 className="text-heading text-primary-foreground mb-6">Préparez vos devis sans courir après l'info</h2>
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

export default LogicielDevisFactureArtisan;
