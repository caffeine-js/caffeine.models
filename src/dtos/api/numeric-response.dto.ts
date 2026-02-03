import { Type, type Static } from "@sinclair/typebox";

export const NumericResponseDTO = Type.Number({
	description:
		"Response containing a single numeric value, such as a total count.",
	examples: [42],
});

export type NumericResponseDTO = Static<typeof NumericResponseDTO>;
