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
  Activity,
  Zap,
  Link,
  ExternalLink,
  CheckCircle,
  XCircle,
  Clock,
  Globe,
  Webhook,
  Database,
} from "lucide-react";

export default function IntegrationsPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Integrations
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Hubungkan aplikasi Anda dengan layanan eksternal dan API
          </p>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Button variant="outline" size="sm" className="text-sm">
            <Settings className="h-4 w-4 mr-2" />
            Pengaturan
          </Button>
          <Button size="sm" className="text-sm">
            <Plus className="h-4 w-4 mr-2" />
            Tambah Integrasi
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Integrasi
            </CardTitle>
            <Link className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+3</span> bulan ini
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktif</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              75% dari total integrasi
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Calls</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">847K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+12%</span> dari bulan lalu
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Zap className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.2%</div>
            <p className="text-xs text-muted-foreground">
              Uptime yang sangat baik
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari integrasi..."
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
            Semua (24)
          </Badge>
          <Badge variant="default" className="bg-green-500 text-white text-xs">
            Aktif (18)
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Nonaktif (6)
          </Badge>
        </div>
      </div>

      {/* Popular Integrations */}
      <Card className="bg-gradient-card hover-lift border-border/50">
        <CardHeader>
          <CardTitle>Integrasi Populer</CardTitle>
          <CardDescription>
            Integrasi yang paling sering digunakan oleh pengguna
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm sm:text-base">Stripe</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Payment Gateway
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Aktif
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                >
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Webhook className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm sm:text-base">Slack</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Team Communication
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Aktif
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                >
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm sm:text-base">
                    Google Analytics
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Web Analytics
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Aktif
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                >
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm sm:text-base">Mailchimp</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Email Marketing
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                <Badge variant="secondary" className="text-xs">
                  Nonaktif
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                >
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Webhook className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm sm:text-base">Zapier</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Automation Platform
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Aktif
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                >
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm sm:text-base">Salesforce</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    CRM Platform
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                <Badge
                  variant="secondary"
                  className="bg-yellow-500 text-white text-xs"
                >
                  Pending
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                >
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Integrations */}
      <Card className="bg-gradient-card hover-lift border-border/50">
        <CardHeader>
          <CardTitle>Integrasi Aktif</CardTitle>
          <CardDescription>
            Daftar lengkap semua integrasi yang sedang berjalan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Stripe Payment Gateway
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Memproses pembayaran dan mengelola langganan
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>847 API calls hari ini</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last sync: 2 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Aktif
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-2 sm:px-3"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Webhook className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Slack Notifications
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Mengirim notifikasi sistem ke channel Slack
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>23 messages sent today</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last message: 5 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Aktif
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-2 sm:px-3"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg border-red-200 gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Mailchimp Integration
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Sinkronisasi email list dan campaign management
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-red-500">
                      <XCircle className="h-3 w-3" />
                      <span>Authentication failed</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last attempt: 30 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge variant="destructive" className="text-xs">
                  Error
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-2 sm:px-3"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
