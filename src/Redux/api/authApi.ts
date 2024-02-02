import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (user) => ({
        url: "/auth/register",
        method: "POST",
        data: user,
      }),
    }),
    login: build.mutation({
      query: (loginData: any) => ({
        url: "/auth/login",
        method: "POST",
        data: loginData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useRegisterMutation, useLoginMutation } = authApi;
