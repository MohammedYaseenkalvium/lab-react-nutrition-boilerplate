import React, { useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import FoodBox from "./Components/FoodBox";
import foodData from "./resources/FoodData.js";

function App() {
  const [search, setSearch] = useState("");

  let filter = foodData.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <h1>Pro-Nutrition</h1>
      <Search setSearch={setSearch} />
      {filter.length == 0 ? (
        <h1>Cannot Find Result</h1>
      ) : (
        filter.map((e, i) => {
          return <FoodBox data={e} index={i} />;
        })
      )}
    </>
  );
}

export default App;