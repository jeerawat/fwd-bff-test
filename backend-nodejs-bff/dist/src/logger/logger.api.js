"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerApi = void 0;
// tslint:disable
class LoggerApi {
    time(action, startTime) {
        const time = Date.now() - startTime;
        this.info({
            duration: time,
            action: action,
            type: 'TIMER',
        }, `TIMER: ${action} completed in ${time} milliseconds`);
    }
}
exports.LoggerApi = LoggerApi;
