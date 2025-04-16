
import { cn } from "@/lib/utils";

interface AshaBotIconProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const AshaBotIcon = ({ className, size = "md" }: AshaBotIconProps) => {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  return (
    <div className={cn(
      "bg-asha text-white rounded-full flex items-center justify-center font-bold",
      sizes[size],
      className
    )}>
      <img 
        src="/lovable-uploads/083eddbd-88b6-46cc-bf12-cdb89d2539eb.png" 
        alt="ASHA AI Bot Logo" 
        className="w-3/4 h-3/4 object-contain"
        onError={(e) => {
          // Fallback if image fails to load
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerText = 'AI';
        }}
      />
    </div>
  );
};

export default AshaBotIcon;
