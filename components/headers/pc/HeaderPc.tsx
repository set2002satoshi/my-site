import styles from './HeaderPc.module.css'
import React, { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const HeaderPcView = () => {


    return (
        <>
            <div className={styles.pc_menu}>
                <div className={styles.pc_menu_bar}>
                    <div className={styles.pc_menu_bar_icon}>
                        <img src="https://placehold.jp/75x35.png" width="100%" height="100%"/>
                    </div>
                    <div className={styles.pc_menu_bar_lists}>
                        <div>Home</div>
                        <div>About</div>
                        <div>Blogs</div>
                        <div>Content</div>
                    </div>
                    <div className={styles.pc_menu_bar_links}>
                        <div><GitHubIcon /></div>
                        <div><TwitterIcon /></div>
                        <div><InstagramIcon /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderPcView