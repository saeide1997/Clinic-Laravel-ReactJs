// -- src/components/mobileMenu.jsx

import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MobileBottomNav = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow sm:hidden z-50">
            <div className="flex justify-around items-center py-2 text-sm text-gray-600">
                <Link to="/" className="flex flex-col items-center">
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 12l2-2m0 0l7-7 7 7m-9 2v7m4 0v-7m-6 7h6" />
                    </svg>
                    خانه
                </Link>
                <Link to="/specialities" className="flex flex-col items-center">
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 8v4l3 3" />
                    </svg>
                    تخصص‌ها
                </Link>
                <Link to="/doctors" className="flex flex-col items-center">
                      {/* <FaSearch  /> */}
                    جستجو
                </Link>
                <Link to="/doctors" className="flex flex-col items-center">
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                    پزشکان
                </Link>
                <Link to="/profile" className="flex flex-col items-center">
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    پروفایل
                </Link>
            </div>
        </div>
    )
}
export default MobileBottomNav;