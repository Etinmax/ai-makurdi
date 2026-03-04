import { ArrowRight } from "lucide-react";

export default function UpcomingEvents() {
  const events = [
    {
      title: "INAUGURAL MASS & LECTURE For the 2025/2026 Academic Session",
      day: "28th",
      date: "July 12, 2025",
      img: "inn.jpg",
      month: "OCTOBER",
      par: "Following the Mass will be the Inaugural Lecture, to be delivered by the distinguished scholar, philosopher, and Augustinian priest — Very Rev. Fr. Professor Ikechukwu Anthony Kanu, OSA — on Tuesday, 28th October 2025.",
    },
    {
      title: "Admission Screening",
      day: "3rd",
      month: "NOVEMBER",
      date: "July 20, 2025",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      par: "Prospective students are invited to tour our campus, meet faculty, and learn about our programs.",
    },
    {
      title: "Philosophy Symposium",
      day: "05",
      month: "NOVEMBER",
      date: "August 3, 2025",
      img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      par: 'Exploring "The Role of Philosophy in Contemporary Education" with guest speakers and panel discussions.',
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px]">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#24347a]">
            Upcoming Events
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
                  className="w-full h-[230px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="w-full h-[88px] bg-[#26308e] flex flex-col justify-center items-center">
                <h2 className="font-semibold text-[32px] text-white leading-none">
                  {event.day}
                </h2>
                <div className="font-light text-xl text-white mt-1 leading-none">
                  {event.month}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="font-semibold text-xl text-black leading-snug">
                  {event.title}
                </h3>
                <p className="text-[16px] text-[#555555] mt-2">{event.par}</p>
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