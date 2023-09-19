import { createContext, useContext } from "react";

export const CoutryCardContext = createContext({
  countriesData: {
    handleSearchInput: ()=> {},
    handleSelectInput: ()=> {},
    handleCountryClick: ()=> {},
    handleChangeCountryDetails: ()=> {},
    handleShowMore: ()=> {},
    handleToggleMode: ()=> {},
    handleCloseButtonClick: ()=> {},
    handShowLess: ()=> {},
    setPreloader: ()=> {},
    preloader: true, 
    selectedCountry: null,
    selectInput: "",
    searchInput: "",
    isDarkMode: false,
    toggle: false,
    view: false,
    page: 1,
    displayedCountries: [],
    countries: [{}],
  },
});

export const useCoutryCardContext = () => useContext(CoutryCardContext);
