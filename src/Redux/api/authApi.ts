import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (user: any) => ({
        url: "/auth/register",
        method: "POST",
        data: user,
      }),
    }),
    login: build.mutation({
      query: (user: any) => ({
        url: "/auth/login",
        method: "POST",
        data: user,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useRegisterMutation, useLoginMutation } = authApi;
