import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const MenuButton = (props: {
  open?: any;
  children?: any;
  setOpen?: any;
  navigation?: any;
}) => {
  const { setOpen, navigation, open } = props;
  return (
    <div className="xl:hidden block z-10 container ">
      <button
        className="mt-6 mr-4"
        onClick={() => {
          setOpen(true);
        }}
      >
        {props.children}
      </button>
      {open && (
        <div className="relative -top-20 -right-1 w-96 h-screen bg-tertiary">
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="relative w-30 top-2 left-4 border-2 px-6 py-2 rounded bg-white bg-white px-5 py-2 rounded-md hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:z-10 focus:ring-primary-500 focus:border-2"
          >
            Close
          </button>

          {navigation.main.map((item: any, key: any) => (
            <Menu as="div" key={key} className="relative block ml-1">
              <div>
                <Menu.Button className="inline-flex font-medium text-base text-secondary hover:text-primary focus:text-primary whitespace-nowrap p-4 cursor-pointer flex items-center focus:outline-none ">
                  {item.name}
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5 xl:block hidden"
                    aria-hidden="true"
                  />
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
                  <Menu.Items className="absolute right-10 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {item?.sub_main?.map((items: any, key: any) => {
                        return (
                          <Menu.Item key={key}>
                            {({ active }) => (
                              <a
                                href="#"
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
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuButton;
