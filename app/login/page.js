import LoginForm from '@/components/forms/LoginForm'
import React from 'react'
import Image from 'next/image'
import loginImage from '@/public/assets/svg/login.svg'

const Login = () => {
  return (
    <div className='container h-[50vh] sm:h-screen flex items-center justify-center'>
      <div className='lg:w-[900px] lg:h-[500px] w-full h-auto flex items-center justify-between md:flex-row flex-col gap-10 p-8 rounded-lg shadow-[var(--shadow-custom)] bg-white'>
        <div className='md:w-[400px] w-[200px]'>
          <Image src={loginImage} alt="Login" />
        </div>
        <div className='flex flex-col gap-4 w-[300px]'>
          <p className='md:text-xl md:text-left text-center text-lg font-semibold'>Sign in to your account</p>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login