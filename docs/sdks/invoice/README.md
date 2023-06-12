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
  amount: "et",
  endDate: new RFCDate("2022-04-17"),
  invoiceId: "provident",
  name: "Kirk Bartoletti",
  quantity: 6521.03,
  startDate: new RFCDate("2022-07-27"),
}).then((res: CreateInvoiceLineItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.CreateInvoiceLineItemRequestBody](../../models/operations/createinvoicelineitemrequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateInvoiceLineItemResponse](../../models/operations/createinvoicelineitemresponse.md)>**


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
  invoiceId: "dolor",
}).then((res: FetchInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.FetchInvoiceRequest](../../models/operations/fetchinvoicerequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.FetchInvoiceResponse](../../models/operations/fetchinvoiceresponse.md)>**


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
  subscriptionId: "necessitatibus",
}).then((res: FetchUpcomingInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.FetchUpcomingInvoiceRequest](../../models/operations/fetchupcominginvoicerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.FetchUpcomingInvoiceResponse](../../models/operations/fetchupcominginvoiceresponse.md)>**


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
  customerId: "odit",
  externalCustomerId: "nemo",
  status: "quasi",
  subscriptionId: "iure",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListInvoicesRequest](../../models/operations/listinvoicesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListInvoicesResponse](../../models/operations/listinvoicesresponse.md)>**


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
  invoiceId: "doloribus",
}).then((res: PostInvoicesInvoiceIdVoidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PostInvoicesInvoiceIdVoidRequest](../../models/operations/postinvoicesinvoiceidvoidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PostInvoicesInvoiceIdVoidResponse](../../models/operations/postinvoicesinvoiceidvoidresponse.md)>**

