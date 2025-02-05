# Node.js Server Hanging Issue

This repository demonstrates a common issue in Node.js servers where the server hangs or becomes unresponsive when handling multiple concurrent requests.  The problem stems from blocking synchronous operations within the request handler, preventing the event loop from processing other requests.

## Problem

The `server.js` file contains a simple HTTP server that simulates a long-running operation (a 5-second delay) within the request handler.  When multiple requests are sent to the server concurrently, subsequent requests will be queued but not processed until the first request completes, causing a hang.

## Solution

The `serverSolution.js` file demonstrates a solution using asynchronous operations.  The `setTimeout` function is replaced with a `Promise` which allows for non-blocking execution. This prevents the event loop from being blocked, enabling the server to handle multiple concurrent requests efficiently.

## How to reproduce the bug
1. Clone this repository.
2. Navigate to the directory.
3. Run `node server.js`.
4. Open multiple browser tabs or use a tool like `curl` to send requests to `http://localhost:3000`. Observe that requests are queued and not served immediately.

## How to fix
1. Replace `server.js` with `serverSolution.js`
2. Run `node serverSolution.js`
3. Observe that multiple concurrent requests are handled efficiently.