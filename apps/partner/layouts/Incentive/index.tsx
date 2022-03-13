
import Container, { MaxWidth } from 'app/components/Container'
import Footer from 'app/components/Footer'
import Header from 'app/components/Header'
import Main from 'app/components/Main'
import { classNames } from 'app/functions'
import React, { FC, ReactNode, useMemo } from 'react'

interface IncentiveBodyProps {
  className?: string
  maxWidth?: MaxWidth
}

export const IncentiveBody: FC<IncentiveBodyProps> = ({ children, className, maxWidth = '7xl' }) => {
  return (
    <Main>
      <Container maxWidth={maxWidth} className={classNames('flex flex-col gap-10 py-10 px-5 lg:px-6 z-[1]', className)}>
        {children}
      </Container>
    </Main>
  )
}

const IncentiveLayout: FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center flex-grow w-full">
        <div className="flex flex-col flex-grow w-full">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default IncentiveLayout
