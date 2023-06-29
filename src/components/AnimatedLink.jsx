import { useNavigate} from 'react-router-dom';

// THANK YOU DOT FOR THE TRANSITIONS
export default function AnimatedLink({ to, children, dir }) {
	const navigate = useNavigate();
	return (
        <a href={to}
		    onClick={async (e) => {
                e.preventDefault();
                if (window.location.pathname === to) return navigate(to);
                document.documentElement.classList.add(dir);
                try { await document.startViewTransition(() => navigate(to)).finished; }
                finally { document.documentElement.classList.remove(dir); }
		    }}
	    >
		    {children}
	    </a>
	);
}