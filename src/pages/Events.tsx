
import Sidebar from "@/components/Sidebar";
import { events } from "@/data/chatbotData";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-grow overflow-y-auto p-6">
        <h1 className="text-3xl font-bold mb-2">Community Events</h1>
        <p className="text-gray-600 mb-6">Upcoming events, workshops and networking opportunities</p>
        
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <div className="inline-block px-3 py-1 bg-asha-light text-asha text-sm font-medium rounded-full mb-2">
                    {event.type}
                  </div>
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  className="bg-asha hover:bg-asha-dark text-white"
                  onClick={() => window.open(event.registration_link, '_blank')}
                >
                  Register
                </Button>
              </div>
              
              <p className="mt-4 text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
