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
import { Separator } from "@/components/ui/separator";
import {
  Settings,
  User,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Palette,
  Database,
  Key,
  Mail,
  Smartphone,
  Lock,
  Eye,
  EyeOff,
  Save,
  RefreshCw,
  Trash2,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Settings
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Kelola pengaturan akun, keamanan, dan preferensi aplikasi
          </p>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Button variant="outline" size="sm" className="text-sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <Button size="sm" className="text-sm">
            <Save className="h-4 w-4 mr-2" />
            Simpan Semua
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-4">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">
                Kategori Pengaturan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="default"
                className="w-full justify-start text-sm"
              >
                <User className="h-4 w-4 mr-2" />
                Profil
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm">
                <Shield className="h-4 w-4 mr-2" />
                Keamanan
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifikasi
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm">
                <CreditCard className="h-4 w-4 mr-2" />
                Pembayaran
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm">
                <Palette className="h-4 w-4 mr-2" />
                Tampilan
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm">
                <Database className="h-4 w-4 mr-2" />
                Integrasi
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-4 sm:space-y-6">
          {/* Profile Settings */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informasi Profil
              </CardTitle>
              <CardDescription>
                Kelola informasi dasar akun Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto sm:mx-0">
                  <span className="text-white text-xl sm:text-2xl font-bold">
                    S
                  </span>
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <Button variant="outline" size="sm" className="text-sm">
                    Upload Foto
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    JPG, PNG atau GIF. Maksimal 2MB.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nama Depan</label>
                  <Input defaultValue="John" className="mobile-input" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nama Belakang</label>
                  <Input defaultValue="Doe" className="mobile-input" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  defaultValue="john.doe@example.com"
                  type="email"
                  className="mobile-input"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Nomor Telepon</label>
                <Input
                  defaultValue="+62 812 3456 7890"
                  type="tel"
                  className="mobile-input"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Bio</label>
                <textarea
                  className="w-full p-3 border rounded-md resize-none text-sm sm:text-base mobile-input"
                  rows={3}
                  placeholder="Ceritakan sedikit tentang diri Anda..."
                  defaultValue="Software engineer dengan passion di bidang fintech dan AI."
                />
              </div>

              <div className="flex justify-end">
                <Button className="text-sm">
                  <Save className="h-4 w-4 mr-2" />
                  Simpan Perubahan
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Keamanan
              </CardTitle>
              <CardDescription>
                Kelola pengaturan keamanan dan autentikasi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm sm:text-base">
                      Two-Factor Authentication
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Tambahan keamanan untuk akun Anda
                    </p>
                  </div>
                  <Badge
                    variant="default"
                    className="bg-green-500 text-white text-xs flex-shrink-0 self-start sm:self-auto"
                  >
                    Aktif
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm sm:text-base">
                      Login Alerts
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Notifikasi saat ada login dari perangkat baru
                    </p>
                  </div>
                  <Badge
                    variant="default"
                    className="bg-green-500 text-white text-xs flex-shrink-0 self-start sm:self-auto"
                  >
                    Aktif
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm sm:text-base">
                      Session Management
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Kelola sesi login aktif
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-sm flex-shrink-0 self-start sm:self-auto"
                  >
                    Lihat Sesi
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium text-sm sm:text-base">
                  Ubah Password
                </h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Password Saat Ini
                    </label>
                    <div className="relative">
                      <Input type="password" className="mobile-input" />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1 h-8 w-8 p-0"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password Baru</label>
                    <div className="relative">
                      <Input type="password" className="mobile-input" />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1 h-8 w-8 p-0"
                      >
                        <EyeOff className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Konfirmasi Password Baru
                    </label>
                    <div className="relative">
                      <Input type="password" className="mobile-input" />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1 h-8 w-8 p-0"
                      >
                        <EyeOff className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button className="text-sm">
                    <Lock className="h-4 w-4 mr-2" />
                    Ubah Password
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Pengaturan Notifikasi
              </CardTitle>
              <CardDescription>
                Kelola bagaimana Anda menerima notifikasi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-sm sm:text-base">
                        Email Notifications
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Terima notifikasi melalui email
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="default"
                    className="bg-green-500 text-white text-xs flex-shrink-0 self-start sm:self-auto"
                  >
                    Aktif
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <Smartphone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-sm sm:text-base">
                        Push Notifications
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Notifikasi push di perangkat mobile
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="default"
                    className="bg-green-500 text-white text-xs flex-shrink-0 self-start sm:self-auto"
                  >
                    Aktif
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <Bell className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-sm sm:text-base">
                        In-App Notifications
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Notifikasi dalam aplikasi
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="default"
                    className="bg-green-500 text-white text-xs flex-shrink-0 self-start sm:self-auto"
                  >
                    Aktif
                  </Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium text-sm sm:text-base">
                  Kategori Notifikasi
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm">
                      Transaksi & Pembayaran
                    </span>
                    <Badge
                      variant="default"
                      className="bg-green-500 text-white text-xs"
                    >
                      Aktif
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm">Keamanan & Login</span>
                    <Badge
                      variant="default"
                      className="bg-green-500 text-white text-xs"
                    >
                      Aktif
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm">
                      Marketing & Promosi
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      Nonaktif
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm">Update Sistem</span>
                    <Badge
                      variant="default"
                      className="bg-green-500 text-white text-xs"
                    >
                      Aktif
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Settings */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Metode Pembayaran
              </CardTitle>
              <CardDescription>
                Kelola kartu kredit dan metode pembayaran
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                      VISA
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">
                        •••• •••• •••• 4532
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Expires 12/24
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0 self-start sm:self-auto">
                    <Badge
                      variant="default"
                      className="bg-green-500 text-white text-xs"
                    >
                      Primary
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                    >
                      <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-orange-600 rounded text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                      MC
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">
                        •••• •••• •••• 8901
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Expires 08/25
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0 self-start sm:self-auto">
                    <Badge variant="secondary" className="text-xs">
                      Backup
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                    >
                      <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full text-sm">
                <CreditCard className="h-4 w-4 mr-2" />
                Tambah Kartu Baru
              </Button>
            </CardContent>
          </Card>

          {/* API Keys */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                API Keys
              </CardTitle>
              <CardDescription>
                Kelola API keys untuk integrasi eksternal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm sm:text-base">
                    Production API Key
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono break-all">
                    pk_live_•••••••••••••••••••••••••••••••••••••••••••
                  </p>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0 self-start sm:self-auto">
                  <Badge
                    variant="default"
                    className="bg-green-500 text-white text-xs"
                  >
                    Active
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                  >
                    <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm sm:text-base">
                    Test API Key
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono break-all">
                    pk_test_•••••••••••••••••••••••••••••••••••••••••••
                  </p>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0 self-start sm:self-auto">
                  <Badge variant="secondary" className="text-xs">
                    Test
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                  >
                    <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>

              <Button variant="outline" className="w-full text-sm">
                <Key className="h-4 w-4 mr-2" />
                Generate New Key
              </Button>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600">Danger Zone</CardTitle>
              <CardDescription>
                Tindakan yang tidak dapat dibatalkan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-red-200 rounded-lg gap-3 sm:gap-0">
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-red-600 text-sm sm:text-base">
                    Delete Account
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Hapus akun dan semua data secara permanen
                  </p>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  className="text-sm flex-shrink-0 self-start sm:self-auto"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
