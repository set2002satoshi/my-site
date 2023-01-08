import Link from 'next/link'
import styles from './HeaderPc.module.css'
import Image from 'next/image'
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
                    <Image
                        src="https://placehold.jp/75x35.png"
                        alt=""
                        width={100}
                        height={100}
                    />
                    </div>
                    <div className={styles.pc_menu_bar_lists}>
                        <div>Home</div>
                        <div>About</div>
                        <div>Blogs</div>
                        <div>Content</div>
                    </div>
                    <div className={styles.pc_menu_bar_links}>
                        <div><Link href="https://github.com/set2002satoshi" ><GitHubIcon /></Link></div>
                        <div><TwitterIcon /></div>
                        <div><Link href=""><InstagramIcon /></Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderPcView