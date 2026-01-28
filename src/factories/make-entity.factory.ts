import type { EntityDTO } from "@/dtos";
import { v7 } from "uuid";

export function makeEntityFactory(): EntityDTO {
	return {
		id: v7(),
		createdAt: new Date().toISOString(),
		updatedAt: undefined,
	};
}
