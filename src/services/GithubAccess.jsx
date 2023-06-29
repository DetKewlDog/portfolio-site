export default class GitHubAccess {
    static async fetchAboutMe() {
        try {
            const response = await fetch('https://api.github.com/repos/DetKewlDog/DetKewlDog/contents/README.md');
            if (response.ok) {
                const data = await response.json();
                const timestamp = new Date().getTime();
                return decodeURIComponent(escape(atob(data.content.replace(/\n/g, ''))))
                    .replace('DetKewlDog', 'Bar')
                    .replace('" alt="Top Lang"', `?${timestamp}" alt="Top Lang"`);
            } else {
                return 'Error fetching about me.';
            }
        } catch (error) {
            return 'Error fetching about me.';
        }
    }
}