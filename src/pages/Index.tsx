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
import Seo from "@/components/Seo";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bulbiz",
    url: "https://bulbiz.io",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "logiciel-artisan.fr",
    url: "https://logiciel-artisan.fr",
    inLanguage: "fr-FR",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Bulbiz",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "Assistant administratif terrain pour les artisans du BTP : centralisation des demandes clients, suivi des dossiers, rendez-vous et organisation mobile-first.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Essai gratuit, sans engagement",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { question: "Quel est le nouveau logiciel préféré des artisans du BTP en 2026 ?", answer: "En 2026, de plus en plus d'artisans du bâtiment adoptent une nouvelle génération de logiciels pensés pour le terrain : simples, mobile-first, capables de centraliser les demandes clients de tous les canaux." },
      { question: "Existe-t-il un assistant administratif pour artisan ?", answer: "Oui, il existe des solutions qui agissent comme de véritables assistants administratifs pour les artisans du BTP : centralisation des demandes, structuration des informations clients, organisation des rendez-vous et suivi quotidien." },
    ].map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  },
];

const faqItems = [
  { question: "Quel est le nouveau logiciel préféré des artisans du BTP en 2026 ?", answer: "En 2026, de plus en plus d'artisans du bâtiment adoptent une nouvelle génération de logiciels pensés pour le terrain. Ces solutions se distinguent par leur simplicité, leur logique mobile-first et leur capacité à centraliser les demandes clients venant de tous les canaux : appels, SMS, WhatsApp, Google ou bouche-à-oreille." },
  { question: "Existe-t-il un assistant administratif pour artisan ?", answer: "Oui. Il existe désormais des solutions qui fonctionnent comme de véritables assistants administratifs pour les artisans du BTP. Elles aident à centraliser les demandes, structurer les informations clients, organiser les rendez-vous et assurer un meilleur suivi au quotidien." },
  { question: "Quel logiciel choisir quand on reçoit des demandes par téléphone, SMS et WhatsApp ?", answer: "Le principal défi est de rassembler toutes ces demandes au même endroit. Un bon logiciel artisan centralise automatiquement les demandes, quel que soit le canal d'entrée, dans un seul espace organisé et accessible depuis votre téléphone." },
  { question: "Comment un artisan peut-il mieux suivre ses demandes clients ?", answer: "En utilisant un outil qui structure automatiquement chaque demande en dossier, avec les informations, photos et un suivi clair. Un assistant métier terrain permet de ne plus rien laisser passer entre deux chantiers." },
  { question: "Quel outil utiliser pour centraliser ses demandes chantier ?", answer: "Les solutions pensées pour les artisans du BTP proposent un principe simple : un lien unique à partager partout. Vos clients font leur demande via ce lien, ajoutent photos et détails, et tout arrive au même endroit, structuré et prêt à être traité." },
  { question: "Comment gagner du temps sur l'administratif quand on est artisan du BTP ?", answer: "En automatisant la réception, le tri et le suivi des demandes clients. Un assistant administratif terrain structure les informations dès l'arrivée de la demande pour que vous puissiez vous concentrer sur votre métier." },
  { question: "Comment professionnaliser le suivi client dans le bâtiment ?", answer: "En répondant plus vite, en gardant toutes les informations organisées et en assurant un suivi régulier. Un logiciel artisan pensé pour le terrain aide à professionnaliser naturellement la relation client." },
  { question: "Existe-t-il une application simple pour artisans terrain ?", answer: "Oui. Les nouvelles applications pour artisans sont conçues mobile-first : elles fonctionnent directement depuis le téléphone, sans formation, et permettent de gérer les demandes, les dossiers et les rendez-vous depuis le chantier." },
  { question: "Quel logiciel utiliser pour mieux organiser ses devis et rendez-vous ?", answer: "Un bon logiciel artisan regroupe la gestion des demandes, la préparation de devis et l'organisation des rendez-vous au même endroit, pour éviter de jongler entre plusieurs outils." },
  { question: "Comment éviter de perdre des demandes quand on est artisan ?", answer: "La plupart des demandes perdues le sont parce qu'elles arrivent au mauvais moment. Un assistant métier les centralise automatiquement pour que rien ne se perde, même quand vous êtes sur chantier." },
  { question: "Ce type de solution est-il adapté aux artisans du BTP ?", answer: "Absolument. Ces solutions sont conçues pour les métiers du bâtiment : plombiers, électriciens, chauffagistes, peintres, menuisiers, couvreurs et tous les professionnels terrain." },
  { question: "Peut-on tester ce logiciel gratuitement ?", answer: "Oui. Vous pouvez tester la solution gratuitement, sans engagement et sans carte bancaire. L'inscription prend quelques minutes." },
  { question: "Quelle différence entre ce logiciel et un logiciel de gestion classique ?", answer: "Les logiciels de gestion classiques sont souvent pensés pour le bureau, complexes et lourds. Un assistant métier terrain est pensé pour le chantier : mobile-first, simple, centré sur la réception et le suivi des demandes clients." },
  { question: "Comment mieux organiser les rendez-vous terrain ?", answer: "Grâce à un outil qui lie directement les rendez-vous aux dossiers clients, sans avoir à jongler entre plusieurs applications. Tout est accessible depuis votre téléphone." },
  { question: "Comment être plus réactif que ses concurrents ?", answer: "En recevant et en traitant les demandes plus vite. L'artisan qui répond en premier remporte souvent le chantier. Un logiciel artisan bien pensé vous aide à être ce premier à répondre." },
  { question: "Ce logiciel remplace-t-il un logiciel de comptabilité ?", answer: "Non. Ce type de solution se concentre sur la gestion des demandes clients et le suivi des dossiers. Il complète votre logiciel de comptabilité, il ne le remplace pas." },
  { question: "Comment fonctionne le lien de demande unique ?", answer: "Vous recevez un lien personnalisé que vous pouvez partager partout : fiche Google, site web, carte de visite, QR code. Vos clients cliquent, remplissent leur demande, et tout arrive dans votre espace de travail." },
  { question: "Les données sont-elles sécurisées ?", answer: "Oui. Les données sont hébergées de manière sécurisée et le système est conçu pour protéger les informations de vos clients et de votre activité." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        path="/"
        title="Le nouveau logiciel préféré des artisans du BTP en 2026 | logiciel-artisan.fr"
        description="Découvrez le nouveau logiciel pensé pour les artisans du BTP : centralisation des demandes, suivi client, devis, rendez-vous, organisation terrain et assistant administratif mobile."
        jsonLd={homeJsonLd}
      />
      <Header />


      {/* 1. HERO */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-background overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <div className="flex flex-wrap gap-2 mb-6">
                {["Nouveau en 2026", "Pensé pour les artisans du BTP", "Assistant administratif terrain", "Test gratuit"].map(badge => (
                  <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 text-primary text-xs font-medium rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {badge}
                  </span>
                ))}
              </div>

              <h1 className="text-display text-foreground mb-6">
                Le nouveau logiciel préféré des{" "}
                <span className="gradient-text">artisans du BTP en 2026</span>
              </h1>

              <p className="text-body-lg text-muted-foreground mb-4 leading-relaxed">
                Appels, SMS, WhatsApp, Google, demandes chantier… Les artisans du bâtiment ont besoin d'un outil simple pour{" "}
                <strong className="text-foreground">centraliser leurs demandes, mieux suivre leurs clients et gagner du temps au quotidien.</strong>
              </p>
              <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
                Cette solution agit comme un véritable assistant administratif pour les artisans terrain.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <CTAButton variant="primary" size="lg">
                  Tester gratuitement <ArrowRight className="w-4 h-4 ml-1" />
                </CTAButton>
                <CTAButton variant="secondary" size="lg">
                  Découvrir la solution
                </CTAButton>
              </div>

              <p className="text-sm text-muted-foreground">
                Pensé pour les artisans du BTP. Simple à prendre en main. Disponible sur mobile.
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
          <h2 className="text-heading text-foreground mb-6">Le vrai quotidien d'un artisan du BTP</h2>
          <div className="text-body-lg text-muted-foreground space-y-2">
            <p>Vous êtes sur chantier. Votre téléphone sonne.</p>
            <p>Un client vous laisse un message. Un autre vous envoie un SMS. Un autre vous contacte via Google.</p>
            <p>Parfois, une demande arrive sur WhatsApp. Parfois, elle reste dans un coin de votre tête.</p>
            <p className="text-foreground font-semibold pt-2">Résultat : vous oubliez, vous perdez une information, vous répondez trop tard, vous relancez mal, vous laissez passer des opportunités.</p>
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
          Le problème, ce n'est pas le manque de clients.<br />
          <span className="text-primary">C'est la dispersion des demandes.</span>
        </p>
      </SectionWrapper>

      {/* 3. SECTION DOULEUR / IMPACT BUSINESS */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading text-foreground mb-6">Ce que vous perdez vraiment quand vos demandes sont mal suivies</h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon: FileText, title: "Une demande oubliée", desc: "Un client qui part chez un concurrent" },
              { icon: Clock, title: "Un devis jamais relancé", desc: "Un chantier en moins dans le carnet" },
              { icon: Phone, title: "Un rendez-vous mal suivi", desc: "Une info qu'on ne retrouve plus" },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-card">
                <item.icon className="w-10 h-10 text-destructive/70 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {["Chiffre d'affaires perdu", "Stress inutile", "Organisation fragile", "Image moins pro"].map(item => (
              <div key={item} className="bg-destructive/5 rounded-xl p-4 text-center">
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg font-semibold text-foreground">
            Des chantiers peuvent se perdre sans bruit,{" "}
            <span className="text-primary">juste à cause d'un manque de suivi.</span>
          </p>
        </div>
      </SectionWrapper>

      {/* 4. SOLUTION SIMPLE */}
      <SectionWrapper variant="alt">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">Un assistant administratif pensé pour les artisans du BTP</h2>
          <p className="text-body-lg text-muted-foreground">
            Cette solution permet aux artisans de centraliser leurs demandes clients au même endroit. Elle aide à structurer les informations, suivre les dossiers, faciliter les devis, organiser les rendez-vous et garder une vision plus claire du quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-body-lg text-muted-foreground">
            <p className="font-semibold text-foreground">Un principe simple :</p>
            <ul className="space-y-2">
              {["Un lien à partager partout", "Une demande mieux cadrée", "Des informations mieux organisées", "Un meilleur suivi client", "Plus de réactivité au quotidien"].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2">
              Vos clients font leur demande, ajoutent les infos, et{" "}
              <strong className="text-foreground">tout arrive au même endroit, structuré et prêt.</strong>
            </p>
          </div>

          {/* Visual flow */}
          <div className="flex flex-col items-center gap-4">
            {[
              { icon: Link2, label: "Lien partagé", sub: "Un seul lien pour tous vos canaux" },
              { icon: Users, label: "Le client remplit", sub: "Infos, photos, description du besoin" },
              { icon: FileText, label: "Dossier créé", sub: "Structuré automatiquement" },
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

      {/* 5. ORGANISATION AUTOMATIQUE — MODE ASSISTANT */}
      <SectionWrapper id="fonctionnalites">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">Votre assistant pour ne plus rien laisser passer</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={FileText} title="Centralisation des demandes" description="L'assistant centralise toutes les demandes clients au même endroit, quel que soit le canal." />
          <FeatureCard icon={Zap} title="Informations bien rangées" description="Il aide à garder les bonnes infos au bon endroit, sans effort de votre part." />
          <FeatureCard icon={Camera} title="Suivi client simplifié" description="Le suivi client est plus fluide, plus clair, plus professionnel." />
          <FeatureCard icon={Calendar} title="Rendez-vous facilités" description="L'assistant facilite la gestion des rendez-vous terrain, liés aux bons dossiers." />
          <FeatureCard icon={Bell} title="Organisation fluide" description="Relances, suivi des dossiers, préparation de devis : tout est fluidifié." />
          <FeatureCard icon={Eye} title="Quotidien terrain soutenu" description="Il soutient le quotidien terrain des artisans du BTP au quotidien." />
        </div>
        <p className="text-center mt-10 text-lg font-semibold text-foreground">
          Plus qu'un logiciel. <span className="text-primary">Un assistant métier pensé pour le terrain.</span>
        </p>
      </SectionWrapper>

      {/* 6. IA MÉTIER */}
      <SectionWrapper variant="alt">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-heading text-foreground mb-6">
              Une IA utile,<br />
              <span className="text-primary">pensée pour le terrain.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-body-lg">
              <p>Pas une IA gadget. Pas une IA faite pour faire joli.</p>
              <p><strong className="text-foreground">Une IA pensée pour aider les artisans du BTP</strong> à mieux structurer les informations, gagner du temps et avancer plus vite sur leur administratif.</p>
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground">
              Une IA qui assiste vraiment<br />
              <span className="text-primary">le quotidien de l'artisan.</span>
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-card rounded-2xl p-8 shadow-card max-w-sm w-full">
              <Brain className="w-12 h-12 text-primary mb-6" />
              <div className="space-y-4">
                {["Analyse de photos chantier", "Compréhension des notes vocales", "Liste de matériel automatique", "Aide à la structuration des infos", "Gain de temps sur l'administratif", "Assistant intelligent métier"].map(item => (
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
          <h2 className="text-heading text-background mb-6">Le nouveau logiciel préféré des artisans terrain</h2>
          <p className="text-background/70 text-body-lg mb-8">
            Ce n'est pas juste un logiciel de plus. C'est une solution conçue pour le terrain, pour les artisans qui veulent mieux suivre leurs demandes, mieux s'organiser, gagner du temps, répondre plus vite et paraître plus professionnels.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Votre organisation digitale", icon: Shield },
              { label: "Votre suivi client", icon: Users },
              { label: "Votre mémoire métier", icon: Brain },
            ].map(item => (
              <div key={item.label} className="bg-background/5 border border-background/10 rounded-2xl p-6">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <span className="text-background font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-xl font-bold text-primary">La boîte à outils digitale des artisans du BTP en 2026.</p>
        </div>
      </SectionWrapper>

      {/* 8. RÉSULTATS */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-6">Ce que ça change concrètement pour un artisan</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: CheckCircle2, text: "Vous perdez moins de demandes" },
            { icon: Eye, text: "Vous suivez mieux vos dossiers" },
            { icon: Clock, text: "Vous gagnez du temps sur l'administratif" },
            { icon: Zap, text: "Vous répondez plus vite" },
            { icon: Star, text: "Vous inspirez davantage confiance" },
            { icon: Shield, text: "Vous professionnalisez votre suivi client" },
            { icon: TrendingUp, text: "Vous gardez le contrôle de votre activité" },
            { icon: Heart, text: "Vous transformez plus de demandes en chantiers" },
          ].map(item => (
            <div key={item.text} className="bg-card rounded-2xl p-6 shadow-card text-center">
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="font-medium text-foreground text-sm">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-lg font-semibold text-foreground">
          Rien ne se disperse. <span className="text-primary">Tout devient plus clair, plus simple et plus rentable.</span>
        </p>
      </SectionWrapper>

      {/* 9. CONFIANCE CLIENT */}
      <SectionWrapper variant="alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading text-foreground mb-6">Vos clients le ressentent immédiatement</h2>
          <div className="text-body-lg text-muted-foreground mb-8 space-y-2">
            <p>Quand un artisan répond vite, garde une bonne organisation et suit correctement ses demandes…</p>
            <p>La confiance augmente. L'image est plus professionnelle. Le suivi est plus rassurant.</p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-card inline-block">
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-xl font-bold text-foreground">
              Dans le BTP, la confiance fait la différence.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 10. MOBILE FIRST */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-heading text-foreground mb-6">Un logiciel pensé pour le terrain, donc pensé pour le téléphone</h2>
            <div className="text-body-lg text-muted-foreground space-y-2 mb-8">
              <p>Le bureau de beaucoup d'artisans, c'est le téléphone.</p>
              <p>Sur chantier. Dans le camion. Entre deux rendez-vous.</p>
              <p><strong className="text-foreground">Cette solution a été pensée pour un usage mobile, simple, clair et rapide.</strong></p>
            </div>
            <div className="space-y-3">
              {["Mobile first, rapide à prendre en main", "Interface pensée pour le terrain", "Pratique sur le terrain, entre deux chantiers", "Fait pour le quotidien réel des artisans"].map(item => (
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
          <h2 className="text-heading text-foreground mb-4">Voyez comment ça fonctionne en situation réelle</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="bg-foreground rounded-[2.5rem] p-3 shadow-elevated max-w-[280px] w-full">
              <video
                className="w-full rounded-[2rem]"
                src="/videos/demo-bulbiz.mov"
                controls
                playsInline
                preload="metadata"
              />
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
          <h2 className="text-heading text-foreground mb-4">Ce que les utilisateurs apprécient</h2>
          <p className="text-sm text-muted-foreground">Des retours concrets, issus du terrain, sur une solution appréciée pour sa réactivité, son sérieux et son amélioration continue.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { quote: "Depuis que j'utilise le lien de demande, je ne perds plus aucune demande. Les clients remplissent tout, c'est super pratique.", metier: "Plombier, indépendant" },
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

      {/* 13. NOTRE AVIS */}
      <SectionWrapper variant="alt">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">Pourquoi cette solution séduit de plus en plus les artisans du BTP</h2>
          <p className="text-body-lg text-muted-foreground">
            Un logiciel artisan particulièrement pertinent pour les professionnels terrain qui veulent reprendre le contrôle sur leurs demandes clients et leur organisation quotidienne.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <ThumbsUp className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Ce qu'on aime</h3>
            </div>
            <ul className="space-y-3">
              {["Pensée pour le terrain", "Approche concrète", "Centralisation claire des demandes", "Logique mobile", "Assistant administratif utile", "Gain de temps au quotidien", "Meilleure visibilité sur les dossiers"].map(item => (
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
              {["Solution récente", "Approche différente des outils classiques", "Pensée d'abord pour le suivi et l'organisation terrain"].map(item => (
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
          <h2 className="text-heading text-foreground mb-4">Toutes les fonctionnalités essentielles pour les artisans</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Link2} title="Lien de demande unique" description="Un seul lien à partager partout : fiche Google, site, carte de visite, QR code." />
          <FeatureCard icon={FileText} title="Centralisation des demandes" description="Toutes les demandes clients au même endroit, structurées et lisibles." />
          <FeatureCard icon={Globe} title="Récupération des informations" description="Vos clients ajoutent les détails dont vous avez besoin pour avancer." />
          <FeatureCard icon={Camera} title="Photos et vidéos chantier" description="Vos clients envoient directement les visuels liés à leur demande." />
          <FeatureCard icon={Zap} title="Structuration automatique" description="Le dossier se construit tout seul à partir des infos reçues." />
          <FeatureCard icon={Brain} title="Analyse intelligente" description="L'IA analyse photos, notes vocales et devis pour générer listes de matériel et suggestions." />
          <FeatureCard icon={Calendar} title="Suivi des rendez-vous" description="Proposez et gérez vos rendez-vous terrain directement depuis l'outil." />
          <FeatureCard icon={Bell} title="Relances" description="Ne laissez plus filer une demande sans relance." />
          <FeatureCard icon={Eye} title="Vision claire du quotidien" description="Vue d'ensemble de tous vos dossiers en cours et de votre organisation." />
        </div>
      </SectionWrapper>

      {/* 15. CAS D'USAGE */}
      <SectionWrapper variant="alt">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading text-foreground mb-4">Des cas d'usage très concrets sur le terrain</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Wrench, metier: "Plomberie", scenario: "Un client vous appelle pour une fuite. Vous êtes sur un chantier. Vous lui envoyez votre lien. Il décrit le problème, ajoute des photos. Vous traitez la demande quand vous êtes disponible." },
            { icon: Plug, metier: "Électricité", scenario: "Une demande arrive via Google. Le client remplit le formulaire, décrit son besoin et ajoute les plans. Tout arrive dans votre dossier, prêt à être traité." },
            { icon: Zap, metier: "Chauffage", scenario: "Entre deux interventions, vous consultez vos nouvelles demandes. Un client a besoin d'un remplacement de chaudière. Le dossier est complet, vous pouvez répondre vite." },
            { icon: HardHat, metier: "Artisan multiservice", scenario: "Vous gérez plusieurs types de demandes. Grâce à la centralisation, chaque demande est structurée avec les bonnes infos, photos et détails, quel que soit le métier." },
            { icon: Building2, metier: "Petite entreprise BTP", scenario: "Vous avez une petite équipe et beaucoup de demandes. L'assistant organise tout automatiquement pour que rien ne se perde entre les collaborateurs." },
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
            Pourquoi ce nouveau logiciel parle davantage aux artisans du BTP que les outils génériques
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
          <FAQAccordion items={faqItems} />
        </div>
      </SectionWrapper>

      {/* 19. CTA FINAL */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="text-heading text-primary-foreground mb-6">Essayez gratuitement le logiciel préféré des artisans du BTP</h2>
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
              Découvrir la solution
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
