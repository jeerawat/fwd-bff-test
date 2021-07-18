"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinoLoggerService = void 0;
const pino = require("pino");
const expressPino = require("express-pino-logger");
const logger_api_1 = require("./logger.api");
const cls_hooked_1 = require("cls-hooked");
const trace_constants_1 = require("../util/opentracing/trace-constants");
// tslint:disable
class ChildLogger extends logger_api_1.LoggerApi {
    constructor(logger) {
        super();
        this.logger = logger;
    }
    error(message, ...args) {
        this.logger.error(message, ...args);
    }
    log(message, ...args) {
        this.info(message, ...args);
    }
    debug(message, ...args) {
        this.logger.debug(message, ...args);
    }
    info(message, ...args) {
        this.logger.info(message, ...args);
    }
    warn(message, ...args) {
        this.logger.warn(message, ...args);
    }
    fatal(message, ...args) {
        this.logger.fatal(message, ...args);
    }
    trace(message, ...args) {
        this.logger.trace(message, ...args);
    }
    child(component) {
        const clsNamespace = cls_hooked_1.getNamespace(trace_constants_1.TraceConstants.NAMESPACE);
        const traceContext = clsNamespace ? clsNamespace.get(trace_constants_1.TraceConstants.TRACE_CONTEXT) : {};
        return new ChildLogger(this.logger.child(Object.assign({ component }, traceContext)));
    }
    apply(app) {
        app.use(expressPino());
    }
}
class PinoLoggerService extends ChildLogger {
    constructor() {
        super(PinoLoggerService.buildLogger());
    }
    static buildLogger() {
        return pino();
    }
}
exports.PinoLoggerService = PinoLoggerService;
