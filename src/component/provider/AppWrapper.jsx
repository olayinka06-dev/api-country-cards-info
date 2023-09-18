import React, { useEffect, useState } from "react";
import { CoutryCardContext } from "./Context";
import App from "../../App";
import countryData from "../AllData";

const AppWrapper = () => {
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

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
    setSelectedCountry(null);
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

  const countriesData = {
    handleSearchInput,
    handleSelectInput,
    handleCountryClick,
    handleChangeCountryDetails,
    handleShowMore,
    handleToggleMode,
    handleCloseButtonClick,
    selectedCountry,
    isDarkMode,
    toggle,
    displayedCountries,
    view,
    selectInput,
    searchInput,
    countries,
  };

  return (
    <CoutryCardContext.Provider value={{ countriesData }}>
      <App />
    </CoutryCardContext.Provider>
  );
};

export default AppWrapper;
