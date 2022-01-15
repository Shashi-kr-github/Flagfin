import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      const country = await response.json();
      setCountry(country);
      console.log("country", country);
    };
    fetchCountryData();
  }, []);
  return (
    <>
      <Link to="/" className="btn btn-light">
        {" "}
        <i className="fas fa-arrow-left"></i>Back Home
      </Link>
      <h1>Country Data</h1>
    </>
  );
};

export default Country;
