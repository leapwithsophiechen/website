import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { uiSlice } from './ui';
import { vendorScriptsSlice } from './vendorScripts';

export const store = configureStore({
  reducer: {
    scripts: vendorScriptsSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
