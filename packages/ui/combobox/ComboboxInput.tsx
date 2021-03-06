import { Combobox as HeadlessCombobox } from '@headlessui/react'
import React, { FC, forwardRef } from 'react'
import { ExtractProps } from '../types'
import { Typography } from '../typography/Typography'
import { SelectorIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

export type ComboboxInputProps = ExtractProps<typeof HeadlessCombobox.Input> & {
  children?: string
  standalone?: boolean
}

const ComboboxInput: FC<ComboboxInputProps> = forwardRef(({ className, standalone, children, ...props }, ref) => {
  return React.createElement(
    standalone ? 'div' : HeadlessCombobox.Input,
    {
      ...props,
      ref,
      className: classNames(
        className,
        'relative w-full cursor-default rounded-xl bg-dark-800 py-3 pl-4 pr-10 text-left shadow-md',
      ),
    },
    <>
      <Typography
        variant="sm"
        weight={children ? 700 : 400}
        className={classNames(children ? '' : 'text-low-emphesis', 'block truncate')}
      >
        {children || 'Combobox a token'}
      </Typography>
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <SelectorIcon className="h-5 w-5" aria-hidden="true" />
      </span>
    </>,
  )
})

export default ComboboxInput
