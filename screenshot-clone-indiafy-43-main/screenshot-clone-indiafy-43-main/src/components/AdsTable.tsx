
import { useState } from "react";
import { useCampaigns } from "@/hooks/useCampaigns";
import AdDetailsModal from "./AdDetailsModal";
import CampaignSummaryBar from "./CampaignSummaryBar";
import AdsTableHeader from "./AdsTableHeader";
import CampaignRow from "./CampaignRow";
import ResultsSummary from "./ResultsSummary";

const AdsTable = () => {
  const { campaigns, toggleCampaign, totalActiveReach, totalReach } = useCampaigns();
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCampaignClick = (campaign: any) => {
    setSelectedCampaign(campaign);
    setIsModalOpen(true);
  };

  const activeCampaignsCount = campaigns.filter(c => c.active).length;
  const inactiveCampaignsCount = campaigns.filter(c => !c.active).length;

  return (
    <div className="bg-white flex-1">
      {/* Summary Bar */}
      <CampaignSummaryBar 
        activeCampaignsCount={activeCampaignsCount}
        totalActiveReach={totalActiveReach}
      />

      {/* Table Header */}
      <AdsTableHeader />

      {/* Campaign Rows */}
      <div className="divide-y divide-table-border">
        {campaigns.map((campaign) => (
          <CampaignRow
            key={campaign.id}
            campaign={campaign}
            onToggle={toggleCampaign}
            onCampaignClick={handleCampaignClick}
          />
        ))}
      </div>

      {/* Results Summary */}
      <ResultsSummary
        totalCampaigns={campaigns.length}
        totalReach={totalReach}
        activeCampaigns={activeCampaignsCount}
        inactiveCampaigns={inactiveCampaignsCount}
      />

      {/* Ad Details Modal */}
      {selectedCampaign && (
        <AdDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          campaign={selectedCampaign}
        />
      )}
    </div>
  );
};

export default AdsTable;
