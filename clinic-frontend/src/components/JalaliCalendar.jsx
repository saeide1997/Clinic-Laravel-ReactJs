import moment from 'moment-jalaali';
import { useState } from 'react';

moment.loadPersian({ dialect: 'persian-modern', usePersianDigits: false });

const JalaliCalendar = ({ selectedDay, setSelectedDay, year, month }) => {
    const daysInMonth = moment.jDaysInMonth(year, parseInt(month) - 1); // تعداد روزهای ماه شمسی

    const days = Array.from({ length: daysInMonth }, (_, i) => ({
        day: i + 1,
        date: moment(`${year}/${month}/${i + 1}`, 'jYYYY/jMM/jDD'),
    }));

    const weekdays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

    return (
        <div className="bg-white rounded-lg p-4 shadow mb-6 text-center">
            {/* <div className="text-sm font-medium mb-4">
                {moment(`${year}/${month}/01`, 'jYYYY/jMM/jDD').format('jMMMM jYYYY')}
            </div> */}

            <div className="grid grid-cols-7 gap-1 text-xs text-gray-600 mb-2">
                {weekdays.map((d, i) => (
                    <div key={i}>{d}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-sm">
                {/* جای خالی برای شروع هفته */}
                {Array.from({
                    length: days[0].date.day() === 6 ? 0 : days[0].date.day() + 1,
                }).map((_, i) => (
                    <div key={i}></div>
                ))}

                {days.map(({ day, date }) => {
                    const isFriday = date.day() === 5;
                    const isSelected = selectedDay?.isSame(date, 'day');

                    return (
                        <button
                            key={day}
                            onClick={() => !isFriday && setSelectedDay(date)}
                            className={`w-8 h-8 rounded-full
        ${isFriday ? 'bg-gray-300 text-gray-400 cursor-not-allowed' :
                                    isSelected ? 'bg-blue-600 text-white' :
                                        'bg-gray-100 text-gray-700 hover:bg-blue-100'}
      `}
                            disabled={isFriday}
                        >
                            {day}
                        </button>
                    );
                })}

            </div>
        </div>
    );
};


export default JalaliCalendar;
