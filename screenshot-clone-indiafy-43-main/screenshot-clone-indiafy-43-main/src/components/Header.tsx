import { ChevronDown, Bell, RefreshCw, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="bg-header-bg border-b border-table-border px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-text-primary text-xl">Meta Ads</span>
          </div>

          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/3bc3cbaf-e164-4162-b267-6b2d9b6f2374.png" 
              alt="Meta Logo" 
              className="w-8 h-8"
            />
            <div className="flex items-center space-x-1">
              <span className="text-sm text-text-primary font-medium">2111522622603365 (2111...)</span>
              <ChevronDown className="w-4 h-4 text-text-secondary" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-text-secondary">Opportunity score</span>
            <ChevronDown className="w-4 h-4 text-text-secondary" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="text-sm text-text-secondary">Updated just now</div>
          <RefreshCw className="w-4 h-4 text-text-secondary cursor-pointer" />
          <Button variant="outline" size="sm">
            Review and publish
          </Button>
          <Settings className="w-4 h-4 text-text-secondary cursor-pointer" />
          <div className="relative">
            <Bell className="w-4 h-4 text-text-secondary cursor-pointer" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full text-xs text-white flex items-center justify-center">2</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-facebook-blue rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="w-4 h-4 bg-facebook-blue rounded-sm flex items-center justify-center">
              <span className="text-white text-xs">f</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;