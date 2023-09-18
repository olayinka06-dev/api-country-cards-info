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
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation />
      {countriesData.toggle ? "" : <SearchInput />}
      {countriesData.toggle ? (
        <CountryDetails
          handleBorderCountryClick={handleChangeCountryDetails}
          country={selectedCountry}
          closeButton={handleCloseButtonClick}
        />
      ) : (
        <CountryCards
          countries={displayedCountries}
          onClick={handleCountryClick}
        />
      )}
      {!countriesData.toggle && displayedCountries.length < countries.length && (
        <div className="w-full items-center py-[15px] flex flex-col justify-center">
          <button
            className="border-none font-[600] text-[14px] flex items-center gap-1 cursor-pointer rounded-[8px] py-[10px] px-[27px] shadow-xl bg-[var(--content)] text-[var(--detailcontent)]"
            onClick={handleShowMore}
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

// "use client";
// import { useEffect, useState } from "react";
// import countryData from "./AllData";
// import Navigation from "./Navigation";
// import SearchInput from "./SearchInput";
// import CountryCards from "./CountryCards";
// import CountryDetails from "./CountryDetails";
// import ScrollToTop from "./ScrollToTop";
// import { MdArrowDownward } from "react-icons/md";

// function Home() {
//   const [countries, setCountries] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [selectInput, setSelectInput] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [toggle, setToggle] = useState(false);
//   const [view, setview] = useState(false);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     setCountries(countryData);
//   }, []);

//   const handleSearchInput = (e) => setSearchInput(e.target.value);
//   const handleSelectInput = (e) => setSelectInput(e.target.value);
//   const handleCountryClick = (country) => {
//     setSelectedCountry(country);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });

//     setToggle(true);
//   };
//   const handleChangeCountryDetails = (borderCountry) => {
//     setSelectedCountry(borderCountry);

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }; // event handler for border country click

//   const handleShowMore = () => setPage(page + 1);

//   const displayedCountries = countries.slice(0, page * 15);

//   const handleToggleMode = () => {
//     setIsDarkMode((prev) => !prev);
//     setview(!view);
//   };

//   const handleCloseButtonClick = () => {
//     setToggle(false);
//     setSelectedCountry(null);
//   };

//   useEffect(() => {
//     const filteredCountries = countryData.filter((country) => {
//       if (
//         searchInput !== "" &&
//         !country.name.toLowerCase().includes(searchInput.toLowerCase())
//       ) {
//         return false;
//       }
//       if (selectInput !== "" && country.region !== selectInput) {
//         return false;
//       }
//       return true;
//     });
//     setCountries(filteredCountries);
//   }, [searchInput, selectInput]);

//   return (
//     <div className={`bg-[var(--mainbody)] ${isDarkMode ? "dark-mode" : "light-mode"}`}>
//       <Navigation view={view} handleToggle={handleToggleMode} />
//       {toggle ? (
//         ""
//       ) : (
//         <SearchInput
//           value={searchInput}
//           onChange={handleSearchInput}
//           selectValue={selectInput}
//           onSelectChange={handleSelectInput}
//         />
//       )}
//       {toggle ? (
//         <CountryDetails
//           handleBorderCountryClick={handleChangeCountryDetails}
//           country={selectedCountry}
//           closeButton={handleCloseButtonClick}
//         />
//       ) : (
//         <CountryCards
//           countries={displayedCountries}
//           onClick={handleCountryClick}
//         />
//       )}
//       {!toggle && displayedCountries.length < countries.length && (
//         <div className="w-full items-center py-[15px] flex flex-col justify-center">
//           <button className="border-none font-[600] text-[14px] flex items-center gap-1 cursor-pointer rounded-[8px] py-[10px] px-[27px] shadow-xl bg-[var(--content)] text-[var(--detailcontent)]" onClick={handleShowMore}>
//             Show More <span><MdArrowDownward/></span>
//           </button>
//         </div>
//       )}
//       {toggle ? "" : <ScrollToTop />}
//     </div>
//   );
// }

// export default Home;
