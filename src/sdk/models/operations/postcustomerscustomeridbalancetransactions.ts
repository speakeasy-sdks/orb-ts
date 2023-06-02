/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export enum PostCustomersCustomerIdBalanceTransactionsRequestBodyType {
    Increment = "increment",
    Decrement = "decrement",
}

export class PostCustomersCustomerIdBalanceTransactionsRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: string;

    /**
     * An optional description that can be specified around this entry.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: PostCustomersCustomerIdBalanceTransactionsRequestBodyType;
}

export class PostCustomersCustomerIdBalanceTransactionsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PostCustomersCustomerIdBalanceTransactionsRequestBody;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
    customerId: string;
}

export class PostCustomersCustomerIdBalanceTransactionsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    customerBalanceTransaction?: shared.CustomerBalanceTransaction;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}