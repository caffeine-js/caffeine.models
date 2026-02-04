import { Type, type Static } from "@sinclair/typebox";

export const ErrorTypeDTO = Type.Union(
	[
		Type.Literal("internal"),
		Type.Literal("domain"),
		Type.Literal("application"),
		Type.Literal("infra"),
	],
	{
		description: "The architectural layer where the error originated.",
		examples: ["domain"],
	},
);

export type ErrorTypeDTO = Static<typeof ErrorTypeDTO>;
