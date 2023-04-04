/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PutDeprecateEventsEventIdRequest extends SpeakeasyBase {
  /**
   * Identical to the `idempotency_key` provided on event ingestion. Uniquely identifies an event in the system.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=event_id",
  })
  eventId: string;
}

/**
 * Bad Request
 */
export class PutDeprecateEventsEventId400ApplicationJSON extends SpeakeasyBase {
  /**
   * HTTP Code
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: number;

  /**
   * Error message
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  /**
   * An array of strings corresponding to the validation failures
   */
  @SpeakeasyMetadata()
  @Expose({ name: "validation_errors" })
  validationErrors?: string[];
}

/**
 * OK
 */
export class PutDeprecateEventsEventId200ApplicationJSON extends SpeakeasyBase {
  /**
   * event_id of the deprecated event, if successfully updated
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deprecated" })
  deprecated?: string;
}

export class PutDeprecateEventsEventIdResponse extends SpeakeasyBase {
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
  putDeprecateEventsEventId200ApplicationJSONObject?: PutDeprecateEventsEventId200ApplicationJSON;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  putDeprecateEventsEventId400ApplicationJSONObject?: PutDeprecateEventsEventId400ApplicationJSON;
}