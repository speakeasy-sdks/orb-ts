# plan

## Overview

Actions related to plan management.

### Available Operations

* [get](#get) - Retrieve a plan

## get

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
  PlanPhaseDurationUnit,
  PlanTrialConfigTrialPeriodUnit,
  PriceCadence,
  PriceModelType,
} from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.plan.get({
  planId: "maxime",
}).then((res: GetPlansPlanIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
