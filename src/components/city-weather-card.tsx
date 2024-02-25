import type { City } from "@/types";

function CityWeatherCard({ city }: { city: City }) {
  return (
    <div className="mt-4 rounded-xl p-6 text-center bg-black text-white shadow-gray-950/80">
      <h3 className="font-semibold text-2xl mb-1">
        {city["location"]["name"]}
      </h3>
      <p className="font-thin text-4xl lg:text-6xl">
        {city["current"]["temperature"]}°
      </p>
      <p className="mt-1 opacity-80 text-xs">
        High: {Number(city["current"]["temperature"]) + 2}° Low:
        {Number(city["current"]["temperature"]) - 2}°
      </p>
      <p className="opacity-75 mt-4">
        {city["current"]["weather_descriptions"][0]} conditions
      </p>
      <div className="bg-slate-800 h-0.5 my-4"></div>
      <div className="text-sm opacity-70 grid gap-2">
        <div className="flex justify-between">
          <p className="">Wind speed</p>
          <p>{city["current"]["wind_speed"]} km/h</p>
        </div>
        <div className="flex justify-between">
          <p className="">Wind direction</p>
          <p>{city["current"]["wind_dir"]}</p>
        </div>
        <div className="flex justify-between">
          <p className="">Pressure</p>
          <p>{city["current"]["pressure"]} hPa</p>
        </div>
        <div className="flex justify-between">
          <p className="">Humidity</p>
          <p>{city["current"]["humidity"]}%</p>
        </div>
        <div className="flex justify-between">
          <p className="">Visibility</p>
          <p>{city["current"]["visibility"]} m</p>
        </div>
        <div className="flex justify-between">
          <p className="">UV Index</p>
          <p>{city["current"]["uv_index"]}</p>
        </div>
      </div>
    </div>
  );
}

export default CityWeatherCard;
