/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform } from "class-transformer";

export enum PostCustomersCustomerIdCreditsLedgerEntryRequestBodyEntryType {
    Increment = "increment",
    Decrement = "decrement",
    ExpirationChange = "expiration_change",
}

export class PostCustomersCustomerIdCreditsLedgerEntryRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    /**
     * The ID of the block affected by an `expiration_change`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "block_id" })
    blockId?: string;

    /**
     * Optional metadata that can be specified when adding ledger results via the API. For example, this can be used to note an increment refers to trial credits, or for noting corrections as a result of an incident, etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "entry_type" })
    entryType: PostCustomersCustomerIdCreditsLedgerEntryRequestBodyEntryType;

    /**
     * A future date (specified in YYYY-MM-DD format) that denotes when this credit balance should expire.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expiry_date" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    expiryDate?: RFCDate;

    /**
     * Can only be specified when `entry_type=increment`. How much, in USD, a customer paid for a single credit in this block
     */
    @SpeakeasyMetadata()
    @Expose({ name: "per_unit_cost_basis" })
    perUnitCostBasis?: string;

    /**
     * A future date (specified in YYYY-MM-DD) used for `expiration_change`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "target_expiry_date" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    targetExpiryDate?: RFCDate;
}

export class PostCustomersCustomerIdCreditsLedgerEntryRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PostCustomersCustomerIdCreditsLedgerEntryRequestBody;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
    customerId: string;
}

export class PostCustomersCustomerIdCreditsLedgerEntryResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    creditLedgerEntry?: shared.CreditLedgerEntry;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
