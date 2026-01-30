import { Type, type Static } from "@sinclair/typebox";

export const PaginationDTO = Type.Object(
	{
		page: Type.Number({
			description: "The page number to retrieve.",
			minimum: 1,
			default: 1,
			examples: [1],
		}),
	},
	{
		description: "Pagination options for listing resources.",
		examples: [{ page: 1 }],
	},
);

export type PaginationDTO = Static<typeof PaginationDTO>;
