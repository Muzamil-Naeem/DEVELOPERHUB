import '../styles/header.css';
export default function Header(){
    return (
        <header className="header">
            <h1>DeveloperHub</h1>  
            <nav className="nav-links">     
                <a href="/">Home</a>
                <a href="/About">About Us</a>
                <a href="/Portfolio">Portfolio</a>
                <a href="/Contact">Contact</a>
                <a href="/Booking">Booking</a>
                <a href="/Blog">Blog</a>
            </nav>

        </header>
    )
}