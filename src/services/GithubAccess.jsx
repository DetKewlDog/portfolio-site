export default class GitHubAccess {
    static async fetchAboutMe() {
        try {
            const response = await fetch('https://raw.githubusercontent.com/DetKewlDog/DetKewlDog/main/README.md');
            if (!response.ok) {
                return 'Error fetching about me.';
            }
            const data = await response.text();
            // using a timestamp in order to make the stats graph unique every time, so it wont be cached and would animate every time
            const timestamp = new Date().getTime();
            return decodeURI(data.replace('" alt="Top Lang"', `?${timestamp}" alt="Top Lang"`));
        } catch (error) {
            console.error(error)
            return 'Error fetching about me.';
        }
    }
}