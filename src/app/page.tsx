import "./globals.css";
import Navbar from "./../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import WorkedWithSection from "../components/home/WorkedWithSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import StatsSection from "../components/home/StatsSection"; 
import TestimonialSection from "../components/home/TestimonialsSection";   
import BlogSection from "../components/home/BlogSection"; 
import FaqSection from "../components/home/FaqSection"; 
import ScheduleSection from "@/components/home/ScheduleSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ScheduleSection />
      <WorkedWithSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialSection />
      <BlogSection />
      <FaqSection />
    </main>
  );
}