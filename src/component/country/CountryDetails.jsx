import React, { useEffect } from "react";
import countryData from "./AllData";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdArrowBack } from "react-icons/md";
import { useCoutryCardContext } from "../provider/Context";

function CountryDetails() {
  const { countriesData } = useCoutryCardContext();

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease",
      delay: 500,
    });
  }, []);

  if (!countriesData.selectedCountry) {
    return null;
  }

  return (
    <>
      <div
        className={`bg-[var(--mainbody)] min-h-screen w-full flex flex-col items-center justify-center gap-[40px] overflow-x-hidden py-[20px] px-[20px] md:px-[80px]`}
      >
        <div data-aos="fade-down" className="w-full flex flex-col items-start justify-start">
          <button
            className="bg-[var(--content)] rounded-xl scale-100 hover:scale-110 transition-all flex items-center gap-1 text-[var(--contentcolor)] px-[25px] py-[10px] shadow-xl"
            onClick={countriesData.handleCloseButtonClick}
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
              src={countriesData.selectedCountry.flags.png}
              className="h-[50vh] rounded-2xl"
              alt={countriesData.selectedCountry.flags.png}
            />
          </div>
          <div
            data-aos="fade-right"
            className="w-full md:w-1/2 flex flex-col gap-[10px]"
          >
            <h3 className="text-[var(--contentcolor)]">
              {countriesData.selectedCountry.name}
            </h3>
            <div className="w-full flex flex-col md:flex-row gap-[30px] text-[var(--detailcontent)]">
              <div className="w-full flex flex-col gap-[10px]">
                <p>
                  <span>Native Name: </span>
                  {countriesData.selectedCountry.nativeName}
                </p>
                <p>
                  <span>Population:</span>{" "}
                  {countriesData.selectedCountry.population}
                </p>
                <p>
                  <span>Region:</span> {countriesData.selectedCountry.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {countriesData.selectedCountry.subregion}
                </p>
                <p>
                  <span>Capital:</span> {countriesData.selectedCountry.capital}
                </p>
              </div>
              <div className="w-full flex flex-col gap-[10px]">
                <p>
                  <span>Top Level Domain: </span>
                  {countriesData.selectedCountry.topLevelDomain}
                </p>
                <p>
                  <span>Currencies: </span>
                  {countriesData.selectedCountry.currencies.map((c) => c.name)}
                </p>
                <p>
                  <span>Languages: </span>
                  {countriesData.selectedCountry.languages.map(
                    (l) => l.name + " "
                  )}
                </p>
                <p>
                  <span>Time Zone: </span>
                  {countriesData.selectedCountry.timezones.map((l) => l + " ")}
                </p>
                <p>
                  <span>Lat & Lon: </span>
                  {countriesData.selectedCountry.latlng.map(
                    (l) => l + +"  " + " , "
                  )}
                </p>
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col items-start md:items-center gap-[10px] mt-0 pt-[25px] md:mt-[50px] bg-[var(--mainbody)] text-[var(--contentcolor)]">
              <p>
                <span>Border Countries: </span>
              </p>
              <div className="w-full md:w-auto grid grid-cols-3 gap-[10px] bg-[var(--mainbody)]">
                {countriesData.selectedCountry.borders.map((borderCode) => {
                  const borderCountry = countryData.find(
                    (country) => country.alpha3Code === borderCode
                  );
                  if (borderCountry) {
                    return (
                      <button
                        key={borderCountry.alpha3Code}
                        onClick={() =>
                          countriesData.handleChangeCountryDetails(
                            borderCountry
                          )
                        }
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
