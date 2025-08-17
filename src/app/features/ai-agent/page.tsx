import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  Plus,
  Settings,
  Play,
  Pause,
  Bot,
  Brain,
  MessageSquare,
  Activity,
  Zap,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Sparkles,
} from "lucide-react";

export default function AIAgentPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            AI Agents
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Kelola dan deploy AI agents untuk mengotomatisasi tugas-tugas
            kompleks
          </p>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Button variant="outline" size="sm" className="text-sm">
            <Settings className="h-4 w-4 mr-2" />
            Training
          </Button>
          <Button size="sm" className="text-sm">
            <Plus className="h-4 w-4 mr-2" />
            Deploy Agent
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Agents</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+2</span> bulan ini
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktif</CardTitle>
            <Zap className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              67% dari total agents
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Interaksi Hari Ini
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,247</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+15%</span> dari kemarin
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Satisfaction</CardTitle>
            <BarChart3 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.8%</div>
            <p className="text-xs text-muted-foreground">
              User satisfaction rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Agent Categories */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 gap-3 sm:gap-0">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-sm sm:text-base">
                  Customer Support
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  AI-powered support agents
                </p>
              </div>
            </div>
            <Badge
              variant="default"
              className="bg-blue-500 text-white text-xs self-start sm:self-auto flex-shrink-0"
            >
              4 Active
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 gap-3 sm:gap-0">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-sm sm:text-base">
                  Data Analysis
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Analytics and insights agents
                </p>
              </div>
            </div>
            <Badge
              variant="default"
              className="bg-green-500 text-white text-xs self-start sm:self-auto flex-shrink-0"
            >
              2 Active
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 gap-3 sm:gap-0">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-sm sm:text-base">
                  Content Generation
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Creative content agents
                </p>
              </div>
            </div>
            <Badge
              variant="default"
              className="bg-purple-500 text-white text-xs self-start sm:self-auto flex-shrink-0"
            >
              2 Active
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari AI agent..."
              className="pl-8 w-full sm:w-[300px] mobile-input"
            />
          </div>
          <Button variant="outline" size="sm" className="text-sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <div className="flex items-center space-x-2 flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            Semua (12)
          </Badge>
          <Badge variant="default" className="bg-green-500 text-white text-xs">
            Aktif (8)
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Training (4)
          </Badge>
        </div>
      </div>

      {/* Active Agents */}
      <Card className="bg-gradient-card hover-lift border-border/50">
        <CardHeader>
          <CardTitle>AI Agents Aktif</CardTitle>
          <CardDescription>
            Daftar AI agents yang sedang berjalan dan performanya
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Customer Support Agent v2.1
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Menangani pertanyaan customer support 24/7
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Users className="h-3 w-3 text-green-500" />
                      <span>1,247 conversations today</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>96% satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Online
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Pause className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Sales Analytics Agent
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Menganalisis data penjualan dan memberikan insights
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Activity className="h-3 w-3 text-green-500" />
                      <span>47 reports generated</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last analysis: 15 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Online
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Pause className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Content Writer Agent
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Generate konten marketing dan blog posts
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>23 articles generated</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last generation: 1 hour ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Online
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Pause className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg border-yellow-200 gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Lead Qualification Agent
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Otomatis menilai kualitas lead dan prospek
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-yellow-600">
                      <AlertCircle className="h-3 w-3" />
                      <span>Model updating</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>ETA: 30 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="secondary"
                  className="bg-yellow-500 text-white text-xs"
                >
                  Updating
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Play className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Fraud Detection Agent
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Mendeteksi aktivitas mencurigakan dan fraud
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>2,847 transactions scanned</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <AlertCircle className="h-3 w-3 text-red-500" />
                      <span>3 potential fraud detected</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Online
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Pause className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2">
        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>
              Performa AI agents dalam 24 jam terakhir
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                <span className="text-xs sm:text-sm">
                  Customer Support Agent
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 sm:w-20 bg-secondary rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "96%" }}
                    ></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">96%</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                <span className="text-xs sm:text-sm">
                  Sales Analytics Agent
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 sm:w-20 bg-secondary rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "94%" }}
                    ></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">94%</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                <span className="text-xs sm:text-sm">Content Writer Agent</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 sm:w-20 bg-secondary rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">92%</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                <span className="text-xs sm:text-sm">
                  Fraud Detection Agent
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 sm:w-20 bg-secondary rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">98%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Aktivitas terbaru dari AI agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium">
                    Customer Support Agent resolved ticket
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Helped customer with payment issue - 2 menit lalu
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium">
                    Sales Analytics generated report
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Q4 sales performance analysis completed - 5 menit lalu
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium">
                    Content Writer created article
                  </p>
                  <p className="text-xs text-muted-foreground">
                    "10 Tips for Better Customer Service" published - 15 menit
                    lalu
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium">
                    Fraud Detection Alert
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Suspicious transaction flagged for review - 30 menit lalu
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
