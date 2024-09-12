# এই প্রজেক্টে যা যা ব্যবহার হয়েছে?

## useEffect() দিয়ে data fetch করে তা useState() হুকে ‍store করা হয়েছে?

#### React:

```markdown
const [countries, setCountries] = useState([]);

useEffect(() => {
fetch("https://restcountries.com/v3.1/all")
.then((res) => res.json())
.then((data) => setCountries(data));
}, []);
```

## তারপর তা অন্য একটি Component এ map করে প্রত্যে দেশের আলাদা আলাদা করে ডাটা দেখানো হয়েছে।

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
