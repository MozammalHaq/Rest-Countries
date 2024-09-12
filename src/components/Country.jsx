import { useState } from "react";
import "./country.css";

const Country = ({ country, hanldeVisited }) => {
  const [bgc, setBgc] = useState(false);

  const changeBgColor = () => {
    setBgc(!bgc);
  };

  // console.log(country);
  const { name, flags, capital, population } = country;
  return (
    <div className={`country ${bgc && "bgc"}`}>
      <img src={flags?.png} alt="" />
      <p style={{ color: bgc ? "tomato" : "green" }}>Name: {name?.common}</p>
      <p>Capital: {capital} </p>
      <p>Population: {population}</p>
      <button
        onClick={() => {
          hanldeVisited(country);
        }}
      >
        Visit
      </button>
      <button onClick={changeBgColor}>Change bg color</button>
    </div>
  );
};

export default Country;
