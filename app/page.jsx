import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (

    <main className="min-h-dvh">
      <div className="bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-black/40 ">
      <section className="text-center text-amber-200 text-shadow-2xl pt-30 md:pt-20 md:p-30 lg:p-50">
          <div>
          <h1 className="text-4xl md:text-5xl font-semibold">Showcase. Collaborate. Inspire.</h1>
          <p className="text-sm md:text-xl p-5">Join PeoFile, transform your projects into conversations, build meaningful 
            connections and elevate your professional journey through shared expertise and inspiration.
          </p>
          </div>
    <div className="md:w-60 p-2 gap-5 md:ml-35 lg:ml-95">
          <span className=" flex items-center justify-center bg-orange-400 hover:bg-orange-700 text-amber-100 px-15 md:px-7
           py-3 space-x-5 rounded-xl cursor-pointer">
                 <Link href={"auth/signin"}><button className="text-xl cursor-pointer">PeoFile</button></Link>
                 <FaArrowRight/>
            </span>
        </div>
    </section>
     </div>
     </div>

   <section className="bg-gray-200 py-12 px-5 md:py-20 flex flex-col items-center gap-12 md:gap-16">
  <div className="max-w-3xl text-center">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 uppercase text-gray-800">
      About PeoFile
    </h2>
    <p className="text-base md:text-lg leading-relaxed text-gray-700">
      At <span className="text-orange-500 font-semibold">PeoFile</span>, we believe that every individual
       has the power to inspire and be inspired. We're a community-driven platform where you can share your 
       ideas, collaborate with others, and grow together.
    </p>
  </div>

  <div className="w-full max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 px-4 md:px-0">

           {/* col1 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <Image
            src="/image/idea.jpg"
            alt="Share Your Voice"
            width={800}
            height={800}
            className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-xs">
          Every voice deserves to be heard, whether it's through text, images, or real-world actions.
        </p>
      </div>

       {/* col2 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <Image
            src="/image/group.jpg"
            alt="Collaborate & Connect"
            width={800}
            height={800}
            className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-xs">
          Connect and collaborate with other individuals to grow your connection and ideas.
        </p>
      </div>

          {/* col3 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <Image
            src="/image/connect.jpg"
            alt="Grow Together"
            width={800}
            height={800}
            className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-xs">
          Share your ideas, get feedback, and learn from others, fostering collaboration, inspiration, and growth.
        </p>
      </div>

    </div>
  </div>
</section>


    </main>
   
  );
}
