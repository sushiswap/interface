
import Container from 'app/components/Container'
import { NAV_CLASS } from 'app/components/Header/styles'
import Image from 'next/image'
import React, { FC } from 'react'


const HEADER_HEIGHT = 64

const Desktop: FC = () => {


  return (
    <>
      <header className="fixed z-20 hidden w-full lg:block" style={{ height: HEADER_HEIGHT }}>
        <nav className={NAV_CLASS}>
          <Container maxWidth="7xl" className="mx-auto">
            <div className="flex items-center justify-between gap-4 px-6">
              <div className="flex gap-4">
                <div className="flex items-center w-6 mr-4">
                </div>
              </div>
            </div>
          </Container>
        </nav>
      </header>
      <div style={{ height: HEADER_HEIGHT, minHeight: HEADER_HEIGHT }} />
    </>
  )
}

export default Desktop
