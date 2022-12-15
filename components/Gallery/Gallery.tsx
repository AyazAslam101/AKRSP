import React, { useEffect } from "react";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const data = [
    [
      {
        title: "Media Gallery",
        heading: "Enhancing Employability and Leadership for Youth (EELY)",
      },
    ],
    [
      {
        title: "Media Gallery",
        heading: "Renewable Energy (RE)",
      },
    ],
  ];
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={115}
        naturalSlideHeight={100}
        totalSlides={2}
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <Slider className="xl:h-[72rem] lg:h-[58rem] md:h-[51rem] sm:h-[46rem] h-[55rem]">
          <Slide index={0}>
            <div className="py-5 container">
              {data[0].map((item: any, index: any) => {
                return (
                  <div key={index} className="text-center mb-16">
                    <h2 className="text-3xl leading-10 font-extrabold mb-8">
                      {item.title}
                    </h2>
                    <h4 className="text-2xl leading-10 font-semibold">
                      {item.heading}
                    </h4>
                    <p className="text-base font-weight font-normal tracking-wide leading-7 container lg:px-20 text-center mt-4">
                      Funded by: foreign affairs, trafe and development canada
                      (DFATD) and the aga khan foundation, canada (AKFC) project
                      period: 6 years (march 2011-march 2017) geographic focus:
                      all districts of gilgit-baltistan and district chitral of
                      khyber pakhtunkhwa. to improve the socio-economic
                      conditions of young men and women in gilgit baltistan and
                      chitral 9GBC
                    </p>
                  </div>
                );
              })}
              <div>
                <div className="grid grid-cols-4 sm:gap-2 md:gap-2 lg:gap-2 gap-2 cursor-pointer h-full">
                  <div>
                    <Image
                      src="/image5.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                    />
                  </div>
                  <div>
                    <Image
                      src="/image6.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                    />
                  </div>
                  <div>
                    <Image
                      src="/image9.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                    />
                  </div>
                  <div>
                    <Image
                      src="/image11.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                    />
                  </div>
                  <div>
                    <Image
                      src="/image7.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                      className="inset-0 object-cover bg-no-repeat bg-cover"
                    />
                  </div>

                  <div className="relative">
                    <Image
                      src="/image8.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                      className="absolute xl:-top-42 lg:-top-30 md:-top-26 sm:-bottom-0 bottom-0"
                    />
                  </div>
                  <div>
                    <Image
                      src="/image10.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src="/image12.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                      className="absolute xl:-top-42 lg:-top-30 md:-top-26 sm:-bottom-0 bottom-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="py-5 overflow-hidden container">
              {data[1].map((item: any, index: any) => {
                return (
                  <div key={index} className="text-center mb-16">
                    <h2 className="text-3xl leading-10 font-extrabold mb-8">
                      {item.title}
                    </h2>
                    <h4 className="text-2xl leading-10 font-semibold">
                      {item.heading}
                    </h4>
                    <p className="text-base font-weight font-normal tracking-wide leading-7 container lg:px-20 text-center mt-4">
                      Funded by: Government of KP, PPAF, Swiss Agency for
                      Development and Cooperation (SDC) Project Duration: 3
                      Years (August 2014 - November 2017) Geographic Focus: All
                      24 Union Councils of Chitral District To provide the
                      communities with access to clean and renewable energy for
                      domestic and commercial purposes To promote productive use
                      of energy for generating income opportunities for the
                      rural households
                    </p>
                  </div>
                );
              })}
              <div>
                <div className="grid grid-cols-4 sm:gap-2 md:gap-2 lg:gap-2 gap-2 cursor-pointer">
                  <div>
                    <Image
                      src="/image5.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                    />
                  </div>
                  <div>
                    <Image
                      src="/image6.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                    />
                  </div>
                  <div>
                    <Image
                      src="/image9.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                    />
                  </div>
                  <div>
                    <Image
                      src="/image11.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                    />
                  </div>
                  <div>
                    <Image
                      src="/image7.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                      className="inset-0 object-cover bg-no-repeat bg-cover"
                    />
                  </div>

                  <div className="relative">
                    <Image
                      src="/image8.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                      className="absolute xl:-top-42 lg:-top-30 md:-top-26 sm:-bottom-0 bottom-0"
                    />
                  </div>
                  <div>
                    <Image
                      src="/image10.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src="/image12.png"
                      width={500}
                      height={100}
                      alt="akrsp"
                      className="absolute xl:-top-42 lg:-top-30 md:-top-26 sm:-bottom-0 bottom-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </Slider>
        <div className="flex items-center justify-center lg:mt-8 md:mt-8 sm:mt-4 mt-3">
          <ButtonBack className="border-primary border-solid border-2 py-3 px-4 rounded ">
            <svg
              width="14"
              height="14"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.02354 1.14328C6.39688 0.769938 7.00218 0.769938 7.37552 1.14328C7.74858 1.51633 7.74891 2.12107 7.37626 2.49453L3.66162 6.21729L7.37626 9.95004C7.74891 10.3135 7.74858 10.9182 7.37553 11.2913C7.00218 11.6646 6.39688 11.6646 6.02354 11.2913L0.949532 6.21729L6.02354 1.14328Z"
                fill="#0C9A4A"
              />
            </svg>
          </ButtonBack>
          <ButtonNext className="border-primary border-solid border-2 py-3 px-4 rounded ml-3">
            <svg
              width="14"
              height="14"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.97646 10.8567C1.60312 11.2301 0.997816 11.2301 0.624475 10.8567C0.251422 10.4837 0.251093 9.87893 0.623739 9.50547L4.33838 5.78271L0.623738 2.05996C0.251092 1.6865 0.251422 1.08176 0.624475 0.708709C0.997816 0.335367 1.60312 0.335367 1.97646 0.708709L7.05047 5.78271L1.97646 10.8567Z"
                fill="#0C9A4A"
              />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Gallery;
