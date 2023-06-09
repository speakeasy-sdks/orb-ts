/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform } from "class-transformer";

export class AmendEventRequestBody extends SpeakeasyBase {
    /**
     * The Orb Customer identifier
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId?: string;

    /**
     * A name to meaningfully identify the action or event type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "event_name" })
    eventName: string;

    /**
     * An alias for the Orb customer, whose mapping is specified when creating the customer
     */
    @SpeakeasyMetadata()
    @Expose({ name: "external_customer_id" })
    externalCustomerId?: string;

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
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    timestamp: Date;
}

export class AmendEventRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: AmendEventRequestBody;

    /**
     * Identical to the `idempotency_key` provided on event ingestion. Uniquely identifies an event in the system.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_id" })
    eventId: string;
}

/**
 * Bad Request
 */
export class AmendEvent400ApplicationJSON extends SpeakeasyBase {
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
export class AmendEvent200ApplicationJSON extends SpeakeasyBase {
    /**
     * event_id of the amended event, if successfully ingested
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amended" })
    amended?: string;
}

export class AmendEventResponse extends SpeakeasyBase {
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
    amendEvent200ApplicationJSONObject?: AmendEvent200ApplicationJSON;

    /**
     * Bad Request
     */
    @SpeakeasyMetadata()
    amendEvent400ApplicationJSONObject?: AmendEvent400ApplicationJSON;
}
