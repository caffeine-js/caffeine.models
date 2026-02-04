import { TypeCompiler } from "@sinclair/typebox/compiler";
import { Schema } from "./schema";
import { hydrateSchema } from "@/utils/hydrate-schema";

export const SchemaManager = {
	build(schema: string): Schema {
		const parsedSchema = JSON.parse(schema);
		const hydrated = hydrateSchema(parsedSchema);

		return new Schema(hydrated);
	},

	isSchema(schema: unknown): boolean {
		try {
			if (typeof schema === "string") schema = JSON.parse(schema);

			const hydrated = hydrateSchema(schema);
			TypeCompiler.Compile(hydrated as never);

			return true;
		} catch (_) {
			return false;
		}
	},
};
