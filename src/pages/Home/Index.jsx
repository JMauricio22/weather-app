import React, { useState, useEffect } from "react";
import { getLocation } from "../../services/weather";
import WeatherForecastList from "./componentes/WeatherForecastList";
import Hightlights from "./componentes/Highlights";
import Time from "./componentes/Time";
import Footer from "./componentes/Footer";
import Container from "./componentes/Container";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    getLocationFromApi();
  }, []);

  const getLocationFromApi = async () => {
    try {
      const resp = await getLocation(44418);
      setData(resp);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='w-100'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Container
          leftComponent={
            <Time
              currentWeather={data.consolidated_weather[0]}
              title={data.title}
            />
          }
          rightComponent={
            <div className='bg-dark'>
              <WeatherForecastList
                forecast={data.consolidated_weather.filter(
                  (weather, index) => index !== 0
                )}
              />
              <Hightlights weather={data.consolidated_weather[0]} />
              <Footer />
            </div>
          }
        ></Container>
      )}
    </main>
  );
}
