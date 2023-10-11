import { useNavigate} from 'react-router-dom';

// THANK YOU DOT FOR THE TRANSITIONS
export default function NavbarLink({ to, text, dir }) {
	const navigate = useNavigate();
	const handleClick = async (e) => {
		e.preventDefault();
		if (!document.startViewTransition || window.location.pathname === to) {
			return navigate(to);
		}
		let content = document.querySelector('#content');
		content.classList.add(dir);
		try {
			await document.startViewTransition(() => {
				navigate(to);
				document.documentElement.scrollTo(0, 0);
			}).finished;
		}
		catch { navigate(to); }
		finally { content.classList.remove(dir); }
	}
	return (
		<li>
			<a href={to} onClick={handleClick} name={text}>
				{text}
			</a>
		</li>
	);
}