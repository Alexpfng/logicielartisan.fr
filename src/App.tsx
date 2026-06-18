import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const BulbizAvis = lazy(() => import("./pages/BulbizAvis.tsx"));
const LogicielArtisan = lazy(() => import("./pages/LogicielArtisan.tsx"));
const ApplicationArtisan = lazy(() => import("./pages/ApplicationArtisan.tsx"));
const LogicielBtp = lazy(() => import("./pages/LogicielBtp.tsx"));
const FAQ = lazy(() => import("./pages/FAQ.tsx"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales.tsx"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite.tsx"));
const LogicielDevisFactureArtisan = lazy(() => import("./pages/LogicielDevisFactureArtisan.tsx"));
const LogicielGestionChantier = lazy(() => import("./pages/LogicielGestionChantier.tsx"));
const LogicielPlanningArtisan = lazy(() => import("./pages/LogicielPlanningArtisan.tsx"));
const AssistantAdministratifArtisan = lazy(() => import("./pages/AssistantAdministratifArtisan.tsx"));
const OutilGestionArtisanBtp = lazy(() => import("./pages/OutilGestionArtisanBtp.tsx"));
const LogicielElectricien = lazy(() => import("./pages/LogicielElectricien.tsx"));
const LogicielChauffagiste = lazy(() => import("./pages/LogicielChauffagiste.tsx"));
const LogicielMenuisier = lazy(() => import("./pages/LogicielMenuisier.tsx"));
const LogicielPeintre = lazy(() => import("./pages/LogicielPeintre.tsx"));
const LogicielCouvreur = lazy(() => import("./pages/LogicielCouvreur.tsx"));
const LogicielMacon = lazy(() => import("./pages/LogicielMacon.tsx"));
const LogicielCarreleur = lazy(() => import("./pages/LogicielCarreleur.tsx"));
const LogicielGestionClientArtisan = lazy(() => import("./pages/LogicielGestionClientArtisan.tsx"));
const MeilleurLogicielArtisan = lazy(() => import("./pages/MeilleurLogicielArtisan.tsx"));
const LogicielArtisanGratuit = lazy(() => import("./pages/LogicielArtisanGratuit.tsx"));
const AutomatisationIaBtp = lazy(() => import("./pages/AutomatisationIaBtp.tsx"));
const IaPourArtisans = lazy(() => import("./pages/IaPourArtisans.tsx"));
const AutomatiserDevisArtisan = lazy(() => import("./pages/AutomatiserDevisArtisan.tsx"));
const AutomatiserRelancesClients = lazy(() => import("./pages/AutomatiserRelancesClients.tsx"));
const AutomatiserAdministratifArtisan = lazy(() => import("./pages/AutomatiserAdministratifArtisan.tsx"));
const IaSuiviChantier = lazy(() => import("./pages/IaSuiviChantier.tsx"));



const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bulbiz-avis" element={<BulbizAvis />} />
            <Route path="/logiciel-artisan" element={<LogicielArtisan />} />
            <Route path="/application-artisan" element={<ApplicationArtisan />} />
            <Route path="/logiciel-btp" element={<LogicielBtp />} />
            <Route path="/logiciel-devis-facture-artisan" element={<LogicielDevisFactureArtisan />} />
            <Route path="/logiciel-gestion-chantier" element={<LogicielGestionChantier />} />
            <Route path="/logiciel-planning-artisan" element={<LogicielPlanningArtisan />} />
            <Route path="/assistant-administratif-artisan" element={<AssistantAdministratifArtisan />} />
            <Route path="/outil-gestion-artisan-btp" element={<OutilGestionArtisanBtp />} />
            <Route path="/logiciel-electricien" element={<LogicielElectricien />} />
            <Route path="/logiciel-chauffagiste" element={<LogicielChauffagiste />} />
            <Route path="/logiciel-menuisier" element={<LogicielMenuisier />} />
            <Route path="/logiciel-peintre" element={<LogicielPeintre />} />
            <Route path="/logiciel-couvreur" element={<LogicielCouvreur />} />
            <Route path="/logiciel-macon" element={<LogicielMacon />} />
            <Route path="/logiciel-carreleur" element={<LogicielCarreleur />} />
            <Route path="/logiciel-gestion-client-artisan" element={<LogicielGestionClientArtisan />} />
            <Route path="/meilleur-logiciel-artisan" element={<MeilleurLogicielArtisan />} />
            <Route path="/logiciel-artisan-gratuit" element={<LogicielArtisanGratuit />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
