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
  HelpCircle,
  BookOpen,
  MessageSquare,
  Phone,
  Mail,
  FileText,
  Video,
  ExternalLink,
  ChevronRight,
  Clock,
  Star,
  User,
  Zap,
  Shield,
  CreditCard,
  Settings,
  Headphones,
} from "lucide-react";

export default function HelpCenterPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Help Center
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Temukan jawaban untuk pertanyaan Anda dan dapatkan bantuan yang
            diperlukan
          </p>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Button variant="outline" size="sm" className="text-sm">
            <Phone className="h-4 w-4 mr-2" />
            Hubungi Kami
          </Button>
          <Button size="sm" className="text-sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            Live Chat
          </Button>
        </div>
      </div>

      {/* Search */}
      <Card className="bg-gradient-card hover-lift border-border/50">
        <CardContent className="pt-4 sm:pt-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 sm:left-4 top-3 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            <Input
              placeholder="Cari artikel, panduan, atau FAQ..."
              className="pl-10 sm:pl-12 text-sm sm:text-lg h-10 sm:h-12 mobile-input"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quick Help Categories */}
      <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
              <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h3 className="font-medium text-sm sm:text-base">Pembayaran</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Bantuan transaksi & billing
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
              <User className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h3 className="font-medium text-sm sm:text-base">Akun</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Pengaturan & profil
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h3 className="font-medium text-sm sm:text-base">Keamanan</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Privasi & proteksi
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h3 className="font-medium text-sm sm:text-base">API</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Integrasi & development
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        {/* Popular Articles */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Artikel Populer
              </CardTitle>
              <CardDescription>
                Artikel yang paling sering dibaca pengguna
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-start space-x-2 sm:space-x-3 min-w-0 flex-1">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm sm:text-base">
                      Cara Melakukan Transfer Antar Bank
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Panduan lengkap untuk transfer ke rekening bank lain
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span>4.8 (234 reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>5 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
              </div>

              <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-start space-x-2 sm:space-x-3 min-w-0 flex-1">
                  <Video className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm sm:text-base">
                      Setup Two-Factor Authentication
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Tingkatkan keamanan akun dengan 2FA
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span>4.9 (156 reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>3 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
              </div>

              <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-start space-x-2 sm:space-x-3 min-w-0 flex-1">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm sm:text-base">
                      Memahami Biaya Transaksi
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Detail lengkap tentang struktur biaya platform
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span>4.7 (89 reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>7 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
              </div>

              <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-start space-x-2 sm:space-x-3 min-w-0 flex-1">
                  <Video className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm sm:text-base">
                      API Integration Guide
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Tutorial integrasi API untuk developer
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span>4.6 (67 reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>12 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
              </div>

              <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-start space-x-2 sm:space-x-3 min-w-0 flex-1">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm sm:text-base">
                      Troubleshooting Login Issues
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Solusi untuk masalah login dan akses akun
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span>4.5 (123 reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>4 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>
                Pertanyaan yang sering diajukan pengguna
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="space-y-2 sm:space-y-3">
                <details className="border rounded-lg">
                  <summary className="p-3 sm:p-4 cursor-pointer font-medium text-sm sm:text-base hover:bg-muted/50 transition-colors">
                    Bagaimana cara mengubah password akun?
                  </summary>
                  <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-xs sm:text-sm text-muted-foreground">
                    Anda dapat mengubah password melalui Settings &gt; Security
                    &gt; Change Password. Masukkan password lama, kemudian
                    password baru dan konfirmasinya.
                  </div>
                </details>

                <details className="border rounded-lg">
                  <summary className="p-3 sm:p-4 cursor-pointer font-medium text-sm sm:text-base hover:bg-muted/50 transition-colors">
                    Berapa lama waktu yang dibutuhkan untuk transfer?
                  </summary>
                  <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-xs sm:text-sm text-muted-foreground">
                    Transfer antar bank biasanya membutuhkan waktu 1-3 hari
                    kerja. Transfer ke sesama bank akan diproses secara
                    real-time.
                  </div>
                </details>

                <details className="border rounded-lg">
                  <summary className="p-3 sm:p-4 cursor-pointer font-medium text-sm sm:text-base hover:bg-muted/50 transition-colors">
                    Bagaimana cara menambahkan metode pembayaran baru?
                  </summary>
                  <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-xs sm:text-sm text-muted-foreground">
                    Masuk ke Settings &gt; Payment Methods, kemudian klik "Add
                    New Card". Masukkan detail kartu kredit/debit Anda dan
                    verifikasi dengan OTP.
                  </div>
                </details>

                <details className="border rounded-lg">
                  <summary className="p-3 sm:p-4 cursor-pointer font-medium text-sm sm:text-base hover:bg-muted/50 transition-colors">
                    Apakah data saya aman?
                  </summary>
                  <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-xs sm:text-sm text-muted-foreground">
                    Ya, kami menggunakan enkripsi tingkat bank dan mematuhi
                    standar keamanan PCI DSS. Data Anda diproteksi dengan
                    teknologi keamanan terdepan.
                  </div>
                </details>

                <details className="border rounded-lg">
                  <summary className="p-3 sm:p-4 cursor-pointer font-medium text-sm sm:text-base hover:bg-muted/50 transition-colors">
                    Bagaimana cara menghubungi customer support?
                  </summary>
                  <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-xs sm:text-sm text-muted-foreground">
                    Anda dapat menghubungi kami melalui Live Chat (24/7), email
                    support@example.com, atau telepon di +62-21-1234-5678
                    (Senin-Jumat, 09:00-18:00).
                  </div>
                </details>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact & Support */}
        <div className="space-y-4 sm:space-y-6">
          {/* Contact Options */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="h-5 w-5" />
                Hubungi Kami
              </CardTitle>
              <CardDescription>
                Berbagai cara untuk mendapatkan bantuan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-sm sm:text-base">
                    Live Chat
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Tersedia 24/7
                  </p>
                </div>
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs flex-shrink-0"
                >
                  Online
                </Badge>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-sm sm:text-base">
                    Email Support
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground break-all">
                    support@example.com
                  </p>
                </div>
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-sm sm:text-base">
                    Phone Support
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    +62-21-1234-5678
                  </p>
                </div>
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
              </div>
            </CardContent>
          </Card>

          {/* Status & Updates */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Status operasional platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">API Services</span>
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">Payment Processing</span>
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">Mobile App</span>
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">Website</span>
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Operational
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Recent Updates */}
          <Card className="bg-gradient-card hover-lift border-border/50">
            <CardHeader>
              <CardTitle>Recent Updates</CardTitle>
              <CardDescription>Update dan perbaikan terbaru</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 border rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium">
                    Enhanced Security Features
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Added new 2FA options - 2 hari lalu
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 border rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium">
                    API Performance Improvements
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Faster response times - 5 hari lalu
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 border rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium">
                    Mobile App Update v2.1
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Bug fixes and UI improvements - 1 minggu lalu
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
