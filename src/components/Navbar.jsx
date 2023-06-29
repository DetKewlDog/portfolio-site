import AnimatedLink from "./AnimatedLink";

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><span className="unselectable"><b>DetKewlDog</b></span></li>
                <li><AnimatedLink to="/" dir="<-">Home</AnimatedLink></li>
                <li><AnimatedLink to="/projects" dir="->">Projects</AnimatedLink></li>
            </ul>
        </div>
    );
}