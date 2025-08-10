// -- src/components/doctorProfile.jsx

import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { FaPhoneAlt, FaVideo } from 'react-icons/fa'
import { MdInsertComment } from "react-icons/md";
import { BsHospital } from "react-icons/bs";

const DoctorProfile = () => {
    const { id } = useParams()
    const { doctors } = useContext(AppContext)

    const doctor = doctors.find((doc) => doc._id === id)

    if (!doctor) return <div>دکتری با این مشخصات پیدا نشد.</div>

    return (
        <div className="min-h-screen bg-blue-400 flex items-center justify-center px-4 py-6">
            <div className="bg-white flex flex-col rounded-[30px] w-full max-w-5xl  shadow-lg overflow-hidden h-[90vh] p-6 md:flex-row md:items-center gap-10 md:gap-10">
                {/* Left - Image and Actions */}
                <div className="md:w-1/3 text-center flex flex-col gap-6 items-center justify-center">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-2/3 h-2/3 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
                    />
                    <div className="flex justify-between w-full gap-2 mt-4">
                        <button className="flex-1 bg-[#d1edff] text-[#00aaff] text-sm py-2 rounded-xl font-medium flex justify-center items-center gap-2">
                            <FaPhoneAlt size={16} />
                        </button>
                        <button className="flex-1 bg-[#ecd9ff] text-[#b459ff] text-sm py-2 rounded-xl font-medium flex justify-center items-center gap-2">
                            <BsHospital size={16} />
                        </button>
                        <button className="flex-1 bg-[#ffe3c5] text-[#ff8c00] text-sm py-2 rounded-xl font-medium flex justify-center items-center gap-2">
                            <MdInsertComment size={16} />
                        </button>
                    </div>
                </div>

                {/* Right - Info */}
                <div className="md:w-2/3 mt-6 md:mt-0">
                    {/* Header */}
                    <h2 className="text-gray-800 text-xl md:text-2xl font-semibold mb-1 text-center md:text-start">{doctor.name}</h2>
                    <h3 className="text-[15px] text-gray-600 mb-2 text-center md:text-start">بیمارستان اسدآبادی</h3>

                    {/* Stars */}
                    <div className="flex space-x-1 justify-center md:justify-start mt-2 mb-4">
                        {Array(5).fill().map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.173L12 18.896l-7.334 3.846 1.4-8.173L.132 9.21l8.2-1.192z" />
                            </svg>
                        ))}
                    </div>

                    {/* About */}
                    <div className="mt-2">
                        <h4 className="text-[14px] text-gray-800 font-semibold mb-1"> درباره {doctor.name}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            دکتر سارا یکی از پزشکان با‌تجربه و خوش‌نام در حوزه قلب و عروق است. با بیش از ۸ سال سابقه و رضایت بالای بیماران، ایشان همواره اولویت را بر تشخیص دقیق و درمان مؤثر قرار می‌دهند.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 text-center mt-6">
                        <div>
                            <p className="text-base text-gray-800 font-bold">۱۰۵</p>
                            <p className="text-[12px] text-gray-500">مراجعه کنندگان</p>
                        </div>
                        <div>
                            <p className="text-base text-gray-800 font-bold">۲ سال</p>
                            <p className="text-[12px] text-gray-500">تجربه</p>
                        </div>
                        <div>
                            <p className="text-base text-gray-800 font-bold">۲۰</p>
                            <p className="text-[12px] text-gray-500">نظرات</p>
                        </div>
                    </div>

                    {/* Book Button */}
                    <div className="mt-6 absolute bottom-24 left-10 right-10 p-4 md:static">
                        <Link to="/appointments" className=""><button className="w-full bg-[#247BFF] text-white text-sm font-semibold py-3 rounded-xl hover:bg-blue-700 transition">
                            مشاهده نوبت
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile
