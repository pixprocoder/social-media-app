import { IComment_reply } from "@/types/newsfeed";
import { baseApi } from "./baseApi";

const comment_replyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    submitComment_reply: build.mutation({
      query: (comment: IComment_reply) => ({
        url: "/comment-reply",
        method: "POST",
        data: comment,
      }),
      invalidatesTags: ["comment_reply"],
    }),

    getAllComment_replies: build.query({
      query: (comment_id) => ({
        url: `/comment-reply/${comment_id}`,
        method: "GET",
      }),
      providesTags: ["comment_reply"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useSubmitComment_replyMutation,
  useLazyGetAllComment_repliesQuery,
} = comment_replyApi;
