import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "alt" | "dark";
}

const SectionWrapper = ({ children, className, id, variant = "default" }: SectionWrapperProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "fade-in-section section-padding",
        variant === "default" && "bg-background",
        variant === "alt" && "bg-card",
        variant === "dark" && "bg-foreground text-background",
        className
      )}
    >
      <div className="container-wide">{children}</div>
    </section>
  );
};

export default SectionWrapper;
