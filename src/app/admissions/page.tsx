"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Phone, Mail, MapPin, Clock, Globe, ChevronDown,
  GraduationCap, FileText, Users, Trophy
} from "lucide-react";
import { useState } from "react";
import { useRef, useEffect } from "react";

// ── HELPERS ───────────────────────────────────────────────────────────────────

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-[32px] font-[600] text-[#1e2a78] mb-3">{title}</h2>
      <div className="w-14 h-[3px] bg-[#1e2a78] rounded-full mx-auto" />
    </div>
  );
}

function BlueBtn({ href, label, full = false }: { href: string; label: string; full?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-block bg-[#1a56db] hover:bg-[#1648c0] transition-colors text-white text-[16px] font-[600] px-2 py-2 rounded-md ${full ? "w-full text-center" : ""}`}
    >
      {label}
    </a>
  );
}
 //------faq---------------


function FaqGroup({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-sm">
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

function FaqItem({
  q, a, isOpen, isFirst, isLast, onToggle,
}: {
  q: string; a: string; isOpen: boolean;
  isFirst: boolean; isLast: boolean; onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [a]);

  return (
    <div
      className={`overflow-hidden border border-gray-200
        ${isFirst ? "rounded-t-xl" : "-mt-px"}
        ${isLast && !isOpen ? "rounded-b-xl" : ""}
      `}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-6 py-[16px] text-left transition-colors duration-200
          ${isOpen ? "bg-[#1e2a78]" : "bg-[#eef0ff]"}`}
      >
        <span className={`text-[18px] font-[700] pr-4 ${isOpen ? "text-white" : "text-[#1e2a78]"}`}>
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : "text-[#1e2a78]"}`}
        />
      </button>

      {/* Animated slide container */}
      <div
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.35s ease, opacity 0.3s ease",
          overflow: "hidden",
        }}
      >
        <div
          ref={contentRef}
          className={`px-6 py-5 bg-white border-t border-gray-200 ${isLast ? "rounded-b-xl" : ""}`}
        >
          <p className="text-[16px] text-gray-600 leading-7">{a}</p>
        </div>
      </div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function AdmissionsPage() {
  return (
    <div className="w-full font-sans">
      <Header />

      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Navy gradient bg, centred text, pill badge
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full 2xl:h-[532px] lg:min-h-[400px] py-10 flex flex-col items-center justify-center bg-[#757bb7] text-white text-center relative overflow-hidden">
  <div
    className="absolute inset-0 opacity-20"
    style={{ backgroundImage: "radial-gradient(ellipse at 30% 60%, #5568e8 0%, transparent 55%), radial-gradient(ellipse at 70% 40%, #3a4fd4 0%, transparent 55%)" }}
  />
  <div className="relative z-10 max-w-[715px] mx-auto px-8">
    <h2
      className="text-[30px] md:text-[40px] font-[600] mb-4 leading-tight tracking-normal"
      style={{ animation: "slideUp 1.5s ease-out 0.3s forwards", opacity: 0 }}
    >
      Begin Your Academic Journey With Us
    </h2>
    <p
      className="text-[15.2px] md:text-[19.2px] text-white font-[400] leading-relaxed mb-10"
      style={{ animation: "slideUp 1.5s ease-out 0.3s forwards", opacity: 0 }}
    >
      Join a community dedicated to academic excellence, spiritual formation, and intellectual development
    </p>
    <div
      className="inline-flex items-center gap-2 border border-white/40 bg-white/10 text-white text-[16px] font-semibold px-5 py-2.5 rounded-full"
      style={{ animation: "slideUp 1.5s ease-out 0.3s forwards", opacity: 0 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="16" height="16" fill="white">
        <path d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9zM165.5 176L113.1 176C119.3 260.7 158.2 303.1 198.3 325.6C183.9 288.3 172 239.6 165.5 176zM444 320.8C484.5 297 521.1 254.7 527.3 176L475 176C468.8 236.9 457.6 284.2 444 320.8z"/>
      </svg>
      JAMB Cut-off Mark: 150 and Above
    </div>
  </div>

 
</section>

      {/* ━━━ AVAILABLE PROGRAMS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section bg: #eef0ff (lavender)
          Cards bg: #ffffff white, shadow
          Icon: navy, top-left
          Bullets: ✓ navy checkmark
          Button: solid blue, bottom-left
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full bg-[#eef0ff] py-20">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Available Programs" />
          <div className="grid md:grid-cols-2 gap-6 max-w-[800] ">

            {/* B.A. Philosophy */}
            <div className="bg-white rounded-sm transform transition hover:-translate-y-2 shadow-md p-8 flex flex-col">
              <div className="mb-5 flex items-center justify-center ">
                {/* Book/document icon */}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="52" height="52" fill="#1e2a78">
        <path d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z"/>
      </svg>
              </div>
              <h3 className="text-[28px] justify text-center font-semibold text-[#333333] mb-2">
                Bachelor of Arts in Philosophy (B.A. Philosophy)
              </h3>
              <p className="text-[16px] font-[400] text-[#333333] leading-5 mb-6">
                4-year undergraduate program providing comprehensive philosophical education
              </p>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {[
                  ["Duration", "4 Years"],
                  ["Entry", "UTME & Direct Entry"],
                  ["JAMB Subject", "Use of English & Any 3 Arts/Social Science subjects"],
                ].map(([k, v], i) => (
                  <li key={i} className="flex items-start gap-2 text-[16px] font-[400] text-[#333333]">
                    <span className="text-[#387e53] font-bold shrink-0 mt-px">✓</span>
                    <span><strong>{k}:</strong> {v}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center"><BlueBtn href="#" label="Apply Now" /></div>
            </div>

            {/* PGD */}
            <div className="bg-white rounded-md transform transition hover:-translate-y-2 shadow-md p-8 flex flex-col">
              <div className="mb-5 flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="60" height="60" fill="#1e2a78">
  <path d="M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224L32 520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520L80 259.8zM128 331.5L128 448C128 501 214 544 320 544C426 544 512 501 512 448L512 331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z"/>
</svg>
              </div>
              <h3 className="text-[28px] text-center font-semibold text-[#333333] mb-2">
                Postgraduate Diploma in Philosophy (PGD)
              </h3>
              <p className="text-[16px] font-[400] text-[#333333] leading-5 mb-6">

                1-year program for graduates seeking foundational knowledge in philosophy
              </p>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {[
                  ["Duration", "1 Year"],
                  ["Entry", "Bachelor's Degree (Any Discipline)"],
                  ["Minimum", "Third Class or HND"],
                ].map(([k, v], i) => (
                  <li key={i} className="flex items-start gap-2 text-[16px] font-[400] text-[#333333]">
                    <span className="text-[#387e53] font-bold shrink-0 mt-px">✓</span>
                    <span><strong>{k}:</strong> {v}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center"><BlueBtn href="#" label="Apply Now" /></div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━ ADMISSION REQUIREMENTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section bg: #ffffff white
          Cards bg: #eef0ff lavender, no shadow
          Small icon + bold title inline at top
          Bullet dot list
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full bg-white py-20">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px] 2xl:max-w-[1300px]">
          <SectionHeading title="Admission Requirements" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={50} height={50} fill="#1e2a78">
  <path d="M337.3 51C325.9 48.7 314.2 48.7 302.8 51L115.3 88.5C104.1 90.7 96 100.6 96 112C96 122.3 102.5 131.3 112 134.6L112 208L96.3 286.6C96.1 287.5 96 288.5 96 289.5C96 297.5 102.5 304.1 110.6 304.1L145.5 304.1C153.5 304.1 160.1 297.6 160.1 289.5C160.1 288.5 160 287.6 159.8 286.6L144 208L144 141.3L192 150.9L192 208C192 278.7 249.3 336 320 336C390.7 336 448 278.7 448 208L448 150.9L524.7 135.6C535.9 133.3 544 123.4 544 112C544 100.6 535.9 90.7 524.7 88.5L337.3 51zM320 288C275.8 288 240 252.2 240 208L400 208C400 252.2 364.2 288 320 288zM216.1 384.1C154.7 412.3 112 474.3 112 546.3C112 562.7 125.3 576 141.7 576L296 576L296 430L238.6 387C232.1 382.1 223.4 380.8 216 384.2zM344 576L498.3 576C514.7 576 528 562.7 528 546.3C528 474.3 485.3 412.3 423.9 384.2C416.5 380.8 407.8 382.1 401.3 387L343.9 430L343.9 576z"/>
</svg>,
                title: "Undergraduate Admission (UTME)",
                items: [
                  "Minimum of 5 credits in SSCE/GCE/O'Level in not more than 2 sittings",
                  "Credits must include English Language and Mathematics",
                  "JAMB UTME score of 150 and above",
                  "JAMB subject combination: Use of English and any three Arts or Social Science subjects",
                  "Participation in Augustinian Institute Post-UTME screening",
                ] as (string | { b: string; t: string })[],
              },
              {
                icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={50} height={50} fill="#1e2a78">
  <path d="M320 312C253.7 312 200 258.3 200 192C200 125.7 253.7 72 320 72C386.3 72 440 125.7 440 192C440 258.3 386.3 312 320 312zM289.5 368L350.5 368C360.2 368 368 375.8 368 385.5C368 389.7 366.5 393.7 363.8 396.9L336.4 428.9L367.4 544L368 544L402.6 405.5C404.8 396.8 413.7 391.5 422.1 394.7C484 418.3 528 478.3 528 548.5C528 563.6 515.7 575.9 500.6 575.9L139.4 576C124.3 576 112 563.7 112 548.6C112 478.4 156 418.4 217.9 394.8C226.3 391.6 235.2 396.9 237.4 405.6L272 544.1L272.6 544.1L303.6 429L276.2 397C273.5 393.8 272 389.8 272 385.6C272 375.9 279.8 368.1 289.5 368.1z"/>
</svg>,
                title: "Direct Entry Admission",
                items: [
                  "Two A'Level passes in relevant subjects",
                  "OND/NCE/ND/HND with minimum of Lower Credit",
                  "First degree in any discipline (for PGD program)",
                  "IJMB/JUPEB with minimum required points",
                  "Meet O'Level requirements as specified",
                ] as (string | { b: string; t: string })[],
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={50} height={50} fill="#1e2a78">
  <path d="M192 448C245 448 288 491 288 544C288 561.7 273.7 576 256 576L32 576C14.3 576 0 561.7 0 544C0 491 43 448 96 448L192 448zM544 96C579.3 96 608 124.7 608 160L608 448C608 481.1 582.8 508.4 550.5 511.7L544 512L332.9 512C327.8 487.8 316.6 465.9 300.8 448L352 448L352 416C352 398.3 366.3 384 384 384L480 384C497.7 384 512 398.3 512 416L512 448L544 448L544 160L192 160L192 217.3C177.2 211.3 161 208 144 208C138.6 208 133.2 208.3 128 209L128 160C128 124.7 156.7 96 192 96L544 96zM144 416C99.8 416 64 380.2 64 336C64 291.8 99.8 256 144 256C188.2 256 224 291.8 224 336C224 380.2 188.2 416 144 416z"/>
</svg>,
                title: "Postgraduate Admission",
                items: [
                  { b: "PGD:", t: " First degree in any discipline with minimum of Third Class" },
                  { b: "M.A.:", t: " First degree in Philosophy with minimum of Second Class Lower" },
                  { b: "Ph.D.:", t: " Master's degree in Philosophy with minimum CGPA of 3.5" },
                  "NYSC discharge/exemption certificate (for Nigerian graduates)",
                  "Academic transcripts from previous institutions",
                ] as (string | { b: string; t: string })[],
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={50} height={50} fill="#1e2a78">
  <path d="M128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM224 472C224 485.3 234.7 496 248 496L392 496C405.3 496 416 485.3 416 472C416 458.7 405.3 448 392 448L248 448C234.7 448 224 458.7 224 472zM406.6 272C401.8 298.4 385.1 320.7 362.4 333.2C369.1 316.2 373.6 295.2 375 272L406.6 272zM233.5 272L265.1 272C266.5 295.1 271.1 316.2 277.7 333.2C255 320.7 238.3 298.4 233.5 272zM309.9 327C303.7 313.6 298.8 294.5 297.2 272L343 272C341.4 294.5 336.5 313.6 330.3 327C325.8 336.6 322.1 340.8 320.1 342.5C318.1 340.8 314.4 336.7 309.9 327zM309.9 185C314.4 175.4 318.1 171.2 320.1 169.5C322.1 171.2 325.8 175.3 330.3 185C336.5 198.4 341.4 217.5 343 240L297.2 240C298.8 217.5 303.7 198.4 309.9 185zM406.6 240L375 240C373.6 216.9 369 195.8 362.4 178.8C385.1 191.3 401.8 213.6 406.6 240zM265 240L233.4 240C238.2 213.6 254.9 191.3 277.6 178.8C270.9 195.8 266.4 216.8 265 240zM448 256C448 185.3 390.7 128 320 128C249.3 128 192 185.3 192 256C192 326.7 249.3 384 320 384C390.7 384 448 326.7 448 256z"/>
</svg>,
                title: "International Students",
                items: [
                  "Equivalent academic qualifications verified",
                  "Proof of English language proficiency (where applicable)",
                  "Valid student visa and international passport",
                  "Medical fitness certificate",
                  "Evidence of financial capability",
                ] as (string | { b: string; t: string })[],
              },
            ].map((req, i) => (
              <div key={i} className="transform transition hover:-translate-y-2  bg-[#eef0ff] rounded-md p-7">
                <div className="flex flex-col gap-2 mb-5 ">
                  {req.icon}
                  <h4 className="text-[24px] font-semibold text-[#333333]">{req.title}</h4>
                </div>
                <ul className="flex flex-col gap-3 px-5">
                  {req.items.map((item, j) =>
                    typeof item === "object" ? (
                      <li key={j} className="flex items-start gap-2 text-[16px] font-[400] text-[#333333]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1e2a78] mt-[5px] shrink-0" />
                        <span><strong>{item.b}</strong>{item.t}</span>
                      </li>
                    ) : (
                      <li key={j} className="flex items-start gap-2 text-[16px] font-[400] text-[#333333]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1e2a78] mt-[5px] shrink-0" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ ADMISSION PROCESS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section bg: #eef0ff lavender
          Cards bg: white, rounded-xl, shadow-sm
          Navy circle number badge centered on top edge (half outside card)
          Icon centered in card, title bold centered, desc centered
          Hover: card lifts up
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full bg-[#eef0ff] py-20">
        <div className="max-w-full mx-auto 2xl:max-w-[1300px] px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Admission Process" />
          {/* Extra top padding on grid to give room for the overflowing badge */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 pt-5">
            {[
              {
                num: "1",
                icon: (
                  /* Pencil-on-square / edit icon — JAMB registration */
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#1e2a78" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                ),
                title: "JAMB Registration",
                desc: "Register for JAMB UTME/Direct Entry and select Augustinian Institute as your first choice",
              },
              {
                num: "2",
                icon: (
                  /* File with lines — Institute Application */
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="#1e2a78">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 13h8v1.5H8V13zm0 3h5v1.5H8V16zm0-6h3v1.5H8V10z"/>
                  </svg>
                ),
                title: "Institute Application",
                desc: "Complete the online application form on our portal and upload required documents",
              },
              {
                num: "3",
                icon: (
                  /* Clipboard with checkmark — Screening */
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="#1e2a78">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2 14-4-4 1.41-1.41L10 14.17l6.59-6.58L18 9l-8 8z"/>
                  </svg>
                ),
                title: "Screening Exercise",
                desc: "Participate in the Post-UTME screening (for UTME) or oral interview (for Direct Entry)",
              },
              {
                num: "4",
                icon: (
                  /* Numbered list — Admission List */
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="#1e2a78">
                    <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/>
                  </svg>
                ),
                title: "Admission List",
                desc: "Check admission status on JAMB CAPS and Institute portal",
              },
              {
                num: "5",
                icon: (
                  /* Filled circle checkmark — Accept Admission */
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="#1e2a78">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ),
                title: "Accept Admission",
                desc: "Accept admission on JAMB CAPS and print admission letter",
              },
              {
                num: "6",
                icon: (
                  /* Person with checkmark — Registration & Clearance */
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="#1e2a78">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm8.5-5.5l-4.5 4.5-2-2-1.5 1.5 3.5 3.5 6-6-1.5-1.5z"/>
                  </svg>
                ),
                title: "Registration & Clearance",
                desc: "Complete registration, pay fees, and undergo clearance process",
              },
            ].map((step, i) => (
              <div key={i} className="relative pt-5 transition-transform duration-300 hover:-translate-y-2">
                {/* Number badge — centered on top edge of card, half outside */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#1e2a78] flex items-center justify-center text-white text-[15px] font-extrabold shadow-md">
                  {step.num}
                </div>
                {/* Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 pt-10 pb-8 px-6 flex flex-col items-center text-center">
                  <div className="mb-4">{step.icon}</div>
                  <h4 className="text-[24px] font-semibold text-[#333333]">{step.title}</h4>
                  <p className="text-[16px] font-[400] text-[#333333] mt-4 leading-5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ ADMISSION TIMELINE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
<section className="w-full bg-white py-20">
  <div className="max-w-[820px] mx-auto px-4 md:px-8">
    <SectionHeading title="Admission Timeline 2024/2025" />
    <div className="relative">

      {/* Vertical line — left on mobile, center on desktop */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[5px] bg-[#26308f]" />

      <div className="flex flex-col gap-8">
        {[
          { month: "March 2024", event: "JAMB UTME Registration begins", side: "left" },
          { month: "April 2024", event: "JAMB UTME Examination", side: "right" },
          { month: "May 2024", event: "Release of JAMB Results & Post-UTME Registration begins", side: "left" },
          { month: "June - July 2024", event: "Post-UTME Screening Exercise", side: "right" },
          { month: "August 2024", event: "First Batch Admission List Released", side: "left" },
          { month: "September 2024", event: "Registration and Clearance for New Students", side: "right" },
          { month: "October 2024", event: "Orientation & Commencement of Lectures", side: "left" },
        ].map((item, i) => (
          <div key={i} className="relative flex items-center">

            {/* LEFT slot — hidden on mobile */}
            <div className="hidden md:flex w-1/2 pr-12 justify-end">
              {item.side === "left" ? (
                <div className="relative bg-white rounded-md shadow-sm p-6 w-full max-w-[520px]">
                  <h3 className="text-[28px] font-semibold text-[#333333] mb-2">{item.month}</h3>
                  <p className="text-[16px] font-normal text-[#333333] leading-6">{item.event}</p>
                  <div className="absolute top-[22px] -right-[8px] w-0 h-0
                    border-t-[8px] border-t-transparent
                    border-b-[8px] border-b-transparent
                    border-l-[8px] border-l-[#26308f]" />
                </div>
              ) : (
                <div className="w-full max-w-[340px]" />
              )}
            </div>

            {/* Dot — left on mobile, center on desktop */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 top-[18px] z-10">
              <div className="w-5 h-5 rounded-full border-[3px] border-[#1e2a78] bg-white" />
            </div>

            {/* RIGHT slot — full width on mobile, half on desktop */}
            <div className="w-full pl-12 md:w-1/2 md:pl-12 flex justify-start">
              <div className={`${item.side === "right" ? "block" : "block md:hidden"} relative bg-white rounded-md shadow-sm p-6 w-full max-w-[520px]`}>
                <h3 className="text-[28px] font-semibold text-[#333333] mb-2">{item.month}</h3>
                <p className="text-[16px] font-normal text-[#333333] leading-6">{item.event}</p>
                <div className="absolute top-[22px] -left-[8px] w-0 h-0
                  border-t-[8px] border-t-transparent
                  border-b-[8px] border-b-transparent
                  border-r-[8px] border-r-[#26308f]" />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* ━━━ FAQ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section bg: #eef0ff lavender
          First item open (navy header + white body)
          Rest closed (white header)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full bg-[#eef0ff] py-20">
        <div className="max-w-full 2xl:max-w-[1300px] mx-auto px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="flex flex-col rounded-xl  overflow-hidden shadow-sm">
            <FaqGroup items={[
  {
    q: "What is the JAMB cut-off mark for Augustinian Institute?",
    a: "The JAMB cut-off mark for Augustinian Institute is 150 and above for all programs. However, meeting the cut-off mark does not guarantee admission as candidates must also perform well in the Post-UTME screening.",
  },
  {
    q: "Can I apply with awaiting results?",
    a: "Yes, you can apply with awaiting O'Level results. However, you must upload your results once they are released, and admission will not be finalized until all required results are submitted and verified.",
  },
  {
    q: "Is there an age limit for admission?",
    a: "There is no specific age limit for admission into Augustinian Institute. We welcome applicants of all ages who meet the academic requirements for their chosen program.",
  },
  {
    q: "How can I check my admission status?",
    a: "You can check your admission status through: JAMB CAPS portal, Augustinian Institute admission portal, and Admission list published on our website and notice boards.",
  },
  {
    q: "What documents do I need for registration?",
    a: "Required documents include: JAMB admission letter, O'Level result(s) (original and photocopies), Birth certificate or declaration of age, Local government identification letter, Medical fitness certificate, Passport photographs (8 copies), and Acceptance fee receipt.",
  },
]} />
          </div>
        </div>
      </section>

      {/* ━━━ ADMISSIONS OFFICE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section bg: #ffffff white
          Both cards bg: #eef0ff lavender
          Left card: icon rows with lavender circle icon badges
          Right card: help info with bullet list + blue CTA button
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full bg-white py-20">
        <div className="max-w-full 2xl:max-w-[1300px] mx-auto px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Admissions Office" />
          <div className="grid md:grid-cols-2 gap-8">

            {/* Contact Info card */}
            <div className="bg-[#eef0ff] rounded-2xl p-8">
              <div className="flex flex-col  gap-3 mb-7">
                <div className="w-12 h-12 flex flex-col items-center justify-center shrink-0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={60} height={60} fill="#1e2a78">
  <path d="M320 128C241 128 175.3 185.3 162.3 260.7C171.6 257.7 181.6 256 192 256L208 256C234.5 256 256 277.5 256 304L256 400C256 426.5 234.5 448 208 448L192 448C139 448 96 405 96 352L96 288C96 164.3 196.3 64 320 64C443.7 64 544 164.3 544 288L544 456.1C544 522.4 490.2 576.1 423.9 576.1L336 576L304 576C277.5 576 256 554.5 256 528C256 501.5 277.5 480 304 480L336 480C362.5 480 384 501.5 384 528L384 528L424 528C463.8 528 496 495.8 496 456L496 435.1C481.9 443.3 465.5 447.9 448 447.9L432 447.9C405.5 447.9 384 426.4 384 399.9L384 303.9C384 277.4 405.5 255.9 432 255.9L448 255.9C458.4 255.9 468.3 257.5 477.7 260.6C464.7 185.3 399.1 127.9 320 127.9z"/>
</svg>                </div>
                <h3 className="text-[28px] font-[600] text-[#333333]">Contact Information</h3>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <Phone size={15} className="text-[#0e6dfa]" />, label: "Phone", val: "+234 703 182 8531, +234 803 059 3538" },
                  { icon: <Mail size={15} className="text-[#0e6dfa]" />, label: "Email", val: "admissions@aimakurdi.ng" },
                  { icon: <MapPin size={15} className="text-[#0e6dfa]" />, label: "Address", val: "Admissions Office, Augustinian Institute, Otukpo Road, P.O Box 584, Makurdi" },
                  { icon: <Clock size={15} className="text-[#0e6dfa]" />, label: "Office Hours", val: "8:00 AM - 5:00 PM (Monday - Friday)" },
                  { icon: <Globe size={15} className="text-[#0e6dfa]" />, label: "Website", val: "www.aimakurdi.ng" },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-3 text-[18px] text-gray-700">
                    <div className="w-6 h-6  flex items-center justify-center shrink-0 mt-px ">
                      {row.icon}
                    </div>
                    <span><strong className="text-gray-900">{row.label}:</strong> {row.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Need Help card */}
            <div className="bg-[#eef0ff] rounded-2xl p-8 flex flex-col">
              <div className="flex flex-col gap-3 mb-4">
                <div className="w-12 h-12 flex flex-col items-center justify-center shrink-0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={60} height={60} fill="#1e2a78">
  <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 240C302.3 240 288 254.3 288 272C288 285.3 277.3 296 264 296C250.7 296 240 285.3 240 272C240 227.8 275.8 192 320 192C364.2 192 400 227.8 400 272C400 319.2 364 339.2 344 346.5L344 350.3C344 363.6 333.3 374.3 320 374.3C306.7 374.3 296 363.6 296 350.3L296 342.2C296 321.7 310.8 307 326.1 302C332.5 299.9 339.3 296.5 344.3 291.7C348.6 287.5 352 281.7 352 272.1C352 254.4 337.7 240.1 320 240.1zM288 432C288 414.3 302.3 400 320 400C337.7 400 352 414.3 352 432C352 449.7 337.7 464 320 464C302.3 464 288 449.7 288 432z"/>
</svg>              </div>
                <h3 className="text-[28px] font-[600] text-[#333333]">Need Help With Your Application?</h3>
              </div>
              <p className="text-[18px] text-gray-600 leading-6 mb-6">
                Our admissions team is ready to assist you with any questions about the application process, requirements, or deadlines.
              </p>
              <p className="text-[18px] font-bold text-gray-700 uppercase tracking-widest mb-3">Quick Support:</p>
              <ul className="flex flex-col gap-2 mb-8">
                {[
                  "Application form guidance",
                  "Document submission assistance",
                  "Admission status inquiries",
                  "Payment-related questions",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[18px] text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e2a78] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto max-w-[220px] text-[16px]">
                <BlueBtn href="/contact" label="Contact Admissions Office" full />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━ STATS BAR ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          bg: #26308f navy (exact from pixel)
          4 columns, large bold numbers, small label below
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
       <section className="w-full min-h-[345px] bg-[#26308f] py-10 flex justify items-center text-center ">
        <div className="max-w-[1100px] mx-auto px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "150+", label: "JAMB Cut-off Mark" },
              { value: "5", label: "Academic Programs" },
              { value: "95%", label: "Admission Success Rate" },
              { value: "24/7", label: "Application Portal Access" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-[48px] font-bold text-white">{s.value}</div>
                <div className="text-[19.2px] font-normal text-white mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}