# invoice

## Overview

Actions related to invoice management.

### Available Operations

* [get](#get) - Retrieve an Invoice
* [getUpcoming](#getupcoming) - Retrieve upcoming invoice
* [list](#list) - List invoices

## get

This endpoint is used to fetch an [`Invoice`](../reference/Orb-API.json/components/schemas/Invoice) given an identifier.

### Example Usage

```typescript
import { SDK } from "Orb";
import { GetInvoiceInvoiceIdResponse } from "Orb/dist/sdk/models/operations";
import {
  CustomerBalanceTransactionActionEnum,
  InvoiceLineItemsSubLineItemsTypeEnum,
  InvoiceStatusEnum,
} from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.invoice.get({
  invoiceId: "quasi",
}).then((res: GetInvoiceInvoiceIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getUpcoming

This endpoint can be used to fetch the [`UpcomingInvoice`](../reference/Orb-API.json/components/schemas/Upcoming%20Invoice) for the current billing period given a subscription.

### Example Usage

```typescript
import { SDK } from "Orb";
import { GetInvoicesUpcomingResponse } from "Orb/dist/sdk/models/operations";
import { UpcomingInvoiceLineItemsSubLineItemsTypeEnum } from "Orb/dist/sdk/models/shared";
import { RFCDate } from "Orb/dist/sdk/types";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.invoice.getUpcoming({
  subscriptionId: "iure",
}).then((res: GetInvoicesUpcomingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

This endpoint returns a list of all [`Invoice`](../reference/Orb-API.json/components/schemas/Invoice)s for an account in a list format. 

The list of invoices is ordered starting from the most recently issued invoice date. The response also includes `pagination_metadata`, which lets the caller retrieve the next page of results if they exist.

### Example Usage

```typescript
import { SDK } from "Orb";
import { ListInvoicesResponse } from "Orb/dist/sdk/models/operations";
import {
  CustomerBalanceTransactionActionEnum,
  InvoiceLineItemsSubLineItemsTypeEnum,
  InvoiceStatusEnum,
} from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.invoice.list({
  customerId: "doloribus",
  externalCustomerId: "debitis",
  subscriptionId: "eius",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
