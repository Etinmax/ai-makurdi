"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const academicsDropdown = [
  { label: "Department of Philosophy", href: "/philosophy" },
  { label: "Academic Programmes", href: "/#" },
  { label: "Course Structure", href: "/#" },
  { label: "Admission Requirements", href: "/#" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics", dropdown: academicsDropdown },
  { label: "E-Journal", href: "https://acjol.org/index.php/tollelege/issue/view/605" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const helvetica = { fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" };

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAcademicsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveIndex(null);
  }, [pathname]);

  return (
    <div className="w-full">

      {/* ── STICKY TOP BAR — #26308f ─────────────────────────────────── */}
      <div className="sticky top-0 z-50 w-full bg-[#26308f] text-white">

        {/* Desktop */}
        <div className="hidden md:flex max-w-full mx-auto items-center justify-between py-4">
          <div className="bg-white px-2 py-2 rounded-md shadow-md ml-[72px]">
            <img src="/ailogo.png" alt="logo" className="w-[65px] h-[75px] object-contain" />
          </div>
          <div className="text-center leading-tight">
            <h2 className="text-[30px] font-[800] tracking-wide" style={helvetica}>AUGUSTINIAN INSTITUTE,</h2>
            <h2 className="text-[30px] font-[800]" style={helvetica}>MAKURDI</h2>
            <p className="text-[15.2px] opacity-90 mt-1">(Affiliate of Rev. Fr. Moses Orshio Adasu University, Makurdi)</p>
          </div>
          <div className="bg-white px-2 py-2 rounded-md shadow-md mr-[72px]">
            <img src="/mologo.png" alt="logo" className="w-[75px] h-[75px] object-contain" />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden flex-col px-4 pt-4 pb-3 gap-2">
          <div className="bg-white px-2 py-2 rounded-md shadow-md self-start">
            <img src="/ailogo.png" alt="logo" className="w-[60px] h-[68px] object-contain" />
          </div>
          <h2 className="text-[30px] font-[800] leading-tight text-center" style={helvetica}>
            AUGUSTINIAN INSTITUTE, MAKURDI
          </h2>
          <p className="text-[13px] opacity-90 leading-snug text-center">
            (Affiliate of Rev. Fr. Moses Orshio Adasu University, Makurdi)
          </p>
          <div className="bg-white px-2 py-2 rounded-md shadow-md self-start mt-1">
            <img src="/mologo.png" alt="logo" className="w-[60px] h-[68px] object-contain" />
          </div>
        </div>

      </div>

      {/* ── DESKTOP NAV — #1a236e ────────────────────────────────────── */}
      <nav className="hidden md:block w-full bg-[#1a236e] text-white">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4">
          <ul className="flex flex-1 justify-center font-medium text-[15px]">
            {navLinks.map((link, i) =>
              link.dropdown ? (
                <li key={i} ref={dropdownRef} className="group relative">
                  <button
                    onClick={() => setAcademicsOpen(!academicsOpen)}
                    className="flex items-center gap-1 px-3 py-4 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${academicsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {/* Underline with side padding */}
                  <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  {academicsOpen && (
                    <div className="absolute top-full left-0 z-50 bg-white text-gray-800 rounded-md shadow-xl min-w-[240px] py-1 mt-0">
                      <div className="absolute -top-[7px] left-5 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-white" />
                      {link.dropdown.map((item, j) => (
                        <Link key={j} href={item.href} onClick={() => setAcademicsOpen(false)}
                          className="block px-5 py-[13px] text-[15px] text-gray-700 hover:bg-black/[0.05] transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={i} className="group relative">
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block px-3 py-4 hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </Link>
                  {/* Underline with side padding */}
                  <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </li>
              )
            )}
          </ul>
          <div className="flex gap-3 py-2 shrink-0">
            <Link href="#" className="bg-[#0056b3] hover:bg-[#0047a0] transition-colors px-5 py-2 rounded-md font-medium shadow cursor-pointer">
              E-Library
            </Link>
            <Link href="https://webmail.aimakurdi.ng" target="_blank" rel="noopener noreferrer"
              className="border-2 border-[#0653ac] bg-[#19246f] text-[#134da6] hover:bg-white/10 transition px-5 py-2 rounded-md cursor-pointer">
              Emails
            </Link>
          </div>
        </div>
      </nav>

      {/* ── MOBILE HAMBURGER ROW ────────────────────────────────────── */}
      <div className="md:hidden w-full bg-[#1a236e] flex items-center justify-end px-4 py-3">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="border border-white/40 rounded-md p-[7px]"
          aria-label="Toggle menu"
        >
          {mobileOpen
            ? <X size={20} className="text-white" />
            : <Menu size={20} className="text-white" />
          }
        </button>
      </div>

      {/* ── MOBILE MENU ─────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="md:hidden w-full bg-[#1a236e] text-white flex flex-col">
          {navLinks.map((link, i) => {
            const clicked = activeIndex === i;
            return link.dropdown ? (
              <div key={i} className="relative">
                <button
                  onClick={() => {
                    setMobileAcademicsOpen(!mobileAcademicsOpen);
                    setActiveIndex(i);
                  }}
                  className={`w-full text-left px-6 py-4 text-[17px] font-medium transition-colors
                    ${mobileAcademicsOpen ? "bg-[#30397c]" : "hover:bg-[#30397c]"}`}
                >
                  {link.label}
                </button>
                {/* Short underline always visible, full when open */}
                <span
                  className="absolute bottom-0 left-6 h-[3px] bg-white transition-all duration-300"
                  style={{ width: mobileAcademicsOpen ? "calc(100% - 48px)" : "2rem" }}
                />
                {mobileAcademicsOpen && (
                  <div className="bg-[#151d5e] flex flex-col">
                    {link.dropdown.map((item, j) => (
                      <Link key={j} href={item.href}
                        onClick={() => { setMobileOpen(false); setMobileAcademicsOpen(false); setActiveIndex(null); }}
                        className="pl-10 pr-6 py-3 text-[15px] text-white/75 hover:text-white border-b border-white/5 transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div key={i} className="relative">
                <Link
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={() => { setActiveIndex(i); setMobileOpen(false); }}
                  className={`block px-6 py-4 text-[17px] font-medium transition-colors
                    ${clicked ? "bg-[#30397c]" : "hover:bg-[#30397c]"}`}
                >
                  {link.label}
                </Link>
                {/* Underline with side padding — only on clicked */}
                {clicked && <span className="absolute bottom-0 left-6 right-6 h-[3px] bg-white" />}
              </div>
            );
          })}

          <div className="flex gap-3 px-6 py-5">
            <Link href="#" className="bg-[#0056b3] px-5 py-2 rounded-md font-medium shadow text-[15px]">
              E-Library
            </Link>
            <Link href="https://webmail.aimakurdi.ng" target="_blank" rel="noopener noreferrer"
              className="border-2 border-[#0653ac] bg-[#19246f] text-[#134da6] px-5 py-2 rounded-md text-[15px]">
              Emails
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}