import { useEffect, useState } from "react";
import Country from "./Country";
import "./countries.css";

const Countris = () => {
  const [countries, setCountries] = useState([]);
  const [more, setMore] = useState(9);
  const loadMore = () => {
    if (countries.length - more <= 9) {
      setMore(countries.length);
    } else {
      setMore(more + 9);
    }
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      <p>Total: {countries.length}</p>
      <hr />
      <div className="countries">
        {countries.slice(0, more).map((country) => (
          <Country country={country} key={country.cca2}></Country>
        ))}
      </div>
      <hr />
      <button disabled={more === countries.length} onClick={loadMore}>
        Load More
      </button>
      {/* Ternari Operator */}
      <button
        disabled={more === countries.length ? true : false}
        onClick={loadMore}
      >
        Load More
      </button>
      {/* Other One */}
      <button
        {...(more === countries.length ? { disabled: true } : {})}
        onClick={loadMore}
      >
        Load More
      </button>
      {/* Class Name */}
      <button
        className={more === countries.length ? "disabled-btn" : ""}
        onClick={loadMore}
        disabled={more === countries.length}
      >
        Load More
      </button>
      {/* Remove Button */}
      {more !== countries.length && (
        <button onClick={loadMore}>Load More</button>
      )}

      <p>Loaded: {more}</p>
    </>
  );
};

export default Countris;
