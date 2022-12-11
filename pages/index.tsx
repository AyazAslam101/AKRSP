import Layout from "../components/Layout/Layout";
import "../styles/Home.module.css";
import Programmes from "../components/Programmes/Programmes";
import Hero from "../components/Hero/Hero";
import Gallery from "../components/Gallery/Gallery";
import Documentries from "../components/Documentries/Documentries";
import Alpha from "../components/Alpha/Alpha";
import Projects from "../components/Project/Projects";
import Slider from "../components/RecentNews/Slider";
import SideBar from "../components/SideBar/SideBar";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="relative -top-48">
          <Hero />
        </div>
        <SideBar />
        <div className="-mt-32">
          <Programmes />
        </div>
        <Projects />
        <Slider />
        <Documentries />
        <Gallery />
        <Alpha />
      </Layout>
    </>
  );
}
