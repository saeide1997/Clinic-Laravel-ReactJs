import { useState } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import { FaUserMd, FaUser, FaSignOutAlt, FaUserCircle, FaChevronDown } from "react-icons/fa";

export default function Header() {

  const user = JSON.parse(localStorage.getItem('userData')); // فرض: لاگین نشده؛ برای تست می‌تونی true بذاری
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-white shadow p-4 flex items-center justify-between gap-4 flex-wrap relative z-50">
      {/* Right Side - Logo */}
      <Link to="/"><div className="flex items-center gap-2">
        <img src="/img/logo0.png" alt="دکتر نوبت" className="h-10 w-10 object-contain" />
        <h1 className="text-xl font-semibold text-gray-700">دکترت</h1>
      </div>
      </Link>

      {/* Search Box */}
      <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
        <select className="border border-gray-300 rounded-md p-2 text-sm text-gray-700">
          <option>همه شهرها</option>
          <option>تهران</option>
          <option>تبریز</option>
          <option>مشهد</option>
        </select>

        <select className="border border-gray-300 rounded-md p-2 text-sm text-gray-700">
          <option>همه تخصص‌ها</option>
          <option>قلب</option>
          <option>پوست</option>
          <option>داخلی</option>
        </select>

        <div className="flex border border-blue-500 rounded-md overflow-hidden w-full max-w-md">
          <input
            type="text"
            placeholder="جست و جو... (مثال: دکتر عباسی متخصص قلب شیراز)"
            className="flex-1 px-4 py-2 text-sm focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 hover:bg-blue-600 text-sm">
            🔍 جست و جو
          </button>
        </div>
      </div>

      {/* User Section */}
      <div className="relative">
        {user ? (
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="cursor-pointer flex items-center gap-2 border border-blue-500 text-blue-500 rounded-full px-4 py-1 text-sm hover:bg-blue-50"
          >
            <FaUserCircle />
            <span>پروفایل من</span>
            <FaChevronDown className="text-xs" />
          </div>
        ) : (
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="cursor-pointer flex items-center gap-2 border border-blue-500 text-blue-500 rounded-full px-4 py-1 text-sm hover:bg-blue-50"
          >
            <FaUser />
            <span>ورود</span>
            <FaChevronDown className="text-xs" />
          </div>
        )}

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute top-full right-0 mt-2 bg-white shadow-md border border-gray-200 rounded-lg w-48 overflow-hidden z-50">
            {!user ? (
              <>
                <Link
                  to="/login/doctor"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                >
                  <FaUserMd />
                  ورود پزشک
                </Link>
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <FaUser />
                  ورود بیمار
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                >
                  <FaUserCircle />
                  پروفایل من
                </Link>
                <button
                  onClick={() => localStorage.setItem('userData', null) && Navigate('/')}
                  className="w-full text-right flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
                >
                  <FaSignOutAlt />
                  خروج
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
