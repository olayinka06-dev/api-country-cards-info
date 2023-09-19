import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCoutryCardContext } from "./provider/Context";

function CountryCards() {
  const { countriesData } = useCoutryCardContext();
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease",
      delay: 500,
      once: true,
    });
  }, []);
  return (
    <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[40px] gap-y-[50px] py-[30px] md:px-[40px] px-[30px] lg:px-[50px]">
      {(!countriesData.preloader ? countriesData.displayedCountries : countriesData.countries).map((country) => (
        <div
          data-aos="fade-up"
          className="flex flex-col rounded-[20px] shadow-xl"
          key={country.alpha3Code}
          onClick={() => countriesData.handleCountryClick(country)}
        >
          <div className="rounded-[20px]">
            <img
              src={country.flags.png}
              className="w-full h-[30vh] cursor-pointer rounded-t-[8px]"
              alt={country.flags.png}
            />
            <div className="w-full gap-[10px] flex flex-col p-[30px] rounded-b-[8px] bg-[var(--content)] text-[var(--contentcolor)]">
              <h3>{country.name}</h3>
              <div className="w-full flex flex-col gap-[10px]">
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountryCards;
