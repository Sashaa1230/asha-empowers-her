
import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import QuickActions from "./QuickActions";
import { botResponses, jobListings, events, mentorshipPrograms, faqs } from "@/data/chatbotData";

// Types for chat messages
interface Message {
  id: string;
  text: string | JSX.Element;
  isBot: boolean;
  timestamp: string;
}

const generateInitialMessage = (): Message => {
  const initialBotMessage = (
    <>
      <p>Hello! I'm ASHA, the AI assistant for JobsForHer Foundation. I'm here to help empower your career journey with:</p>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Discovering job listings and opportunities for women</li>
        <li>Finding community events, sessions and workshops</li>
        <li>Connecting with mentorship programs</li>
        <li>Accessing women empowerment resources and initiatives</li>
        <li>Answering your questions about career development</li>
      </ul>
      <p className="mt-4">How can I assist you today?</p>
    </>
  );

  return {
    id: "welcome",
    text: initialBotMessage,
    isBot: true,
    timestamp: formatTimestamp(new Date()),
  };
};

// Helper for creating timestamps
const formatTimestamp = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
};

const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([generateInitialMessage()]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to generate responses based on user input
  const generateResponse = (userMessage: string): string | JSX.Element => {
    // Handle empty or very short inputs
    if (!userMessage.trim()) {
      return "I'm here to help! Feel free to ask me about job opportunities, events, mentorship programs, or resources for women's professional development.";
    }
    
    const lowerCaseMessage = userMessage.toLowerCase().trim();
    
    // Handle one-word responses and acknowledgments
    const acknowledgments = ['ok', 'okay', 'k', 'sure', 'yes', 'yeah', 'yep', 'no', 'nope', 'alright', 'fine', 'good'];
    if (acknowledgments.includes(lowerCaseMessage)) {
      return "Is there anything specific about women's career opportunities, events, or mentorship programs you'd like to know about? I'm here to help!";
    }
    
    // Handle greetings
    const greetingPatterns = ['hello', 'hi', 'hey', 'greetings', 'howdy', 'hola', 'namaste', 'sup'];
    if (greetingPatterns.some(pattern => lowerCaseMessage.includes(pattern)) || lowerCaseMessage === 'hi' || lowerCaseMessage === 'hello') {
      return "Hello! I'm ASHA, the AI assistant for JobsForHer Foundation. How can I help you today? You can ask me about job opportunities, events, mentorship programs, or resources for women's professional growth.";
    }

    // Handle casual conversations
    if (['how are you', 'how\'s it going', 'how are things', 'whats up', 'what\'s up'].some(pattern => lowerCaseMessage.includes(pattern))) {
      return "I'm doing well, thank you for asking! I'm here and ready to assist you with information about job opportunities, events, mentorship programs, or resources for women's career development. What can I help you with today?";
    }

    // Handle thank you messages
    if (['thank', 'thanks', 'appreciate'].some(pattern => lowerCaseMessage.includes(pattern))) {
      return "You're welcome! I'm happy to help. Is there anything else you'd like to know about JobsForHer Foundation's services or resources?";
    }

    // Handle goodbye messages
    if (['bye', 'goodbye', 'see you', 'talk later'].some(pattern => lowerCaseMessage.includes(pattern))) {
      return "Goodbye! Feel free to return anytime you need assistance with your career journey. Have a great day!";
    }
    
    // Handle help requests
    if (['help', 'assist', 'support', 'guidance', 'confused', 'lost'].some(pattern => lowerCaseMessage.includes(pattern))) {
      return (
        <>
          <p>I'm here to help! Here are some things you can ask me about:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Job opportunities for women</li>
            <li>Upcoming events and workshops</li>
            <li>Mentorship programs</li>
            <li>Women empowerment resources</li>
            <li>Career development advice</li>
          </ul>
          <p className="mt-2">What would you like to know more about?</p>
        </>
      );
    }
    
    // Original response logic
    if (lowerCaseMessage.includes("job") || lowerCaseMessage.includes("work") || lowerCaseMessage.includes("career") || lowerCaseMessage.includes("employ")) {
      const jobsResponse = (
        <>
          <p>I found some job opportunities that might interest you:</p>
          <ul className="list-disc ml-6 mt-2 space-y-3">
            {jobListings.slice(0, 3).map((job) => (
              <li key={job.id}>
                <strong>{job.title}</strong> at {job.company}
                <br />
                <span className="text-sm">{job.type} • {job.location}</span>
                <br />
                <span className="text-sm">{job.description}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2">Would you like to filter these results or see more job listings?</p>
        </>
      );
      return jobsResponse;
    } else if (lowerCaseMessage.includes("event") || lowerCaseMessage.includes("workshop") || lowerCaseMessage.includes("webinar") || lowerCaseMessage.includes("meet")) {
      const eventsResponse = (
        <>
          <p>Here are some upcoming events you might be interested in:</p>
          <ul className="list-disc ml-6 mt-2 space-y-3">
            {events.map((event) => (
              <li key={event.id}>
                <strong>{event.title}</strong>
                <br />
                <span className="text-sm">{event.date} • {event.time}</span>
                <br />
                <span className="text-sm">{event.location}</span>
                <br />
                <span className="text-sm">{event.description}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2">Would you like to register for any of these events or see more options?</p>
        </>
      );
      return eventsResponse;
    } else if (lowerCaseMessage.includes("mentor") || lowerCaseMessage.includes("guidance") || lowerCaseMessage.includes("coach")) {
      const mentorshipResponse = (
        <>
          <p>We have several mentorship programs available:</p>
          <ul className="list-disc ml-6 mt-2 space-y-3">
            {mentorshipPrograms.map((program) => (
              <li key={program.id}>
                <strong>{program.title}</strong>
                <br />
                <span className="text-sm">Mentor: {program.mentor}</span>
                <br />
                <span className="text-sm">{program.description}</span>
                <br />
                <span className="text-sm">Duration: {program.duration}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2">Would you like more details about any specific program?</p>
        </>
      );
      return mentorshipResponse;
    } else if (lowerCaseMessage.includes("empower") || lowerCaseMessage.includes("women") || lowerCaseMessage.includes("resource")) {
      return "JobsForHer Foundation is dedicated to empowering women in their career journeys. We offer resources on leadership development, work-life balance, career advancement strategies, and return-to-work programs. Would you like to explore any of these areas?";
    } else if (lowerCaseMessage.includes("question") || lowerCaseMessage.includes("?")) {
      // Return a random FAQ for demonstration
      const randomFaq = faqs[Math.floor(Math.random() * faqs.length)];
      return `${randomFaq.question}\n\n${randomFaq.answer}`;
    }
    
    // Modified fallback response to be more helpful
    return "I'm not sure I understood your message. I can help you with information about job opportunities, upcoming events, mentorship programs, or resources for women's professional development. Could you please try rephrasing your question, or select one of the quick action buttons below?";
  };

  // Handle sending a new message
  const handleSendMessage = (text: string) => {
    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      isBot: false,
      timestamp: formatTimestamp(new Date()),
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    
    // Simulate bot thinking and responding
    setTimeout(() => {
      const botResponse = generateResponse(text);
      const newBotMessage: Message = {
        id: `bot-${Date.now()}`,
        text: botResponse,
        isBot: true,
        timestamp: formatTimestamp(new Date()),
      };
      
      setMessages((prev) => [...prev, newBotMessage]);
    }, 1000);
  };

  // Handle quick action clicks
  const handleQuickAction = (action: string) => {
    let response = "";
    
    switch (action) {
      case "Job Listings":
        handleSendMessage("Show me available job listings");
        break;
      case "Community Events":
        handleSendMessage("What events are coming up?");
        break;
      case "Mentorship Programs":
        handleSendMessage("Tell me about mentorship programs");
        break;
      case "Women Empowerment":
        handleSendMessage("What resources are available for women empowerment?");
        break;
      default:
        break;
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b bg-white">
        <h2 className="text-lg font-semibold flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          Chat with ASHA
        </h2>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            isBot={msg.isBot}
            message={msg.text}
            timestamp={msg.timestamp}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 bg-gray-50">
        <QuickActions onActionClick={handleQuickAction} />
      </div>
      
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
