'use client'

import Link from "next/link";
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTerminal} from "@fortawesome/free-solid-svg-icons"
import DarkModeButton from "./darkModeButton";
import { useRouter } from "next/navigation";

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
    const router = useRouter();

    return(
        <header className={styles.header}>
            <div className={styles.logoGroup} onClick={()=>{router.push(ROUTES_LIST[0].href)}}>
                <FontAwesomeIcon className={styles.logo} icon={faTerminal} />
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
