# availability

## Overview

Actions related to API availability.

### Available Operations

* [ping](#ping) - Check availability

## ping

This endpoint allows you to test your connection to the Orb API and check the validity of your API key, passed in the `Authorization` header. This is particularly useful for checking that your environment is set up properly, and is a great choice for connectors and integrations.

This API does not have any side-effects or return any Orb resources.

### Example Usage

```typescript
import { SDK } from "Orb";
import { GetPingResponse } from "Orb/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.availability.ping().then((res: GetPingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
