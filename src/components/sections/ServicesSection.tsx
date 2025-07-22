import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

const services = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/Web%20Development-4.webp?",
    title: "Web Development",
    description: "Custom web development solutions that bring your vision to life. We create responsive, user-friendly websites that stand out.",
    link: "https://agileinfoz.com/services.html"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/Mobile%20app-5.webp?",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional performance and user experience.",
    link: "https://agileinfoz.com/services.html"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/Seo-6.webp?",
    title: "SEO Optimization",
    description: "Drive organic traffic to your website with our proven search engine optimization strategies and techniques.",
    link: "https://agileinfoz.com/services.html"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/domain-7.webp?",
    title: "Domain and Hosting Services",
    description: "Secure your domain and host your site on fast, scalable servers. Perfect for businesses, blogs, or portfolios ready to go live.",
    link: "https://agileinfoz.com/services.html"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/It%20Consulting-8.webp?",
    title: "General IT Consultations",
    description: "Unlock the full potential of your technology with expert guidance. We offer strategic IT consultations to boost efficiency and growth.",
    link: "https://agileinfoz.com/services.html"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/Logo-gen-12.webp?",
    title: "Logo & Branding",
    description: "Create a memorable brand identity with our professional logo design and modern branding strategies.",
    link: "https://agileinfoz.com/services.html"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold text-text-primary">Our Services</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">
            Discover our premium services designed to elevate your experience. Each service is crafted with
            attention to detail and tailored to meet your specific needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card-background border border-border rounded-[12px] p-8 text-center flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-card cursor-pointer"
            >
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={70}
                height={70}
                className="mb-6"
              />
              <h3 className="text-[24px] font-semibold text-text-primary mb-4 h-16 flex items-center">{service.title}</h3>
              <p className="text-text-secondary flex-grow mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link href={service.link} className="mt-auto text-[#55b6fe] font-medium inline-flex items-center group">
                Learn More
                <MoveRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
