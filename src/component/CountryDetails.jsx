import React, { useEffect } from "react";
import countryData from "./AllData";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdArrowBack } from "react-icons/md";

function CountryDetails({ country, closeButton, handleBorderCountryClick }) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease",
      delay: 500,
    });
  }, []);

  if (!country) {
    return null;
  }

  return (
    <>
      <div
        className={`bg-[var(--mainbody)] min-h-screen w-full flex flex-col items-center justify-center gap-[40px] overflow-x-hidden py-[20px] px-[20px] md:px-[80px]`}
      >
        <div className="w-full flex flex-col items-start justify-start">
          <button
            className="bg-[var(--content)] flex items-center gap-1 text-[var(--contentcolor)] px-[25px] py-[10px] shadow-xl"
            onClick={closeButton}
          >
            <span>
              <MdArrowBack />
            </span>
            Close
          </button>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-[30px] py-[30px]">
          <div data-aos="fade-left" className="w-full md:w-1/2">
            <img
              src={country.flags.png}
              className="h-[50vh] rounded-2xl"
              alt={country.flags.png}
            />
          </div>
          <div
            data-aos="fade-right"
            className="w-full md:w-1/2 flex flex-col gap-[10px]"
          >
            <h3 className="text-[var(--contentcolor)]">{country.name}</h3>
            <div className="w-full flex flex-col md:flex-row gap-[30px] text-[var(--detailcontent)]">
              <div className="w-full flex flex-col gap-[10px]">
                <p>
                  <span>Native Name: </span>
                  {country.nativeName}
                </p>
                <p>
                  <span>Population:</span> {country.population}
                </p>
                <p>
                  <span>Region:</span> {country.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span>Capital:</span> {country.capital}
                </p>
              </div>
              <div className="w-full flex flex-col gap-[10px]">
                <p>
                  <span>Top Level Domain: </span>
                  {country.topLevelDomain}
                </p>
                <p>
                  <span>Currencies: </span>
                  {country.currencies.map((c) => c.name)}
                </p>
                <p>
                  <span>Languages: </span>
                  {country.languages.map((l) => l.name + " ")}
                </p>
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col items-start md:items-center gap-[10px] mt-0 pt-[25px] md:mt-[50px] bg-[var(--mainbody)] text-[var(--contentcolor)]">
              <p>
                <span>Border Countries: </span>
              </p>
              <div className="w-full md:w-auto grid grid-cols-3 gap-[10px] bg-[var(--mainbody)]">
                {country.borders.map((borderCode) => {
                  const borderCountry = countryData.find(
                    (country) => country.alpha3Code === borderCode
                  );
                  if (borderCountry) {
                    return (
                      <button
                        key={borderCountry.alpha3Code}
                        onClick={() => handleBorderCountryClick(borderCountry)}
                        className="text-[var(--detailcontent)] bg-[var(--content)] py-[10px] px-[7px] rounded-[8px] cursor-pointer text-[13px] font-[600] w-full shadow-xl"
                      >
                        {borderCountry.name}
                      </button>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CountryDetails;
