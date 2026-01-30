import { Type, type Static } from "@sinclair/typebox";

export const AuthorizationDTO = Type.Object(
	{
		Authorization: Type.String({
			description: "Authentication token in Bearer format.",
			examples: ["Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."],
		}),
	},
	{
		description: "DTO containing the necessary authorization headers.",
	},
);

export type AuthorizationDTO = Static<typeof AuthorizationDTO>;
