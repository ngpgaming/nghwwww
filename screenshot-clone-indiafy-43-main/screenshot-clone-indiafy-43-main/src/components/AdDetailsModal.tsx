
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { TrendingUp, TrendingDown, Users, Eye, MousePointer, DollarSign, Target, Clock, Globe, Smartphone, Monitor, Tablet, MapPin, Calendar, Filter, Download, Share2, RefreshCw, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";

interface AdDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaign: {
    id: number;
    name: string;
    budget: string;
    amountSpent: string;
    reach: string;
    impressions: string;
    costPerResult: string;
    active: boolean;
  };
}

const AdDetailsModal = ({ isOpen, onClose, campaign }: AdDetailsModalProps) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d");
  const [isLiveData, setIsLiveData] = useState(false);
  const [realTimeMetrics, setRealTimeMetrics] = useState({
    activeUsers: 0,
    liveImpressions: 0,
    conversionRate: 0
  });

  // Simulate real-time data updates
  useEffect(() => {
    if (isLiveData) {
      const interval = setInterval(() => {
        setRealTimeMetrics(prev => ({
          activeUsers: Math.floor(Math.random() * 50) + 20,
          liveImpressions: prev.liveImpressions + Math.floor(Math.random() * 10) + 1,
          conversionRate: parseFloat((Math.random() * 5 + 2).toFixed(2))
        }));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isLiveData]);

  // Advanced performance data with multiple metrics
  const performanceData = [
    { day: "Mon", clicks: 145, impressions: 1520, cost: 12.5, conversions: 8, ctr: 9.5, cpc: 1.56 },
    { day: "Tue", clicks: 162, impressions: 1840, cost: 18.2, conversions: 12, ctr: 8.8, cpc: 1.12 },
    { day: "Wed", clicks: 138, impressions: 1295, cost: 15.8, conversions: 6, ctr: 10.7, cpc: 2.63 },
    { day: "Thu", clicks: 185, impressions: 2180, cost: 24.1, conversions: 15, ctr: 8.5, cpc: 1.61 },
    { day: "Fri", clicks: 198, impressions: 2365, cost: 28.7, conversions: 18, ctr: 8.4, cpc: 1.59 },
    { day: "Sat", clicks: 172, impressions: 2100, cost: 34.8, conversions: 22, ctr: 8.2, cpc: 1.58 },
    { day: "Sun", clicks: 141, impressions: 1810, cost: 23.3, conversions: 11, ctr: 7.8, cpc: 2.12 },
  ];

  // Audience segmentation data
  const audienceSegments = [
    { segment: "Gaming Enthusiasts", users: 35, revenue: 2840, engagement: 8.5, color: "#8884d8" },
    { segment: "Casual Players", users: 28, revenue: 1960, engagement: 6.2, color: "#82ca9d" },
    { segment: "High Spenders", users: 15, revenue: 4200, engagement: 9.8, color: "#ffc658" },
    { segment: "Mobile Users", users: 22, revenue: 1580, engagement: 5.9, color: "#ff7300" },
  ];

  // Geographic data
  const geographicData = [
    { region: "North India", users: 45, revenue: 3200, color: "#8884d8" },
    { region: "South India", users: 30, revenue: 2800, color: "#82ca9d" },
    { region: "West India", users: 15, revenue: 1900, color: "#ffc658" },
    { region: "East India", users: 10, revenue: 1100, color: "#ff7300" },
  ];

  // Device performance comparison
  const devicePerformance = [
    { device: "Mobile", users: 65, sessions: 2840, revenue: 4200, avgSession: "3m 24s", bounceRate: 32 },
    { device: "Desktop", users: 25, sessions: 980, revenue: 2800, avgSession: "5m 12s", bounceRate: 28 },
    { device: "Tablet", users: 10, sessions: 420, revenue: 980, avgSession: "4m 08s", bounceRate: 35 },
  ];

  // Funnel conversion data
  const conversionFunnel = [
    { stage: "Impressions", count: 12500, rate: 100 },
    { stage: "Clicks", count: 1041, rate: 8.3 },
    { stage: "Landing Page Views", count: 892, rate: 7.1 },
    { stage: "Sign-ups", count: 178, rate: 1.4 },
    { stage: "Purchases", count: 89, rate: 0.7 },
  ];

  // Competitor analysis
  const competitorData = [
    { metric: "CTR", ourCampaign: 8.5, competitor1: 6.2, competitor2: 7.1, industry: 5.8 },
    { metric: "CPC", ourCampaign: 1.65, competitor1: 2.1, competitor2: 1.9, industry: 2.3 },
    { metric: "Conversion Rate", ourCampaign: 2.8, competitor1: 2.1, competitor2: 2.4, industry: 1.9 },
    { metric: "ROAS", ourCampaign: 4.2, competitor1: 3.1, competitor2: 3.6, industry: 2.8 },
  ];

  // A/B test data
  const abTestData = [
    { variant: "Original", impressions: 6250, clicks: 520, conversions: 44, ctr: 8.3, cr: 8.5 },
    { variant: "Variant A", impressions: 6250, clicks: 521, conversions: 45, ctr: 8.3, cr: 8.6 },
  ];

  const chartConfig = {
    clicks: { label: "Clicks", color: "#8884d8" },
    impressions: { label: "Impressions", color: "#82ca9d" },
    cost: { label: "Cost", color: "#ffc658" },
    conversions: { label: "Conversions", color: "#ff7300" },
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-facebook-blue flex items-center gap-2">
                {campaign.name} - Advanced Analytics Dashboard
                <Badge variant={campaign.active ? "default" : "secondary"} className="ml-2">
                  {campaign.active ? "Live" : "Paused"}
                </Badge>
              </DialogTitle>
              <DialogDescription className="text-lg mt-2">
                Comprehensive performance insights and advanced analytics
              </DialogDescription>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsLiveData(!isLiveData)}
                className={isLiveData ? "bg-green-100 text-green-700" : ""}
              >
                <RefreshCw className={`h-4 w-4 mr-1 ${isLiveData ? 'animate-spin' : ''}`} />
                {isLiveData ? "Live" : "Static"}
              </Button>
              <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1d">Last 24h</SelectItem>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="conversion">Conversion</TabsTrigger>
            <TabsTrigger value="competitor">Competitor</TabsTrigger>
            <TabsTrigger value="testing">A/B Testing</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Real-time metrics */}
            {isLiveData && (
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Real-time Metrics
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{realTimeMetrics.activeUsers}</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{realTimeMetrics.liveImpressions}</div>
                    <div className="text-sm text-gray-600">Live Impressions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{realTimeMetrics.conversionRate}%</div>
                    <div className="text-sm text-gray-600">Conversion Rate</div>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
                  <Users className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{campaign.reach}</div>
                  <div className="flex items-center text-xs text-green-600 mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% vs last week
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Peak: 89K at 8PM</div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Impressions</CardTitle>
                  <Eye className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{campaign.impressions}</div>
                  <div className="flex items-center text-xs text-green-600 mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.3% vs last week
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Avg: 64K daily</div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
                  <MousePointer className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">1,241</div>
                  <div className="flex items-center text-xs text-red-600 mt-1">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -2.1% vs last week
                  </div>
                  <div className="text-xs text-gray-500 mt-1">CTR: 8.5%</div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cost Per Click</CardTitle>
                  <DollarSign className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">₹1.65</div>
                  <div className="flex items-center text-xs text-green-600 mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +5.2% efficiency
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Target: ₹1.50</div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-100 rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">ROAS</CardTitle>
                  <Target className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">4.2x</div>
                  <div className="flex items-center text-xs text-green-600 mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +15.8% vs target
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Revenue: ₹3.2L</div>
                </CardContent>
              </Card>
            </div>

            {/* Advanced Performance Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Multi-Metric Performance</CardTitle>
                  <CardDescription>Comprehensive view of all key metrics over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="clicks" stroke="#8884d8" strokeWidth={2} />
                      <Line type="monotone" dataKey="conversions" stroke="#ff7300" strokeWidth={2} />
                      <Line type="monotone" dataKey="ctr" stroke="#82ca9d" strokeWidth={2} />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue & Cost Analysis</CardTitle>
                  <CardDescription>Financial performance breakdown with profitability trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <AreaChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="cost" stackId="1" stroke="#ffc658" fill="#ffc658" />
                      <Area type="monotone" dataKey="conversions" stackId="2" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="audience" className="space-y-6">
            {/* Audience Segmentation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Segments</CardTitle>
                  <CardDescription>User behavior and engagement by segment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[250px]">
                    <PieChart>
                      <Pie
                        data={audienceSegments}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="users"
                        label={({ segment, users }) => `${segment}: ${users}%`}
                      >
                        {audienceSegments.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Revenue and user distribution by region</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[250px]">
                    <BarChart data={geographicData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="region" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="users" fill="#8884d8" />
                      <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Device Performance Table */}
            <Card>
              <CardHeader>
                <CardTitle>Device Performance Analysis</CardTitle>
                <CardDescription>Detailed breakdown of user behavior across devices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Device</th>
                        <th className="text-left p-3">Users (%)</th>
                        <th className="text-left p-3">Sessions</th>
                        <th className="text-left p-3">Revenue (₹)</th>
                        <th className="text-left p-3">Avg Session</th>
                        <th className="text-left p-3">Bounce Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {devicePerformance.map((device, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3 flex items-center gap-2">
                            {device.device === 'Mobile' && <Smartphone className="h-4 w-4" />}
                            {device.device === 'Desktop' && <Monitor className="h-4 w-4" />}
                            {device.device === 'Tablet' && <Tablet className="h-4 w-4" />}
                            {device.device}
                          </td>
                          <td className="p-3">{device.users}%</td>
                          <td className="p-3">{device.sessions.toLocaleString()}</td>
                          <td className="p-3">₹{device.revenue.toLocaleString()}</td>
                          <td className="p-3">{device.avgSession}</td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded text-xs ${
                              device.bounceRate < 30 ? 'bg-green-100 text-green-800' : 
                              device.bounceRate > 35 ? 'bg-red-100 text-red-800' : 
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {device.bounceRate}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            {/* Performance Radar Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Radar</CardTitle>
                <CardDescription>Comprehensive performance analysis across all metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px]">
                  <RadarChart data={competitorData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" />
                    <PolarRadiusAxis />
                    <Radar name="Our Campaign" dataKey="ourCampaign" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                    <Radar name="Industry Average" dataKey="industry" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                    <ChartTooltip />
                  </RadarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conversion" className="space-y-6">
            {/* Conversion Funnel */}
            <Card>
              <CardHeader>
                <CardTitle>Conversion Funnel Analysis</CardTitle>
                <CardDescription>Step-by-step user journey and drop-off points</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conversionFunnel.map((stage, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-32 text-sm font-medium">{stage.stage}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-8 relative">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                          style={{ width: `${Math.max(stage.rate, 5)}%` }}
                        >
                          {stage.count.toLocaleString()}
                        </div>
                      </div>
                      <div className="w-16 text-sm text-gray-600">{stage.rate}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitor" className="space-y-6">
            {/* Competitor Comparison */}
            <Card>
              <CardHeader>
                <CardTitle>Competitive Analysis</CardTitle>
                <CardDescription>How your campaign performs against competitors and industry benchmarks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Metric</th>
                        <th className="text-left p-3">Our Campaign</th>
                        <th className="text-left p-3">Competitor A</th>
                        <th className="text-left p-3">Competitor B</th>
                        <th className="text-left p-3">Industry Avg</th>
                        <th className="text-left p-3">Performance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitorData.map((row, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3 font-medium">{row.metric}</td>
                          <td className="p-3 font-bold text-blue-600">{row.ourCampaign}</td>
                          <td className="p-3">{row.competitor1}</td>
                          <td className="p-3">{row.competitor2}</td>
                          <td className="p-3">{row.industry}</td>
                          <td className="p-3">
                            {row.ourCampaign > row.industry ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : row.ourCampaign === row.industry ? (
                              <AlertCircle className="h-5 w-5 text-yellow-500" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-500" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testing" className="space-y-6">
            {/* A/B Testing Results */}
            <Card>
              <CardHeader>
                <CardTitle>A/B Testing Results</CardTitle>
                <CardDescription>Compare performance between different ad variations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {abTestData.map((variant, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{variant.variant}</h4>
                        <Badge variant={index === 1 ? "default" : "secondary"}>
                          {index === 1 ? "Winner" : "Control"}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-600">Impressions</div>
                          <div className="font-medium">{variant.impressions.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Clicks</div>
                          <div className="font-medium">{variant.clicks}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">CTR</div>
                          <div className="font-medium">{variant.ctr}%</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Conv. Rate</div>
                          <div className="font-medium">{variant.cr}%</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-800">Test Results</h5>
                  <p className="text-sm text-green-700 mt-1">
                    Variant A shows 1.2% higher conversion rate with 95% statistical significance. 
                    Recommendation: Implement Variant A for all traffic.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AdDetailsModal;
