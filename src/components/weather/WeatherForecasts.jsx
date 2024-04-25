import WeatherCard from "@components/ui/WeatherCard";
import rootStore from "../../stores/rootStore";
import WeatherHighlight from "./WeatherHighlight";

const WeatherForecasts = () => {
  const weatherKeys = [
    { key: "tempInfo", title: "Temperature Info" },
    { key: "windSpeed", title: "Wind Status" },
    { key: "sunInfo", title: "Sunrise & Sunset" },
    { key: "humidity", title: "Humidity" },
    { key: "visibility", title: "Visibility" },
    { key: "airPollution", title: "Air Quality" },
  ];

  const {
    weather: { current },
  } = rootStore;

  return (
    <div className="container">
    
      <div className="row mt-5">
        <h5>Today's Highlights</h5>

        <div className="row row-gap-4 mt-2">
          {weatherKeys.map((info) => (
            <div className="col-12  col-lg-6 col-xl-4" key={info.key}>
              <WeatherCard>
                <WeatherHighlight current={current} info={info} />
              </WeatherCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecasts;
