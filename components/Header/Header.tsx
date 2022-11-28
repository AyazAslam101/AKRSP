import Image from "next/image";
import SideBar from "../SideBar/SideBar";

const Header = () => {
  return (
    <>
      <div className="">
      <div className="py-5 px-2 mx-auto overflow-hidden sm:px:2 programes-container lg:pt-20 md:pt-20 sm:pt-20">
        <div className="lg:grid lg:grid-cols-2 sm:block md:block block gap-20">
          <div className="lg:mt-32 md:10 sm:mt-10 mt-4">
            <h2 className="text-6xl font-bold leading-tight text-black">
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
              Pakistan
            </p>
          </div>
          <div className="container">
            <div className="flex flex-col gap-3 pt-10 mx-auto">
              <div className="grid grid-cols-[350px_600px]">
                <div className="cursor-pointer">
                  <Image src="/Image1.png" width={280} height={280} alt="alt" />
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
                <div className="px-1  cursor-pointer">
                  <Image src="/Image3.png" width={190} height={100} alt="alt" />
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
        <div className="fixed right-0 top-96 xl:block lg:hidden md:hidden sm:hidden hidden z-10">
          <SideBar />
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
