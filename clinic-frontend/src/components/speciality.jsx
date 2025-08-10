/* eslint-disable no-unused-vars */
import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div className='flex w-full flex-col items-center gap-6 py-10 px-4 text-gray-800' id='speciality'>
            <h1 className='text-2xl sm:text-3xl font-medium'>تخصص‌ها</h1>
            <p className='block md:hidden w-full sm:w-2/3 md:w-1/2 text-center text-sm sm:text-base leading-relaxed'>
                به سادگی از طریق لیست گسترده پزشکان مورد اعتماد ما جستجو کنید و وقت خود را بدون دردسر رزرو کنید.
            </p>
            <div className='flex gap-4 pt-6 w-full flex-wrap overflow-x-auto sm:overflow-visible sm:flex-wrap justify-center'>
                {
                    specialityData.map((item, index) => (
                        <Link
                            onClick={() => scrollTo(0, 0)}
                            key={index}
                            to={`/doctors/${item.directory}`}
                            className='flex flex-col items-center text-xs sm:text-sm cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-300 w-20 sm:w-24 md:w-28'
                        >
                            <img className='w-14 sm:w-20 md:w-24 mb-2' src={item.image} alt='Image' />
                            <p className='text-center'>{item.speciality}</p>
                        </Link>
                    ))
                }
            </div>
        </div>

    )
}

export default SpecialityMenu