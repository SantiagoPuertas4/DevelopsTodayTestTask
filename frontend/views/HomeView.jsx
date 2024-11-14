import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomeView = () => {
  const [countries, setCountries] = useState();
  const url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

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

  const handleOnClick = async (countryCode) => {
    navigate(`/${countryCode}`);
  };

  return (
    <div className="container">
      <h1 className="text-center">Countries</h1>
      <div className="d-flex flex-wrap">
        {countries && countries?.map((country, index) => (
          <button className="countryButton flex-fill flex" onClick={() => handleOnClick(country.countryCode)} key={index}>
            <p className="text-center">{country.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeView;