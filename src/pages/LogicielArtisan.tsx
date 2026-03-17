import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckCircle2, ArrowRight, Wrench, Smartphone, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LogicielArtisan = () => {
  useEffect(() => {
    document.title = "Logiciel Artisan — Le meilleur outil pour gérer vos demandes clients";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Découvrez le meilleur logiciel pour artisan. Centralisez vos demandes clients, gagnez du temps et ne perdez plus aucun chantier. Test gratuit.");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel artisan</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel artisan : centralisez vos demandes et gagnez du temps</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            En tant qu'artisan, votre temps est précieux. Le bon logiciel artisan ne doit pas vous compliquer la vie — il doit vous faire gagner du temps, centraliser vos demandes clients et vous aider à ne rien perdre.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir Bulbiz</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Pourquoi un logiciel pour artisan est devenu indispensable</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Le quotidien d'un artisan a changé. Les demandes ne viennent plus uniquement par téléphone. Elles arrivent par SMS, WhatsApp, Google, formulaires en ligne, bouche-à-oreille…</p>
            <p>Sans un outil adapté, il est très facile de perdre des demandes, d'oublier de relancer un devis, ou de répondre trop tard à un client qui ira voir ailleurs.</p>
            <p>Un bon <strong className="text-foreground">logiciel artisan</strong> permet de :</p>
            <ul className="space-y-2 ml-4">
              {["Centraliser toutes les demandes clients au même endroit", "Structurer automatiquement les informations reçues", "Ne plus perdre de demandes entre deux chantiers", "Gagner en rapidité et en professionnalisme", "Gérer son activité depuis son téléphone"].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-heading text-foreground mb-6">Bulbiz : le logiciel artisan pensé pour le terrain</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Bulbiz n'est pas un logiciel de gestion classique. C'est un outil conçu spécifiquement pour les artisans qui travaillent sur le terrain et qui ont besoin d'une solution simple, mobile et efficace.</p>
            <p>Le principe est simple : vous créez un lien unique que vous partagez partout. Vos clients font leur demande via ce lien, ajoutent photos et détails, et tout arrive dans Bulbiz, structuré et prêt à être traité.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Wrench, title: "Pensé pour le métier", desc: "Pas un outil générique adapté après coup. Bulbiz est né du terrain." },
              { icon: Smartphone, title: "Mobile first", desc: "Tout fonctionne depuis votre téléphone. Sur chantier, dans le camion." },
              { icon: Shield, title: "Simple et fiable", desc: "Pas besoin de formation. Prise en main en quelques minutes." },
              { icon: Zap, title: "Rapide", desc: "Recevez et traitez les demandes plus vite que vos concurrents." },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">Les métiers qui utilisent Bulbiz</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Bulbiz est utilisé par tous types d'artisans du bâtiment :</p>
            <ul className="grid grid-cols-2 gap-2 ml-4">
              {["Plombiers", "Électriciens", "Chauffagistes", "Peintres", "Menuisiers", "Couvreurs", "Carreleurs", "Maçons"].map(m => (
                <li key={m} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
            <p className="pt-2">Quel que soit votre métier, si vous recevez des demandes clients et que vous voulez mieux vous organiser, Bulbiz peut vous aider.</p>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-primary-foreground mb-4">Prêt à tester ?</h2>
            <p className="text-primary-foreground/80 mb-6">Inscription gratuite, sans engagement, en quelques minutes.</p>
            <a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
              Commencer gratuitement <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Questions fréquentes sur les logiciels pour artisan</h2>
          <FAQAccordion items={[
            { question: "Quel est le meilleur logiciel pour artisan en 2025 ?", answer: "Le meilleur logiciel pour artisan est celui qui correspond à votre quotidien. Si votre principal problème est la perte de demandes clients, Bulbiz est une solution particulièrement adaptée grâce à sa simplicité et sa logique terrain." },
            { question: "Un logiciel artisan est-il vraiment utile pour un indépendant ?", answer: "Oui, surtout si vous recevez des demandes par plusieurs canaux. Un bon logiciel artisan vous fait gagner du temps et vous évite de perdre des chantiers." },
            { question: "Combien coûte un logiciel pour artisan ?", answer: "Les prix varient beaucoup. Bulbiz propose un test gratuit sans engagement pour que vous puissiez juger par vous-même." },
            { question: "Faut-il une formation pour utiliser Bulbiz ?", answer: "Non. Bulbiz est conçu pour être utilisé immédiatement, sans formation. La prise en main se fait en quelques minutes." },
          ]} />
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default LogicielArtisan;
