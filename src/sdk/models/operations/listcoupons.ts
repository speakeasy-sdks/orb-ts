/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListCouponsRequest extends SpeakeasyBase {
    /**
     * Filter to coupons matching this redemption code.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redemption_code" })
    redemptionCode?: string;

    /**
     * Show archived coupons as well (by default, this endpoint only returns active coupons).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_archived" })
    showArchived?: boolean;
}

/**
 * OK
 */
export class ListCoupons200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Coupon })
    @Expose({ name: "data" })
    @Type(() => shared.Coupon)
    data?: shared.Coupon[];

    @SpeakeasyMetadata()
    @Expose({ name: "pagination_metadata" })
    @Type(() => shared.PaginationMetadata)
    paginationMetadata?: shared.PaginationMetadata;
}

export class ListCouponsResponse extends SpeakeasyBase {
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
    listCoupons200ApplicationJSONObject?: ListCoupons200ApplicationJSON;
}