/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListCustomers200ApplicationJSONPaginationMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "has_more" })
  hasMore: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "next_cursor" })
  nextCursor: string;
}

/**
 * OK
 */
export class ListCustomers200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Customer })
  @Expose({ name: "data" })
  @Type(() => shared.Customer)
  data: shared.Customer[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination_metadata" })
  @Type(() => ListCustomers200ApplicationJSONPaginationMetadata)
  paginationMetadata: ListCustomers200ApplicationJSONPaginationMetadata;
}

export class ListCustomersResponse extends SpeakeasyBase {
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
  listCustomers200ApplicationJSONObject?: ListCustomers200ApplicationJSON;
}
