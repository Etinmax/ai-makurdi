const programs = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="52" height="52" fill="#1e2a78">
        <path d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z"/>
      </svg>
    ),
    title: "Philosophy",
    description: "Comprehensive study of philosophical traditions and critical thinking.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="52" height="52" fill="#1e2a78">
        <path d="M448 128C448 92.7 419.3 64 384 64C348.7 64 320 92.7 320 128C320 163.3 348.7 192 384 192C419.3 192 448 163.3 448 128zM328.7 328L351.6 359.5C358.1 368.4 367.9 374.2 378.8 375.6C389.7 377 400.7 373.9 409.2 366.9L497.2 294.9C514.3 280.9 516.8 255.7 502.8 238.6C488.8 221.5 463.6 219 446.5 233L391.3 278.2L365.1 242.2C349.5 220.7 324.5 208 297.9 208C267 208 238.7 225.1 224.3 252.4L175.8 344.9C155.6 383.4 166.4 430.8 201.4 456.7L254.6 496L168 496C145.9 496 128 513.9 128 536C128 558.1 145.9 576 168 576L376 576C393.3 576 408.6 564.9 414 548.5C419.4 532.1 413.7 514.1 399.8 503.8L283.7 418L328.7 328z"/>
      </svg>
    ),
    title: "Theology",
    description: "Deep exploration of religious traditions and theological concepts.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="52" height="52" fill="#1e2a78">
        <path d="M384 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L398.4 160C393.2 185.8 375.5 207.1 352 217.3L352 512L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L128 576C110.3 576 96 561.7 96 544C96 526.3 110.3 512 128 512L288 512L288 217.3C264.5 207 246.8 185.7 241.6 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L256 96C270.6 76.6 293.8 64 320 64C346.2 64 369.4 76.6 384 96zM439.6 384L584.4 384L512 259.8L439.6 384zM512 480C449.1 480 396.8 446 386 401.1C383.4 390.1 387 378.8 392.7 369L487.9 205.8C492.9 197.2 502.1 192 512 192C521.9 192 531.1 197.3 536.1 205.8L631.3 369C637 378.8 640.6 390.1 638 401.1C627.2 445.9 574.9 480 512 480zM126.8 259.8L54.4 384L199.3 384L126.8 259.8zM.9 401.1C-1.7 390.1 1.9 378.8 7.6 369L102.8 205.8C107.8 197.2 117 192 126.9 192C136.8 192 146 197.3 151 205.8L246.2 369C251.9 378.8 255.5 390.1 252.9 401.1C242.1 445.9 189.8 480 126.9 480C64 480 11.7 446 .9 401.1z"/>
      </svg>
    ),
    title: "Ethics",
    description: "Examination of moral principles and ethical decision-making.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="52" height="52" fill="#1e2a78">
        <path d="M300.9 117.2L184.3 246.8C179.7 251.9 179.9 259.8 184.8 264.7C215.3 295.2 264.8 295.2 295.3 264.7L327.1 232.9C331.3 228.7 336.6 226.4 342 226C348.8 225.4 355.8 227.7 361 232.9L537.6 408L608 352L608 64L496 128L472.2 112.1C456.4 101.6 437.9 96 418.9 96L348.5 96C347.4 96 346.2 96 345.1 96.1C328.2 97 312.3 104.6 300.9 117.2zM148.6 214.7L255.4 96L215.8 96C190.3 96 165.9 106.1 147.9 124.1L32 256L32 608L176 472L188.4 482.3C211.4 501.5 240.4 512 270.3 512L286 512L279 505C269.6 495.6 269.6 480.4 279 471.1C288.4 461.8 303.6 461.7 312.9 471.1L353.9 512.1L362.9 512.1C382 512.1 400.7 507.8 417.7 499.8L391 473C381.6 463.6 381.6 448.4 391 439.1C400.4 429.8 415.6 429.7 424.9 439.1L456.9 471.1L474.4 453.6C483.3 444.7 485.9 431.8 482 420.5L344.1 283.7L329.2 298.6C279.9 347.9 200.1 347.9 150.8 298.6C127.8 275.6 126.9 238.7 148.6 214.6z"/>
      </svg>
    ),
    title: "Pastoral Studies",
    description: "Preparation for leadership in religious and community settings.",
  },
];

export default function AcademicPrograms() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#1e2a78]">Academic Programs</h2>
          <div className="w-16 h-[3px] bg-[#1e2a78] mx-auto mt-3 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-6 py-12 bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-3 hover:shadow-xl cursor-pointer"
            >
              <div className="mb-6">{program.icon}</div>

              <h3 className="text-[19px] font-semibold text-[#333333] mb-3">
                {program.title}
              </h3>

              <p className="text-[16px] text-[#333333] leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}