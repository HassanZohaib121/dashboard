import {
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
  LifeBuoy,
  LogOut,
} from 'lucide-react'
import Sidebar, { SidebarItem } from './Sidebar'

function App() {
  return (
    <Sidebar>
      <SidebarItem
        icon={<LayoutDashboard size={20} />}
        text="Dashboard"
        active
      />
      <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" alert />
      <SidebarItem icon={<UserCircle size={20} />} text="Users" />
      <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
      <SidebarItem icon={<Package size={20} />} text="Orders" />
      <SidebarItem icon={<Receipt size={20} />} text="Billings" />
      <hr className="my-3" />
      <SidebarItem icon={<Settings size={20} />} text="Settings" />
      <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      <SidebarItem icon={<LogOut size={20} />} text="Logout" />
    </Sidebar>
  )
}

export default App
