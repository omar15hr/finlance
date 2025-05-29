import { ChevronRight, DollarSign } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Overview</h1>
        
        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Current Balance */}
          <div className="bg-gray-900 text-white rounded-xl p-6 md:col-span-1">
            <div className="text-sm text-gray-400 mb-2">Current Balance</div>
            <div className="text-3xl md:text-4xl font-bold">$4,836.00</div>
          </div>
          
          {/* Income */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Income</div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900">$3,814.25</div>
          </div>
          
          {/* Expenses */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Expenses</div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900">$1,700.50</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Pots Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Pots</h2>
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <span className="text-sm">See Details</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="bg-green-100 rounded-lg p-3 mr-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Total Saved</div>
                <div className="text-2xl font-bold text-gray-900">$850</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border-l-4 border-green-500 pl-4">
                <div className="text-sm text-gray-500">Savings</div>
                <div className="font-semibold text-gray-900">$159</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="text-sm text-gray-500">Gift</div>
                <div className="font-semibold text-gray-900">$40</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="text-sm text-gray-500">Concert Ticket</div>
                <div className="font-semibold text-gray-900">$110</div>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="text-sm text-gray-500">New Laptop</div>
                <div className="font-semibold text-gray-900">$10</div>
              </div>
            </div>
          </div>

          {/* Budgets Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Budgets</h2>
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <span className="text-sm">See Details</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            {/* Chart Placeholder */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-40 h-40 bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">$338</div>
                      <div className="text-xs text-gray-500">of $975 limit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Entertainment</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">$50.00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Bills</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">$750.00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Dining Out</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">$75.00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Personal Care</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">$100.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Transactions Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Transactions</h2>
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <span className="text-sm">View All</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Emma Richardson</div>
                    <div className="text-sm text-gray-500">19 Aug 2024</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-green-600">+$75.50</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-lg">🍽️</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Savory Bites Bistro</div>
                    <div className="text-sm text-gray-500">19 Aug 2024</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-red-600">-$55.50</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recurring Bills Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recurring Bills</h2>
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <span className="text-sm">See Details</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            {/* Placeholder for bills content */}
            <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Bills content area</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
