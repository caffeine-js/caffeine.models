import { Type, type Static } from "@sinclair/typebox";
import { BooleanDTO, StringDTO } from "../primitives";
import { ErrorTypeDTO } from "../core";

export const ResponseDTO = Type.Object(
	{
		error: Type.Optional(
			Type.Object(
				{
					layer: ErrorTypeDTO,
					name: StringDTO,
					message: StringDTO,
					layerName: StringDTO,
				},
				{
					description: "Detailed error information if the request failed.",
					examples: [
						{
							layer: "domain",
							name: "EntityNotFoundError",
							message: "Post not found",
							layerName: "PostDomain",
						},
					],
				},
			),
		),
		success: BooleanDTO,
	},
	{
		description: "A standard response object that may contain error details.",
		examples: [{}],
	},
);

export type ResponseDTO = Static<typeof ResponseDTO>;
