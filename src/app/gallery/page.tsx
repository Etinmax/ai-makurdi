"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ── GALLERY DATA ──────────────────────────────────────────────────────────────
type GalleryItem = {
  id: number;
  src: string;
  title: string;
  category: "Institute Life" | "Events" | "Academic" | "Community";
};

const galleryItems: GalleryItem[] = [
  // Events
  { id: 1,  src: "/ino1.jpg",      title: "2025 Inaugural Lecture",           category: "Events" },
  { id: 2,  src: "/ino8.jpg",      title: "Inaugural Lecture Speaker",        category: "Events" },
  { id: 3,  src: "/ino3.jpg",      title: "Inaugural Lecture Audience",       category: "Events" },
  { id: 4,  src: "/imass17.jpg",      title: "Lecture Distinguished Guests",     category: "Events" },
  // Institute Life
  { id: 5,  src: "/imass12.jpg",  title: "Administrative Block",             category: "Institute Life" },
  { id: 6,  src: "/imass16.jpg",  title: "Campus Grounds",                   category: "Institute Life" },
  { id: 7,  src: "/imass7.jpg",  title: "Library Facilities",               category: "Institute Life" },
  { id: 8,  src: "/imass15.jpg",  title: "Student Common Room",              category: "Institute Life" },
  // Academic
  { id: 9,  src: "/imass2.jpg",   title: "Philosophy Lecture",               category: "Academic" },
  { id: 10, src: "/ino7.jpg",   title: "Graduation Ceremony",              category: "Academic" },
  { id: 11, src: "/ino7.jpg",   title: "Research Symposium",               category: "Academic" },
  { id: 12, src: "/inn.jpg",   title: "Academic Conference",              category: "Academic" },
  // Community
  { id: 13, src: "/imass15.jpg",  title: "Community Outreach Programme",    category: "Community" },
  { id: 14, src: "/ino9.jpg",  title: "Student Fellowship",               category: "Community" },
  { id: 15, src: "/imass12.jpg",  title: "Cultural Day Celebration",         category: "Community" },
  { id: 16, src: "/imass15.jpg",  title: "Community Service",                category: "Community" },
];

type FilterType = "All Photos" | "Institute Life" | "Events" | "Academic" | "Community";
const filters: FilterType[] = ["All Photos", "Institute Life", "Events", "Academic", "Community"];

// ── SECTION HEADING ───────────────────────────────────────────────────────────
function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-[32px] font-semibold text-[#1e2a78] mb-3">{title}</h2>
      <div className="w-14 h-[3px] bg-[#1e2a78] rounded-full mx-auto" />
    </div>
  );
}

// ── IMAGE CARD ────────────────────────────────────────────────────────────────
function GalleryCard({
  item,
  onClick,
}: {
  item: GalleryItem;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="relative rounded-xl overflow-hidden cursor-pointer group aspect-[4/3] bg-gray-200"
    >
      {/* Image */}
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover overlay: dark gradient from bottom, fades to transparent at ~50% */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 45%, transparent 70%)",
        }}
      />

      {/* Title + category — visible on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white font-[600] text-[17.6px] leading-normal drop-shadow">{item.title}</p>
        <span className="inline-block mt-1 text-[14.4px] text-white/80 font-[400]">{item.category}</span>
      </div>
    </div>
  );
}

// ── MODAL LIGHTBOX ────────────────────────────────────────────────────────────
function Modal({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      {/* Modal box — stop propagation so clicking inside doesn't close */}
      <div
        className="relative flex flex-col max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* X close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center transition-colors"
        >
          <X size={18} className="text-white" />
        </button>

        {/* Image area */}
        <div className="relative flex-1 min-h-0 flex items-center justify-center bg-black" style={{ maxHeight: "calc(90vh - 96px)" }}>
          <img
            src={item.src}
            alt={item.title}
            className="max-w-full max-h-full object-contain"
            style={{ maxHeight: "calc(90vh - 96px)" }}
          />

          {/* Left arrow */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          {/* Right arrow */}
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center transition-colors"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* White bottom panel — title + caption */}
        <div className="bg-white px-6 py-4 shrink-0">
          <p className="text-[16px] font-bold text-[#1e2a78]">{item.title}</p>
          <p className="text-[13px] text-gray-500 mt-0.5">{item.category}</p>
        </div>
      </div>

      {/* Image counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-[13px]">
        {index + 1} / {items.length}
      </div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All Photos");
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const filtered = activeFilter === "All Photos"
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeFilter);

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);
  const prevImage = useCallback(() => {
    setModalIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);
  const nextImage = useCallback(() => {
    setModalIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalIndex]);

  return (
    <div className="w-full font-sans">
      <Header />
{/* ── HERO ────────────────────────────────────────────────────────── */}
<div
  className="w-full relative py-20 text-white text-center overflow-hidden"
  style={{ minHeight: 295 }}
>
  {/* Background image */}
  <img
    src="/aiadmin.jpg"
    alt="hero"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* Dark navy overlay */}
  <div className="absolute inset-0 bg-[#1e2a78]/70" />

  <div className="relative z-10 max-w-2xl mx-auto px-8">
    <h1
      className="text-[40px] font-bold mb-3"
      style={{ animation: "slideUp 1.5s ease-out 0.1s forwards", opacity: 0 }}
    >
      Institute Gallery
    </h1>
    <p
      className="text-[19.2px] text-white leading-relaxed"
      style={{ animation: "slideUp 1.5s ease-out 0.2s forwards", opacity: 0 }}
    >
      Explore our Institute, events, academic activities, and community<br />
      life through captivating visuals
    </p>
  </div>
</div>
      {/* ── PHOTO GALLERY ───────────────────────────────────────────────── */}
      <section className="w-full bg-[#eef0ff] py-16">
        <div className="max-w-[1200px]  mx-auto px-8">
          <SectionHeading title="Photo Gallery" />

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => { setActiveFilter(f); setModalIndex(null); }}
                className={`px-5 py-2 rounded-full text-[16px] font-[500] border-2 transition-colors duration-200
                  ${activeFilter === f
                    ? "bg-[#26308f] border-[#26308f] text-white "
                    : "bg-transparent border-[#26308f] text-[#1e2a78] hover:text-white hover:bg-[#26308f]"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Image grid — 4 columns desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <GalleryCard key={item.id} item={item} onClick={() => openModal(i)} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400 text-[15px]">
              No images in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ── MODAL ───────────────────────────────────────────────────────── */}
      {modalIndex !== null && (
        <Modal
          items={filtered}
          index={modalIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      <Footer />
    </div>
  );
}