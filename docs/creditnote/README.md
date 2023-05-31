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
    apiKeyAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.creditNote.list({
  customerId: "iure",
  externalCustomerId: "saepe",
  subscriptionId: "quidem",
}).then((res: ListCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
