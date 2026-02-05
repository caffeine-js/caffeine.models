import { StringDTO } from "@/dtos/primitives";
import { Schema } from "@/schema";
import type { IValueObjectMetadata } from "@/types/value-object-metadata.interface";
import { InvalidPropertyException } from "@caffeine/errors/domain";

export class DefinedStringVO {
	protected constructor(public readonly value: string) {}

	public static make(data: IValueObjectMetadata<string>): DefinedStringVO {
		if (!Schema.make(StringDTO).match(data.value))
			throw new InvalidPropertyException(data.name, data.layer);

		return new DefinedStringVO(data.value);
	}
}
