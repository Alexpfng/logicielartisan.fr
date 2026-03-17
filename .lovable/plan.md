

# Plan — logiciel-artisan.fr

## Vue d'ensemble
Site vitrine éditorial et de conversion pour Bulbiz, ciblant les artisans du bâtiment. Design premium, mobile-first, SEO-optimisé, avec un ton terrain et rassurant.

## Design System
- **Couleurs** : Bleu profond (#2563EB) pour les CTA, fond blanc cassé (#F8FAFC), texte bleu-noir (#0F172A)
- **Typo** : Inter/Geist Sans, H1 clamp(2.5rem–4rem), body 18px, line-height 1.6
- **Composants** : Cartes arrondies (16px), ombres douces, pas de bordures dures
- **Motion** : Fade-in + translateY subtil au scroll, hover scale 1.02 sur les boutons

## Pages à créer (8 pages)

### 1. Page d'accueil `/`
Toutes les 21 sections demandées dans l'ordre :
- **Header sticky** : Logo "logiciel-artisan.fr", nav (Avis, Fonctionnalités, FAQ), CTAs
- **Hero** : Titre fort "Vous ne manquez pas de clients. Vous perdez des demandes.", mockup mobile, badges de réassurance, double CTA
- **Le quotidien** : Narration terrain avec cartes icônes (appel, SMS, WhatsApp, Google, note oubliée)
- **Impact business** : Conséquences visuelles (chantiers perdus, CA invisible, stress)
- **Solution simple** : Schéma lien unique → client remplit → dossier créé
- **Organisation auto** : Cartes bénéfices (dossier auto, photos, RDV, relances)
- **IA métier** : Présentation concrète, pas gadget
- **Positionnement** : "La boîte à outils digitale de l'artisan"
- **Résultats** : Projection positive des bénéfices
- **Confiance client** : Bloc émotionnel
- **Mobile first** : Visuel usage terrain
- **Démo vidéo** : Zone valorisante avec mockup iPhone et étapes clés
- **Avis / preuves sociales** : Cartes témoignages (placeholder pour vrais avis)
- **Notre avis sur Bulbiz** : Style éditorial review avec "Ce qu'on aime" / "À garder en tête"
- **Fonctionnalités** : Grille de cartes premium liées à des bénéfices terrain
- **Cas d'usage** : 4-5 scénarios métier (plombier, électricien, chauffagiste, rénovation)
- **Comparaison** : Tableau élégant Bulbiz vs outil générique
- **À qui ça s'adresse** : Cartes profils + section honnête "pas pour vous si…"
- **FAQ SEO** : 15+ questions avec données structurées, accordéon
- **CTA final** : Section de conversion forte
- **Footer** : Navigation, liens, mentions légales

### 2. `/bulbiz-avis` — Page review éditoriale détaillée
### 3. `/logiciel-artisan` — Page pilier SEO (1500+ mots)
### 4. `/application-artisan` — Page SEO usage mobile
### 5. `/logiciel-btp` — Page SEO complémentaire BTP
### 6. `/faq` — FAQ complète dédiée
### 7. `/mentions-legales` — Page mentions légales
### 8. `/politique-de-confidentialite` — Page politique de confidentialité

## SEO
- H1 unique par page, meta titles/descriptions optimisés
- URLs propres, maillage interne entre toutes les pages
- FAQ avec schema markup (JSON-LD)
- Lazy loading images, alt texts descriptifs
- Intégration naturelle des mots-clés cibles

## Composants réutilisables
- `CTAButton` (primary/secondary, liens vers app.bulbiz.io et bulbiz.io)
- `SectionWrapper` (espacement vertical cohérent, fade-in au scroll)
- `FeatureCard`, `TestimonialCard`, `UseCaseCard`
- `ComparisonTable`
- `FAQAccordion` avec schema JSON-LD
- `Header` sticky avec menu mobile
- `Footer` complet
- `PhoneMockup` pour les visuels produit

## Interactions
- Header sticky avec backdrop-blur
- Sections fade-in au scroll (Intersection Observer)
- Boutons hover avec scale et ombre
- FAQ accordéon animé
- Navigation mobile (sheet/drawer)

