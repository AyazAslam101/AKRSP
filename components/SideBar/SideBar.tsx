import React from "react";
import { User, PhoneSvg, Vector, MailSvg, Display } from "../Icons/svg";
function SideBar() {
  return (
    <div className="container">
      <div className="bg-primary py-2 w-12 grid grid-rows-3 justify-center gap-6 cursor-pointer rounded">
        <div>
          <User />
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
  );
}
export default SideBar;
