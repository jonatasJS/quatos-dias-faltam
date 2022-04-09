/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import moment, { DurationInputArg1 } from "moment";
import {
  GiSpeakerOff as SpeakerOffIcon,
  GiSpeaker as SpeakerIcon,
} from "react-icons/gi";
import { BsFillHeartFill as HeartIcon } from "react-icons/bs";

import { ModalTime, Main } from "../components";

import styles from "../styles/Home.module.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const Home: NextPage = () => {
  const audio = useRef<HTMLAudioElement>(null!);
  const [isShowedModal, setIsShowedModal] = useState<boolean>(false);
  const [modalActive, setModalActive] = useState<string>("");
  const [isMudeAudio, setIsMudeAudio] = useState<boolean>(false);
  const [intervalTime, setIntervalTime] = useState<NodeJS.Timeout>(
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
    const audioSc: NodeJS.Timer = setInterval(() => {
      if (audio.current.currentTime !== 0) {
        setIsMudeAudio(true);
        return clearInterval(audioSc);
      } else {
        setIsMudeAudio(false);
        console.clear();
        audio.current.play();
        audio.current.volume = 0.3;
      }
    }, 500);
  }, []);

  function startTimeModal(timeEnd: string, modal: string) {
    setIsShowedModal(true);
    clearInterval(intervalTime);

    async function timer() {
      clearInterval(intervalTime);
      const date = new Date(),
        day = format(date.getDate()),
        month = format(date.getMonth()),
        year = date.getFullYear(),
        hours = format(date.getHours()),
        minutes = format(date.getMinutes()),
        secondst = format(date.getSeconds()),
        dt = `${day}/${month}/${year} ${hours}:${minutes}:${secondst}`;
      const test = await moment(timeEnd, "DD/MM/YYYY HH:mm:ss").diff(
        moment(dt, "DD/MM/YYYY HH:mm:ss")
      );

      setTotalTime(test);
    }

    setIntervalTime(setInterval(timer, 1000));
    setModalActive(modal);
  }

  function toggleAudio() {
    audio.current.muted = !audio.current.muted;
    setIsMudeAudio(!isMudeAudio);
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
        <meta property="og:locale" content="pt_BR"></meta>
        <meta property="og:url" content="https://time.jonatas.app"></meta>
        <meta property="og:title" content="Tempo restante" />
        <meta property="og:site_name" content="Tempo restante"></meta>
        <meta
          property="og:image"
          content="https://time.jonatas.app/media/images/time.jonatas.app.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1366" />
        <meta property="og:image:height" content="767" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="nopagereadaloud" />

        <style>
          {`
          #particles-js {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(117, 114, 113, 0.8) 10%, rgba(40, 49, 77, 0.8) 30%, rgba(29, 35, 71, 0.8) 50%, rgba(19, 25, 28, 0.8) 80%, rgba(15, 14, 14, .8) 100%), url(https://38.media.tumblr.com/tumblr_m00c3czJkM1qbukryo1_500.gif);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50% 50%;
          }
          `}
        </style>
      </Head>

      <body id="particles-js">
        <ModalTime
          totalTime={totalTime}
          isShow={isShowedModal}
          modalActive={modalActive}
          toggle={() => {
            setIsShowedModal(false);
            clearInterval(intervalTime);
            setModalActive("");
          }}
        />

        <div className={styles.music}>
          {isMudeAudio ? (
            <SpeakerIcon
              className={styles.speakerStyles}
              width={100}
              height={100}
              onClick={toggleAudio}
            />
          ) : (
            <SpeakerOffIcon
              className={`${styles.speakerStyles} ${styles.speakerOff}`}
              width={100}
              height={100}
              onClick={toggleAudio}
            />
          )}
          <h1>
            {" "}
            <HeartIcon className={styles.heart} /> AMO VOCÊ!!{" "}
            <HeartIcon className={styles.heart} />{" "}
          </h1>
        </div>

        <Main
          startTimeModal={startTimeModal}
          styles={styles}
        />

        <audio style={{ opacity: 0 }} ref={audio} autoPlay={true} loop={true}>
          <source src="/media/musics/playlist2.mp3" type="audio/mpeg" />
        </audio>
      </body>

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

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js"
        integrity="sha512-jq8sZI0I9Og0nnZ+CfJRnUzNSDKxr/5Bvha5bn7AHzTnRyxUfpUArMzfH++mwE/hb2efOo1gCAgI+1RMzf8F7g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></script>

      <script src="/scripts/snow.js"></script>
    </>
  );
};

export default Home;
