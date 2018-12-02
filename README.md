# objectid-validator

FindById method in mongoose will give errors if object id is not in correct format. This module help to validate object id to avoid errors. It works as a middleware like bodymen.

## Installation

`npm install objectid-validator`

## Usage

```javascript
import { idValidate, idValidateInParam } from "objectid-validator";

router.post("/create/", idValidate({ id: { required: true } }), create);
// This will return Network status code 400 with error messages if "id" in "req.body" is not valid

router.get('/getData/:id', token({ required: true }), idValidateInParam('id'), getData)
// This will return Network status code 400 with error messages if "id" in "req.params" is not valid
```
