"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_util_1 = require("../../src/util/string-util");
describe('string-util', () => {
    test('canary verifies test infrastructure', () => {
        expect(true).toEqual(true);
    });
    describe('given parseCsvString()', () => {
        describe('when value and default value not provided', () => {
            test('should return empty array', () => {
                expect(string_util_1.parseCsvString(undefined)).toEqual([]);
            });
        });
        describe('when value is not provided and defaultValue is provided', () => {
            test('should return [defaultValue]', () => {
                const defaultValue = 'default';
                expect(string_util_1.parseCsvString(undefined, defaultValue)).toEqual([defaultValue]);
            });
        });
        describe('when value does not contain a comma', () => {
            test('should return [value]', () => {
                const value = 'value';
                expect(string_util_1.parseCsvString(value)).toEqual([value]);
            });
            describe('and when value contains leading and trailing spaces', () => {
                test('should trim the value', () => {
                    const value = '  value with spaces   ';
                    expect(string_util_1.parseCsvString(value)).toEqual([value.trim()]);
                });
            });
        });
        describe('when value contains a comma', () => {
            test('should return a list of values split along commas', () => {
                const value1 = 'value1';
                const value2 = 'value2';
                expect(string_util_1.parseCsvString(`${value1},${value2}`)).toEqual([value1, value2]);
            });
            describe('and when value contains leading and trailing spaces', () => {
                test('should trim the value', () => {
                    const value1 = '  value with spaces   ';
                    const value2 = ' value2  ';
                    expect(string_util_1.parseCsvString(`${value1},${value2}`)).toEqual([value1.trim(), value2.trim()]);
                });
            });
        });
    });
});
