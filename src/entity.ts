import { InvalidEntityData } from "@caffeine/errors";
import { EntityDTO } from "@/dtos";
import { Schema } from "./schema";
import type { IEntity } from "./types";

export abstract class Entity implements IEntity {
	public readonly id: string;
	public readonly createdAt: string;
	public updatedAt?: string;

	protected constructor({ createdAt, id, updatedAt }: EntityDTO) {
		this.id = id;
		this.createdAt = new Date(createdAt).toISOString();
		this.updatedAt = updatedAt ? new Date(updatedAt).toISOString() : undefined;
	}

	protected static prepare(data: EntityDTO): EntityDTO {
		const isAValidEntity = new Schema(EntityDTO).match(data);

		if (!isAValidEntity)
			throw new InvalidEntityData("Cannot build the target entity.");

		return data;
	}

	protected update(): void {
		this.updatedAt = new Date().toISOString();
	}
}
