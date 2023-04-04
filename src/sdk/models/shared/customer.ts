/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
 */
export class CustomerBillingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  /**
   * Two-letter country code (ISO 3166-1 alpha-2).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  /**
   * ZIP or postal code
   */
  @SpeakeasyMetadata()
  @Expose({ name: "postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;
}

/**
 * The external payments or invoicing solution connected to this customer.
 */
export enum CustomerPaymentProviderEnum {
  Stripe = "stripe",
  Quickbooks = "quickbooks",
  BillCom = "bill.com",
  StripeCharge = "stripe_charge",
  StripeInvoice = "stripe_invoice",
  Null = "null",
}

/**
 * The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
 */
export class CustomerShippingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  /**
   * Two-letter country code (ISO 3166-1 alpha-2).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  /**
   * ZIP or postal code
   */
  @SpeakeasyMetadata()
  @Expose({ name: "postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;
}

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
export class Customer extends SpeakeasyBase {
  /**
   * The customer's current balance in their currency.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance: string;

  /**
   * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "billing_address" })
  @Type(() => CustomerBillingAddress)
  billingAddress?: CustomerBillingAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  /**
   * An ISO 4217 currency string used for the customer's invoices and balance.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  /**
   * A valid customer email, to be used for notifications. When Orb triggers payment through a payment gateway, this email will be used for any automatically issued receipts.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  /**
   * An optional user-defined ID for this customer resource, used throughout the system as an alias for this Customer. Use this field to identify a customer by an existing identifier in your system.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "external_customer_id" })
  externalCustomerId?: string;

  /**
   * The full name of the customer
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * The external payments or invoicing solution connected to this customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payment_provider" })
  paymentProvider: CustomerPaymentProviderEnum;

  /**
   * The ID of this customer in an external payments solution, such as Stripe. This is used for creating charges or invoices in the external system via Orb.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payment_provider_id" })
  paymentProviderId: string;

  /**
   * The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "shipping_address" })
  @Type(() => CustomerShippingAddress)
  shippingAddress?: CustomerShippingAddress;

  /**
   * A timezone identifier from the IANA timezone database, such as "America/Los_Angeles". This defaults to your account's timezone if not set. This cannot be changed after customer creation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone: string;
}
