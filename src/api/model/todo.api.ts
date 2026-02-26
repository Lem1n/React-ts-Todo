import { todoDtoSchema, type ITodo, type ITodoData } from "../../app/types/types";
import { api } from "./api";

export const todoApi = api.injectEndpoints({
	endpoints: (builder) => ({
        getTodo: builder.query<ITodo, number>({
            query: (id) => `todo/${id}`,
            providesTags: () => [
                {
                    type: "Todo",
                },
                ],
            transformResponse: (data: unknown) => todoDtoSchema.parse(data),
        }),
		addTodo: builder.mutation<null, ITodoData>({
			query: (data) => ({
				body: data,
				method: "POST",
				url: "/todo",
			}),
			invalidatesTags: () => [
				{
					type: "Todo",
				},
			],
		}),
		deleteTodo: builder.mutation<null, string>({
			query: (id) => ({
				method: "DELETE",
				url: `/todo/${id}`,
			}),
			invalidatesTags: () => [
				{
					type: "Todo",
				},
			],
		}),
		editTodo: builder.mutation<null, ITodo>({
			query: (data) => ({
				body: data,
				method: "PUT",
				url: `/todo/${data.id}`,
			}),
			invalidatesTags: () => [
				{
					type: "Todo",
				},
			],
		}),
	}),
});

export const { useGetTodoQuery ,useAddTodoMutation, useDeleteTodoMutation, useEditTodoMutation } = todoApi;
