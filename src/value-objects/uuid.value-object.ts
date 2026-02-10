import type { UuidDTO } from "@/dtos/primitives";
import { UuidSchema } from "@/schemas/primitives";
import type { IValueObjectMetadata } from "@/types/value-object-metadata.interface";
import { ValueObject } from "@/value-object";

export class UuidVO extends ValueObject<string, typeof UuidDTO> {
	protected override schema = UuidSchema;

	public static make(value: string, info: IValueObjectMetadata): UuidVO {
		const newVO = new UuidVO(value, info);

		newVO.validate();

		return newVO;
	}
}
