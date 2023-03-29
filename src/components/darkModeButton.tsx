'use client'

import styles from "./darkModeButton.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from 'react';

export default function DarkModeButton(){
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => { //Listener for inital OS dark mode preference and trigger changes on OS toggle
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
        setDarkMode(prefersDark.matches);
        prefersDark.addEventListener("change", (event)=>{setDarkMode(event.matches)});

        return () => {
            prefersDark.removeEventListener("change", (event)=>{setDarkMode(event.matches)});
        };

    }, []);

    useEffect(() =>{ //toggles class .dark for all css on isDarkMode change
        if(darkMode){
            document.documentElement.classList.add('darkMode');
        }else{
            document.documentElement.classList.remove('darkMode');
        }
    }, [darkMode]);


    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <button className={styles.btn} onClick={handleToggle}>
            {darkMode ? <FontAwesomeIcon icon={faMoon} className={styles.icon} /> : 
                        <FontAwesomeIcon icon={faSun} className={styles.icon} />}
        </button>
    );
};
