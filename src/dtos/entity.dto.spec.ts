import { v4 as uuidv4 } from "uuid";
import { describe, expect, it } from "vitest";
import { EntityDTO } from "@/dtos/entity.dto";
import { Schema } from "@/schema";

describe("EntityDTO", () => {
	const validator = new Schema(EntityDTO);

	it("should validate a correct entity with all fields", () => {
		const validEntity = {
			id: uuidv4(),
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};
		expect(validator.match(validEntity)).toBe(true);
	});

	it("should validate a correct entity without optional updatedAt", () => {
		const validEntity = {
			id: uuidv4(),
			createdAt: new Date().toISOString(),
		};
		expect(validator.match(validEntity)).toBe(true);
	});

	it("should invalidate entity with invalid uuid", () => {
		const invalidId = {
			id: "invalid-uuid",
			createdAt: new Date().toISOString(),
		};
		expect(validator.match(invalidId)).toBe(false);
	});

	it("should invalidate entity with invalid createdAt date format", () => {
		const invalidCreatedAt = {
			id: uuidv4(),
			createdAt: "not-a-date",
		};
		expect(validator.match(invalidCreatedAt)).toBe(false);
	});

	it("should invalidate entity with invalid updatedAt date format", () => {
		const invalidUpdatedAt = {
			id: uuidv4(),
			createdAt: new Date().toISOString(),
			updatedAt: "not-a-date",
		};
		expect(validator.match(invalidUpdatedAt)).toBe(false);
	});

	it("should invalidate entity with missing required fields", () => {
		const missingFields = {
			id: uuidv4(),
		};
		expect(validator.match(missingFields)).toBe(false);
	});
});
