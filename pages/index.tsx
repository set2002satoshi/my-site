import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderMobileView from "../components/headers/Mobile/HeaderMobile"
import MainMobile from "../components/main/Mobile/MainMobile"
import MainMobileTow from "../components/main/Mobile/MainMobileTow"
import HeaderPcView from "../components/headers/pc/HeaderPc"
import { getWindowSize } from "../components/Hooks/GetWindowSize";

export default function Home() {
  const { height, width } = getWindowSize();
  switch (true) {

  }

  if (width < 624) {
    return (
      <div className={styles.container}>
        <HeaderMobileView />
        <div className={styles.main_one}>
          <MainMobile />
        </div>
        <div className={styles.main_two}>
          <div className={styles.main_two_wrap}>
            <MainMobileTow />
          </div>
        </div>
      </div>
    )
  } else if (width < 1224) {
    return (
      <div className={styles.container}>
        <HeaderPcView />
        <div className={styles.main}>
          aaa
        </div>
      </div>
    )
  } else {
    return (
      <>
        { width }
      </>
    )
  }

}
