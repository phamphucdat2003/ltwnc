import { useState } from "react";
function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };
  return (
    <>
      <h1>My brand:{car.brand}</h1>
      <p>
        Color:{car.color}, model:{car.model}, year:{car.year}.
      </p>
      <button type="button" onClick={() => updateColor("blue")}>
        Update color: blue
      </button>
    </>
  );
}

export default Car;
