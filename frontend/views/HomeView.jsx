import { useEffect, useState } from "react";

export const HomeView = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [countries, setCountries] = useState();

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await fetch(`${apiUrl}/country/borders/AR`);

        if (!response.ok) {
          throw new Error('Request failed, status code: ' + response.status);
        }

        const data = await response.json();

        console.log(data);
        setCountries(data);

        return data;
      } catch (error) {
        console.error('There was an error fetching the countries:', error);
        return null;
      }
    }

    getCountries();
  }, [apiUrl]);

  return (
    <>
      <p>HomeView</p>
    </>
  );
};

export default HomeView;