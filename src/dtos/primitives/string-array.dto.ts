import { Type, type Static } from "@sinclair/typebox";

export const StringArrayDTO = Type.Array(Type.String(), {
	description: "A list of string values.",
	examples: [["item1", "item2"]],
});

export type StringArrayDTO = Static<typeof StringArrayDTO>;
