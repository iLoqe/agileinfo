"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // This effect ensures that the component will eventually be removed from the DOM
    // to allow user interaction with the page content.
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // The duration can be adjusted

    return () => clearTimeout(timer);
  }, []);

  // Use a transition for a smooth fade-out effect
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-primary-dark to-black text-white transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center animate-fadeIn" style={{ animationDuration: '1.5s' }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.25em] md:tracking-[0.3em] pl-[0.3em]">
          AGIEINFOTECH
        </h1>
        <div className="mt-6 flex justify-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/Cursors-2.webp?"
            alt="Loading animation"
            width={199}
            height={27}
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;