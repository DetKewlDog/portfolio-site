import { useNavigate} from 'react-router-dom';

// THANK YOU DOT FOR THE TRANSITIONS
export default function AnimatedLink({ to, children }) {
	const navigate = useNavigate();
	return (
		<li>
			<a href={to}
				onClick={async (e) => {
					e.preventDefault();
					if (!document.startViewTransition || window.location.pathname === to) return navigate(to);
					try {
						await document.startViewTransition(() => {
							navigate(to);
							document.documentElement.scrollTo(0, 0);
						}).finished;
					}
					catch { navigate(to) }
				}}
			>
				{children}
			</a>
		</li>
	);
}