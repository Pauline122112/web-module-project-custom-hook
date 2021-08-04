import { useLocalStorage } from './LocalStorage'

export const useDarkMode = (initialValue) => {
	const [value, setValue] = useLocalStorage(initialValue, false);

	return [value, setValue];
};