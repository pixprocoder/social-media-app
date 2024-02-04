import { IReaction } from "@/types/newsfeed";
import { baseApi } from "./baseApi";

const commentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    submitReaction: build.mutation({
      query: (reaction: IReaction) => ({
        url: "/reaction",
        method: "POST",
        data: reaction,
      }),
      invalidatesTags: ["reaction"],
    }),

    getAllRection: build.query({
      query: (postid) => ({
        url: `/raction/${postid}`,
        method: "GET",
      }),
      providesTags: ["reaction"],
    }),
  }),
  overrideExisting: false,
});

export const { useSubmitReactionMutation, useGetAllRectionQuery } = commentApi;
