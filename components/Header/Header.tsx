import React,{useEffect} from "react"
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Header = () => {
  
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <>
      <div className="container mx-auto lg:px-9 px-4 py-8">
        <div className="py-5 overflow-hidden pt-20">
          <div className="xl:grid xl:grid-cols-2 lg:block sm:block md:block block gap-36">
            <div className="lg:mt-32 md:10 sm:mt-10 mt-4">
              <h2 className="header-title">
                Aga Khan Rural Support Programme <br className="xl:block hidden"/>
                <span className="text-primary font-bold leading-tight ml-1">
                  Pakistan
                </span>
              </h2>
              <p className="py-2 font-normal text-2xl leading-10 mt-2">
                The Aga Khan Rural Support Programme (AKRSP) is a private,
                non-profit company, established by the Aga Khan Foundation in
                1982 to improve the quality of life of the people of Gilgit
                Baltistan and Chitral (GBC). The overall goal of the
                organization is to improve the socio-economic conditions of the
                people of northern Pakistan
              </p>
            </div>
            <div>
              <div
                className="md:flex md:flex-col hidden gap-3 pt-10 mx-auto"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <div className="grid grid-cols-[350px_600px]">
                  <div className="cursor-pointer">
                    <Image
                      src="/Image1.png"
                      width={280}
                      height={280}
                      alt="alt"
                    />
                  </div>
                  <div className="cursor-pointer mt-2">
                    <Image
                      src="/Image2.png"
                      width={300}
                      height={100}
                      alt="alt"
                      className="relative right-16 ml-2 top-16"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-[350px_500px]">
                  <div className="cursor-pointer">
                    <Image
                      src="/Image3.png"
                      width={195}
                      height={100}
                      alt="alt"
                    />
                  </div>{" "}
                  <div className="cursor-pointer">
                    <Image
                      src="/Image4.png"
                      width={385}
                      height={100}
                      alt="alt"
                      className="relative right-36 ml-1 top-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-32"></div>
      </div>
    </>
  );
};

export default Header;
