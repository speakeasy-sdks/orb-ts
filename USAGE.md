<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "Orb";
import {
  PostCustomersRequestBody,
  PostCustomersRequestBodyPaymentProviderEnum,
  PostCustomersResponse,
} from "Orb/dist/sdk/models/operations";
import { CustomerPaymentProviderEnum } from "Orb/dist/sdk/models/shared";
import { AxiosError } from "axios";

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
  name: "Charlie Walsh II",
  paymentProvider: PostCustomersRequestBodyPaymentProviderEnum.Quickbooks,
  paymentProviderId: "deserunt",
  shippingAddress: {
    city: "West Ritaworth",
    country: "US",
    line1: "quo",
    line2: "odit",
    postalCode: "89478-4576",
    state: "dicta",
  },
  timezone: "Etc/UTC",
};

sdk.customer.create(req).then((res: PostCustomersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->