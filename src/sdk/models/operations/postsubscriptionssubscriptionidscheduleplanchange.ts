/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Determines the timing of the plan change
 */
export enum PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyChangeOptionEnum {
  RequestedDate = "requested_date",
  EndOfSubscriptionTerm = "end_of_subscription_term",
  Immediate = "immediate",
}

export enum PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides7ModelTypeEnum {
  TieredBps = "tiered_bps",
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides7TieredBpsConfigTiers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bps" })
  bps: number;

  @SpeakeasyMetadata()
  @Expose({ name: "maximum_amount" })
  maximumAmount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "minimum_amount" })
  minimumAmount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "per_unit_maximum" })
  perUnitMaximum: string;
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides7TieredBpsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides7TieredBpsConfigTiers,
  })
  @Expose({ name: "tiers" })
  @Type(
    () =>
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides7TieredBpsConfigTiers
  )
  tiers: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides7TieredBpsConfigTiers[];
}

/**
 * Tiered BPS price override
 */
export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides7 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The subscription's override minimum amount for this price.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minimum_amount" })
  minimumAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model_type" })
  modelType: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides7ModelTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "tiered_bps_config" })
  @Type(
    () =>
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides7TieredBpsConfig
  )
  tieredBpsConfig: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides7TieredBpsConfig;
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides6BulkBpsConfigTiers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bps" })
  bps: number;

  @SpeakeasyMetadata()
  @Expose({ name: "maximum_amount" })
  maximumAmount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "per_unit_maximum" })
  perUnitMaximum: string;
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides6BulkBpsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides6BulkBpsConfigTiers,
  })
  @Expose({ name: "tiers" })
  @Type(
    () =>
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides6BulkBpsConfigTiers
  )
  tiers?: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides6BulkBpsConfigTiers[];
}

export enum PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides6ModelTypeEnum {
  BulkBps = "bulk_bps",
}

/**
 * Bulk BPS price override
 */
export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides6 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bulk_bps_config" })
  @Type(
    () =>
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides6BulkBpsConfig
  )
  bulkBpsConfig?: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides6BulkBpsConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The subscription's override minimum amount for this price.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minimum_amount" })
  minimumAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model_type" })
  modelType: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides6ModelTypeEnum;
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides5BpsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bps" })
  bps: number;

  @SpeakeasyMetadata()
  @Expose({ name: "per_unit_maximum" })
  perUnitMaximum: string;
}

export enum PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides5ModelTypeEnum {
  Bps = "bps",
}

/**
 * BPS price override
 */
export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides5 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bps_config" })
  @Type(
    () =>
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides5BpsConfig
  )
  bpsConfig: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides5BpsConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The subscription's override minimum amount for this price.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minimum_amount" })
  minimumAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model_type" })
  modelType: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides5ModelTypeEnum;
}

export enum PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides4ModelTypeEnum {
  Package = "package",
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides4PackageConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "num_units" })
  numUnits: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unit_amount" })
  unitAmount: string;
}

/**
 * Package price override
 */
export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides4 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The subscription's override minimum amount for this price.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minimum_amount" })
  minimumAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model_type" })
  modelType: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides4ModelTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "package_config" })
  @Type(
    () =>
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides4PackageConfig
  )
  packageConfig: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides4PackageConfig;
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides3BulkConfigTiers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "maximum_units" })
  maximumUnits: string;

  @SpeakeasyMetadata()
  @Expose({ name: "unit_amount" })
  unitAmount: string;
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides3BulkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides3BulkConfigTiers,
  })
  @Expose({ name: "tiers" })
  @Type(
    () =>
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides3BulkConfigTiers
  )
  tiers: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides3BulkConfigTiers[];
}

export enum PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides3ModelTypeEnum {
  Bulk = "bulk",
}

/**
 * Bulk price override
 */
export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides3 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bulk_config" })
  @Type(
    () =>
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides3BulkConfig
  )
  bulkConfig: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides3BulkConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The subscription's override minimum amount for this price.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minimum_amount" })
  minimumAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model_type" })
  modelType: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides3ModelTypeEnum;
}

export enum PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides2ModelTypeEnum {
  Unit = "unit",
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides2UnitConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "unit_amount" })
  unitAmount: string;
}

/**
 * Unit price override
 */
export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The subscription's override minimum amount for this price.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minimum_amount" })
  minimumAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model_type" })
  modelType: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides2ModelTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "unit_config" })
  @Type(
    () =>
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides2UnitConfig
  )
  unitConfig: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides2UnitConfig;
}

export enum PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides1ModelTypeEnum {
  Tiered = "tiered",
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides1TieredConfigTiers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "first_unit" })
  firstUnit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_unit" })
  lastUnit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "unit_amount" })
  unitAmount?: string;
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides1TieredConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides1TieredConfigTiers,
  })
  @Expose({ name: "tiers" })
  @Type(
    () =>
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides1TieredConfigTiers
  )
  tiers?: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides1TieredConfigTiers[];
}

/**
 * Tiered price override
 */
export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides1 extends SpeakeasyBase {
  /**
   * price_id
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The subscription's override minimum amount for this price.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minimum_amount" })
  minimumAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model_type" })
  modelType: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides1ModelTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "tiered_config" })
  @Type(
    () =>
      PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides1TieredConfig
  )
  tieredConfig: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyPriceOverrides1TieredConfig;
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBody extends SpeakeasyBase {
  /**
   * Reset billing periods to be aligned with the plan change’s effective date.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "align_billing_with_plan_change_date" })
  alignBillingWithPlanChangeDate?: boolean;

  /**
   * The date that the plan change should take effect, localized to the customer's timezone. This parameter can only be passed if the `change_option` is `requested_date`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "change_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  changeDate?: Date;

  /**
   * Determines the timing of the plan change
   */
  @SpeakeasyMetadata()
  @Expose({ name: "change_option" })
  changeOption: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyChangeOptionEnum;

  /**
   * The external_plan_id of the plan that the given subscription should be switched to. Note that either this property or `plan_id` must be specified.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "external_plan_id" })
  externalPlanId?: string;

  /**
   * The subscription's override minimum amount for the plan.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minimum_amount" })
  minimumAmount?: string;

  /**
   * The plan that the given subscription should be switched to. Note that either this property or `external_plan_id` must be specified.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "plan_id" })
  planId?: string;

  /**
   * Optionally provide a list of overrides for prices on the plan
   */
  @SpeakeasyMetadata()
  @Expose({ name: "price_overrides" })
  priceOverrides?: any[];
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=subscription_id",
  })
  subscriptionId: string;
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  subscription?: shared.Subscription;
}