import "./App.css";
import Countries from "./components/countries";

function App() {
  const names = ["Mozammal", "Aklima", "Sara", "Fara"];
  return (
    <>
      <Countries />
      {/* <Counter />
      <Counter />
      {names.map((name) => (
        <Family key={name} name={name} />
      ))}
      <Users />
      <Todo name="Class" isTrue={false} />
      <Todo name="Arabic" isTrue={true} />
      <Todo name="Bangla" isTrue={false} />
      <Todo name="English" isTrue={true} /> */}
    </>
  );
}

export default App;
