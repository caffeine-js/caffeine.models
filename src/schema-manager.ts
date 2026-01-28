import Compile from "typebox/compile";
import { Schema } from "./schema";

export const SchemaManager = {
	build(schema: string): Schema {
		const parsedSchema = JSON.parse(schema);

		return new Schema(parsedSchema);
	},

	isSchema(schema: unknown): boolean {
		try {
			if (typeof schema === "string") schema = JSON.parse(schema);

			Compile(schema as never);

			return true;
		} catch (_) {
			return false;
		}
	},
};
