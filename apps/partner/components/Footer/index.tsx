
import Typography from 'app/components/Typography'
import Image from 'next/image'
import React from 'react'

import Container from '../Container'

const Footer = () => {

  return (
    <div className="z-10 w-full py-20 mt-20">
      <Container maxWidth="7xl" className="px-6 mx-auto">
        <div className="grid grid-cols-2 gap-10 pt-8 border-t md:grid-cols-3 lg:grid-cols-6 xs:px-6 border-dark-900">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-2">
              <div className="">
                {/* <Image src="https://app.sushi.com/images/logo.svg" alt="Sushi logo" width="28px" height="28px" /> */}
              </div>
              <Typography variant="h2" weight={700} className="tracking-[0.02em] scale-y-90 hover:text-high-emphesis">
                Sushi
              </Typography>
            </div>
          </div>
      
        </div>
      </Container>
    </div>
  )
}

export default Footer
