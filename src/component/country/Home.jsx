"use client";
import Navigation from "./Navigation";
import SearchInput from "./SearchInput";
import CountryCards from "./CountryCards";
import CountryDetails from "./CountryDetails";
import ScrollToTop from "./ScrollToTop";
import { useCoutryCardContext } from "../provider/Context";
import { ShowLess, ShowMore } from "../entites/Entity";
import Preloader from "../entites/Preloader";

function Home() {
  const { countriesData } = useCoutryCardContext();
  return (
    <>
      {countriesData.preloader ? (
        <Preloader />
      ) : (
        <div
          className={`bg-[var(--mainbody)] ${
            countriesData.isDarkMode ? "dark-mode" : "light-mode"
          }`}
        >
          <Navigation />
          {countriesData.toggle ? "" : <SearchInput />}
          {countriesData.toggle ? <CountryDetails /> : <CountryCards />}
          <div className="flex flex-row gap-4 items-center justify-center py-3">
            {!countriesData.toggle &&
              countriesData.displayedCountries.length <
                countriesData.countries.length && <ShowMore />}
            {!countriesData.toggle && countriesData.page > 1 && <ShowLess />}
          </div>
          {countriesData.toggle ? "" : <ScrollToTop />}
        </div>
      )}
    </>
  );
}

export default Home;
