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
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  Download,
  Plus,
  CreditCard,
  Smartphone,
  Building,
  Wallet,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function PaymentPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payment</h1>
          <p className="text-muted-foreground">
            Kelola metode pembayaran dan proses transaksi pembayaran
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Tambah Metode
          </Button>
        </div>
      </div>

      {/* Payment Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Pembayaran
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$89,432.12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+18.2%</span> dari bulan lalu
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Berhasil</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">96.8%</span> success rate
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">Menunggu konfirmasi</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rata-rata</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$312.45</div>
            <p className="text-xs text-muted-foreground">Per transaksi</p>
          </CardContent>
        </Card>
      </div>

      {/* Payment Methods */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader>
            <CardTitle>Metode Pembayaran Aktif</CardTitle>
            <CardDescription>
              Metode pembayaran yang tersedia untuk pelanggan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Credit Card</p>
                  <p className="text-sm text-muted-foreground">
                    Visa, Mastercard, Amex
                  </p>
                </div>
              </div>
              <Badge variant="default" className="bg-green-500 text-white">
                Aktif
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Digital Wallet</p>
                  <p className="text-sm text-muted-foreground">
                    PayPal, Apple Pay, Google Pay
                  </p>
                </div>
              </div>
              <Badge variant="default" className="bg-green-500 text-white">
                Aktif
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Bank Transfer</p>
                  <p className="text-sm text-muted-foreground">
                    Direct bank transfer
                  </p>
                </div>
              </div>
              <Badge variant="default" className="bg-green-500 text-white">
                Aktif
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Cryptocurrency</p>
                  <p className="text-sm text-muted-foreground">
                    Bitcoin, Ethereum
                  </p>
                </div>
              </div>
              <Badge variant="secondary">Nonaktif</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader>
            <CardTitle>Payment Analytics</CardTitle>
            <CardDescription>
              Analisis metode pembayaran yang paling populer
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Credit Card</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Digital Wallet</span>
                <span className="text-sm font-medium">35%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: "35%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Bank Transfer</span>
                <span className="text-sm font-medium">20%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Payments */}
      <Card className="bg-gradient-card hover-lift border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Pembayaran Terbaru</CardTitle>
              <CardDescription>
                Daftar pembayaran yang baru saja diproses
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari pembayaran..."
                  className="pl-8 w-[250px]"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Pembayaran</TableHead>
                <TableHead>Pelanggan</TableHead>
                <TableHead>Metode</TableHead>
                <TableHead>Jumlah</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">PAY-2024-001</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                      JD
                    </div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">
                        john@example.com
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-4 w-4 text-blue-600" />
                    <span>•••• 4532</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">$1,249.99</TableCell>
                <TableCell>15 Jan 2024, 14:30</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-green-500 text-white">
                    Berhasil
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Detail
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">PAY-2024-002</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                      AS
                    </div>
                    <div>
                      <p className="font-medium">Alice Smith</p>
                      <p className="text-sm text-muted-foreground">
                        alice@example.com
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-4 w-4 text-purple-600" />
                    <span>PayPal</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">$875.50</TableCell>
                <TableCell>15 Jan 2024, 13:45</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-green-500 text-white">
                    Berhasil
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Detail
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">PAY-2024-003</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                      BJ
                    </div>
                    <div>
                      <p className="font-medium">Bob Johnson</p>
                      <p className="text-sm text-muted-foreground">
                        bob@example.com
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 text-green-600" />
                    <span>Bank Transfer</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">$2,150.00</TableCell>
                <TableCell>15 Jan 2024, 12:20</TableCell>
                <TableCell>
                  <Badge variant="secondary">Pending</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Detail
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">PAY-2024-004</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                      EM
                    </div>
                    <div>
                      <p className="font-medium">Emma Martinez</p>
                      <p className="text-sm text-muted-foreground">
                        emma@example.com
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-4 w-4 text-red-600" />
                    <span>•••• 8901</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">$567.25</TableCell>
                <TableCell>15 Jan 2024, 11:15</TableCell>
                <TableCell>
                  <Badge variant="destructive">Gagal</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Detail
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">PAY-2024-005</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                      DW
                    </div>
                    <div>
                      <p className="font-medium">David Wilson</p>
                      <p className="text-sm text-muted-foreground">
                        david@example.com
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-4 w-4 text-blue-600" />
                    <span>Apple Pay</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">$1,325.75</TableCell>
                <TableCell>15 Jan 2024, 10:30</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-green-500 text-white">
                    Berhasil
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Detail
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
