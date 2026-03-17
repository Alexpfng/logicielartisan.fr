import { cn } from "@/lib/utils";

interface CTAButtonProps {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  className?: string;
  children: React.ReactNode;
}

const CTAButton = ({ variant = "primary", size = "default", className, children }: CTAButtonProps) => {
  const href = variant === "primary" ? "https://app.bulbiz.io" : "https://bulbiz.io";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-primary-dark shadow-lg hover:shadow-xl hover:scale-[1.02]",
        variant === "secondary" &&
          "bg-card text-foreground border border-border hover:border-primary/30 hover:bg-accent shadow-card hover:shadow-card-hover hover:scale-[1.02]",
        size === "default" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        className
      )}
    >
      {children}
    </a>
  );
};

export default CTAButton;
