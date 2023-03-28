'use client'

import Link from "next/link";
import Image from "next/image";
import styles from './navbar.module.css';
import logo from "src/app/favicon.ico"
import DarkModeButton from "./darkModeButton";

class Route {
    title: string;
    href :string;

    constructor(title:string, href:string){
        this.title = title;
        this.href = href;
    }
}

const ROUTES_LIST:Route[] = [
    new Route("Home", "/"),
    new Route("About Me", "/about"),
    new Route("Contact", "/contact")
];


export default function Navbar() {
    return(
        <header className={styles.header}>
            <div className={styles.logoGroup}>
                <Image src={logo} alt={"logo"}></Image>
                <h1 className={styles.logoGroup}>ianbechard.ca</h1>
            </div>
            <div className={styles.linkList}>
            <nav>
                <ul className={styles.linkList}>
                    {ROUTES_LIST.map(route => (<Link className={styles.link} key={route.title} href={route.href}>{route.title}</Link>))}
                </ul>
            </nav>
            <DarkModeButton/>
            </div>
        </header>
    );
}
