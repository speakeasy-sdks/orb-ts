# invoice

## Overview

The Invoice resource represents an invoice that has been generated for a customer. Invoices are generated when a customer's billing interval has elapsed, and are updated when a customer's invoice is paid.

### Available Operations

* [create](#create) - Create invoice line item
* [fetch](#fetch) - Retrieve an Invoice
* [fetchUpcoming](#fetchupcoming) - Retrieve upcoming invoice
* [list](#list) - List invoices
* [void](#void) - Void an invoice

## create

This creates a one-off fixed fee [Invoice line item](../reference/Orb-API.json/components/schemas/Invoice-line-item) on an [Invoice](../reference/Orb-API.json/components/schemas/Invoice). This can only be done for invoices that are in a `draft` status.

### Example Usage

```typescript
import { SDK } from "Orb";
import { CreateInvoiceLineItemResponse } from "Orb/dist/sdk/models/operations";
import {
  DiscountDiscountType,
  InvoiceLineItemSubLineItemsType,
  PriceCadence,
  PriceModelType,
} from "Orb/dist/sdk/models/shared";
import { RFCDate } from "Orb/dist/sdk/types";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.invoice.create({
  amount: "accusantium",
  endDate: new RFCDate("2022-01-07"),
  invoiceId: "quidem",
  name: "Colleen Johnston PhD",
  quantity: 3654.96,
  startDate: new RFCDate("2022-12-13"),
}).then((res: CreateInvoiceLineItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## fetch

This endpoint is used to fetch an [`Invoice`](../reference/Orb-API.json/components/schemas/Invoice) given an identifier.

### Example Usage

```typescript
import { SDK } from "Orb";
import { FetchInvoiceResponse } from "Orb/dist/sdk/models/operations";
import {
  CustomerBalanceTransactionAction,
  CustomerBalanceTransactionType,
  DiscountDiscountType,
  InvoiceLineItemSubLineItemsType,
  InvoiceStatus,
  PriceCadence,
  PriceModelType,
} from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.invoice.fetch({
  invoiceId: "fugiat",
}).then((res: FetchInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## fetchUpcoming

This endpoint can be used to fetch the [`Upcoming Invoice`](../reference/Orb-API.json/components/schemas/UpcomingInvoice) for the current billing period given a subscription.

### Example Usage

```typescript
import { SDK } from "Orb";
import { FetchUpcomingInvoiceResponse } from "Orb/dist/sdk/models/operations";
import { DiscountDiscountType, UpcomingInvoiceLineItemsSubLineItemsType } from "Orb/dist/sdk/models/shared";
import { RFCDate } from "Orb/dist/sdk/types";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.invoice.fetchUpcoming({
  subscriptionId: "amet",
}).then((res: FetchUpcomingInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

This endpoint returns a list of all [`Invoice`](../reference/Orb-API.json/components/schemas/Invoice)s for an account in a list format. 

The list of invoices is ordered starting from the most recently issued invoice date. The response also includes [`pagination_metadata`](../api/pagination), which lets the caller retrieve the next page of results if they exist.

By default, this only returns invoices that are `issued`, `paid`, or `synced`.

### Example Usage

```typescript
import { SDK } from "Orb";
import { ListInvoicesResponse } from "Orb/dist/sdk/models/operations";
import {
  CustomerBalanceTransactionAction,
  CustomerBalanceTransactionType,
  DiscountDiscountType,
  InvoiceLineItemSubLineItemsType,
  InvoiceStatus,
  PriceCadence,
  PriceModelType,
} from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.invoice.list({
  customerId: "aut",
  externalCustomerId: "cumque",
  status: "corporis",
  subscriptionId: "hic",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## void

This endpoint allows an invoice's status to be set the `void` status. This can only be done to invoices that are in the `issued` status.

If the associated invoice has used the customer balance to change the amount due, the customer balance operation will be reverted. For example, if the invoice used $10 of customer balance, that amount will be added back to the customer balance upon voiding.

### Example Usage

```typescript
import { SDK } from "Orb";
import { PostInvoicesInvoiceIdVoidResponse } from "Orb/dist/sdk/models/operations";
import {
  CustomerBalanceTransactionAction,
  CustomerBalanceTransactionType,
  DiscountDiscountType,
  InvoiceLineItemSubLineItemsType,
  InvoiceStatus,
  PriceCadence,
  PriceModelType,
} from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.invoice.void({
  invoiceId: "libero",
}).then((res: PostInvoicesInvoiceIdVoidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
