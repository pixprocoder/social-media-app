import authReducer from "./Slices/authSlice";
import themeReducer from "./Slices/themeSlice";
import { baseApi } from "./api/baseApi";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  authSlice: authReducer,
  themeSlice: themeReducer,
};

export default rootReducer;
