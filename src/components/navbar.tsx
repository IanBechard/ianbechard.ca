import Link from "next/link";

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
        <header>
            <nav>
                {ROUTES_LIST.map(route => (<Link key={route.title} href={route.href}>{route.title}</Link>))}
            </nav>
        </header>
    );
}
