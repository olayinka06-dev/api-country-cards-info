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
    selectedCountry: null,
    selectInput: "",
    searchInput: "",
    isDarkMode: false,
    toggle: false,
    view: false,
    displayedCountries: [],
    countries: [{}],
  },
});

export const useCoutryCardContext = () => useContext(CoutryCardContext);
