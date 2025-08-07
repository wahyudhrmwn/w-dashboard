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
  ArrowUpDown,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  BarChart3,
  DollarSign,
  Euro,
  PoundSterling,
  JapaneseYen,
  Plus,
  History,
  Activity,
} from "lucide-react";

export default function ExchangePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Exchange</h1>
          <p className="text-muted-foreground">
            Tukar mata uang dengan nilai tukar real-time terbaik
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <History className="h-4 w-4 mr-2" />
            Riwayat
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Tukar Sekarang
          </Button>
        </div>
      </div>

      {/* Exchange Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Volume Hari Ini
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,847,392</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+15.2%</span> dari kemarin
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Transaksi
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+8.1%</span> dari kemarin
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Spread Rata-rata
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.25%</div>
            <p className="text-xs text-muted-foreground">Sangat kompetitif</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,847</div>
            <p className="text-xs text-muted-foreground">
              Hemat biaya bulan ini
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Exchange Interface */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tukar Mata Uang</CardTitle>
            <CardDescription>
              Masukkan jumlah yang ingin Anda tukar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {/* From Currency */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Dari</label>
                <div className="flex space-x-2">
                  <div className="flex items-center space-x-2 border rounded-md px-3 py-2 min-w-[120px]">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="font-medium">USD</span>
                  </div>
                  <Input
                    placeholder="0.00"
                    className="text-right text-lg font-medium"
                    defaultValue="1,000.00"
                  />
                </div>
              </div>

              {/* Exchange Button */}
              <div className="flex justify-center">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </div>

              {/* To Currency */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Ke</label>
                <div className="flex space-x-2">
                  <div className="flex items-center space-x-2 border rounded-md px-3 py-2 min-w-[120px]">
                    <Euro className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">EUR</span>
                  </div>
                  <Input
                    placeholder="0.00"
                    className="text-right text-lg font-medium"
                    value="847.25"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Exchange Rate Info */}
            <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
              <div className="flex justify-between text-sm">
                <span>Nilai Tukar</span>
                <span className="font-medium">1 USD = 0.84725 EUR</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Biaya</span>
                <span className="font-medium">$2.50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total yang Diterima</span>
                <span className="font-medium text-green-600">€847.25</span>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Tukar Sekarang
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Nilai Tukar Real-time</CardTitle>
                <CardDescription>Update terakhir: 2 detik lalu</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="font-medium">USD</span>
                  </div>
                  <ArrowUpDown className="h-3 w-3 text-muted-foreground" />
                  <div className="flex items-center space-x-2">
                    <Euro className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">EUR</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">0.84725</p>
                  <p className="text-xs text-green-500 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +0.15%
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="font-medium">USD</span>
                  </div>
                  <ArrowUpDown className="h-3 w-3 text-muted-foreground" />
                  <div className="flex items-center space-x-2">
                    <PoundSterling className="h-4 w-4 text-purple-600" />
                    <span className="font-medium">GBP</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">0.78932</p>
                  <p className="text-xs text-red-500 flex items-center">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -0.08%
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="font-medium">USD</span>
                  </div>
                  <ArrowUpDown className="h-3 w-3 text-muted-foreground" />
                  <div className="flex items-center space-x-2">
                    <JapaneseYen className="h-4 w-4 text-red-600" />
                    <span className="font-medium">JPY</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">149.85</p>
                  <p className="text-xs text-green-500 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +0.23%
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Euro className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">EUR</span>
                  </div>
                  <ArrowUpDown className="h-3 w-3 text-muted-foreground" />
                  <div className="flex items-center space-x-2">
                    <PoundSterling className="h-4 w-4 text-purple-600" />
                    <span className="font-medium">GBP</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">0.93187</p>
                  <p className="text-xs text-green-500 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +0.12%
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Exchanges */}
      <Card>
        <CardHeader>
          <CardTitle>Riwayat Penukaran Terbaru</CardTitle>
          <CardDescription>
            Transaksi penukaran mata uang terbaru Anda
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Transaksi</TableHead>
                <TableHead>Dari</TableHead>
                <TableHead>Ke</TableHead>
                <TableHead>Nilai Tukar</TableHead>
                <TableHead>Jumlah</TableHead>
                <TableHead>Diterima</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">EXC-2024-001</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span>USD</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Euro className="h-4 w-4 text-blue-600" />
                    <span>EUR</span>
                  </div>
                </TableCell>
                <TableCell>0.84725</TableCell>
                <TableCell className="font-medium">$5,000.00</TableCell>
                <TableCell className="font-medium text-green-600">
                  €4,236.25
                </TableCell>
                <TableCell>15 Jan 2024, 14:30</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-green-500 text-white">
                    Selesai
                  </Badge>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">EXC-2024-002</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Euro className="h-4 w-4 text-blue-600" />
                    <span>EUR</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <PoundSterling className="h-4 w-4 text-purple-600" />
                    <span>GBP</span>
                  </div>
                </TableCell>
                <TableCell>0.93187</TableCell>
                <TableCell className="font-medium">€2,500.00</TableCell>
                <TableCell className="font-medium text-green-600">
                  £2,329.68
                </TableCell>
                <TableCell>15 Jan 2024, 13:15</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-green-500 text-white">
                    Selesai
                  </Badge>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">EXC-2024-003</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span>USD</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <JapaneseYen className="h-4 w-4 text-red-600" />
                    <span>JPY</span>
                  </div>
                </TableCell>
                <TableCell>149.85</TableCell>
                <TableCell className="font-medium">$1,200.00</TableCell>
                <TableCell className="font-medium text-green-600">
                  ¥179,820
                </TableCell>
                <TableCell>15 Jan 2024, 12:45</TableCell>
                <TableCell>
                  <Badge variant="secondary">Diproses</Badge>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">EXC-2024-004</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <PoundSterling className="h-4 w-4 text-purple-600" />
                    <span>GBP</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span>USD</span>
                  </div>
                </TableCell>
                <TableCell>1.26743</TableCell>
                <TableCell className="font-medium">£800.00</TableCell>
                <TableCell className="font-medium text-green-600">
                  $1,013.94
                </TableCell>
                <TableCell>15 Jan 2024, 11:20</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-green-500 text-white">
                    Selesai
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
