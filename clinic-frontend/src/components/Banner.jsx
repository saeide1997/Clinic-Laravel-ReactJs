// BannerSlider.jsx
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const banners = [
  {
    title: 'دکتر سارا محمدی',
    specialty: 'متخصص قلب و عروق',
    clinic: 'کلینیک سلامت برتر',
    image: './img/doc1.png',
  },
  {
    title: 'دکتر علی زمانی',
    specialty: 'متخصص داخلی',
    clinic: 'کلینیک مهر',
    image: './img/doc2.png',
  },
  {
    title: 'دکتر نسرین احمدی',
    specialty: 'متخصص مغز و اعصاب',
    clinic: 'درمانگاه پارس',
    image: './img/doc3.png',
  },
  {
    title: 'دکتر نرگس حسینی',
    specialty: 'متخصص زنان و زایمان',
    clinic: 'کلینیک یاس',
    image: './img/doc4.png',
  },
];

const BannerSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      direction: 'rtl',
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div className="w-full overflow-hidden px-4 mt-6" dir="rtl">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-4 px-4">
          {banners.map((banner, index) => (
            <div className="embla__slide flex-[0_0_95%] md:flex-[0_0_95%] relative" key={index}>
              <div className="relative min-h-[30vh] md:min-h-[55vh]">
                {/* سایه اول */}
                <div className="absolute top-2 left-2 right-2 min-h-[26vh] md:min-h-[52vh] bg-gray-300 opacity-30 rounded-2xl z-0"></div>

                {/* سایه دوم */}
                <div className="absolute top-4 left-4 right-4 min-h-[27vh] md:min-h-[53vh] bg-gray-300 opacity-20 rounded-2xl z-0"></div>

                {/* کارت اصلی */}
                <div className="bg-blue-600 text-white rounded-2xl p-4 relative overflow-hidden min-h-[25vh] md:min-h-[51vh] flex items-center z-10">
                  <div className="z-10 relative w-2/3 text-right">
                    <p className="text-base md:text-2xl mb-1">به دنبال پزشک متخصص هستید؟</p>
                    <p className="text-xl md:text-3xl font-semibold my-2">{banner.title}</p>
                    <p className="text-base md:text-xl">{banner.specialty}</p>
                    <p className="text-base md:text-xl">{banner.clinic}</p>
                  </div>
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="absolute bottom-0 left-0 w-1/3 h-full object-cover rounded-2xl z-10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
