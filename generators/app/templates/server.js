const { createServer, createRouter } = require("noswbi");
const { serverOptions } = require("./vars");

const router = createRouter();
const protectedRouter = createRouter({ requiredAuth: true });

const server = createServer = createServer([router, protectedRouter], serverOptions);

module.exports = server;
