import type { TSchema } from "@sinclair/typebox";
import { TypeCompiler, type TypeCheck } from "@sinclair/typebox/compiler";
import "./formats";

export class Schema {
	private compiledSchema: TypeCheck<TSchema>;

	constructor(private schema: TSchema) {
		this.compiledSchema = TypeCompiler.Compile(this.schema);
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
