import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-dvh bg-[url('/about.jpg')] bg-no-repeat bg-center bg-cover">
      <section className='bg-orange-200/10 min-h-dvh'>
      <div className='flex flex-col  items-center justify-center gap-10 md:p-30 lg:p-50'>

      <div className='text-white flex flex-col justify-center items-center gap-2 lg:w-3xl w-full max-md:p-3'>
        <Image
              src={"/icon.png"}
              alt="logo"
              width={"800"}
              height={"800"}
              className="w-10 h-10"/>
        <h2 className='text-center text-xl md:text-6xl font-bold bg-gradient-to-r from-red-200 via-orange-600 to-green-500 bg-clip-text text-transparent'>About Peofile</h2>
        <p className='text-amber-300/80 text-center'>Peofile is a vibrant community platform where creators showcase their projects, collaborate with like-minded individuals, and inspire innovation through shared passion and expertise. Whether you're coding a new app, designing a product, or crafting a creative work, Peofile is your space to bring ideas to life and connect with a global network of innovators.
</p>
      </div>
      <div className='text-white flex flex-col justify-center items-center gap-2 lg:w-3xl w-full max-md:p-3'>
        <h2 className='text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-red-200 via-orange-600 to-green-500 bg-clip-text text-transparent'>Vision</h2>
        <p className='text-amber-300/80 text-center'>At Peofile, our vision is to democratize creativity and collaboration, empowering individuals to turn their ideas into impactful realities through connection, feedback, and collective inspiration.
</p>
      </div>
      <div className='text-white flex flex-col justify-center items-center gap-2 lg:w-3xl w-full max-md:p-3'>
        <h2 className='text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-red-200 via-orange-600 to-green-500 bg-clip-text text-transparent'>Mission</h2>
        <p className='text-amber-300/80 text-center'>Our mission is to build an inclusive ecosystem where creators can:
             Showcase their work to gain visibility and recognition,
             Collaborate with peers to spark innovation and growth,
             Inspire others through their projects, and also fostering a culture of creativity and shared progress.
</p>
      </div>

      <div className='text-white flex flex-col justify-center items-center gap-2 lg:w-3xl w-full max-md:p-3'>
        <h2 className='text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-red-200 via-orange-600 to-green-500 bg-clip-text text-transparent'>Who We Are</h2>
        <p className='text-amber-300/80 text-center'>We are a passionate team of technologists, creators, and community builders who believe in the power of collaboration to drive innovation. Peofile is designed to be a catalyst for projects that matter, connecting talented individuals across borders and disciplines. We're driven by the energy of creators and committed to nurturing a space where ideas flourish through interaction and mutual support.
</p>
      </div>
      </div>
      </section>
    </main>
  )
}

export default page
