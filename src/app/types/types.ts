
import z from "zod";

export const todoDtoSchema = z.object({
	id: z.string(),
	title: z.string(),
	text: z.string(),
	completed: z.boolean(),
	createdAt: z.string(),
	DateComplete: z.union([z.string(), z.null()]).nullable(),
});

export type ITodo = z.infer<typeof todoDtoSchema>;
export type ITodoData = z.infer<typeof todoDtoSchema>;

export const todoListSchema = z.array(todoDtoSchema);

