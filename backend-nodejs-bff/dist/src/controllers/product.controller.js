"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const tslib_1 = require("tslib");
const typescript_rest_1 = require("typescript-rest");
const routing_controllers_1 = require("routing-controllers");
const typescript_ioc_1 = require("typescript-ioc");
const services_1 = require("../services");
const logger_1 = require("../logger");
let ProductController = class ProductController {
    get logger() {
        return this._baseLogger.child('ProductController');
    }
    getProduct(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.info('Get Quotation Product List');
            return this.service.getQuotationProductList(data);
        });
    }
    setCustomerByPackage(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.info('Set Customer By Package');
            return this.service.setCustomerByPackage(data);
        });
    }
};
tslib_1.__decorate([
    typescript_ioc_1.Inject,
    tslib_1.__metadata("design:type", services_1.ProductApi)
], ProductController.prototype, "service", void 0);
tslib_1.__decorate([
    typescript_ioc_1.Inject,
    tslib_1.__metadata("design:type", logger_1.LoggerApi)
], ProductController.prototype, "_baseLogger", void 0);
tslib_1.__decorate([
    typescript_rest_1.Path('/getProduct'),
    typescript_rest_1.POST,
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
tslib_1.__decorate([
    typescript_rest_1.Path('/setCustomerByPackage'),
    typescript_rest_1.POST,
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "setCustomerByPackage", null);
ProductController = tslib_1.__decorate([
    typescript_rest_1.Path('/product')
], ProductController);
exports.ProductController = ProductController;
