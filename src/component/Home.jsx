import { useEffect, useState } from "react";
import countryData from "./AllData";
import Navigation from "./Navigation";
import SearchInput from "./SearchInput";
import CountryCards from "./CountryCards";
import CountryDetails from "./CountryDetails";
import "./Style.css";
import ScrollToTop from "./ScrollToTop";

function Home() {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [view, setview] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setCountries(countryData);
  }, []);

  const handleSearchInput = (e) => setSearchInput(e.target.value);
  const handleSelectInput = (e) => setSelectInput(e.target.value);
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    
    setToggle(true);
  };
  const handleChangeCountryDetails = (borderCountry) => {
    setSelectedCountry(borderCountry);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }; // event handler for border country click

  const handleShowMore = () => setPage(page + 1);

  const displayedCountries = countries.slice(0, page * 15);

  const handleToggleMode = () => {
    setIsDarkMode((prev) => !prev);
    setview(!view);
  };

  const handleCloseButtonClick = () => {
    setToggle(false);
  };

  useEffect(() => {
    const filteredCountries = countryData.filter((country) => {
      if (
        searchInput !== "" &&
        !country.name.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return false;
      }
      if (selectInput !== "" && country.region !== selectInput) {
        return false;
      }
      return true;
    });
    setCountries(filteredCountries);
  }, [searchInput, selectInput]);

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Navigation view={view} handle={handleToggleMode} />
      {toggle ? (
        ""
      ) : (
        <SearchInput
          value={searchInput}
          onChange={handleSearchInput}
          selectValue={selectInput}
          onSelectChange={handleSelectInput}
        />
      )}
      {toggle ? (
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
      {!toggle && displayedCountries.length < countries.length && (
        <div className="item-center">
          <button className="show-more" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
      {toggle ? "" : <ScrollToTop />}
    </div>
  );
}

export default Home;
