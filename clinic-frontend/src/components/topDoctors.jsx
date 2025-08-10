import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { doctors } = useContext(AppContext)
  const isHomePage = location.pathname === '/'

  const [columns, setColumns] = useState(2)
  const [rowsToShow, setRowsToShow] = useState(2)

  // محاسبه تعداد ستون‌ها بر اساس عرض صفحه
  useEffect(() => {
    const calculateColumns = () => {
      const width = window.innerWidth
      if (width >= 1024) setColumns(4)
      else if (width >= 768) setColumns(3)
      else setColumns(2)
    }

    calculateColumns()
    window.addEventListener('resize', calculateColumns)
    return () => window.removeEventListener('resize', calculateColumns)
  }, [])

  // محاسبه تعداد آیتم‌هایی که باید نمایش داده شود
  const visibleCount = columns * rowsToShow
  const visibleDoctors = doctors.slice(0, visibleCount)

  const handleMore = () => {
    if (isHomePage) {
      navigate('/doctors')
      scrollTo(0, 0)
    } else {
      setRowsToShow(prev => prev + 2)
    }
  }

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>پزشکان پرطرفدار</h1>
      <p className='text-center text-sm'>به سادگی از طریق لیست گسترده پزشکان مورد اعتماد ما جستجو کنید.</p>

      <div
        className={`w-full grid gap-4 pt-5 gap-y-6 px-3 sm:px-0
        grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 transition-all duration-500`}
      >
        {
          visibleDoctors.map((item, index) => (
            <div
              onClick={() => { navigate(`/doctor/${item._id}`); scrollTo(0, 0) }}
              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 h-[280px]'
              key={index}
            >
              <img className='bg-blue-50 h-2/3 w-full object-cover' src={item.image} alt='Image' />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>دارای نوبت</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm '>{item.speciality}</p>
              </div>
            </div>
          ))
        }
      </div>

      {(visibleDoctors.length < doctors.length || isHomePage) && (
        <button
          onClick={handleMore}
          className=' bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'
        >
          {isHomePage ? 'بیشتر' : 'نمایش بیشتر'}
        </button>
      )}
    </div>
  )
}

export default TopDoctors
