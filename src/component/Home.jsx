"use client";
import Navigation from "./Navigation";
import SearchInput from "./SearchInput";
import CountryCards from "./CountryCards";
import CountryDetails from "./CountryDetails";
import ScrollToTop from "./ScrollToTop";
import { MdArrowDownward } from "react-icons/md";
import { useCoutryCardContext } from "./provider/Context";

function Home() {
  const { countriesData } = useCoutryCardContext();
  return (
    <div
      className={`bg-[var(--mainbody)] ${
        countriesData.isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation />
      {countriesData.toggle ? "" : <SearchInput />}
      {countriesData.toggle ? <CountryDetails /> : <CountryCards />}
      {!countriesData.toggle &&
        countriesData.displayedCountries.length <
          countriesData.countries.length && (
          <div className="w-full items-center py-[15px] flex flex-col justify-center">
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
        )}
      {countriesData.toggle ? "" : <ScrollToTop />}
    </div>
  );
}

export default Home;
