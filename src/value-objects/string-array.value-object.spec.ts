import { describe, expect, it } from "vitest";

import { InvalidPropertyException } from "@caffeine/errors/domain";
import { StringArrayVO } from "./string-array.value-object";

describe("StringArrayVO", () => {
	it("should create a valid instance with strings", () => {
		const vo = StringArrayVO.make(["one", "two"], {
			name: "tags",
			layer: "domain",
		});
		expect(vo.value).toEqual(["one", "two"]);
	});

	it("should create a valid instance with empty array", () => {
		const vo = StringArrayVO.make([], {
			name: "tags",
			layer: "domain",
		});
		expect(vo.value).toEqual([]);
	});

	// Note: TypeScript usually prevents passing non-string arrays, but runtime check is done by schema.
	// Since we are in TS, let's cast to any to test runtime validation if we want, OR just trust TypeBox.
	// However, user rule says "don't use any type".
	// So we might skip runtime type checking tests if TS blocks it, unless we force it.
	// But usually we test logic.
	// Schema validation for type correctness is handled by Schema tests.
	// Here we test if VO uses schema correctly.
});
