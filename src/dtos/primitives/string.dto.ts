import { Type, type Static } from "@sinclair/typebox";

export const StringDTO = Type.String({
	minLength: 1,
	description: "A non-empty string value.",
	examples: ["Hello World"],
});

export type StringDTO = Static<typeof StringDTO>;
