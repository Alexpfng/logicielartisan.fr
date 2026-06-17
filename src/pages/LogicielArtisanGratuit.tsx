import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Seo from "@/components/Seo";
import { ArrowRight, Gift, ShieldCheck, Timer, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  { question: "Existe-t-il un logiciel artisan gratuit à 100 % et à vie ?", answer: "Soyons honnêtes : un outil pro maintenu, hébergé et sécurisé a un coût. Les solutions sérieuses du marché proposent généralement un essai gratuit pour tester sans payer, puis un abonnement raisonnable. Méfiez-vous des promesses de gratuité totale et illimitée." },
  { question: "Comment ça marche, l'essai gratuit ?", answer: "Vous accédez à l'outil sans rien payer, vous entrez de vrais clients, vous testez votre quotidien (demandes, photos, suivi). À la fin de la période d'essai, vous décidez en connaissance de cause si vous voulez continuer." },
  { question: "Faut-il une carte bancaire pour démarrer ?", answer: "Sur le site officiel, suivez les indications affichées au moment de l'inscription. L'idée d'un essai sérieux, c'est de pouvoir tester sans pression." },
  { question: "Que se passe-t-il à la fin de l'essai ?", answer: "Soit vous décidez de continuer en passant à une formule payante, soit vous arrêtez. Vous ne devez jamais vous sentir piégé : un bon éditeur joue la transparence sur ce qui se passe après l'essai." },
  { question: "Pourquoi un outil payant peut être plus rentable qu'un outil gratuit ?", answer: "Un outil gratuit qui plante, qui n'évolue plus, qui n'a pas de support, vous coûte cher en temps perdu. Quelques euros par mois pour un outil qui vous fait gagner plusieurs heures par semaine, c'est très souvent rentable." },
];

const LogicielArtisanGratuit = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://logiciel-artisan.fr/" },
      { "@type": "ListItem", position: 2, name: "Logiciel artisan gratuit", item: "https://logiciel-artisan.fr/logiciel-artisan-gratuit" },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })) },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        path="/logiciel-artisan-gratuit"
        title="Logiciel artisan gratuit : ce qu'il faut vraiment en attendre"
        description="Logiciel artisan gratuit : ce qu'on peut attendre d'un essai gratuit pour un outil pro du BTP, et comment tester sereinement avant de s'engager."
        jsonLd={jsonLd}
      />
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel artisan gratuit</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel artisan gratuit : ce qu'il faut vraiment en attendre</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Beaucoup d'artisans cherchent un logiciel "100 % gratuit". On va être direct : pour un outil pro maintenu, sécurisé et qui évolue, la gratuité totale et illimitée n'existe quasiment pas. En revanche, un bon essai gratuit, ça change tout pour décider en connaissance de cause.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Pourquoi la "vraie" gratuité totale est un mirage</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Un outil professionnel a un coût réel : développement, hébergement sécurisé, maintenance, support client, mises à jour, sauvegardes. Quelqu'un, quelque part, paie ce coût. Quand un service est annoncé comme "100 % gratuit à vie" sans contrepartie claire, il faut se demander comment c'est financé : revente de données, fermeture surprise du service au bout de deux ans, absence totale de support, etc.</p>
            <p>Pour un artisan, ce n'est pas neutre. Si votre outil de suivi client disparaît du jour au lendemain, vous perdez votre mémoire commerciale. Mieux vaut un outil dont le modèle économique est transparent, même s'il est payant après une période d'essai.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Ce que doit permettre un bon essai gratuit</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Gift, title: "Accès sans payer", desc: "Vous testez l'outil sur vos vrais cas, sans engagement." },
              { icon: Timer, title: "Une durée suffisante", desc: "Assez de jours pour intégrer l'outil à votre quotidien réel." },
              { icon: ShieldCheck, title: "Transparence sur la suite", desc: "Vous savez ce qui se passe à la fin de l'essai, sans piège." },
              { icon: ThumbsUp, title: "Liberté de partir", desc: "Aucune obligation de continuer si l'outil ne vous convient pas." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">Comment bien profiter d'un essai gratuit</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Le piège classique, c'est de tester l'outil dix minutes le premier jour, puis de ne plus y toucher. Pour vraiment juger, mettez-le à l'épreuve sur de vraies demandes : entrez deux ou trois nouveaux clients, prenez des photos sur vos chantiers en cours, organisez votre semaine dedans. Au bout de quelques jours, vous saurez si l'outil vous fait gagner du temps ou pas. C'est la seule chose qui compte.</p>
            <p>Ne vous laissez pas séduire uniquement par une démo léchée : ce qui compte, c'est ce que l'outil donne entre vos mains, dans votre camionnette, sur vos vrais dossiers.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Pourquoi un outil payant peut coûter moins cher au final</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Faites le calcul honnêtement : si un outil vous fait gagner ne serait-ce que deux heures par semaine, ça représente plus de 100 heures par an. Le tarif d'un abonnement mensuel raisonnable est très souvent largement amorti par ce temps regagné, sans même parler des chantiers que vous ne perdez plus parce que vous répondez plus vite et que vous oubliez moins de devis.</p>
            <p>Le bon réflexe n'est donc pas de chercher absolument du "gratuit", mais de chercher du "rentable" : un essai gratuit pour tester sereinement, puis un abonnement qui s'auto-finance par le temps gagné.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">À découvrir aussi</h2>
          <ul className="space-y-2 mb-12 text-body-lg">
            <li><Link to="/" className="text-primary hover:underline">Le nouveau logiciel préféré des artisans du BTP</Link></li>
            <li><Link to="/meilleur-logiciel-artisan" className="text-primary hover:underline">Meilleur logiciel artisan 2026 : les critères</Link></li>
            <li><Link to="/logiciel-artisan" className="text-primary hover:underline">Logiciel artisan : la vue d'ensemble</Link></li>
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
          <h2 className="text-heading text-primary-foreground mb-6">Testez sereinement, décidez ensuite</h2>
          <p className="text-primary-foreground/80 text-body-lg mb-8">Essai gratuit, sans engagement.</p>
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

export default LogicielArtisanGratuit;
