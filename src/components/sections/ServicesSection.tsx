import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/Web%20Development-4.webp?",
    title: "Web Development",
    description: "Custom web development solutions that bring your vision to life. We create responsive, user-friendly websites that stand out.",
    link: "#"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/Mobile%20app-5.webp?",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional performance and user experience.",
    link: "#"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/Seo-6.webp?",
    title: "SEO Optimization",
    description: "Drive organic traffic to your website with our proven search engine optimization strategies and techniques.",
    link: "#"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/domain-7.webp?",
    title: "Domain and Hosting Services",
    description: "Secure your domain and host your site on fast, scalable servers. Perfect for businesses, blogs, or portfolios ready to go live.",
    link: "#"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/It%20Consulting-8.webp?",
    title: "General IT Consultations",
    description: "Unlock the full potential of your technology with expert guidance. We offer strategic IT consultations to boost efficiency and growth.",
    link: "#"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="services">
      <style>{`
        .services-gradient-text {
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
      `}</style>
      {/* Floating Dots/Shapes */}
      <span className="floating-dot" style={{width: '22px', height: '22px', background: '#ff4e9b', top: '8%', left: '10%'}}></span>
      <span className="floating-dot" style={{width: '14px', height: '14px', background: '#6ec6ff', top: '18%', left: '80%'}}></span>
      <span className="floating-dot" style={{width: '18px', height: '18px', background: '#ffb86c', top: '60%', left: '5%'}}></span>
      <span className="floating-dot" style={{width: '20px', height: '20px', background: '#c792ea', top: '80%', left: '30%'}}></span>
      <span className="floating-dot" style={{width: '30px', height: '30px', background: '#ff4e9b', top: '30%', right: '10%'}}></span>
      <span className="floating-dot" style={{width: '16px', height: '16px', background: '#6ec6ff', top: '70%', right: '15%'}}></span>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-extrabold uppercase services-gradient-text tracking-wide">Our Services</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white">
            Discover our premium services designed to elevate your experience. Each service is crafted with
            attention to detail and tailored to meet your specific needs.
          </p>
        </div>
        {/* 3+2 Card Layout */}
        <div className="flex flex-col items-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className="bg-[#18141c] rounded-2xl shadow-lg overflow-hidden flex flex-col items-stretch transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    style={{objectFit: 'cover'}}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pink-700/80 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-pink-400 mb-2">{service.title}</h3>
                  <p className="text-white mb-6 flex-1">{service.description}</p>
                  <Link href={service.link} className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold shadow hover:from-pink-600 hover:to-pink-500 transition-all">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3">
            {services.slice(3, 5).map((service) => (
              <div
                key={service.title}
                className="bg-[#18141c] rounded-2xl shadow-lg overflow-hidden flex flex-col items-stretch transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    style={{objectFit: 'cover'}}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pink-700/80 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-pink-400 mb-2">{service.title}</h3>
                  <p className="text-white mb-6 flex-1">{service.description}</p>
                  <Link href={service.link} className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold shadow hover:from-pink-600 hover:to-pink-500 transition-all">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
