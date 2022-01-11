import React, { useState, useEffect } from "react";
import { getLocation } from "../../services/weather";
import Loading from "../../componentes/Loading/Index";
import WeatherForecastList from "../../componentes/WeatherForecastList/Index";
import Hightlights from "../../componentes/Highlights/Index";
import Weather from "../../componentes/Weather/Index";
import Footer from "../../componentes/Footer/Index";
import Container from "../../componentes/Container/Index";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const [location, setLocation] = useState(44418);
  const [isCelsius, setIsCelsius] = useState(true);

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
    setShowMenu(false);
    setLocation(woeid);
    setLoading(true);
  };

  return (
    <main className='w-100'>
      {loading ? (
        <Loading />
      ) : (
        <Container
          leftComponent={
            <Weather
              currentWeather={data.consolidated_weather[0]}
              title={data.title}
              showMenu={showMenu}
              toggleSearchMenu={toggleSearchMenu}
              onChangeLocation={onChangeLocation}
              isCelsius={isCelsius}
            />
          }
          rightComponent={
            <div className='bg-dark'>
              <WeatherForecastList
                forecast={data.consolidated_weather.filter(
                  (weather, index) => index !== 0
                )}
                isCelsius={isCelsius}
                setIsCelsius={setIsCelsius}
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
