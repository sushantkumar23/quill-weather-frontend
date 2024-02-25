"use client";

import { useState } from "react";

import CityWeatherCard from "@/components/city-weather-card";
import type { City } from "@/types";

const cities: City[] = [
  {
    request: {
      type: "City",
      query: "Paris, France",
      language: "en",
      unit: "m",
    },
    location: {
      name: "Paris",
      country: "France",
      region: "Ile-de-France",
      lat: "48.867",
      lon: "2.333",
      timezone_id: "Europe/Paris",
      localtime: "2024-02-25 07:28",
      localtime_epoch: 1708846080,
      utc_offset: "1.0",
    },
    current: {
      observation_time: "06:28 AM",
      temperature: 5,
      weather_code: 122,
      weather_icons: [
        "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png",
      ],
      weather_descriptions: ["Overcast"],
      wind_speed: 19,
      wind_degree: 180,
      wind_dir: "S",
      pressure: 1001,
      precip: 0,
      humidity: 93,
      cloudcover: 100,
      feelslike: 2,
      uv_index: 1,
      visibility: 10,
      is_day: "no",
    },
  },
  {
    request: {
      type: "City",
      query: "New York, United States of America",
      language: "en",
      unit: "m",
    },
    location: {
      name: "New York",
      country: "United States of America",
      region: "New York",
      lat: "40.714",
      lon: "-74.006",
      timezone_id: "America/New_York",
      localtime: "2024-02-25 01:24",
      localtime_epoch: 1708824240,
      utc_offset: "-5.0",
    },
    current: {
      observation_time: "06:24 AM",
      temperature: -2,
      weather_code: 113,
      weather_icons: [
        "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png",
      ],
      weather_descriptions: ["Clear"],
      wind_speed: 20,
      wind_degree: 320,
      wind_dir: "NW",
      pressure: 1017,
      precip: 0,
      humidity: 39,
      cloudcover: 0,
      feelslike: -7,
      uv_index: 1,
      visibility: 16,
      is_day: "no",
    },
  },
  {
    request: {
      type: "City",
      query: "London, United Kingdom",
      language: "en",
      unit: "m",
    },
    location: {
      name: "London",
      country: "United Kingdom",
      region: "City of London, Greater London",
      lat: "51.517",
      lon: "-0.106",
      timezone_id: "Europe/London",
      localtime: "2024-02-25 06:50",
      localtime_epoch: 1708843800,
      utc_offset: "0.0",
    },
    current: {
      observation_time: "06:50 AM",
      temperature: 0,
      weather_code: 248,
      weather_icons: [
        "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0007_fog.png",
      ],
      weather_descriptions: ["Fog"],
      wind_speed: 4,
      wind_degree: 50,
      wind_dir: "NE",
      pressure: 997,
      precip: 0,
      humidity: 100,
      cloudcover: 100,
      feelslike: -2,
      uv_index: 1,
      visibility: 0,
      is_day: "no",
    },
  },
];

export default function Home() {
  const [city, setCity] = useState("");
  const [currentCity, setCurrentCity] = useState<City | null>();

  const [showError, setShowError] = useState(false);
  const [error, setError] = useState({
    header: "",
    message: "",
  });

  const fetchWeather = async (location: string) => {
    setCurrentCity(null);
    if (!location) {
      setError({
        header: "Empty location",
        message: "Please enter a city or zip code and try again",
      });
      setShowError(true);
      return;
    }
    const response = await fetch(
      `https://quill-weather-backend.vercel.app/weather?location=${location}`
    );
    console.log(response);
    if (response.status === 200) {
      const data = await response.json();
      setCurrentCity(data);
      setCity("");
    } else {
      setError({
        header: "Invalid location",
        message: "Please enter a valid city or zip code",
      });
      setShowError(true);
    }
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    if (showError) {
      setShowError(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-gray-900 justify-between p-24">
      <div className="grid gap-4 w-full max-w-3xl mx-auto my-8 lg:my-16">
        <div className="flex flex-col gap-2 mb-4 lg:mb-8">
          <h1 className="text-2xl font-bold text-indigo-500 mb-2">
            ⛅ Quill<span className="font-light">Weather</span>
          </h1>
          <p className="opacity-90 text-4xl lg:text-5xl font-extrabold tracking-tight">
            Live ⛅ weather forecasts for your favorite cities
          </p>
        </div>
        {currentCity && <CityWeatherCard city={currentCity} />}
        <form className="flex flex-col gap-2">
          <input
            type="text"
            onChange={(e) => handleCityChange(e)}
            value={city}
            className="p-4 rounded-lg border-2 border-indigo-700 focus:outline-none focus:ring focus:ring-gray-300"
            id="location"
            placeholder="Search for a city or zip code..."
          />
          {showError && (
            <p className="text-xs p-2.5 bg-red-100 border border-red-400 rounded-md text-red-800">
              <span className="font-bold">{error.header}:</span> {error.message}
            </p>
          )}
        </form>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => fetchWeather(city)}
            className="p-3 rounded-md bg-indigo-500 text-white font-bold hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
            type="submit"
          >
            Get Weather
          </button>
        </div>
        <div className="my-8">
          <div className="my-4">
            <h2 className="text-xl lg:text-2xl font-bold">
              🏙️ Selected Cities
            </h2>
            <p className="opacity-80 mt-1">
              Live weather data for your selected favorite cities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {cities.map((city, index) => (
              <CityWeatherCard key={index} city={city} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
