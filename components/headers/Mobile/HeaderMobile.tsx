import styles from './Header.module.css'
import React, { useState } from 'react'
import Menu from './Menu'

const HeaderMobileView = () => {

    const [Switch, setSwitch] = useState<boolean>(false)
    let menu
    if (Switch) {
        menu = <div className={styles.menu_cord}>
                    <div><a href="#">Home</a></div>
                    <div><a href="#">About</a></div>
                    <div><a href="#">Blogs</a></div>
                    <div><a href="#">Content</a></div>
                </div>;
    } else {
        menu = <></>;
    }
    return (
        <>
            <div className={styles.menu}>
                <div className={styles.menu_bar}>
                    <div className={styles.menu_bar_icon}>
                        <img src="https://placehold.jp/75x35.png" width="100%" height="100%"/>
                    </div>
                    <div className={styles.menu_bar_menu_btn}>
                        <Menu 
                        setMenu={setSwitch}
                        signals={Switch}
                        />
                    </div>
                </div>
            </div>
            { menu }
        </>
    )
}

export default HeaderMobileView


