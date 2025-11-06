import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Mis tüüpi ehitustöid teete?",
      answer: "We specialize in both residential and commercial construction projects, including new builds, renovations, extensions, and remodeling. From single-family homes to multi-story commercial buildings, our team has the expertise to handle projects of all sizes."
    },
    {
      question: "Kui kaua tavaline ehitusprojekt aega võtab?",
      answer: "Project timelines vary depending on the scope and complexity. A residential renovation might take 2-4 months, while new construction can take 6-12 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, BuildPro is fully licensed, bonded, and insured. We maintain all necessary certifications and insurance coverage to protect both our team and our clients. We're happy to provide proof of licensing and insurance upon request."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Absolutely! We offer free, no-obligation consultations and estimates for all potential projects. During this meeting, we'll discuss your vision, assess the site, and provide a detailed cost estimate and timeline."
    },
    {
      question: "What is your payment schedule?",
      answer: "We typically work on a milestone-based payment schedule. This usually includes an initial deposit, progress payments at key project milestones, and a final payment upon completion. We'll outline the specific payment terms in your project contract."
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Yes, we manage all necessary permits and coordinate required inspections with local authorities. This is included in our comprehensive project management service, ensuring full compliance with all building codes and regulations."
    },
    {
      question: "What warranty do you offer on your work?",
      answer: "We stand behind our work with a comprehensive warranty. Structural work typically comes with a 5-year warranty, while other work is covered for 1-2 years. We also help coordinate manufacturer warranties for materials and appliances."
    },
    {
      question: "Kas ma võin teha muudatusi keset ehitustööd?",
      answer: "While we encourage finalizing plans before construction begins, we understand that changes may be necessary. We can accommodate modifications, though they may affect the timeline and budget. We'll always discuss any implications before proceeding with changes."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Korduma Kippuvad Küsimused</h2>
          <p className="text-xl text-muted-foreground">
            Leia vastused kõige tavalisematele küsimustele ehitustöös
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
