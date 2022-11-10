import React from "react";
import People from "../../public/people.png";
import Image from "next/image";
import Layout from "../Layout";
const Header = () => {
  return (
    <>
      <Layout>
        <div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Image src={People} alt="alt" />
            </div>
            <div>
              <h1 className="text-primary text-lg">PROGRAMMES</h1>
              <p className="text-3xl font-semibold	mt-2">Social Pillar</p>
              <p className="text-lg  mt-3 leading-8">
                AKRSP has built a strong foundation of people’s institutions,
                comprising more than 3700 Village and Women Organizations,
                majority of whom have come together to establish more than 60
                Local Support Organizations as their representative
                institutions. These LSOs take on a multi-sector agenda in
                partnership with a wide array of partners including the local
                government departments.
              </p>
              <button className="mt-5 bg-primary px-3 py-3 rounded text-white text-sm">
                Read More
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div>
              <h1 className="text-primary text-lg">PROGRAMMES</h1>
              <p className="text-3xl font-semibold mt-2 textback">
                Social Pillar
              </p>
              <p className="text-lg mt-3 leading-8">
                AKRSP has built a strong foundation of people’s institutions,
                comprising more than 3700 Village and Women Organizations,
                majority of whom have come together to establish more than 60
                Local Support Organizations as their representative
                institutions. These LSOs take on a multi-sector agenda in
                partnership with a wide array of partners including the local
                government departments.
              </p>
              <button className="mt-5 bg-primary px-3 py-3 rounded text-white text-sm">
                Read More
              </button>
            </div>
            <div>
              <Image src={People} alt="alt" className="bg-repeat" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Header;
