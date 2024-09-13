'use client'
import { usePathname } from 'next/navigation'
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

function Navbar({ params }) {
  const pathname = usePathname()
  return (
    <Sidebar>
      <SidebarItem
        icon={<LayoutDashboard size={20} />}
        text="Dashboard"
        URL="/"
        active={pathname === '/' ? true : null}
      />
      <SidebarItem
        icon={<BarChart3 size={20} />}
        text="Statistics"
        alert
        URL="/statistics"
        active={pathname === '/statistics' ? true : null}
      />
      <SidebarItem
        icon={<UserCircle size={20} />}
        text="Users"
        URL="/users"
        active={pathname === '/users' ? true : null}
      />
      <SidebarItem
        icon={<Boxes size={20} />}
        text="Inventory"
        URL="/inventory"
        active={pathname === '/inventory' ? true : null}
      />
      <SidebarItem
        icon={<Package size={20} />}
        text="Orders"
        URL="/orders"
        active={pathname === '/orders' ? true : null}
      />
      <SidebarItem
        icon={<Receipt size={20} />}
        text="Billings"
        URL="/billings"
        active={pathname === '/billings' ? true : null}
      />
      <hr className="my-3" />
      <SidebarItem
        icon={<Settings size={20} />}
        text="Settings"
        URL="/settings"
        active={pathname === '/settings' ? true : null}
      />
      <SidebarItem
        icon={<LifeBuoy size={20} />}
        text="Help"
        URL="/help"
        active={pathname === '/help' ? true : null}
      />
      <SidebarItem
        icon={<LogOut size={20} />}
        text="Logout"
        URL="/logout"
        active={pathname === '/logout' ? true : null}
      />
    </Sidebar>
  )
}

export default Navbar
