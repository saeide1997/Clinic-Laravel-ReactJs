// -- clinic-frontend/src/pages/Appointments.jsx

import { useState } from 'react';
import moment from 'moment-jalaali';
import { months } from '../assets/assets';
import JalaliCalendar from '../components/JalaliCalendar';
import { Link } from 'react-router-dom';

moment.loadPersian({ dialect: 'persian-modern', usePersianDigits: false });

const Appointment = () => {

    const slots = {
        morning: [
            '10:00 ', '10:30 ', '11:00 ', '11:30 ', '12:00 ', '12:30 ',
            '13:00 ', '13:30 ', '14:00 ', '14:30', '15:00', '15:30',
            '16:00', '16:30', '17:00', '17:30'
        ],
    };

    const handleSlotClick = (slot) => {
        setSelectedSlot(slot);
    };

    const today = moment();
    const [selectedDay, setSelectedDay] = useState(today);
    const [selectedSlot, setSelectedSlot] = useState('');

    const [month, setMonth] = useState(today.format('jMM'));
    const [year, setYear] = useState(today.format('jYYYY'));

    const handleMonthChange = (e) => {
        const selectedMonthIndex = months.findIndex((m) => m.name === e.target.value);
        const selectedMonthNumber = String(selectedMonthIndex + 1).padStart(2, '0');
        setMonth(selectedMonthNumber);
    };

    return (
        <div className=" mx-auto p-4 bg-white h-full md:w-3/4 lg:w-1/2 xl:w-2/5 ">
            <div className="flex justify-between items-center py-4">
                {/* <button className="text-blue-600 font-bold text-lg">&#8594;</button> */}
                {/* <h2 className="text-xl font-semibold text-center w-full -ml-6">نوبت دهی</h2> */}
            </div>

            <div className="bg-white rounded-lg p-4 shadow mb-6">

                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={() => {
                            const current = moment(`${year}/${month}/01`, 'jYYYY/jMM/jDD').subtract(1, 'jMonth');
                            setMonth(current.format('jMM'));
                            setYear(current.format('jYYYY'));
                        }}
                        className="text-lg px-2"
                    >
                        &#8594;
                    </button>

                    <div className="text-sm font-semibold">
                        {moment(`${year}/${month}/01`, 'jYYYY/jMM/jDD').format('jMMMM jYYYY')}
                    </div>

                    <button
                        onClick={() => {
                            const current = moment(`${year}/${month}/01`, 'jYYYY/jMM/jDD').add(1, 'jMonth');
                            setMonth(current.format('jMM'));
                            setYear(current.format('jYYYY'));
                        }}
                        className="text-lg px-2"
                    >
                        &#8592;
                    </button>
                </div>

                <div className="text-center text-sm mb-4">
                    <JalaliCalendar
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        year={year}
                        month={month}
                    />
                </div>

            </div>

            {/* زمان‌بندی */}
            <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                    {slots.morning.map((slot) => (
                        <button
                            key={slot}
                            onClick={() => handleSlotClick(slot)}
                            className={`px-4 py-2 rounded-full text-sm ${selectedSlot === slot ? 'bg-blue-600 text-white' : 'bg-white border'
                                }`}
                        >
                            {slot}
                        </button>
                    ))}
                </div>
            </div>

            {/* تایید نهایی */}
            
            <button
                className="mt-10 w-full bg-blue-600 text-white py-3 cursor-pointer hover:bg-blue-700 rounded-lg font-medium"
                disabled={!selectedSlot}
                // onClick={() => alert(`وقت رزرو شد: ${selectedSlot} در ${selectedDay.format('jYYYY/jMM/jDD')}`)}
            >
             <Link to="/ReservationSuccess">   رزرو نوبت
            </Link>
            </button>
        </div>
    );
};

export default Appointment;
