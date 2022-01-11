import React, { useState, useEffect } from "react";
const url = "https://restcountries.com/v3.1/all";

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
  sort(countries);
  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const flag = country.flags.png;
          //   console.log(flag);
          const name = country.name.official;
          const population = country.population;
          const region = country.continents;
          const capital = country.capital;
          //   console.log(name);
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
