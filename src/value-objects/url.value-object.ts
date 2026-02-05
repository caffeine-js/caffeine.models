import { UrlDTO } from "@/dtos/primitives";
import { Schema } from "@/schema";
import type { IValueObjectMetadata } from "@/types/value-object-metadata.interface";
import { InvalidPropertyException } from "@caffeine/errors/domain";

export class UrlVO {
	protected constructor(public readonly value: string) {}

	public static make(data: IValueObjectMetadata<string>): UrlVO {
		if (!Schema.make(UrlDTO).match(data.value))
			throw new InvalidPropertyException(data.name, data.layer);

		return new UrlVO(data.value);
	}
}
