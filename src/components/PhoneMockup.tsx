import { cn } from "@/lib/utils";
import { Bell, MessageSquare, FileText, CheckCircle2 } from "lucide-react";

interface PhoneMockupProps {
  className?: string;
}

const PhoneMockup = ({ className }: PhoneMockupProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Phone frame */}
      <div className="relative mx-auto w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] bg-foreground rounded-[3rem] p-3 shadow-elevated">
        {/* Screen */}
        <div className="w-full h-full bg-card rounded-[2.25rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="h-12 bg-primary flex items-center justify-center">
            <div className="w-20 h-5 bg-foreground/20 rounded-full" />
          </div>

          {/* App content */}
          <div className="p-4 space-y-3">
            <div className="text-xs font-semibold text-foreground mb-3">Nouvelles demandes</div>

            {/* Notification cards */}
            {[
              { icon: Bell, label: "Appel entrant", sub: "M. Dupont — Fuite robinet", color: "text-primary" },
              { icon: MessageSquare, label: "SMS reçu", sub: "Mme Martin — Devis peinture", color: "text-green-600" },
              { icon: FileText, label: "Formulaire Google", sub: "Rénovation salle de bain", color: "text-amber-600" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-accent rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-card flex items-center justify-center flex-shrink-0">
                  <item.icon className={cn("w-4 h-4", item.color)} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-foreground">{item.label}</div>
                  <div className="text-xs text-muted-foreground truncate">{item.sub}</div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs text-primary font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Tout est centralisé</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
    </div>
  );
};

export default PhoneMockup;
