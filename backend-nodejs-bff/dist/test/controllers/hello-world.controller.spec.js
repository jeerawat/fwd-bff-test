"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const typescript_ioc_1 = require("typescript-ioc");
const services_1 = require("../../src/services");
const helper_1 = require("../helper");
class MockHelloWorldService {
    constructor() {
        this.greeting = jest.fn().mockName('greeting');
    }
}
describe('hello-world.controller', () => {
    let app;
    let mockGreeting;
    beforeEach(() => {
        const apiServer = helper_1.buildApiServer();
        app = apiServer.getApp();
        typescript_ioc_1.Container.bind(services_1.HelloWorldApi).scope(typescript_ioc_1.Scope.Singleton).to(MockHelloWorldService);
        const mockService = typescript_ioc_1.Container.get(services_1.HelloWorldApi);
        mockGreeting = mockService.greeting;
    });
    test('canary validates test infrastructure', () => {
        expect(true).toBe(true);
    });
    describe('Given /hello', () => {
        const expectedResponse = 'Hello there!';
        beforeEach(() => {
            mockGreeting.mockReturnValueOnce(Promise.resolve(expectedResponse));
        });
        test('should return "Hello, World!"', done => {
            request(app).get('/hello').expect(200).expect(expectedResponse, done);
        });
    });
    describe('Given /hello/Johnny', () => {
        const name = 'Johnny';
        beforeEach(() => {
            mockGreeting.mockImplementation(name => name);
        });
        test('should return "Hello, Johnny!"', done => {
            request(app).get(`/hello/${name}`).expect(200).expect(name, done);
        });
    });
});
