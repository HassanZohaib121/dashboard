import React from 'react'

import BarChartComponent from './BarChartComponent'
import PieChartComponent from './PieChartComponent'
import AreaChartComponents from './AreaChartComponents'
import Navbar from './Navbar/Navbar'

const Header = () => (
  <header className="mb-8">
    <h1 className="text-3xl font-bold">Dashboard</h1>
    <p className="text-gray-600">Welcome back, Admin</p>
  </header>
)

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
    <div className="text-sm text-gray-500">{title}</div>
    <div className="text-2xl font-bold mt-2">{value}</div>
    <div className="text-2xl mt-2">{icon}</div>
  </div>
)

const Dashboard = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100 p-8">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Revenue" value="$54,231" icon="💰" />
        <StatCard title="New Customers" value="3,120" icon="👥" />
        <StatCard title="Active Projects" value="15" icon="🔵" />
        <StatCard title="Conversion Rate" value="3.8%" icon="📈" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <BarChartComponent />

        <PieChartComponent />
      </div>
      <div className="mt-4">
        <AreaChartComponents />
      </div>
    </div>
  )
}

export default Dashboard
