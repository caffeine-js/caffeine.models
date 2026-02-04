import { ResponseDTO } from "@/dtos/api/response.dto";
import { Type, type TSchema } from "@sinclair/typebox";

export function makeResponse<T extends TSchema>(schema: T) {
	return Type.Composite([ResponseDTO, Type.Object({ data: schema })]);
}
