import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import FilterTabs from "@/components/FilterTabs";
import TableControls from "@/components/TableControls";
import AdsTable from "@/components/AdsTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Filter Tabs */}
        <FilterTabs />
        
        {/* Navigation Breadcrumbs */}
        <div className="bg-white px-6 py-2 border-b border-table-border">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-text-primary">Campaigns</span>
            <span className="text-sm text-text-secondary">&gt;</span>
            <span className="text-sm font-medium text-text-primary">Ad sets</span>
            <span className="text-sm text-text-secondary font-bold text-facebook-blue">Ads</span>
          </div>
        </div>
        
        {/* Table Controls */}
        <TableControls />
        
        {/* Ads Table */}
        <AdsTable />
      </div>
    </div>
  );
};

export default Index;
