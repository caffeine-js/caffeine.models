import { Type, type Static } from "@sinclair/typebox";
import { UuidDTO } from "./uuid.dto";

export const UuidArrayDTO = Type.Array(UuidDTO, {
	description: "A list of UUID values.",
	examples: [["550e8400-e29b-41d4-a716-446655440000"]],
});

export type UuidArrayDTO = Static<typeof UuidArrayDTO>;
