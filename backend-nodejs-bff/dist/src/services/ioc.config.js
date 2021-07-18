"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_ioc_1 = require("typescript-ioc");
const hello_world_api_1 = require("./hello-world.api");
const hello_world_service_1 = require("./hello-world.service");
const product_api_1 = require("./product.api");
const product_service_1 = require("./product.service");
const config = [
    {
        bind: hello_world_api_1.HelloWorldApi,
        to: hello_world_service_1.HelloWorldService,
        scope: typescript_ioc_1.Scope.Singleton
    },
    {
        bind: product_api_1.ProductApi,
        to: product_service_1.ProductService,
        scope: typescript_ioc_1.Scope.Singleton
    }
];
exports.default = config;
