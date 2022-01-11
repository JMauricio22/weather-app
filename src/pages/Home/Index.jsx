import React, { useState, useEffect } from "react";
import { getLocation } from "../../services/weather";
import WeatherForecastList from "../../componentes/WeatherForecastList";
import Hightlights from "../../componentes/Highlights";
import Weather from "../../componentes/Weather";
import Footer from "../../componentes/Footer";
import Container from "../../componentes/Container";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const [location, setLocation] = useState(44418);

  useEffect(() => {
    if (loading) {
      getLocationFromApi();
    }
  }, [loading]);

  const getLocationFromApi = async () => {
    try {
      const resp = await getLocation(location);
      setData(resp);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleSearchMenu = () => {
    setShowMenu(!showMenu);
  };

  const onChangeLocation = (woeid) => {
    setLoading(true);
    setLocation(woeid);
  };

  return (
    <main className='w-100'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Container
          leftComponent={
            <Weather
              currentWeather={data.consolidated_weather[0]}
              title={data.title}
              showMenu={showMenu}
              toggleSearchMenu={toggleSearchMenu}
              onChangeLocation={onChangeLocation}
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
