import { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function VerifyPage() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();

    const local_storage = JSON.parse(localStorage.getItem('userData'))
    console.log('local_storage', local_storage);

    try {
      const res = await api.post('/auth/verify-code', {
        mobile: local_storage.mobile,
        name: local_storage.name,
        national_code: local_storage.national_code,

        code
      });
      if (res.data.next === 'register') {
        navigate('/signup');
      } else {
        navigate('/');
      }
    } catch (error) {
      // error.response?.data?.message ||
      setMessage(error.response?.data?.message || 'خطا در تأیید کد');
    }
  };

  return (
    <div className=''>
      <form className='min-h-[80vh] w-screen h-screen flex bg-blue-400 items-center' onSubmit={handleVerify}>
        <div className='flex flex-col bg-white gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>تأیید کد پیامک</p>
          <p>کد ۶ رقمی ارسال‌شده را وارد کنید</p>
          <div className='w-full'>
            <p>کد</p>
            <input
              type='text'
              placeholder='کد ۶ رقمی'
              className='border border-zinc-300 rounded w-full p-2 mt-1'
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <button className='bg-primary text-white w-full py-2 rounded-md text-base hover:bg-blue-400' type='submit'>
            ورود
          </button>
          {message && <p className='text-sm text-red-600 mt-2'>{message}</p>}
        </div>
      </form>
    </div>
  )

}
