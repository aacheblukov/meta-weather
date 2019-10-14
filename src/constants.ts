import { format, parse, addDays } from "date-fns";
import { useEffect } from "react";
//sections
export enum SectionType {
  TODAY = "Today",
  WEEK = "Week",
  LAST_DAY = "Last day"
}
export enum DateFormats {
  REQUEST = "yyyy/MM/dd",
  DATE_FROM_REQUEST = "yyyy-MM-dd",
  CURRENT_DAY = "EEEE",
  DAY_FOR_WEEK = "dd MMM"
}
//dates
export const formatDate = (date: Date): string =>
  format(date, DateFormats.REQUEST);
export const today = new Date();
export const todayString = formatDate(today);
export const lastDayForWeek = formatDate(addDays(today, 6));
export const getCurrentDay = (date: string, dateFormat: string) =>
  format(parse(date, DateFormats.DATE_FROM_REQUEST, today), dateFormat);
//urls
export const corsProxy = "https://cors-anywhere.herokuapp.com/";
export const urlForLocation = `${corsProxy}metaweather.com/api/location/search/?query=moscow`;
export const url = `${corsProxy}metaweather.com/api/location/`;

export const getUrlForRequest = (locId: number, type: SectionType): string => {
  const defaultUrl = `${url}${locId}/`;
  switch (type) {
    case SectionType.TODAY:
      return defaultUrl + todayString;
    case SectionType.LAST_DAY:
      return defaultUrl + lastDayForWeek;
    default:
      return defaultUrl;
  }
};

export const getImgUrl = (weatherType: string): string =>
  `http://metaweather.com/static/img/weather/${weatherType}.svg`;

interface ISetState {
  (body: any): void;
}

export const useRequest = (
  locId: number,
  type: SectionType,
  setState: ISetState
) => {
  const url = getUrlForRequest(locId, type);
  useEffect(() => {
    locId &&
      fetch(url)
        .then(res => res.json())
        .then(body =>
          setState(
            type !== SectionType.WEEK ? body[0] : body.consolidated_weather
          )
        );
  }, [locId, url, setState, type]);
};
