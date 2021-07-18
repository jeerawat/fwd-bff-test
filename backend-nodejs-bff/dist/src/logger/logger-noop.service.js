"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoopLoggerService = void 0;
const logger_api_1 = require("./logger.api");
// tslint:disable
class NoopLoggerService extends logger_api_1.LoggerApi {
    debug(message, ...args) { }
    info(message, ...args) { }
    warn(message, ...args) { }
    error(message, ...args) { }
    log(message, ...args) { }
    trace(message, ...args) { }
    fatal(message, ...args) { }
    child(childName) {
        return this;
    }
    apply(app) {
    }
}
exports.NoopLoggerService = NoopLoggerService;
