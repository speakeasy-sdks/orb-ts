<!-- Start SDK Example Usage -->
```typescript
import {
  PostCustomersRequestBody,
  PostCustomersResponse,
  PostCustomersRequestBodyPaymentProviderEnum,
} from "Orb/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "Orb";
const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostCustomersRequestBody = {
  billingAddress: {
    city: "Laruecester",
    country: "US",
    line1: "quibusdam",
    line2: "unde",
    postalCode: "58466-3428",
    state: "ipsa",
  },
  currency: "delectus",
  email: "Geraldine_Kreiger52@gmail.com",
  externalCustomerId: "iusto",
  name: "excepturi",
  paymentProvider: PostCustomersRequestBodyPaymentProviderEnum.BillCom,
  paymentProviderId: "recusandae",
  shippingAddress: {
    city: "Belleville",
    country: "US",
    line1: "quis",
    line2: "veritatis",
    postalCode: "03897-1889",
    state: "molestiae",
  },
  timezone: "Etc/UTC",
};

sdk.customer.create(req).then((res: PostCustomersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->