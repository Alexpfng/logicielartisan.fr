import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureCard from "@/components/FeatureCard";
import PhoneMockup from "@/components/PhoneMockup";
import FAQAccordion from "@/components/FAQAccordion";
import ComparisonTable from "@/components/ComparisonTable";
import {
  Phone, MessageSquare, Globe, FileText, Clock, AlertTriangle,
  Link2, Camera, Calendar, Bell, Brain, Shield, Smartphone,
  Users, Building2, Wrench, Zap, CheckCircle2, Star, ArrowRight,
  ThumbsUp, Eye, Lightbulb, TrendingUp, Heart, Hammer,
  Plug, Paintbrush, HardHat, CircleDot
} from "lucide-react";

const faqItems = [
  { question: "Quel est le meilleur logiciel pour artisan ?", answer: "Il n'existe pas de solution universelle. Le meilleur logiciel pour un artisan est celui qui correspond à son quotidien terrain. Bulbiz se distingue par sa simplicité, sa logique mobile-first et sa capacité à centraliser les demandes clients venant de tous les canaux." },
  { question: "Existe-t-il une application simple pour artisan indépendant ?", answer: "Oui. Bulbiz a été conçu spécifiquement pour les artisans indépendants qui ont besoin d'un outil simple, sans formation, utilisable directement depuis leur téléphone sur le terrain." },
  { question: "Comment centraliser les demandes clients d'un artisan ?", answer: "Avec Bulbiz, vous créez un lien unique que vous partagez partout (fiche Google, site, carte de visite, QR code). Vos clients font leur demande via ce lien, et tout arrive au même endroit, structuré et organisé." },
  { question: "Comment éviter de perdre des demandes clients ?", answer: "La plupart des demandes perdues le sont parce qu'elles arrivent au mauvais moment (en chantier, au volant). Bulbiz les centralise automatiquement pour que rien ne se perde, même quand vous n'êtes pas disponible." },
  { question: "Comment recevoir les photos et vidéos des clients au bon endroit ?", answer: "Le formulaire Bulbiz permet à vos clients d'ajouter des photos et vidéos directement dans leur demande. Tout est rattaché au bon dossier, pas perdu dans une conversation WhatsApp." },
  { question: "Comment gagner du temps sur l'administratif quand on est artisan ?", answer: "En automatisant la réception, le tri et le suivi des demandes clients. Bulbiz structure les informations dès l'arrivée de la demande pour que vous puissiez vous concentrer sur votre métier." },
  { question: "Quel outil utiliser quand les demandes arrivent par téléphone, SMS et WhatsApp ?", answer: "C'est exactement le problème que résout Bulbiz : centraliser toutes les demandes, quel que soit le canal d'entrée, dans un seul espace organisé." },
  { question: "Bulbiz est-il adapté aux artisans du BTP ?", answer: "Oui. Bulbiz est particulièrement adapté aux métiers du bâtiment : plombiers, électriciens, chauffagistes, peintres, menuisiers, couvreurs et tous les professionnels terrain." },
  { question: "Peut-on tester Bulbiz gratuitement ?", answer: "Oui. Vous pouvez tester Bulbiz gratuitement, sans engagement et sans carte bancaire. L'inscription prend quelques minutes." },
  { question: "Quelle différence entre Bulbiz et un logiciel de gestion classique ?", answer: "Les logiciels de gestion classiques sont souvent pensés pour le bureau, complexes et lourds. Bulbiz est pensé pour le terrain : mobile-first, simple, centré sur la réception et le suivi des demandes clients." },
  { question: "Un artisan peut-il utiliser Bulbiz depuis son téléphone ?", answer: "Absolument. Bulbiz est conçu mobile-first. Tout fonctionne depuis votre téléphone : réception des demandes, suivi des dossiers, rendez-vous, relances." },
  { question: "Comment professionnaliser le suivi client ?", answer: "En utilisant un outil qui structure automatiquement chaque demande en dossier, avec les informations, photos, et un suivi clair. Vos clients le ressentent immédiatement." },
  { question: "Comment mieux organiser les rendez-vous ?", answer: "Bulbiz vous permet de gérer vos rendez-vous directement depuis l'application, liés aux dossiers clients, sans avoir à jongler entre plusieurs outils." },
  { question: "Comment éviter les oublis de devis ?", answer: "Quand chaque demande est centralisée et suivie dans Bulbiz, rien ne tombe dans l'oubli. Vous avez une vue claire de ce qui attend votre attention." },
  { question: "Comment être plus réactif que ses concurrents ?", answer: "En recevant et en traitant les demandes plus vite. L'artisan qui répond en premier remporte souvent le chantier. Bulbiz vous aide à être ce premier à répondre." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-background overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <div className="flex flex-wrap gap-2 mb-6">
                {["Pensé pour les artisans", "Simple à prendre en main", "Mobile first", "Test gratuit"].map(badge => (
                  <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 text-primary text-xs font-medium rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {badge}
                  </span>
                ))}
              </div>

              <h1 className="text-display text-foreground mb-6">
                Vous ne manquez pas de clients.{" "}
                <span className="gradient-text">Vous perdez des demandes.</span>
              </h1>

              <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
                Appels, SMS, WhatsApp, Google… Vos demandes arrivent de partout.{" "}
                <strong className="text-foreground">Bulbiz les centralise automatiquement au même endroit.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <CTAButton variant="primary" size="lg">
                  Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" />
                </CTAButton>
                <CTAButton variant="secondary" size="lg">
                  Découvrir Bulbiz
                </CTAButton>
              </div>

              <p className="text-sm text-muted-foreground">
                Pas besoin de changer vos habitudes.<br />
                On s'adapte à votre façon de travailler.
              </p>

              {/* Quick benefits */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Link2, text: "Centralisation des demandes" },
                  { icon: Shield, text: "Meilleure organisation" },
                  { icon: Clock, text: "Gain de temps" },
                ].map(b => (
                  <div key={b.text} className="flex items-center gap-2">
                    <b.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION PROBLÈME — Le vrai quotidien */}
      <SectionWrapper id="quotidien" variant="alt">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-6">Le vrai quotidien d'un artisan</h2>
          <div className="text-body-lg text-muted-foreground space-y-2">
            <p>Vous êtes sur un chantier. Votre téléphone sonne.</p>
            <p>Un client laisse un message. Un autre envoie un SMS. Un troisième passe par Google.</p>
            <p>Vous vous dites : <em className="text-foreground font-medium">"Je note ça plus tard."</em></p>
            <p className="text-foreground font-semibold pt-2">Et parfois : vous oubliez, vous perdez l'info, vous répondez trop tard.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: Phone, label: "Appel entrant", color: "text-primary" },
            { icon: MessageSquare, label: "SMS", color: "text-green-600" },
            { icon: Globe, label: "WhatsApp", color: "text-green-600" },
            { icon: Globe, label: "Google", color: "text-amber-600" },
            { icon: FileText, label: "Note oubliée", color: "text-destructive" },
            { icon: AlertTriangle, label: "Demande non traitée", color: "text-destructive" },
          ].map(item => (
            <div key={item.label} className="bg-card rounded-xl p-4 text-center shadow-card">
              <item.icon className={`w-8 h-8 mx-auto mb-2 ${item.color}`} />
              <span className="text-xs font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-lg font-semibold text-foreground">
          Ce n'est pas un manque de travail.<br />
          <span className="text-primary">C'est un manque d'organisation.</span>
        </p>
      </SectionWrapper>

      {/* 3. SECTION DOULEUR / IMPACT BUSINESS */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading text-foreground mb-6">Ce que ça vous coûte vraiment</h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon: FileText, title: "Un devis non relancé", desc: "Un client qui passe à la concurrence" },
              { icon: Clock, title: "Une demande oubliée", desc: "Un chantier en moins dans le carnet" },
              { icon: Phone, title: "Un client qui rappelle un autre", desc: "Du chiffre d'affaires qui disparaît" },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-10 h-10 text-destructive/70 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-lg font-semibold text-foreground">
            Vous perdez des chantiers…{" "}
            <span className="text-primary">sans même le savoir.</span>
          </p>
        </div>
      </SectionWrapper>

      {/* 4. SOLUTION SIMPLE */}
      <SectionWrapper variant="alt">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">Un principe simple</h2>
          <p className="text-subheading text-primary">Un lien unique pour recevoir toutes vos demandes clients</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-body-lg text-muted-foreground">
            <p>Vous mettez ce lien :</p>
            <ul className="space-y-2">
              {["sur votre fiche Google", "sur votre site", "sur votre camion", "sur vos cartes", "avec un QR code"].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2">
              Vos clients font leur demande, ajoutent les infos, et{" "}
              <strong className="text-foreground">tout arrive dans Bulbiz.</strong>
            </p>
          </div>

          {/* Visual flow */}
          <div className="flex flex-col items-center gap-4">
            {[
              { icon: Link2, label: "Lien partagé", sub: "Un seul lien pour tous vos canaux" },
              { icon: Users, label: "Le client remplit", sub: "Infos, photos, description du besoin" },
              { icon: FileText, label: "Dossier créé", sub: "Structuré automatiquement dans Bulbiz" },
            ].map((step, i) => (
              <div key={step.label}>
                <div className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-card w-full max-w-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{step.label}</div>
                    <div className="text-xs text-muted-foreground">{step.sub}</div>
                  </div>
                </div>
                {i < 2 && <div className="w-0.5 h-6 bg-primary/20 mx-auto" />}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. ORGANISATION AUTOMATIQUE */}
      <SectionWrapper id="fonctionnalites">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">Tout est organisé automatiquement</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={FileText} title="Demande structurée" description="Chaque demande arrive avec les infos essentielles, organisées et lisibles." />
          <FeatureCard icon={Zap} title="Dossier créé automatiquement" description="Plus besoin de créer des fiches. Le dossier client se génère tout seul." />
          <FeatureCard icon={Camera} title="Photos rattachées" description="Les photos et vidéos de vos clients sont automatiquement liées au bon dossier." />
          <FeatureCard icon={Calendar} title="Rendez-vous planifiés" description="Gérez vos rendez-vous directement dans Bulbiz, liés aux bons dossiers." />
          <FeatureCard icon={Bell} title="Relances automatiques" description="Ne laissez plus aucun devis sans réponse. Bulbiz vous aide à relancer." />
          <FeatureCard icon={Eye} title="Suivi clair" description="Voyez en un coup d'œil où en est chaque demande, chaque dossier." />
        </div>
        <p className="text-center mt-10 text-lg font-semibold text-foreground">
          Plus besoin de chercher. <span className="text-primary">Plus besoin d'y penser.</span>
        </p>
      </SectionWrapper>

      {/* 6. IA MÉTIER */}
      <SectionWrapper variant="alt">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-heading text-foreground mb-6">
              Pas une IA gadget.<br />
              <span className="text-primary">Une IA pensée pour les artisans.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-body-lg">
              <p>Vous prenez une photo du chantier. Vous dictez une note vocale. Vous recevez un devis fournisseur.</p>
              <p><strong className="text-foreground">Bulbiz analyse et génère automatiquement</strong> une liste de matériel et des suggestions adaptées.</p>
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground">
              Une IA qui vous fait gagner du temps.<br />
              <span className="text-primary">Pas une IA pour faire joli.</span>
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-card rounded-2xl p-8 shadow-card max-w-sm w-full">
              <Brain className="w-12 h-12 text-primary mb-6" />
              <div className="space-y-4">
                {["Analyse de photos chantier", "Compréhension des notes vocales", "Liste de matériel automatique", "Suggestions adaptées au chantier"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 7. POSITIONNEMENT */}
      <SectionWrapper variant="dark" className="!bg-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-heading text-background mb-8">Bulbiz n'est pas un simple logiciel.</h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Votre organisation", icon: Shield },
              { label: "Votre suivi client", icon: Users },
              { label: "Votre mémoire", icon: Brain },
            ].map(item => (
              <div key={item.label} className="bg-background/5 border border-background/10 rounded-2xl p-6">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <span className="text-background font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-xl font-bold text-primary">La boîte à outils digitale de l'artisan.</p>
        </div>
      </SectionWrapper>

      {/* 8. RÉSULTATS */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-6">Ce que ça change pour vous</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: CheckCircle2, text: "Vous ne perdez plus de demandes" },
            { icon: TrendingUp, text: "Vous choisissez les chantiers les plus rentables" },
            { icon: Zap, text: "Vous êtes plus rapide que vos concurrents" },
            { icon: Star, text: "Vous paraissez plus professionnel" },
          ].map(item => (
            <div key={item.text} className="bg-card rounded-2xl p-6 shadow-card text-center">
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="font-medium text-foreground text-sm">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-lg font-semibold text-foreground">
          Rien ne se perd. <span className="text-primary">Tout se transforme en chantier.</span>
        </p>
      </SectionWrapper>

      {/* 9. CONFIANCE CLIENT */}
      <SectionWrapper variant="alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading text-foreground mb-6">Vos clients le ressentent immédiatement</h2>
          <div className="text-body-lg text-muted-foreground mb-8 space-y-2">
            <p>Quand vous répondez vite, êtes organisé, ne perdez rien…</p>
            <p className="text-foreground font-semibold">vous inspirez confiance.</p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-card inline-block">
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-xl font-bold text-foreground">
              Et dans l'artisanat, la confiance fait tout.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 10. MOBILE FIRST */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-heading text-foreground mb-6">Votre bureau, c'est votre téléphone</h2>
            <div className="text-body-lg text-muted-foreground space-y-2 mb-8">
              <p>Sur chantier, dans le camion, entre deux rendez-vous…</p>
              <p><strong className="text-foreground">Bulbiz est pensé pour ça.</strong></p>
            </div>
            <div className="space-y-3">
              {["Consultation rapide sur mobile", "Interface pensée pour le terrain", "Notifications en temps réel", "Tout accessible en un tap"].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </SectionWrapper>

      {/* 11. SECTION DÉMO VIDÉO */}
      <SectionWrapper variant="alt">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">Voyez comment Bulbiz fonctionne en situation réelle</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-foreground rounded-2xl p-4 shadow-elevated aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-primary ml-1" />
              </div>
              <p className="text-background/70 text-sm">Vidéo de démonstration</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", label: "Réception de la demande", desc: "Le client remplit le formulaire depuis votre lien" },
              { step: "2", label: "Dossier structuré", desc: "Toutes les infos sont organisées automatiquement" },
              { step: "3", label: "Suivi plus clair", desc: "Vous voyez tout en un coup d'œil" },
              { step: "4", label: "Liste matériel générée", desc: "L'IA analyse photos et infos pour suggérer le matériel nécessaire" },
              { step: "5", label: "Rendez-vous mieux organisés", desc: "Planifiez directement depuis le dossier" },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 12. AVIS / PREUVES SOCIALES */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">Ce que disent les artisans</h2>
          <p className="text-sm text-muted-foreground">Retours réels issus d'échanges terrain et d'avis utilisateurs</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { quote: "Depuis que j'utilise le lien Bulbiz, je ne perds plus aucune demande. Les clients remplissent tout, c'est super pratique.", metier: "Plombier, indépendant" },
            { quote: "Je recevais mes demandes par SMS, WhatsApp, appels… C'était le bazar. Maintenant tout est au même endroit.", metier: "Électricien, 3 salariés" },
            { quote: "L'interface est simple. Pas besoin de formation. En 5 minutes c'était en place sur ma fiche Google.", metier: "Chauffagiste, indépendant" },
          ].map((t, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber-600 text-amber-600" />)}
              </div>
              <p className="text-foreground text-sm mb-4 leading-relaxed italic">"{t.quote}"</p>
              <p className="text-xs text-muted-foreground font-medium">{t.metier}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 13. NOTRE AVIS SUR BULBIZ */}
      <SectionWrapper variant="alt">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">Notre avis sur Bulbiz</h2>
          <p className="text-body-lg text-muted-foreground">
            Une solution particulièrement pertinente pour les artisans qui veulent reprendre le contrôle sur leurs demandes clients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <ThumbsUp className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Ce qu'on aime</h3>
            </div>
            <ul className="space-y-3">
              {["Pensée pour le terrain", "Centralisation simple des demandes", "Logique mobile", "Approche concrète", "Amélioration continue", "Expérience plus fluide pour l'artisan"].map(item => (
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
              <h3 className="font-semibold text-foreground">À garder en tête</h3>
            </div>
            <ul className="space-y-3">
              {["Solution en évolution", "Approche différente des logiciels de gestion classiques", "Nécessite une vraie logique d'organisation pour en tirer le meilleur"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CircleDot className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* 14. FONCTIONNALITÉS DÉTAILLÉES */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">Toutes les fonctionnalités essentielles</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Link2} title="Lien client unique" description="Un seul lien à partager partout : Google, site, carte, QR code." />
          <FeatureCard icon={FileText} title="Demande centralisée" description="Toutes les demandes au même endroit, structurées et lisibles." />
          <FeatureCard icon={Globe} title="Ajout d'informations" description="Vos clients ajoutent les détails dont vous avez besoin." />
          <FeatureCard icon={Camera} title="Photos et vidéos" description="Vos clients envoient directement les visuels du chantier." />
          <FeatureCard icon={Zap} title="Structuration automatique" description="Le dossier se construit tout seul à partir des infos reçues." />
          <FeatureCard icon={FileText} title="Aide au devis" description="L'IA vous aide à préparer vos propositions plus vite." />
          <FeatureCard icon={Calendar} title="Gestion de rendez-vous" description="Proposez et gérez vos RDV directement depuis Bulbiz." />
          <FeatureCard icon={Bell} title="Relances" description="Ne laissez plus filer un devis sans relance." />
          <FeatureCard icon={Eye} title="Suivi plus clair" description="Vue d'ensemble de tous vos dossiers en cours." />
        </div>
      </SectionWrapper>

      {/* 15. CAS D'USAGE */}
      <SectionWrapper variant="alt">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">Des situations que vous connaissez</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Wrench, metier: "Plomberie", scenario: "Un client vous appelle pour une fuite. Vous êtes sur un chantier. Vous lui envoyez votre lien Bulbiz. Il décrit le problème, ajoute des photos. Vous traitez la demande quand vous êtes disponible." },
            { icon: Plug, metier: "Électricité", scenario: "Une demande arrive via Google. Le client remplit le formulaire, décrit son besoin et ajoute les plans. Tout arrive dans votre dossier, prêt à être traité." },
            { icon: Zap, metier: "Chauffage", scenario: "Entre deux interventions, vous consultez vos nouvelles demandes sur Bulbiz. Un client a besoin d'un remplacement de chaudière. Le dossier est complet, vous pouvez répondre vite." },
            { icon: Paintbrush, metier: "Rénovation", scenario: "Un chantier de rénovation complète. Le client envoie photos, mesures, description pièce par pièce. Tout est structuré dans un seul dossier dans Bulbiz." },
            { icon: HardHat, metier: "Dépannage", scenario: "En dépannage, la rapidité compte. Avec Bulbiz, vous recevez la demande structurée immédiatement. Vous êtes le premier artisan à répondre." },
          ].map(item => (
            <div key={item.metier} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{item.metier}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.scenario}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 16. COMPARAISON */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">
            Pourquoi Bulbiz parle davantage au terrain que les outils trop génériques
          </h2>
        </div>
        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-card overflow-hidden">
          <ComparisonTable />
        </div>
      </SectionWrapper>

      {/* 17. À QUI ÇA S'ADRESSE */}
      <SectionWrapper variant="alt">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">À qui ça s'adresse</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Users, title: "Artisan indépendant", desc: "Vous gérez tout seul et avez besoin de ne rien perdre" },
            { icon: Building2, title: "Petite entreprise du bâtiment", desc: "Vous avez une petite équipe et beaucoup de demandes" },
            { icon: Phone, title: "Demandes dispersées", desc: "Vos clients vous contactent par tous les canaux" },
            { icon: Smartphone, title: "Professionnel terrain", desc: "Vous êtes plus souvent en chantier qu'au bureau" },
            { icon: Hammer, title: "Métier de terrain", desc: "Déplacements fréquents, peu de temps pour l'administratif" },
          ].map(item => (
            <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-card">
          <h3 className="font-semibold text-foreground mb-4">Ce n'est probablement pas l'outil idéal si…</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Vous cherchez un ERP industriel très complexe</li>
            <li>• Vous voulez uniquement une solution de comptabilité pure</li>
            <li>• Vous avez déjà un système parfaitement structuré et adapté</li>
          </ul>
        </div>
      </SectionWrapper>

      {/* 18. FAQ SEO */}
      <SectionWrapper id="faq">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">Questions fréquentes</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqItems} showSchema />
        </div>
      </SectionWrapper>

      {/* 19. CTA FINAL */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="text-heading text-primary-foreground mb-6">Essayez Bulbiz gratuitement</h2>
          <p className="text-primary-foreground/80 text-body-lg mb-8">
            Sans engagement. Simple. Mis en place en quelques minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://app.bulbiz.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Tester gratuitement <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://bulbiz.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 transition-all"
            >
              Découvrir Bulbiz
            </a>
          </div>
          <p className="text-primary-foreground/60 text-sm">
            Pas besoin de changer vos habitudes.<br />
            On s'adapte à votre façon de travailler.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
