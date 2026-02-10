import type { TSchema } from "@sinclair/typebox";
import type { Schema } from "./schema";
import type { IValueObjectMetadata } from "./types";
import { InvalidPropertyException } from "@caffeine/errors/domain";

export abstract class ValueObject<ValueType, SchemaType extends TSchema> {
	protected abstract readonly schema: Schema<SchemaType>;

	protected constructor(
		public readonly value: ValueType,
		protected readonly info: IValueObjectMetadata,
	) {}

	protected validate(): void {
		if (!this.schema.match(this.value))
			throw new InvalidPropertyException(this.info.name, this.info.layer);
	}
}
