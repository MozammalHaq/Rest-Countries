import "./App.css";
import Countris from "./components/countris";

function App() {
  const names = ["Mozammal", "Aklima", "Sara", "Fara"];
  return (
    <>
      <Countris />
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
