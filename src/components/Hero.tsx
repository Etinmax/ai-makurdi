export default function Hero() {
  return (
    <section className="relative w-full h-[520px] flex items-center justify-center text-center text-white">
      
      {/* Background Image */}
      <img
        src="/aiadmin.jpg"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#24347a]/70" />

      {/* Content */}
  <div className="relative z-10 max-w-[700px] px-6">
  <h2
    className="text-[40px] font-bold leading-normal tracking-wide"
    style={{ animation: "slideUp 0.9s ease 0.5s forwards", opacity: 0 }}
  >
    Welcome to the Augustinian Institute, Makurdi
  </h2>

  <p
    className="mt-4 text-lg font-normal"
    style={{ animation: "slideUp 1.5s ease 0.2s forwards", opacity: 0 }}
  >
    A Centre of Wisdom, Faith, and Intellectual Formation
  </p>

  <button
    className="mt-4 bg-[#0056b3] cursor-pointer transition px-8 py-2 rounded-md text-base font-medium"
    style={{ animation: "slideUp 1.5s ease 0.3s forwards", opacity: 0 }}
  >
    Learn More
  </button>
</div>


    </section>
  );
}
