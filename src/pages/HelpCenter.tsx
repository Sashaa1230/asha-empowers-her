
import Sidebar from "@/components/Sidebar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/chatbotData";
import { MessageSquare, HelpCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AshaBotIcon from "@/components/AshaBotIcon";

const HelpCenter = () => {
  // Group FAQs by category
  const faqsByCategory = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, typeof faqs>);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-grow overflow-y-auto p-6">
        <h1 className="text-3xl font-bold mb-2">Help Center</h1>
        <p className="text-gray-600 mb-6">Find answers to your questions</p>

        {/* Search */}
        <div className="relative max-w-2xl mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for answers..."
            className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-asha focus:border-transparent"
          />
        </div>
        
        {/* Ask ASHA button */}
        <div className="bg-asha-light p-6 rounded-lg mb-8 max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AshaBotIcon />
            <div>
              <h3 className="font-semibold">Can't find what you're looking for?</h3>
              <p className="text-gray-600 text-sm">Ask ASHA for personalized assistance</p>
            </div>
          </div>
          <Button className="bg-asha hover:bg-asha-dark text-white whitespace-nowrap">
            <Link to="/">Chat with ASHA</Link>
          </Button>
        </div>
        
        {/* FAQs by category */}
        <div className="space-y-8 max-w-3xl">
          {Object.entries(faqsByCategory).map(([category, categoryFaqs]) => (
            <div key={category}>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-asha" />
                {category}
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {categoryFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${category}-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
