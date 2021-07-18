"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const tslib_1 = require("tslib");
const typescript_ioc_1 = require("typescript-ioc");
const logger_1 = require("../logger");
const axios_1 = require("axios");
const class_validator_1 = require("class-validator");
let ProductService = class ProductService {
    constructor(logger) {
        this.logger = logger.child('ProductService');
    }
    getQuotationProductList(quotationparam) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.info(`Generating greeting for `);
            let PaymentFrequency;
            (function (PaymentFrequency) {
                PaymentFrequency["YEARLY"] = "YEARLY";
                PaymentFrequency["HALFYEARLY"] = "HALFYEARLY";
                PaymentFrequency["QUARTERLY"] = "QUARTERLY ";
                PaymentFrequency["MONTHLY"] = "MONTHLY";
            })(PaymentFrequency || (PaymentFrequency = {}));
            let Gender;
            (function (Gender) {
                Gender["MALE"] = "MALE";
                Gender["FEMAlE"] = "FEMA\u200BLE";
            })(Gender || (Gender = {}));
            let PlanCode;
            (function (PlanCode) {
                PlanCode["T11A20"] = "T11A20";
                PlanCode["T11A50"] = "T11A50";
                PlanCode["T11AM1"] = "T11AM1";
            })(PlanCode || (PlanCode = {}));
            if (class_validator_1.isEmpty(quotationparam.gender)) {
                return {
                    error: "Gender Not Empty!!"
                };
            }
            if (Object.values(Gender).includes(quotationparam.gender) == false) {
                return {
                    error: "Gender No List!!"
                };
            }
            if (class_validator_1.isEmpty(quotationparam.dob)) {
                return {
                    error: "Date Of Birth Not Empty!!"
                };
            }
            if (quotationparam.dob.length < 10) {
                return {
                    error: "Date Of Birth is wrong format!!"
                };
            }
            let timestamp = Date.parse(quotationparam.dob);
            if (isNaN(timestamp) == true) {
                var d = new Date(timestamp);
                return {
                    error: "Date Of Birthday is wrong format!!!"
                };
            }
            if (class_validator_1.isEmpty(quotationparam.planCode)) {
                return {
                    error: "Plan Code Not Empty!!"
                };
            }
            if (!Object.values(PlanCode).includes(quotationparam.planCode)) {
                return {
                    error: "Plan Code No List!!"
                };
            }
            if (class_validator_1.isEmpty(quotationparam.paymentFrequency)) {
                return {
                    error: "Payment Frequency Not Empty!!"
                };
            }
            if (!Object.values(PaymentFrequency).includes(quotationparam.paymentFrequency)) {
                return {
                    error: "Payment Frequency No List!!"
                };
            }
            if (class_validator_1.isEmpty(quotationparam.premiumPerYear) && class_validator_1.isEmpty(quotationparam.saPerYear)) {
                return {
                    error: "Please Input amount premium Per Year OR SA Per Year"
                };
            }
            if (!class_validator_1.isEmpty(quotationparam.premiumPerYear) && !class_validator_1.isEmpty(quotationparam.saPerYear)) {
                return {
                    error: "Please Input amount Only one Between premium Per Year OR SA Per Year"
                };
            }
            if (!class_validator_1.isEmpty(quotationparam.premiumPerYear)) {
                const res = yield axios_1.default.post('https://api.fwd.co.th/dev-ecommerce/getProduct', {
                    genderCd: quotationparam.gender,
                    dob: quotationparam.dob,
                    planCode: quotationparam.planCode,
                    premiumPerYear: Number(quotationparam.premiumPerYear),
                    paymentFrequency: quotationparam.paymentFrequency
                });
                return res.data.quotationProductList;
            }
            else {
                const res = yield axios_1.default.post('https://api.fwd.co.th/dev-ecommerce/getProduct', {
                    genderCd: quotationparam.gender,
                    dob: quotationparam.dob,
                    planCode: quotationparam.planCode,
                    saPerYear: Number(quotationparam.saPerYear),
                    paymentFrequency: quotationparam.paymentFrequency
                });
                return res.data.quotationProductList;
            }
        });
    }
    setCustomerByPackage(customerbypackage) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.info(`Generating greeting for `);
            let PaymentFrequency;
            (function (PaymentFrequency) {
                PaymentFrequency["YEARLY"] = "YEARLY";
                PaymentFrequency["HALFYEARLY"] = "HALFYEARLY";
                PaymentFrequency["QUARTERLY"] = "QUARTERLY ";
                PaymentFrequency["MONTHLY"] = "MONTHLY";
            })(PaymentFrequency || (PaymentFrequency = {}));
            let Gender;
            (function (Gender) {
                Gender["MALE"] = "MALE";
                Gender["FEMAlE"] = "FEMA\u200BLE";
            })(Gender || (Gender = {}));
            let PlanCode;
            (function (PlanCode) {
                PlanCode["T11A20"] = "T11A20";
                PlanCode["T11A50"] = "T11A50";
                PlanCode["T11AM1"] = "T11AM1";
            })(PlanCode || (PlanCode = {}));
            if (class_validator_1.isEmpty(customerbypackage.gender)) {
                return {
                    error: "Gender Not Empty!!"
                };
            }
            if (Object.values(Gender).includes(customerbypackage.gender) == false) {
                return {
                    error: "Gender No List!!"
                };
            }
            if (class_validator_1.isEmpty(customerbypackage.dob)) {
                return {
                    error: "Date Of Birth Not Empty!!"
                };
            }
            if (customerbypackage.dob.length < 10) {
                return {
                    error: "Date Of Birth is wrong format!!"
                };
            }
            let timestamp = Date.parse(customerbypackage.dob);
            if (isNaN(timestamp) == true) {
                var d = new Date(timestamp);
                return {
                    error: "Date Of Birthday is wrong format!!!"
                };
            }
            if (class_validator_1.isEmpty(customerbypackage.planCode)) {
                return {
                    error: "Plan Code Not Empty!!"
                };
            }
            if (!Object.values(PlanCode).includes(customerbypackage.planCode)) {
                return {
                    error: "Plan Code No List!!"
                };
            }
            if (class_validator_1.isEmpty(customerbypackage.paymentFrequency)) {
                return {
                    error: "Payment Frequency Not Empty!!"
                };
            }
            if (!Object.values(PaymentFrequency).includes(customerbypackage.paymentFrequency)) {
                return {
                    error: "Payment Frequency No List!!"
                };
            }
            if (class_validator_1.isEmpty(customerbypackage.premiumPerYear) && class_validator_1.isEmpty(customerbypackage.saPerYear)) {
                return {
                    error: "Please Input amount premium Per Year OR SA Per Year"
                };
            }
            if (!class_validator_1.isEmpty(customerbypackage.premiumPerYear) && !class_validator_1.isEmpty(customerbypackage.saPerYear)) {
                return {
                    error: "Please Input amount Only one Between premium Per Year OR SA Per Year"
                };
            }
            if (class_validator_1.isEmpty(customerbypackage.title)) {
                return {
                    error: "Title Not Empty!!"
                };
            }
            if (class_validator_1.isEmpty(customerbypackage.customerFristName)) {
                return {
                    error: "First Name Not Empty!!"
                };
            }
            if (class_validator_1.isEmpty(customerbypackage.customerLastname)) {
                return {
                    error: "Last Name Not Empty!!"
                };
            }
            if (class_validator_1.isEmpty(customerbypackage.customerEmail)) {
                return {
                    error: "Email Not Empty!!"
                };
            }
            if (class_validator_1.isEmpty(customerbypackage.customerPhoneNumber)) {
                return {
                    error: "Phone Number Not Empty!!"
                };
            }
            if (!class_validator_1.isEmpty(customerbypackage.premiumPerYear)) {
                const res = yield axios_1.default.post('https://api.fwd.co.th/dev-ecommerce/getProduct', {
                    genderCd: customerbypackage.gender,
                    dob: customerbypackage.dob,
                    planCode: customerbypackage.planCode,
                    premiumPerYear: Number(customerbypackage.premiumPerYear),
                    paymentFrequency: customerbypackage.paymentFrequency
                });
                customerbypackage.productId = res.data.quotationProductList[0].productId;
                customerbypackage.productType = res.data.quotationProductList[0].productTypeCd;
                customerbypackage.productFamily = res.data.quotationProductList[0].productFamilyCd;
                customerbypackage.baseSumAssured = res.data.quotationProductList[0].baseSumAssured;
                customerbypackage.baseAnnualPremium = res.data.quotationProductList[0].baseAnnualPremium;
                customerbypackage.productTerm = res.data.quotationProductList[0].productTerm;
                customerbypackage.premiumPayingTerm = res.data.quotationProductList[0].premiumPayingTerm;
                //  return res.data.quotationProductList;
            }
            else {
                const res = yield axios_1.default.post('https://api.fwd.co.th/dev-ecommerce/getProduct', {
                    genderCd: customerbypackage.gender,
                    dob: customerbypackage.dob,
                    planCode: customerbypackage.planCode,
                    saPerYear: Number(customerbypackage.saPerYear),
                    paymentFrequency: customerbypackage.paymentFrequency
                });
                customerbypackage.productId = res.data.quotationProductList[0].productId;
                customerbypackage.productType = res.data.quotationProductList[0].productTypeCd;
                customerbypackage.productFamily = res.data.quotationProductList[0].productFamilyCd;
                customerbypackage.baseSumAssured = res.data.quotationProductList[0].baseSumAssured;
                customerbypackage.baseAnnualPremium = res.data.quotationProductList[0].baseAnnualPremium;
                customerbypackage.productTerm = res.data.quotationProductList[0].productTerm;
                customerbypackage.premiumPayingTerm = res.data.quotationProductList[0].premiumPayingTerm;
                //  return res.data.quotationProductList;
            }
            return customerbypackage;
        });
    }
};
ProductService = tslib_1.__decorate([
    tslib_1.__param(0, typescript_ioc_1.Inject),
    tslib_1.__metadata("design:paramtypes", [logger_1.LoggerApi])
], ProductService);
exports.ProductService = ProductService;
