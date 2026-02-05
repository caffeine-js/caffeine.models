import { Type, type Static } from "@sinclair/typebox";
import { UuidDTO } from "./primitives";

export const IdObjectDTO = Type.Object(
	{
		id: UuidDTO,
	},
	{
		description: "Query parameters for retrieving a resource by its UUID.",
		examples: [{ uuid: "550e8400-e29b-41d4-a716-446655440000" }],
		additionalProperties: false,
	},
);

export type IdObjectDTO = Static<typeof IdObjectDTO>;
