export const debounce = (
  func: (x: any) => void,
  delay: number,
  immediate?: boolean,
) => {
  let timerId: any;

  return (...args: any) => {
    const boundFunc = func.bind(this, ...args);

    clearTimeout(timerId);

    if (immediate && !timerId) {
      boundFunc();
    }

    const calleeFunc = immediate
      ? () => {
          timerId = null;
        }
      : boundFunc;
    timerId = setTimeout(calleeFunc, delay);
  };
};
