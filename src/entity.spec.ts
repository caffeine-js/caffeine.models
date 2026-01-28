import { describe, expect, it } from "vitest";
import { v7 } from "uuid";
import { Entity } from "./entity";
import type { EntityDTO } from "@/dtos";
import { InvalidEntityData } from "@caffeine/errors";
import { makeEntityFactory } from "./factories";

class TestEntity extends Entity {
	public constructor(data: EntityDTO) {
		super(data);
	}

	public static create(data?: EntityDTO): TestEntity {
		const entityData = data ?? makeEntityFactory();
		const preparedData = Entity.prepare(entityData);
		return new TestEntity(preparedData);
	}
}

describe("Entity", () => {
	it("should create a valid entity with defaults (using makeEntityFactory)", () => {
		const entity = TestEntity.create();
		expect(entity.id).toBeDefined();
		expect(typeof entity.id).toBe("string");
		expect(entity.createdAt).toBeTypeOf("string");
		expect(entity.updatedAt).toBeUndefined();
	});

	it("should accept valid custom values", () => {
		const id = v7();
		const createdAt = new Date().toISOString();
		const updatedAt = new Date().toISOString();

		const entity = TestEntity.create({ id, createdAt, updatedAt });

		expect(entity.id).toBe(id);
		expect(entity.createdAt).toEqual(new Date(createdAt).toISOString());
		expect(entity.updatedAt).toEqual(new Date(updatedAt).toISOString());
	});

	it("should accept valid custom values without updatedAt", () => {
		const id = v7();
		const createdAt = new Date().toISOString();

		const entity = TestEntity.create({ id, createdAt });

		expect(entity.id).toBe(id);
		expect(entity.createdAt).toEqual(new Date(createdAt).toISOString());
		expect(entity.updatedAt).toBeUndefined();
	});

	it("should throw InvalidEntityData for invalid UUID", () => {
		expect(() => {
			TestEntity.create({
				id: "invalid-uuid",
				createdAt: new Date().toISOString(),
			});
		}).toThrow(InvalidEntityData);
	});

	it("should throw InvalidEntityData for invalid createdAt date", () => {
		expect(() => {
			TestEntity.create({
				id: v7(),
				createdAt: "invalid-date",
			});
		}).toThrow(InvalidEntityData);
	});

	it("should throw InvalidEntityData for invalid updatedAt date", () => {
		expect(() => {
			TestEntity.create({
				id: v7(),
				createdAt: new Date().toISOString(),
				updatedAt: "invalid-date",
			});
		}).toThrow(InvalidEntityData);
	});
});
