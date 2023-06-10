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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [availability](docs/sdks/availability/README.md)

* [ping](docs/sdks/availability/README.md#ping) - Check availability

### [coupon](docs/sdks/coupon/README.md)

* [archive](docs/sdks/coupon/README.md#archive) - Archive a coupon
* [create](docs/sdks/coupon/README.md#create) - Create a coupon
* [fetch](docs/sdks/coupon/README.md#fetch) - Retrieve a coupon
* [list](docs/sdks/coupon/README.md#list) - List coupons
* [listSubscriptions](docs/sdks/coupon/README.md#listsubscriptions) - List subscriptions for a coupon

### [credit](docs/sdks/credit/README.md)

* [addByExternalId](docs/sdks/credit/README.md#addbyexternalid) - Add credit ledger entry by external customer ID
* [create](docs/sdks/credit/README.md#create) - Add credit ledger entry
* [fetch](docs/sdks/credit/README.md#fetch) - Retrieve credit balance
* [fetchByExternalId](docs/sdks/credit/README.md#fetchbyexternalid) - Retrieve credit balance by external customer ID
* [fetchLedger](docs/sdks/credit/README.md#fetchledger) - View credits ledger
* [fetchLedgerByExternalId](docs/sdks/credit/README.md#fetchledgerbyexternalid) - View credits ledger by external customer ID

### [creditNote](docs/sdks/creditnote/README.md)

* [list](docs/sdks/creditnote/README.md#list) - List credit notes

### [customer](docs/sdks/customer/README.md)

* [amend](docs/sdks/customer/README.md#amend) - Amend customer usage
* [amendByExternalId](docs/sdks/customer/README.md#amendbyexternalid) - Amend customer usage by external ID
* [create](docs/sdks/customer/README.md#create) - Create customer
* [createTransaction](docs/sdks/customer/README.md#createtransaction) - Create a customer balance transaction
* [delete](docs/sdks/customer/README.md#delete) - Delete a customer
* [fetch](docs/sdks/customer/README.md#fetch) - Retrieve a customer
* [fetchByExternalId](docs/sdks/customer/README.md#fetchbyexternalid) - Retrieve a customer by external ID
* [fetchCosts](docs/sdks/customer/README.md#fetchcosts) - View customer costs
* [fetchCostsByExternalId](docs/sdks/customer/README.md#fetchcostsbyexternalid) - View customer costs by external customer ID
* [fetchTransactions](docs/sdks/customer/README.md#fetchtransactions) - Get customer balance transactions
* [list](docs/sdks/customer/README.md#list) - List customers
* [updateByExternalId](docs/sdks/customer/README.md#updatebyexternalid) - Update a customer by external ID
* [updateCustomer](docs/sdks/customer/README.md#updatecustomer) - Update customer

### [event](docs/sdks/event/README.md)

* [amend](docs/sdks/event/README.md#amend) - Amend single event
* [closeBackfill](docs/sdks/event/README.md#closebackfill) - Close a backfill
* [create](docs/sdks/event/README.md#create) - Create a backfill
* [deprecateEvent](docs/sdks/event/README.md#deprecateevent) - Deprecate single event
* [ingest](docs/sdks/event/README.md#ingest) - Ingest events
* [listBackfills](docs/sdks/event/README.md#listbackfills) - List backfills
* [revertBackfill](docs/sdks/event/README.md#revertbackfill) - Revert a backfill
* [search](docs/sdks/event/README.md#search) - Search events

### [invoice](docs/sdks/invoice/README.md)

* [create](docs/sdks/invoice/README.md#create) - Create invoice line item
* [fetch](docs/sdks/invoice/README.md#fetch) - Retrieve an Invoice
* [fetchUpcoming](docs/sdks/invoice/README.md#fetchupcoming) - Retrieve upcoming invoice
* [list](docs/sdks/invoice/README.md#list) - List invoices
* [void](docs/sdks/invoice/README.md#void) - Void an invoice

### [plan](docs/sdks/plan/README.md)

* [fetch](docs/sdks/plan/README.md#fetch) - Retrieve a plan
* [list](docs/sdks/plan/README.md#list) - List plans

### [subscription](docs/sdks/subscription/README.md)

* [cancel](docs/sdks/subscription/README.md#cancel) - Cancel subscription
* [create](docs/sdks/subscription/README.md#create) - Create subscription
* [create](docs/sdks/subscription/README.md#create) - Create subscription
* [fetch](docs/sdks/subscription/README.md#fetch) - Retrieve a subscription
* [fetchCosts](docs/sdks/subscription/README.md#fetchcosts) - View subscription costs
* [fetchSchedule](docs/sdks/subscription/README.md#fetchschedule) - View subscription schedule
* [fetchUsage](docs/sdks/subscription/README.md#fetchusage) - View subscription usage
* [list](docs/sdks/subscription/README.md#list) - List subscriptions
* [schedulePlanChange](docs/sdks/subscription/README.md#scheduleplanchange) - Schedule plan change
* [unscheduleCancellation](docs/sdks/subscription/README.md#unschedulecancellation) - Unschedule pending cancellation
* [unschedulePlanChange](docs/sdks/subscription/README.md#unscheduleplanchange) - Unschedule pending plan changes
* [updateFixedFeeQuantity](docs/sdks/subscription/README.md#updatefixedfeequantity) - Update fixed fee quantity
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

