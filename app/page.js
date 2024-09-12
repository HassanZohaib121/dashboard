import Dashboard from './compoonents/Dashboard'
import Navbar from './compoonents/Navbar/Navbar'

export default function Home() {
  return (
    <div className="flex gap-2">
      <Navbar />
      <Dashboard />
    </div>
  )
}
