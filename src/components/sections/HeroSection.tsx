"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    const [typedText, setTypedText] = useState("");
    const baseText = "Transforming Ideas into Digital S";
    const textToType = "olutions";

    useEffect(() => {
        let currentText = "";
        let i = 0;
        if (textToType.length > 0) {
            const typingInterval = setInterval(() => {
                if (i < textToType.length) {
                    currentText += textToType[i];
                    setTypedText(currentText);
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 150);

            return () => clearInterval(typingInterval);
        }
    }, []);

    return (
        <>
            <style>
                {`
                @keyframes blink {
                    50% { opacity: 0; }
                }
                .cursor-blink {
                    animation: blink 1s step-end infinite;
                }
                `}
            </style>
            <section className="w-full">
                <div className="max-w-[1200px] mx-auto px-5 pt-20 pb-10 md:pt-28 md:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="flex flex-col gap-6 text-center lg:text-left animate-fade-in-up">
                        <h1 className="text-[40px] md:text-5xl font-bold text-text-primary !leading-tight">
                            {baseText}
                            <span>{typedText}</span>
                            <span className="cursor-blink inline-block -ml-1">|</span>
                        </h1>
                        <p className="text-base text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0">
                            At AGIEINFOTECH, we deliver innovative tech solutions that help businesses thrive in the digital era. Our expert team is committed to excellence in every project we undertake.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start">
                            <Link href="#" className="uppercase tracking-wider text-sm font-medium border border-text-primary text-text-primary px-8 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                Internship
                            </Link>
                            <Link href="#" className="uppercase tracking-wider text-sm font-medium border border-text-primary text-text-primary px-8 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                Aptiquest
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/55c64032f4-3.gif?"
                            alt="Tech Illustration"
                            width={500}
                            height={450}
                            priority
                            unoptimized
                            className="w-full max-w-md lg:max-w-full"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;