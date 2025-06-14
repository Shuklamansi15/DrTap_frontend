import React from 'react'
import { assets } from '../assets/assets'

const about = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image}></img>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to DrTap — your one-stop platform for seamless doctor appointments and expert healthcare access. At DrTap, we aim to simplify how you connect with trusted medical professionals across various specializations, whether you're at home or on the go.</p>
          <p>With a user-friendly interface and verified doctor listings, DrTap ensures that healthcare is not only accessible but also reliable. From booking consultations to learning more about specialists, DrTap puts control over your health right at your fingertips.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at DrTap is to revolutionize healthcare access by bridging the gap between patients and qualified doctors — both locally and globally. We strive to empower every individual with technology-driven healthcare solutions that are fast, secure, and personalized.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Book appointments instantly with top doctors across specializations.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Get access to verified medical professionals anytime, anywhere.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Receive reminders, track your appointments, and manage your health journey effortlessly.</p>
        </div>
      </div>
    </div>
  )
}

export default about
