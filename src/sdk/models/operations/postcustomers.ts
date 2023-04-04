/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
 */
export class PostCustomersRequestBodyBillingAddress extends SpeakeasyBase {
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
 * This is used for creating charges or invoices in an external system via Orb. When not in test mode:
 *
 * @remarks
 * - the connection must first be configured in the Orb webapp.
 * - if the provider is an invoicing provider (`stripe_invoice`, `quickbooks`, `bill.com`), any product mappings must first be configured with the Orb team.
 */
export enum PostCustomersRequestBodyPaymentProviderEnum {
  Quickbooks = "quickbooks",
  BillCom = "bill.com",
  StripeCharge = "stripe_charge",
  StripeInvoice = "stripe_invoice",
  Null = "null",
}

/**
 * The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
 */
export class PostCustomersRequestBodyShippingAddress extends SpeakeasyBase {
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

export class PostCustomersRequestBody extends SpeakeasyBase {
  /**
   * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "billing_address" })
  @Type(() => PostCustomersRequestBodyBillingAddress)
  billingAddress?: PostCustomersRequestBodyBillingAddress;

  /**
   * An ISO 4217 currency string used for the customer's invoices and balance. If not set at creation time, will be set at subscription creation time.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  /**
   * A valid customer email, to be used for invoicing and notifications.
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
  @Expose({ name: "name" })
  name: string;

  /**
   * This is used for creating charges or invoices in an external system via Orb. When not in test mode:
   *
   * @remarks
   * - the connection must first be configured in the Orb webapp.
   * - if the provider is an invoicing provider (`stripe_invoice`, `quickbooks`, `bill.com`), any product mappings must first be configured with the Orb team.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payment_provider" })
  paymentProvider?: PostCustomersRequestBodyPaymentProviderEnum;

  /**
   * The ID of this customer in an external payments solution, such as Stripe. This is used for creating charges or invoices in the external system via Orb.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payment_provider_id" })
  paymentProviderId?: string;

  /**
   * The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "shipping_address" })
  @Type(() => PostCustomersRequestBodyShippingAddress)
  shippingAddress?: PostCustomersRequestBodyShippingAddress;

  /**
   * A timezone identifier from the IANA timezone database, such as "America/Los_Angeles". This defaults to your account's timezone if not set. This cannot be changed after customer creation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone?: string;
}

export class PostCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Created
   */
  @SpeakeasyMetadata()
  customer?: shared.Customer;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
