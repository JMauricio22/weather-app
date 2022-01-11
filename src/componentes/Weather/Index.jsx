import React from "react";
import PropTypes from "prop-types";
import { Button, Image, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { imagesMapper } from "../../utils/imagesMapper";
import Menu from "../SearchMenu/Index";
import DefaultSearchItem from "../DefaultSearchItem/Index";
import convertCelsiusToFahrenheit from "../../utils/convertCelsiusToFahrenheit";
import LocationIcon from "../../assets/img/4119656961571662258.svg";
import { getWoeid, searchCity } from "../../services/weather";

const defaultCitites = [
  {
    name: "London",
    woeid: 44418,
  },
  { name: "Barcelona", woeid: 753692 },
  { name: "Long Beach", woeid: 2441472 },
];

export default function Time({
  currentWeather,
  title,
  showMenu,
  toggleSearchMenu,
  onChangeLocation,
  isCelsius,
}) {
  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          const result = await getWoeid(coords);
          onChangeLocation(result[0].woeid);
        },
        (error) => {
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
        }
      );
    }
  };

  const onSearch = async (query) => {
    try {
      const result = await searchCity(query);
      if (result.length) {
        onChangeLocation(result[0].woeid);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='h-lg-100 position-relative'>
      <Menu
        showMenu={showMenu}
        toggleSearchMenu={toggleSearchMenu}
        onSearch={onSearch}
      >
        {defaultCitites.map((city, index) => (
          <DefaultSearchItem
            city={city.name}
            key={index}
            onChangeLocation={() => onChangeLocation(city.woeid)}
          />
        ))}
      </Menu>
      <div className='p-3'>
        <Row>
          <Col className='mb-5 px-3'>
            <Row>
              <Col>
                <Button variant='secondary' onClick={toggleSearchMenu}>
                  Search for places
                </Button>
              </Col>
              <Col className='d-flex justify-content-end'>
                <Button
                  className='d-flex justify-content-center align-items-center'
                  onClick={getCurrentPosition}
                  variant='secondary'
                  style={{ borderRadius: "50%", width: 40, height: 40 }}
                >
                  <img
                    className='align-middle'
                    src={LocationIcon}
                    alt='current-position'
                  />
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className='mb-5'>
            <div className='d-flex justify-content-center'>
              <Image
                src={imagesMapper[currentWeather.weather_state_abbr]}
                alt=''
                style={{ width: 150, height: 170 }}
              />
            </div>
          </Col>
          <Col className='text-center'>
            <p className='display-1'>
              {" "}
              {(isCelsius
                ? currentWeather.the_temp
                : convertCelsiusToFahrenheit(currentWeather.the_temp)
              ).toFixed(2)}{" "}
              °C
            </p>
            <p className='display-6 fw-bold'>
              {currentWeather.weather_state_name}
            </p>
            <p className='fs-6 text-secondary'>
              Today -{" "}
              {new Date().toLocaleDateString("en-GB", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}{" "}
            </p>
            <p className='fs-6 text-secondary'>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {title}
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
}

Time.propTypes = {
  title: PropTypes.string.isRequired,
  currentWeather: PropTypes.object.isRequired,
  showMenu: PropTypes.bool.isRequired,
  toggleSearchMenu: PropTypes.func.isRequired,
  onChangeLocation: PropTypes.func.isRequired,
  isCelsius: PropTypes.bool.isRequired,
};
