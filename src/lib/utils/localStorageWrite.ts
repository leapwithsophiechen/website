export const localStorageWrite = (key: string, value: string) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
