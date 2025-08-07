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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Kelola pengaturan akun, keamanan, dan preferensi aplikasi
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <Button size="sm">
            <Save className="h-4 w-4 mr-2" />
            Simpan Semua
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Kategori Pengaturan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="default" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Profil
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Keamanan
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Notifikasi
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <CreditCard className="h-4 w-4 mr-2" />
                Pembayaran
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Palette className="h-4 w-4 mr-2" />
                Tampilan
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Database className="h-4 w-4 mr-2" />
                Integrasi
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-6">
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
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">S</span>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" size="sm">
                    Upload Foto
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    JPG, PNG atau GIF. Maksimal 2MB.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nama Depan</label>
                  <Input defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nama Belakang</label>
                  <Input defaultValue="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input defaultValue="john.doe@example.com" type="email" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Nomor Telepon</label>
                <Input defaultValue="+62 812 3456 7890" type="tel" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Bio</label>
                <textarea
                  className="w-full p-3 border rounded-md resize-none"
                  rows={3}
                  placeholder="Ceritakan sedikit tentang diri Anda..."
                  defaultValue="Software engineer dengan passion di bidang fintech dan AI."
                />
              </div>

              <div className="flex justify-end">
                <Button>
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
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Two-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      Tambahan keamanan untuk akun Anda
                    </p>
                  </div>
                  <Badge variant="default" className="bg-green-500 text-white">
                    Aktif
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Login Alerts</h4>
                    <p className="text-sm text-muted-foreground">
                      Notifikasi saat ada login dari perangkat baru
                    </p>
                  </div>
                  <Badge variant="default" className="bg-green-500 text-white">
                    Aktif
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Session Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Kelola sesi login aktif
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Lihat Sesi
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Ubah Password</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Password Saat Ini
                    </label>
                    <div className="relative">
                      <Input type="password" />
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
                      <Input type="password" />
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
                      <Input type="password" />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1 h-8 w-8 p-0"
                      >
                        <EyeOff className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button>
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
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">
                        Terima notifikasi melalui email
                      </p>
                    </div>
                  </div>
                  <Badge variant="default" className="bg-green-500 text-white">
                    Aktif
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">Push Notifications</h4>
                      <p className="text-sm text-muted-foreground">
                        Notifikasi push di perangkat mobile
                      </p>
                    </div>
                  </div>
                  <Badge variant="default" className="bg-green-500 text-white">
                    Aktif
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">In-App Notifications</h4>
                      <p className="text-sm text-muted-foreground">
                        Notifikasi dalam aplikasi
                      </p>
                    </div>
                  </div>
                  <Badge variant="default" className="bg-green-500 text-white">
                    Aktif
                  </Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Kategori Notifikasi</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Transaksi & Pembayaran</span>
                    <Badge
                      variant="default"
                      className="bg-green-500 text-white"
                    >
                      Aktif
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Keamanan & Login</span>
                    <Badge
                      variant="default"
                      className="bg-green-500 text-white"
                    >
                      Aktif
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Marketing & Promosi</span>
                    <Badge variant="secondary">Nonaktif</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Update Sistem</span>
                    <Badge
                      variant="default"
                      className="bg-green-500 text-white"
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
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
                      VISA
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4532</p>
                      <p className="text-sm text-muted-foreground">
                        Expires 12/24
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="default"
                      className="bg-green-500 text-white"
                    >
                      Primary
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      MC
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 8901</p>
                      <p className="text-sm text-muted-foreground">
                        Expires 08/25
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Backup</Badge>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
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
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Production API Key</p>
                  <p className="text-sm text-muted-foreground font-mono">
                    pk_live_•••••••••••••••••••••••••••••••••••••••••••
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="default" className="bg-green-500 text-white">
                    Active
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Test API Key</p>
                  <p className="text-sm text-muted-foreground font-mono">
                    pk_test_•••••••••••••••••••••••••••••••••••••••••••
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Test</Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button variant="outline" className="w-full">
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
              <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-red-600">Delete Account</h4>
                  <p className="text-sm text-muted-foreground">
                    Hapus akun dan semua data secara permanen
                  </p>
                </div>
                <Button variant="destructive" size="sm">
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
