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
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary">
            Our Trusted Collaborators
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            We partner with industry leaders to deliver excellence and innovation
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborators.map((collaborator) => (
            <div
              key={collaborator.name}
              className="bg-card-background rounded-xl border border-border p-8 text-center flex flex-col items-center justify-start transition-transform duration-300 hover:scale-105 shadow-card"
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
                <h4 className="text-lg font-semibold text-text-primary">
                  {collaborator.name}
                </h4>
                <p className="text-base text-text-secondary mt-1">
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
