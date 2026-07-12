import { useEffect, useState } from "react";

const useFetch = () => {
  console.log("Custom Hook Called");
  let [data, setdata] = useState([]);
  let [loading, setloading] = useState(false);
  let [error, seterror] = useState(null);

  const fetchHandler = async () => {
    try {
      setloading(true);
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      console.log(response.ok);
      if (!response.ok) {
        throw new Error("Some error while fetching....");
      }
      let final = await response.json();
      console.log(final);
      setdata((prev) => {
        return final;
      });
      // setdata(final);
    } catch (error) {
      seterror(error.message);
      console.log(error);
    } finally {
      setloading(false);
    }
  };  

  useEffect(() => {
    fetchHandler();
  }, []);

  return { data, loading, error };
};

export default useFetch;
