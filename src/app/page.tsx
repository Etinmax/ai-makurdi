import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import  CardSection  from "@/components/card-section";
import UpcomingEvents from "@/components/UpcomingEvents";
import LatestNews from "@/components/LatestNews";
import AcademicPrograms from "@/components/AcademicPrograms";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <UpcomingEvents />
        <LatestNews />
        < AcademicPrograms />
        
      </main>
      <Footer />
    </>
  );
}
