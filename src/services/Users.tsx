import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    postAllUsers: builder.mutation({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginUser) => ({
        url: "/auth/login",
        method: "POST",
        body: loginUser,
      }),
    }),
    searchProduct: builder.query({
      query: (keyword) => `/products/?title=${keyword}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  usePostAllUsersMutation,
  useLoginUserMutation,
  useGetSingleProductQuery,
  useSearchProductQuery,
}: any = usersApi;
