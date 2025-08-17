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
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            AI Models
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Kelola, train, dan deploy machine learning models untuk berbagai
            kebutuhan
          </p>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Button variant="outline" size="sm" className="text-sm">
            <Upload className="h-4 w-4 mr-2" />
            Import Model
          </Button>
          <Button size="sm" className="text-sm">
            <Plus className="h-4 w-4 mr-2" />
            Train New Model
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3">
              <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h3 className="font-medium text-sm sm:text-base">NLP Models</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Text processing & analysis
            </p>
            <Badge
              variant="default"
              className="bg-blue-500 text-white mt-2 text-xs"
            >
              8 Models
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-3">
              <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h3 className="font-medium text-sm sm:text-base">
              Prediction Models
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Forecasting & analytics
            </p>
            <Badge
              variant="default"
              className="bg-green-500 text-white mt-2 text-xs"
            >
              7 Models
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
              <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h3 className="font-medium text-sm sm:text-base">
              Computer Vision
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Image & video analysis
            </p>
            <Badge
              variant="default"
              className="bg-purple-500 text-white mt-2 text-xs"
            >
              6 Models
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card hover-lift border-border/50 cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-3">
              <Database className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h3 className="font-medium text-sm sm:text-base">Recommendation</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Personalization systems
            </p>
            <Badge
              variant="default"
              className="bg-orange-500 text-white mt-2 text-xs"
            >
              7 Models
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari model..."
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
            Semua (28)
          </Badge>
          <Badge variant="default" className="bg-green-500 text-white text-xs">
            Deployed (18)
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Training (5)
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Idle (5)
          </Badge>
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Sentiment Analysis v3.2
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Menganalisis sentimen dari feedback customer
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Activity className="h-3 w-3 text-green-500" />
                      <span>12.7K predictions today</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span>96.4% accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Running
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Sales Forecasting Model
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Prediksi penjualan berdasarkan data historis
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Activity className="h-3 w-3 text-green-500" />
                      <span>847 forecasts generated</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span>92.1% accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Running
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Image Classification Model
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Klasifikasi gambar produk untuk katalog otomatis
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Activity className="h-3 w-3 text-green-500" />
                      <span>3.2K images processed</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span>94.8% accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Running
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg border-yellow-200 gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Product Recommendation Engine
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Rekomendasi produk berdasarkan behavior pengguna
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-yellow-600">
                      <AlertTriangle className="h-3 w-3" />
                      <span>Model retraining in progress</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>ETA: 2 hours</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="secondary"
                  className="bg-yellow-500 text-white text-xs"
                >
                  Retraining
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    Fraud Detection Neural Network
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Deteksi transaksi fraudulent dengan deep learning
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <Activity className="h-3 w-3 text-green-500" />
                      <span>45.7K transactions analyzed</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span>98.9% accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                <Badge
                  variant="default"
                  className="bg-green-500 text-white text-xs"
                >
                  Running
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 sm:h-8 px-1 sm:px-2"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Model Performance */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2">
        <Card className="bg-gradient-card hover-lift border-border/50">
          <CardHeader>
            <CardTitle>Top Performing Models</CardTitle>
            <CardDescription>Models dengan akurasi tertinggi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium">
                    Fraud Detection Neural Network
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-indigo-600">
                    98.9%
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 sm:h-2.5">
                  <div
                    className="bg-indigo-600 h-2 sm:h-2.5 rounded-full transition-all duration-300"
                    style={{ width: "98.9%" }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium">
                    Sentiment Analysis v3.2
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-blue-600">
                    96.4%
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 sm:h-2.5">
                  <div
                    className="bg-blue-600 h-2 sm:h-2.5 rounded-full transition-all duration-300"
                    style={{ width: "96.4%" }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium">
                    Image Classification Model
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-purple-600">
                    94.8%
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 sm:h-2.5">
                  <div
                    className="bg-purple-600 h-2 sm:h-2.5 rounded-full transition-all duration-300"
                    style={{ width: "94.8%" }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium">
                    Sales Forecasting Model
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-green-600">
                    92.1%
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 sm:h-2.5">
                  <div
                    className="bg-green-600 h-2 sm:h-2.5 rounded-full transition-all duration-300"
                    style={{ width: "92.1%" }}
                  ></div>
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
              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse flex-shrink-0 mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium">
                    Customer Churn Prediction v2.0
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Epoch 47/100 - ETA: 3 hours
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-blue-500 text-white text-xs flex-shrink-0"
                >
                  Training
                </Badge>
              </div>

              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0 mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium">
                    Price Optimization Model
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Epoch 23/80 - ETA: 5 hours
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-green-500 text-white text-xs flex-shrink-0"
                >
                  Training
                </Badge>
              </div>

              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium">
                    Content Moderation AI
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Queued - Position 1
                  </p>
                </div>
                <Badge variant="outline" className="text-xs flex-shrink-0">
                  Queued
                </Badge>
              </div>

              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium">
                    Inventory Demand Forecasting
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Queued - Position 2
                  </p>
                </div>
                <Badge variant="outline" className="text-xs flex-shrink-0">
                  Queued
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
