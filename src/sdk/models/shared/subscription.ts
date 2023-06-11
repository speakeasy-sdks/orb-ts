/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Customer } from "./customer";
import { Plan } from "./plan";
import { Expose, Transform, Type } from "class-transformer";

export class SubscriptionFixedFeeQuantitySchedule extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "end_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endDate?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "price_id" })
    priceId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startDate?: Date;
}

/**
 * User specified key-value pairs. If no metadata was specified at subscription creation time, this defaults to an empty dictionary.
 */
export class SubscriptionMetadata extends SpeakeasyBase {}

export class SubscriptionRedeemedCoupon extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "coupon_id" })
    couponId?: string;

    /**
     * The effective end time for the coupon, after which point  it'll no longer apply to invoices for this subscription.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endDate?: Date;

    /**
     * The effective start time of this coupon - that is, when its corresponding discount starts applying.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startDate?: Date;
}

export enum SubscriptionStatus {
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

    /**
     * Determines whether issued invoices for this subscription will automatically be charged with the saved payment method on the due date. This property defaults to the plan's behavior.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "auto_collection" })
    autoCollection?: boolean;

    /**
     * The day of the month on which the billing cycle is anchored. If the maximum number of days in a month is greater than this value, the last day of the month is the billing cycle day (e.g. billing_cycle_day=31 for April means the billing period begins on the 30th.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "billing_cycle_day" })
    billingCycleDay: number;

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
     * In Orb, customers are assigned system generated identifiers automatically, but it's often desirable to have these match existing identifiers in your system. To avoid having to denormalize Orb ID information, you can pass in an `external_customer_id` with your own identifier. See [Customer ID Aliases](../guides/events-and-metrics/customer-aliases) for further information about how these aliases work in Orb.
     *
     * In addition to having an identifier in your system, a customer may exist in a payment provider solution like Stripe. Use the `payment_provider_id` and the `payment_provider` enum field to express this mapping.
     *
     * A customer also has a timezone (from the standard [IANA timezone database](https://www.iana.org/time-zones)), which defaults to your account's timezone. See [Timezone localization](../guides/product-catalog/) for information on what this timezone parameter influences within Orb.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer" })
    @Type(() => Customer)
    customer: Customer;

    /**
     * Determines the default memo on this subscriptions' invoices. Note that if this is not provided, it is determined by the plan configuration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "default_invoice_memo" })
    defaultInvoiceMemo?: string;

    /**
     * The date Orb stops billing for this subscription.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endDate: Date;

    /**
     * List of all fixed fee quantities associated with this subscription, with their start and end dates. This list contains the initial quantity along with quantity changes.
     */
    @SpeakeasyMetadata({ elemType: SubscriptionFixedFeeQuantitySchedule })
    @Expose({ name: "fixed_fee_quantity_schedule" })
    @Type(() => SubscriptionFixedFeeQuantitySchedule)
    fixedFeeQuantitySchedule: SubscriptionFixedFeeQuantitySchedule[];

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * User specified key-value pairs. If no metadata was specified at subscription creation time, this defaults to an empty dictionary.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => SubscriptionMetadata)
    metadata: SubscriptionMetadata;

    /**
     * Determines the difference between the invoice issue date for subscription invoices as the date that they are due. A value of "0" here represents that the invoice is due on issue, whereas a value of 30 represents that the customer has a month to pay the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "net_terms" })
    netTerms?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "plan" })
    @Type(() => Plan)
    plan: Plan;

    @SpeakeasyMetadata()
    @Expose({ name: "redeemed_coupon" })
    @Type(() => SubscriptionRedeemedCoupon)
    redeemedCoupon?: SubscriptionRedeemedCoupon;

    /**
     * The date Orb starts billing for this subscription.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startDate: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: SubscriptionStatus;
}
