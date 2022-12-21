import React, { useState } from "react";
import Image from "next/image";
import MenuButton from "../Button/Button";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const navigation = {
  main: [
    {
      name: "About us",
      type: "show-arrow",
      sub_main: [
        { name: "Who We Are", href: "/who-we-are", type: "show-arrow" },
        { name: "Governance", href: "/governance" },
        { name: "Management Structure", href: "/management" },
      ],
    },
    {
      name: "Programmes",
      type: "show-arrow",
      sub_main: [
        { name: "Economic Pillar", href: "/economic" },
        { name: "Social Pillar", href: "/social" },
      ],
    },
    {
      name: "Projects",
      type: "show-arrow",
      sub_main: [
        { name: "Ongoing ", href: "/ongoing" },
        { name: "Accomplished", href: "/accomplished" },
      ],
    },
    {
      name: "Opportunities",
      type: "show-arrow",
      sub_main: [
        { name: "Jobs", href: "/jobs" },
        { name: "Consultancy", href: "/consultancy" },
        { name: "Services’ Procurement", href: "/services" },
      ],
    },
    {
      name: "Gallery",
      type: "show-arrow",
      sub_main: [
        { name: "Photo Gallery", href: "/photo" },
        { name: "Photo Gallery", href: "/video" },
      ],
    },
    {
      name: "Communications",
      type: "show-arrow",
      sub_main: [
        { name: "Publications", href: "/publications" },
        { name: "Research", href: "/research" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Annual Reports", href: "/annual-reports" },
        { name: "Brochures", href: "/brochures" },
      ],
    },
    { name: "News", href: "#" },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container">
        <div className="bg-bgprimary fixed left-0 z-10 w-full">
          <div className="py-5 container lg:px-10 lg:pr-12 px-9 ">
            <div className="flex-shrink-0 lg:flex sm:block justify-center items-baseline justify-between">
              <div>
                <Link href="/">
                  <Image
                    src="/Logo.png"
                    alt="Picture of the author"
                    width={100}
                    height={60}
                  />
                </Link>
              </div>
              <div className="xl:block hidden">
                <div className="flex">
                  {navigation.main.map((item, key) => {
                    return (
                      <Menu
                        as="div"
                        key={key}
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex font-medium text-base text-secondary hover:text-primary focus:text-primary whitespace-nowrap p-4 cursor-pointer flex items-center focus:outline-none ">
                            <a href={item.href}>{item.name}</a>
                            {item.type === "show-arrow" && (
                              <ChevronDownIcon
                                className="-mr-1 ml-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </Menu.Button>
                        </div>

                        {item.type === "show-arrow" && (
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute -right-10 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                {item?.sub_main?.map((items, key) => {
                                  return (
                                    <Menu.Item key={key}>
                                      {({ active }) => (
                                        <a
                                          href={items.href}
                                          className={classNames(
                                            active
                                              ? "bg-gray-100 text-primary"
                                              : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                          )}
                                        >
                                          {items.name}
                                        </a>
                                      )}
                                    </Menu.Item>
                                  );
                                })}
                              </div>
                            </Menu.Items>
                          </Transition>
                        )}
                      </Menu>
                    );
                  })}
                </div>
              </div>
              <div className="absolute shrink top-2 right-0 z-10">
                <MenuButton setOpen={setOpen} open={open} navigation={navigation}>
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
                </MenuButton>
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
