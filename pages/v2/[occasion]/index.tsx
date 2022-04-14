/* eslint-disable react-hooks/rules-of-hooks */
import React, {
  CSSProperties,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { useRef } from "react";

export interface MyCustomCSS extends CSSProperties {
  "--clr": string;
  "--i": number;
}

export default function v2() {
  const [day, setDay] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const format = (index: number | SetStateAction<number>) =>
    index < 10 ? `0${index}` : index;

  const interval = useRef(setInterval(() => {}, 0));

  async function timer() {
    const dateEnd = new Date("Oct 10, 2022 00:00:00").getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const distance = dateEnd - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDay(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        console.log((hours + minutes / 12) * 12);
      }
    }, 1000);
  }

  useEffect(() => {
    timer();
    return () => clearInterval(interval.current);
  });

  

  return (
    <>
      <div className="container">
        <div className="clock">
          <div
            className="circle"
            id="sc"
            style={{ "--clr": "#04fc43", transform: `rotateZ(${seconds*6}deg)` } as MyCustomCSS}
          >
          <i></i>
          </div>
          <div
            className="circle circle2"
            id="mn"
            style={{ "--clr": "#fee800", transform: `rotateZ(${minutes*60}deg)` } as MyCustomCSS}
          >
            <i ></i>
          </div>
          <div
            className="circle circle3"
            id="hr"
            style={{ "--clr": "#ff2972", transform: `rotateZ(${(hours + minutes / 12) * 12}deg)` } as MyCustomCSS}
          >
            <i></i>
          </div>

          <span style={{ "--i": 1 } as MyCustomCSS}>
            <b>1</b>
          </span>
          <span style={{ "--i": 2 } as MyCustomCSS}>
            <b>2</b>
          </span>
          <span style={{ "--i": 3 } as MyCustomCSS}>
            <b>3</b>
          </span>
          <span style={{ "--i": 4 } as MyCustomCSS}>
            <b>4</b>
          </span>
          <span style={{ "--i": 5 } as MyCustomCSS}>
            <b>5</b>
          </span>
          <span style={{ "--i": 6 } as MyCustomCSS}>
            <b>6</b>
          </span>
          <span style={{ "--i": 7 } as MyCustomCSS}>
            <b>7</b>
          </span>
          <span style={{ "--i": 8 } as MyCustomCSS}>
            <b>8</b>
          </span>
          <span style={{ "--i": 9 } as MyCustomCSS}>
            <b>9</b>
          </span>
          <span style={{ "--i": 10 } as MyCustomCSS}>
            <b>10</b>
          </span>
          <span style={{ "--i": 11 } as MyCustomCSS}>
            <b>11</b>
          </span>
          <span style={{ "--i": 12 } as MyCustomCSS}>
            <b>12</b>
          </span>
          <span style={{ "--i": 13 } as MyCustomCSS}>
            <b>13</b>
          </span>
          <span style={{ "--i": 2 } as MyCustomCSS}>
            <b>2</b>
          </span>
          <span style={{ "--i": 3 } as MyCustomCSS}>
            <b>3</b>
          </span>
          <span style={{ "--i": 4 } as MyCustomCSS}>
            <b>4</b>
          </span>
          <span style={{ "--i": 5 } as MyCustomCSS}>
            <b>5</b>
          </span>
          <span style={{ "--i": 6 } as MyCustomCSS}>
            <b>6</b>
          </span>
          <span style={{ "--i": 7 } as MyCustomCSS}>
            <b>7</b>
          </span>
          <span style={{ "--i": 8 } as MyCustomCSS}>
            <b>8</b>
          </span>
          <span style={{ "--i": 9 } as MyCustomCSS}>
            <b>9</b>
          </span>
          <span style={{ "--i": 10 } as MyCustomCSS}>
            <b>10</b>
          </span>
          <span style={{ "--i": 11 } as MyCustomCSS}>
            <b>11</b>
          </span>
          <span style={{ "--i": 12 } as MyCustomCSS}>
            <b>12</b>
          </span>
        </div>

        <div id="time">
          <div className="date">
            <div style={{ "--clr": "#4b29ff" } as MyCustomCSS} id="days">
              {format(day)} dias
            </div>
          </div>
          <hr />
          <div className="hours">
            <div style={{ "--clr": "#ff2972" } as MyCustomCSS} id="hour">
              {format(hours)}
            </div>
            <div style={{ "--clr": "#fee800" } as MyCustomCSS} id="minutes">
              {format(minutes)}
            </div>
            <div style={{ "--clr": "#04fc43" } as MyCustomCSS} id="seconds">
              {format(seconds)}
            </div>
            <div id="ampm">TIME</div>
          </div>
        </div>
      </div>
    </>
  );
}
