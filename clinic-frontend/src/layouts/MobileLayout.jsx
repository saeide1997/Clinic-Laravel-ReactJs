import { Calendar, Home, Search } from "lucide-react";
import { FaPeopleRoof } from "react-icons/fa6";
import { TbCategory2 } from "react-icons/tb";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../components/headar";

const MobileLayout = () => {
  const { pathname } = useLocation();

  const navItems = [
    { to: '/myAppointments', icon: <Calendar size={24} /> },
    { to: '/categories', icon: <TbCategory2 size={24} /> },
    { to: '/', icon: <Home size={30} />, isCenter: true },
    { to: '/search', icon: <Search size={24} /> },
    { to: '/doctors', icon: <FaPeopleRoof size={25} /> },
  ];

  return (
    <div className="w-screen h-screen flex flex-col sm:hidden bg-gray-50 overflow-hidden">
      
      {/* هدر ثابت با ارتفاع مشخص */}
      <div className="h-16 flex-shrink-0">
        <Header />
      </div>

      {/* محتوا با ارتفاع کنترل‌شده */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {/* نوار پایین با ارتفاع مشخص */}
      <nav className="h-16 flex-shrink-0 bg-white border-t border-blue-100 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex justify-around items-center z-10 rounded-t-2xl">
        {navItems.map((item, index) => {
          const isActive = pathname === item.to;

          return (
            <Link
              key={index}
              to={item.to}
              className={`relative flex items-center justify-center ${
                item.isCenter ? 'translate-y-[-18px]' : ''
              }`}
            >
              {item.isCenter ? (
                <div className="w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 duration-300">
                  {item.icon}
                </div>
              ) : (
                <div
                  className={`transition-all duration-300 ${
                    isActive ? 'text-blue-500' : 'text-gray-500 hover:text-blue-400'
                  }`}
                >
                  {item.icon}
                </div>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileLayout;
