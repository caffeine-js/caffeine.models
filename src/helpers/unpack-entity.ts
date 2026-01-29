import type { Entity } from "@/entity";
import type { EntityDTO } from "../dtos/entity.dto";

type UnpackEntityResponse<Output> = {
	about: EntityDTO;
	data: Output;
};

/**
 * Unpacks an entity into its metadata (about) and its core data properties.
 *
 * @param entity - The entity to unpack.
 * @returns An object containing `about` (id, dates) and `data` (other properties).
 */
export function unpackEntity<Output>(
	entity: Entity,
): UnpackEntityResponse<Output> {
	const { id, createdAt, updatedAt, ...props } = entity;

	return {
		about: {
			id,
			createdAt: createdAt,
			updatedAt: updatedAt,
		},
		data: props as Output,
	};
}
