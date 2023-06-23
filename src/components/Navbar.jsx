import { useNavigate} from 'react-router-dom';

const AnimatedLink = ({ to, children, dir }) => {
	const navigate = useNavigate();

	return (
        <a
		    href={to}
		    onClick={async (e) => {
                e.preventDefault();
                if (document.startViewTransition) {
                    document.documentElement.classList.add(`anim-${dir}`);
                    const transition = document.startViewTransition(() => navigate(to));

				    try { await transition.finished; }
                    finally { document.documentElement.classList.remove(`anim-${dir}`); }
                }
                else navigate(to);
		    }}
	    >
		    {children}
	    </a>
	);
};


function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><span className="unselectable"><b>DetKewlDog</b></span></li>
                <li><AnimatedLink to="/" dir="right-to-left">Home</AnimatedLink></li>
                <li><AnimatedLink to="/projects" dir="left-to-right">Projects</AnimatedLink></li>
            </ul>
        </div>
    );
}

export default Navbar;