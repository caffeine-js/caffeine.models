import type { StringDTO } from "@/dtos/primitives";
import { StringSchema } from "@/schemas/primitives";
import type { IValueObjectMetadata } from "@/types/value-object-metadata.interface";
import { ValueObject } from "@/value-object";

export class DefinedStringVO extends ValueObject<string, typeof StringDTO> {
	protected override schema = StringSchema;

	public static make(
		value: string,
		info: IValueObjectMetadata,
	): DefinedStringVO {
		const newVO = new DefinedStringVO(value, info);

		newVO.validate();

		return newVO;
	}
}
