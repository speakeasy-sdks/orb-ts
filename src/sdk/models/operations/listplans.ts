/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class ListPlans200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Plan })
    @Expose({ name: "data" })
    @Type(() => shared.Plan)
    data?: shared.Plan[];

    @SpeakeasyMetadata()
    @Expose({ name: "pagination_metadata" })
    @Type(() => shared.PaginationMetadata)
    paginationMetadata?: shared.PaginationMetadata;
}

export class ListPlansResponse extends SpeakeasyBase {
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
    listPlans200ApplicationJSONObject?: ListPlans200ApplicationJSON;
}