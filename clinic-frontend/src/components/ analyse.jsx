import { FaUserMd, FaListAlt, FaCalendarCheck, FaChartLine } from "react-icons/fa";

export default function StatsBox() {
  const stats = [
    { title: "تعداد پزشکان", value: "۴۰۹۷", icon: <FaUserMd /> },
    { title: "دسته‌بندی‌ها", value: "۴۵", icon: <FaListAlt /> },
    { title: "نوبت‌های رزرو شده", value: "۱۴۴", icon: <FaCalendarCheck /> },
    { title: "بازدیدها", value: "۱۵۳٬۴۶۲", icon: <FaChartLine /> },
  ];

  return (
    <section className="bg-[#eaf2ff] py-10 px-4 text-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white shadow-md p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <div className="text-blue-600 text-3xl mb-2">{item.icon}</div>
            <div className="text-xl font-extrabold text-blue-800">{item.value}</div>
            <div className="text-sm mt-1 text-gray-500">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
