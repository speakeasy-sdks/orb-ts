/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Event extends SpeakeasyBase {
  /**
   * The Orb Customer identifier
   */
  @SpeakeasyMetadata()
  @Expose({ name: "customer_id" })
  customerId: string;

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
   * A unique value, generated by the client, that is used to de-duplicate events. Note that on ingestion, this value is passed in as idempotency_key
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

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
