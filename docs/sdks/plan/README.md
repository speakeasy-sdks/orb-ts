# plan

## Overview

The Plan resource represents a plan that can be subscribed to by a customer. Plans define the amount of credits that a customer will receive, the price of the plan, and the billing interval.

### Available Operations

* [fetch](#fetch) - Retrieve a plan
* [list](#list) - List plans

## fetch

This endpoint is used to fetch [plan](../reference/Orb-API.json/components/schemas/Plan) details given a plan identifier. It returns information about the prices included in the plan and their configuration, as well as the product that the plan is attached to.

## Serialized prices
Orb supports a few different pricing models out of the box. Each of these models is serialized differently in a given [Price](../reference/Orb-API.json/components/schemas/Price) object. The `model_type` field determines the key for the configuration object that is present. A detailed explanation of price types can be found in the [Price schema](../reference/Orb-API.json/components/schemas/Price). 

## Phases
Orb supports plan phases, also known as contract ramps. For plans with phases, the serialized prices refer to all prices across all phases.

### Example Usage

```typescript
import { SDK } from "Orb";
import { GetPlansPlanIdResponse } from "Orb/dist/sdk/models/operations";
import {
  DiscountDiscountType,
  PlanPhaseDurationUnit,
  PlanTrialConfigTrialPeriodUnit,
  PriceCadence,
  PriceModelType,
} from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.plan.fetch({
  planId: "debitis",
}).then((res: GetPlansPlanIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetPlansPlanIdRequest](../../models/operations/getplansplanidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetPlansPlanIdResponse](../../models/operations/getplansplanidresponse.md)>**


## list

This endpoint returns a list of all [plans](../reference/Orb-API.json/components/schemas/Plan) for an account in a list format. 

The list of plans is ordered starting from the most recently created plan. The response also includes [`pagination_metadata`](../api/pagination), which lets the caller retrieve the next page of results if they exist.


### Example Usage

```typescript
import { SDK } from "Orb";
import { ListPlansResponse } from "Orb/dist/sdk/models/operations";
import {
  DiscountDiscountType,
  PlanPhaseDurationUnit,
  PlanTrialConfigTrialPeriodUnit,
  PriceCadence,
  PriceModelType,
} from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.plan.list().then((res: ListPlansResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListPlansResponse](../../models/operations/listplansresponse.md)>**

