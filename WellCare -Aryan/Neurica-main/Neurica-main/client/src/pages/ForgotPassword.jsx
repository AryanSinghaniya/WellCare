import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

  const [email, setEmail] = useState('')
  const { backendUrl } = useContext(AppContext)
  const navigate = useNavigate()

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post(backendUrl + '/api/user/forgot-password', { email })
      if (data.success) {
        toast.success(data.message)
        navigate('/login')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>Forgot Password</p>
        <p>Please enter your email to reset your password</p>
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Submit</button>
      </div>
    </form>
  )
}

export default ForgotPassword
