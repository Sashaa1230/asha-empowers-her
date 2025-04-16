
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Floating chat bubble for mobile view
const ChatBubble = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-index pages after a delay
    const path = window.location.pathname;
    if (path !== "/") {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <Link
      to="/"
      className="fixed bottom-6 right-6 h-14 w-14 bg-asha rounded-full flex items-center justify-center shadow-lg hover:bg-asha-dark transition-colors z-50"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Link>
  );
};

export default ChatBubble;
