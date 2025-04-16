
import { useState } from "react";
import { Send, Mic, MicOff } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput = ({ onSend }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

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

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const startListening = () => {
    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        console.error("Speech recognition not supported in this browser");
        return;
      }

      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onstart = () => {
        setIsListening(true);
      };

      recognitionInstance.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        
        setMessage(transcript);
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        stopListening();
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      recognitionInstance.start();
      setRecognition(recognitionInstance);
    } catch (error) {
      console.error('Error starting speech recognition:', error);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setRecognition(null);
    }
    setIsListening(false);
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
          onClick={toggleListening}
          className={`h-10 w-10 rounded-full ${isListening ? 'bg-red-500' : 'bg-gray-200'} text-white flex items-center justify-center transition-colors`}
          title={isListening ? "Stop listening" : "Start voice input"}
          type="button"
        >
          {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5 text-gray-600" />}
        </button>
        <button 
          onClick={handleSend}
          disabled={!message.trim()}
          className="h-10 w-10 rounded-full bg-asha text-white flex items-center justify-center disabled:opacity-50"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
      {isListening && (
        <div className="mt-2 text-sm text-center text-gray-500 animate-pulse">
          Listening... Speak now
        </div>
      )}
    </div>
  );
};

export default ChatInput;
