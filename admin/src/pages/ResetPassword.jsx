import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {

  const { token } = useParams()
  const [newPassword, setNewPassword] = useState('')
  const { backendUrl } = useContext(AppContext)
  const navigate = useNavigate()

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      // Only for Doctor in Admin panel
      const { data } = await axios.post(backendUrl + '/api/doctor/reset-password', { token, newPassword })
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
        <p className='text-2xl font-semibold m-auto'><span className='text-primary'>Reset</span> Password</p>
        <div className='w-full'>
          <p>New Password</p>
          <input className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Submit</button>
      </div>
    </form>
  )
}

export default ResetPassword
