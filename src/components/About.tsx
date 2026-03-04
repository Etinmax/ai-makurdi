export default function AboutSection() {
  return (
    <section className="w-full bg-[#eef0ff] py-20">
      <div className="max-w-full mx-auto px-[75px] ">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl leading-tight md:text-4xl font-semibold text-[#26308f]">
            About Our Institute
          </h2>
          <div className="w-20 h-[3px] bg-[#26308f] mx-auto mt-3 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 items-center">

          {/* LEFT TEXT */}
          <div className="text-[16px] leading-7 text-[#333333] text-justify right-7 left-7 ">
            <p>
              The Augustinian Institute Makurdi traces its origin to the 2012 Provincial Chapter of the Order of Saint Augustine, Province of Nigeria, where the vision of establishing a centre for higher learning rooted in Augustinian spirituality was formally conceived and approved. Though academic activities began proper in 2014. The Chapter discerned the need for an academic institution that would promote the Catholic intellectual tradition, foster philosophical and moral formation, and serve as a platform for the integration of faith and reason in contemporary society. Responding to this inspiration, the Province initiated plans for an institute that would not only train candidates for the priesthood and religious life but also serve the wider community by offering programmes in philosophy, ethics, and professional education guided by Catholic values. The project was entrusted to the Augustinian community in Makurdi, under the pastoral guidance of the Provincial Council, which provided the spiritual, intellectual, and material foundations for its realization. Over the years, the Institute has grown steadily in its academic structure, departmental development, and institutional governance. Its affiliation to the Benue State University has further strengthened its academic credibility and ensured conformity with national educational standards, while remaining faithful to the Church's teaching and the Augustinian charism of unity in truth and charity. Today, the Augustinian Institute, Makurdi stands as a centre of excellence in philosophical and professional education, dedicated to forming men and women who seek wisdom through faith, reason, and service to God and humanity.

            </p>
         
 <a href="#" className="inline-block text-[#333333] font-normal text-[16px] border border-transparent active:border-[#333333] transition-all duration-150 px-3 py-1 rounded-md">
    Read more
  </a>           
          </div>


          {/* RIGHT IMAGE CARD */}
          <div className="relative transition-transform duration-300 hover:scale-105">

            {/* Main Image */}
            <img
              src="/aif.jpg"
              alt="About institute"
              className="rounded-lg shadow-md w-full object-cover"
            />

            

           

          </div>

        </div>
      </div>
    </section>
  );
}