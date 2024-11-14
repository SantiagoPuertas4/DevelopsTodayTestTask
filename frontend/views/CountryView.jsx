import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PopulationChart from "../Components/HomeView/PopulationChart";


export const CountryView = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const { countryCode } = useParams();

  const [countryData, setCountryData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/country/${countryCode}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        setCountryData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url, countryCode]);


  const handleOnClick = async (countryCode) => {
    navigate(`/${countryCode}`);
  };

  if (!countryData) {
    return (
      <div className="container">
        <h1 className="text-center">Loading</h1>
        <div className="d-flex flex-wrap">
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <h1 className="text-center flex">{countryData.countryInfo.commonName}</h1>
        <img className="countryImg flex" src={countryData.flagImage} alt={countryData.countryInfo.commonName} />
      </div>
      <div className="d-flex flex-column flex-wrap justify-content-center align-items-center mt-5">
        <h4 className="text-center">Border Countries</h4>
        <div className="d-flex flex-wrap">
          {countryData?.countryInfo?.borders?.map((country, index) => (
            <button className="countryButton flex-fill flex" onClick={() => handleOnClick(country.countryCode)} key={index}>
              <p className="text-center">{country.commonName}</p>
            </button>
          ))}
        </div>
      </div>
      <PopulationChart populationData={countryData.population} />
    </div >
  );
};

export default CountryView;