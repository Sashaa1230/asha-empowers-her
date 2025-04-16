
import { cn } from "@/lib/utils";
import AshaBotIcon from "./AshaBotIcon";

interface ChatMessageProps {
  isBot: boolean;
  message: string | JSX.Element;
  timestamp?: string;
}

const ChatMessage = ({ isBot, message, timestamp }: ChatMessageProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-start gap-3">
        {isBot && (
          <AshaBotIcon size="sm" className="flex-shrink-0" />
        )}
        <div className={cn("max-w-3xl", !isBot && "ml-auto")}>
          <div
            className={cn(
              "p-4 rounded-lg",
              isBot ? "bg-white shadow-sm" : "bg-asha text-white"
            )}
          >
            {typeof message === "string" ? (
              <div className="prose prose-sm max-w-none">
                {message}
              </div>
            ) : (
              message
            )}
          </div>
          {timestamp && <div className="text-xs text-gray-500 mt-1">{timestamp}</div>}
        </div>
        {!isBot && (
          <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0">
            U
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
