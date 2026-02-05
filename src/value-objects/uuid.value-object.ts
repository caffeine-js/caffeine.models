import { UuidDTO } from "@/dtos/primitives";
import { Schema } from "@/schema";
import type { IValueObjectMetadata } from "@/types/value-object-metadata.interface";
import { InvalidPropertyException } from "@caffeine/errors/domain";

export class UuidVO {
	protected constructor(public readonly value: string) {}

	public static make(data: IValueObjectMetadata<string>): UuidVO {
		if (!Schema.make(UuidDTO).match(data.value))
			throw new InvalidPropertyException(data.name, data.layer);

		return new UuidVO(data.value);
	}
}
