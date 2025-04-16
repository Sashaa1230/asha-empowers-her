
import Sidebar from "@/components/Sidebar";
import ChatContainer from "@/components/ChatContainer";
import ResourcesPanel from "@/components/ResourcesPanel";
import { useEffect, useState } from "react";

const Index = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);
    
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-grow flex overflow-hidden">
        <div className="flex-grow overflow-hidden">
          <ChatContainer />
        </div>
        <div className="w-80 hidden md:block overflow-y-auto">
          <ResourcesPanel />
        </div>
      </div>
      {isMobileView && (
        <div className="absolute bottom-20 right-5 p-2 bg-white bg-opacity-70 rounded-full text-xs text-gray-600">
          Try voice input!
        </div>
      )}
    </div>
  );
};

export default Index;
