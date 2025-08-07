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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Automation</h1>
          <p className="text-muted-foreground">
            Otomatisasi workflow dan proses bisnis untuk meningkatkan efisiensi
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Template
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Buat Workflow
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
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

        <Card>
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

        <Card>
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

        <Card>
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
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Email Automation</h3>
                <p className="text-sm text-muted-foreground">
                  Setup email workflows
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Buat
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Data Sync</h3>
                <p className="text-sm text-muted-foreground">
                  Automated data synchronization
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Buat
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Timer className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Scheduled Tasks</h3>
                <p className="text-sm text-muted-foreground">
                  Time-based automation
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Buat
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Filter and Search */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Cari workflow..." className="pl-8 w-[300px]" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Semua (47)</Badge>
          <Badge variant="default" className="bg-green-500 text-white">
            Aktif (32)
          </Badge>
          <Badge variant="secondary">Nonaktif (15)</Badge>
        </div>
      </div>

      {/* Active Workflows */}
      <Card>
        <CardHeader>
          <CardTitle>Workflow Aktif</CardTitle>
          <CardDescription>
            Daftar workflow yang sedang berjalan dan statusnya
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Welcome Email Sequence</h3>
                  <p className="text-sm text-muted-foreground">
                    Mengirim email selamat datang untuk pengguna baru
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>247 eksekusi hari ini</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last run: 2 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="default" className="bg-green-500 text-white">
                  Running
                </Badge>
                <Button variant="outline" size="sm">
                  <Pause className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Payment Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Otomatis memproses pembayaran dan update status
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>89 pembayaran diproses</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last run: 30 sec ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="default" className="bg-green-500 text-white">
                  Running
                </Badge>
                <Button variant="outline" size="sm">
                  <Pause className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Timer className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Daily Report Generation</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate dan kirim laporan harian otomatis
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Scheduled for 9:00 AM</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Next run: in 14 hours</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Scheduled</Badge>
                <Button variant="outline" size="sm">
                  <Play className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg border-yellow-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Customer Support Automation</h3>
                  <p className="text-sm text-muted-foreground">
                    Auto-response untuk pertanyaan customer support
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1 text-sm text-yellow-600">
                      <AlertTriangle className="h-3 w-3" />
                      <span>Rate limit exceeded</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last run: 1 hour ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-yellow-500 text-white">
                  Warning
                </Badge>
                <Button variant="outline" size="sm">
                  <Play className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Workflow className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Lead Qualification</h3>
                  <p className="text-sm text-muted-foreground">
                    Otomatis menilai dan kategorikan lead baru
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>67 leads processed today</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last run: 5 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="default" className="bg-green-500 text-white">
                  Running
                </Badge>
                <Button variant="outline" size="sm">
                  <Pause className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Aktivitas Terbaru</CardTitle>
          <CardDescription>
            Log eksekusi workflow dalam 24 jam terakhir
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Welcome Email Sequence executed successfully
                </p>
                <p className="text-xs text-muted-foreground">
                  Sent welcome email to john.doe@example.com - 2 menit lalu
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Payment Processing completed
                </p>
                <p className="text-xs text-muted-foreground">
                  Processed payment $1,249.99 for order #12345 - 3 menit lalu
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Lead Qualification started
                </p>
                <p className="text-xs text-muted-foreground">
                  Processing new lead from contact form - 5 menit lalu
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">
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
