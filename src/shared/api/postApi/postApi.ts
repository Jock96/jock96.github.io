import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IPost } from "../../../entities";
import { endpoints } from "../endpoints";

export const postApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: endpoints.posts }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], {}>({
      query: () => "",
      merge: (currentData, newData) => [...currentData, ...newData]
    }),
    getPostById: builder.query<IPost, number>({
      query: (id) => endpoints.post(id),
    }),
  }),
});
