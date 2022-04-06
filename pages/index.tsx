/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import moment, { DurationInputArg1 } from "moment";

import { ModalTimeWedding, ModalTimeAffair, ButtonModal } from "../components";

import styles from "../styles/Home.module.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const Home: NextPage = () => {
  const audio = useRef<HTMLAudioElement>(null!);
  const [isShowedModalWedding, setIsShowedModalWedding] =
    useState<boolean>(false);
  const [isShowedModalAffair, setIsShowedModalAffair] =
    useState<boolean>(false);
  const [intervalTimeWedding, setIntervalTimeWedding] =
    useState<NodeJS.Timeout>(setInterval(() => {}, 0));
  const [intervalTimeAffair, setIntervalTimeAffair] = useState<NodeJS.Timeout>(
    setInterval(() => {}, 0)
  );
  const [totalTime, setTotalTime] = useState<DurationInputArg1>(0);

  function format(index: number) {
    if (index < 10) {
      const result = "0" + index;
      return Number(result);
    } else if (index > 9) {
      return Number(index);
    }
  }

  useEffect(() => {
    audio.current.play();
    audio.current.volume = 0.3;
  }, []);

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

        setTotalTime(test);
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
        totalTime={totalTime}
        isShow={isShowedModalWedding}
        toggle={() => {
          setIsShowedModalWedding(false);
          clearInterval(intervalTimeWedding); // eslint-ignore-line // eslint-disable-line
        }}
      />

      <ModalTimeAffair
        totalTime={totalTime}
        isShow={isShowedModalAffair}
        toggle={() => {
          setIsShowedModalAffair(false);
          clearInterval(intervalTimeAffair); // eslint-ignore-line // eslint-disable-line
        }}
      />

      <div className={styles.main}>
        <h5>Escolha uma opção:</h5>
        <div className={styles.buttons}>
          <ButtonModal
            onClick={() => startTimeWedding()}
            className={`btn btn-primary ${styles.buttonPrimary}`}
          >
            Casamento
          </ButtonModal>

          <ButtonModal
            onClick={() => startTimeAffair()}
            className={`btn btn-success ${styles.buttonSuccess}`}
          >
            Namoro
          </ButtonModal>
        </div>
      </div>

      <audio
        ref={audio}
        src="/media/musics/playlist2.mp3"
      ></audio>

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