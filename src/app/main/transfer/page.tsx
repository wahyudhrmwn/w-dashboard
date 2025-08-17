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
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  Building2,
  Smartphone,
  Eye,
  MoreHorizontal,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react";

export default function TransferPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Transfer
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Kirim uang dengan mudah dan aman ke rekening bank manapun
          </p>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Button variant="outline" size="sm" className="text-sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="text-sm">
            <Send className="h-4 w-4 mr-2" />
            Transfer Baru
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Transfer
            </CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$127,450.89</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+12.3%</span> dari bulan lalu
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Transfer Hari Ini
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+5</span> dari kemarin
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Berhasil</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">98.7%</span> success rate
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Penerima Aktif
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Kontak tersimpan</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3">
        {/* Transfer Form */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Transfer Baru
              </CardTitle>
              <CardDescription>
                Kirim uang ke rekening bank atau e-wallet
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Dari Rekening</label>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">BCA - •••• 1234</p>
                      <p className="text-sm text-muted-foreground">
                        Saldo: $25,847.50
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Jenis Transfer</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="justify-start"
                    >
                      <Building2 className="h-4 w-4 mr-2" />
                      Bank
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="justify-start"
                    >
                      <Smartphone className="h-4 w-4 mr-2" />
                      E-Wallet
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nama Penerima</label>
                  <Input
                    placeholder="Masukkan nama penerima"
                    className="mobile-input"
                  />
                </div>

                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bank Tujuan</label>
                    <Input placeholder="Pilih bank" className="mobile-input" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Nomor Rekening
                    </label>
                    <Input placeholder="1234567890" className="mobile-input" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Jumlah Transfer</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="0.00"
                      className="pl-10 text-lg font-medium mobile-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Catatan (Opsional)
                  </label>
                  <Input
                    placeholder="Tulis catatan transfer..."
                    className="mobile-input"
                  />
                </div>
              </div>

              <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span>Jumlah Transfer</span>
                  <span className="font-medium">$1,000.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Biaya Admin</span>
                  <span className="font-medium">$2.50</span>
                </div>
                <div className="flex justify-between text-sm border-t pt-2">
                  <span className="font-medium">Total Debet</span>
                  <span className="font-medium text-lg">$1,002.50</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:space-x-3 sm:gap-0">
                <Button variant="outline" className="flex-1 text-sm">
                  Simpan sebagai Template
                </Button>
                <Button className="flex-1 text-sm">
                  <Send className="h-4 w-4 mr-2" />
                  Kirim Transfer
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Transfers */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Transfer Terbaru</CardTitle>
                  <CardDescription>
                    Riwayat transfer dalam 30 hari terakhir
                  </CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:space-x-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Cari transfer..."
                      className="pl-8 w-full sm:w-[200px]"
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
                      <TableHead className="min-w-[150px]">Penerima</TableHead>
                      <TableHead className="min-w-[80px]">Bank</TableHead>
                      <TableHead className="min-w-[100px]">Jumlah</TableHead>
                      <TableHead className="min-w-[140px]">Tanggal</TableHead>
                      <TableHead className="min-w-[100px]">Status</TableHead>
                      <TableHead className="text-right min-w-[80px]">
                        Aksi
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                            JD
                          </div>
                          <div>
                            <p className="font-medium">John Doe</p>
                            <p className="text-sm text-muted-foreground">
                              1234567890
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Building2 className="h-4 w-4 text-blue-600" />
                          <span>BCA</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">$1,250.00</TableCell>
                      <TableCell>15 Jan 2024, 14:30</TableCell>
                      <TableCell>
                        <Badge
                          variant="default"
                          className="bg-green-500 text-white"
                        >
                          Berhasil
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                            AS
                          </div>
                          <div>
                            <p className="font-medium">Alice Smith</p>
                            <p className="text-sm text-muted-foreground">
                              9876543210
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Building2 className="h-4 w-4 text-red-600" />
                          <span>Mandiri</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">$850.75</TableCell>
                      <TableCell>15 Jan 2024, 13:45</TableCell>
                      <TableCell>
                        <Badge
                          variant="default"
                          className="bg-green-500 text-white"
                        >
                          Berhasil
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
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

        {/* Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* Quick Transfer */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle>Transfer Cepat</CardTitle>
              <CardDescription>
                Transfer ke kontak yang sering digunakan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                    JD
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">BCA - 1234</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Tambah Kontak
              </Button>
            </CardContent>
          </Card>

          {/* Transfer Tips */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle>Tips Transfer Aman</CardTitle>
              <CardDescription>
                Panduan untuk transfer yang aman
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">
                    Verifikasi Data Penerima
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Pastikan nama dan nomor rekening benar
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <Clock className="h-4 w-4 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Waktu Operasional</p>
                  <p className="text-xs text-muted-foreground">
                    Transfer antar bank: 06:00 - 21:00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Batas Transfer</p>
                  <p className="text-xs text-muted-foreground">
                    Maksimal $50,000 per hari
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
