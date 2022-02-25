import React from 'react'
import Image from 'next/image'

import { MenuAlt1Icon } from '@heroicons/react/outline'

const MobileMenu = ({ setSidebarOpen }) => {
  return (
    <>
      <div className="block lg:hidden">
        <div className="relative pt-5 pb-4 z-10 flex flex-row justify-between bg-black items-center">
          <div className="px-6">
            <Image src="/images/logo-bg.png" width={'70px'} height={'25px'} />
          </div>
          <button className="px-4 text-gray-400 focus:outline-none lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <MenuAlt1Icon className="h-6 w-6 mb-2 mr-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
