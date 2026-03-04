"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Globe, GraduationCap, BookOpen, Monitor, DollarSign, Users, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// ── HELPERS ───────────────────────────────────────────────────────────────────

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-[32px] font-[600] text-[#1e2a78] mb-3">{title}</h2>
      <div className="w-[82px] h-[3px] bg-[#1e2a78] rounded-full mx-auto" />
    </div>
  );
}

function BlueBtn({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="inline-block bg-[#1a56db] hover:bg-[#1648c0] transition-colors text-white text-[16px] font-normal px-5 py-2 rounded-md mt-4">
      {label}
    </a>
  );
}

// ── FAQ (slide animation, shared open state) ──────────────────────────────────
function FaqGroup({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col  rounded-xl overflow-hidden shadow-sm">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const isFirst = i === 0;
        const isLast = i === items.length - 1;
        return (
          <FaqItem
            key={i}
            q={item.q}
            a={item.a}
            isOpen={isOpen}
            isFirst={isFirst}
            isLast={isLast}
            onToggle={() => setOpenIndex(isOpen ? null : i)}
          />
        );
      })}
    </div>
  );
}

function FaqItem({ q, a, isOpen, isFirst, isLast, onToggle }: {
  q: string; a: string; isOpen: boolean; isFirst: boolean; isLast: boolean; onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => { if (contentRef.current) setHeight(contentRef.current.scrollHeight); }, [a]);

  return (
    <div className={`overflow-hidden border border-gray-200 ${isFirst ? "rounded-t-xl" : "-mt-px"} ${isLast && !isOpen ? "rounded-b-xl" : ""}`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${isOpen ? "bg-[#1e2a78]" : "bg-[#eef0ff]"}`}
      >
        <span className={`text-[18px] cursor-pointer font-semibold pr-4 ${isOpen ? "text-white" : "text-[#1e2a78]"}`}>{q}</span>
        <ChevronDown size={16} className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : "text-[#1e2a78]"}`} />
      </button>
      <div style={{ maxHeight: isOpen ? `${height}px` : "0px", opacity: isOpen ? 1 : 0, transition: "max-height 0.35s ease, opacity 0.3s ease", overflow: "hidden" }}>
        <div ref={contentRef} className={`px-5 py-4 bg-white border-t border-gray-200 ${isLast ? "rounded-b-xl" : ""}`}>
          <p className="text-[16px] text-gray-600 leading-6">{a}</p>
        </div>
      </div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="w-full font-sans">
      <Header />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
     {/*} <div className="w-full relative text-white text-center overflow-hidden" style={{ minHeight: 200 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/contact/hero-bg.jpg')" }} />
        <div className="absolute inset-0 bg-[#1e2a78]/70" />
        <div className="relative z-10 max-w-2xl mx-auto px-8 py-16">
          <h1 className="text-[32px] font-extrabold mb-3">Get In Touch With Us</h1>
          <p className="text-[15px] text-blue-100 leading-relaxed">
            We're here to answer your questions and help you with any information you need
          </p>
        </div>
      </div>*/}
       <section className="relative w-full h-[400px] flex items-center justify-center text-center text-white">
      
      {/* Background Image */}
      <img
        src="/adblock.jpg"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#24347a]/70" />

      {/* Content */}
<div className="relative z-10 max-w-[800px] px-6">
  <h1
    className="text-[30px] md:text-[40px] font-bold leading-normal tracking-wide"
    style={{ animation: "slideUp 1.5s ease-out 0.3s forwards", opacity: 0 }}
  >
    Get In Touch With Us
  </h1>

  <p
    className="mt-4 text-[15.2px] md:text-[19.2px] font-[400]"
    style={{ animation: "slideUp 1.5s ease-out 0.3s forwards", opacity: 0 }}
  >
    We're here to answer your questions and help you with any information you need
  </p>
</div>
    </section>

      {/* ── CONTACT INFORMATION ───────────────────────────────────────────── */}
      <section className="w-full bg-[#eef0ff] py-16">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Contact Information" />

          {/* Row 1: 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-17">

            {/* Visit Our Campus */}
            <div className="bg-white items-center justify-center rounded-sm transform transition hover:-translate-y-2 shadow-md p-8 flex flex-col">
              <div className="mb-5 flex items-center justify-center ">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={55} height={55} fill="#1e2a78">
  <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/>
</svg>              </div>
              <h3 className="text-[28px] font-[600] text-gray-900 mb-3">Visit Our Campus</h3>
              <div className=" flex items-center justify-center flex-col text-[16px] font[400] text-[#333333] leading-6 flex-1">
                <p>Augustinian Institute</p>
                <p>Otukpo Road</p>
                <p>P.O Box 584</p>
                <p>Makurdi, Benue State</p>
                <p>Nigeria</p>
              </div>
              <div className="mt-4 flex justify-center items-center">
                <BlueBtn href="https://maps.google.com" label="View on Map" />
              </div>
            </div>

            {/* Call Us */}
            <div className="bg-white items-center justify-center rounded-sm transform transition hover:-translate-y-2 shadow-md p-8 flex flex-col">
              <div className="mb-5 flex items-center justify-center ">
                <Phone size={50} fill="#1e2a78" strokeWidth={0} />
              </div>
             <h3 className="text-[28px] font-[600] text-gray-900 mb-3">Call Us</h3>
              <div className="flex items-center justify-center flex-col text-[16px] font[400] text-[#333333] leading-6 flex-1">
                <p><span className="font-[600]">Main Line:</span> +234 703 182 8531</p>
                <p><span className="font-[600]">Admissions:</span> +234 803 059 3538</p>
                <p><span className="font-[600]">Library:</span> +234 802 345 6789</p>
                <p><span className="font-[600]">ICT Help Desk:</span> +234 905 678 9012</p>
              </div>
              <div className="mt-4 flex justify-center items-center">
                <BlueBtn href="tel:+2347031828531" label="Call Now" />
              </div>
            </div>

            {/* Email Us */}
          <div className="bg-white flex items-center justify-center rounded-sm transform transition hover:-translate-y-2 shadow-md p-8  flex-col">
              <div className="mb-5 flex items-center justify-center ">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={55} height={55} fill="#1e2a78">
  <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/>
</svg>              </div>
              <h3 className="text-[28px] font-[600] text-gray-900 mb-3">Email Us</h3>
              <div className="flex items-center justify-center flex-col text-[16px] font[400] text-[#333333] leading-6 flex-1">
                <p><span className="font-[600]">Rector's Office:</span> rector@aimakurdi.ng</p>
                <p><span className="font-[600]">Admissions:</span> admissions@aimakurdi.ng</p>
                <p><span className="font-[600]">Library:</span> library@aimakurdi.ng</p>
                <p><span className="font-[600]">General Inquiries:</span> info@aimakurdi.ng</p>
              </div>
              <div className="mt-4 flex justify-center items-center">
                <BlueBtn href="mailto:info@aimakurdi.ng" label="Send Email" />
              </div>
            </div>
          </div>

          {/* Row 2: 2 cards */}
          <div className="grid md:grid-cols-2  gap-6">

            {/* Office Hours */}
            <div className="bg-white py-10 flex flex-col justify-center place-items-center transform transition hover:-translate-y-2 shadow-md rounded-md p-7">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={60} height={60} fill="#1e2a78">
  <path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/>
</svg>
              </div>
              <h3 className="text-[28px] font-[600] text-gray-900 mb-3">Office Hours</h3>
              <div className="text-[16px] text-center text-gray-600 leading-6">
                <p className="font-semibold text-gray-800 mb-1">Administrative Offices:</p>
                <p>Monday - Friday: 8:00 AM – 5:00 PM</p>
                <p>Saturday: 9:00 AM – 1:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="font-semibold text-gray-800 mt-4 mb-1">Library Hours:</p>
                <p>Monday - Friday: 8:00 AM – 8:00 PM</p>
                <p>Saturday: 9:00 AM – 4:00 PM</p>
                <p>Sunday: 12:00 PM – 4:00 PM</p>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="bg-white py-10 flex flex-col justify-center place-items-center transform transition hover:-translate-y-2 shadow-md rounded-md p-7">
              <div className="mb-4">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={60} height={60} fill="#1e2a78">
  <path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z"/>
</svg>
              </div>
              <h3 className="text-[28px] font-[600] text-gray-900 mb-3">Connect With Us</h3>
              <p className="text-[16px] text-center text-gray-600 leading-6 mb-5">
                Stay updated with our latest news and events through our social media channels and website.
              </p>
               {/* Social icons */}
              <div className="flex gap-3 mb-4">
  {[
    {
      name: "facebook",
      icon: (
        <svg viewBox="0 0 24 24" width={20} height={20} fill="white">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      name: "instagram",
      icon: (
        <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
        </svg>
      ),
    },
    {
      name: "twitter",
      icon: (
        <svg viewBox="0 0 24 24" width={20} height={20} fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: "linkedin",
      icon: (
        <svg viewBox="0 0 24 24" width={20} height={20} fill="white">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    
     // YouTube icon — white play triangle
{
  name: "youtube",
  icon: (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="white">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1e2a78"/>
    </svg>
  ),
},
    
  ].map((s) => (
    <a key={s.name} href="#" className="w-9 h-9 rounded-full bg-[#1e2a78] flex items-center justify-center hover:bg-[#1e2a78] transition-colors">
      {s.icon}
    </a>
  ))}
</div>
              <div className="text-[16px] text-gray-700 mb-5">
                <p><span className="font-[600]">Website:</span> www.aimakurdi.ng</p>
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {/* ── SEND US A MESSAGE ─────────────────────────────────────────────── */}
      <section className="bg-white w-full  py-16">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Send Us a Message" />

          <div className=" bg-[#eef0ff] rounded-xl shadow-sm p-8">
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[16px] font-normal text-gray-700 mb-1.5">First Name <span className="text-gray-800">*</span></label>
                <input type="text" className="w-full border bg-white border-gray-300 rounded-md px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#1e2a78] transition-colors" />
              </div>
              <div>
                <label className="block text-[16px] font-normal text-gray-700 mb-1.5">Last Name <span className="text-gray-800">*</span></label>
                <input type="text" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#1e2a78] transition-colors" />
              </div>
              <div>
                <label className="block text-[16px] font-normal text-gray-700 mb-1.5">Email Address <span className="text-gray-800">*</span></label>
                <input type="email" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#1e2a78] transition-colors" />
              </div>
              <div>
                <label className="block text-[16px] font-semibold text-gray-700 mb-1.5">Phone Number</label>
                <input type="tel" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#1e2a78] transition-colors" />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-[16px] font-normal text-gray-700 mb-1.5">Department to Contact</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-[16px] text-gray-500 focus:outline-none focus:border-[#1e2a78] transition-colors appearance-none bg-white">
                  <option value="">Select a department</option>
                  <option>Rector's Office</option>
                  <option>Admissions Office</option>
                  <option>Academic Affairs</option>
                  <option>Library Services</option>
                  <option>ICT Department</option>
                  <option>Finance/Bursary</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-[16px] font-normal text-gray-700 mb-1.5">Subject <span className="text-gray-800">*</span></label>
              <input type="text" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#1e2a78] transition-colors" />
            </div>

            <div className="mb-5">
              <label className="block text-[16px] font-normal text-gray-700 mb-1.5">Message <span className="text-gray-800">*</span></label>
              <textarea rows={5} className="w-full bg-white border border-gray-300 rounded-md px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#1e2a78] transition-colors resize-none" />
            </div>

            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" id="subscribe" className="w-4 h-4 accent-[#1e2a78]" />
              <label htmlFor="subscribe" className="text-[16px] text-gray-600">Subscribe to our newsletter for updates</label>
            </div>

            <button className="w-full bg-[#1a56db] hover:bg-[#1648c0] transition-colors text-white font-normal text-[18px] py-3 rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* ── DEPARTMENT CONTACTS ───────────────────────────────────────────── */}
      <section className="w-full bg-[#eef0ff] py-16">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Department Contacts" />
          <div className="grid  md:grid-cols-3 gap-6">
            {[
              {
           icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={42} height={42} fill="#1e2a78">
  <path d="M337.3 51C325.9 48.7 314.2 48.7 302.8 51L115.3 88.5C104.1 90.7 96 100.6 96 112C96 122.3 102.5 131.3 112 134.6L112 208L96.3 286.6C96.1 287.5 96 288.5 96 289.5C96 297.5 102.5 304.1 110.6 304.1L145.5 304.1C153.5 304.1 160.1 297.6 160.1 289.5C160.1 288.5 160 287.6 159.8 286.6L144 208L144 141.3L192 150.9L192 208C192 278.7 249.3 336 320 336C390.7 336 448 278.7 448 208L448 150.9L524.7 135.6C535.9 133.3 544 123.4 544 112C544 100.6 535.9 90.7 524.7 88.5L337.3 51zM320 288C275.8 288 240 252.2 240 208L400 208C400 252.2 364.2 288 320 288zM216.1 384.1C154.7 412.3 112 474.3 112 546.3C112 562.7 125.3 576 141.7 576L296 576L296 430L238.6 387C232.1 382.1 223.4 380.8 216 384.2zM344 576L498.3 576C514.7 576 528 562.7 528 546.3C528 474.3 485.3 412.3 423.9 384.2C416.5 380.8 407.8 382.1 401.3 387L343.9 430L343.9 576z"/>
</svg>,                title: "Admissions Office",
                email: "admissions@aimakurdi.ng",
                phone: "+234 803 059 3538",
                location: "Administration Building, Ground Floor",
                desc: "Handles all admission inquiries, applications, and student registration.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={42} height={42} fill="#1e2a78">
                    <path d="M544 96C579.3 96 608 124.7 608 160L608 448C608 481.1 582.8 508.4 550.5 511.7L544 512L332.9 512C327.8 487.8 316.6 465.9 300.8 448L352 448L352 416C352 398.3 366.3 384 384 384L480 384C497.7 384 512 398.3 512 416L512 448L544 448L544 160L192 160L192 217.3C177.2 211.3 161 208 144 208C138.6 208 133.2 208.3 128 209L128 160C128 124.7 156.7 96 192 96L544 96zM144 416C99.8 416 64 380.2 64 336C64 291.8 99.8 256 144 256C188.2 256 224 291.8 224 336C224 380.2 188.2 416 144 416zM192 448C245 448 288 491 288 544C288 561.7 273.7 576 256 576L32 576C14.3 576 0 561.7 0 544C0 491 43 448 96 448L192 448z"/>
                  </svg>
                ),
                title: "Academic Affairs",
                email: "academic@aimakurdi.ng",
                phone: "+234 702 123 4567",
                location: "Academic Block, First Floor",
                desc: "Manages academic programs, course registration, and faculty matters.",
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={42} height={42} fill="#1e2a78">
  <path d="M320 216C368.6 216 408 176.6 408 128C408 79.4 368.6 40 320 40C271.4 40 232 79.4 232 128C232 176.6 271.4 216 320 216zM320 514.7L320 365.4C336.3 358.6 352.9 351.7 369.7 344.7C408.7 328.5 450.5 320.1 492.8 320.1L512 320.1L512 480.1L492.8 480.1C433.7 480.1 375.1 491.8 320.5 514.6L320 514.8zM320 296L294.9 285.5C248.1 266 197.9 256 147.2 256L112 256C85.5 256 64 277.5 64 304L64 496C64 522.5 85.5 544 112 544L147.2 544C197.9 544 248.1 554 294.9 573.5L307.7 578.8C315.6 582.1 324.4 582.1 332.3 578.8L345.1 573.5C391.9 554 442.1 544 492.8 544L528 544C554.5 544 576 522.5 576 496L576 304C576 277.5 554.5 256 528 256L492.8 256C442.1 256 391.9 266 345.1 285.5L320 296z"/>
</svg>,
                title: "Library Services",
                email: "library@aimakurdi.ng",
                phone: "+234 802 345 6789",
                location: "Library Building",
                desc: "Assists with research, book loans, and digital resources.",
              },
              {
                icon: 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={42} height={42} fill="#1e2a78">
  <path d="M64 160C64 124.7 92.7 96 128 96L512 96C547.3 96 576 124.7 576 160L576 400L512 400L512 160L128 160L128 400L64 400L64 160zM0 467.2C0 456.6 8.6 448 19.2 448L620.8 448C631.4 448 640 456.6 640 467.2C640 509.6 605.6 544 563.2 544L76.8 544C34.4 544 0 509.6 0 467.2zM281 273L250 304L281 335C290.4 344.4 290.4 359.6 281 368.9C271.6 378.2 256.4 378.3 247.1 368.9L199.1 320.9C189.7 311.5 189.7 296.3 199.1 287L247.1 239C256.5 229.6 271.7 229.6 281 239C290.3 248.4 290.4 263.6 281 272.9zM393 239L441 287C450.4 296.4 450.4 311.6 441 320.9L393 368.9C383.6 378.3 368.4 378.3 359.1 368.9C349.8 359.5 349.7 344.3 359.1 335L390.1 304L359.1 273C349.7 263.6 349.7 248.4 359.1 239.1C368.5 229.7 383.7 229.7 393 239.1z"/>
</svg>,
                title: "ICT Department",
                email: "ict@aimakurdi.ng",
                phone: "+234 803 678 9012",
                location: "ICT Building",
                desc: "Technical support, portal issues, and IT infrastructure.",
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={42} height={42} fill="#1e2a78">
  <path d="M64 483.6L64 173.5C64 150.3 88.1 134.9 110.3 141.5C198 167.7 260 147 322.4 126.2C386.9 104.7 451.8 83.1 545.7 113.1C564.2 119 576 136.9 576 156.4L576 466.5C576 489.7 551.9 505.1 529.8 498.5C442.1 472.3 380 493 317.7 513.8C253.2 535.3 188.3 556.9 94.4 526.9C75.9 521 64.1 503.1 64.1 483.6zM400 320C400 267 364.2 224 320 224C275.8 224 240 267 240 320C240 373 275.8 416 320 416C364.2 416 400 373 400 320zM184 477.6C188.4 477.6 191.9 473.8 191.2 469.5C186.6 441.7 164.2 420 136 416.5C131.6 416 128 419.6 128 424L128 463.9C128 467.5 130.4 470.7 134 471.6C151.9 475.8 168.3 477.7 184 477.7zM502.5 426.5C507.5 427.3 512 423.5 512 418.5L512 375.9C512 371.5 508.4 367.8 504 368.4C478.8 371.5 458.1 389.3 450.8 413C449.4 417.7 453.1 422.1 458 422.2C472.2 422.6 487 423.9 502.4 426.5zM512 216L512 176.1C512 172.5 509.5 169.3 506 168.4C488.1 164.2 471.7 162.3 456 162.3C451.6 162.3 448.1 166.1 448.8 170.4C453.4 198.2 475.8 219.9 504 223.4C508.4 223.9 512 220.3 512 215.9zM189.2 226.9C190.6 222.2 186.9 217.8 182 217.7C167.8 217.3 153 216 137.6 213.4C132.6 212.6 128.1 216.4 128.1 221.4L128 264C128 268.4 131.6 272.1 136 271.5C161.2 268.4 181.9 250.6 189.2 226.9z"/>
</svg>,
                title: "Finance/Bursary",
                email: "bursary@aimakurdi.ng",
                phone: "+234 804 789 0123",
                location: "Administration Building, First Floor",
                desc: "Tuition payments, fee inquiries, and financial matters.",
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={42} height={42} fill="#1e2a78">
  <path d="M320 312C253.7 312 200 258.3 200 192C200 125.7 253.7 72 320 72C386.3 72 440 125.7 440 192C440 258.3 386.3 312 320 312zM289.5 368L350.5 368C360.2 368 368 375.8 368 385.5C368 389.7 366.5 393.7 363.8 396.9L336.4 428.9L367.4 544L368 544L402.6 405.5C404.8 396.8 413.7 391.5 422.1 394.7C484 418.3 528 478.3 528 548.5C528 563.6 515.7 575.9 500.6 575.9L139.4 576C124.3 576 112 563.7 112 548.6C112 478.4 156 418.4 217.9 394.8C226.3 391.6 235.2 396.9 237.4 405.6L272 544.1L272.6 544.1L303.6 429L276.2 397C273.5 393.8 272 389.8 272 385.6C272 375.9 279.8 368.1 289.5 368.1z"/>
</svg>,
                title: "Rector's Office",
                email: "rector@aimakurdi.ng",
                phone: "+234 703 182 8531",
                location: "Administration Building, Second Floor",
                desc: "Executive matters, institutional policies, and strategic direction.",
              },
            ].map((dept, i) => (
              <div key={i} className="bg-white rounded-lg transform transition hover:-translate-y-2 shadow-md p-6">
                <div className="mb-3">{dept.icon}</div>
                <h4 className="text-[28px] font-[600] text-gray-900 mb-3">{dept.title}</h4>
                <div className="text-[16px] text-gray-600 leading-6 space-y-0.5">
                  <p><strong>Email:</strong> {dept.email}</p>
                  <p><strong>Phone:</strong> {dept.phone}</p>
                  <p><strong>Location:</strong> {dept.location}</p>
                </div>
                <p className="text-[16px] text-gray-500 mt-3 leading-5">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIND US / MAP ─────────────────────────────────────────────────── */}
      <section className="w-full bg-[#eef0ff] py-16">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Find Us" />

          {/* Google Maps embed */}
          <div className="rounded-2xl overflow-hidden shadow-sm mb-8" style={{ height: 300 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.3!2d8.5327!3d7.7322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDMnNTYuMCJOIDjCsDMxJzU3LjciRQ!5e0!3m2!1sen!2sng!4v1!5m2!1sen!2sng"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Augustinian Institute Location"
            />
          </div>

          {/* 3 info columns */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "From Makurdi City Center",
                desc: "Take the Otukpo Road heading east. The Institute is located approximately 5km from the city center, on the right side of the road.",
              },
              {
                title: "Public Transportation",
                desc: "Take a bus or taxi heading to Otukpo and ask to be dropped at Augustinian Institute. Most drivers are familiar with the location.",
              },
              {
                title: "Parking Information",
                desc: "Visitor parking is available at the main entrance. Please check in at the security post for a visitor's pass.",
              },
            ].map((info, i) => (
              <div key={i}>
                <h4 className="text-[20px] font-[600] text-gray-900 mb-2">{info.title}</h4>
                <p className="text-[16px] text-gray-600 leading-6">{info.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#eef0ff] py-16">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px] ">
          <SectionHeading title="Frequently Asked Questions" />
          <FaqGroup items={[
            { q: "What are your office hours?", a: "Administrative offices are open Monday to Friday, 8:00 AM – 5:00 PM, and Saturday 9:00 AM – 1:00 PM. The library has extended hours; Monday – Friday 8:00 AM – 8:00 PM, Saturday 9:00 AM – 4:00 PM, and Sunday 12:00 PM – 4:00 PM." },
            { q: "How can I schedule a campus tour?", a: "Campus tours can be scheduled by contacting the Admissions Office at admissions@aimakurdi.ng or by calling +234 803 059 3538. Tours are available Monday to Friday between 10:00 AM and 3:00 PM." },
            { q: "Who should I contact for transcript requests?", a: "Transcript requests should be directed to the Academic Affairs office. You can email academic@aimakurdi.ng or visit the Academic Block, First Floor, during office hours." },
            { q: "Is the campus accessible to people with disabilities?", a: "Yes, the Augustinian Institute campus has accessible facilities including ramps and accessible restrooms in key buildings. We are continuously working to improve accessibility across the campus." },
            { q: "How can I get technical support for the student portal?", a: "For student portal issues, contact the ICT Department at ict@aimakurdi.ng or call +234 803 678 9012. The ICT help desk is available during regular office hours." },
          ]} />
        </div>
      </section>

      <Footer />
    </div>
  );
}