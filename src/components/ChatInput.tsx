
import { useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput = ({ onSend }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t bg-white">
      <div className="flex items-center gap-2 border rounded-full px-4 py-2 bg-white">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="w-full outline-none text-gray-800"
        />
        <button 
          onClick={handleSend}
          disabled={!message.trim()}
          className="h-10 w-10 rounded-full bg-asha text-white flex items-center justify-center disabled:opacity-50"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
