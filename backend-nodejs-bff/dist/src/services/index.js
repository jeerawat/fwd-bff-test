"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typescript_ioc_1 = require("typescript-ioc");
tslib_1.__exportStar(require("./hello-world.api"), exports);
tslib_1.__exportStar(require("./hello-world.service"), exports);
tslib_1.__exportStar(require("./product.api"), exports);
tslib_1.__exportStar(require("./product.service"), exports);
const ioc_config_1 = require("./ioc.config");
typescript_ioc_1.Container.configure(...ioc_config_1.default);
