/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The customer receiving this invoice.
 */
export class UpcomingInvoiceCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "external_customer_id" })
  externalCustomerId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

/**
 * For configured prices that are split by a grouping key, this will be populated with the key and a value. The `amount` and `subtotal` will be the values for this particular grouping.
 */
export class UpcomingInvoiceLineItemsGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}

/**
 * Only available if `type` is `matrix`. Contains the values of the matrix that this `sub_line_item` represents.
 */
export class UpcomingInvoiceLineItemsSubLineItemsMatrixConfig extends SpeakeasyBase {
  /**
   * The ordered dimension values for this line item.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dimension_values" })
  dimensionValues: string[];
}

/**
 * Only available if `type` is `tier`. Contains the range of units in this tier and the unit amount.
 */
export class UpcomingInvoiceLineItemsSubLineItemsTierConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "first_unit" })
  firstUnit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "last_unit" })
  lastUnit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unit_amount" })
  unitAmount: string;
}

/**
 * An identifier for a sub line item that is specific to a pricing model.
 */
export enum UpcomingInvoiceLineItemsSubLineItemsTypeEnum {
  Matrix = "matrix",
  Tier = "tier",
}

export class UpcomingInvoiceLineItemsSubLineItems extends SpeakeasyBase {
  /**
   * The total amount for this sub line item.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: string;

  /**
   * Only available if `type` is `matrix`. Contains the values of the matrix that this `sub_line_item` represents.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "matrix_config" })
  @Type(() => UpcomingInvoiceLineItemsSubLineItemsMatrixConfig)
  matrixConfig?: UpcomingInvoiceLineItemsSubLineItemsMatrixConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;

  /**
   * Only available if `type` is `tier`. Contains the range of units in this tier and the unit amount.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tier_config" })
  @Type(() => UpcomingInvoiceLineItemsSubLineItemsTierConfig)
  tierConfig?: UpcomingInvoiceLineItemsSubLineItemsTierConfig;

  /**
   * An identifier for a sub line item that is specific to a pricing model.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: UpcomingInvoiceLineItemsSubLineItemsTypeEnum;
}

export class UpcomingInvoiceLineItems extends SpeakeasyBase {
  /**
   * The final amount after any discounts or minimums.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: string;

  /**
   * The end date of the range of time applied for this line item's price.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate: Date;

  /**
   * For configured prices that are split by a grouping key, this will be populated with the key and a value. The `amount` and `subtotal` will be the values for this particular grouping.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "grouping" })
  @Type(() => UpcomingInvoiceLineItemsGrouping)
  grouping: UpcomingInvoiceLineItemsGrouping;

  /**
   * The name of the price associated with this line item.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;

  /**
   * The start date of the range of time applied for this line item's price.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate: Date;

  /**
   * For complex pricing structures, the line item can be broken down further in `sub_line_items`.
   */
  @SpeakeasyMetadata({ elemType: UpcomingInvoiceLineItemsSubLineItems })
  @Expose({ name: "sub_line_items" })
  @Type(() => UpcomingInvoiceLineItemsSubLineItems)
  subLineItems: UpcomingInvoiceLineItemsSubLineItems[];

  /**
   * The line amount before any line item-specific discounts or minimums.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subtotal" })
  subtotal: string;
}

/**
 * The associated subscription for this invoice.
 */
export class UpcomingInvoiceSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

/**
 * Upcoming invoices contain a line-by-line breakdown of an upcoming amount due for a subscription, including incurred usage in the billing period as well as any recurring fees.
 *
 * @remarks
 *
 * Although each line item will be invoiced on the `target_date`, each invoice line item may have distinct date ranges (e.g. for usage billed in arrears, the range may specify the current month whereas an in-advance recurring fees will be for the following month).
 *
 * Since an invoice resource has not been created for this upcoming invoice, this endpoint intentionally does not return an `id` field.
 */
export class UpcomingInvoice extends SpeakeasyBase {
  /**
   * The final amount to be charged to the customer after all minimums and discounts have been applied. Only populated for non-pre-paid plans.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount_due" })
  amountDue: string;

  /**
   * An ISO 4217 currency string or `credits`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  /**
   * The customer receiving this invoice.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "customer" })
  @Type(() => UpcomingInvoiceCustomer)
  customer: UpcomingInvoiceCustomer;

  /**
   * The breakdown of prices in this invoice.
   */
  @SpeakeasyMetadata({ elemType: UpcomingInvoiceLineItems })
  @Expose({ name: "line_items" })
  @Type(() => UpcomingInvoiceLineItems)
  lineItems: UpcomingInvoiceLineItems[];

  /**
   * The associated subscription for this invoice.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subscription" })
  @Type(() => UpcomingInvoiceSubscription)
  subscription: UpcomingInvoiceSubscription;

  /**
   * The total before any discounts and minimums are applied.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subtotal" })
  subtotal: string;

  /**
   * The expected issue date of the invoice.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "target_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  targetDate: Date;
}
