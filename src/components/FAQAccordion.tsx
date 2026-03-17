import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  showSchema?: boolean;
}

const FAQAccordion = ({ items, showSchema = false }: FAQAccordionProps) => {
  return (
    <>
      {showSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": items.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              }
            }))
          })
        }} />
      )}
      <Accordion type="single" collapsible className="w-full space-y-3">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="bg-card rounded-xl border-none shadow-card px-6 data-[state=open]:shadow-card-hover transition-shadow"
          >
            <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5 text-foreground">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default FAQAccordion;
