import { StringArrayDTO } from "@/dtos/primitives";
import { Schema } from "@/schema";
import type { IValueObjectMetadata } from "@/types/value-object-metadata.interface";
import { InvalidPropertyException } from "@caffeine/errors/domain";

export class StringArrayVO {
	private constructor(public readonly value: string[]) {}

	public static make(data: IValueObjectMetadata<string[]>): StringArrayVO {
		if (!Schema.make(StringArrayDTO).match(data.value))
			throw new InvalidPropertyException(data.name, data.layer);

		return new StringArrayVO(data.value);
	}
}
