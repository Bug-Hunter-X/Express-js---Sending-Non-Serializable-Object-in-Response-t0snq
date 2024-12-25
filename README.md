# Express.js - Sending Non-Serializable Object in Response

This repository demonstrates a common error in Express.js applications: attempting to send a non-serializable object in the response.  Specifically, the bug involves sending a `Date` object directly.

## Bug

The `bug.js` file contains the buggy code.  It attempts to send a `Date` object directly using `res.send()`.  This will result in an error because the `Date` object is not automatically converted to a JSON representation.

## Solution

The `bugSolution.js` file shows the corrected code.  The solution converts the `Date` object to a string representation using `toISOString()` before sending it in the response. This ensures the response can be properly serialized to JSON.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to see the error.
5. Run `node bugSolution.js` to see the corrected behavior.

This example highlights the importance of ensuring all data sent in an Express.js response is serializable to JSON.