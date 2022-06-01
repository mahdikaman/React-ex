import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Home.css";

function FetchApi() {
  const [brewery, setBrewery] = useState(null);
  const [random, setRandom] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries?per_page=50")
      .then((response) => response.json())
      .then((result) => {
        setBrewery(result);
      });
  }, []);

  const f = () => {
    fetch("https://api.openbrewerydb.org/breweries/random", {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setRandom(result);
        document.getElementById("content").classList.add("disable");
      });
  };
  const g = () => {
    fetch("https://api.openbrewerydb.org/breweries?per_page=50")
      .then((response) => response.json())
      .then((result) => {
        setRandom(result);
      });
  };

  return (
    <>
      <div id="but">
        <button id="buttt" onClick={f}>
          Click For Random Brewery
        </button>
        <button id="buttt" onClick={g}>
          Refresh
        </button>
      </div>
      <input
        id="sok"
        type="text"
        placeholder="Search ..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {random && (
        <ol>
          {random.map((random) => (
            <li className="listen" key={random.id}>
              <h3>Name: {random.name}</h3>
              <h3>City: {random.city}</h3>
              <h3>State: {random.state}</h3>
              <h3>Country: {random.country}</h3>
              <h3>Type: {random.brewery_type}</h3>
            </li>
          ))}
        </ol>
      )}

      {brewery && (
        <ol id="content">
          {brewery
            .filter((brewery) =>
              brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((brewery) => (
              <li className="listen" key={brewery.id}>
                <h3>Name: {brewery.name}</h3>
                <h3>City: {brewery.city}</h3>
                <h3>State: {brewery.state}</h3>
                <h3>Country: {brewery.country}</h3>
                <h3>Type: {brewery.brewery_type}</h3>
              </li>
            ))}
        </ol>
      )}
    </>
  );
}
export default FetchApi;
