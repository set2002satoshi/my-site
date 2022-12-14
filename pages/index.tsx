import Head from 'next/head';
import styles from '../styles/Home.module.css'
import HeaderMobileView from "../components/headers/Mobile/HeaderMobile"
import MainMobile from "../components/main/Mobile/MainMobile"
import MainMobileTow from "../components/main/Mobile/MainMobileTow"
import BlogsMobile from "../components/blogs/mobile/BlogsMobile"
import FormsMobile from "../components/form/mobile/FormsMobile"
import HeaderPcView from "../components/headers/pc/HeaderPc"
import MainPc from "../components/main/pc/MainPc"
import MainPcTwo from "../components/main/pc/MainPcTow"
import FormsPc from "../components/form/pc/FormsPc"
import BlogsPc from "../components/blogs/pc/BlogsPc"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { GetWindowSize } from "../components/Hooks/GetWindowSize";

export default function Home() {
  const { height, width } = GetWindowSize();

  if (width < 200) {
    return (
      <>
        <div className="load_component">
          <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
            <div className="wheel"></div>
            <div className="hamster">
              <div className="hamster__body">
                <div className="hamster__head">
                  <div className="hamster__ear"></div>
                  <div className="hamster__eye"></div>
                  <div className="hamster__nose"></div>
                </div>
                <div className="hamster__limb hamster__limb--fr"></div>
                <div className="hamster__limb hamster__limb--fl"></div>
                <div className="hamster__limb hamster__limb--br"></div>
                <div className="hamster__limb hamster__limb--bl"></div>
                <div className="hamster__tail"></div>
              </div>
            </div>
            <div className="spoke"></div>
          </div>
        </div>
      </>
    )
  } else if (width < 724) {
    return (
      <div className={styles.container}>
        <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <HeaderMobileView />
        <div className={styles.main_one}>
          <MainMobile />
        </div>
        <div className={styles.main_two}>
          <div className={styles.main_two_wrap}>
            <MainMobileTow />
          </div>
          <div className={styles.main_blogs}>
            <div className={styles.main_blogs_wrap}>
              <BlogsMobile />
            </div>
        </div>
        </div>
        <div className={styles.main_three}>
          <div className={styles.main_three_wrap}>
            <FormsMobile />
          </div>
        </div>
      </div>
    )
  } else if(724 < width) {
    
    return (
      <div className={styles.container}>
        <HeaderPcView />
        <div className={styles.main_one_pc}>
          <MainPc />
        </div>
        <div className={styles.main_two}>
          <div className={styles.main_two_wrap}>
            <MainPcTwo />
          </div>
        </div>
        <div className={styles.main_blogs}>
          <div className={styles.main_blogs_pc_wrap}>
            <BlogsPc />
          </div>
        </div>
        <div className={styles.main_three}>
          <div className={styles.main_three_wrap}>
            <FormsPc />
          </div>
        </div>
      </div>
    )
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );

}
