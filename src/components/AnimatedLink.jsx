import { useNavigate} from 'react-router-dom';

// THANK YOU DOT FOR THE TRANSITIONS
export default function AnimatedLink({ to, children, dir }) {
	const navigate = useNavigate();
	return (
        <a href={to}
		    onClick={async (e) => {
                e.preventDefault();
                if (!document.startViewTransition || window.location.pathname === to) return navigate(to);
                document.documentElement.classList.add(dir);
				try {
					await document.startViewTransition(() => {
						navigate(to);
						document.documentElement.scrollTo(0, 0);
					}).finished;
				}
                catch { navigate(to) }
                finally { document.documentElement.classList.remove(dir); }
		    }}
	    >
		    {children}
	    </a>
	);
}