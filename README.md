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
import { SDK } from "Orb";
import { PostCustomersRequestBodyPaymentProviderEnum, PostCustomersResponse } from "Orb/dist/sdk/models/operations";
import { CustomerPaymentProviderEnum } from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
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
}).then((res: PostCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [availability](docs/availability/README.md)

* [ping](docs/availability/README.md#ping) - Check availability

### [credits](docs/credits/README.md)

* [get](docs/credits/README.md#get) - Add credit ledger entry
* [getCredits](docs/credits/README.md#getcredits) - Retrieve credit balance
* [getCreditsLedger](docs/credits/README.md#getcreditsledger) - View credits ledger

### [customer](docs/customer/README.md)

* [create](docs/customer/README.md#create) - Create customer
* [get](docs/customer/README.md#get) - Retrieve a customer
* [getBalance](docs/customer/README.md#getbalance) - Get customer balance transactions
* [getByExternalId](docs/customer/README.md#getbyexternalid) - Retrieve a customer by external ID
* [getCosts](docs/customer/README.md#getcosts) - View customer costs
* [getCostsByExternalId](docs/customer/README.md#getcostsbyexternalid) - View customer costs by external customer ID
* [list](docs/customer/README.md#list) - List customers
* [update](docs/customer/README.md#update) - Update customer
* [updateByExternalId](docs/customer/README.md#updatebyexternalid) - Update a customer by external ID
* [updateUsage](docs/customer/README.md#updateusage) - Amend customer usage
* [updateUsageByExternalId](docs/customer/README.md#updateusagebyexternalid) - Amend customer usage by external ID

### [event](docs/event/README.md)

* [deprecate](docs/event/README.md#deprecate) - Deprecate single event
* [ingest](docs/event/README.md#ingest) - Ingest events
* [search](docs/event/README.md#search) - Search events
* [update](docs/event/README.md#update) - Amend single event

### [invoice](docs/invoice/README.md)

* [get](docs/invoice/README.md#get) - Retrieve an Invoice
* [getUpcoming](docs/invoice/README.md#getupcoming) - Retrieve upcoming invoice
* [list](docs/invoice/README.md#list) - List invoices

### [plan](docs/plan/README.md)

* [get](docs/plan/README.md#get) - Retrieve a plan

### [subscription](docs/subscription/README.md)

* [cancel](docs/subscription/README.md#cancel) - Cancel subscription
* [changeSchedule](docs/subscription/README.md#changeschedule) - Schedule plan change
* [create](docs/subscription/README.md#create) - Create subscription
* [get](docs/subscription/README.md#get) - Retrieve a subscription
* [getCost](docs/subscription/README.md#getcost) - View subscription costs
* [getSchedule](docs/subscription/README.md#getschedule) - View subscription schedule
* [getUsage](docs/subscription/README.md#getusage) - View subscription usage
* [list](docs/subscription/README.md#list) - List subscriptions
* [unschedule](docs/subscription/README.md#unschedule) - Unschedule pending plan changes
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

