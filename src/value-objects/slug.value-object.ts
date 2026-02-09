import { InvalidPropertyException } from "@caffeine/errors/domain";
import { DefinedStringVO } from "./defined-string.value-object";
import type { IValueObjectMetadata } from "@/types";
import slugify from "slugify";
import { Schema } from "@/schema";
import { StringDTO } from "@/dtos/primitives";

export class SlugVO extends DefinedStringVO {
	private constructor(value: string) {
		super(value);
	}

	public static override make(data: IValueObjectMetadata<string>): SlugVO {
		const value = slugify(data.value);

		if (!Schema.make(StringDTO).match(value))
			throw new InvalidPropertyException(data.name, data.layer);

		return new SlugVO(value);
	}
}
