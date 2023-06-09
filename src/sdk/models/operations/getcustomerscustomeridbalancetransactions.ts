/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetCustomersCustomerIdBalanceTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=customer_id",
  })
  customerId: string;
}

/**
 * OK
 */
export class GetCustomersCustomerIdBalanceTransactions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CustomerBalanceTransaction })
  @Expose({ name: "data" })
  @Type(() => shared.CustomerBalanceTransaction)
  data?: shared.CustomerBalanceTransaction[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination_metadata" })
  paginationMetadata?: Record<string, any>;
}

export class GetCustomersCustomerIdBalanceTransactionsResponse extends SpeakeasyBase {
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
  getCustomersCustomerIdBalanceTransactions200ApplicationJSONObject?: GetCustomersCustomerIdBalanceTransactions200ApplicationJSON;
}
