/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PatchExternalCustomersCustomerIdUsageRequestBodyEvents extends SpeakeasyBase {
  /**
   * A name to meaningfully identify the action or event type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "event_name" })
  eventName: string;

  /**
   * A dictionary of custom properties. Values in this dictionary must be numeric, boolean, or strings. Nested dictionaries are disallowed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "properties" })
  properties: Record<string, any>;

  /**
   * An ISO 8601 format date with no timezone offset (i.e. UTC). This should represent the time that usage was recorded, and is particularly important to attribute usage to a given billing period.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  timestamp: string;
}

export class PatchExternalCustomersCustomerIdUsageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: PatchExternalCustomersCustomerIdUsageRequestBodyEvents,
  })
  @Expose({ name: "events" })
  @Type(() => PatchExternalCustomersCustomerIdUsageRequestBodyEvents)
  events: PatchExternalCustomersCustomerIdUsageRequestBodyEvents[];
}

export class PatchExternalCustomersCustomerIdUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PatchExternalCustomersCustomerIdUsageRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=external_customer_id",
  })
  externalCustomerId: string;

  /**
   * This bound is exclusive (i.e. events before this timestamp will be updated)
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeframe_end",
  })
  timeframeEnd: Date;

  /**
   * This bound is inclusive (i.e. events with this timestamp onward, inclusive will be updated)
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeframe_start",
  })
  timeframeStart: Date;
}

export class PatchExternalCustomersCustomerIdUsage400ApplicationJSONValidationErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "idempotency_key" })
  idempotencyKey?: string;

  /**
   * An array of strings corresponding to each validation failure
   */
  @SpeakeasyMetadata()
  @Expose({ name: "validation_errors" })
  validationErrors?: string[];
}

/**
 * Bad Request
 */
export class PatchExternalCustomersCustomerIdUsage400ApplicationJSON extends SpeakeasyBase {
  /**
   * HTTP Code
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: number;

  /**
   * Error message
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;

  /**
   * Contains all failing validation events.
   */
  @SpeakeasyMetadata({
    elemType:
      PatchExternalCustomersCustomerIdUsage400ApplicationJSONValidationErrors,
  })
  @Expose({ name: "validation_errors" })
  @Type(
    () =>
      PatchExternalCustomersCustomerIdUsage400ApplicationJSONValidationErrors
  )
  validationErrors: PatchExternalCustomersCustomerIdUsage400ApplicationJSONValidationErrors[];
}

/**
 * OK
 */
export class PatchExternalCustomersCustomerIdUsage200ApplicationJSON extends SpeakeasyBase {
  /**
   * An array of strings, corresponding to idempotency_key's marked as duplicates (previously ingested)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "duplicate" })
  duplicate?: Record<string, any>[];

  /**
   * An array of strings, corresponding to idempotency_key's which were successfully ingested.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ingested" })
  ingested?: string[];
}

export class PatchExternalCustomersCustomerIdUsageResponse extends SpeakeasyBase {
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
  patchExternalCustomersCustomerIdUsage200ApplicationJSONObject?: PatchExternalCustomersCustomerIdUsage200ApplicationJSON;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  patchExternalCustomersCustomerIdUsage400ApplicationJSONObject?: PatchExternalCustomersCustomerIdUsage400ApplicationJSON;
}
