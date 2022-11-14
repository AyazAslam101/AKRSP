import Image from "next/image";

const Post = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-10 px-2 overflow-hidden sm:px-4 container lg:px-30 py-2 mx-auto">
        <div className="lg:grid lg:grid-cols-2 sm:block md:block grid grid-rows-3 gap-2 lg:gap-4">
          <div className="mt-16">
            <h2 className="text-5xl font-bold leading-tight text-black">
              Aga Khan Rural Support Programme <br />
              <span className="text-primary">Pakistan</span>
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
            <div className="lg:grid lg:grid-cols-2 sm:grid-cols-2 grid grid-cols-2 gap-2 sm:gap-4 md:gap-2 lg:gap-3">
              <div className="w-full px-1">
                <Image
                  src="/../public/image1.png"
                  width={240}
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
                  className="absolute xl:right-28 xl:top-16 lg:right-20 lg:top-22 md:right-56 md:top-16 sm:right-0 sm:top-10 right-12"
                />
              </div>
              <div className="px-1">
                <Image
                  src="/../public/image3.png"
                  width={160}
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
                  className="absolute xl:right-36 xl:-top-1 lg:right-32 lg:top-0 md:right-56 md:top-0 sm:right-20 sm:top-10 right-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
