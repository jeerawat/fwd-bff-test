"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
const tslib_1 = require("tslib");
const typescript_rest_1 = require("typescript-rest");
let HealthController = class HealthController {
    healthCheck() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return {
                status: 'UP'
            };
        });
    }
};
tslib_1.__decorate([
    typescript_rest_1.GET,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], HealthController.prototype, "healthCheck", null);
HealthController = tslib_1.__decorate([
    typescript_rest_1.Path('/health')
], HealthController);
exports.HealthController = HealthController;
