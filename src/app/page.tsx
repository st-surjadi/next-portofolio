import Header from "@components/Header";
import { Navbar } from "@components/Navbar";
import About from "@components/About";
import Experience from "@components/Experience";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
