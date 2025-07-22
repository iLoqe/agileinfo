"use client";

import React from 'react';
import Image from 'next/image';

const testimonialsData = [
  {
    quote: "AGILEINFOTECH built a stunning eCommerce platform for our jewelry brand, Subbiah Jewellers. The site is elegant, fast, and easy to manage — exactly what we needed to showcase our collections. Their team was collaborative and exceeded every promise.",
    name: "Subbiah Team",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/subbiah-18.webp"
  },
  {
    quote: "AGILEINFOTECH crafted a beautiful static website for Travelmate Holidays that perfectly captures our travel experiences. The visuals are breathtaking, the layout is clean, and the performance is top-notch. Highly recommended for design-focused projects.",
    name: "Travelmate Holidays Team",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/TTh%202-17.webp"
  },
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
  }
];

const TestimonialCard = ({ quote, name, avatar }: typeof testimonialsData[0]) => (
  <div className="w-[420px] h-[300px] flex-shrink-0 bg-card-background border border-border rounded-xl shadow-card flex flex-col justify-between p-8 relative overflow-hidden">
    <div className="z-10 flex-grow">
      <p className="text-text-secondary leading-relaxed">{quote}</p>
    </div>
    <div className="absolute top-0 left-0">
      <span className="text-[110px] text-secondary-dark font-bold opacity-20 -translate-y-8 -translate-x-3 leading-none select-none">“</span>
    </div>
    <div className="flex items-center gap-4 mt-6 z-10">
      <Image
        src={avatar}
        alt={name}
        width={56}
        height={56}
        className="rounded-full w-14 h-14 object-cover"
      />
      <h4 className="text-lg font-semibold text-text-primary">{name}</h4>
    </div>
  </div>
);

const TestimonialsSection = () => {
    
  return (
    <>
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-420px * ${testimonialsData.length})); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-text-primary">What Our Clients Say</h2>
          <p className="text-text-secondary text-center max-w-3xl mx-auto mt-4">
            See what our clients have to say about our exceptional services and solutions that have helped transform their businesses.
          </p>

          <div className="mt-12 group">
             <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
                <div className="flex w-max gap-6 animate-scroll">
                    {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;