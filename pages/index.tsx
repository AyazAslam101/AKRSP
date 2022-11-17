// import Layout from '../components/Layout'
import Layout from "../components/Layout/Layout";
import "../styles/Home.module.css";
import Programmes from "../components/Programmes/Programmes";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Gallery from "../components/Gallery/Gallery";
import Documentries from "../components/Documentries/Documentries";
import Alpha from "../components/Alpha/Alpha";
import Cards from "../components/Card/Cards";
import Projects from "../components/Card/Projects";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <Programmes />
        <Projects/>
        <Documentries />
        <Gallery />
        <Alpha />
      </Layout>
    </>
  );
}
