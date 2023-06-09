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


### [availability](docs/availability/README.md)

* [ping](docs/availability/README.md#ping) - Check availability

### [coupon](docs/coupon/README.md)

* [archive](docs/coupon/README.md#archive) - Archive a coupon
* [create](docs/coupon/README.md#create) - Create a coupon
* [fetch](docs/coupon/README.md#fetch) - Retrieve a coupon
* [list](docs/coupon/README.md#list) - List coupons
* [listSubscriptions](docs/coupon/README.md#listsubscriptions) - List subscriptions for a coupon

### [credit](docs/credit/README.md)

* [addByExternalId](docs/credit/README.md#addbyexternalid) - Add credit ledger entry by external customer ID
* [create](docs/credit/README.md#create) - Add credit ledger entry
* [fetch](docs/credit/README.md#fetch) - Retrieve credit balance
* [fetchByExternalId](docs/credit/README.md#fetchbyexternalid) - Retrieve credit balance by external customer ID
* [fetchLedger](docs/credit/README.md#fetchledger) - View credits ledger
* [fetchLedgerByExternalId](docs/credit/README.md#fetchledgerbyexternalid) - View credits ledger by external customer ID

### [creditNote](docs/creditnote/README.md)

* [list](docs/creditnote/README.md#list) - List credit notes

### [customer](docs/customer/README.md)

* [amend](docs/customer/README.md#amend) - Amend customer usage
* [amendByExternalId](docs/customer/README.md#amendbyexternalid) - Amend customer usage by external ID
* [create](docs/customer/README.md#create) - Create customer
* [createTransaction](docs/customer/README.md#createtransaction) - Create a customer balance transaction
* [delete](docs/customer/README.md#delete) - Delete a customer
* [fetch](docs/customer/README.md#fetch) - Retrieve a customer
* [fetchByExternalId](docs/customer/README.md#fetchbyexternalid) - Retrieve a customer by external ID
* [fetchCosts](docs/customer/README.md#fetchcosts) - View customer costs
* [fetchCostsByExternalId](docs/customer/README.md#fetchcostsbyexternalid) - View customer costs by external customer ID
* [fetchTransactions](docs/customer/README.md#fetchtransactions) - Get customer balance transactions
* [list](docs/customer/README.md#list) - List customers
* [updateByExternalId](docs/customer/README.md#updatebyexternalid) - Update a customer by external ID
* [updateCustomer](docs/customer/README.md#updatecustomer) - Update customer

### [event](docs/event/README.md)

* [amend](docs/event/README.md#amend) - Amend single event
* [closeBackfill](docs/event/README.md#closebackfill) - Close a backfill
* [create](docs/event/README.md#create) - Create a backfill
* [deprecateEvent](docs/event/README.md#deprecateevent) - Deprecate single event
* [ingest](docs/event/README.md#ingest) - Ingest events
* [listBackfills](docs/event/README.md#listbackfills) - List backfills
* [revertBackfill](docs/event/README.md#revertbackfill) - Revert a backfill
* [search](docs/event/README.md#search) - Search events

### [invoice](docs/invoice/README.md)

* [create](docs/invoice/README.md#create) - Create invoice line item
* [fetch](docs/invoice/README.md#fetch) - Retrieve an Invoice
* [fetchUpcoming](docs/invoice/README.md#fetchupcoming) - Retrieve upcoming invoice
* [list](docs/invoice/README.md#list) - List invoices
* [void](docs/invoice/README.md#void) - Void an invoice

### [plan](docs/plan/README.md)

* [fetch](docs/plan/README.md#fetch) - Retrieve a plan
* [list](docs/plan/README.md#list) - List plans

### [subscription](docs/subscription/README.md)

* [cancel](docs/subscription/README.md#cancel) - Cancel subscription
* [create](docs/subscription/README.md#create) - Create subscription
* [create](docs/subscription/README.md#create) - Create subscription
* [fetch](docs/subscription/README.md#fetch) - Retrieve a subscription
* [fetchCosts](docs/subscription/README.md#fetchcosts) - View subscription costs
* [fetchSchedule](docs/subscription/README.md#fetchschedule) - View subscription schedule
* [fetchUsage](docs/subscription/README.md#fetchusage) - View subscription usage
* [list](docs/subscription/README.md#list) - List subscriptions
* [schedulePlanChange](docs/subscription/README.md#scheduleplanchange) - Schedule plan change
* [unscheduleCancellation](docs/subscription/README.md#unschedulecancellation) - Unschedule pending cancellation
* [unschedulePlanChange](docs/subscription/README.md#unscheduleplanchange) - Unschedule pending plan changes
* [updateFixedFeeQuantity](docs/subscription/README.md#updatefixedfeequantity) - Update fixed fee quantity
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

