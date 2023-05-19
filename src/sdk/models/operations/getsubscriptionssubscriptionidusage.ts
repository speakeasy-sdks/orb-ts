/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * This determines the windowing of usage reporting.
 */
export enum GetSubscriptionsSubscriptionIdUsageGranularity {
  Day = "day",
}

export class GetSubscriptionsSubscriptionIdUsageRequest extends SpeakeasyBase {
  /**
   * When specified in conjunction with `group_by`, this parameter filters usage to a single billable metric. Note that both `group_by` and `billable_metric_id` must be specific together.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=billable_metric_id",
  })
  billableMetricId?: string;

  /**
   * This determines the windowing of usage reporting.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=granularity",
  })
  granularity?: GetSubscriptionsSubscriptionIdUsageGranularity;

  /**
   * When specified in conjunction with `billable_metric_id`, this parameter groups by the key provided. Note that both `group_by` and `billable_metric_id` must be specific together.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=group_by",
  })
  groupBy?: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=subscription_id",
  })
  subscriptionId: string;

  /**
   * Usage returned is _exclusive_ of `timeframe_end`
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeframe_end",
  })
  timeframeEnd?: Date;

  /**
   * Usage returned is _inclusive_ of `timeframe_start`
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeframe_start",
  })
  timeframeStart?: Date;
}

export class GetSubscriptionsSubscriptionIdUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
