/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class FetchCustomerCreditsRequest extends SpeakeasyBase {
    /**
     * The Orb Customer ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
    customerId: string;
}

export class FetchCustomerCredits200ApplicationJSONData extends SpeakeasyBase {
    /**
     * Remaining credits in this block
     */
    @SpeakeasyMetadata()
    @Expose({ name: "balance" })
    balance: number;

    /**
     * An ISO 8601 format date with a timezone offset that represents when this block of credits is no longer usable.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expiry_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    expiryDate: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * How much, in USD, a customer paid for a single credit in this block
     */
    @SpeakeasyMetadata()
    @Expose({ name: "per_unit_cost_basis" })
    perUnitCostBasis: string;
}

export class FetchCustomerCredits200ApplicationJSONPaginationMetadata extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "has_more" })
    hasMore: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor?: string;
}

/**
 * OK
 */
export class FetchCustomerCredits200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FetchCustomerCredits200ApplicationJSONData })
    @Expose({ name: "data" })
    @Type(() => FetchCustomerCredits200ApplicationJSONData)
    data: FetchCustomerCredits200ApplicationJSONData[];

    @SpeakeasyMetadata()
    @Expose({ name: "pagination_metadata" })
    @Type(() => FetchCustomerCredits200ApplicationJSONPaginationMetadata)
    paginationMetadata: FetchCustomerCredits200ApplicationJSONPaginationMetadata;
}

export class FetchCustomerCreditsResponse extends SpeakeasyBase {
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
    fetchCustomerCredits200ApplicationJSONObject?: FetchCustomerCredits200ApplicationJSON;
}
