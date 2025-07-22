"use client";

import React from 'react';
import Image from 'next/image';

const testimonialsData = [
  {
    quote: "AGILEINFOTECH delivered a dynamic website that streamlined our service offerings and improved user engagement. The backend is robust, and the interface is intuitive. Their technical expertise and attention to detail truly impressed us.",
    name: "Almarkazi Telecommunication",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/AG_Technos-16.webp"
  },
  {
    quote: "AGILEINFOTECH designed a clean and professional static website for our aluminium fabrication business. It clearly communicates our services and has helped us attract more local clients. Their work was timely and reliable.",
    name: "Good Will Team",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/Good%20Will-19.webp"
  },
  {
    quote: "AGILEINFOTECH helped boost our online visibility through targeted SEO strategies and provided valuable IT consultation that improved our operations. We've seen a clear increase in customer inquiries since partnering with them.",
    name: "Trivandrum Smart Cabs",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/TSC%20Crop-20.webp"
  },
  {
    quote: "AGILEINFOTECH created a delightful static website for Lekshmi Bakers that perfectly reflects our brand and menu. The design is simple, attractive, and loads quickly — exactly what we needed to connect with our local customers.",
    name: "Lekshmi Bakers",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/lekshmi-21.webp"
  },
  {
    quote: "AGILEINFOTECH crafted a beautiful static website for Travelmate Holidays that perfectly captures our travel experiences. The visuals are breathtaking, the layout is clean, and the performance is top-notch. Highly recommended for design-focused projects.",
    name: "Travelmate Holidays Team",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/TTh%202-17.webp"
  },
  {
    quote: "AGILEINFOTECH built a stunning eCommerce platform for our jewelry brand, Subbiah Jewellers. The site is elegant, fast, and easy to manage — exactly what we needed to showcase our collections. Their team was collaborative and exceeded every promise.",
    name: "Subbiah Team",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/subbiah-18.webp"
  }
];

const StarRating = () => (
  <div className="flex gap-1 mt-1">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ quote, name, avatar }: typeof testimonialsData[0]) => (
  <div className="relative bg-[#18141c] rounded-2xl shadow-lg p-7 flex flex-col h-full min-h-[260px] w-[350px] mx-2">
    {/* Pink quote icon */}
    <div className="absolute top-5 left-5 text-pink-500 text-3xl">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#ff4e9b" fillOpacity="0.15"/>
        <path d="M12 20V14H8V12C8 10.8954 8.89543 10 10 10H14V12H10V14H12C13.1046 14 14 14.8954 14 16V20C14 21.1046 13.1046 22 12 22H8C6.89543 22 6 21.1046 6 20V18H8V20H12Z" fill="#ff4e9b"/>
      </svg>
    </div>
    <p className="text-white text-base mb-6 mt-2">{quote}</p>
    <div className="flex items-center gap-4 mt-auto">
      <Image
        src={avatar}
        alt={name}
        width={48}
        height={48}
        className="rounded-full w-12 h-12 object-cover border-2 border-pink-400"
      />
      <div>
        <div className="text-pink-400 font-semibold text-lg">{name}</div>
        <StarRating />
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  // Split testimonials into two rows
  const row1 = testimonialsData.filter((_, i) => i % 2 === 0);
  const row2 = testimonialsData.filter((_, i) => i % 2 === 1);
  return (
    <section className="py-20 relative overflow-hidden" id="testimonials">
      <style>{`
        .testimonials-gradient-text {
          background: linear-gradient(90deg, #ff4e9b 0%, #ff6ec4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .floating-dot {
          position: absolute;
          border-radius: 50%;
          opacity: 0.6;
          z-index: 0;
        }
        @keyframes testimonial-scroll-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes testimonial-scroll-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .testimonial-carousel {
          display: flex;
          width: max-content;
        }
        .testimonial-carousel-row1 {
          animation: testimonial-scroll-ltr 50s linear infinite;
        }
        .testimonial-carousel-row2 {
          animation: testimonial-scroll-rtl 50s linear infinite;
        }
        .testimonial-carousel-wrapper:hover .testimonial-carousel-row1,
        .testimonial-carousel-wrapper:hover .testimonial-carousel-row2 {
          animation-play-state: paused;
        }
      `}</style>
      {/* Floating Dots/Shapes */}
      <span className="floating-dot" style={{width: '22px', height: '22px', background: '#ff4e9b', top: '8%', left: '10%'}}></span>
      <span className="floating-dot" style={{width: '14px', height: '14px', background: '#6ec6ff', top: '18%', left: '80%'}}></span>
      <span className="floating-dot" style={{width: '18px', height: '18px', background: '#ffb86c', top: '60%', left: '5%'}}></span>
      <span className="floating-dot" style={{width: '20px', height: '20px', background: '#c792ea', top: '80%', left: '30%'}}></span>
      <span className="floating-dot" style={{width: '30px', height: '30px', background: '#ff4e9b', top: '30%', right: '10%'}}></span>
      <span className="floating-dot" style={{width: '16px', height: '16px', background: '#6ec6ff', top: '70%', right: '15%'}}></span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-extrabold uppercase testimonials-gradient-text tracking-wide">What Our Clients Say</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white">
            See what our clients have to say about our exceptional services and solutions that have helped transform their businesses.
          </p>
        </div>
        <div className="space-y-8">
          {/* Row 1: left-to-right */}
          <div className="testimonial-carousel-wrapper w-full overflow-x-hidden">
            <div className="testimonial-carousel testimonial-carousel-row1">
              {[...row1, ...row1].map((testimonial, idx) => (
                <TestimonialCard key={"row1-"+idx} {...testimonial} />
              ))}
            </div>
          </div>
          {/* Row 2: right-to-left */}
          <div className="testimonial-carousel-wrapper w-full overflow-x-hidden">
            <div className="testimonial-carousel testimonial-carousel-row2">
              {[...row2, ...row2].map((testimonial, idx) => (
                <TestimonialCard key={"row2-"+idx} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;