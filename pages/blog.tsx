import Head from 'next/head';
import styles from '../styles/Home.module.css'
import HeaderMobileView from "../components/headers/Mobile/HeaderMobile"
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
        <div>
            <HeaderMobileView />
            <div>
                <div>
                    
                </div>
            </div>
        </div>
    )
  } else if(724 < width) {
    
    return (
      
    )
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );

}
