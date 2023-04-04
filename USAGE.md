<!-- Start SDK Example Usage -->
```typescript
import {
  GetPingResponse
} from "Orb/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "Orb";
const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.availability.ping().then((res: GetPingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->