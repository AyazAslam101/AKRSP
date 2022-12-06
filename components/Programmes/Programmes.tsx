import Image from "next/image";
const Programmes = () => {
  return (
    <>
      <div className="py-5 overflow-hidden sm:px:2 programes-container">
        <div className="lg:grid lg:grid-cols-2 md:block sm:block block md:gap-4 lg:gap-4  items-center ">
          <div className="lg:mb-0 mb-3 cursor-pointer">
            <Image
              src="/../public/people.png"
              width={700}
              height={10}
              alt="alt"
            />
          </div>
          <div className="lg:ml-4">
            <h1 className="text-primary font-medium text-3xl">PROGRAMMES</h1>
            <p className="text-4xl font-semibold mt-3">Social Pillar</p>
            <p className="text-2xl tracking-wide  lg:pb-6 lg:pt-4 mb-1">
              AKRSP has built a strong foundation of people’s institutions
              comprising more than 3700 Village and Women Organizations,
              majority of whom have come together to establish more than 60
              Local Support Organizations as their representative institutions.
              These LSOs take on a multi-sector agenda in partnership with a
              wide array of partners including the local government departments.
            </p>
            <button className="bg-primary px-4 py-3 rounded text-white text-lg">
              Real More
            </button>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 md:block md:gap-4 lg:gap-4 items-center mt-10">
          <div>
            <h1 className="text-primary font-medium text-2xl">PROGRAMMES</h1>
            <p className="text-4xl font-semibold mt-2">Economic Pillar</p>
            <p className="text-2xl tracking-wider leading-8 lg:pb-6 lg:pt-4 mb-1">
              Sustained improvements in the quality of life GBC’s population
              hinges upon inclusive economic growth and shared employment
              opportunities. AKRSP’s efforts in developing economic
              infrastructure (e.g. roads, irrigation and land development
              projects), promoting agricultural productivity, and improving
              farming skills have been instrumental in this regard by increasing
              farm surplus.
            </p>
            <button className="bg-primary px-4 py-3 rounded text-white text-lg">
              Read More
            </button>
          </div>
          <div className="lg:mt-0 sm:mt-3 md:mt-3 mt-3 lg:ml-2 cursor-pointer">
            <Image
              src="/../public/image13.png"
              width={700}
              height={100}
              alt="alt"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Programmes;
