// import Layout from '../components/Layout'
import Layout from '../components/Layout'
import  '../styles/Home.module.css'
import Image from 'next/image'
import Rectangle from "../public/rectangle.png";
import Header from '../components/Header/Header';
import Post from '../components/Post/Post';
import Postv1 from '../components/Postv1/Postv1';


export default function Home() {
  return (
    <Postv1></Postv1> 
  )
}
{/* <div className="flex flex-wrap justify-center">
<div className="flex flex-wrap justify-center">
  <div className="flex flex-wrap">

<Image src={image1} alt="alt"/>
<Image src={image2} alt="alt"/>
  </div>
  <div className="flex flex-wrap justify-center">

<Image src={image5} alt="alt"/>
<Image src={image7} alt="alt"/>
  </div>
</div>
<div className="flex flex-wrap justify-center">
  <div className="flex flex-wrap justify-center">

<Image src={image3} alt="alt"/>
<Image src={image4} alt="alt"/>
  </div>
  <div className="flex flex-wrap justify-center" > 

<Image src={image6} alt="alt"/>
<Image src={image8} alt="alt"/>
  </div>
  </div>
</div> */}