import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiTelegramLine } from "react-icons/ri";

export default function Footer() {
  return (
<footer className="bg-[#eaf2ff] text-gray-700 pt-10 pb-6 px-6 mt-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* لوگو و توضیح کوتاه */}
    <div>
      <h2 className="text-2xl font-bold text-blue-700">پزشک‌یاب</h2>
      <p className="mt-4 text-sm leading-6">
        سامانه جستجوی پزشکان، دریافت نوبت آنلاین و خدمات درمانی قابل اعتماد برای شما.
      </p>
    </div>

    {/* لینک‌های مفید */}
    <div>
      <h3 className="text-lg font-semibold mb-4">لینک‌های سریع</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:text-blue-600 transition">صفحه اصلی</a></li>
        <li><a href="/doctors" className="hover:text-blue-600 transition">پزشکان</a></li>
        <li><a href="/about" className="hover:text-blue-600 transition">درباره ما</a></li>
        <li><a href="/contact" className="hover:text-blue-600 transition">تماس با ما</a></li>
      </ul>
    </div>

    {/* شبکه‌های اجتماعی */}
    <div>
      <h3 className="text-lg font-semibold mb-4">ما را دنبال کنید</h3>
      <div className="flex gap-4">
        <a href="#" className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition">
          <FaInstagram />
        </a>
        <a href="#" className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition">
          <FaLinkedin />
        </a>
        <a href="#" className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition">
          <RiTelegramLine />
        </a>
      </div>
    </div>
  </div>

  {/* خط جداکننده */}
  <div className="border-t border-blue-100 my-6" />

  {/* کپی‌رایت */}
  <div className="text-center text-sm text-gray-500">
    © {new Date().getFullYear()} تمامی حقوق محفوظ است | پزشک‌یاب
  </div>
</footer>
  )
}