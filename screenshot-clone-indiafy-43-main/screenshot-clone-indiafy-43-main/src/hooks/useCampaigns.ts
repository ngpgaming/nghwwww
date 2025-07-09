
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export interface Campaign {
  id: number;
  active: boolean;
  name: string;
  delivery: string;
  actions: string;
  bidStrategy: string;
  budget: string;
  amountSpent: string;
  reach: string;
  impressions: string;
  costPerResult: string;
}

export const useCampaigns = () => {
  const { toast } = useToast();
  
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: 1,
      active: true,
      name: "KWG GAME ADS",
      delivery: "Active",
      actions: "—",
      bidStrategy: "Highest volume",
      budget: "₹15,000.00",
      amountSpent: "₹125,500.00",
      reach: "225,000",
      impressions: "650,000",
      costPerResult: "₹1.80"
    },
    {
      id: 2,
      active: true,
      name: "TASHANWIN GAME",
      delivery: "Active",
      actions: "—",
      bidStrategy: "Highest volume",
      budget: "₹8,000.00",
      amountSpent: "₹75,253.57",
      reach: "62,180",
      impressions: "137,300",
      costPerResult: "₹3.20"
    },
    {
      id: 3,
      active: true,
      name: "LOTTERY 7",
      delivery: "Active",
      actions: "—",
      bidStrategy: "Highest volume",
      budget: "₹8,000.00",
      amountSpent: "₹40,904.15",
      reach: "45,230",
      impressions: "89,450",
      costPerResult: "₹8.90"
    },
    {
      id: 4,
      active: true,
      name: "91 CLUB",
      delivery: "Active",
      actions: "—",
      bidStrategy: "Using ad set bid...",
      budget: "Using ad set bu...",
      amountSpent: "₹48,549.41",
      reach: "38,900",
      impressions: "81,800",
      costPerResult: "₹5.60"
    },
    {
      id: 5,
      active: true,
      name: "TIRANAGA",
      delivery: "Active",
      actions: "—",
      bidStrategy: "Highest volume",
      budget: "₹8,000.00",
      amountSpent: "₹36,975.07",
      reach: "29,650",
      impressions: "65,480",
      costPerResult: "₹2.40"
    },
    {
      id: 6,
      active: true,
      name: "DIUWIN",
      delivery: "Active",
      actions: "—",
      bidStrategy: "Using ad set bid...",
      budget: "Using ad set bu...",
      amountSpent: "₹19,744.67",
      reach: "22,340",
      impressions: "50,650",
      costPerResult: "₹9.10"
    },
    {
      id: 7,
      active: true,
      name: "WIN99",
      delivery: "Active",
      actions: "—",
      bidStrategy: "Highest volume",
      budget: "₹8,000.00",
      amountSpent: "₹9,467.27",
      reach: "18,450",
      impressions: "36,700",
      costPerResult: "₹4.80"
    },
    {
      id: 8,
      active: true,
      name: "DKWIN",
      delivery: "Active",
      actions: "—",
      bidStrategy: "Highest volume",
      budget: "₹8,000.00",
      amountSpent: "₹19,579.08",
      reach: "21,780",
      impressions: "39,950",
      costPerResult: "₹6.30"
    },
    {
      id: 9,
      active: true,
      name: "TC LOTTERY",
      delivery: "Active",
      actions: "—",
      bidStrategy: "Highest volume",
      budget: "₹8,000.00",
      amountSpent: "₹17,949.83",
      reach: "15,320",
      impressions: "22,150",
      costPerResult: "₹1.70"
    },
    {
      id: 10,
      active: true,
      name: "DMWIN",
      delivery: "Active",
      actions: "—",
      bidStrategy: "Highest volume",
      budget: "₹8,000.00",
      amountSpent: "₹25,643.92",
      reach: "32,450",
      impressions: "58,920",
      costPerResult: "₹7.20"
    }
  ]);

  const toggleCampaign = (campaignId: number) => {
    setCampaigns(prevCampaigns => 
      prevCampaigns.map(campaign => {
        if (campaign.id === campaignId) {
          const newActive = !campaign.active;
          const updatedCampaign = {
            ...campaign,
            active: newActive,
            delivery: newActive ? "Active" : "Off"
          };

          toast({
            title: newActive ? "Campaign Activated" : "Campaign Deactivated",
            description: `${campaign.name} is now ${newActive ? "running" : "paused"}. Reach data: ${campaign.reach}`,
          });

          console.log(`Campaign ${campaignId} toggled to ${newActive ? 'ON' : 'OFF'}, Reach: ${campaign.reach}`);
          
          return updatedCampaign;
        }
        return campaign;
      })
    );
  };

  const totalActiveReach = campaigns.filter(c => c.active).reduce((sum, campaign) => {
    return sum + parseInt(campaign.reach.replace(/,/g, ''));
  }, 0);

  const totalReach = campaigns.reduce((sum, c) => sum + parseInt(c.reach.replace(/,/g, '')), 0);

  return {
    campaigns,
    toggleCampaign,
    totalActiveReach,
    totalReach
  };
};
