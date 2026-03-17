import { Check, Minus } from "lucide-react";

interface ComparisonRow {
  feature: string;
  generic: string;
  bulbiz: string;
}

const rows: ComparisonRow[] = [
  { feature: "Réception des demandes", generic: "Email ou formulaire classique", bulbiz: "Lien unique multi-canal" },
  { feature: "Centralisation des infos", generic: "Éparpillées entre outils", bulbiz: "Un seul endroit" },
  { feature: "Logique terrain", generic: "Pensé pour le bureau", bulbiz: "Pensé pour le chantier" },
  { feature: "Simplicité d'usage", generic: "Formation souvent nécessaire", bulbiz: "Prise en main immédiate" },
  { feature: "Usage mobile", generic: "Adaptation secondaire", bulbiz: "Mobile first" },
  { feature: "Suivi des dossiers", generic: "Manuel, souvent oublié", bulbiz: "Automatisé" },
  { feature: "Rapidité de traitement", generic: "Lent, multi-étapes", bulbiz: "Rapide, tout est prêt" },
];

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 text-sm font-medium text-muted-foreground"></th>
            <th className="p-4 text-center text-sm font-medium text-muted-foreground">Outil générique</th>
            <th className="p-4 text-center text-sm font-semibold text-primary bg-primary/5 rounded-t-xl">Bulbiz</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border">
              <td className="p-4 text-sm font-medium text-foreground">{row.feature}</td>
              <td className="p-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Minus className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{row.generic}</span>
                </div>
              </td>
              <td className="p-4 text-center bg-primary/5">
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{row.bulbiz}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
