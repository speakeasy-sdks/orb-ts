<div align="center">
    <picture>
        <source srcset="https://user-images.githubusercontent.com/6267663/229776363-b219eaec-e1aa-4192-9123-d8a8e0ab997d.svg" media="(prefers-color-scheme: dark)">
        <img src="https://user-images.githubusercontent.com/6267663/229776275-b670d564-fc2e-4843-b061-adf230737e3f.svg">
    </picture>
    <h1>Typescript SDK</h1>
   <p>The modern pricing platform to bill for seats, consumption, and everything in between.</p>
   <a href="https://docs.withorb.com/docs/orb-docs/overview"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=5444e4&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/orb-ts/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/orb-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/orb-ts/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/orb-ts?sort=semver&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/orb-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/orb-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
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
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### availability

* `ping` - Check availability

### credits

* `create` - Add credit ledger entry
* `getCredits` - Retrieve credit balance
* `getCreditsLedger` - View credits ledger

### customer

* `create` - Create customer
* `get` - Retrieve a customer
* `getBalance` - Get customer balance transactions
* `getByExternalId` - Retrieve a customer by external ID
* `getCosts` - View customer costs
* `getCostsByExternalId` - View customer costs by external customer ID
* `list` - List customers
* `update` - Update customer
* `updateByExternalId` - Update a customer by external ID
* `updateUsage` - Amend customer usage
* `updateUsageByExternalId` - Amend customer usage by external ID

### event

* `deprecate` - Deprecate single event
* `ingest` - Ingest events
* `search` - Search events
* `update` - Amend single event

### invoice

* `get` - Retrieve an Invoice
* `getUpcoming` - Retrieve upcoming invoice
* `list` - List invoices

### plan

* `get` - Retrieve a plan

### subscription

* `cancel` - Cancel subscription
* `changeSchedule` - Schedule plan change
* `create` - Create subscription
* `get` - Retrieve a subscription
* `getCost` - View subscription costs
* `getSchedule` - View subscription schedule
* `getUsage` - View subscription usage
* `list` - List subscriptions
* `unschedule` - Unschedule pending plan changes
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

