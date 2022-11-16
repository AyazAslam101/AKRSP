import Image from "next/image";

const Alpha2 = () => {
  return (
    <>
      <div className="py-10 px-2 sm:px-4 py-2">
        <div className="lg:grid lg:grid-cols-2 sm:grid-cols-2 md:block grid grid-cols-2 gap-2 lg:gap-4">
          <div className="mt-16">
            <h2 className="text-5xl font-bold leading-tight text-black">
              Aga Khan Rural Support Programme <br />
              <span className="text-primary">Pakistan</span>
            </h2>yarn dev

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
            <div className="lg:grid lg:grid-cols-2 sm:grid-cols-2 md:hidden grid grid-cols-2 gap-2 sm:gap-4 md:gap-3 lg:gap-4 px-3 py-2">
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
                  className="absolute xl:right-16 xl:top-4 lg:right-8 lg:top-6 md:right-0 md:top-16 sm:right-0 sm:top-10 right-0"
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
                  className="absolute xl:mr-0 xl:right-28 xl:-top-1 lg:right-20 lg:mr-2 lg:top-0 md:right-56 md:top-0 sm:right-20 sm:top-10 right-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alpha2;
