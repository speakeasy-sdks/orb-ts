/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform } from "class-transformer";

export class CreateInvoiceLineItemRequestBody extends SpeakeasyBase {
    /**
     * The total amount in the invoice's currency to add to the line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: string;

    /**
     * An date string to specify the line item's end date in the customer's timezone.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end_date" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    endDate: RFCDate;

    /**
     * The id of the `Invoice` to add this line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "invoice_id" })
    invoiceId: string;

    /**
     * The item name associated with this line item. If an item with the same name exists in Orb, that item will be associated with the line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The number of units on the line item
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;

    /**
     * An date string to specify the line item's start date in the customer's timezone.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    startDate: RFCDate;
}

export class CreateInvoiceLineItemResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Created
     */
    @SpeakeasyMetadata()
    invoiceLineItem?: shared.InvoiceLineItem;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
