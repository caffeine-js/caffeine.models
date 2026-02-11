import { Type, type Static } from "@sinclair/typebox";

export const SlugDTO = Type.String({
	description: "The unique slug identifier of the resource to query.",
	examples: ["my-cool-post"],
	format: "slug",
	minLength: 1,
});

export type SlugDTO = Static<typeof SlugDTO>;
