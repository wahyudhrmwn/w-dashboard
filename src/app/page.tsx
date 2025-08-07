import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Selamat datang kembali! Berikut adalah ringkasan aktivitas hari ini.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="hover-lift">
            Export
          </Button>
          <Button className="bg-gradient-elegant hover:bg-gradient-elegant/90 hover-lift shadow-lg">
            Tambah Transaksi
          </Button>
        </div>
      </div>

      {/* Main 2 Column Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Metrics Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gradient-card hover-lift border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20m8-9H4" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$19,270.56</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+20.1%</span> dari bulan lalu
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card hover-lift border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Users</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+180.1%</span> dari bulan
                  lalu
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card hover-lift border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Orders
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+19%</span> dari bulan lalu
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Chart Section */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                Grafik penjualan dan performa bulanan
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-lg">
                <p className="text-muted-foreground">
                  Chart akan ditampilkan di sini
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Transactions Table */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle>Transaksi Terbaru</CardTitle>
              <CardDescription>
                Daftar transaksi terbaru dari sistem Anda.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Total Amount</TableHead>
                    <TableHead>Payment Period</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV-12345672</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-medium text-xs">
                          SH
                        </div>
                        <span>Samirah Hakim</span>
                      </div>
                    </TableCell>
                    <TableCell>$1,149.00 USD</TableCell>
                    <TableCell>Jan 10 - Jan 17</TableCell>
                    <TableCell>
                      <Badge variant="success">Received</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">TXN-987654321</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-chart-3 to-chart-2 rounded-full flex items-center justify-center text-white font-medium text-xs">
                          JL
                        </div>
                        <span>Jordan Lee</span>
                      </div>
                    </TableCell>
                    <TableCell>$2,072.00 USD</TableCell>
                    <TableCell>Jan 16 - Jan 17</TableCell>
                    <TableCell>
                      <Badge variant="warning">Failed</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV-567890123</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-chart-5 to-destructive rounded-full flex items-center justify-center text-white font-medium text-xs">
                          AK
                        </div>
                        <span>Alexis Kim</span>
                      </div>
                    </TableCell>
                    <TableCell>$977.00 USD</TableCell>
                    <TableCell>Jan 20 - Jan 29</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Processed</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Recent Sales */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>
                Anda memiliki 265 penjualan bulan ini.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-9 h-9 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-medium text-sm">
                    OH
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Olivia Martin
                    </p>
                    <p className="text-sm text-muted-foreground">
                      olivia.martin@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+$1,999.00</div>
                </div>
                <div className="flex items-center">
                  <div className="w-9 h-9 bg-gradient-to-r from-chart-3 to-chart-2 rounded-full flex items-center justify-center text-white font-medium text-sm">
                    JL
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Jackson Lee
                    </p>
                    <p className="text-sm text-muted-foreground">
                      jackson.lee@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+$39.00</div>
                </div>
                <div className="flex items-center">
                  <div className="w-9 h-9 bg-gradient-to-r from-chart-5 to-destructive rounded-full flex items-center justify-center text-white font-medium text-sm">
                    IN
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Isabella Nguyen
                    </p>
                    <p className="text-sm text-muted-foreground">
                      isabella.nguyen@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+$299.00</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>Statistik cepat hari ini</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Active Users</span>
                </div>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[hsl(var(--success))] rounded-full"></div>
                  <span className="text-sm">Orders Today</span>
                </div>
                <span className="font-medium">89</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[hsl(var(--warning))] rounded-full"></div>
                  <span className="text-sm">Pending</span>
                </div>
                <span className="font-medium">12</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-sm">Failed</span>
                </div>
                <span className="font-medium">3</span>
              </div>
            </CardContent>
          </Card>

          {/* Activity Feed */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle>Activity Feed</CardTitle>
              <CardDescription>Aktivitas terbaru sistem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[hsl(var(--success))] rounded-full mt-2"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Payment Received</p>
                    <p className="text-xs text-muted-foreground">
                      $1,200 dari Jordan Lee - 2 menit lalu
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">New User Registered</p>
                    <p className="text-xs text-muted-foreground">
                      Sarah Johnson bergabung - 5 menit lalu
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[hsl(var(--warning))] rounded-full mt-2"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Order Processing</p>
                    <p className="text-xs text-muted-foreground">
                      Order #12345 sedang diproses - 10 menit lalu
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Credit Card Info */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Metode pembayaran yang tersedia</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
                      VISA
                    </div>
                    <div>
                      <p className="text-sm font-medium">•••• •••• •••• 4532</p>
                      <p className="text-xs text-muted-foreground">
                        Expires 12/24
                      </p>
                    </div>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      MC
                    </div>
                    <div>
                      <p className="text-sm font-medium">•••• •••• •••• 8901</p>
                      <p className="text-xs text-muted-foreground">
                        Expires 08/25
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">Backup</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
