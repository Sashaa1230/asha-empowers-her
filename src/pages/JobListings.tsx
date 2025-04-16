
import Sidebar from "@/components/Sidebar";
import { jobListings } from "@/data/chatbotData";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock } from "lucide-react";

const JobListings = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-grow overflow-y-auto p-6">
        <h1 className="text-3xl font-bold mb-2">Job Listings</h1>
        <p className="text-gray-600 mb-6">Discover career opportunities tailored for women</p>
        
        <div className="space-y-4">
          {jobListings.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                  <p className="text-gray-600 mt-1">{job.company}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>Posted: {job.posted}</span>
                    </div>
                  </div>
                </div>
                <Link 
                  to={`/jobs/${job.id}`} 
                  className="bg-asha text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-asha-dark transition-colors"
                >
                  View Details
                </Link>
              </div>
              
              <p className="mt-4 text-gray-700">{job.description}</p>
              
              <div className="mt-4">
                <h3 className="font-medium text-gray-900 mb-2">Requirements:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="text-gray-600">{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListings;
