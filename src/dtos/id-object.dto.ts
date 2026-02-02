import { Type, type Static } from "@sinclair/typebox";

export const IdObjectDTO = Type.Object(
	{
		id: Type.String({
			format: "uuid",
			description: "The unique UUID identifier of the resource to query.",
			examples: ["550e8400-e29b-41d4-a716-446655440000"],
		}),
	},
	{
		description: "Query parameters for retrieving a resource by its UUID.",
		examples: [{ uuid: "550e8400-e29b-41d4-a716-446655440000" }],
	},
);

export type IdObjectDTO = Static<typeof IdObjectDTO>;
