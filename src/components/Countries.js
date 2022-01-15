import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const url = "http://restcountries.com/v3.1/all"; // fetch from this url

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    console.log(response);

    const countries = await response.json();
    console.log("countries", countries);
    setCountries(countries);
    console.log("countries", countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  const removeCountry = (numericCode) => {
    const newCountry = countries.filter((country) => {
      console.log("line24", country.numericCode);
      return country.numericCode != numericCode;
    });
    //
    //   console.log(country.numericCode)
    //   return (country.numericCode != numericCode)
    // );
    setCountries(newCountry);
  };
  const sort = (countries) => {
    for (let i = 0; i < countries.length; i++) {
      for (let j = 0; j < countries.length - i; j++) {
        if (countries[i].name.official < countries[j].name.official) {
          let temp = countries[i];
          countries[i] = countries[j];
          countries[j] = temp;
        }
      }
    }
    return countries;
  };
  sort(countries); // sort by name
  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const flag = country.flags.svg;
          //   console.log(flag);
          const name = country.name.common;
          //  console.log(name);
          const population = country.population;
          const region = country.continents;
          const capital = country.capital;
          const numericCode = country.ccn3;
          // console.log(numericCode);
          console.log(capital, region);
          return (
            <article key={name}>
              <div>
                <img src={flag} alt={name} />
                <div className="details">
                  <h3>{name}</h3>
                  <h4>
                    Population :<span>{population}</span>
                  </h4>
                  <h4>
                    Region : <span>{region}</span>
                  </h4>
                  <h4>
                    Capital : <span>{capital}</span>
                  </h4>
                  <div>
                    <Link to={`/countries/${name}`} className="btn">
                      Learn More
                    </Link>
                    <button
                      className="btn"
                      onClick={() => removeCountry(numericCode)}
                    >
                      Remove Country
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
