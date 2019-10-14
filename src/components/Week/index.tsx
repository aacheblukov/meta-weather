import React, { useState } from "react";
import { ISectionProps, IDayInfo } from "../Today/i";
import { useRequest, SectionType } from "../../constants";
import WeekDay from "./WeekDay";
import Loader from "../Loader";

const Week = ({ locId }: ISectionProps) => {
  const [weekData, setWeekData] = useState([] as IDayInfo[]);
  const [lastDay, setLastDay] = useState({} as IDayInfo);
  useRequest(locId, SectionType.WEEK, setWeekData);
  useRequest(locId, SectionType.LAST_DAY, setLastDay);
  return (
    <>
      {lastDay && weekData.length ? (
        [...weekData, lastDay].map((day, index) => (
          <WeekDay day={day} key={index} />
        ))
      ) : (
        <Loader />
      )}
    </>
  );
};
export default Week;
