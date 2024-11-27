import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

function Footer() {
  return (
    <>
    <div className='w-full max-w-full  border-b-2 border-black   md:flex-row overflow-hidden bg-white  py-16'>
      <div className='w-full ml-12 md:ml-16 flex flex-col md:flex-row w-[50%] justify-between items-center'>
        {/* Left side content */}
        <div className='text-center mb-8 -ml-16 md:ml-16 sm:flex-col md:flex-row '>
          <p className='font-semibold text-center md:text-left text-[18px] text-black'>Subscribe to our newsletter</p>
          <p className='text-[14px] text-gray-600 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        {/* Form Section */}
        <div className='flex w-[50%] flex-col md:flex-row  mr-20 items-center justify-center  max-w-md'>
          <div className='w-96 md:48 '><input 
            type="email" 
            name="email" 
            id="email" 
            className='py-2 px-4 border-2 w-96 md:w-64 border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
            placeholder='Enter Your Email Address' 
          /></div>
          <div className='flex flex-col mt-12 '>
            <div className=' w-96 md:w-48 mb-3 '>
          <Button 
          size="lg"
          variant = "outline"
          className='bg-white md:ml-2 w-full  text-black px-2 py-2 rounded-sm border-[1px] border-black hover:bg-black hover:text-white'>
            Subscribe
          </Button></div>
          <p className='text-[12px] text-center text-black'>By Subscribing you agree to our privacy policy</p></div>  

        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4 '>
      <div className='flex justify-center '>  <div className=''><img src='/logo.png' alt='logo '  /></div></div>
        <div className='flex flex-col  text-center md:text-left text-black '>
            <h4 className='font-semibold my-3  '>Courses</h4>
            <Link href='/' className='my-2  '>Bussiness</Link>
            <Link href='/' className='my-2'>Development</Link>
            <Link href='/'className='my-2'>Technology</Link>
            <Link href='/' className='my-2'>Design</Link>
            <Link href='/' className='my-2'>Programming</Link>
        </div>
        <div className='flex flex-col  text-center md:text-left text-black '>
            <h4 className='font-semibold my-3'>Resources</h4>
            <Link href='/' className='my-2'>Career</Link>
            <Link href='/' className='my-2'>Resume</Link>
            <Link href='/'className='my-2'>Learning</Link>
            <Link href='/' className='my-2'>Interview Prepration</Link>
            <Link href='/' className='my-2'>Jobs</Link>
        </div>
        <div className='flex flex-col  text-center md:text-left text-black '>
            <h4 className='font-semibold my-3'>About us</h4>
            <Link href='/' className='my-2'>Contact</Link>
            <Link href='/' className='my-2'>Help /Support</Link>
            <Link href='/'className='my-2'>FAQ</Link>
            <Link href='/' className='my-2'>Terms and Conditions</Link>
            <Link href='/' className='Partners'>Partners</Link>
        </div>

      </div>
    </div>
    <div className='max-w-screen flex flex-col md:flex-row md:justify-between mt-4'> 
        <p className='text-center m-4'>2023 Ddsgnr. All right reserved.</p>
        <div className='flex items-center justify-center gap-4 m-4'> 
            <Link href='/'>Privacy Policy</Link>
            <Link href='/'>Terms Of Services</Link> 
            <Link href='/'>Cookie Setting</Link> </div> 
            <div className='flex items-center justify-center m-4'>
                <Image width="24" height="24"  alt="logo" src='/Facebook.svg'/>
                <Image width="24" height="24"  alt="logo"src='/Instagram.svg'/>
                <Image width="24" height="24"  alt="logo" src='/Twitter.svg'/>
                <Image width="24" height="24"  alt="logo"src='/LinkedIn.svg'/>
            </div>
            </div>
    </>)
}

export default Footer