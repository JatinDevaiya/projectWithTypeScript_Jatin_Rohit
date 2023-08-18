import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://jsonplaceholder.typicode.com/",
    baseUrl:"https://api.escuelajs.co/api/v1/"
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "products",
    }),
  }),
});
export const { useGetAllUsersQuery }: any = usersApi;