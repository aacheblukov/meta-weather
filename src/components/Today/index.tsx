import React, { useState } from "react";
import { getImgUrl, useRequest, SectionType } from "../../constants";
import { format, parseISO } from "date-fns";
import "./style.css";
import Loader from "../Loader";
import { ISectionProps, IDayInfo } from "./i";

const Today = ({ location, locId }: ISectionProps) => {
  const [data, setData] = useState<IDayInfo | null>(null);

  useRequest(locId, SectionType.TODAY, setData);
  return data ? (
    <div className="today-wrapper">
      <img
        className="today-weather-type"
        src={getImgUrl(data.weather_state_abbr)}
        alt="weather type"
      />
      <div className="info weather-temp ">{`${Math.round(
        data.the_temp
      )}°`}</div>
      <div className="info">{`${format(parseISO(data.created), "HH")}:00`}</div>
      <div className="info">{location}</div>
    </div>
  ) : (
    <Loader />
  );
};
export default Today;
