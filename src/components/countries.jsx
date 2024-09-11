import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./countries.css";
import Country from "./Country";

const load = 12;

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visited, setVisited] = useState([]);
  const [more, setMore] = useState(load);
  console.log(visited);

  const loadMore = () => {
    if (countries.length - more <= load) {
      setMore(countries.length);
    } else {
      setMore(more + load);
    }
  };

  const hanldeVisited = (country) => {
    const unique = visited.find((one) => one == country);
    if (unique) {
      return toast.error("Already Visited");
    }
    setVisited([...visited, country]);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <p>Total: {countries.length}</p>
      <p>Visited Countries: {visited.length}</p>
      {/* Remove Button */}
      {more !== countries.length && (
        <button onClick={loadMore}>Load More</button>
      )}
      <p>Loaded: {more}</p>
      <hr />
      <div className="countries">
        {countries?.slice(0, more)?.map((country) => (
          <Country
            country={country}
            hanldeVisited={hanldeVisited}
            key={country.cca2}
          ></Country>
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
        Load More{" "}
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

export default Countries;
