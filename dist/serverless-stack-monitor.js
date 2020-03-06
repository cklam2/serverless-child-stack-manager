"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monitorStackModule = require("serverless/lib/plugins/aws/lib/monitorStack");
// eslint-disable-next-line import/prefer-default-export
class ServerlessStackMonitor {
    constructor(serverless, provider) {
        this.serverless = serverless;
        this.provider = provider;
    }
    async monitor(actionDescription, stackId) {
        // monitorStack needs these variable on "this" reference it's called for
        const monitorStackContext = {
            serverless: this.serverless,
            provider: this.provider,
            options: { verbose: false }
        };
        // Here we're reusing internal implementation of serverless framework instead of doing our own
        // This should be more reliable in the long run.
        //
        // I've already tried CloudFormation.waitFor, that doesn't work because it stops as soon as the stack changes state
        // That means a stack that we started to delete may be in state DELETE_IN_PROGRESS, which waitFor treats as an error and stops
        return monitorStackModule.monitorStack.call(monitorStackContext, actionDescription, { StackId: stackId }, { frequency: 10000 });
    }
}
exports.ServerlessStackMonitor = ServerlessStackMonitor;
