/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Optionally provide the name of the external marketplace that the subscription is attached to.
 */
export enum PostSubscriptionsRequestBodyExternalMarketplaceEnum {
  Google = "google",
  Aws = "aws",
  Azure = "azure",
}

export class PostSubscriptionsRequestBodyPhaseOverrides extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount?: Record<string, any>;

  /**
   * The new minimum amount for the phase. Providing `null` will clear the existing minimum, if it exists.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minimum_amount" })
  minimumAmount?: string;

  /**
   * The phase order that is being modified.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: number;
}

export enum PostSubscriptionsRequestBodyPriceOverrides7ModelTypeEnum {
  TieredBps = "tiered_bps",
}

export class PostSubscriptionsRequestBodyPriceOverrides7TieredBpsConfigTiers extends SpeakeasyBase {
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

export class PostSubscriptionsRequestBodyPriceOverrides7TieredBpsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: PostSubscriptionsRequestBodyPriceOverrides7TieredBpsConfigTiers,
  })
  @Expose({ name: "tiers" })
  @Type(() => PostSubscriptionsRequestBodyPriceOverrides7TieredBpsConfigTiers)
  tiers: PostSubscriptionsRequestBodyPriceOverrides7TieredBpsConfigTiers[];
}

/**
 * Tiered BPS price override
 */
export class PostSubscriptionsRequestBodyPriceOverrides7 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount?: Record<string, any>;

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
  modelType: PostSubscriptionsRequestBodyPriceOverrides7ModelTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "tiered_bps_config" })
  @Type(() => PostSubscriptionsRequestBodyPriceOverrides7TieredBpsConfig)
  tieredBpsConfig: PostSubscriptionsRequestBodyPriceOverrides7TieredBpsConfig;
}

export class PostSubscriptionsRequestBodyPriceOverrides6BulkBpsConfigTiers extends SpeakeasyBase {
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

export class PostSubscriptionsRequestBodyPriceOverrides6BulkBpsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: PostSubscriptionsRequestBodyPriceOverrides6BulkBpsConfigTiers,
  })
  @Expose({ name: "tiers" })
  @Type(() => PostSubscriptionsRequestBodyPriceOverrides6BulkBpsConfigTiers)
  tiers?: PostSubscriptionsRequestBodyPriceOverrides6BulkBpsConfigTiers[];
}

export enum PostSubscriptionsRequestBodyPriceOverrides6ModelTypeEnum {
  BulkBps = "bulk_bps",
}

/**
 * Bulk BPS price override
 */
export class PostSubscriptionsRequestBodyPriceOverrides6 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bulk_bps_config" })
  @Type(() => PostSubscriptionsRequestBodyPriceOverrides6BulkBpsConfig)
  bulkBpsConfig?: PostSubscriptionsRequestBodyPriceOverrides6BulkBpsConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount?: Record<string, any>;

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
  modelType: PostSubscriptionsRequestBodyPriceOverrides6ModelTypeEnum;
}

export class PostSubscriptionsRequestBodyPriceOverrides5BpsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bps" })
  bps: number;

  @SpeakeasyMetadata()
  @Expose({ name: "per_unit_maximum" })
  perUnitMaximum: string;
}

export enum PostSubscriptionsRequestBodyPriceOverrides5ModelTypeEnum {
  Bps = "bps",
}

/**
 * BPS price override
 */
export class PostSubscriptionsRequestBodyPriceOverrides5 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bps_config" })
  @Type(() => PostSubscriptionsRequestBodyPriceOverrides5BpsConfig)
  bpsConfig: PostSubscriptionsRequestBodyPriceOverrides5BpsConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount?: Record<string, any>;

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
  modelType: PostSubscriptionsRequestBodyPriceOverrides5ModelTypeEnum;
}

export enum PostSubscriptionsRequestBodyPriceOverrides4ModelTypeEnum {
  Package = "package",
}

export class PostSubscriptionsRequestBodyPriceOverrides4PackageConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "package_amount" })
  packageAmount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "package_size" })
  packageSize: number;
}

/**
 * Package price override
 */
export class PostSubscriptionsRequestBodyPriceOverrides4 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount?: Record<string, any>;

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
  modelType: PostSubscriptionsRequestBodyPriceOverrides4ModelTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "package_config" })
  @Type(() => PostSubscriptionsRequestBodyPriceOverrides4PackageConfig)
  packageConfig: PostSubscriptionsRequestBodyPriceOverrides4PackageConfig;
}

export class PostSubscriptionsRequestBodyPriceOverrides3BulkConfigTiers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "maximum_units" })
  maximumUnits: string;

  @SpeakeasyMetadata()
  @Expose({ name: "unit_amount" })
  unitAmount: string;
}

export class PostSubscriptionsRequestBodyPriceOverrides3BulkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: PostSubscriptionsRequestBodyPriceOverrides3BulkConfigTiers,
  })
  @Expose({ name: "tiers" })
  @Type(() => PostSubscriptionsRequestBodyPriceOverrides3BulkConfigTiers)
  tiers: PostSubscriptionsRequestBodyPriceOverrides3BulkConfigTiers[];
}

export enum PostSubscriptionsRequestBodyPriceOverrides3ModelTypeEnum {
  Bulk = "bulk",
}

/**
 * Bulk price override
 */
export class PostSubscriptionsRequestBodyPriceOverrides3 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bulk_config" })
  @Type(() => PostSubscriptionsRequestBodyPriceOverrides3BulkConfig)
  bulkConfig: PostSubscriptionsRequestBodyPriceOverrides3BulkConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount?: Record<string, any>;

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
  modelType: PostSubscriptionsRequestBodyPriceOverrides3ModelTypeEnum;
}

export enum PostSubscriptionsRequestBodyPriceOverrides2ModelTypeEnum {
  Unit = "unit",
}

export class PostSubscriptionsRequestBodyPriceOverrides2UnitConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "unit_amount" })
  unitAmount: string;
}

/**
 * Unit price override
 */
export class PostSubscriptionsRequestBodyPriceOverrides2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "fixed_price_quantity" })
  fixedPriceQuantity?: number;

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
  modelType: PostSubscriptionsRequestBodyPriceOverrides2ModelTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "unit_config" })
  @Type(() => PostSubscriptionsRequestBodyPriceOverrides2UnitConfig)
  unitConfig: PostSubscriptionsRequestBodyPriceOverrides2UnitConfig;
}

export enum PostSubscriptionsRequestBodyPriceOverrides1ModelTypeEnum {
  Tiered = "tiered",
}

export class PostSubscriptionsRequestBodyPriceOverrides1TieredConfigTiers extends SpeakeasyBase {
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

export class PostSubscriptionsRequestBodyPriceOverrides1TieredConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: PostSubscriptionsRequestBodyPriceOverrides1TieredConfigTiers,
  })
  @Expose({ name: "tiers" })
  @Type(() => PostSubscriptionsRequestBodyPriceOverrides1TieredConfigTiers)
  tiers?: PostSubscriptionsRequestBodyPriceOverrides1TieredConfigTiers[];
}

/**
 * Tiered price override
 */
export class PostSubscriptionsRequestBodyPriceOverrides1 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount?: Record<string, any>;

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
  modelType: PostSubscriptionsRequestBodyPriceOverrides1ModelTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "tiered_config" })
  @Type(() => PostSubscriptionsRequestBodyPriceOverrides1TieredConfig)
  tieredConfig: PostSubscriptionsRequestBodyPriceOverrides1TieredConfig;
}

export class PostSubscriptionsRequestBody extends SpeakeasyBase {
  /**
   * Align billing periods with the subscription's start_date. If this is not provided, this defaults to aligning billing periods with the start of the month.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "align_billing_with_subscription_start_date" })
  alignBillingWithSubscriptionStartDate?: boolean;

  /**
   * The ID of the customer to subscribe.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "customer_id" })
  customerId?: string;

  /**
   * The external ID of the customer to subscribe, as an alternate to passing the `customer_id`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "external_customer_id" })
  externalCustomerId?: string;

  /**
   * Optionally provide the name of the external marketplace that the subscription is attached to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "external_marketplace" })
  externalMarketplace?: PostSubscriptionsRequestBodyExternalMarketplaceEnum;

  /**
   * The reporting ID to associate this subscription with the external marketplace. Required if external_marketplace is specified.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "external_marketplace_reporting_id" })
  externalMarketplaceReportingId?: string;

  /**
   * The external ID of the plan, which can be used in place of the `plan_id`.
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
   * Optionally provide a list of minimum amount or discount overrides for phases on the plan.
   */
  @SpeakeasyMetadata({ elemType: PostSubscriptionsRequestBodyPhaseOverrides })
  @Expose({ name: "phase_overrides" })
  @Type(() => PostSubscriptionsRequestBodyPhaseOverrides)
  phaseOverrides?: PostSubscriptionsRequestBodyPhaseOverrides[];

  /**
   * The plan that the given customer should be subscribed to. The plan determines the pricing and cadence of the subscription.
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

  /**
   * The date that Orb should start billing for the subscription, localized to the customer's timezone. If this is not provided, this defaults to the current date in the customer's timezone.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;
}

export class PostSubscriptionsResponse extends SpeakeasyBase {
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
