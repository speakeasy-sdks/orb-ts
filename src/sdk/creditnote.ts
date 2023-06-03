/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * The Credit Note resource represents a credit note that has been generated for a customer. Credit Notes are generated when a customer's billing interval has elapsed, and are updated when a customer's invoice is paid.
 */
export class CreditNote {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * List credit notes
     *
     * @remarks
     * This endpoint returns a list of all [`Credit Note`](../reference/Orb-API.json/components/schemas/Credit-note)s for an account in a list format.
     *
     * The list of credit notes is ordered starting from the most recently created date. The response also includes [`pagination_metadata`](../api/pagination), which lets the caller retrieve the next page of results if they exist.
     */
    async list(
        req: operations.ListCreditNoteRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ListCreditNoteResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListCreditNoteRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/credit_notes";

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ListCreditNoteResponse = new operations.ListCreditNoteResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listCreditNote200ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.ListCreditNote200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }
}
