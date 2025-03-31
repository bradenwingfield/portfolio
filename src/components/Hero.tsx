'use client'

import Image from 'next/image'
import avatar from '../../public/avatar.png'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <section className="w-full px-6 pt-12 pb-16 max-w-6xl mx-auto" id="home">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-black">Braden Wingfield</h1>
          <h2 className="text-2xl text-gray-600 font-medium">
            <Typewriter
              words={['Computer Science', 'Business & Engineering', 'University of Tennessee']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
        </div>

        <div className="lg:w-1/2 flex justify-center">
        <Image
            src={avatar}
            alt="Braden Wingfield avatar"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto rounded-xl"
            priority
        />
        </div>
      </div>
    </section>
  )
}
