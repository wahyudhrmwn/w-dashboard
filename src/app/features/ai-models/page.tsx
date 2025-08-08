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
  Brain,
  Cpu,
  Database,
  Activity,
  Zap,
  BarChart3,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Upload,
  Download,
} from "lucide-react";

export default function AIModelsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Models</h1>
          <p className="text-muted-foreground">
            Kelola, train, dan deploy machine learning models untuk berbagai
            kebutuhan
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Import Model
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Train New Model
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Models</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+4</span> bulan ini
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deployed</CardTitle>
            <Zap className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              64% dari total models
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Predictions Today
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">847K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+23%</span> dari kemarin
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Accuracy</CardTitle>
            <BarChart3 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">Across all models</p>
          </CardContent>
        </Card>
      </div>

      {/* Model Categories */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-medium">NLP Models</h3>
            <p className="text-sm text-muted-foreground">
              Text processing & analysis
            </p>
            <Badge variant="default" className="bg-blue-500 text-white mt-2">
              8 Models
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-3">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-medium">Prediction Models</h3>
            <p className="text-sm text-muted-foreground">
              Forecasting & analytics
            </p>
            <Badge variant="default" className="bg-green-500 text-white mt-2">
              7 Models
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-medium">Computer Vision</h3>
            <p className="text-sm text-muted-foreground">
              Image & video analysis
            </p>
            <Badge variant="default" className="bg-purple-500 text-white mt-2">
              6 Models
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-3">
              <Database className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-medium">Recommendation</h3>
            <p className="text-sm text-muted-foreground">
              Personalization systems
            </p>
            <Badge variant="default" className="bg-orange-500 text-white mt-2">
              7 Models
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Filter and Search */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Cari model..." className="pl-8 w-[300px]" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Semua (28)</Badge>
          <Badge variant="default" className="bg-green-500 text-white">
            Deployed (18)
          </Badge>
          <Badge variant="secondary">Training (5)</Badge>
          <Badge variant="secondary">Idle (5)</Badge>
        </div>
      </div>

      {/* Deployed Models */}
      <Card className="bg-gradient-card hover-lift border-border/50">
        <CardHeader>
          <CardTitle>Models yang Sedang Berjalan</CardTitle>
          <CardDescription>
            Daftar AI models yang sudah di-deploy dan performanya
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Sentiment Analysis v3.2</h3>
                  <p className="text-sm text-muted-foreground">
                    Menganalisis sentimen dari feedback customer
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Activity className="h-3 w-3 text-green-500" />
                      <span>12.7K predictions today</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span>96.4% accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="default" className="bg-green-500 text-white">
                  Running
                </Badge>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Sales Forecasting Model</h3>
                  <p className="text-sm text-muted-foreground">
                    Prediksi penjualan berdasarkan data historis
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Activity className="h-3 w-3 text-green-500" />
                      <span>847 forecasts generated</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span>92.1% accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="default" className="bg-green-500 text-white">
                  Running
                </Badge>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Image Classification Model</h3>
                  <p className="text-sm text-muted-foreground">
                    Klasifikasi gambar produk untuk katalog otomatis
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Activity className="h-3 w-3 text-green-500" />
                      <span>3.2K images processed</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span>94.8% accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="default" className="bg-green-500 text-white">
                  Running
                </Badge>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg border-yellow-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Product Recommendation Engine</h3>
                  <p className="text-sm text-muted-foreground">
                    Rekomendasi produk berdasarkan behavior pengguna
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1 text-sm text-yellow-600">
                      <AlertTriangle className="h-3 w-3" />
                      <span>Model retraining in progress</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>ETA: 2 hours</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-yellow-500 text-white">
                  Retraining
                </Badge>
                <Button variant="outline" size="sm" disabled>
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">
                    Fraud Detection Neural Network
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Deteksi transaksi fraudulent dengan deep learning
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Activity className="h-3 w-3 text-green-500" />
                      <span>45.7K transactions analyzed</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span>98.9% accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="default" className="bg-green-500 text-white">
                  Running
                </Badge>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Model Performance */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader>
            <CardTitle>Top Performing Models</CardTitle>
            <CardDescription>Models dengan akurasi tertinggi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Fraud Detection Neural Network</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-secondary rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">98.9%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Sentiment Analysis v3.2</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-secondary rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "96%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">96.4%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Image Classification Model</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-secondary rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">94.8%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Sales Forecasting Model</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-secondary rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">92.1%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader>
            <CardTitle>Training Queue</CardTitle>
            <CardDescription>
              Models yang sedang dalam proses training
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Customer Churn Prediction v2.0
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Epoch 47/100 - ETA: 3 hours
                  </p>
                </div>
                <Badge variant="secondary" className="bg-blue-500 text-white">
                  Training
                </Badge>
              </div>

              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Price Optimization Model
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Epoch 23/80 - ETA: 5 hours
                  </p>
                </div>
                <Badge variant="secondary" className="bg-green-500 text-white">
                  Training
                </Badge>
              </div>

              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Content Moderation AI</p>
                  <p className="text-xs text-muted-foreground">
                    Queued - Position 1
                  </p>
                </div>
                <Badge variant="outline">Queued</Badge>
              </div>

              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Inventory Demand Forecasting
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Queued - Position 2
                  </p>
                </div>
                <Badge variant="outline">Queued</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
