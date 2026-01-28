import type { TProperties, TSchema } from "typebox";
import { Compile, type Validator } from "typebox/compile";

export class Schema {
	private compiledSchema: Validator<TProperties, TSchema, unknown, unknown>;

	constructor(private schema: TSchema) {
		this.compiledSchema = Compile(this.schema);
	}

	static make(schema: TSchema): Schema {
		return new Schema(schema);
	}

	public match(content: unknown): boolean {
		return this.compiledSchema.Check(content);
	}

	public toString(): string {
		return JSON.stringify(this.schema);
	}

	public toJSON(): typeof this.schema {
		return this.schema;
	}
}
