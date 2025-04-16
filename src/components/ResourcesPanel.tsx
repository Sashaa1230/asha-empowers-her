
import { Briefcase, Calendar, Users, Heart } from "lucide-react";
import ResourceCard from "./ResourceCard";
import { useNavigate } from "react-router-dom";

const ResourcesPanel = () => {
  const navigate = useNavigate();

  const resources = [
    {
      title: "Women-Focused Jobs",
      description: "Discover career opportunities specifically designed for women returning to work, seeking flexibility, or aiming for leadership roles.",
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      actionLabel: "Explore Jobs",
      color: "bg-blue-100",
      action: () => navigate("/jobs")
    },
    {
      title: "Empowerment Events",
      description: "Join networking sessions, skill-building workshops, and leadership webinars tailored to women's professional development.",
      icon: <Calendar className="h-6 w-6 text-green-600" />,
      actionLabel: "Browse Events",
      color: "bg-green-100",
      action: () => navigate("/events")
    },
    {
      title: "Mentorship Connections",
      description: "Connect with experienced professionals who can guide your career growth through personalized mentoring sessions.",
      icon: <Users className="h-6 w-6 text-purple-600" />,
      actionLabel: "Find Mentors",
      color: "bg-purple-100",
      action: () => navigate("/mentorship")
    },
    {
      title: "Leadership Resources",
      description: "Access guides, articles and tools focused on developing leadership skills and advancing in your career journey.",
      icon: <Heart className="h-6 w-6 text-red-600" />,
      actionLabel: "View Resources",
      color: "bg-red-100",
      action: () => navigate("/resources")
    }
  ];

  return (
    <div className="bg-gray-50 h-full p-6 border-l">
      <h2 className="font-semibold text-xl mb-6">Women Career Resources</h2>
      <p className="text-gray-600 text-sm mb-6">
        JobsForHer Foundation initiatives to empower your career
      </p>

      <div className="space-y-4">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.title}
            title={resource.title}
            description={resource.description}
            icon={resource.icon}
            actionLabel={resource.actionLabel}
            onAction={resource.action}
            color={resource.color}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourcesPanel;
