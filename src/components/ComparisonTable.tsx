import { Check, Minus } from "lucide-react";

interface ComparisonRow {
  feature: string;
  generic: string;
  assistant: string;
}

const rows: ComparisonRow[] = [
  { feature: "Réception des demandes", generic: "Email ou formulaire classique", assistant: "Lien unique multi-canal" },
  { feature: "Centralisation des infos", generic: "Éparpillées entre outils", assistant: "Un seul endroit" },
  { feature: "Logique terrain", generic: "Pensé pour le bureau", assistant: "Pensé pour le chantier" },
  { feature: "Simplicité d'usage", generic: "Formation souvent nécessaire", assistant: "Prise en main immédiate" },
  { feature: "Usage mobile", generic: "Adaptation secondaire", assistant: "Mobile first" },
  { feature: "Suivi des dossiers", generic: "Manuel, souvent oublié", assistant: "Automatisé" },
  { feature: "Rapidité de traitement", generic: "Lent, multi-étapes", assistant: "Rapide, tout est prêt" },
  { feature: "Quotidien terrain", generic: "Peu adapté aux déplacements", assistant: "Conçu pour le chantier" },
];

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 text-sm font-medium text-muted-foreground"></th>
            <th className="p-4 text-center text-sm font-medium text-muted-foreground">Outil générique</th>
            <th className="p-4 text-center text-sm font-semibold text-primary bg-primary/5 rounded-t-xl">Assistant métier terrain</th>
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
                  <span className="text-sm font-medium text-foreground">{row.assistant}</span>
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
