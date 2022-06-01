import React from "react";
import { useState } from "react";
import "./About.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState(null);
  let age = searchTerm;
  let x = parseInt(age);

  return (
    <>
      <input
        id="sok"
        type="text"
        placeholder="write down your age"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {x > 17 ? (
        <div>
          <p>okay who cares ?</p>
        </div>
      ) : (
        <p>you are under 18 go get some milk</p>
      )}
    </>
  );
}

export default Home;
