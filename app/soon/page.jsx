'use client'

import React, { useRef, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Earth from 'public/earth.png'

function DestinationPage() {
  const params = useSearchParams()
  const ref = useRef(null)

  useEffect(() => {
    import('@lottiefiles/lottie-player')
  })
  return (
    <div className="relative">
      <Image src={Earth} quality={100} priority alt="earth" />
      <lottie-player
        ref={ref}
        src="https://lottie.host/43cdae5e-fbaa-4c12-958b-6acbf39eb9c3/IoDtEW4rVR.json"
        background="transparent"
        speed="1"
        loop=""
        autoplay=""
        class="w-full h-full absolute -bottom-40"
      ></lottie-player>
      <div className="absolute w-full top-1/4 px-10 flex flex-col items-center gap-5 text-center">
        <h2 className="font-black text-2xl lg:text-4xl">
          We will landing soon in{' '}
          <span className="capitalize">{params.get('location')}</span>
        </h2>
        <p className="font-medium text-xl lg:text-2xl text-slate-500">
          Explore the world with our Global Career Center.
        </p>
        <Link
          href="/"
          className="text-white font-bold text-lg bg-orange-1 px-4 py-2 lg:px-6 lg:py-4 rounded-full self-center"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}

export default DestinationPage
