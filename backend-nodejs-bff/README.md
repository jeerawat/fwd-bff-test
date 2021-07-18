<p align="center">
    <a href="http://kitura.io/">
        <img src="https://landscape.cncf.io/logos/ibm-member.svg" height="100" alt="IBM Cloud">
    </a>
</p>

<p align="center">
    <a href="https://cloud.ibm.com">
    <img src="https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg" alt="IBM Cloud">
    </a>
    <img src="https://img.shields.io/badge/platform-node-lightgrey.svg?style=flat" alt="platform">
    <img src="https://img.shields.io/badge/license-Apache2-blue.svg?style=flat" alt="Apache 2">
</p>

# TypeScript Microservice or Backend for Frontend with Node.js

This Starter Kit Template can be the foundation of a TypeScript Node.js Microservice or Backend for Frontend.


## Features

The starter kit provides the following features:

- Built with [TypeScript](https://www.typescriptlang.org/)
- REST services using `typescript-rest` decorators
- Swagger documentation using `typescript-rest-swagger`
- Dependency injection using `typescript-ioc` decorators
- Logging using `bunyan`
- TDD environment with [Jest](https://jestjs.io/)
- Pact testing [Pact](https://docs.pact.io/)
- Jenkins DevOps pipeline that support OpenShift or IKS deployment

#### Native Application Development

Install the latest [Node.js](https://nodejs.org/en/download/) 6+ LTS version.

After you have created a new git repo from this git template, remember to rename the project.
Edit `package.json` and change the default name to the name you used to create the template.

Once the Node toolchain has been installed, you can download the project dependencies with:

```bash
npm install  -> install node package 
npm run build -> build 
npm run start -> <a href="http://localhost:3001" target="_blank">http://localhost:3001</a>

npm run test  -> run test
```


