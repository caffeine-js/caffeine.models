import { Type, type Static } from "@sinclair/typebox";

export const SlugObjectDTO = Type.Object(
	{
		slug: Type.String({
			description: "The unique slug identifier of the resource to query.",
			examples: ["my-cool-post"],
		}),
	},
	{
		description: "Query parameters for retrieving a resource by its slug.",
		examples: [{ slug: "my-cool-post" }],
	},
);

export type SlugObjectDTO = Static<typeof SlugObjectDTO>;
