function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">RESUME</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">PROJECTS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            <ul>
                <li className="downloadResume"><a href="#">Download Resume</a></li>
            </ul>
        </div>
    )
}

export default Navbar;