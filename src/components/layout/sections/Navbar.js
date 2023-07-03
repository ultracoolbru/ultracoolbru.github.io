function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul>
                <li className="downloadResume"><a href="#">Download Resume</a></li>
            </ul>
        </div>
    )
}

export default Navbar;