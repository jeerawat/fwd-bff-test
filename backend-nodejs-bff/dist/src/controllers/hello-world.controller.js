"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldController = void 0;
const tslib_1 = require("tslib");
const typescript_rest_1 = require("typescript-rest");
const typescript_ioc_1 = require("typescript-ioc");
const services_1 = require("../services");
const logger_1 = require("../logger");
let HelloWorldController = class HelloWorldController {
    get logger() {
        return this._baseLogger.child('HelloWorldController');
    }
    sayHelloToUnknownUser() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.info('Saying hello to someone');
            return this.service.greeting();
        });
    }
    sayHello(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.info(`Saying hello to ${name}`);
            return this.service.greeting(name);
        });
    }
};
tslib_1.__decorate([
    typescript_ioc_1.Inject,
    tslib_1.__metadata("design:type", services_1.HelloWorldApi)
], HelloWorldController.prototype, "service", void 0);
tslib_1.__decorate([
    typescript_ioc_1.Inject,
    tslib_1.__metadata("design:type", logger_1.LoggerApi)
], HelloWorldController.prototype, "_baseLogger", void 0);
tslib_1.__decorate([
    typescript_rest_1.GET,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], HelloWorldController.prototype, "sayHelloToUnknownUser", null);
tslib_1.__decorate([
    typescript_rest_1.Path(':name'),
    typescript_rest_1.GET,
    tslib_1.__param(0, typescript_rest_1.PathParam('name')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], HelloWorldController.prototype, "sayHello", null);
HelloWorldController = tslib_1.__decorate([
    typescript_rest_1.Path('/hello')
], HelloWorldController);
exports.HelloWorldController = HelloWorldController;
