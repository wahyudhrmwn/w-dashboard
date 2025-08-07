export default function MyWalletPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Wallet</h1>
        <p className="text-muted-foreground">
          Kelola saldo dan transaksi wallet Anda.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Total Saldo</h3>
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
              <path d="M12 2v20m9-9H3" />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold">Rp 5,432,100</p>
            <p className="text-xs text-muted-foreground">
              +2.1% dari bulan lalu
            </p>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Pending</h3>
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
              <path d="m22 2-5 10-5-5z" />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold">Rp 234,500</p>
            <p className="text-xs text-muted-foreground">5 transaksi pending</p>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Transaksi Hari Ini
            </h3>
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
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold">23</p>
            <p className="text-xs text-muted-foreground">+12% dari kemarin</p>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Cashback</h3>
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
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold">Rp 45,200</p>
            <p className="text-xs text-muted-foreground">Bulan ini</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-4 p-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Aktivitas Wallet</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Top Up</p>
                    <p className="text-xs text-muted-foreground">
                      2 jam yang lalu
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-green-600">
                  +Rp 500,000
                </p>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Pembayaran</p>
                    <p className="text-xs text-muted-foreground">
                      5 jam yang lalu
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-red-600">-Rp 150,000</p>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Transfer</p>
                    <p className="text-xs text-muted-foreground">
                      1 hari yang lalu
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-blue-600">-Rp 250,000</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Cashback</p>
                    <p className="text-xs text-muted-foreground">
                      2 hari yang lalu
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-yellow-600">
                  +Rp 25,000
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 space-y-4">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-muted transition-colors">
                <svg
                  className="h-6 w-6 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="text-sm">Top Up</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-muted transition-colors">
                <svg
                  className="h-6 w-6 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
                <span className="text-sm">Transfer</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-muted transition-colors">
                <svg
                  className="h-6 w-6 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span className="text-sm">Pay Bills</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-muted transition-colors">
                <svg
                  className="h-6 w-6 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="text-sm">Analytics</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
