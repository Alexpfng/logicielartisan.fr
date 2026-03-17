import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckCircle2, CircleDot, ThumbsUp, Lightbulb, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const BulbizAvis = () => {
  useEffect(() => {
    document.title = "Avis Bulbiz 2025 — Notre test complet pour artisans | logiciel-artisan.fr";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Notre avis détaillé sur Bulbiz, l'outil de gestion des demandes clients pour artisans. Test complet, avantages, limites et verdict.");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Avis Bulbiz</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Notre avis sur Bulbiz : le test complet</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            Nous avons testé Bulbiz, la solution qui aide les artisans à centraliser leurs demandes clients. Voici notre avis honnête et détaillé.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto prose-like">
          <h2 className="text-heading text-foreground mb-6">Pourquoi s'intéresser à Bulbiz ?</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Si vous êtes artisan, vous connaissez le problème : les demandes arrivent de partout. Appels, SMS, WhatsApp, formulaires Google, bouche-à-oreille… Et entre deux chantiers, il est très facile de perdre le fil.</p>
            <p>Bulbiz est né de ce constat. L'outil propose une approche simple : <strong className="text-foreground">un lien unique que vous partagez partout</strong>. Vos clients remplissent leur demande, et tout arrive au même endroit, structuré et organisé.</p>
            <p>Ce n'est pas un logiciel de gestion classique. C'est un outil pensé pour le terrain, pour les artisans qui travaillent avec leur téléphone et qui n'ont pas le temps de se former sur un logiciel complexe.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Notre verdict</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Après avoir testé Bulbiz en conditions réelles, notre impression est très positive. L'outil tient sa promesse : <strong className="text-foreground">simplicité, centralisation, efficacité</strong>.</p>
            <p>La prise en main est immédiate. Pas de formation, pas de configuration complexe. Vous créez votre compte, vous obtenez votre lien, et vous pouvez commencer à recevoir des demandes structurées en quelques minutes.</p>
            <p>L'approche mobile-first est un vrai plus pour les artisans terrain. Tout est consultable et gérable depuis le téléphone, ce qui correspond à la réalité du quotidien.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <ThumbsUp className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground text-lg">Ce qu'on aime</h3>
            </div>
            <ul className="space-y-3">
              {["Pensée pour le terrain, pas pour le bureau", "Centralisation simple et intuitive des demandes", "Logique mobile-first vraiment aboutie", "Approche concrète, pas de jargon technique", "Amélioration continue et écoute des utilisateurs", "Expérience plus fluide et professionnelle pour l'artisan", "IA qui analyse photos et vocaux pour suggérer le matériel", "Formulaire client clair et complet"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-5 h-5 text-amber-600" />
              <h3 className="font-semibold text-foreground text-lg">À garder en tête</h3>
            </div>
            <ul className="space-y-3">
              {["Solution en évolution, toutes les fonctionnalités ne sont pas encore disponibles", "Approche différente des logiciels de gestion classiques", "Nécessite une vraie logique d'organisation pour en tirer le meilleur", "Pas un ERP complet pour grandes entreprises"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CircleDot className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Pour qui Bulbiz est-il le plus pertinent ?</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Bulbiz s'adresse principalement aux artisans indépendants et petites entreprises du bâtiment : plombiers, électriciens, chauffagistes, peintres, menuisiers, couvreurs, carreleurs…</p>
            <p>Plus précisément, Bulbiz est particulièrement pertinent si :</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Vous recevez des demandes par plusieurs canaux différents</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Vous avez déjà perdu des demandes par manque d'organisation</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Vous voulez un outil simple, sans formation</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Vous travaillez principalement depuis votre téléphone</li>
            </ul>
          </div>

          <h2 className="text-heading text-foreground mb-6">Conclusion</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-8">
            <p>Bulbiz est une solution rafraîchissante dans un marché dominé par des logiciels trop complexes pour les artisans terrain. Son approche centrée sur la centralisation des demandes clients répond à un vrai problème vécu au quotidien.</p>
            <p>Si vous êtes artisan et que vous perdez parfois des demandes ou du temps à chercher les infos clients, Bulbiz mérite clairement un test. D'autant que <strong className="text-foreground">l'inscription est gratuite</strong>.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester Bulbiz gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir Bulbiz</CTAButton>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default BulbizAvis;
