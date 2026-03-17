

# Plan — Corriger la description de l'IA (pas de devis, mais analyse photo/vocal/devis pour liste matériel et suggestions)

## Contexte
Actuellement, l'IA est décrite comme aidant à "préparer des devis" ou "aide au devis". Il faut remplacer par : **l'IA analyse les photos, notes vocales et devis pour générer des listes de matériel et des suggestions**.

## Fichiers et modifications

### 1. `src/pages/Index.tsx`

**Section IA Métier (lignes 232-250)** :
- Remplacer "Vous préparez un devis. Vous dictez une note vocale." par un texte centré sur l'analyse : "Vous prenez une photo du chantier. Vous dictez une note vocale. Vous recevez un devis fournisseur."
- Remplacer "Bulbiz comprend et aide à structurer les besoins" par "Bulbiz analyse et génère automatiquement une liste de matériel et des suggestions adaptées."
- Remplacer la liste de bénéfices IA : "Aide à la préparation de devis" → "Analyse de photos chantier", "Notes vocales comprises" → "Compréhension des notes vocales", ajouter "Liste de matériel automatique", "Suggestions adaptées au chantier"

**Section Démo vidéo (ligne 360)** :
- Remplacer `{ step: "4", label: "Devis facilité", desc: "L'IA vous aide à préparer vos propositions" }` par `{ step: "4", label: "Liste matériel générée", desc: "L'IA analyse photos et infos pour suggérer le matériel nécessaire" }`

**Section Fonctionnalités (ligne 451)** :
- Remplacer `FeatureCard "Aide au devis"` par "Analyse intelligente" avec description "L'IA analyse photos, notes vocales et devis pour générer listes de matériel et suggestions."

**Section Fonctionnalités (ligne 453)** :
- Remplacer "Ne laissez plus filer un devis sans relance" par "Ne laissez plus filer une demande sans relance"

### 2. `src/pages/BulbizAvis.tsx` (ligne 60)
- Dans "Ce qu'on aime", remplacer "IA utile et orientée métier" par "IA qui analyse photos et vocaux pour suggérer le matériel"

### 3. `src/pages/ApplicationArtisan.tsx` et `src/pages/LogicielBtp.tsx`
- Vérifier et corriger toute mention d'IA liée aux devis pour la remplacer par l'analyse photo/vocal/matériel

