import React, { useEffect } from 'react';
import './Style.css';
import AOS  from 'aos';
import 'aos/dist/aos.css';


function CountryCards({ countries, onClick }) {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease',
            delay: 500,
            once: true
        })
    }, []);
    return (
        <div className="enclosure">
            {countries.map(country => (
                <div data-aos="fade-up" className="container" key={country.alpha3Code} onClick={() => onClick(country)}>
                    <div className="field">
                        <img src={country.flags.png} alt={country.flags.png} />
                        <div className="content">
                            <h3>{country.name}</h3>
                            <div className="about">
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