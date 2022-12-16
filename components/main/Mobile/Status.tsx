import styles from './status.module.css'
import React, { useState } from 'react'
import Slider from "@mui/material/Slider";

type skill = {
    label: string,
    status: number,
    color: string,
}

const status = (props: skill) => {

  const statusNumber = [
    {
      value: props.status,
      label: `${props.status}%`,
    }
  ]


    return (
        <>
            <div className={styles.main_two_status_cord}>
              <div className={styles.main_two_status_one_label}>
                <p>{props.label}</p>
              </div>
              <div className={styles.main_two_status_one_status}>
              <Slider
                sx={{ color: props.color }}
                aria-label="Restricted values"
                defaultValue={props.status}
                step={null}
                valueLabelDisplay="auto"
                marks={statusNumber}
              />
              </div>
            </div>
        </>
    )
}

export default status

