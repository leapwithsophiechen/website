import { createSlice } from '@reduxjs/toolkit';

interface States {
  isRecaptchaLoaded: boolean;
}

const initialState: States = {
  isRecaptchaLoaded: false,
};

export const vendorScriptsSlice = createSlice({
  initialState,
  name: 'vendorScripts',
  reducers: {
    setRecaptcha: (state, action) => {
      const { payload } = action;
      state.isRecaptchaLoaded = payload;
    },
  },
});

export default vendorScriptsSlice.reducer;

//* Actions
export const { setRecaptcha } = vendorScriptsSlice.actions;
