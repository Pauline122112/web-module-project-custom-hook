import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		if (localStorage.getItem(key)) {
			return JSON.parse(localStorage.getItem(key));
		}

		localStorage.setItem(key, JSON.stringify(initialValue));
		return initialValue;
	});

	const setLocalStorageValue = (value) => {
		setValue(value);
		localStorage.setItem(key, JSON.stringify(value));
	};

	return [value, setLocalStorageValue];
};
