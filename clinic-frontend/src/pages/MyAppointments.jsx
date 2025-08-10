import { useState } from 'react';
import { FaCalendarCheck } from 'react-icons/fa';

const mockReservations = [
  {
    id: 1,
    date: '1403/05/15',
    time: '۱۰:۳۰',
    doctor: 'دکتر سارا رضایی',
    location: 'تبریز - کلینیک مرکزی',
    status: 'تأیید شده',
  },
  {
    id: 2,
    date: '1403/05/20',
    time: '۱۴:۰۰',
    doctor: 'دکتر علی محمدی',
    location: 'تهران - درمانگاه یاس',
    status: 'در انتظار تأیید',
  },
  {
    id: 3,
    date: '1403/06/01',
    time: '۱۶:۰۰',
    doctor: 'دکتر مهناز بهرامی',
    location: 'اصفهان - درمانگاه سپید',
    status: 'لغو شده',
  },
];

const ReservationItem = ({ item, isSelected, onClick }) => {
  return (
    <div className="border rounded-xl mb-3 shadow-sm bg-white">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4"
      >
        <div className="flex flex-col items-start text-right">
          <p className="font-bold text-blue-600">{item.doctor}</p>
          <p className="text-sm text-gray-500">{item.date} - {item.time}</p>
        </div>
        <FaCalendarCheck className="text-blue-500" />
      </button>

      {/* جزئیات فقط در موبایل نمایش داده می‌شه */}
      <div className={`md:hidden px-4 pb-4 ${isSelected ? 'block' : 'hidden'}`}>
        <DetailCard item={item} />
      </div>
    </div>
  );
};

const DetailCard = ({ item }) => (
  <div className="bg-gray-50 rounded-xl p-4 mt-2 text-sm text-gray-700 leading-loose">
    <p><span className="font-semibold">پزشک:</span> {item.doctor}</p>
    <p><span className="font-semibold">تاریخ:</span> {item.date}</p>
    <p><span className="font-semibold">ساعت:</span> {item.time}</p>
    <p><span className="font-semibold">مکان:</span> {item.location}</p>
    <p><span className="font-semibold">وضعیت:</span> {item.status}</p>
  </div>
);

export default function ReservationsPage() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedItem = mockReservations.find(r => r.id === selectedId);

  return (
    <div className="h-full flex flex-col md:flex-row gap-4 p-4">
      {/* لیست رزروها */}
      <div className="md:w-1/2">
        <h2 className="text-xl font-bold mb-4 text-right text-blue-700">رزروهای من</h2>
        {mockReservations.map((item) => (
          <ReservationItem
            key={item.id}
            item={item}
            isSelected={selectedId === item.id}
            onClick={() => setSelectedId(item.id === selectedId ? null : item.id)}
          />
        ))}
      </div>

      {/* جزئیات رزرو - فقط در دسکتاپ */}
      <div className="hidden md:block md:w-1/2">
        {selectedItem ? (
          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h3 className="text-lg font-semibold text-right text-blue-600 mb-4">جزئیات رزرو</h3>
            <DetailCard item={selectedItem} />
          </div>
        ) : (
          <div className="text-gray-400 text-center mt-10">برای مشاهده جزئیات، یک رزرو را انتخاب کنید</div>
        )}
      </div>
    </div>
  );
}
