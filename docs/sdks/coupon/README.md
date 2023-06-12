# coupon

## Overview

The Coupon resource represents a discount that can be applied to a customer's invoice. Coupons can be applied to a customer's invoice either by the customer or by the Orb API.

### Available Operations

* [archive](#archive) - Archive a coupon
* [create](#create) - Create a coupon
* [fetch](#fetch) - Retrieve a coupon
* [list](#list) - List coupons
* [listSubscriptions](#listsubscriptions) - List subscriptions for a coupon

## archive

This endpoint allows a coupon to be archived. Archived coupons can no longer be redeemed, and will be hidden from lists of active coupons. Additionally, once a coupon is archived, its redemption code can be reused for a different coupon.

### Example Usage

```typescript
import { SDK } from "Orb";
import { ArchiveCouponResponse } from "Orb/dist/sdk/models/operations";
import { DiscountDiscountType } from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.coupon.archive({
  couponId: "corrupti",
}).then((res: ArchiveCouponResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ArchiveCouponRequest](../../models/operations/archivecouponrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ArchiveCouponResponse](../../models/operations/archivecouponresponse.md)>**


## create

This endpoint allows the creation of coupons, which can then be redeemed at subscription creation or plan change.

### Example Usage

```typescript
import { SDK } from "Orb";
import { CreateCouponResponse } from "Orb/dist/sdk/models/operations";
import { DiscountDiscountType } from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.coupon.create({
  discount: {
    amountDiscount: "provident",
    appliesToPriceIds: [
      "quibusdam",
      "unde",
      "nulla",
    ],
    discountType: DiscountDiscountType.Percentage,
    percentageDiscount: 0.15,
    trialAmountDiscount: "corrupti",
    usageDiscount: 8472.52,
  },
  durationInMonths: 423655,
  id: "9a674e0f-467c-4c87-96ed-151a05dfc2dd",
  maxRedemptions: 978619,
  redemptionCode: "molestiae",
  timesRedeemed: 799159,
}).then((res: CreateCouponResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.CouponInput](../../models/shared/couponinput.md)     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateCouponResponse](../../models/operations/createcouponresponse.md)>**


## fetch

This endpoint retrieves a coupon by its ID. To fetch coupons by their redemption code, use the [List coupons](list-coupons) endpoint with the `redemption_code` parameter.

### Example Usage

```typescript
import { SDK } from "Orb";
import { FetchCouponResponse } from "Orb/dist/sdk/models/operations";
import { DiscountDiscountType } from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.coupon.fetch({
  couponId: "quod",
}).then((res: FetchCouponResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.FetchCouponRequest](../../models/operations/fetchcouponrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.FetchCouponResponse](../../models/operations/fetchcouponresponse.md)>**


## list

This endpoint returns a list of all [coupons](../reference/Orb-API.json/components/schemas/Coupon) for an account in a list format. 

The list of coupons is ordered starting from the most recently created coupon. The response also includes [`pagination_metadata`](../api/pagination), which lets the caller retrieve the next page of results if they exist. More information about pagination can be found in the [Pagination-metadata schema](../reference/Orb-API.json/components/schemas/Pagination-metadata).

### Example Usage

```typescript
import { SDK } from "Orb";
import { ListCouponsResponse } from "Orb/dist/sdk/models/operations";
import { DiscountDiscountType } from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.coupon.list({
  redemptionCode: "esse",
  showArchived: false,
}).then((res: ListCouponsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListCouponsRequest](../../models/operations/listcouponsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListCouponsResponse](../../models/operations/listcouponsresponse.md)>**


## listSubscriptions

This endpoint returns a list of all subscriptions that have redeemed a given coupon as a [paginated](../api/pagination) list, ordered starting from the most recently created subscription. For a full discussion of the subscription resource, see [Subscription](../reference/Orb-API.json/components/schemas/Subscription).

### Example Usage

```typescript
import { SDK } from "Orb";
import { ListCouponSubscriptionsResponse } from "Orb/dist/sdk/models/operations";
import {
  CustomerPaymentProvider,
  DiscountDiscountType,
  PlanPhaseDurationUnit,
  PlanTrialConfigTrialPeriodUnit,
  PriceCadence,
  PriceModelType,
  SubscriptionStatus,
} from "Orb/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});

sdk.coupon.listSubscriptions({
  couponId: "totam",
}).then((res: ListCouponSubscriptionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListCouponSubscriptionsRequest](../../models/operations/listcouponsubscriptionsrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListCouponSubscriptionsResponse](../../models/operations/listcouponsubscriptionsresponse.md)>**

