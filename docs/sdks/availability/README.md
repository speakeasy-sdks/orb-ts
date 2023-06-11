# availability

## Overview

The Availability resource represents a customer's availability. Availability is created when a customer's invoice is paid, and is updated when a customer's transaction is refunded.

### Available Operations

* [ping](#ping) - Check availability

## ping

This endpoint allows you to test your connection to the Orb API and check the validity of your API key, passed in the `Authorization` header. This is particularly useful for checking that your environment is set up properly, and is a great choice for connectors and integrations.

This API does not have any side-effects or return any Orb resources.

### Example Usage

```typescript
import { SDK } from "Orb";
import { PingResponse } from "Orb/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.availability.ping().then((res: PingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PingResponse](../../models/operations/pingresponse.md)>**

