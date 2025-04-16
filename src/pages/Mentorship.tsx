
import Sidebar from "@/components/Sidebar";
import { mentorshipPrograms } from "@/data/chatbotData";
import { Users, Calendar, ExternalLink } from "lucide-react";

const Mentorship = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-grow overflow-y-auto p-6">
        <h1 className="text-3xl font-bold mb-2">Mentorship Programs</h1>
        <p className="text-gray-600 mb-6">Connect with experienced mentors to guide your career journey</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mentorshipPrograms.map((program) => (
            <div key={program.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-asha">{program.title}</h2>
              
              <div className="flex items-center gap-2 mt-3">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Duration: {program.duration}</span>
              </div>
              
              <div className="mt-4">
                <div className="flex gap-3 items-start">
                  <div className="h-10 w-10 rounded-full bg-asha-light text-asha flex items-center justify-center font-bold flex-shrink-0">
                    {program.mentor.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-medium">{program.mentor}</h3>
                    <p className="text-sm text-gray-600">{program.mentor_profile}</p>
                  </div>
                </div>
              </div>
              
              <p className="mt-4 text-gray-700">{program.description}</p>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Focus Areas:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {program.areas.map((area) => (
                    <span 
                      key={area} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={program.application_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 inline-flex items-center gap-1 text-asha hover:text-asha-dark"
              >
                Apply for this program <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
