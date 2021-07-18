"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./logger.api"), exports);
tslib_1.__exportStar(require("./logger-noop.service"), exports);
tslib_1.__exportStar(require("./logger-pino.service"), exports);
const typescript_ioc_1 = require("typescript-ioc");
const ioc_config_1 = require("./ioc.config");
typescript_ioc_1.Container.configure(...ioc_config_1.default);
