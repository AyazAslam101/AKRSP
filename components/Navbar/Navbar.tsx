import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";
const navigation = {
  main: [
    { name: "About us", href: "/terms-and-conditions" },
    { name: "Programmes", href: "/privacy-policy" },
    { name: "Projects", href: "/Projects" },
    { name: "Opportunities", href: "/Opportunities" },
    { name: "Gallery", href: "/Gallery" },
    { name: "Communications", href: "/Communications" },
    { name: "News", href: "/News" },
  ],
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container">
        <div className="bg-bgprimary fixed left-0 z-10 w-full">
          <div className="py-5 container lg:px-10 lg:pr-5 px-9 ">
            <div className="flex-shrink-0 lg:flex sm:block justify-center items-baseline justify-between">
              <div>
                <a href="">
                  <Image
                    src="/Logo.png"
                    alt="Picture of the author"
                    width={100}
                    height={60}
                  />
                </a>
              </div>
              <div className="xl:block hidden">
                <div className="flex">
                  {navigation.main.map((item) => (
                    <div key={item.name} className="px-2 md:px-1 py-2 md:py-1">
                      <a
                        href="#"
                        className="font-medium text-xl text-secondary hover:text-primary focus:text-primary whitespace-nowrap p-4 cursor-pointer flex items-center"
                      >
                       {item.name}
                       
                        <svg
                          className="fill-current h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute shrink top-2 right-0 z-10">
                <Button setOpen={setOpen} open={open} navigation={navigation}>
                  <svg
                    height="40"
                    viewBox="0 0 24 24"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="heroicon-ui"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <hr className="shadow-sm" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
