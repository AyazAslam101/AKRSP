import Image from "next/image";
import Layout from "../Layout/Layout";
const Alpha = () => {
  return (
    <>
      <div className="py-5 px-2 overflow-hidden sm:px-4 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 md:block lg:gap-2 md:gap-2 lg:gap-1 items-center">
          <div className="lg:mb-0 sm:mb-3">
            <Image
              src="/../public/people.png"
              width={500}
              height={100}
              alt="alt"
            />
          </div>
          <div className="">
            <h1 className="text-primary text-lg -mt-2">PROGRAMMES</h1>
            <p className="text-3xl font-semibold mt-1">Social Pillar</p>
            <p className="text-lg mt-1 leading-8 mb-2">
              AKRSP has built a strong foundation of people’s institutions,
              comprising more than 3700 Village and Women Organizations,
              majority of whom have come together to establish more than 60
              Local Support Organizations as their representative institutions.
              These LSOs take on a multi-sector agenda in partnership with a
              wide array of partners including the local government departments.
            </p>
            <button className="mt-2 bg-primary px-2 py-2 rounded text-white text-sm">
              Read More
            </button>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 md:block lg:gap-2 md:gap-2 mt-8 items-center">
          <div>
            <h1 className="text-primary text-lg -mt-1">PROGRAMMES</h1>
            <p className="text-3xl font-semibold mt-1 textback">
              Social Pillar
            </p>
            <p className="text-lg mt-1 leading-8 py-1">
              AKRSP has built a strong foundation of people’s institutions,
              comprising more than 3700 Village and Women Organizations,
              majority of whom have come together to establish more than 60
              Local Support Organizations as their representative institutions.
              These LSOs take on a multi-sector agenda in partnership with a
              wide array of partners including the local government departments.
            </p>
            <button className="mt-5 bg-primary px-2 py-2 rounded text-white text-sm">
              Read More
            </button>
          </div>
          <div className="lg:mt-0 sm:mt-3 md:mt-3 mt-3">
            <Image
              src="/../public/people.png"
              width={500}
              height={100}
              alt="alt"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Alpha;
