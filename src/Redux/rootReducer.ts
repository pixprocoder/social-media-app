import authReducer from "./Slices/authSlice";
import themeReducer from "./Slices/themeSlice";
import NavbarSlice from "./Slices/navbarSlice";
import { baseApi } from "./api/baseApi";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  authSlice: authReducer,
  themeSlice: themeReducer,
  navbarSlice: NavbarSlice,
};

export default rootReducer;
