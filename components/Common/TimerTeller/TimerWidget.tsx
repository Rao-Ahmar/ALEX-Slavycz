import React, { useEffect, useRef, useState } from "react";
import { DateTime } from "luxon";

const TimerWidget: React.FC = () => {
  const [times, setTimes] = useState(Array<any>);
  const colonRef = useRef(true);
  const intervalRef = useRef<any>({});

  const timeForZone = (zone: any) => {
    return DateTime.fromObject({}, { zone }).toFormat(
      colonRef.current ? "hh:mm" : "hh mm"
    );
  };

  const createTimes = () => {
    setTimes([
      {  
        label: "Shanghai",
        time: timeForZone("Asia/Shanghai"),
      },
      {
        label: "Tokyo",
        time: timeForZone("Asia/Tokyo"),
      },
      {
        label: "Seoul",
        time: timeForZone("Asia/Seoul"),
      },
      {
        label: "London",
        time: timeForZone("Europe/London"),
      },
      {
        label: "Paris",
        time: timeForZone("Europe/Paris"),
      },
      {
        label: "New York",
        time: timeForZone("America/New_York"),
      },
    ]);
  };

  useEffect(() => {
    createTimes();

    intervalRef.current = setInterval(() => {
      colonRef.current = !colonRef.current;
      createTimes();
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [setTimes]);
  return (
    <footer className="pb-safe pt-safe md:w-auto w-full flex justify-start items-center gap-3 sm:gap-5">
      {times.map(({ label, time }, k) => {
        return (
          <div
            className="flex justify-center items-start flex-col flex-wrap"
            key={k}
          >
            <div className="flex justify-center items-start flex-col w-fit flex-wrap">

              <h4 className="font-Grotesque md:font-normal lg:text-[13px] text-[11px] leading-[20px] text-black text-start uppercase whitespace-nowrap">
                {label}
              </h4>
              <p className="font-Grotesque lg:w-[42px] w-[32px] font-[200] lg:text-[13px] text-[10px] leading-[20px] text-black text-start">
                {time}
              </p>
            </div>

          </div>
        );
      })}
    </footer>
  );
};

export default TimerWidget;
