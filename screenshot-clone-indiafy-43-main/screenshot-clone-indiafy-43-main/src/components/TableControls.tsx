import { Plus, Copy, Edit, FlaskConical, MoreHorizontal, BarChart3, FileText, Download, PieChart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TableControls = () => {
  return (
    <div className="bg-white px-6 py-4 border-b border-table-border">
      <div className="flex items-center justify-between">
        {/* Left Section - Action Buttons */}
        <div className="flex items-center space-x-3">
          <Button className="bg-success text-white hover:bg-success/90">
            <Plus className="w-4 h-4 mr-2" />
            Create
          </Button>
          <Button variant="outline" size="sm">
            <Copy className="w-4 h-4 mr-2" />
            Duplicate
          </Button>
          <Button variant="outline" size="sm">
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button variant="outline" size="sm">
            <FlaskConical className="w-4 h-4 mr-2" />
            A/B test
          </Button>
          <div className="flex items-center space-x-1">
            <Button variant="outline" size="sm">
              More
            </Button>
            <Button variant="outline" size="sm" className="px-2">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Right Section - View Controls */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-text-secondary" />
            <span className="text-sm text-text-secondary">Last 30 days: 3 Jun 2025 - 2 Jul 2025</span>
          </div>

          <div className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4 text-text-secondary" />
            <Select defaultValue="performance">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="performance">Columns: Performance</SelectItem>
                <SelectItem value="delivery">Columns: Delivery</SelectItem>
                <SelectItem value="engagement">Columns: Engagement</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select defaultValue="breakdown">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="breakdown">Breakdown</SelectItem>
              <SelectItem value="age">By Age</SelectItem>
              <SelectItem value="gender">By Gender</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm">
            <FileText className="w-4 h-4 mr-2" />
            Reports
          </Button>

          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>

          <Button variant="outline" size="sm">
            <PieChart className="w-4 h-4 mr-2" />
            Charts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TableControls;