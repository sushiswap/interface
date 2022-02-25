import React, { useState } from 'react'
import { MobileMenu, MobileSidebar, Sidebar as DesktopSidebar } from '../components'
import { motion } from 'framer-motion'

const Layout = ({ children, currentPage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  console.log({ sidebarOpen })

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <MobileSidebar current={currentPage} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DesktopSidebar current={currentPage} />
      <div className="flex-1 overflow-auto focus:outline-none">
        <MobileMenu setSidebarOpen={setSidebarOpen} />
        <main className="relative z-0 flex-1 pb-20 overflow-y-auto bg-black sm:pb-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.2,
            }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default Layout
