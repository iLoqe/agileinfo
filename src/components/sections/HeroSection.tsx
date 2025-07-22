"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    // Typewriter effect for the main heading
    const fullText = "Building Future-Ready E-Commerce Platforms";
    const [typed, setTyped] = useState("");
    useEffect(() => {
        let i = 0;
        let forward = true;
        let timeout: NodeJS.Timeout;
        function typeLoop() {
            if (forward) {
                if (i < fullText.length) {
                    setTyped(fullText.slice(0, i + 1));
                    i++;
                    timeout = setTimeout(typeLoop, 60);
                } else {
                    forward = false;
                    timeout = setTimeout(typeLoop, 1200); // Pause at full text
                }
            } else {
                if (i > 0) {
                    setTyped(fullText.slice(0, i - 1));
                    i--;
                    timeout = setTimeout(typeLoop, 30);
                } else {
                    forward = true;
                    timeout = setTimeout(typeLoop, 600); // Pause at empty
                }
            }
        }
        typeLoop();
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <style>
                {`
                .gradient-text {
                    background: linear-gradient(90deg, #ff4e9b 0%, #ff6ec4 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }
                .cursor-blink {
                    display: inline-block;
                    width: 1ch;
                    animation: blink 1s steps(1) infinite;
                }
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                .floating-dot {
                    position: absolute;
                    border-radius: 50%;
                    opacity: 0.6;
                    z-index: 0;
                }
                .hero-custom-cursor {
                    cursor: url('/image.png') 12 12;
                }
                `}
            </style>
            <section className="w-full relative overflow-hidden min-h-[600px] hero-custom-cursor">
                {/* Floating Dots/Shapes */}
                <span className="floating-dot" style={{width: '32px', height: '32px', background: '#ff4e9b', top: '10%', left: '5%'}}></span>
                <span className="floating-dot" style={{width: '18px', height: '18px', background: '#6ec6ff', top: '30%', left: '20%'}}></span>
                <span className="floating-dot" style={{width: '24px', height: '24px', background: '#ffb86c', top: '60%', left: '10%'}}></span>
                <span className="floating-dot" style={{width: '20px', height: '20px', background: '#c792ea', top: '80%', left: '30%'}}></span>
                <span className="floating-dot" style={{width: '40px', height: '40px', background: '#ff4e9b', top: '20%', right: '10%'}}></span>
                <span className="floating-dot" style={{width: '16px', height: '16px', background: '#6ec6ff', top: '70%', right: '15%'}}></span>
                {/* Large background shape */}
                <div className="absolute rounded-full bg-pink-900/30 w-[600px] h-[600px] -top-40 -left-40 z-0" />
                <div className="max-w-[1200px] mx-auto px-5 pt-20 pb-10 md:pt-28 md:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
                    <div className="flex flex-col gap-6 text-center lg:text-left animate-fade-in-up">
                        <h1 className="text-[40px] md:text-5xl font-bold !leading-tight gradient-text">
                            {typed}
                            <span className="cursor-blink">|</span>
                        </h1>
                        <h2 className="text-2xl font-semibold text-white mt-2">Transform Your Business with Cutting-Edge Technology Solutions</h2>
                        <p className="text-base text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0">
                            At AGIEINFOTECH, we deliver innovative tech solutions that help businesses thrive in the digital era. Our expert team is committed to excellence in every project we undertake.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start">
                            <Link href="#" className="uppercase tracking-wider text-sm font-bold px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg hover:from-pink-600 hover:to-pink-500 transition-all">
                                INTERNSHIP
                            </Link>
                            <Link href="#" className="uppercase tracking-wider text-sm font-bold px-8 py-3 rounded-full border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white transition-all">
                                APTIQUEST
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