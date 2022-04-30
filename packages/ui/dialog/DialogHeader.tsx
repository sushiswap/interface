import { Dialog } from '@headlessui/react'
import { ArrowLeftIcon, XIcon } from '@heroicons/react/outline'
import React, { FC, ReactNode } from 'react'

export interface DialogHeaderProps {
  title: string | ReactNode
  onClose?(): void
  onBack?(): void
}

const DialogHeader: FC<DialogHeaderProps> = ({ title, onBack, onClose }) => {
  return (
    <div className="flex items-start justify-between relative">
      <div className="flex flex-col gap-1 justify-center">
        <Dialog.Title as="h3" className="text-lg font-bold leading-6">
          {onBack && (
            <ArrowLeftIcon onClick={onBack} width={24} height={24} className="cursor-pointer text-high-emphesis" />
          )}
          {title}
        </Dialog.Title>
      </div>
      {onClose && (
        <XIcon
          onClick={onClose}
          width={24}
          height={24}
          className="cursor-pointer z-10 hover:bg-black rounded-full hover:text-high-emphesis text-secondary font-bold"
        />
      )}
    </div>
  )
}

export default DialogHeader
