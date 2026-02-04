import { Type, type Static } from "@sinclair/typebox";

export const NumberDTO = Type.Number({
	minimum: 0,
	description: "A non-negative numeric value.",
	examples: [42],
});

export type NumberDTO = Static<typeof NumberDTO>;
