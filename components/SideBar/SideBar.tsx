import React from "react";
import { User, PhoneSvg, Vector, MailSvg, Display } from "../Icons/svg";
function SideBar() {
  return (
    <div className="container">
      <div className="fixed right-2 bottom-80 xl:block lg:hidden md:hidden sm:hidden hidden z-10">
        <div className="bg-primary py-3 w-12 grid grid-rows-3 justify-center gap-6 rounded">
          <div>
            <button className="cursor-pointer w-10 flex justify-center">
              <a href="#">
                <User />
              </a>
            </button>
          </div>
          <div>
            <button className="cursor-pointer w-10 flex justify-center">
              <a href="#">
                <Vector />
              </a>
            </button>
          </div>
          <div>
            <button className="cursor-pointer w-10 flex justify-center">
              <a href="#">
                <MailSvg />
              </a>
            </button>
          </div>
          <div>
            <button className="cursor-pointer w-10 flex justify-center">
              <a href="#">
                <Display />
              </a>
            </button>
          </div>
          <div>
            <button className="cursor-pointer w-10 flex justify-center">
              <a href="#">
                <PhoneSvg />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
