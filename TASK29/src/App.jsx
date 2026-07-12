import React from "react";
import useFetch from "./useFetch";
import Card from "./Card";
import "./App.css";
const App = () => {
  let { data: fetchdata, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
  console.log(fetchdata, loading, error);
  if (loading) {
    return (
      <>
        <h1>Loading........</h1>
      </>
    );
  }
  if (error) {
    return (
      <>
        <h2>Unable to fetch data properly</h2>
        {error}
      </>
    );
  }
  return (
    <>
      <div id="main">
        <h2>Fetched data :</h2>
        <ul>
          {fetchdata.map((element) => {
            return (
              <li key={element.id}>
                <Card
                  name={element.name}
                  id={element.id}
                  mail={element.email}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
