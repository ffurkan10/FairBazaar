"use client"
import React, { useState } from 'react'
import InputMail from '../ui/inputs/InputMail'
import InputPassword from '../ui/inputs/InputPassword'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import Button from '../ui/buttons/Button'

const LoginForm = () => {
    const { login } = useAuth()
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState(null)
    const router = useRouter()

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        const success = await login(data.email, data.password)
        if (success) {
            router.push("/")
        } else {
            setError("E-posta veya şifre hatalı")
        }
    }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <InputMail data={data.email} setData={(e) => handleChange(e)} name="email" labelText="Email" />
        <InputPassword data={data.password} setData={(e) => handleChange(e)} name="password" labelText="Password" type={showPassword ? "text" : "password"} handleClick={() => setShowPassword(!showPassword)} />
        
        {error && <p className="text-red-500 text-sm">{error}</p>}
        
        <Button width={"w-full"} text={"Sign In"} type='submit'  />
    </form>
  )
}

export default LoginForm