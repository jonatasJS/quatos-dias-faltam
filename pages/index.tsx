/* eslint-disable @next/next/no-sync-scripts */
<<<<<<< HEAD
import type { NextPage, PreviewData } from "next";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import moment, { DurationInputArg1 } from "moment";
import audio from "sound-play";
=======
import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import moment from "moment";
>>>>>>> parent of 758ccc8 (teste)

import { ModalTimeWedding, ModalTimeAffair } from "../components";

import styles from "../styles/Home.module.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import path from "path";
import { ParsedUrlQuery } from "querystring";

const Home: NextPage = () => {
  const [isShowedModalWedding, setIsShowedModalWedding] =
    useState<boolean>(false);
  const [isShowedModalAffair, setIsShowedModalAffair] =
    useState<boolean>(false);
  const [intervalTimeWedding, setIntervalTimeWedding] = useState<NodeJS.Timeout>(setInterval(() => {}, 0))
  const [intervalTimeAffair, setIntervalTimeAffair] = useState<NodeJS.Timeout>(setInterval(() => {}, 0));
  const [secondsResult, setSecondsResult] = useState<Number>(0);
  const [minutesResult, setMinutesResult] = useState<Number>(0);
  const [hoursResult, setHoursResult] = useState<Number>(0);
  const [dayResult, setDayResult] = useState<Number>(0);
  const [monthResult, setMonthResult] = useState<Number>(0);
  const [yearResult, setYearResult] = useState<Number>(0);

  function format(index: number) {
    if (index < 10) {
      const result = "0" + index;
      return Number(result);
    } else if (index > 9) {
      return Number(index);
    }
  }

  function startTimeWedding() {
    setIsShowedModalWedding(true);
    setIntervalTimeWedding(
      setInterval(async () => {
        clearInterval(intervalTimeAffair);
        const date = new Date(),
          day = format(date.getDate()),
          month = format(date.getMonth()),
          year = date.getFullYear(),
          hours = format(date.getHours()),
          minutes = format(date.getMinutes()),
          secondst = format(date.getSeconds()),
          dt = `${day}/${month}/${year} ${hours}:${minutes}:${secondst}`;

        const test = await moment(
          "30/11/2024 00:00:00",
          "DD/MM/YYYY HH:mm:ss"
        ).diff(moment(dt, "DD/MM/YYYY HH:mm:ss"));
        const ss = await moment.duration(test).asSeconds(),
          mm = await moment.duration(test).asMinutes(),
          HH = await moment.duration(test).asHours(),
          DD = await moment.duration(test).asDays(),
          MM = await moment.duration(test).asMonths(),
          YY = await moment.duration(test).asYears();

        setSecondsResult(ss);
        setMinutesResult(mm);
        setHoursResult(HH);
        setDayResult(DD);
        setMonthResult(MM);
        setYearResult(YY);
        setIsStarted(true);
      }, 1000)
    );
  }

  function startTimeAffair() {
    setIsShowedModalAffair(true);
    setIntervalTimeAffair(
      setInterval(async () => {
        clearInterval(intervalTimeWedding);
        const date = new Date(),
          day = format(date.getDate()),
          month = format(date.getMonth()),
          year = date.getFullYear(),
          hours = format(date.getHours()),
          minutes = format(date.getMinutes()),
          secondst = format(date.getSeconds()),
          dt = `${day}/${month}/${year} ${hours}:${minutes}:${secondst}`;

        const test = await moment(
          "30/10/2022 00:00:00",
          "DD/MM/YYYY HH:mm:ss"
        ).diff(moment(dt, "DD/MM/YYYY HH:mm:ss"));
        const ss = await moment.duration(test).asSeconds(),
          mm = await moment.duration(test).asMinutes(),
          HH = await moment.duration(test).asHours(),
          DD = await moment.duration(test).asDays(),
          MM = await moment.duration(test).asMonths(),
          YY = await moment.duration(test).asYears();

<<<<<<< HEAD
=======
        setSecondsResult(ss);
        setMinutesResult(mm);
        setHoursResult(HH);
        setDayResult(DD);
        setMonthResult(MM);
        setYearResult(YY);
        setIsStarted(true);
>>>>>>> parent of 758ccc8 (teste)
      }, 1000)
    );
  }

  return (
    <>
      <Head>
        <title>Tempo restante</title>
        <meta name="description" content="Tempo restante" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          rel="stylesheet"
        />
      </Head>

      <ModalTimeWedding
        secondsResult={secondsResult}
        minutesResult={minutesResult}
        hoursResult={hoursResult}
        dayResult={dayResult}
        monthResult={monthResult}
        yearResult={yearResult}
        isShow={isShowedModalWedding}
        toggle={() => {
          setIsShowedModalWedding(false);
          clearInterval(intervalTimeWedding); // eslint-ignore-line // eslint-disable-line
<<<<<<< HEAD
=======
          setSecondsResult(0);
          setMinutesResult(0);
          setHoursResult(0);
          setDayResult(0);
          setMonthResult(0);
          setYearResult(0);
          setIsStarted(false);
>>>>>>> parent of 758ccc8 (teste)
        }}
      />

      <ModalTimeAffair
        secondsResult={secondsResult}
        minutesResult={minutesResult}
        hoursResult={hoursResult}
        dayResult={dayResult}
        monthResult={monthResult}
        yearResult={yearResult}
        isShow={isShowedModalAffair}
        toggle={() => {
          setIsShowedModalAffair(false);
          clearInterval(intervalTimeAffair); // eslint-ignore-line // eslint-disable-line
<<<<<<< HEAD
=======
          setSecondsResult(0);
          setMinutesResult(0);
          setHoursResult(0);
          setDayResult(0);
          setMonthResult(0);
          setYearResult(0);
          setIsStarted(false);
>>>>>>> parent of 758ccc8 (teste)
        }}
      />

      <div className={styles.main}>
        <h5>Escolha uma opção:</h5>
        <div className={styles.buttons}>
          <button
            type="button"
            onClick={() => startTimeWedding()}
            className={`btn btn-primary ${styles.buttonPrimary}`}
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal"
          >
            Casamento
          </button>

          <button
            type="button"
            onClick={() => startTimeAffair()}
            className={`btn btn-success ${styles.buttonSuccess}`}
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal"
          >
            Namoro
          </button>
        </div>
      </div>

      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Home;

export async function getStaticProps(ctx: {
  params?: ParsedUrlQuery
  preview?: boolean
  previewData?: PreviewData
}) {
  async function startAudio() {
    await audio.play("../assets/music/music64.mp3", 0.3);
  }

  startAudio();

  return {
    props: { start: startAudio }
  }
  
}