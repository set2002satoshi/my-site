import styles from './FormsPc.module.css'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const FormsPc = () => {

    return (
        <div className={styles.form_main}>
            <div className={styles.form_text}>
                <div className={styles.form_h}>
                    <p>
                    If you like what you <br />
                    see, let’s talk <br />
                    together
                    </p>
                </div>
                <div className={styles.from_p}>
                    <p>
                    I am happy to hear from you, please <br />
                    submit any comments or requests <br />
                    using this form! <br />
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

export default FormsPc


