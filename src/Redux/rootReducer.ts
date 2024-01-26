import authSlice from "./Slices/authSlice";
import { baseApi } from "./api/baseApi";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  authSlice: authSlice,
};

export default rootReducer;
