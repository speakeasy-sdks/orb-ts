/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Customer } from "./customer";
import { Plan } from "./plan";
import { Expose, Transform, Type } from "class-transformer";

export enum SubscriptionStatusEnum {
  Active = "active",
  Ended = "ended",
  Upcoming = "upcoming",
}

/**
 * A subscription represents the purchase of a plan by a customer.
 *
 * @remarks
 *
 * By default, subscriptions begin on the day that they're created and renew automatically for each billing cycle at the cadence that's configured in the plan definition.
 *
 * Subscriptions also default to **beginning of month alignment**, which means the first invoice issued for the subscription will have pro-rated charges between the `start_date` and the first of the following month. Subsequent billing periods will always start and end on a month boundary (e.g. subsequent month starts for monthly billing).
 *
 * Depending on the plan configuration, any _flat_ recurring fees will be billed either at the beginning (in-advance) or end (in-arrears) of each billing cycle. Plans default to **in-advance billing**. Usage-based fees are billed in arrears as usage is accumulated. In the normal course of events, you can expect an invoice to contain usage-based charges for the previous period, and a recurring fee for the following period.
 */
export class Subscription extends SpeakeasyBase {
  /**
   * The current plan phase that is active, only if the subscription's plan has phases.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "active_plan_phase_order" })
  activePlanPhaseOrder?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  /**
   * The end of the current billing period. This is an exclusive timestamp, such that the instant returned is not part of the billing period. Set to null for subscriptions that are not currently active.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "current_billing_period_end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  currentBillingPeriodEndDate?: Date;

  /**
   * The start of the current billing period. This is an inclusive timestamp; the instant returned is exactly the beginning of the billing period. Set to null if the subscription is not currently active.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "current_billing_period_start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  currentBillingPeriodStartDate?: Date;

  /**
   * A customer is a buyer of your products, and the other party to the billing relationship.
   *
   * @remarks
   *
   * In Orb, customers are assigned system generated identifiers automatically, but it's often desirable to have these match existing identifiers in your system. To avoid having to denormalize Orb ID information, you can pass in an `external_customer_id` with your own identifier. See [Customer ID Aliases](../docs/Customer-ID-Aliases.md) for further information about how these aliases work in Orb.
   *
   * In addition to having an identifier in your system, a customer may exist in a payment provider solution like Stripe. Use the `payment_provider_id` and the `payment_provider` enum field to express this mapping.
   *
   * A customer also has a timezone (from the standard [IANA timezone database](https://www.iana.org/time-zones)), which defaults to your account's timezone. See [Timezone localization](../docs/Timezone-localization.md) for information on what this timezone parameter influences within Orb.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "customer" })
  @Type(() => Customer)
  customer: Customer;

  /**
   * The date Orb stops billing for this subscription.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "plan" })
  @Type(() => Plan)
  plan: Plan;

  /**
   * The date Orb starts billing for this subscription.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: SubscriptionStatusEnum;
}