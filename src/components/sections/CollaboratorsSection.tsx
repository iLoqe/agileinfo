import Image from 'next/image';

const collaborators = [
  {
    name: "Al Markazi Telecommunication",
    location: "Ajman, UAE",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/AG_Technos-16.webp?",
    width: 200,
    height: 70,
  },
  {
    name: "Travelmate Holidays",
    location: "Kerala, IND",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/TTh%202-17.webp?",
    width: 130,
    height: 100,
  },
  {
    name: "Subbiah Jewellers",
    location: "Kerala, IND",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/subbiah-18.webp?",
    width: 200,
    height: 70,
  },
  {
    name: "GOOD WILL",
    location: "Kerala, IND",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/Good%20Will-19.webp?",
    width: 200,
    height: 70,
  },
  {
    name: "Trivandrum Smart Cabs",
    location: "Kerala, IND",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/TSC%20Crop-20.webp?",
    width: 120,
    height: 100,
  },
  {
    name: "Lekshmi Bakers",
    location: "Kerala, IND",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/lekshmi-21.webp?",
    width: 170,
    height: 70,
  },
];

const CollaboratorsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="collaborators">
      <style>{`
        .collab-gradient-text {
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
        .collab-card {
          border: 2px solid #2d1936;
          transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
        }
        .collab-card:hover {
          border-color: #ff4e9b;
          box-shadow: 0 0 24px 0 #ff4e9b55;
          transform: scale(1.04);
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
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-extrabold uppercase collab-gradient-text tracking-wide">
            Our Trusted Collaborators
          </h2>
          <p className="mt-4 text-base text-white">
            We partner with industry leaders to deliver excellence and innovation
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborators.map((collaborator) => (
            <div
              key={collaborator.name}
              className="collab-card bg-[#18141c] rounded-2xl p-10 text-center flex flex-col items-center justify-start"
            >
              <div className="h-24 flex items-center justify-center mb-6">
                <Image
                  src={collaborator.logo}
                  alt={`${collaborator.name} Logo`}
                  width={collaborator.width}
                  height={collaborator.height}
                  className="object-contain max-h-full"
                />
              </div>
              <div className="mt-auto">
                <h4 className="text-lg font-bold text-pink-500">
                  {collaborator.name}
                </h4>
                <p className="text-base text-white mt-1 opacity-80">
                  {collaborator.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;
