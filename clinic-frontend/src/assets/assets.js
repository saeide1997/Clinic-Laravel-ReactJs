import appointment_img from './img/appointment_img.png'
import header_img from './img/header_img.png'
import group_profiles from './img/group_profiles.png'
import profile_pic from './img/profile_pic.png'
import contact_image from './img/contact_image.png'
import about_image from './img/about_image.png'
import logo from './img/logo.svg'
import dropdown_icon from './img/dropdown_icon.svg'
import menu_icon from './img/menu_icon.svg'
import cross_icon from './img/cross_icon.png'
import chats_icon from './img/chats_icon.svg'
import verified_icon from './img/verified_icon.svg'
import arrow_icon from './img/arrow_icon.svg'
import info_icon from './img/info_icon.svg'
import upload_icon from './img/upload_icon.png'
import stripe_logo from './img/stripe_logo.png'
import razorpay_logo from './img/razorpay_logo.png'
import doc1 from './img/doc1.png'
import doc2 from './img/doc2.png'
import doc3 from './img/doc3.png'
import doc4 from './img/doc4.png'
import doc5 from './img/doc5.png'
import doc6 from './img/doc6.png'
import doc7 from './img/doc7.png'
import doc8 from './img/doc8.png'
import doc9 from './img/doc9.png'
import doc10 from './img/doc10.png'
import doc11 from './img/doc11.png'
import doc12 from './img/doc12.png'
import doc13 from './img/doc13.png'
import doc14 from './img/doc14.png'
import doc15 from './img/doc15.png'
import Dermatologist from './img/Dermatologist.svg'
import Gastroenterologist from './img/Gastroenterologist.svg'
import General_physician from './img/General_physician.svg'
import Gynecologist from './img/Gynecologist.svg'
import Neurologist from './img/Neurologist.svg'
import Pediatricians from './img/Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'پزشک عمومی',
        directory: 'general-physician',
        image: General_physician
    },
    {
        speciality: 'متخصص زنان',
        directory: 'gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'متخصص پوست',
        directory: 'dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'متخصص اطفال',
        directory: 'pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'متخصص مغز و اعصاب',
        directory: 'neurologist',
        image: Neurologist
    },
    {
        speciality: 'متخصص گوارش',
        directory: 'gastroenterologist',
        image: Gastroenterologist
    },
]


export const doctors = [
    {
        _id: 'doc1',
        name: 'دکتر ریچارد جیمز',
        image: doc1,
        speciality: 'پزشک عمومی',
        degree: 'دکترای پزشکی (MBBS)',
        experience: '۴ سال سابقه',
        about: 'دکتر دیویس متعهد به ارائه خدمات جامع پزشکی است، با تمرکز بر طب پیشگیرانه، تشخیص زودهنگام و راهکارهای درمانی مؤثر.',
        fees: 50,
        address: {
            line1: 'خیابان ۱۷ کراس، ریچموند',
            line2: 'میدان، جاده حلقه‌ای، لندن'
        }
    },
    {
        _id: 'doc2',
        name: 'دکتر امیلی لارسن',
        image: doc2,
        speciality: 'متخصص زنان',
        degree: 'دکترای پزشکی (MBBS)',
        experience: '۳ سال سابقه',
        about: 'دکتر دیویس متعهد به ارائه خدمات جامع پزشکی است، با تمرکز بر طب پیشگیرانه، تشخیص زودهنگام و راهکارهای درمانی مؤثر.',
        fees: 60,
        address: {
            line1: 'خیابان ۲۷ کراس، ریچموند',
            line2: 'میدان، جاده حلقه‌ای، لندن'
        }
    },
    {
        _id: 'doc3',
        name: 'دکتر سارا پاتل',
        image: doc3,
        speciality: 'متخصص پوست',
        degree: 'دکترای پزشکی (MBBS)',
        experience: '۱ سال سابقه',
        about: 'دکتر دیویس متعهد به ارائه خدمات جامع پزشکی است، با تمرکز بر طب پیشگیرانه، تشخیص زودهنگام و راهکارهای درمانی مؤثر.',
        fees: 30,
        address: {
            line1: 'خیابان ۳۷ کراس، ریچموند',
            line2: 'میدان، جاده حلقه‌ای، لندن'
        }
    },
    {
        _id: 'doc1',
        name: 'دکتر ریچارد جیمز',
        image: doc1,
        speciality: 'پزشک عمومی',
        degree: 'دکترای پزشکی (MBBS)',
        experience: '۴ سال سابقه',
        about: 'دکتر دیویس متعهد به ارائه خدمات جامع پزشکی است، با تمرکز بر طب پیشگیرانه، تشخیص زودهنگام و راهکارهای درمانی مؤثر.',
        fees: 50,
        address: {
            line1: 'خیابان ۱۷ کراس، ریچموند',
            line2: 'میدان، جاده حلقه‌ای، لندن'
        }
    },
    {
        _id: 'doc2',
        name: 'دکتر امیلی لارسن',
        image: doc2,
        speciality: 'متخصص زنان',
        degree: 'دکترای پزشکی (MBBS)',
        experience: '۳ سال سابقه',
        about: 'دکتر دیویس متعهد به ارائه خدمات جامع پزشکی است، با تمرکز بر طب پیشگیرانه، تشخیص زودهنگام و راهکارهای درمانی مؤثر.',
        fees: 60,
        address: {
            line1: 'خیابان ۲۷ کراس، ریچموند',
            line2: 'میدان، جاده حلقه‌ای، لندن'
        }
    },
    {
        _id: 'doc3',
        name: 'دکتر سارا پاتل',
        image: doc3,
        speciality: 'متخصص پوست',
        degree: 'دکترای پزشکی (MBBS)',
        experience: '۱ سال سابقه',
        about: 'دکتر دیویس متعهد به ارائه خدمات جامع پزشکی است، با تمرکز بر طب پیشگیرانه، تشخیص زودهنگام و راهکارهای درمانی مؤثر.',
        fees: 30,
        address: {
            line1: 'خیابان ۳۷ کراس، ریچموند',
            line2: 'میدان، جاده حلقه‌ای، لندن'
        }
    },
    {
        _id: 'doc2',
        name: 'دکتر امیلی لارسن',
        image: doc2,
        speciality: 'متخصص زنان',
        degree: 'دکترای پزشکی (MBBS)',
        experience: '۳ سال سابقه',
        about: 'دکتر دیویس متعهد به ارائه خدمات جامع پزشکی است، با تمرکز بر طب پیشگیرانه، تشخیص زودهنگام و راهکارهای درمانی مؤثر.',
        fees: 60,
        address: {
            line1: 'خیابان ۲۷ کراس، ریچموند',
            line2: 'میدان، جاده حلقه‌ای، لندن'
        }
    },
    {
        _id: 'doc3',
        name: 'دکتر سارا پاتل',
        image: doc3,
        speciality: 'متخصص پوست',
        degree: 'دکترای پزشکی (MBBS)',
        experience: '۱ سال سابقه',
        about: 'دکتر دیویس متعهد به ارائه خدمات جامع پزشکی است، با تمرکز بر طب پیشگیرانه، تشخیص زودهنگام و راهکارهای درمانی مؤثر.',
        fees: 30,
        address: {
            line1: 'خیابان ۳۷ کراس، ریچموند',
            line2: 'میدان، جاده حلقه‌ای، لندن'
        }
    },
    {
        _id: 'doc2',
        name: 'دکتر امیلی لارسن',
        image: doc2,
        speciality: 'متخصص زنان',
        degree: 'دکترای پزشکی (MBBS)',
        experience: '۳ سال سابقه',
        about: 'دکتر دیویس متعهد به ارائه خدمات جامع پزشکی است، با تمرکز بر طب پیشگیرانه، تشخیص زودهنگام و راهکارهای درمانی مؤثر.',
        fees: 60,
        address: {
            line1: 'خیابان ۲۷ کراس، ریچموند',
            line2: 'میدان، جاده حلقه‌ای، لندن'
        }
    },
    {
        _id: 'doc3',
        name: 'دکتر سارا پاتل',
        image: doc3,
        speciality: 'متخصص پوست',
        degree: 'دکترای پزشکی (MBBS)',
        experience: '۱ سال سابقه',
        about: 'دکتر دیویس متعهد به ارائه خدمات جامع پزشکی است، با تمرکز بر طب پیشگیرانه، تشخیص زودهنگام و راهکارهای درمانی مؤثر.',
        fees: 30,
        address: {
            line1: 'خیابان ۳۷ کراس، ریچموند',
            line2: 'میدان، جاده حلقه‌ای، لندن'
        }
    },
    // ادامه دکترها به همین ترتیب...
]

export const months = [
    {
        name: 'فروردین',
        no: 1
    },
    {
        name: 'اردیبهشت',
        no: 2
    },
    {
        name: 'خرداد',
        no: 3
    },
    {
        name: 'تیر',
        no: 4
    },
    {
        name: 'مرداد',
        no: 5
    },
    {
        name: 'شهریور',
        no: 6
    },
    {
        name: 'مهر',
        no: 7
    },
    {
        name: 'آبان',
        no: 8
    },
    {
        name: 'آذر',
        no: 9
    },
    {
        name: 'دی',
        no: 10
    },
    {
        name: 'بهمن',
        no: 11
    },
    {
        name: 'اسفند',
        no: 12
    },
]