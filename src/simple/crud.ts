interface HasOptions {
	options?: object
}
interface HasData {
	data: object
}
interface HasId {
	id: string
}

export type SimpleCrudCreate = HasData & HasOptions
export type SimpleCrudRead = HasId & HasOptions
export type SimpleCrudUpdate = HasId & HasData & HasOptions
export type SimpleCrudDelete = HasId & HasOptions

export interface SimpleCrud<Model> {
	create: ({  }: SimpleCrudCreate) => Promise<string>
	read: ({  }: SimpleCrudRead) => Promise<Model>
	update: ({  }: SimpleCrudUpdate) => Promise<void>
	delete: ({  }: SimpleCrudDelete) => Promise<void>
}

export type SimpleCrudApi<Model> = (args: ApiArgs) => SimpleCrud<Model>
