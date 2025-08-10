// -- src/pages/SuccessReserve.jsx

import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ReservationSuccess() {

    const data = {
        doctor: 'دکتر سارا رضایی',
        date: '1403/05/15',
        time: '۱۰:۳۰',
        location: 'کلینیک مرکزی تبریز'
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 text-center">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
            <h2 className="text-xl font-bold text-blue-700 mb-2">رزرو با موفقیت انجام شد!</h2>
            <p className="text-gray-600 mb-6">اطلاعات رزرو شما به شرح زیر است:</p>

            <div className="bg-gray-50 text-right text-sm rounded-lg p-4 leading-loose text-gray-700">
                <p><span className="font-semibold">پزشک:</span> {data.doctor}</p>
                <p><span className="font-semibold">تاریخ:</span> {data.date}</p>
                <p><span className="font-semibold">ساعت:</span> {data.time}</p>
                <p><span className="font-semibold">مکان:</span> {data.location}</p>
            </div>
            <Link to="/">
                <button
                    // onClick={onBack}
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
                >
                    بازگشت به صفحه اصلی
                </button>
            </Link>
        </div>
    );
}
