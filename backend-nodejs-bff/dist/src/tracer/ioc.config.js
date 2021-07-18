"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tracer_api_1 = require("./tracer.api");
const jaeger_tracer_factory_1 = require("./jaeger-tracer.factory");
const config = [
    {
        bind: tracer_api_1.TracerApi,
        factory: jaeger_tracer_factory_1.default
    }
];
exports.default = config;
