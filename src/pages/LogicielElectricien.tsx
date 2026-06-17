import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { ArrowRight, Zap, Phone, ClipboardList, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "À quoi sert un logiciel pour électricien ?", answer: "À centraliser les demandes clients (dépannage, mise aux normes, tableaux électriques, rénovation), à organiser les interventions et à garder une trace claire de chaque dossier sans courir après ses notes." },
  { question: "Est-ce adapté aux dépannages en urgence ?", answer: "Oui. Quand un client appelle pour un disjoncteur qui saute ou une panne totale, vous notez la demande en quelques secondes depuis le téléphone et vous proposez un créneau dans la foulée, sans rien oublier." },
  { question: "Puis-je joindre des photos d'un tableau électrique ?", answer: "Oui, chaque demande peut être enrichie de photos (tableau, prise abîmée, schéma existant). C'est utile pour préparer le matériel avant de partir en intervention." },
  { question: "Est-ce que ça fait les devis et la facturation ?", answer: "Non, ce n'est pas un logiciel de devis-factures ni de comptabilité. C'est un assistant administratif terrain qui prépare les éléments (descriptif, photos, matériel) pour que la rédaction du devis derrière soit beaucoup plus rapide." },
  { question: "Faut-il être à l'aise avec l'informatique ?", answer: "Non. L'outil est pensé pour un électricien qui travaille au quotidien sur le terrain, pas pour un informaticien. L'interface est volontairement simple, sans paramétrage compliqué." },
];

const LogicielElectricien = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Logiciel électricien", item: "https://logiciel-artisan.fr/logiciel-electricien" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/logiciel-electricien"
        title="Logiciel électricien : organiser dépannages, devis et mises aux normes"
        description="Un assistant terrain pour électriciens : centraliser les demandes, gérer les dépannages urgents, préparer devis et interventions de mise aux normes. Test gratuit."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel électricien</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel électricien : tenir ses dépannages, ses devis et ses mises aux normes au carré</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Un électricien jongle entre dépannages urgents, rénovations complètes, tableaux à refaire et mises aux normes. Sans outil pour suivre ça proprement, on perd des demandes, on rappelle en retard, et on laisse filer du chiffre.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Le quotidien d'un électricien, en vrai</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Une journée type ressemble rarement à ce qui était prévu la veille. Un particulier appelle parce qu'il n'a plus de courant dans la cuisine. Une régie demande un devis pour refaire un tableau dans un appartement loué. Un client de longue date veut profiter de travaux pour passer en disjoncteurs différentiels conformes. Et au milieu, une mise aux normes Consuel à boucler avant la fin de la semaine.</p>
            <p>Tout ça arrive par téléphone, par SMS, parfois par mail, parfois par un message vocal laissé pendant que vous étiez les bras dans un faux plafond. Sans un endroit unique où poser ces demandes, vous gardez tout en tête — jusqu'au jour où une demande passe à la trappe et c'est l'embrouille.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce qu'un bon logiciel d'électricien doit faire</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Phone, title: "Capter chaque demande", desc: "Dépannage, rénovation, mise aux normes : tout arrive au même endroit, prêt à être traité." },
              { icon: Zap, title: "Prioriser les urgences", desc: "Un disjoncteur qui saute le soir n'attend pas. Vous voyez tout de suite ce qui passe en premier." },
              { icon: Camera, title: "Photos du tableau et de l'existant", desc: "Plus besoin de chercher dans la galerie : les photos restent rattachées au bon dossier." },
              { icon: ClipboardList, title: "Préparer le devis sereinement", desc: "Descriptif, photos, liste de matériel : tout est prêt quand vous rédigez le devis derrière." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">Dépannage, rénovation, mise aux normes : trois rythmes différents</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Le <strong className="text-foreground">dépannage</strong>, c'est de la réactivité pure. Vous notez le nom, l'adresse, le symptôme (plus de courant, prise qui chauffe, disjoncteur qui claque), une photo du tableau si possible, et vous calez un passage. Tout ce qui vous fait gagner trois minutes par appel, c'est trois minutes de plus pour avancer sur le chantier en cours.</p>
            <p>La <strong className="text-foreground">rénovation</strong>, c'est plus long. Visite, prise de cotes, plan d'implantation des points lumineux et des prises, choix du tableau, devis détaillé. Garder toutes les infos d'un chantier au même endroit évite de remettre dix fois la main sur les mêmes photos ou les mêmes notes.</p>
            <p>La <strong className="text-foreground">mise aux normes</strong>, c'est un dossier en soi : état de l'existant, points à reprendre, schéma final, passage du Consuel. Là encore, une demande centralisée et bien documentée vous évite de tout reconstruire à chaque relance du client.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À découvrir aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/logiciel-artisan" className="text-primary hover:underline">Logiciel artisan : la vue d'ensemble</Link></li>
            <li><Link to="/logiciel-gestion-chantier" className="text-primary hover:underline">Logiciel de gestion de chantier</Link></li>
            <li><Link to="/logiciel-chauffagiste" className="text-primary hover:underline">Logiciel chauffagiste (métier voisin)</Link></li>
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
          <h2 className="text-heading text-primary-foreground mb-6">Un outil simple, pensé pour les électriciens du terrain</h2>
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

export default LogicielElectricien;
