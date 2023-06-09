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
export class PutCustomersCustomerIdRequestBodyBillingAddress extends SpeakeasyBase {
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
export enum PutCustomersCustomerIdRequestBodyPaymentProviderEnum {
  StripeInvoice = "stripe_invoice",
  Quickbooks = "quickbooks",
  BillCom = "bill.com",
  StripeCharge = "stripe_charge",
  Null = "null",
}

/**
 * The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
 */
export class PutCustomersCustomerIdRequestBodyShippingAddress extends SpeakeasyBase {
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
export class PutCustomersCustomerIdRequestBody extends SpeakeasyBase {
  /**
   * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "billing_address" })
  @Type(() => PutCustomersCustomerIdRequestBodyBillingAddress)
  billingAddress?: PutCustomersCustomerIdRequestBodyBillingAddress;

  /**
   * A valid customer email, to be used for invoicing and notifications.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * This is used for creating charges or invoices in an external system via Orb. When not in test mode:
   *
   * @remarks
   * - the connection must first be configured in the Orb webapp.
   * - if the provider is an invoicing provider (`stripe_invoice`, `quickbooks`, `bill.com`), any product mappings must first be configured with the Orb team.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payment_provider" })
  paymentProvider?: PutCustomersCustomerIdRequestBodyPaymentProviderEnum;

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
  @Type(() => PutCustomersCustomerIdRequestBodyShippingAddress)
  shippingAddress?: PutCustomersCustomerIdRequestBodyShippingAddress;
}

export class PutCustomersCustomerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutCustomersCustomerIdRequestBody;

  /**
   * Orb customer ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=customer_id",
  })
  customerId: string;
}

export class PutCustomersCustomerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  customer?: shared.Customer;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
