import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { todoListSchema, type ITodo } from "../../app/types/types";
const baseURL = "https://697731c05b9c0aed1e85aa47.mockapi.io/api/test";

export const api = createApi({
	reducerPath: "api",
	tagTypes: ["Todo"],
	baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
	endpoints: (builder) => ({
		getTodos: builder.query<ITodo[], void>({
			query: () => "/todo",
			providesTags: () => [
				{
					type: "Todo",
				},
			],
			transformResponse: (data: unknown) => todoListSchema.parse(data),
		}),
	}),
});

export const { useGetTodosQuery } = api;
