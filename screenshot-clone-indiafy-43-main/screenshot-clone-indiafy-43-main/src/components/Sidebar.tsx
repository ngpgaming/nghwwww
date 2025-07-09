
import { 
  Bell, 
  FolderOpen, 
  FileText, 
  BarChart3, 
  Users, 
  CreditCard, 
  Settings, 
  HelpCircle,
  Search,
  Bug,
  Gauge
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = () => {
  const topMenuItems = [
    { icon: Search, label: "Search", active: false },
    { icon: Bug, label: "Debug", active: false },
    { icon: Gauge, label: "Performance", active: false },
    { icon: Users, label: "Team", active: false },
  ];

  const mainMenuItems = [
    { icon: Bell, label: "Notifications", active: true },
    { icon: FolderOpen, label: "Campaigns", active: false },
    { icon: BarChart3, label: "Insights", active: false },
    { icon: FileText, label: "Reports", active: false },
    { icon: Users, label: "Audience", active: false },
    { icon: CreditCard, label: "Billing", active: false },
    { icon: Settings, label: "Settings", active: false },
    { icon: HelpCircle, label: "Help", active: false },
  ];

  return (
    <div className="w-[72px] bg-sidebar-bg border-r border-sidebar-border h-screen flex flex-col items-center">
      {/* Meta Logo */}
      <div className="w-12 h-12 mt-4 mb-6 flex items-center justify-center flex-shrink-0">
        <img 
          src="/lovable-uploads/bca52a0d-1d8f-43ad-95bc-08ceac2ddc08.png" 
          alt="Meta" 
          className="w-8 h-8"
        />
      </div>

      {/* Scrollable Content */}
      <ScrollArea className="flex-1 w-full">
        <div className="flex flex-col items-center px-2">
          {/* Top Menu Items */}
          <div className="flex flex-col space-y-0 mb-4">
            {topMenuItems.map((item, index) => (
              <div
                key={index}
                className={`w-12 h-12 my-1 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer ${
                  item.active
                    ? "bg-sidebar-active text-facebook-blue"
                    : "text-text-icon hover:bg-sidebar-hover"
                }`}
              >
                <item.icon className="w-5 h-5" />
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="w-8 h-px bg-sidebar-border mb-4 flex-shrink-0"></div>

          {/* Main Menu Items */}
          <div className="flex flex-col space-y-0 pb-4">
            {mainMenuItems.map((item, index) => (
              <div
                key={index}
                className={`w-12 h-12 my-3 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer ${
                  item.active
                    ? "bg-sidebar-active text-facebook-blue"
                    : "text-text-icon hover:bg-sidebar-hover"
                }`}
              >
                <item.icon className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
