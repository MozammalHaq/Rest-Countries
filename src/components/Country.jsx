import "./country.css";

const Country = ({ country }) => {
  console.log(country);
  const { name, flags, capital } = country;
  return (
    <div className="country">
      <p>{name?.common}</p>
      <img src={flags.png} alt="" />
      <p>Code: </p>
      <h2>Capital: {capital} </h2>
    </div>
  );
};

export default Country;
