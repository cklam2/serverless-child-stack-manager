# serverless-child-stack-manager

Removes one or more related CloudFormation stacks when running 'serverless remove'.
This can be useful to manage tenant resources in multi-tenant apps, when each tenant has a corresponding stack.

## Build and Run

### Building

To compile the code, do the following:

1. Run `npm install` in the repo root
2. Run `npm run build`. This runs a linter on the source code (via ESLint), then builds the plugin.

### Running and debugging unit tests

For unit testing, [Jasmine](https://jasmine.github.io) is used; tests are written in TypeScript.

To run tests once, use `npm test`.

To generate a coverage report, use `npm run test:ci`. When done, open `./coverage/index.html` with a browser to view the report.

To debug tests:

1. Open _sws-platform.code-workspace_ with Visual Studio Code
2. Focus the test you're debugging, as described in [Jasmine documentation](https://jasmine.github.io/2.1/focused_specs.html) and set breakpoints where necessary.
3. Switch to VSCode's Debug tab and select the _Debug Tests (workspace)_ configuration and run it.

**NOTE**

This repo contains work in progress, do not use.
