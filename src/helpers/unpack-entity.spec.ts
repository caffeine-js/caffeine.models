import { Entity } from "@/models";
import { unpackEntity } from "./unpack-entity";
import { describe, expect, it } from "vitest";

class TestEntity extends Entity {
	public name: string;
	public age: number;

	public constructor(props: {
		id: string;
		createdAt: string;
		updatedAt?: string;
		name: string;
		age: number;
	}) {
		super(props);
		this.name = props.name;
		this.age = props.age;
	}

	public static create(props: {
		id: string;
		createdAt: string;
		updatedAt?: string;
		name: string;
		age: number;
	}) {
		return new TestEntity(props);
	}
}

describe("unpackEntity", () => {
	it("should unpack entity properties correctly", () => {
		const date = new Date();
		const dateString = date.toISOString();
		const entity = TestEntity.create({
			id: "123",
			createdAt: dateString,
			updatedAt: dateString,
			name: "Test",
			age: 10,
		});

		const result = unpackEntity(entity);

		expect(result.about).toEqual({
			id: "123",
			createdAt: date.toISOString(),
			updatedAt: date.toISOString(),
		});

		expect(result.data).toEqual({
			name: "Test",
			age: 10,
		});
	});

	it("should handle undefined updatedAt", () => {
		const date = new Date();
		const dateString = date.toISOString();
		const entity = TestEntity.create({
			id: "123",
			createdAt: dateString,
			name: "Test",
			age: 10,
		});

		const result = unpackEntity(entity);

		expect(result.about.updatedAt).toBeUndefined();
	});

	it("should not include methods in data", () => {
		const date = new Date();
		const dateString = date.toISOString();
		const entity = TestEntity.create({
			id: "123",
			createdAt: dateString,
			name: "Test",
			age: 10,
		});

		const result = unpackEntity(entity);

		expect((result.data as { create: unknown }).create).toBeUndefined();
	});
});
