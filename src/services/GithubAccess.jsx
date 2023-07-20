export default class GitHubAccess {
    static async fetchAboutMe() {
        try {
            const response = await fetch('https://api.github.com/repos/DetKewlDog/DetKewlDog/contents/README.md', {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            });
            if (!response.ok) {
                return 'Error fetching about me.';
            }
            const data = await response.json();
            // using a timestamp in order to make the stats graph unique every time, so it wont be cached and would animate every time
            const timestamp = new Date().getTime();
            return decodeURIComponent(escape(atob(data.content.replace(/\n/g, '').replace(/ /g, ''))))
                .replace('" alt="Top Lang"', `?${timestamp}" alt="Top Lang"`);
        } catch (error) {
            return 'Error fetching about me.';
        }
    }
}