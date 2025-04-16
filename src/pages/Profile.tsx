
import Sidebar from "@/components/Sidebar";
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Edit } from "lucide-react";

const Profile = () => {
  // Mock user profile data
  const profile = {
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+91 9876543210",
    location: "Bangalore, India",
    title: "UX Designer",
    experience: "5+ years",
    education: "B.Tech in Computer Science, XYZ University",
    skills: ["UX Design", "UI Prototyping", "User Research", "Figma", "Adobe XD", "Design Systems"],
    interests: ["Technology", "Leadership", "Work-life Balance", "Career Growth"]
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-grow overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">My Profile</h1>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header/Banner */}
            <div className="h-32 bg-gradient-to-r from-asha to-asha-dark"></div>
            
            {/* Profile Info */}
            <div className="p-6 relative">
              {/* Profile picture */}
              <div className="absolute -top-16 left-6 h-24 w-24 rounded-full bg-white p-1 shadow-md">
                <div className="h-full w-full bg-asha-light text-asha flex items-center justify-center text-2xl font-bold rounded-full">
                  {profile.name.split(" ").map(name => name[0]).join("")}
                </div>
              </div>
              
              {/* Edit button */}
              <button className="absolute top-6 right-6 bg-white hover:bg-gray-50 text-gray-700 p-2 rounded-full shadow-sm flex items-center justify-center">
                <Edit className="h-5 w-5" />
              </button>
              
              {/* Name and title */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <p className="text-gray-600">{profile.title}</p>
              </div>
              
              {/* Contact info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span>{profile.location}</span>
                </div>
              </div>
              
              {/* Experience and Education */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="h-5 w-5 text-asha" />
                    <h3 className="font-semibold text-lg">Professional Experience</h3>
                  </div>
                  <p className="text-gray-700">{profile.experience}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="h-5 w-5 text-asha" />
                    <h3 className="font-semibold text-lg">Education</h3>
                  </div>
                  <p className="text-gray-700">{profile.education}</p>
                </div>
              </div>
              
              {/* Skills */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-asha-light text-asha text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Interests */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-3">Career Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest) => (
                    <span 
                      key={interest} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
