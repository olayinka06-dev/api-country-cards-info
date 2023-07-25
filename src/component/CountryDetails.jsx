import React, { useEffect } from 'react';
import countryData from './AllData';
import './Style.css';
import AOS  from 'aos';
import 'aos/dist/aos.css';


function CountryDetails({ country, closeButton, handleBorderCountryClick }) {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease',
            delay: 500,
            once: true
        })
    }, []);

    if (!country) {
        return null;
    }



    return (
        <>
            <div className={`details-wrapper`}>
                <div className="btn-wrapper">
                    <button className='close-button' onClick={closeButton}>Close</button>
                </div>
                <div className="card">
                    <div data-aos="fade-left" className="picture">
                        <img src={country.flags.png} alt={country.flags.png} />
                    </div>
                    <div data-aos="fade-right" className="content-after">
                        <h3>{country.name}</h3>
                        <div className="about-after">
                            <div className="one">
                                <p><span>Native Name: </span>{country.nativeName}</p>
                                <p><span>Population:</span> {country.population}</p>
                                <p><span>Region:</span> {country.region}</p>
                                <p><span>Sub Region: </span>{country.subregion}</p>
                                <p><span>Capital:</span> {country.capital}</p>
                            </div>
                            <div className="two">
                                <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
                                <p><span>Currencies: </span>{country.currencies.map(c => c.name)}</p>
                                <p><span>Languages: </span>{country.languages.map(l => l.name + " ")}</p>
                            </div>
                        </div>
                        <div className="base">
                            <p><span>Border Countries: </span></p>
                            <div className='border-wrapper'>
                                {country.borders.map(borderCode => {
                                    const borderCountry = countryData.find(country => country.alpha3Code === borderCode);
                                    if (borderCountry) {
                                        return (
                                            <p key={borderCountry.alpha3Code} onClick={() => handleBorderCountryClick(borderCountry)} className='borders'>{borderCountry.name}</p>
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