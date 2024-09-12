# এই প্রজেক্টে যা যা ব্যবহার হয়েছে?

## useEffect() দিয়ে data fetch করে তা useState() হুকে ‍store করা হয়েছে?

#### React:

````markdown
```react
const [countries, setCountries] = useState([]);

useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
```
````
