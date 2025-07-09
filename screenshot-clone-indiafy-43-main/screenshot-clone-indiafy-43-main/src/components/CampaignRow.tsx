
import React from 'react';
import { ToggleLeft, ToggleRight } from "lucide-react";
import { Campaign } from '@/hooks/useCampaigns';

interface CampaignRowProps {
  campaign: Campaign;
  onToggle: (campaignId: number) => void;
  onCampaignClick: (campaign: Campaign) => void;
}

const CampaignRow: React.FC<CampaignRowProps> = ({
  campaign,
  onToggle,
  onCampaignClick
}) => {
  return (
    <div className="flex items-center px-6 py-4 hover:bg-hover-bg">
      {/* Toggle Switch */}
      <div className="w-16 px-2 flex justify-center">
        <button onClick={() => onToggle(campaign.id)}>
          {campaign.active ? (
            <ToggleRight className="w-8 h-5 text-facebook-blue cursor-pointer hover:text-blue-600" />
          ) : (
            <ToggleLeft className="w-8 h-5 text-text-muted cursor-pointer hover:text-gray-600" />
          )}
        </button>
      </div>
      
      {/* Campaign Name */}
      <div className="w-80 px-2">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${campaign.active ? 'bg-green-500' : 'bg-gray-400'}`}></div>
          <span 
            className="text-sm text-facebook-blue hover:underline cursor-pointer"
            onClick={() => onCampaignClick(campaign)}
          >
            {campaign.name}
          </span>
        </div>
      </div>
      
      {/* Delivery */}
      <div className="w-24 px-2">
        <span className={`text-sm ${campaign.active ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
          {campaign.delivery}
        </span>
      </div>
      
      {/* Actions */}
      <div className="w-24 px-2">
        <span className="text-sm text-text-primary">{campaign.actions}</span>
      </div>
      
      {/* Bid Strategy */}
      <div className="w-32 px-2">
        <span className="text-sm text-text-primary">{campaign.bidStrategy}</span>
      </div>
      
      {/* Budget */}
      <div className="w-28 px-2">
        <span className="text-sm text-text-primary">{campaign.budget}</span>
      </div>
      
      {/* Amount Spent */}
      <div className="w-32 px-2">
        <span className="text-sm text-text-primary font-medium">{campaign.amountSpent}</span>
      </div>
      
      {/* Reach */}
      <div className="w-24 px-2">
        <span className={`text-sm font-medium ${campaign.active ? 'text-blue-600' : 'text-text-primary'}`}>
          {campaign.reach}
        </span>
      </div>
      
      {/* Impressions */}
      <div className="w-28 px-2">
        <span className="text-sm text-text-primary">{campaign.impressions}</span>
      </div>

      {/* Cost per result */}
      <div className="w-32 px-2">
        <span className="text-sm text-text-primary font-medium">{campaign.costPerResult}</span>
      </div>
    </div>
  );
};

export default CampaignRow;
