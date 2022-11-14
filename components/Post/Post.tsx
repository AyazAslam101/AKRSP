import Image from "next/image";
import image1 from "../../public/image1.png";
import image2 from "../../public/image2.png";
import image3 from "../../public/image3.png";
import image4 from "../../public/image4.png";

const Post = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-10 px-2 overflow-hidden sm:px-4 container lg:px-30 py-2 mx-auto">
        <div className="grid grid-cols-2 gap-2">
          <div className="mt-10">
            <h2 className="text-5xl px-4 font-bold leading-tight text-black">
              Aga Khan Rural <br /> Support Programme <br />
              <span className="text-primary">Pakistan</span>
            </h2>
            <p className="py-2 px- font-medium text-lg leading-8 mt-2">
              The Aga Khan Rural Support Programme (AKRSP) is a private,
              non-profit company, established by the Aga Khan Foundation in 1982
              to improve the quality of life of the people of Gilgit Baltistan
              and Chitral (GBC). The overall goal of the organization is to
              improve the socio-economic conditions of the people of northern
              Pakistan.
            </p>
          </div>
          <div className="container lg:px- py-2 mx-auto">
            <div className="grid grid-cols-2 gap-1 sm:gap-1 md:gap-2 lg:gap-2">
            <div className="w-ull">
              <Image src={image1} alt="alt" className="px-3" />
            </div>
            <div>
              <Image
                src={image2}
                alt="alt"
                className=""
              />
            </div>
            <div>
              <Image src={image3} alt="alt" className="px-2" />
            </div>{" "}
            <div className="relative">
              <Image
                src={image4}
                alt="alt"
                className="absolute xl:right-36 lg:righ-28 md:right-24 sm:-bottom-12 bottom-0"
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

{
  /*  */
}
