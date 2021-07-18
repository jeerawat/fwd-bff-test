"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const helper_1 = require("../helper");
describe('health.controller', () => {
    let app;
    beforeEach(() => {
        const apiServer = helper_1.buildApiServer();
        app = apiServer.getApp();
    });
    test('canary validates test infrastructure', () => {
        expect(true).toBe(true);
    });
    describe('Given /health', () => {
        test('should return 200 status', () => {
            return request(app).get('/health').expect(200);
        });
        test('should return {status: "UP:}', () => {
            return request(app).get('/health').expect({ status: 'UP' });
        });
    });
});
