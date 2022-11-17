// import Layout from '../components/Layout'
import Layout from '../components/Layout'
import  '../styles/Home.module.css'
import Image from 'next/image'
import Rectangle from "../public/rectangle.png";
import Header from '../components/Header/Header';
import Projects from '../components/Projects';


export default function Home() {
  return (
    <Layout>/
      <Header/>
      <Projects/>
    </Layout>
  )
}
