"use client";

import Image from "next/image";

const certificationLogos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/international-accreditation-forum-iaf-seeklogo-9.webp",
    alt: "International Accreditation Forum IAF Logo",
    width: 144,
    height: 48,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/iso-certified-company-stamp-seeklogo-10.webp",
    alt: "ISO Certified Company Stamp Logo",
    width: 96,
    height: 96,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/kerala-startup-mission-seeklogo-11.webp",
    alt: "Kerala Startup Mission Logo",
    width: 226,
    height: 48,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/Logo-gen-12.webp",
    alt: "Logo Gen",
    width: 96,
    height: 96,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/pngkey-13.webp",
    alt: "pngkey.com logo",
    width: 198,
    height: 36,
  },
  {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/R-14.webp",
      alt: "R Certified Logo",
      width: 96,
      height: 96,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/startup-india-hub-seeklogo-15.webp",
    alt: "Startup India Hub Logo",
    width: 153,
    height: 48,
  },
];

const CertificationsSection = () => {
    return (
        <section className="py-20">
            <style jsx>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 40s linear infinite;
                }
            `}</style>
            <div className="container mx-auto max-w-6xl px-5 text-center">
                <h2 className="text-4xl font-bold text-text-primary mb-4">
                    Our Certifications
                </h2>
                <p className="max-w-3xl mx-auto text-base text-text-secondary leading-relaxed mb-12">
                    Proof of our expertise, commitment, and quality-driven approach. These certificates reflect our journey of continuous growth and integrity.
                </p>
            </div>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                 <ul className="flex items-center justify-center animate-infinite-scroll hover:[animation-play-state:paused]">
                    {certificationLogos.map((logo, index) => (
                        <li key={index} className="mx-12 shrink-0">
                            <Image 
                                src={logo.src} 
                                alt={logo.alt} 
                                width={logo.width} 
                                height={logo.height} 
                                className="max-h-12 w-auto" 
                            />
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center animate-infinite-scroll hover:[animation-play-state:paused]" aria-hidden="true">
                     {certificationLogos.map((logo, index) => (
                        <li key={index + certificationLogos.length} className="mx-12 shrink-0">
                            <Image 
                                src={logo.src} 
                                alt={logo.alt} 
                                width={logo.width} 
                                height={logo.height} 
                                className="max-h-12 w-auto"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CertificationsSection;