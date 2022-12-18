import styles from './FormsMobile.module.css'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const FormsMobile = () => {

    return (
        <div className={styles.form_main}>
            <div className={styles.form_text}>
                <div className={styles.form_h}>
                    <p>
                    If you like what you
                    see, let’s talk 
                    together
                    </p>
                </div>
                <div className={styles.from_p}>
                    <p>
                    I am happy to hear from you, <br />
                    please submit any comments or <br />
                    requests using this form! <br />
                    </p>
                </div>
            </div>
            <div className={styles.form_text_area}>
                <div className={styles.form_test_area_short}>
                    <div className={styles.form_text_area_short_one}>
                        <TextField fullWidth label="name*" id="fullWidth" />
                    </div>
                    <div className={styles.form_text_area_short_two}>
                        <TextField fullWidth label="email*" id="fullWidth" />
                    </div>
                </div>
                <div className={styles.form_text_area_long}>
                <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Message*"
                    multiline
                    rows={4}
                />
                </div>
                <div className={styles.form_btn}>
                    <Button variant="contained">submit</Button>
                </div>
            </div>
        </div>
    )
}

export default FormsMobile


