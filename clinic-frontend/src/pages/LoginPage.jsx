// clinic-frontend/src/pages/LoginPage.jsx

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'

const Login = ({ mode }) => {
console.log(mode);

  const [state, setState] = useState(mode || 'Sign Up')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('');
  const [nationalCode, setNationalCode] = useState('')
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const userData = {
    'name': name,
    'mobile': phone,
    'national_code': nationalCode
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  const handleSendCode = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/send-code', userData);
      setMessage('کد تأیید برای شما ارسال شد.');
      localStorage.setItem('userData', JSON.stringify(userData))
      navigate('/verify');
    } catch (error) {
      setMessage('ارسال کد با مشکل مواجه شد.');
    }
  };

  return (
    <div className=''>
      <form className='min-h-[80vh] w-screen h-screen flex bg-blue-400 items-center' onSubmit={handleSendCode}>
        <div className='flex flex-col bg-white gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'ثبت‌نام کاربران' : 'ورود کاربران'}</p>
          <p>لطفا برای مشاهده متخصصین و رزرو وقت {state === 'Sign Up' ? ' ثبت نام کنید' : 'وارد شوید'}   </p>
          {
            state === 'Sign Up' && <>
              <div className='w-full'>
                <p>نام و نام خانوادگی</p>
                <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
              </div>
              <div className='w-full'>
                <p>کدملی</p>
                <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e) => setNationalCode(e.target.value)} value={nationalCode} required />
              </div>
            </>
          }
          <div className='w-full'>
            <p>شماره موبایل</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e) => setPhone(e.target.value)} value={phone} required />
          </div>
          <button className='bg-primary text-white w-full py-2 rounded-md text-base hover:bg-blue-400'>{state === 'Sign Up' ? 'ارسال کد' : 'ارسال کد'}</button>
          {
            state === 'Sign Up'
              ? <p>قبلا ثبت‌نام کرده‌اید؟ <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>از اینجا وارد شوید</span></p>
              : <p>حساب کاربری ندارید؟ <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>اینجا کلیک کنید</span></p>
          }
        </div>
      </form>
      {message && <p className="mt-4 text-sm text-center">{message}</p>}
    </div>
  )
}

export default Login