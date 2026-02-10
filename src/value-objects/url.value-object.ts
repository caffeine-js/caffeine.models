import type { UrlDTO } from "@/dtos/primitives";
import { UrlSchema } from "@/schemas/primitives";
import type { IValueObjectMetadata } from "@/types/value-object-metadata.interface";
import { ValueObject } from "@/value-object";

export class UrlVO extends ValueObject<string, typeof UrlDTO> {
	protected override schema = UrlSchema;

	public static make(value: string, info: IValueObjectMetadata): UrlVO {
		const newVO = new UrlVO(value, info);

		newVO.validate();

		return newVO;
	}
}
