import '../index.css';

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><span className="unselectable"><b>DetKewlDog</b></span></li>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
        </div>
    );
}

export default Navbar;