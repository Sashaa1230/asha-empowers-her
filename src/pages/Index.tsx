
import Sidebar from "@/components/Sidebar";
import ChatContainer from "@/components/ChatContainer";
import ResourcesPanel from "@/components/ResourcesPanel";

const Index = () => {
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
    </div>
  );
};

export default Index;
