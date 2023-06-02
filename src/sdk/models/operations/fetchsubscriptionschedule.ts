/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class FetchSubscriptionScheduleRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
    subscriptionId: string;
}

export class FetchSubscriptionSchedule200ApplicationJSONDataPlan extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FetchSubscriptionSchedule200ApplicationJSONData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "end_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endDate?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "plan" })
    @Type(() => FetchSubscriptionSchedule200ApplicationJSONDataPlan)
    plan?: FetchSubscriptionSchedule200ApplicationJSONDataPlan;

    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startDate?: Date;
}

/**
 * OK
 */
export class FetchSubscriptionSchedule200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FetchSubscriptionSchedule200ApplicationJSONData })
    @Expose({ name: "data" })
    @Type(() => FetchSubscriptionSchedule200ApplicationJSONData)
    data?: FetchSubscriptionSchedule200ApplicationJSONData[];

    @SpeakeasyMetadata()
    @Expose({ name: "pagination_metadata" })
    @Type(() => shared.PaginationMetadata)
    paginationMetadata?: shared.PaginationMetadata;
}

export class FetchSubscriptionScheduleResponse extends SpeakeasyBase {
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
    fetchSubscriptionSchedule200ApplicationJSONObject?: FetchSubscriptionSchedule200ApplicationJSON;
}