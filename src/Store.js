import { writable } from 'svelte/store';

const AppDataStore = writable({
	siteName: 'Better Clarity'
});

export default AppDataStore;
