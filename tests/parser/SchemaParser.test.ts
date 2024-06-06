import { IProjectSchema } from '../../src/core';
import { SchemaParser } from '../../src/parser/SchemaParser';
import page from '../page.json';

describe('SchemaParser', () => {
  let schemaParser: SchemaParser;

  beforeEach(() => {
    schemaParser = new SchemaParser();
  });

  describe('validate', () => {
    test('should return true', () => {
      const result = schemaParser.validate();
      expect(result).toBe(true);
    });
  });

  describe('parse', () => {
    test('should parse the schema and return the parse result', () => {
      const schemaSrc: IProjectSchema = [page] as any;
      const result = schemaParser.parse(schemaSrc);
      expect(result).toMatchSnapshot();
    });
  });
  describe('decodeSchema', () => {
    test('string schema', () => {
      const schemaSrc = '[{ "type":1}]';
      const result = schemaParser.decodeSchema(schemaSrc);
      expect(result[0].type).toBe(1);
    });
  });
  describe('decodeSchema error', () => {
    test('string schema', () => {
      const schemaSrc = '[{ type:1}]';
      expect(() => {
        schemaParser.decodeSchema(schemaSrc);
      }).toThrow();
    });
  });
});
