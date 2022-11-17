// import Layout from '../components/Layout'
import Layout from "../components/Layout/Layout";
import "../styles/Home.module.css";
import Alpha from "../components/Alpha/Alpha";
import Alpha2 from "../components/Alpha/Alpha2";
import Alpha3 from "../components/Alpha/Alpha3";
import Alpha4 from "../components/Alpha/Alpha4";
import Alpha5 from "../components/Alpha/Alpha5";
import Alpha6 from "../components/Alpha/Alpha6";import Projects from '../components/Projects';


export default function Home() {
  return (
    <>
      <Layout>
        <Alpha2 />
        <Alpha3 />
        <Alpha />
        <Alpha5 />
        <Alpha4 />
        <Alpha6 />
      </Layout>
    </>
  );
}
