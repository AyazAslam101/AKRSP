import Image from "next/image";
const Programmes = () => {
  return (
    <>
      <div className="py-5 px-2 mx-auto overflow-hidden sm:px:2 container">
        <div className="lg:grid grid-cols-2 md:block md:gap-4 lg:gap-4  items-center ">
          <div className="lg:mb-0 mb-3">
            <Image
              src="/../public/people.png"
              width={750}
              height={10}
              alt="alt"
            /> 
          </div>
          <div className="lg:max-w-2xl">
            <h1 className="text-primary font-medium text-3xl">PROGRAMMES</h1>
            <p className="text-4xl font-semibold mt-3">Social Pillar</p>
            <p className="text-2xl tracking-wider leading-8 lg:pb-8 lg:pt-4 mb-2">
              AKRSP has built a strong foundation of people’s institutions
              comprising more than 3700 Village and Women Organizations,
              majority of whom have come together to establish more than 60
              Local Support Organizations as their representative institutions.
              These LSOs take on a multi-sector agenda in partnership with a
              wide array of partners including the local government departments.
            </p>
            <button className="bg-primary px-4 py-3 rounded text-white text-lg">
              Read More
            </button>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 md:block md:gap-4 lg:gap-4 items-center mt-10">
          <div className="max-w-2xl">
            <h1 className="text-primary font-medium text-2xl">PROGRAMMES</h1>
            <p className="text-4xl font-semibold mt-3">Economic Pillar</p>
            <p className="text-2xl tracking-wider leading-8 lg:pb-8 lg:pt-4 mb-2">
              AKRSP has built a strong foundation of people’s  institutions,
              comprising more than 3700 Village and Women Organizations,
              majority of whom have come together to establish more than 60
              Local Support Organizations as their representative institutions.
              These LSOs take on a multi-sector agenda in partnership with a
              wide array of partners including the local government departments.
            </p>
            <button className="bg-primary px-4 py-3 rounded text-white text-lg">
              Read More
            </button>
          </div>
          <div className="lg:mt-0 sm:mt-3 md:mt-3 mt-3 flex-1">
            <Image
              src="/../public/people.png"
              width={680}
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
