<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "Orb";
import { PingResponse } from "Orb/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.availability.ping().then((res: PingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->