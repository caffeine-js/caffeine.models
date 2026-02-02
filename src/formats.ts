import { FormatRegistry } from "@sinclair/typebox/type";

FormatRegistry.Set("uuid", (value) =>
	/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
		value,
	),
);

FormatRegistry.Set("date-time", (value) => {
	return !Number.isNaN(Date.parse(value));
});

FormatRegistry.Set("url", (value) => {
	try {
		new URL(value);
		return true;
	} catch {
		return false;
	}
});
