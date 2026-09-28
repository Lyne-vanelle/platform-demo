const test = require("node:test");
const assert = require("node:assert/strict");
const { before, after } = test;
const server = require("../src/app.js");

before(() => new Promise((resolve) => server.listen(0, resolve)));
after(() => server.close());

test("GET /version returns service name and version", async () => {
  const { port } = server.address();
  const res = await fetch(`http://127.0.0.1:${port}/version`);
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), {
    service: "platform-demo",
    version: "1.0.0",
  });
});
