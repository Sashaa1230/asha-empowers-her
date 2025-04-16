
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JobListings from "./pages/JobListings";
import Events from "./pages/Events";
import Mentorship from "./pages/Mentorship";
import Profile from "./pages/Profile";
import HelpCenter from "./pages/HelpCenter";
import ChatBubble from "./components/ChatBubble";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/events" element={<Events />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/help" element={<HelpCenter />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* Show chat bubble on pages other than home */}
      {location.pathname !== "/" && <ChatBubble />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
