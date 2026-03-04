"use client";

export default function Services() {
  const services = [
    { title: 'Responsive Web Design', desc: 'Design that works beautifully across all devices and screens.' },
    { title: 'UX Auditing', desc: 'Detailed experience audits to improve usability and engagement.' },
    { title: 'Front End Development', desc: 'Fast, responsive, and accessible websites built with modern tech.' },
    { title: 'UX Consultation', desc: 'Advice and recommendations tailored to your goals.' },
    { title: 'Mobile App Design', desc: 'Clean, usable mobile app UI/UX solutions.' },
    { title: 'UX Research', desc: 'Research that informs strategy and design decisions.' },
  ]

  return (
    <section className="relative bg-accentBg py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-primary uppercase font-outfit tracking-wider">
          Our Services
        </h2>
      </div>

      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {services.map((s, i) => (
          <li
            key={i}
            className="bg-white p-6 rounded-2xl shadow-xl transform transition hover:-translate-y-2 hover:bg-accent text-center"
          >
            <h3 className="text-xl font-bold text-primary font-outfit mb-2">{s.title}</h3>
            <p className="text-gray-600 text-base font-outfit">{s.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

