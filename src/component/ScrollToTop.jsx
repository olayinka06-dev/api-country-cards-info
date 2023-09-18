import React, { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";

const ScrollToTop = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const scrollUp = () => {
      if (
        document.body.scrollTop >= 100 ||
        document.documentElement.scrollTop >= 100
      ) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", scrollUp);

    return () => {
      window.removeEventListener("scroll", scrollUp);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      <span
        className="backup p-[15px] fixed bottom-[5%] right-[4%] cursor-pointer"
        style={{
          visibility: `${showArrow ? "visible" : "hidden"}`,
          opacity: `${showArrow ? "1" : "0"}`,
        }}
        onClick={handleScrollUp}
      >
        <MdArrowUpward className="text-[20px] text-[var(--contentcolor)]" />
      </span>
      <style jsx="true">{`
            .backup{
            animation: scroll-up 4s linear infinite;
            transition: all 1s ease;
          
            
            }
          
            @keyframes scroll-up {
              0% {
                transform: translateY(20px);
              }
              50% {
                transform: translateY(0px);
              }
              100% {
                transform: translateY(20px);
              }
        `}</style>
    </div>
  );
};

export default ScrollToTop;
