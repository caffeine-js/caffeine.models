import { Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";
import { describe, expect, it } from "vitest";
import { makeResponse } from "./make-response.factory";

describe("makeResponse", () => {
	it("should create a response schema with the provided data schema", () => {
		const DataSchema = Type.Object({
			id: Type.String(),
			value: Type.Number(),
		});

		const ResponseSchema = makeResponse(DataSchema);

		// Verify structure using check
		const validData = {
			success: true,
			data: {
				id: "123",
				value: 42,
			},
		};

		expect(Value.Check(ResponseSchema, validData)).toBe(true);
	});

	it("should include standard ResponseDTO fields", () => {
		const DataSchema = Type.String();
		const ResponseSchema = makeResponse(DataSchema);

		// Should accept error field (optional in ResponseDTO)
		const dataWithError = {
			success: false,
			data: "some data",
			error: {
				layer: "domain",
				name: "Error",
				message: "Something went wrong",
				layerName: "DomainLayer",
			},
		};

		expect(Value.Check(ResponseSchema, dataWithError)).toBe(true);
	});

	it("should validate against invalid data structure", () => {
		const DataSchema = Type.Number();
		const ResponseSchema = makeResponse(DataSchema);

		const invalidData = {
			success: true,
			data: "not a number", // Should be a number
		};

		expect(Value.Check(ResponseSchema, invalidData)).toBe(false);
	});

	it("should validate missing standard fields", () => {
		const DataSchema = Type.Number();
		const ResponseSchema = makeResponse(DataSchema);

		const missingSuccess = {
			data: 123,
		};

		expect(Value.Check(ResponseSchema, missingSuccess)).toBe(false);
	});
});
