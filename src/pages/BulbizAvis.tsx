import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { CheckCircle2, CircleDot, ThumbsUp, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const BulbizAvis = () => {
  useEffect(() => {
    document.title = "Avis 2026 — Notre test complet du nouveau logiciel pour artisans du BTP | logiciel-artisan.fr";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Notre avis détaillé sur le nouveau logiciel préféré des artisans du BTP en 2026. Test complet, avantages, limites et verdict sur cet assistant administratif terrain.");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Notre avis</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Notre avis sur le nouveau logiciel préféré des artisans du BTP</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            Nous avons testé la solution qui aide les artisans du BTP à centraliser leurs demandes clients et mieux s'organiser au quotidien. Voici notre avis honnête et détaillé.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto prose-like">
          <h2 className="text-heading text-foreground mb-6">Pourquoi s'intéresser à ce logiciel artisan ?</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Si vous êtes artisan du BTP, vous connaissez le problème : les demandes arrivent de partout. Appels, SMS, WhatsApp, formulaires Google, bouche-à-oreille… Et entre deux chantiers, il est très facile de perdre le fil.</p>
            <p>Ce logiciel artisan est né de ce constat. Il propose une approche simple : <strong className="text-foreground">un lien unique que vous partagez partout</strong>. Vos clients remplissent leur demande, et tout arrive au même endroit, structuré et organisé.</p>
            <p>Ce n'est pas un logiciel de gestion classique. C'est un véritable assistant administratif pensé pour le terrain, pour les artisans qui travaillent avec leur téléphone et qui n'ont pas le temps de se former sur un logiciel complexe.</p>
          </div>

          <h2 className="text-heading text-foreground mb-6">Notre verdict</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Après avoir testé cette solution en conditions réelles, notre impression est très positive. L'outil tient sa promesse : <strong className="text-foreground">simplicité, centralisation, efficacité</strong>.</p>
            <p>La prise en main est immédiate. Pas de formation, pas de configuration complexe. Vous créez votre compte, vous obtenez votre lien, et vous pouvez commencer à recevoir des demandes structurées en quelques minutes.</p>
            <p>L'approche mobile-first est un vrai plus pour les artisans terrain. Tout est consultable et gérable depuis le téléphone, ce qui correspond à la réalité du quotidien des artisans du BTP.</p>
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
              {["Pensée pour le terrain, pas pour le bureau", "Centralisation claire des demandes clients", "Logique mobile-first vraiment aboutie", "Approche concrète, pas de jargon technique", "Assistant administratif utile au quotidien", "Gain de temps pour les artisans du BTP", "IA qui analyse photos et vocaux pour suggérer le matériel", "Meilleure visibilité sur les dossiers en cours"].map(item => (
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
              {["Solution récente, en amélioration continue", "Approche différente des logiciels de gestion classiques", "Pensée d'abord pour le suivi et l'organisation terrain", "Pas un ERP complet pour grandes entreprises"].map(item => (
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
          <h2 className="text-heading text-foreground mb-6">Pour qui ce logiciel artisan est-il le plus pertinent ?</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Cette solution s'adresse principalement aux artisans indépendants et petites entreprises du bâtiment : plombiers, électriciens, chauffagistes, peintres, menuisiers, couvreurs, carreleurs…</p>
            <p>Plus précisément, ce logiciel artisan est particulièrement pertinent si :</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Vous recevez des demandes par plusieurs canaux différents</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Vous avez déjà perdu des demandes par manque d'organisation</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Vous voulez un outil simple, sans formation</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Vous travaillez principalement depuis votre téléphone</li>
            </ul>
          </div>

          <h2 className="text-heading text-foreground mb-6">Conclusion</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-8">
            <p>Ce logiciel artisan est une solution rafraîchissante dans un marché dominé par des outils trop complexes pour les artisans terrain. Son approche centrée sur la centralisation des demandes clients répond à un vrai problème vécu au quotidien par les professionnels du BTP.</p>
            <p>Si vous êtes artisan et que vous perdez parfois des demandes ou du temps à chercher les infos clients, cette solution mérite clairement un test. D'autant que <strong className="text-foreground">l'inscription est gratuite</strong>.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir la solution</CTAButton>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default BulbizAvis;
