<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "Orb";
import { PostCustomersRequestBodyPaymentProvider, PostCustomersResponse } from "Orb/dist/sdk/models/operations";
import { CustomerPaymentProvider } from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.customer.create({
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
  paymentProvider: PostCustomersRequestBodyPaymentProvider.Quickbooks,
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
}).then((res: PostCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->