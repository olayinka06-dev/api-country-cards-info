import { useEffect, useState } from 'react';
import countryData from './AllData';
import Navigation from './Navigation';
import SearchInput from './SearchInput';
import CountryCards from './CountryCards';
import CountryDetails from './CountryDetails';
import './Style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectInput, setSelectInput] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [sliderAnimate, setSliderAnimate] = useState(false);


  useEffect(() => {
    setCountries(countryData)
    AOS.init({
      duration: 1000,
      easing: 'ease',
      delay: 100
    })
  }, [])

  const handleSearchInput = e => setSearchInput(e.target.value);
  const handleSelectInput = e => setSelectInput(e.target.value);
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setToggle(true)
  };
  const handleChangeCountryDetails = (borderCountry) => {
    setSelectedCountry(borderCountry);
    setSliderAnimate(true)
    setTimeout(() => {
      AOS.refresh();
    }, 0);
  } // event handler for border country click


  const handleToggleMode = () => setIsDarkMode(prev => !prev);
  const handleCloseButtonClick = () => {
    setToggle(false)
  };

  const filteredCountries = countries.filter(country => {
    if (searchInput !== '' && !country.name.toLowerCase().includes(searchInput.toLowerCase())) {
      return false;
    }
    if (selectInput !== '' && country.region !== selectInput) {
      return false;
    }
    return true;
  });


  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navigation handle={handleToggleMode} />
      {
        toggle ? "" : (<SearchInput value={searchInput} onChange={handleSearchInput} selectValue={selectInput} onSelectChange={handleSelectInput} />)
      }
      {
        toggle ? (<CountryDetails sliderAnimate={sliderAnimate} handleBorderCountryClick={handleChangeCountryDetails} country={selectedCountry} closeButton={handleCloseButtonClick} />) : (<CountryCards countries={filteredCountries} onClick={handleCountryClick} />)
      }
    </div>
  );
}

export default Home;