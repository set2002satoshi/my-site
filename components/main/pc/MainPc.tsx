import styles from './MainPc.module.css'
import React, { useState } from 'react'
import Image from 'next/image'
import icon from '../../../images/a-2.jpg'

const MainPc = () => {
    return (
        <div>
          <div className={styles.content_one}>
            <div className={styles.content_one_icons}>
              <div className={styles.content_one_icon}>
              <Image
                src={icon}
                alt=""
                width={300}
                height={300}
              />
              </div>
            </div>
          </div>
          <div className={styles.content_one_texts}>
            <div className={styles.content_one_h}>
              <div className={styles.content_one_h1}>
              <p>
                I am User Interface<br />
                And Backend <br /> 
                Developer.
              </p>
              </div>
              <div className={styles.content_one_p}>
                <div className={styles.content_one_h2}>                
                <p>
                Hello! I am satoshi. a professional student user interface and  backend developer japan in Tokyo. I am very passionate about the work that ! do
                </p>
                </div>
              </div>
              <div className={styles.content_one_btn}>
                <div><button>See My Blogs</button></div>
                <div><button>See Git Link</button></div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default MainPc


