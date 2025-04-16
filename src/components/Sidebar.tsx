
import { Home, Briefcase, Calendar, Users, HelpCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";
import AshaBotIcon from "./AshaBotIcon";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navItems = [
    { name: "Chat with ASHA", icon: Home, href: "/" },
    { name: "My Profile", icon: User, href: "/profile" },
    { name: "Job Listings", icon: Briefcase, href: "/jobs" },
    { name: "Events", icon: Calendar, href: "/events" },
    { name: "Mentorship", icon: Users, href: "/mentorship" },
    { name: "Help Center", icon: HelpCircle, href: "/help" },
  ];

  return (
    <div className={cn("w-64 bg-white border-r h-screen flex flex-col", className)}>
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <AshaBotIcon />
          <div>
            <h2 className="font-bold text-lg">ASHA AI BOT</h2>
            <p className="text-sm text-gray-500">Your Assistant</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xs uppercase text-gray-500 font-medium mb-4 px-2">MAIN MENU</h3>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-2 py-3 text-gray-600 hover:bg-gray-100 rounded-md w-full transition-colors",
                (item.href === currentPath || (item.href === "/" && currentPath === "")) && "bg-gray-100 font-medium"
              )}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
