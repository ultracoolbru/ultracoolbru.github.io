function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li><a href="/">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li className="downloadResume fa-li fa fa-check-square"><a href="#">Download Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;