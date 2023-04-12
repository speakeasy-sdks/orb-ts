/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Actions related to invoice management.
 */
export class Invoice {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Retrieve an Invoice
   *
   * @remarks
   * This endpoint is used to fetch an [`Invoice`](../reference/Orb-API.json/components/schemas/Invoice) given an identifier.
   */
  get(
    req: operations.GetInvoiceInvoiceIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceInvoiceIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceInvoiceIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/invoices/{invoice_id}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetInvoiceInvoiceIdResponse =
        new operations.GetInvoiceInvoiceIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.invoice = utils.objectToClass(httpRes?.data, shared.Invoice);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrieve upcoming invoice
   *
   * @remarks
   * This endpoint can be used to fetch the [`UpcomingInvoice`](../reference/Orb-API.json/components/schemas/Upcoming%20Invoice) for the current billing period given a subscription.
   */
  getUpcoming(
    req: operations.GetInvoicesUpcomingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoicesUpcomingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoicesUpcomingRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/invoices/upcoming";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetInvoicesUpcomingResponse =
        new operations.GetInvoicesUpcomingResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.upcomingInvoice = utils.objectToClass(
              httpRes?.data,
              shared.UpcomingInvoice
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List invoices
   *
   * @remarks
   * This endpoint returns a list of all [`Invoice`](../reference/Orb-API.json/components/schemas/Invoice)s for an account in a list format.
   *
   * The list of invoices is ordered starting from the most recently issued invoice date. The response also includes `pagination_metadata`, which lets the caller retrieve the next page of results if they exist.
   */
  list(
    req: operations.ListInvoicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListInvoicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListInvoicesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/invoices";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListInvoicesResponse =
        new operations.ListInvoicesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listInvoices200ApplicationJSONObject = utils.objectToClass(
              httpRes?.data,
              operations.ListInvoices200ApplicationJSON
            );
          }
          break;
      }

      return res;
    });
  }
}
