/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform } from "class-transformer";

/**
 * Determines when the change takes effect. Note that if `effective_date` is specified, this defautls to `effective_date`. Otherwise, this defaults to `immediate` unless it's explicitly set to `upcoming_invoice.
 */
export enum UpdateFixedFeeQuantityRequestBodyChangeOption {
    Immediate = "immediate",
    UpcomingInvoice = "upcoming_invoice",
    EffectiveDate = "effective_date",
}

export class UpdateFixedFeeQuantityRequestBody extends SpeakeasyBase {
    /**
     * Determines when the change takes effect. Note that if `effective_date` is specified, this defautls to `effective_date`. Otherwise, this defaults to `immediate` unless it's explicitly set to `upcoming_invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "change_option" })
    changeOption?: UpdateFixedFeeQuantityRequestBodyChangeOption;

    /**
     * The date that the quantity change should take effect, localized to the customer's timezone. If this parameter is not passed in, the quantity change is effective immediately.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "effective_date" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    effectiveDate?: RFCDate;

    /**
     * Price for which the quantity should be updated. Must be a fixed fee.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price_id" })
    priceId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;
}

export class UpdateFixedFeeQuantityRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: UpdateFixedFeeQuantityRequestBody;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
    subscriptionId: string;
}

export class UpdateFixedFeeQuantityResponse extends SpeakeasyBase {
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