import React, { useEffect } from "react";
import { User, PhoneSvg, Vector, MailSvg, Display } from "../Icons/svg";
import AOS from "aos";
import "aos/dist/aos.css";
function SideBar() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="fixed right-0 top-[28rem] bottom-0 xl:block hidden z-10">
      <div
        className="bg-primary py-3 w-12 grid grid-rows-3 justify-center gap-6 rounded"
        data-aos-duration="800"
        data-aos="flip-up"
      >
        <div>
          <button className="cursor-pointer w-10  flex justify-center">
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
  );
}
export default SideBar;
