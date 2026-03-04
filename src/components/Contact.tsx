"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-100 dark:bg-gray-800"
    >
      <div className="w-[90%] bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Have a project in mind or want to learn more about our services? Reach out today!
            </p>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Add form submission logic here
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
              />
              <input
                type="number"
                placeholder="Your Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-amber-900 text-white font-semibold rounded-lg hover:bg-brown-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="flex items-center justify-center">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81627974202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7f9f3b6e0b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611815470923!5m2!1sen!2sau"
              width="100%"
              height="100%"
              className="rounded-lg border border-gray-300 dark:border-gray-600"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
