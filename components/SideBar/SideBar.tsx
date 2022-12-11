import React from "react";
import { User, PhoneSvg, Vector, MailSvg, Display } from "../Icons/svg";
import Button from "../Chip/Chip"
function SideBar() {
  return (
    <div className="container ">
     <div className="fixed right-2 bottom-80 xl:block lg:hidden md:hidden sm:hidden hidden z-10">
     <div className="bg-primary py-2 w-12 grid grid-rows-3 justify-center gap-6 cursor-pointer rounded">
        <div>
            <button onClick={(e)=>console.log(e.target)}>
              <User />
            </button>
        </div>
        <div>
          <Vector />
        </div>
        <div>
          <MailSvg />
        </div>
        <div>
          <Display />
        </div>
        <div>
          <PhoneSvg />
        </div>
      </div>
     </div>
    </div>
  );
}
export default SideBar;
