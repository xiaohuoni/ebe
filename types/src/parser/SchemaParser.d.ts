import { IParseResult, ISchemaParser, IProjectSchema, IPublicTypeNodeDataType } from '../core';
export declare class SchemaParser implements ISchemaParser {
    validate(): boolean;
    parse(schemaSrc: IProjectSchema | string): IParseResult;
    decodeSchema(schemaSrc: string | IProjectSchema): IProjectSchema;
    getCompNames(components: IPublicTypeNodeDataType): string[];
}
export default SchemaParser;
