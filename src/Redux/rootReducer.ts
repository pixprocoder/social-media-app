import authReducer from "./Slices/authSlice";
import navbarReducer from "./Slices/navbarSlice";
import themeReducer from "./Slices/themeSlice";
import { baseApi } from "./api/baseApi";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  authSlice: authReducer,
  themeSlice: themeReducer,
  navbarSlice: navbarReducer,
};

export default rootReducer;
