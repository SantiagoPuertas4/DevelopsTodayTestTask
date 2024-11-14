import { useEffect, useState } from "react";

export const HomeView = () => {
  const [countries, setCountries] = useState();
  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/country/all`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        setCountries(result.countries);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  const handleOnClick = async (id) => {
    try {
      const response = await fetch(`${url}/country/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      setCountries(result.countries);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="container">
      <h1>Countries</h1>
      <div className="grid">
        {countries && countries.map((country, index) => (
          <p key={index}>{country.name}</p>
        ))}
      </div>
    </div>
  );
};

export default HomeView;