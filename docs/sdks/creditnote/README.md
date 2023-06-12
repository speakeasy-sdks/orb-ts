# creditNote

## Overview

The Credit Note resource represents a credit note that has been generated for a customer. Credit Notes are generated when a customer's billing interval has elapsed, and are updated when a customer's invoice is paid.

### Available Operations

* [list](#list) - List credit notes

## list

This endpoint returns a list of all [`Credit Note`](../reference/Orb-API.json/components/schemas/Credit-note)s for an account in a list format. 

The list of credit notes is ordered starting from the most recently created date. The response also includes [`pagination_metadata`](../api/pagination), which lets the caller retrieve the next page of results if they exist.

### Example Usage

```typescript
import { SDK } from "Orb";
import { ListCreditNoteResponse } from "Orb/dist/sdk/models/operations";
import { CreditNoteReason, CreditNoteType, DiscountDiscountType } from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.creditNote.list({
  customerId: "iste",
  externalCustomerId: "dolor",
  subscriptionId: "natus",
}).then((res: ListCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListCreditNoteRequest](../../models/operations/listcreditnoterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListCreditNoteResponse](../../models/operations/listcreditnoteresponse.md)>**

