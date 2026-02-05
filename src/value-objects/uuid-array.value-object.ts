import { UuidArrayDTO } from "@/dtos/primitives";
import { Schema } from "@/schema";
import type { IValueObjectMetadata } from "@/types/value-object-metadata.interface";
import { InvalidPropertyException } from "@caffeine/errors/domain";

export class UuidArrayVO {
	private constructor(public readonly value: string[]) {}

	public static make(data: IValueObjectMetadata<string[]>): UuidArrayVO {
		if (!Schema.make(UuidArrayDTO).match(data.value))
			throw new InvalidPropertyException(data.name, data.layer);

		return new UuidArrayVO(data.value);
	}
}
