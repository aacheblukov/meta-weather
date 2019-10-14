import React from "react";
import { IDayInfo } from "../Today/i";
import { getCurrentDay, DateFormats, getImgUrl } from "../../constants";
import "./style.css";
const weekDay = ({ day }: { day: IDayInfo }) => {
  return (
    <>
      <div className="weekday-wrapper">
        <div className="weekday-date w-50">
          <span>
            {getCurrentDay(day.applicable_date, DateFormats.CURRENT_DAY)}
          </span>
          <span>
            {getCurrentDay(day.applicable_date, DateFormats.DAY_FOR_WEEK)}
          </span>
        </div>
        <div className="weekday-temp-weather w-50">
          <div className="weekday-temp">
            {`${Math.round(day.max_temp)}° / ${Math.round(day.min_temp)}`}
          </div>
          <div className="weekday-weather">
            <img
              className="weekday-weather-type"
              src={getImgUrl(day.weather_state_abbr)}
              alt="weekday-weather"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default weekDay;
