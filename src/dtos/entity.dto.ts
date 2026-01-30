import * as t from "@sinclair/typebox/type";

export const EntityDTO = t.Object({
	id: t.String({ format: "uuid", description: "Entity's Id" }),
	createdAt: t.String({
		format: "date-time",
		description: "When Entity was Created.",
	}),
	updatedAt: t.Optional(
		t.String({
			format: "date-time",
			description: "When Entity was Updated.",
		}),
	),
});

export type EntityDTO = t.Static<typeof EntityDTO>;
