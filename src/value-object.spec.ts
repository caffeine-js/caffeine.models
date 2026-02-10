import { describe, expect, it } from "vitest";

import { InvalidPropertyException } from "@caffeine/errors/domain";
import type { StringDTO } from "@/dtos/primitives";
import { StringSchema } from "@/schemas/primitives";
import { ValueObject } from "./value-object";

class TestVO extends ValueObject<string, typeof StringDTO> {
	protected schema = StringSchema;

	public static make(value: string) {
		const vo = new TestVO(value, { name: "test", layer: "domain" });
		vo.validate();
		return vo;
	}
}

describe("ValueObject", () => {
	it("should create a valid instance", () => {
		const vo = TestVO.make("valid");
		expect(vo.value).toBe("valid");
	});

	it("should throw InvalidPropertyException when validation fails", () => {
		expect(() => TestVO.make("")).toThrow(InvalidPropertyException);
	});
});
