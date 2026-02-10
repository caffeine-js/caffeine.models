import type { UuidArrayDTO } from "@/dtos/primitives";
import { UuidArraySchema } from "@/schemas/primitives";
import type { IValueObjectMetadata } from "@/types/value-object-metadata.interface";
import { ValueObject } from "@/value-object";

export class UuidArrayVO extends ValueObject<string[], typeof UuidArrayDTO> {
	protected override schema = UuidArraySchema;

	public static make(value: string[], info: IValueObjectMetadata): UuidArrayVO {
		const newVO = new UuidArrayVO(value, info);

		newVO.validate();

		return newVO;
	}
}
