/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListSubscriptionsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customer_id" })
    customerId?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=external_customer_id" })
    externalCustomerId?: string;
}

/**
 * OK
 */
export class ListSubscriptions200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Subscription })
    @Expose({ name: "data" })
    @Type(() => shared.Subscription)
    data?: shared.Subscription[];

    @SpeakeasyMetadata()
    @Expose({ name: "pagination_metadata" })
    @Type(() => shared.PaginationMetadata)
    paginationMetadata?: shared.PaginationMetadata;
}

export class ListSubscriptionsResponse extends SpeakeasyBase {
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
    listSubscriptions200ApplicationJSONObject?: ListSubscriptions200ApplicationJSON;
}
