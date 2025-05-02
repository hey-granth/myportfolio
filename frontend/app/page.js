import { FeaturesSectionDemo } from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar1 from "@/components/Navbar1";
import Play from "@/components/Play";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <Navbar1/>
    <Hero/>
    <FeaturesSectionDemo/>
    <Play/>
    <Footer/>
    </>
  );
}
