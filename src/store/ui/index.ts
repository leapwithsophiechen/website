import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiStates {
  dialogMessage: string;
  dialogTitle: string;
  isCallingBlockingApi: boolean;
  isShowDialog: boolean;
  isShowNavDrawer: boolean;
}

const initialState: UiStates = {
  dialogMessage: '',
  dialogTitle: '',
  isCallingBlockingApi: false,
  isShowDialog: false,
  isShowNavDrawer: false,
};

export const uiSlice = createSlice({
  initialState,
  name: 'ui',
  reducers: {
    resetUi: (state) => {
      state.isCallingBlockingApi = false;
    },
    setDialogState: (state, action) => {
      const { payload } = action;
      const { isShow, message, title } = payload;
      state.isShowDialog = isShow;
      state.dialogTitle = title;
      state.dialogMessage = message;
    },
    setIsCallingBlockingApi: (state, { payload }: PayloadAction<boolean>) => {
      state.isCallingBlockingApi = payload;
    },
    setNavDrawerState: (state, { payload }: PayloadAction<boolean>) => {
      state.isShowNavDrawer = payload;
    },
    toggleDialogState: (state) => {
      state.isShowDialog = !state.isShowDialog;
    },
    toggleNavDrawer: (state) => {
      state.isShowNavDrawer = !state.isShowNavDrawer;
    },
  },
});

export default uiSlice.reducer;

//* Actions
export const {
  resetUi,
  setDialogState,
  setIsCallingBlockingApi,
  setNavDrawerState,
  toggleDialogState,
  toggleNavDrawer,
} = uiSlice.actions;
