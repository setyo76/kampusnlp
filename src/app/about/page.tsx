import AboutSection from "@/components/home/AboutSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Kita bungkus dengan padding top agar tidak tertutup Navbar */}
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}