import type { StringArrayDTO } from "@/dtos/primitives";
import { StringArraySchema } from "@/schemas/primitives";
import type { IValueObjectMetadata } from "@/types/value-object-metadata.interface";
import { ValueObject } from "@/value-object";

export class StringArrayVO extends ValueObject<
	string[],
	typeof StringArrayDTO
> {
	protected override schema = StringArraySchema;

	public static make(
		value: string[],
		info: IValueObjectMetadata,
	): StringArrayVO {
		const newVO = new StringArrayVO(value, info);

		newVO.validate();

		return newVO;
	}
}
