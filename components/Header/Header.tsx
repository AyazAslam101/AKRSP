import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="py-10 px-2 sm:px-4 py-2 ">
        <div className="lg:grid lg:grid-cols-2 sm:block md:block block gap-2 lg:gap-4">
          <div className="mt-8">
            <h2 className="text-5xl font-bold leading-tight text-black mr-2">
              Aga Khan Rural Support Programme <br/>
              <span className="text-primary font-bold leading-tight">Pakistan</span>
            </h2>

            <p className="py-2 font-medium text-lg leading-8 mt-2">
              The Aga Khan Rural Support Programme (AKRSP) is a private,
              non-profit company, established by the Aga Khan Foundation in 1982
              to improve the quality of life of the people of Gilgit Baltistan
              and Chitral (GBC). The overall goal of the organization is to
              improve the socio-economic conditions of the people of northern
              Pakistan.
            </p>
          </div>
          <div className="container py-2 mx-auto">
            <div className="lg:grid lg:grid-cols-2 sm:grid-cols-2 grid grid-cols-2 gap-2 sm:gap-2 md:gap-1 lg:gap-2 px-3 py-2">
              <div className="w-full">
                <Image
                  src="/../public/image1.png"
                  width={200}
                  height={400}
                  alt="alt"
                />
              </div>
              <div className="relative">
                <Image
                  src="/../public/image2.png"
                  alt="alt"
                  width={250}
                  height={100}
                  className="absolute xl:right-16 xl:top-4 lg:right-8 lg:top-6 md:right-72 md:-mr-1 md:top-4 sm:right-36 sm:top-4 right-14 top-4"
                />
              </div>
              <div className="px-1">
                <Image
                  src="/../public/image3.png"
                  width={140}
                  height={100}
                  alt="alt"
                />
              </div>{" "}
              <div className="relative">
                <Image
                  src="/../public/image4.png"
                  width={300}
                  height={100}
                  alt="alt"
                  className="absolute xl:mr-0 xl:right-28 xl:-top-0 lg:right-20 lg:mr-2 lg:top-0 md:right-72 md:top-0 sm:right-36 sm:top-0 right-28 -mr-1 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
