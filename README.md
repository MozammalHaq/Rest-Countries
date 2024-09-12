# এই প্রজেক্টে যা যা ব্যবহার হয়েছে?

### useEffect() দিয়ে data fetch করে তা useState() হুকে ‍store করা হয়েছে?

#### React:

```markdown
const [countries, setCountries] = useState([]);

useEffect(() => {
fetch("https://restcountries.com/v3.1/all")
.then((res) => res.json())
.then((data) => setCountries(data));
}, []);
```

### তারপর তা অন্য একটি Component এ map করে প্রত্যেক দেশের আলাদা আলাদা করে ডাটা দেখানো হয়েছে।

#### React

```markdown
{countries?.slice(0, more)?.map((country) => (
<Country
    country={country}
    hanldeVisited={hanldeVisited}
    key={country.cca2}
    ></Country>
))}
```

### Country component নিচের মতো করে সাজানো হয়েছ।

#### React

```markdown
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
<button onClick={() => hanldeVisited(country)}>Visited</button>
<button onClick={changeBgColor}>Change bg color</button>
</div>
);
};

export default Country;
```

### এখানে লিমিট কার্ড দেখানোর জন্য Slice ব্যবহার করা হয়েছে। এবং load more এর জন্য বিভিন্নভাবে JavaScript ফাংশন ব্যবহার করা হয়েছে?

#### JS + React

```markdown
const load = 12;

const [more, setMore] = useState(load);

const loadMore = () => {
if (countries.length - more <= load) {
setMore(countries.length);
} else {
setMore(more + load);
}
};

{countries?.slice(0, more)?.map((country) => (
<Country
    country={country}
    hanldeVisited={hanldeVisited}
    key={country.cca2}
    ></Country>
))}

<button disabled={more === countries.length} onClick={loadMore}>
Load More
</button>
{/_ Ternari Operator _/}
<button
disabled={more === countries.length ? true : false}
onClick={loadMore} >
Load More
</button>
{/_ Other One _/}
<button
{...(more === countries.length ? { disabled: true } : {})}
onClick={loadMore} >
Load More{" "}
</button>
{/_ Class Name _/}
<button
className={more === countries.length ? "disabled-btn" : ""}
onClick={loadMore}
disabled={more === countries.length} >
Load More
</button>
{/_ Remove Button _/}
{more !== countries.length && (
<button onClick={loadMore}>Load More</button>
)}
```
