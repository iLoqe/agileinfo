"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // Delay opening the bubble for 2 seconds on page load

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex items-end gap-3">
      {/* Chat Bubble */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="relative bg-card-background rounded-xl p-4 shadow-2xl w-[280px] sm:w-[320px]">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex-grow">
              <h5 className="font-semibold text-base text-text-primary">
                AGILEINFOTECH Assistant
              </h5>
              <p className="text-xs text-text-secondary mt-0.5">
                Online • Responds instantly
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-text-secondary hover:text-text-primary transition-colors flex-shrink-0 ml-2"
              aria-label="Close chat bubble"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <p className="mt-3 text-sm text-text-secondary leading-relaxed">
            Hi there! 👋 Need help with anything? Just click here to chat!
          </p>

          {/* Tail */}
          <div className="absolute bottom-5 -right-[9px] w-5 h-5 bg-card-background transform rotate-45"></div>
        </div>
      </div>

      {/* Chat Icon Button */}
      <div className="relative flex-shrink-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#16213e] to-[#0f3460] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Toggle chat"
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/bot-22.gif?"
            alt="Chatbot Assistant"
            width={60}
            height={60}
            className="rounded-full object-cover w-[58px] h-[58px]"
          />
        </button>

        {/* Online Status Indicator */}
        <div className="absolute bottom-0 right-0">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-[#1a1a2e]"></span>
          </span>
        </div>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-[#1a1a2e]">
          1
        </div>
      </div>
    </div>
  );
}
