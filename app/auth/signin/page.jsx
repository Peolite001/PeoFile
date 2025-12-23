import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { auth, signIn } from "@/auth"
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth()
  if(session) {
    redirect("/profile/create")
  }

  return (
    <main className='min-h-dvh bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center p-4'>
      <div className='w-full max-w-md bg-amber-200/10 rounded-2xl shadow-lg border border-orange-100 p-6 md:p-8 space-y-6'>
        
        <div className='text-center space-y-2'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>Welcome Back</h2>
          <p className='text-gray-600 text-sm md:text-base'>Sign in to your account</p>
        </div>

        {/* Email/Password Form */}
        <form action={async (formData) => {
        "use server"
        await signIn("credentials", formData)}} >
          <div className="space-y-4">
          <div>
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input type="email" id="email" name="email"  placeholder='name@email.com' 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900
              focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
              required/>
          </div>

          <div>
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input  type="password" id="password" name="password" placeholder='Enter your password' 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900
              focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
              required/>
          </div>
          
          <button type="submit"
            className="w-full py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 
             transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            Sign In
          </button>
          </div>
        </form>

          <div className="flex justify-center text-sm">
            <div className="w-10 md:w-25 mt-3 border-t border-gray-300" />
            <span className="px-2 text-gray-500">Or continue with</span>
            <div className="w-10 md:w-25 mt-3 border-t border-gray-300" />
          </div>
        

        <div className='space-y-3'>
          <form action={async () => {
            "use server"
            await signIn("google") 
          }}>
            <button className='w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 
             rounded-lg hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
              <FcGoogle className="text-xl" />
              <span className="text-sm font-medium text-gray-700">Continue with Google</span>
            </button>
          </form>

          <form action={async () => {
            "use server"
            await signIn("github")
          }}>
            <button className='w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 
              rounded-lg hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
              <FaGithub className="text-xl" />
              <span className="text-sm font-medium text-gray-700">Continue with GitHub</span>
            </button>
          </form>

          <button className='w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 
            rounded-lg hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
            <FaApple className="text-xl" />
            <span className="text-sm font-medium text-gray-700">Continue with Apple</span>
          </button>
        </div>

      
        <div className='text-center space-y-3'>
          <p className="text-gray-600 text-sm">
            Don't have an account?
            <Link href="/register" className="text-orange-500 hover:text-orange-600 font-medium underline">
              Sign up
            </Link>
          </p>
          
          <p className="text-xs text-gray-500">
            By continuing, you agree to our
            <Link href="/terms" className="underline hover:text-gray-700"> Terms </Link>
            and
            <Link href="/privacy" className="underline hover:text-gray-700"> Privacy Policy</Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Page