import { describe, expect, it } from "vitest";
import { Type } from "typebox";
import { Schema } from "./schema";

describe("Schema", () => {
	const schema = Type.Object({
		name: Type.String(),
		age: Type.Number(),
	});

	it("should create an instance using constructor", () => {
		const validator = new Schema(schema);
		expect(validator).toBeInstanceOf(Schema);
	});

	it("should create an instance using make static method", () => {
		const validator = Schema.make(schema);
		expect(validator).toBeInstanceOf(Schema);
	});

	it("should return true for valid data", () => {
		const validator = new Schema(schema);
		const data = { name: "John", age: 30 };
		expect(validator.match(data)).toBe(true);
	});

	it("should return false for invalid data type", () => {
		const validator = new Schema(schema);
		const data = { name: "John", age: "30" };
		expect(validator.match(data)).toBe(false);
	});

	it("should return false for missing properties", () => {
		const validator = new Schema(schema);
		const data = { name: "John" };
		expect(validator.match(data)).toBe(false);
	});

	it("should return JSON string representation of the schema", () => {
		const validator = new Schema(schema);
		const json = validator.toString();
		expect(typeof json).toBe("string");
		expect(JSON.parse(json)).toEqual(JSON.parse(JSON.stringify(schema)));
	});

	it("should return the original schema object via toJSON", () => {
		const validator = new Schema(schema);
		expect(validator.toJSON()).toEqual(schema);
	});
});
