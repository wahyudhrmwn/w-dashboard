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
  Zap,
  Clock,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Activity,
  Bot,
  Workflow,
  Timer,
} from "lucide-react";

export default function AutomationPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Automation
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Otomatisasi workflow dan proses bisnis untuk meningkatkan efisiensi
          </p>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Button variant="outline" size="sm" className="text-sm">
            <Settings className="h-4 w-4 mr-2" />
            Template
          </Button>
          <Button size="sm" className="text-sm">
            <Plus className="h-4 w-4 mr-2" />
            Buat Workflow
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Workflow
            </CardTitle>
            <Workflow className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+8</span> bulan ini
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktif</CardTitle>
            <Play className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">
              68% dari total workflow
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Eksekusi Hari Ini
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+23%</span> dari kemarin
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">97.8%</div>
            <p className="text-xs text-muted-foreground">
              Performa sangat baik
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 gap-3 sm:gap-0">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-sm sm:text-base">
                  Email Automation
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Setup email workflows
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-sm self-start sm:self-auto flex-shrink-0"
            >
              Buat
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 gap-3 sm:gap-0">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-sm sm:text-base">Data Sync</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Automated data synchronization
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-sm self-start sm:self-auto flex-shrink-0"
            >
              Buat
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 gap-3 sm:gap-0">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Timer className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-sm sm:text-base">
                  Scheduled Tasks
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Time-based automation
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-sm self-start sm:self-auto flex-shrink-0"
            >
              Buat
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari workflow..."
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
            Semua (47)
          </Badge>
          <Badge variant="default" className="bg-green-500 text-white text-xs">
            Aktif (32)
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Nonaktif (15)
          </Badge>
        </div>
      </div>

      {/* Active Workflows */}
      <Card className="bg-gradient-card hover-lift border-border/50">
        <CardHeader>
          <CardTitle>Workflow Aktif</CardTitle>
          <CardDescription>
            Daftar workflow yang sedang berjalan dan statusnya
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Welcome Email Sequence
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Mengirim email selamat datang untuk pengguna baru
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>247 eksekusi hari ini</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last run: 2 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Running
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
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Payment Processing
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Otomatis memproses pembayaran dan update status
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>89 pembayaran diproses</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last run: 30 sec ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Running
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
                  <Timer className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Daily Report Generation
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Generate dan kirim laporan harian otomatis
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Scheduled for 9:00 AM</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Next run: in 14 hours</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge variant="secondary" className="text-xs">
                  Scheduled
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
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

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg border-yellow-200 gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Customer Support Automation
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Auto-response untuk pertanyaan customer support
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-yellow-600">
                      <AlertTriangle className="h-3 w-3" />
                      <span>Rate limit exceeded</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last run: 1 hour ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="secondary"
                  className="bg-yellow-500 text-white text-xs"
                >
                  Warning
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
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
                  <Workflow className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Lead Qualification
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Otomatis menilai dan kategorikan lead baru
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>67 leads processed today</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last run: 5 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Running
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

      {/* Recent Activity */}
      <Card className="bg-gradient-card hover-lift border-border/50">
        <CardHeader>
          <CardTitle>Aktivitas Terbaru</CardTitle>
          <CardDescription>
            Log eksekusi workflow dalam 24 jam terakhir
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 border rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium">
                  Welcome Email Sequence executed successfully
                </p>
                <p className="text-xs text-muted-foreground">
                  Sent welcome email to john.doe@example.com - 2 menit lalu
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 border rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium">
                  Payment Processing completed
                </p>
                <p className="text-xs text-muted-foreground">
                  Processed payment $1,249.99 for order #12345 - 3 menit lalu
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 border rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium">
                  Lead Qualification started
                </p>
                <p className="text-xs text-muted-foreground">
                  Processing new lead from contact form - 5 menit lalu
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 border rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium">
                  Customer Support Automation warning
                </p>
                <p className="text-xs text-muted-foreground">
                  Rate limit exceeded, workflow paused - 1 jam lalu
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
