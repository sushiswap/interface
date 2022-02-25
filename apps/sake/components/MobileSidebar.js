import React, { Fragment } from 'react'
import Image from 'next/image'

import { Dialog, Transition } from '@headlessui/react'
import { Navigation } from './Sidebar'
import { XIcon } from '@heroicons/react/outline'

const MobileSidebar = ({ current, sidebarOpen, setSidebarOpen }) => {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as="div" static className="fixed inset-0 z-40 flex lg:hidden" open={sidebarOpen} onClose={setSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex flex-col flex-1 w-full max-w-2xl pt-4 pb-4 bg-black">
            {/* <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 pt-2 -mr-12">
                <button
                  className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </Transition.Child> */}
            <div className="flex flex-row items-center justify-between flex-shrink-0 px-6">
              <Image src="/images/logo-bg.png" width={'70px'} height={'25px'} />
              <button
                className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <Navigation current={current} />
          </div>
        </Transition.Child>
        {/* Dummy element to force sidebar to shrink to fit close icon */}
        <div className="flex-shrink-0 w-0" aria-hidden="true" />
        {/* <div className="flex-shrink-0 w-14" aria-hidden="true" /> */}
      </Dialog>
    </Transition.Root>
  )
}

export default MobileSidebar
