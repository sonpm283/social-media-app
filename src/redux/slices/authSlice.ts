import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInfo {
  id: string;
  userName: string;
  email: string;
  avatar: string;
}

interface Auth {
  accessToken: string | null;
  refreshToken: string | null;
  userInfo: UserInfo | null;
}

const initialState: Auth = {
  accessToken: null,
  refreshToken: null,
  userInfo: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Omit<Auth, "userInfo">>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logOut: () => {
      return initialState;
    },
    saveUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { login, logOut, saveUserInfo } = authSlice.actions;
export default authSlice.reducer;
