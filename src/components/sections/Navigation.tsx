"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#career", label: "Career" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled ? "bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#1a1a2e]" : "bg-[#0a0a0a]"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5">
        <Link href="/" className="flex items-center" aria-label="AGIEINFOTECH Home">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab4a205c-77f9-481e-8f11-2e2336c993f1-agileinfoz-com/assets/images/logo-white-1.webp"
            alt="AGIEINFOTECH Logo"
            width={150}
            height={38}
            priority
            className="h-auto w-[150px]"
          />
        </Link>
        
        <nav className="hidden items-center space-x-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium text-[#ff0066] hover:text-[#ff3385] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center pl-8 border-l border-[#1a1a2e]">
            <ThemeToggle />
          </div>
        </nav>
        
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-pink-500 hover:text-pink-400 hover:bg-[#1a1a2e] focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 bg-[#0a0a0a] px-4 pt-2 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-[#ff0066] hover:text-[#ff3385] hover:bg-[#1a1a2e]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
