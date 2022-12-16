import styles from './MainMobileTow.module.css'
import React, { useState } from 'react'
import StatusCord from "./Status"

const MainMobileTow = () => {
    return (
      <>
        <div className={styles.main_two_explanation}>
          <div className={styles.main_two_explanation_h1}><p>What I Do?</p></div>
            <div className={styles.main_two_explanation_p}>
              <p>
                私は高校３年生から独学でプログラミングを勉強しました。
                最初はHTML・CSSといったマークアップ言語を学びjsやgolangといったバックエンドが中心に開発をすることが多いです。
                専門学校ではデザインを専門的に学びフロントのUI・UXから開発までもて抱けることができます。
              </p>
            </div>
          <div className={styles.main_two_status}>
            <StatusCord label="Front development" status={60} color="#4776ed" />
            <StatusCord label="Back development" status={75} color="#e9233d" />
            <StatusCord label="UIUX development" status={38} color="#a4ab8c" />
          </div>
        </div>
      </>
    )
}

export default MainMobileTow
