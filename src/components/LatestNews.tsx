import { ArrowRight } from "lucide-react";

export default function LatestNews() {
  const events = [
    {
      title: "2025/2026 Academic Year Inauguration",
      day: "28th",
      img: "ino1.jpg",
      par: "The Augustinian Institute, Makurdi, officially commenced its 2025/2026 academic year with a thought-provoking Inaugural Lecture held on Tuesday, 28th October 2025. The event attracted members of the Augustinian family, academia, clergy, students, and guests, setting a reflective and inspiring tone for the academic year.",
    },
    {
      title: "Keynote Address by Rev. Fr. Prof. Kanu",
      img: "ino8.jpg",
      par: "Rev. Fr. Prof. Ikechukwu Anthony Kanu, OSA, the Prior Provincial of the Order of Saint Augustine, delivered the Inaugural Lecture titled \"Nigeria's Bittered and Embittered Trajectory: A Critical Rethink of 'Renaissance' and a Strategic Embrace of 'Akiism'.\" His rich and intellectually engaging presentation examined Nigeria's socio-political and moral challenges.",
    },
    {
      title: "Academic Community Engagement",
      img: "ino3.jpg",
      par: 'The Inaugural Lecture concluded with an interactive session where attendees engaged with the speaker\'s insights on Nigeria\'s journey toward a renewed and just society. "The event reinforced the Institute/s mission to promote intellectual inquiry and moral formation in the Augustinian spirit of truth and love, fostering discourse on national transformation.',
    },
  ];

  return (
    <section className="w-full bg-[#eef0ff] py-20">
      <div className="max-w-full mx-auto px-[75px]">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#24347a]">
            Latest News & Events
          </h2>
          <div className="w-20 h-[3px] bg-[#24347a] mx-auto mt-3 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[23px]">
          {events.map((event, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-[230px]  object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="font-semibold text-left text-xl text-black leading-snug">
                  {event.title}
                </h3>
                <p className="text-[16px] text-justify text-[#555555] mt-2">{event.par}</p>
              </div>

              <div className="w-full mb-2 px-6 -mt-4">
                {/* Named group "link" — isolated from the card's "group" */}
                <a
                  href="#"
                  className="group/link  px-3 py-2 text-base font-semibold text-[#2b2f85] inline-flex items-center"
                >
                  View Details
                  <ArrowRight
                    className="ml-2 transition-transform duration-200 group-hover/link:translate-x-1"
                    size={18}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
<div className="text-center mt-8">
  <a href="#" className="inline-block text-[#333333] font-normal text-[16px] border border-transparent active:border-[#333333] transition-all duration-150 px-3 py-1 rounded-md">
    View all Events
  </a>
</div>    
      </div>
    </section>
  );
}