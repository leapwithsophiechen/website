interface LocalStorageReadInput {
  defaultValue?: any;
  key: string;
  type: 'JSON' | 'STRING';
}

export const localStorageRead = (props: LocalStorageReadInput) => {
  //
  const { defaultValue, key, type } = props;

  const raw = window.localStorage.getItem(key);

  if (raw) {
    if (type === 'JSON') {
      return JSON.parse(raw);
    }
    if (type === 'STRING') {
      return String(raw);
    }
  }

  if (!raw && defaultValue) {
    return defaultValue;
  }

  return null;
};
