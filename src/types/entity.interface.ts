export interface IEntity<OutputType = unknown> {
	readonly id: string;
	readonly createdAt: string;
	readonly updatedAt?: string;

	unpack(): OutputType;
}
