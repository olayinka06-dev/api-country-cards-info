import React from "react";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";
import { useCoutryCardContext } from "../provider/Context";

function Navigation() {
  const { countriesData } = useCoutryCardContext();
  return (
    <nav className="w-full h-[10vh] flex items-center justify-between px-[20px] md:px-[50px] z-[1000] sticky top-0 shadow-xl bg-[var(--content)] text-[var(--contentcolor)]">
      <h2 className="text-[18px] md:text-[25px]">Where in the World?</h2>

      <div className="flex items-center gap-3">
        <span className={`font-[600] text-[var(--contentcolor)]`}>
          {" "}
          <MdOutlineLightMode className="text-[20px] md:text-[30px]" />
        </span>
        <label htmlFor="toggleButton" className="relative">
          <input
            type="checkbox"
            id="toggleButton"
            className="sr-only"
            checked={countriesData.view}
            onChange={countriesData.handleToggleMode}
          />
          <div
            className={`w-12 h-6 ${
              countriesData.view ? "bg-[rgb(3,40,91)]" : "bg-[rgb(3,40,91)]"
            } rounded-full transition`}
          >
            <div
              className={`absolute w-4 h-4 bg-white rounded-full top-1 left-1 transition-transform transform ${
                countriesData.view ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </label>
        <span className={`font-[600] text-[var(--contentcolor)]`}>
          <MdOutlineNightlight className=" text-[20px] md:text-[30px]" />
        </span>
      </div>
    </nav>
  );
}
export default Navigation;
