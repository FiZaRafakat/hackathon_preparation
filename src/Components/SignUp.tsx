import Link from 'next/link'

const SignUp = () => {
  return (
    <div className='lg:mt-16 mt-5 flex sm:flex-row flex-col items-center mb-10 lg:mb-32'>
        <div className="img">
            <img src="/signup.png" alt="" className='lg:h-[600px] sm:h-[450px]' />
        </div>
        <div className="signup mx-10 mt-6 lg:mt-0 lg:mx-32">
        <h3 className='lg:text-4xl text-3xl font-medium lg:font-semibold tracking-wider text-black'>Create an account</h3>
        <p className='lg:mt-5 text-black mt-2 lg:text-base text-sm  tracking-wider'>Enter your details below</p>
        <div className="detail w-full">
            <div className='flex flex-col lg:gap-8 mt-4 gap-3 lg:mt-10'>
            <input type="text" placeholder='Name' className=" border-b-[1px] pb-1 outline-none lg:text-base text-sm border-black/40 placeholder:text-black/40 placeholder:tracking-wider text-black/40 tracking-wider "/>
            <input type="text" placeholder='Email or Phone Number' className='border-b-[1px] pb-1 outline-none lg:text-base text-sm border-black/40 placeholder:text-black/40 placeholder:tracking-wider text-black/40 tracking-wider ' />
            <input type="text" placeholder='Password' className='border-b-[1px] pb-1 outline-none lg:text-base text-sm border-black/40 placeholder:text-black/40 placeholder:tracking-wider text-black/40 tracking-wider ' />
            </div>
            <div className="buttons flex flex-col gap-4  mt-4 lg:mt-6">
            <button className="text-white bg-[#DB4444] lg:px-10 px-4  lg:text-base text-sm py-4 rounded-md ">Create Account</button>
                <button className='flex items-center justify-center px-10 py-3 rounded-md gap-2 border-[1px] border-black/30 '>
                    <img src="/Icon-Google.png" alt="Google Icon" />
                    <span className='lg:text-base text-sm'>Sign up with Google</span>
                </button>
            </div>
        </div>
        <div className="account flex justify-center mt-4">
            <p className='md:text-sm text-xs text-black/70 font-medium tracking-wide  '>Already have account? <Link href="/Login"><span className='ml-2 font-semibold border-b border-black/70 pb-1 '>Log in</span></Link></p>
        </div>
        </div>
    </div>
  )
}

export default SignUp