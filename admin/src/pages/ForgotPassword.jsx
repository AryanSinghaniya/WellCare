import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import { DoctorContext } from '../context/DoctorContext'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

  const [email, setEmail] = useState('')
  const [role, setRole] = useState('Doctor') // Default to Doctor as Admin is hardcoded
  const { backendUrl } = useContext(AppContext)
  const navigate = useNavigate()

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    if (role === 'Admin') {
        toast.info('Please contact system administrator to reset Admin password.')
        return
    }

    try {
      const { data } = await axios.post(backendUrl + '/api/doctor/forgot-password', { email })
      if (data.success) {
        toast.success(data.message)
        navigate('/')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className='text-primary'>Forgot</span> Password</p>
        
        <div className='flex gap-4 m-auto mb-2'>
            <label className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name="role" value="Doctor" checked={role === 'Doctor'} onChange={() => setRole('Doctor')} />
                Doctor
            </label>
            <label className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name="role" value="Admin" checked={role === 'Admin'} onChange={() => setRole('Admin')} />
                Admin
            </label>
        </div>

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Submit</button>
      </div>
    </form>
  )
}

export default ForgotPassword
