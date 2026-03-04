import { Phone, Mail, Globe, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const usefulLinks = ["Home", "About Us", "Academics", "Admissions", "E-Journal", "Contact Us"];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f1229] text-white">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Column 1 - Get In Touch */}
          <div>
            <h3 className="text-[17px] font-bold uppercase tracking-wide mb-3">Get In Touch</h3>
            <div className="w-10 h-[3px] bg-[#3b4fd8] mb-8 rounded-full" />

            <div className="flex flex-col gap-5 text-[15px] text-gray-300">
              <div className="flex items-start gap-3">
                <Phone size={17} className="text-[#3b4fd8] mt-0.5 shrink-0" />
                <span>+2347031828531, +2348030593538</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={17} className="text-[#3b4fd8] shrink-0" />
                <span>rector@makurdiai.com.ng</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={17} className="text-[#3b4fd8] shrink-0" />
                <span>www.makurdiai.com.ng</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={17} className="text-[#3b4fd8] mt-0.5 shrink-0" />
                <span>Otukpo Road, P.O Box 584, Makurdi</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              {[
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Youtube size={18} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#1e2340] hover:bg-[#3b4fd8] transition-colors duration-200 flex items-center justify-center text-gray-300 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Useful Links */}
          <div>
            <h3 className="text-[17px] font-bold uppercase tracking-wide mb-3">Useful Links</h3>
            <div className="w-10 h-[3px] bg-[#3b4fd8] mb-8 rounded-full" />

            <ul className="flex flex-col gap-4">
              {usefulLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-[15px] text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Newsletter */}
          <div>
            <h3 className="text-[17px] font-bold uppercase tracking-wide mb-3">Newsletter</h3>
            <div className="w-10 h-[3px] bg-[#3b4fd8] mb-8 rounded-full" />

            <p className="text-[15px] text-gray-300 mb-6 leading-relaxed">
              Stay updated with our latest news and announcements.
            </p>

            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-white text-gray-800 placeholder-gray-400 text-[14px] px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#3b4fd8]"
            />
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1200px] mx-auto px-8 py-6 text-center text-gray-400 text-[14px]">
          <p>© 2025 Augustinian Institute, Makurdi. All Rights Reserved.</p>
          <p className="mt-2">Powered by AI ICT Center</p>
        </div>
      </div>
    </footer>
  );
}
