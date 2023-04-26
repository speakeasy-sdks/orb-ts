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
import { GetInvoiceInvoiceIdRequest, GetInvoiceInvoiceIdResponse } from "Orb/dist/sdk/models/operations";
import {
  CustomerBalanceTransactionActionEnum,
  InvoiceLineItemsSubLineItemsTypeEnum,
  InvoiceStatusEnum,
} from "Orb/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetInvoiceInvoiceIdRequest = {
  invoiceId: "quasi",
};

sdk.invoice.get(req).then((res: GetInvoiceInvoiceIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getUpcoming

This endpoint can be used to fetch the [`UpcomingInvoice`](../reference/Orb-API.json/components/schemas/Upcoming%20Invoice) for the current billing period given a subscription.

### Example Usage

```typescript
import { SDK } from "Orb";
import { GetInvoicesUpcomingRequest, GetInvoicesUpcomingResponse } from "Orb/dist/sdk/models/operations";
import { UpcomingInvoiceLineItemsSubLineItemsTypeEnum } from "Orb/dist/sdk/models/shared";
import { RFCDate } from "Orb/dist/sdk/types";
import { AxiosError } from "axios";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetInvoicesUpcomingRequest = {
  subscriptionId: "iure",
};

sdk.invoice.getUpcoming(req).then((res: GetInvoicesUpcomingResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { ListInvoicesRequest, ListInvoicesResponse } from "Orb/dist/sdk/models/operations";
import {
  CustomerBalanceTransactionActionEnum,
  InvoiceLineItemsSubLineItemsTypeEnum,
  InvoiceStatusEnum,
} from "Orb/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ListInvoicesRequest = {
  customerId: "doloribus",
  externalCustomerId: "debitis",
  subscriptionId: "eius",
};

sdk.invoice.list(req).then((res: ListInvoicesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
