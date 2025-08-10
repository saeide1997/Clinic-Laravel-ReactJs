import React from "react";
import { FaMapMarkerAlt, FaUserMd, FaCalendarAlt } from "react-icons/fa";

const SearchDoctorForm = () => {
    return (
        <div className="h-full bg-[#eaf2ff] flex flex-col items-center justify-between px-6 pt-10 pb-6">
            <div className="w-[95vw] md:w-[60vw] lg:w-[40vw] bg-white rounded-2xl shadow-lg p-6 relative z-10">
                {/* Title */}
                <h1 className=" w-full text-2xl font-medium text-gray-700">
                    متخصص خود را جستجوکنید:
                </h1>

                {/* Form */}
                <div className="mt-8 space-y-4">
                    {/* Area */}
                    <div className="bg-white flex items-center rounded-xl px-4 py-3 shadow-sm">
                        <input
                            type="text"
                            placeholder="منطقه خود را انتخاب کنید"
                            className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                        />
                        <FaMapMarkerAlt className="text-gray-400 mx-3" />
                    </div>

                    {/* Doctor */}
                    <div className="bg-white flex items-center rounded-xl px-4 py-3 shadow-sm">
                        <input
                            type="text"
                            placeholder="پزشک، متخصص"
                            className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                        />
                        <FaUserMd className="text-gray-400 mx-3" />
                    </div>

                    {/* Date */}
                    {/* <div className="bg-white flex items-center rounded-xl px-4 py-3 shadow-sm">
            <FaCalendarAlt className="text-gray-400 mr-3" />
            <input
              type="date"
              className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
            />
          </div> */}
                </div>

                {/* Search Button */}
                <button className="mt-6 w-full bg-[#2563eb] text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">
                    جستجو
                </button>
            </div>

            {/* Bottom Illustration */}
            <div className="h-[30vh]  absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
                <div className="flex flex-nowrap h-full relative">
                    <img
                        src="/img/footer1.png"
                        alt="Doctors illustration"
                        className="object-contain h-full "
                    />
                    <img
                        src="/img/footer2.png"
                        alt="Doctors illustration"
                        className="object-contain h-full"
                    />
                    <img
                        src="/img/footer3.png"
                        alt="Doctors illustration"
                        className="object-contain h-full"
                    />
                    <img
                        src="/img/footer4.png"
                        alt="Doctors illustration"
                        className="object-contain h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#eaf2ff] via-[#eaf2ff]/50 to-transparent pointer-events-none z-10" />
                </div>
            </div>

        </div>
    );
};

export default SearchDoctorForm;
