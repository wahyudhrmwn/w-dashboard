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
  Eye,
  MoreHorizontal,
  ArrowUpDown,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function TransactionPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Transaksi
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Kelola dan pantau semua transaksi keuangan Anda
          </p>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Button variant="outline" size="sm" className="text-sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="text-sm">
            <Plus className="h-4 w-4 mr-2" />
            Transaksi Baru
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Transaksi
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+12.5%</span> dari bulan lalu
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Volume Transaksi
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+20.1%</span> dari bulan lalu
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Berhasil</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,180</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">94.6%</span> success rate
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gagal</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500">5.4%</span> failure rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="bg-gradient-card hover-lift border-border/50">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Daftar Transaksi</CardTitle>
              <CardDescription>
                Semua transaksi yang telah dilakukan dalam sistem
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari transaksi..."
                  className="pl-8 w-full sm:w-[250px] mobile-input"
                />
              </div>
              <Button variant="outline" size="sm" className="text-sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="mobile-table">
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[100px]">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 p-0 text-xs"
                    >
                      ID Transaksi
                      <ArrowUpDown className="ml-2 h-3 w-3" />
                    </Button>
                  </TableHead>
                  <TableHead className="min-w-[140px]">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 p-0 text-xs"
                    >
                      Tanggal
                      <ArrowUpDown className="ml-2 h-3 w-3" />
                    </Button>
                  </TableHead>
                  <TableHead className="min-w-[120px]">Pengirim</TableHead>
                  <TableHead className="min-w-[120px]">Penerima</TableHead>
                  <TableHead className="min-w-[80px]">Tipe</TableHead>
                  <TableHead className="min-w-[100px]">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 p-0 text-xs"
                    >
                      Jumlah
                      <ArrowUpDown className="ml-2 h-3 w-3" />
                    </Button>
                  </TableHead>
                  <TableHead className="min-w-[100px]">Status</TableHead>
                  <TableHead className="text-right min-w-[80px]">
                    Aksi
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">TXN-001</TableCell>
                  <TableCell>2024-01-15 14:30</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-xs avatar-small">
                        JD
                      </div>
                      <span className="text-truncate">John Doe</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-medium text-xs avatar-small">
                        JS
                      </div>
                      <span className="text-truncate">Jane Smith</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Transfer</Badge>
                  </TableCell>
                  <TableCell className="font-medium">$1,250.00</TableCell>
                  <TableCell>
                    <Badge
                      variant="default"
                      className="bg-green-500 text-white"
                    >
                      Berhasil
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-1 action-buttons">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">TXN-002</TableCell>
                  <TableCell>2024-01-15 13:45</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-medium text-xs avatar-small">
                        AK
                      </div>
                      <span className="text-truncate">Alice Kim</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-medium text-xs avatar-small">
                        BL
                      </div>
                      <span className="text-truncate">Bob Lee</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Payment</Badge>
                  </TableCell>
                  <TableCell className="font-medium">$850.75</TableCell>
                  <TableCell>
                    <Badge
                      variant="default"
                      className="bg-green-500 text-white"
                    >
                      Berhasil
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-1 action-buttons">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">TXN-003</TableCell>
                  <TableCell>2024-01-15 12:20</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-medium text-xs avatar-small">
                        MJ
                      </div>
                      <span className="text-truncate">Michael Johnson</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-xs avatar-small">
                        SW
                      </div>
                      <span className="text-truncate">Sarah Wilson</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Exchange</Badge>
                  </TableCell>
                  <TableCell className="font-medium">$2,100.50</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Gagal</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-1 action-buttons">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">TXN-004</TableCell>
                  <TableCell>2024-01-15 11:15</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium text-xs avatar-small">
                        ER
                      </div>
                      <span className="text-truncate">Emma Rodriguez</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-xs avatar-small">
                        DT
                      </div>
                      <span className="text-truncate">David Taylor</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Transfer</Badge>
                  </TableCell>
                  <TableCell className="font-medium">$675.25</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pending</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-1 action-buttons">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">TXN-005</TableCell>
                  <TableCell>2024-01-15 10:30</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-medium text-xs avatar-small">
                        RB
                      </div>
                      <span className="text-truncate">Robert Brown</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-medium text-xs avatar-small">
                        LG
                      </div>
                      <span className="text-truncate">Lisa Garcia</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Payment</Badge>
                  </TableCell>
                  <TableCell className="font-medium">$1,425.00</TableCell>
                  <TableCell>
                    <Badge
                      variant="default"
                      className="bg-green-500 text-white"
                    >
                      Berhasil
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-1 action-buttons">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
