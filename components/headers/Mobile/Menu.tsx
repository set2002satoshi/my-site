import styles from './Menu.module.css'
import Link from 'next/link'
import React, { SetStateAction, Dispatch } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';


type MenuSignal = {
    setMenu: Dispatch<SetStateAction<boolean>>
    signals: Boolean
}



const Menu = (props: MenuSignal) =>{

    let menuUI;
    if (props.signals) {
        menuUI = <div className={styles.menu_bar_menu_btn}>
                    <button type="button" onClick={() => {props.setMenu(false)}} className={styles.menu_bar_icon_btn_entity}>
                        <CloseIcon />
                    </button>
                </div>;
    } else {
        menuUI = <div className={styles.menu_bar_menu_btn}>
                    <button type="button" onClick={() => {props.setMenu(true)}} className={styles.menu_bar_icon_btn_entity}>
                        <MenuIcon />
                    </button>
                </div>;
    }
    return (
        <>
            { menuUI }
        </>
    )
}

export default Menu