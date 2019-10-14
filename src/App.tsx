import React, { useState, useEffect } from "react";
import Toggler from "./components/Toggler";
import Today from "./components/Today";
import { urlForLocation, SectionType } from "./constants";
import Week from "./components/Week";

interface ILocInfo {
  title: string;
  location_type: string;
  latt_long: string;
  woeid: number;
  distance: number;
}
const App: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Today");
  const [locInfo, setLocationInfo] = useState<ILocInfo>({} as ILocInfo);
  useEffect(() => {
    (async () =>
      fetch(urlForLocation)
        .then(res => res.json())
        .then(body => setLocationInfo(body[0])))();
  }, [locInfo.woeid]);
  return (
    <div className="main-wrapper">
      <Toggler handleClick={setActiveItem} activeItem={activeItem} />
      {activeItem === SectionType.TODAY && locInfo.woeid ? (
        <Today location={locInfo.title} locId={locInfo.woeid} />
      ) : (
        locInfo.woeid && <Week location={locInfo.title} locId={locInfo.woeid} />
      )}
    </div>
  );
};

export default App;
