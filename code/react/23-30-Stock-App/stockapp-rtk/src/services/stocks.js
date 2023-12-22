// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

// Define a service using a base URL and expected endpoints
export const stocksApi = createApi({
  reducerPath: "stocksApi",
  tagTypes: ["Stocks"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Token ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getStocks: builder.query({
      query: (query) => query,
      providesTags: ["Stocks"],
      transformResponse:(response)=>{
        return response.data
      },
    }),
    postStock: builder.mutation({
      query: ({query,info}) => {
        console.log(info)
        return { url: query, method: "POST", body: info };
      },
      invalidatesTags: ["Stocks"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
    deleteStock: builder.mutation({
      query: ({query,id}) => ({
        url: `${query}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Stocks"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
    updateStock: builder.mutation({
      query: ({query,info}) => ({
        url: `${query}/${info._id}`,
        method: "PUT",
        body: info,
      }),
      invalidatesTags: ["Stocks"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetStocksQuery,
  usePostStockMutation,
  useDeleteStockMutation,
  useUpdateStockMutation,
} = stocksApi;
