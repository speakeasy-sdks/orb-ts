/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

/**
 * This determines the windowing of usage reporting.
 */
export enum FetchSubscriptionUsageGranularity {
    Day = "day",
}

/**
 * `periodic` returns usage for each window (configured by `granularity`) and `cumulative` returns the usage since the beginning of the billing period. The default is `periodic`.
 */
export enum FetchSubscriptionUsageViewMode {
    Periodic = "periodic",
    Cumulative = "cumulative",
}

export class FetchSubscriptionUsageRequest extends SpeakeasyBase {
    /**
     * When specified in conjunction with `group_by`, this parameter filters usage to a single billable metric. Note that both `group_by` and `billable_metric_id` must be specific together.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=billable_metric_id" })
    billableMetricId?: string;

    /**
     * This determines the windowing of usage reporting.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=granularity" })
    granularity?: FetchSubscriptionUsageGranularity;

    /**
     * When specified in conjunction with `billable_metric_id`, this parameter groups by the key provided. Note that both `group_by` and `billable_metric_id` must be specific together.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_by" })
    groupBy?: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
    subscriptionId: string;

    /**
     * Usage returned is _exclusive_ of `timeframe_end`
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_end" })
    timeframeEnd?: Date;

    /**
     * Usage returned is _inclusive_ of `timeframe_start`
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_start" })
    timeframeStart?: Date;

    /**
     * `periodic` returns usage for each window (configured by `granularity`) and `cumulative` returns the usage since the beginning of the billing period. The default is `periodic`.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view_mode" })
    viewMode?: FetchSubscriptionUsageViewMode;
}

export enum FetchSubscriptionUsage200ApplicationJSONDataModelType {
    Usage = "usage",
}

export class FetchSubscriptionUsage200ApplicationJSONDataUsage extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: string;

    @SpeakeasyMetadata()
    @Expose({ name: "timeframe_end" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    timeframeEnd: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "timeframe_start" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    timeframeStart: Date;
}

export class FetchSubscriptionUsage200ApplicationJSONData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "model_type" })
    modelType: FetchSubscriptionUsage200ApplicationJSONDataModelType;

    @SpeakeasyMetadata({ elemType: FetchSubscriptionUsage200ApplicationJSONDataUsage })
    @Expose({ name: "usage" })
    @Type(() => FetchSubscriptionUsage200ApplicationJSONDataUsage)
    usage: FetchSubscriptionUsage200ApplicationJSONDataUsage[];
}

/**
 * OK
 */
export class FetchSubscriptionUsage200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FetchSubscriptionUsage200ApplicationJSONData })
    @Expose({ name: "data" })
    @Type(() => FetchSubscriptionUsage200ApplicationJSONData)
    data?: FetchSubscriptionUsage200ApplicationJSONData[];
}

export class FetchSubscriptionUsageResponse extends SpeakeasyBase {
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
    fetchSubscriptionUsage200ApplicationJSONObject?: FetchSubscriptionUsage200ApplicationJSON;
}