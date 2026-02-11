import { Type, type Static } from "@sinclair/typebox";
import { SlugDTO } from "./primitives/slug.dto";

export const SlugObjectDTO = Type.Object(
	{
		slug: SlugDTO,
	},
	{
		description: "Query parameters for retrieving a resource by its slug.",
		examples: [{ slug: "my-cool-post" }],
	},
);

export type SlugObjectDTO = Static<typeof SlugObjectDTO>;
