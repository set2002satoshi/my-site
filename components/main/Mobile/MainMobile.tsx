import Link from 'next/link'
import styles from './MainMobile.module.css'
import Image from 'next/image'
import React from 'react'
import icon from '../../../images/a-4.jpg'

const MainMobile = () => {
    return (
        <>
          <div className={styles.content_one}>
            <div className={styles.content_one_icons}>
              <div className={styles.content_one_icon}>
                <Image
                  src={icon}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.content_one_h}>
              <div className={styles.content_one_h1}>
              <p>
                I am User Interface<br />
                And Backend Developer.
              </p>
              </div>
              <div className={styles.content_one_p}>
                <div className={styles.content_one_h2}>                
                <p>
                Hello! I am satoshi. a professional student <br /> user interface and  backend developer <br /> japan in Tokyo. I am very passionate about <br /> the work that ! do
                </p>
                </div>
              </div>
              <div className={styles.content_one_btn}>
                <div><button >See My Blogs</button></div>
                <div><Link href="https://github.com/set2002satoshi"><button>See Git Link</button></Link></div>
              </div>
            </div>
          </div>
        </>
    )
}

export default MainMobile


