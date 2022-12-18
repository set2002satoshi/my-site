import styles from './MainMobile.module.css'
import Image from 'next/image'
import React, { useState } from 'react'

const MainMobile = () => {
    return (
        <>
          <div className={styles.content_one}>
            <div className={styles.content_one_icons}>
              <div className={styles.content_one_icon}>
                <Image
                    src="https://placehold.jp/30x30.png"
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
                <div><button>See My Blogs</button></div>
                <div><button>See Git Link</button></div>
              </div>
            </div>
          </div>
        </>
    )
}

export default MainMobile


