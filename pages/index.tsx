// import Layout from '../components/Layout'
import Layout from "../components/Layout/Layout";
import "../styles/Home.module.css";
import Programmes from "../components/Programmes/Programmes";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Gallery from "../components/Gallery/Gallery";
import Documentries from "../components/Documentries/Documentries";
import Alpha from "../components/Alpha/Alpha";
import Projects from "../components/Project/Projects";
import Slider from "../components/RecentNews/Slider";


export default function Home() { 
  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <Programmes />
        <Projects/>
        <Slider/>
        <Documentries />
        <Gallery />
        <Alpha />
      </Layout>
      
    </>
  );
}
