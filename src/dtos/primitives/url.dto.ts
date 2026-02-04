import { Type, type Static } from "@sinclair/typebox";

export const UrlDTO = Type.String({
	description: "The URL or path to the cover image of the post.",
	examples: ["https://example.com/cover.jpg"],
	format: "url",
});

export type UrlDTO = Static<typeof UrlDTO>;
