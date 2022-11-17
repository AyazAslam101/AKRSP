import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Button from "../Button/Button";
const navigation = {
  main: [
    { name: "About us", href: "/terms-and-conditions" },
    { name: "Programmes", href: "/privacy-policy" },
    { name: "Projects", href: "/donors" },
    { name: "Opportunities", href: "/donors" },
    { name: "Gallery", href: "/donors" },
    { name: "Communications", href: "/donors" },
    { name: "News", href: "/donors" },
  ],
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mx-auto sm:px-4 lg:px-8 m-1">
        <div className="flex-shrink-0 lg:flex sm:block justify-enter items-baseline justify-around">
          <div className="px-2 ml-2">
            <a href="/">
              <Image
                src={Logo}
                alt="Picture of the author"
                width={80}
                height={50}
              />
            </a>
          </div>
          <div className="lg:block lg:block hidden">
            <div className="flex">
              {navigation.main.map((item) => (
                <div key={item.name} className="px-2 md:px-1 py-2 md:py-1">
                  <a
                    // href={item.href}
                    className="font-medium text-normal text-secondary p-3"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute shrink  top-2 right-0 ">
            <Button setOpen={setOpen} open={open} navigation={navigation}>
              <svg
                height="26"
                viewBox="0 0 24 24"
                width="26"
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
    </>
  );
};

export default Navbar;
