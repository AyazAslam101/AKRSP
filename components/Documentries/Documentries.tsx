import React,{useEffect} from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";


const Documentries = () => {
   useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="py-5" data-aos="zoom-out-up" data-aos-duration="800">
      <div>
        <h2 className="text-3xl font-bold mb-1">MEDIA / DOCUMENTARIES</h2>
      </div>
   
    </div>
  );
};

export default Documentries;
