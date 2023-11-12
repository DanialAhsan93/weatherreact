import React, { useEffect, useState } from 'react'
import './cards.css'
import { loop } from './Loop';
import axios from 'axios'
import Search from './Search';
import card1 from '../components/images/card1.svg';
import card2 from '../components/images/card2.svg';
import card3 from '../components/images/card3.svg';
import Slider from "react-slick";


export default function Cards() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    };

    const apikey = "f4d43e201764ac7c6231a7d378b7c54d"
    const apikey2 = "2fb107b01e20b606fa65e9f64dbf9dca"

    const [newsearch, setnewsearch] = useState("");
    const [data, setdata] = useState([]);
    const [forecastData, setForecastData] = useState([]);
    const [currentCity, setCurrentCity] = useState("");
    const [forecastCity, setForecastCity] = useState("");
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");


    const images = [card1, card2, card3]

    const getweatherdetails = (cityName) => {
        if (!cityName) return;

        // Current weather
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;
        axios.get(apiURL)
            .then((res) => {
                // console.log('Current weather response', res.data);
                setdata(res.data);
                // Set the current city for both current weather and forecast data
                setCurrentCity(res.data?.name);
                setForecastCity(res.data?.name);
            })
            .catch((err) => {
                console.log('Current weather error', err);
            });

        // Weather forecast for the next 4 days
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apikey}`;
        axios.get(forecastURL)
            .then((res) => {
                // console.log('Forecast response', res.data);
                // Extract the forecast data for the next 4 days (adjust as needed)
                const next4Days = res.data.list.slice(1, 8);
                setForecastData(next4Days);
            })
            .catch((err) => {
                console.log('Forecast error', err);
            });
    };

    useEffect(() => {
        getweatherdetails('Islamabad')
        getweatherdetails(selectedCity);

        const currentDay = new Date().getDay();

        // Create an array of the next 4 days
        const next4Days = Array.from({ length: 7 }, (_, index) => {
            const nextDay = (currentDay + index) % 7;
            return getDayName(nextDay);
        });

        // Set the state with the array of days
        setDaysOfWeek(next4Days);

    }, [selectedCity])

    const getDayName = (dayIndex) => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[dayIndex];
    };

    const handlenewsearch = (e) => {
        const { value } = e.target
        // console.log('value', e.target.value)
        setnewsearch(e.target.value);
        getweatherdetails(value)
    }
    const handleSelectChange = (selectedCity) => {
        setSelectedCity(selectedCity);
    };


    return (
        <>

            <Search input={handlenewsearch} newsearch={newsearch} selectInput={handleSelectChange}
            selectedCity={selectedCity} />
            <div className='hollow' ></div>

            <div className="row justify-content-center mt-5 ">
                <div className='col-sm-7'>
                    <div className="col  mt-5 pt-sm-5 d-flex flex-column align-items-center
                justify-content-center pb-5 inner-card" >
                        <img src={card1} alt="#" className='card1-img' />
                        <div className='d-flex align-items-center pt-5'>
                            <h4 className='text-light fw-bold pt-5 pe-2'>{data?.name} :</h4>
                            <h4 className='text-light pt-5 '>{((data?.main?.temp) - 273.15).toFixed(2)} °C</h4>
                        </div>
                        <div className='d-flex align-items-center pt-2'>
                            <h4 className='text-light fw-bold pe-2'>Wind speed :</h4>
                            <h4 className='text-light '>{data?.wind?.speed} km</h4>
                        </div>
                        <div className='d-flex align-items-center pt-2 '>
                            {/* <h4 className='text-light fw-bold pe-2'>{data?.name}:</h4> */}
                            <h4 className='text-light '>{data?.weather?.[0]?.description || ''}</h4>
                        </div><div className='d-flex align-items-center pt-2'>
                            <h4 className='text-light fw-bold pe-2'>Humidty :</h4>
                            <h4 className='text-light '>{data?.main?.humidity} </h4>
                        </div>


                    </div>

                </div>

            </div>

            <div className="row mt-5">
                <div>
                    <Slider {...settings} className="text-light">
                        {/* {forecastData?.map((weatherData, index) => (
                            <div key={index} className="col text-center text-light">
                                {index !== 0 ? (
                                    <>
                                        <div className='d-flex justify-content-center'>
                                            <img src={images[index % images.length]} alt="weather-images"
                                                className=''
                                                style={{ width: '25%' }} />
                                        </div>
                                        <h4>{daysOfWeek[index]}</h4>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <h6 className='me-1 mb-1'>{forecastCity} :</h6>
                                            <p className='mb-0'>{((weatherData?.main?.temp) - 273.15).toFixed(2)} °C</p>
                                        </div>

                                        <p>Wind speed: {weatherData?.wind?.speed} km</p>
                                    </>
                                ): null}
                            </div>
                        ))} */}

                        {forecastData ? forecastData.map((weatherData, index) => (
                                index !== 0 ? (
                                    <div key={index} className="col text-center text-light">
                                        <>
                                            <div className='d-flex justify-content-center'>
                                                <img src={images[index % images.length]} alt="weather-images"
                                                    className=''
                                                    style={{ width: '25%' }} />
                                            </div>
                                            <h4>{daysOfWeek[index]}</h4>
                                            <div className='d-flex align-items-center justify-content-center'>
                                                <h6 className='me-1 mb-1'>{forecastCity} :</h6>
                                                <p className='mb-0'>{((weatherData?.main?.temp) - 273.15).toFixed(2)} °C</p>
                                            </div>
                                            <p>Wind speed: {weatherData?.wind?.speed} km</p>
                                        </>
                                    </div>
                                ) : null
                            ))
                            : null
                        }
                    </Slider>

                </div>


            </div>








        </>
    )
}
