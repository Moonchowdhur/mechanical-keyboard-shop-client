import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    // getProducts: builder.query({
    //   query: () => {
    //     return {
    //       url: "/product",
    //       method: "GET",
    //     };
    //   },
    //   providesTags: ["products"],
    // }),
    getProducts: builder.query({
      query: (filters) => {
        const params = new URLSearchParams(filters).toString();
        console.log(params);
        return {
          url: `/product?${params}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    addProduct: builder.mutation({
      query: (product) => {
        console.log("saving data==>", product);
        return {
          url: "/product/create-product",
          method: "POST",
          body: product,
        };
      },
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    updateSingleProduct: builder.mutation({
      query: (options) => {
        console.log("inside base api ==>", options);
        return {
          url: `/product/${options.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["products"],
    }),
    // updateQuantity: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/product/quantity/${id}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["products"],
    // }),
    updateQuantities: builder.mutation({
      query: (updates) => {
        console.log("updates api==>", updates.updates);
        return {
          url: "/product/quantity",
          method: "PUT",
          body: updates,
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateSingleProductMutation,
  useUpdateQuantitiesMutation,
} = baseApi;
