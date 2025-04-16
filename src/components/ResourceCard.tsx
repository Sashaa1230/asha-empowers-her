
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
  icon: React.ReactNode;
  color?: string;
}

const ResourceCard = ({
  title,
  description,
  actionLabel,
  onAction,
  icon,
  color = "bg-blue-100"
}: ResourceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
      <div className="flex items-start gap-4 mb-3">
        <div className={cn("p-3 rounded-full", color)}>{icon}</div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
      </div>
      <Button 
        onClick={onAction} 
        variant="outline" 
        className="w-full justify-start text-asha hover:text-asha-dark hover:bg-asha-light"
      >
        {actionLabel}
      </Button>
    </div>
  );
};

export default ResourceCard;
