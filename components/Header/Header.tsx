import Image from "next/image";
import SideBar from "../SideBar/SideBar";

const Header = () => {
  return (
    <>
      <div className="py-5 px-2 mx-auto overflow-hidden sm:px:2 container sm:container lg:container md:container">
        <div className="lg:grid lg:grid-cols-2 sm:block md:block block gap-2 lg:gap-4 relative">
          <div className="pt-32">
            <h2 className="text-6xl font-bold leading-tight text-black mr-2">
              Aga Khan Rural Support Programme <br />
              <span className="text-primary font-bold leading-tight">
                Pakistan
              </span>
            </h2>

            <p className="py-2 font-medium text-2xl leading-10 mt-2">
              The Aga Khan Rural Support Programme (AKRSP) is a private,
              non-profit company, established by the Aga Khan Foundation in 1982
              to improve the quality of life of the people of Gilgit Baltistan
              and Chitral (GBC). The overall goal of the organization is to
              improve the socio-economic conditions of the people of northern
              Pakistan.
            </p>
          </div>
          <div className="container py-2 mx-auto">
            <div className="max-w-3xl flex flex-col gap-2">
              <div className="grid grid-cols-[350px_500px]">
                <div className="cursor-pointer">
                  <Image
                    src="/../public/Image1.png"
                    width={280}
                    height={280}
                    alt="alt"
                  />
                </div>
                <div className="cursor-pointer mt-2">
                  <Image
                    src="/../public/Image2.png"
                    alt="alt"
                    width={300}
                    height={100}
                    className="relative right-14 top-16"
                  />
                </div>
              </div>
              <div className="grid grid-cols-[350px_500px]">
                <div className="px-1  cursor-pointer">
                  <Image
                    src="/../public/Image3.png"
                    width={220}
                    height={100}
                    alt="alt"
                  />
                </div>{" "}
                <div className="cursor-pointer">
                  <Image
                    src="/../public/Image4.png"
                    width={350}
                    height={100}
                    alt="alt"
                    className="relative right-28 top-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="fixed right-0 top-96 lg:block hidden">
         <SideBar />
         </div>
      </div>
    </>
  );
};

export default Header;
