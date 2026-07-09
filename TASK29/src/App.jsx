import React from "react";
import useFetch from "./useFetch";

const App = () => {
  let { data: fetchdata, loading, error } = useFetch();
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
      <h2>Fetched data :</h2>
      <ul>
        {fetchdata.map((element) => {
          return <li key={element.id}>{element.name}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
