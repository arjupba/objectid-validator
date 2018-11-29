# objectid-validator

FindById method in mongoose will give errors if object id is not in correct format. This module help to validate object id to avoid errors. It works as a middleware like bodymen.

## Installation

`npm install objectid-validator`

## Usage

```javascript
import { idValidate } from "objectid-validator";

router.post("/create/", idValidate({ id: { required: true } }), create);

// This will return Network status code 400 with error messages if id is not valid
```
