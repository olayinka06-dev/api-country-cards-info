import React from "react";
import { useCoutryCardContext } from "../provider/Context";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

export const ShowMore = () => {
  const { countriesData } = useCoutryCardContext();
  return (
    <div className="">
      <button
        className="border-none font-[600] text-[14px] flex items-center gap-1 cursor-pointer rounded-[8px] py-[10px] px-[27px] shadow-xl bg-[var(--content)] text-[var(--detailcontent)]"
        onClick={countriesData.handleShowMore}
      >
        Show More{" "}
        <span>
          <MdArrowDownward />
        </span>
      </button>
    </div>
  );
};
export const ShowLess = () => {
  const { countriesData } = useCoutryCardContext();
  return (
    <div className="">
      <button
        className="border-none font-[600] text-[14px] flex items-center gap-1 cursor-pointer rounded-[8px] py-[10px] px-[27px] shadow-xl bg-[var(--content)] text-[var(--detailcontent)]"
        onClick={countriesData.handShowLess}
      >
        Show Less{" "}
        <span>
          <MdArrowUpward />
        </span>
      </button>
    </div>
  );
};
