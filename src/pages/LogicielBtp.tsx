import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { CheckCircle2, ArrowRight, Building2, HardHat, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LogicielBtp = () => {
  useEffect(() => {
    document.title = "Logiciel BTP — Centralisez les demandes de votre entreprise du bâtiment";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Le logiciel BTP pensé pour les artisans du bâtiment. Centralisez vos demandes clients, organisez vos chantiers et gagnez en efficacité. Test gratuit.");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground">Logiciel BTP</span>
          </div>
          <h1 className="text-display text-foreground mb-6">Logiciel BTP : l'outil qui simplifie le quotidien du bâtiment</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Les artisans du BTP ont besoin d'un logiciel qui comprend leur métier. Pas un ERP complexe, mais un outil terrain, simple et efficace.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton variant="primary" size="lg">Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" /></CTAButton>
            <CTAButton variant="secondary" size="lg">Découvrir Bulbiz</CTAButton>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading text-foreground mb-6">Les défis spécifiques du BTP</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Le secteur du bâtiment a ses propres réalités. Les artisans du BTP sont sur le terrain, leurs clients les contactent par tous les canaux possibles, et la gestion administrative passe souvent au second plan.</p>
            <p>Un bon <strong className="text-foreground">logiciel BTP</strong> doit comprendre ces contraintes et s'y adapter, pas l'inverse.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Building2, title: "Adapté au bâtiment", desc: "Pensé pour les réalités du BTP : chantiers, déplacements, urgences." },
              { icon: HardHat, title: "Simple sur le terrain", desc: "Utilisable entre deux interventions, sans perdre de temps." },
              { icon: FileText, title: "Dossiers complets", desc: "Photos, descriptions, infos client — tout au même endroit." },
              { icon: Users, title: "Relation client pro", desc: "Répondez vite, soyez organisé, inspirez confiance." },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-heading text-foreground mb-6">Bulbiz pour le BTP</h2>
          <div className="text-muted-foreground space-y-4 text-body-lg mb-12">
            <p>Bulbiz est utilisé par de nombreux artisans du bâtiment : plombiers, électriciens, chauffagistes, peintres, couvreurs, menuisiers, carreleurs…</p>
            <p>L'outil s'adapte à chaque métier grâce à son approche universelle : <strong className="text-foreground">un lien unique pour centraliser toutes les demandes</strong>, quel que soit le canal d'entrée.</p>
            <p>Les fonctionnalités clés pour le BTP :</p>
            <ul className="space-y-2 ml-4">
              {["Centralisation multi-canal des demandes", "Photos et vidéos de chantier rattachées aux dossiers", "Suivi des dossiers en cours", "Analyse IA des photos et vocaux pour listes de matériel", "Gestion des rendez-vous terrain", "Relances automatiques"].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-primary-foreground mb-4">Testez Bulbiz pour votre activité BTP</h2>
            <p className="text-primary-foreground/80 mb-6">Gratuit, sans engagement, adapté à votre métier.</p>
            <a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
              Commencer gratuitement <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default LogicielBtp;
