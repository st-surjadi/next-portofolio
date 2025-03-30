import Header from "@components/Header";
import { Navbar } from "@/app/components/Navbar";
import About from "@/app/components/About";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
    </>
  );
}
