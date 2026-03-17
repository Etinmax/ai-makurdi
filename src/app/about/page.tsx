import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Target, Eye, Search, GraduationCap } from "lucide-react";

import Hero from "@/components/Hero";
import { BookOpen, Users, Heart, Star, Flame, Award, Phone, Mail, Globe, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

// ── Core Values ─────────────────────────────────────────────────────────────
const coreValues = [
  {
    icon: <Search size={44} strokeWidth={1.8}  className="text-[#1e2a78]" />,
    title: "Truth",
    desc: "We pursue truth through rigorous intellectual inquiry, critical thinking, and open dialogue, guided by both faith and reason.",
  },
  {
    icon: (
      <svg width="48" height="44" viewBox="0 0 640 640" fill="#1e2a78" xmlns="http://www.w3.org/2000/svg">
        <path d="M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM320 192a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM65.4 400h181.4C255 374.4 256 348.2 256 320c0-32.1 1.6-60.3 4.5-85.3C229.2 220.9 190.8 208 150.5 208H128C57.3 208 0 265.3 0 336v16c0 26.5 21.5 48 48 48h18.5c-.7-5.3-1.1-10.6-1.1-16v-16c0-26.5 0-26.5 0-26.5V336zM512 336v22c0 14 0 14 0 14v6.2c0 7.3-.8 14.5-2.3 21.4-.9 4.2-2.1 8.3-3.5 12.4H592c26.5 0 48-21.5 48-48v-8c0-70.7-57.3-128-128-128h-21.5c-40.3 0-78.7 12.9-110 35.1 2.9 24.9 4.5 53.2 4.5 85.3 0 0 0 0 0 0zM176 336v96c0 61.9 50.1 112 112 112h64c61.9 0 112-50.1 112-112v-96c0-88.4-71.6-160-160-160s-160 71.6-160 160z"/>
      </svg>
    ),
    title: "Community",
    desc: "We foster a supportive learning community where relationships are built on mutual respect, collaboration, and shared purpose.",
  },
  {
    icon: <Heart size={44} strokeWidth={0} fill="#1e2a78" className="text-[#1e2a78]" />,
    title: "Love of Wisdom",
    desc: "We cultivate a lifelong love of learning and wisdom that transcends academic knowledge to encompass spiritual and moral understanding.",
  },
  {
    icon: (
      <svg width="48" height="44" viewBox="0 0 640 640" fill="#1e2a78" xmlns="http://www.w3.org/2000/svg">
        <path d="M320 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-58.7 144l27.4 68.5L256 352l-64-32-96 48 32 32 96-32 32 16-32 64H160l-32 96h64l24-64h128l24 64h64l-32-96h-64l-32-64 32-16 96 32 32-32-96-48-64 32-32-43.5L291 240h-29z"/>
        <path d="M160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/>
      </svg>
    ),
    title: "Service",
    desc: "We prepare students for lives of meaningful service, leadership, and social responsibility in their communities and professions.",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 640 640" fill="#1e2a78" xmlns="http://www.w3.org/2000/svg">
        <path d="M448 128C448 92.7 419.3 64 384 64C348.7 64 320 92.7 320 128C320 163.3 348.7 192 384 192C419.3 192 448 163.3 448 128zM328.7 328L351.6 359.5C358.1 368.4 367.9 374.2 378.8 375.6C389.7 377 400.7 373.9 409.2 366.9L497.2 294.9C514.3 280.9 516.8 255.7 502.8 238.6C488.8 221.5 463.6 219 446.5 233L391.3 278.2L365.1 242.2C349.5 220.7 324.5 208 297.9 208C267 208 238.7 225.1 224.3 252.4L175.8 344.9C155.6 383.4 166.4 430.8 201.4 456.7L254.6 496L168 496C145.9 496 128 513.9 128 536C128 558.1 145.9 576 168 576L376 576C393.3 576 408.6 564.9 414 548.5C419.4 532.1 413.7 514.1 399.8 503.8L283.7 418L328.7 328z"/>
      </svg>
    ),
    title: "Spiritual Formation",
    desc: "We nurture spiritual growth through prayer, reflection, and engagement with the rich traditions of Catholic and Augustinian spirituality.",
  },
  {
    icon: <GraduationCap size={48} strokeWidth={1.6} fill="#1e2a78" className="text-[#1e2a78]" />,
    title: "Excellence",
    desc: "We strive for excellence in all aspects of our educational mission, from teaching and research to student formation and community engagement.",
  },
];
// ── Leadership ───────────────────────────────────────────────────────────────
const leaders = [
  {
    img: "/prov.jpg",
    name: "Rev. Fr. Professor Ikechukwu Anthony Kanu, OSA",
    role: "Prior Provincial/Proprietor",
    desc: "Distinguished scholar, philosopher, and Augustinian priest with extensive experience in academic leadership and spiritual formation.",
  },
  {
    img: "/rector.jpg",
    name: "Rev. Fr. Dr. Gabriel Felix Zombobah, OSA",
    role: "Rector",
    desc: "Experienced educator and administrator dedicated to academic excellence and student development.",
  },
  {
    img: "/rect.jpg",
    name: "Rev. Fr. Dr. Peter Maigari, OSA",
    role: "H.O.D",
    desc: "Administrative professional with extensive experience in educational management and institutional operations.",
  },
];

// ── Timeline ─────────────────────────────────────────────────────────────────
const timeline = [
  { year: "2010", desc: "Establishment of Augustinian Institute, Makurdi with a vision to provide quality education rooted in Catholic and Augustinian traditions.", side: "left" },
  { year: "2012", desc: "Affiliation with Rev. Fr. Moses Orshio Adasu University (formerly Benue State University, Makurdi) to offer accredited academic programs.", side: "right" },
  { year: "2015", desc: "Expansion of academic programs to include specialized courses in Philosophy, Theology, and Ethics.", side: "left" },
  { year: "2018", desc: "Establishment of the Institute's E-Library and digital learning resources to enhance academic research and study.", side: "right" },
  { year: "2020", desc: "Launch of community outreach programs and partnerships with local organizations to extend the Institute's impact beyond the campus.", side: "left" },
  { year: "2023", desc: "Introduction of online learning platforms and hybrid educational models to adapt to changing educational landscapes.", side: "right" },
];

// ── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "25+", label: "Qualified Faculty" },
  { value: "8", label: "Academic Programs" },
  { value: "12", label: "Years of Excellence" },
];


export default function AboutPage() {
  return (
    <div className="w-full font-sans">

      <Header />

      {/* ── HERO BANNER ────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[400px] 2xl:h-[532px] flex items-center justify-center text-center text-white">
      
      {/* Background Image */}
      <img
        src="/adblock.jpg"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#24347a]/70" />

      {/* Content */}
     <div className="relative z-10 max-w-[900px] px-6">
  <h1
    className="md:text-5xl text-4xl font-bold leading-tight"
    style={{ animation: "slideUp 1.5s ease 0.3s forwards", opacity: 0 }}
  >
    About Augustinian Institute
  </h1>

  <p
    className="mt-4 md:text-xl text-lg font-normal"
    style={{ animation: "slideUp 1.5s ease 0.3s forwards", opacity: 0 }}
  >
    Discover our rich heritage, mission, and commitment to holistic education
  </p>
</div>


    </section>

      {/* ── OUR STORY ──────────────────────────────────────────────────────── */}
     <section className="w-full bg-[#eef0ff] py-20">
      <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px] 2xl:max-w-[1300px] ">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl leading-tight md:text-4xl font-semibold text-[#26308f]">
            About Our Institute
          </h2>
          <div className="w-20 h-[3px] bg-[#26308f] mx-auto mt-3 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT TEXT */}
          <div className="text-[17px] font[400] leading-7 text-[#333333] text-left right-7 left-7 ">
            
              <p className="mb-3">The Augustinian Institute Makurdi traces its origin to the 2012 Provincial Chapter of the Order of Saint Augustine, Province of Nigeria, where the vision of establishing a centre for higher learning rooted in Augustinian spirituality was formally conceived and approved. Though academic activities began proper in 2014. The Chapter discerned the need for an academic institution that would promote the Catholic intellectual tradition, foster philosophical and moral formation, and serve as a platform for the integration of faith and reason in contemporary society.</p>
               <p className="mb-3">Responding to this inspiration, the Province initiated plans for an institute that would not only train candidates for the priesthood and religious life but also serve the wider community by offering programmes in philosophy, ethics, and professional education guided by Catholic values. The project was entrusted to the Augustinian community in Makurdi, under the pastoral guidance of the Provincial Council, which provided the spiritual, intellectual, and material foundations for its realization.</p>
               <p className="mb-3"> Over the years, the Institute has grown steadily in its academic structure, departmental development, and institutional governance. Its affiliation to the Benue State University has further strengthened its academic credibility and ensured conformity with national educational standards, while remaining faithful to the Church's teaching and the Augustinian charism of unity in truth and charity.</p>
                <p className="mb-2">Today, the Augustinian Institute, Makurdi stands as a centre of excellence in philosophical and professional education, dedicated to forming men and women who seek wisdom through faith, reason, and service to God and humanity.</p>

            
         
            
          </div>


          {/* RIGHT IMAGE CARD */}
          <div className="relative transition-transform duration-300 hover:scale-105">

            {/* Main Image */}
            <img
              src="/abc.jpg"
              alt="About institute"
              className="rounded-lg shadow-md w-full object-cover"
            />

            

           

          </div>

        </div>
      </div>
    </section>

      {/* ── MISSION & VISION ───────────────────────────────────────────────── */}
    <section className="w-full bg-white py-20">
      <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px] 2xl:max-w-[1300px]">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#1e2a78] mb-3">Our Mission & Vision</h2>
          <div className="w-16 h-[3px] bg-[#1e2a78] rounded-full mx-auto" />
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Mission Card */}
          <div className="bg-[#eef0ff] transition-all duration-300 hover:-translate-y-2 rounded-2xl px-10 py-12 flex flex-col items-center text-center">
            <div className="mb-6 text-[#1e2a78]">
              <Target size={52} strokeWidth={1.6} />
            </div>
            <h3 className="text-[26px] font-bold text-[#1e2a78] mb-6">Our Mission</h3>
            <div className="text-[16px] font-normal text-gray-700 leading-8 text-left space-y-4">
              <p>
                To provide holistic education that integrates academic excellence with spiritual formation,
                moral integrity, and social responsibility, rooted in the Augustinian tradition of seeking
                truth through faith and reason.
                We are committed to nurturing individuals who are not only intellectually competent but
                also spiritually mature, ethically grounded, and prepared to serve their communities with
                wisdom and compassion.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#eef0ff] transition-all duration-300 hover:-translate-y-2 rounded-2xl px-10 py-12 flex flex-col items-center text-center">
            <div className="mb-6 text-[#1e2a78]">
              <Eye size={52} strokeWidth={1.6} />
            </div>
            <h3 className="text-[26px] font-bold text-[#1e2a78] mb-6">Our Vision</h3>
            <div className="text-[16px] font-normal text-gray-700 leading-8 text-left space-y-4">
              <p>
                The Institute envisions a community where truth and love unite faith and reason, forming
                persons who seek wisdom, justice, and peace in service to God and humanity. Article 3:
                Mission The mission of the Institute is to: a. Promote philosophical and professional
                education imbued with Catholic values; b. Foster the integration of faith and reason;
                c. Form morally responsible leaders inspired by the Gospel; d. Advance knowledge through
                teaching, research, and community service; e. Preserve and transmit the Catholic
                intellectual heritage in dialogue with contemporary thought.
                 
              </p>
              <p>Part II Objective</p>
              <p>  PART II – OBJECTIVES AND PRINCIPLES</p>

Article 4: Objectives

<p>The objectives of the Institute shall include:</p>
<p>1. The advancement of learning and the search for truth in the light of faith.</p>
<p>2. The education of students to think critically and act ethically.</p>
<p>3. The promotion of philosophical research, particularly in the Augustinian and Thomistic traditions.</p>
<p>4. The preparation of graduates capable of contributing to the moral and social development of Nigeria and the world.</p>
<p>5. The cultivation of a community of scholars marked by charity, humility, and intellectual rigor.</p>
              
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* ── CORE VALUES ────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#eef0ff] py-20">
      <div className="max-w-full px-4 sm:px-8 md:px-[75px] mx-auto ">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#1e2a78] mb-3">Our Core Values</h2>
          <div className="w-16 h-[3px] bg-[#1e2a78] rounded-full mx-auto" />
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-md shadow-sm px-10 py-12 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-5">{v.icon}</div>

              {/* Title */}
              <h3 className="text-[28px] font-[600] text-[#111827] mb-4">{v.title}</h3>

              {/* Description */}
              <p className="text-[16px] font-[400] text-[#333333] leading-7">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>

      {/* ── LEADERSHIP ─────────────────────────────────────────────────────── */}
      <section className="w-full bg-white py-20">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px]">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1e2a78] mb-3">Our Leadership</h2>
            <div className="w-14 h-[3px] bg-[#1e2a78] rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((l, i) => (
              <div key={i} className="bg-[#eef0ff] rounded-md shadow-md overflow-hidden text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
<div className="flex justify-center mt-8 mb-4">
  <img
    src={l.img}
    alt={l.name}
    className="w-[130px] h-[130px] object-cover object-top rounded-full border-4 border-[#1e2a78]"
  />
</div>                <div className="p-6 mb-3">
                  <h3 className="text-[28px] leading-tight font-bold text-[#333333] mb-1">{l.name}</h3>
                  <p className="text-[16px] font-semibold text-[#0D6EFD] mb-3 mt-3 tracking-wide">{l.role}</p>
                  <p className="text-[16px] text-[#333333] font-[400] leading-relaxed">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HISTORY TIMELINE ───────────────────────────────────────────────── */}
<section className="w-full bg-[#eef0ff] py-20">
  <div className="max-w-[1000px] mx-auto px-4 md:px-8">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-[#1e2a78] mb-3">Our History</h2>
      <div className="w-16 h-[3px] bg-[#1e2a78] rounded-full mx-auto" />
    </div>

    {/* Timeline */}
    <div className="relative">

      {/* Vertical line — center on desktop, left on mobile */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[5px] bg-[#26308f]" />

      <div className="flex flex-col">
        {timeline.map((item, i) => (
          <div key={i} className="relative flex items-start mb-10">

            {/* MOBILE: all cards on right. DESKTOP: left/right split */}

            {/* LEFT side — hidden on mobile */}
            <div className="hidden md:flex w-1/2 pr-12 justify-end">
              {item.side === "left" ? (
                <div className="relative bg-white rounded-md shadow-sm p-6 w-full max-w-[520px]">
                  <h3 className="text-[28px] font-semibold text-[#333333] mb-2">{item.year}</h3>
                  <p className="text-[16px] font-normal text-[#333333] leading-6">{item.desc}</p>
                  <div className="absolute top-[22px] -right-[8px] w-0 h-0
                    border-t-[8px] border-t-transparent
                    border-b-[8px] border-b-transparent
                    border-l-[8px] border-l-[#26308f]" />
                </div>
              ) : (
                <div className="w-full max-w-[340px]" />
              )}
            </div>

            {/* Center dot — left-aligned on mobile, centered on desktop */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 top-[18px] z-10">
              <div className="w-5 h-5 rounded-full border-[3px] border-[#1e2a78] bg-[#eef0ff]" />
            </div>

            {/* RIGHT side — full width on mobile, half on desktop */}
            <div className="w-full pl-12 md:w-1/2 md:pl-12 flex justify-start">
              {/* Mobile: show all cards. Desktop: only right-side cards */}
              <div className={`${item.side === "right" ? "block" : "block md:hidden"} relative bg-white rounded-md shadow-sm p-6 w-full max-w-[520px]`}>
                <h3 className="text-[28px] font-semibold text-[#333333] mb-2">{item.year}</h3>
                <p className="text-[16px] font-normal text-[#333333] leading-6">{item.desc}</p>
                {/* Arrow pointing left toward the line */}
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

      {/* ── STATS ──────────────────────────────────────────────────────────── */}
      <section className="w-full min-h-[345px] bg-[#26308f] py-10 flex justify items-center text-center ">
        <div className="max-w-[1100px] mx-auto px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-30 text-center text-white">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-[48px] font-bold text-white">{s.value}</div>
                <div className="text-[19.2px] font-normal text-white mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <Footer   />
    </div>
  );
}