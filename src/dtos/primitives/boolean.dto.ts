import { Type, type Static } from "@sinclair/typebox";

export const BooleanDTO = Type.Boolean({
	description: "A boolean value.",
	examples: [true, false],
});

export type BooleanDTO = Static<typeof BooleanDTO>;
