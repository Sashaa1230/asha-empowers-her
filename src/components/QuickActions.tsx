
import { Briefcase, Calendar, Users, Heart } from "lucide-react";

interface QuickActionProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  onClick: () => void;
}

const QuickAction = ({ icon: Icon, label, onClick }: QuickActionProps) => (
  <button
    onClick={onClick}
    className="flex-1 bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-full border transition-colors flex items-center justify-center gap-2"
  >
    <Icon className="h-4 w-4 text-asha" />
    <span className="truncate">{label}</span>
  </button>
);

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

const QuickActions = ({ onActionClick }: QuickActionsProps) => {
  const actions = [
    { icon: Briefcase, label: "Job Listings" },
    { icon: Calendar, label: "Community Events" },
    { icon: Users, label: "Mentorship Programs" },
    { icon: Heart, label: "Women Empowerment" }
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {actions.map((action) => (
        <QuickAction
          key={action.label}
          icon={action.icon}
          label={action.label}
          onClick={() => onActionClick(action.label)}
        />
      ))}
    </div>
  );
};

export default QuickActions;
