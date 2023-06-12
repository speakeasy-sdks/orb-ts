/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * User-specified key value pairs, often useful for referencing internal resources or IDs. Returned as-is in the customer resource.
 */
export class UpdateCustomerRequestBodyMetadata extends SpeakeasyBase {}

/**
 * This is used for creating charges or invoices in an external system via Orb. When not in test mode:
 *
 * @remarks
 * - the connection must first be configured in the Orb webapp.
 * - if the provider is an invoicing provider (`stripe_invoice`, `quickbooks`, `bill.com`), any product mappings must first be configured with the Orb team.
 */
export enum UpdateCustomerRequestBodyPaymentProvider {
    StripeInvoice = "stripe_invoice",
    Quickbooks = "quickbooks",
    BillCom = "bill.com",
    StripeCharge = "stripe_charge",
    Null = "null",
}

/**
 * The external payments or invoicing solution connected to this customer.
 */
export class UpdateCustomerRequestBody extends SpeakeasyBase {
    /**
     * Auto collection behavior determines whether the payment method will automatically be charged for issued invoices. This field cannot be updated to `True` if the customer does not have a payment provider linked.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "auto_collection" })
    autoCollection?: boolean;

    /**
     * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "billing_address" })
    @Type(() => shared.BillingAddress)
    billingAddress?: shared.BillingAddress;

    /**
     * A valid customer email, to be used for invoicing and notifications.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * Determines whether Orb will send automated emails to this customer. This setting is superseded by the account-wide email setting for email delivery.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email_delivery" })
    emailDelivery?: boolean;

    /**
     * User-specified key value pairs, often useful for referencing internal resources or IDs. Returned as-is in the customer resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => UpdateCustomerRequestBodyMetadata)
    metadata?: UpdateCustomerRequestBodyMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * This is used for creating charges or invoices in an external system via Orb. When not in test mode:
     *
     * @remarks
     * - the connection must first be configured in the Orb webapp.
     * - if the provider is an invoicing provider (`stripe_invoice`, `quickbooks`, `bill.com`), any product mappings must first be configured with the Orb team.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payment_provider" })
    paymentProvider?: UpdateCustomerRequestBodyPaymentProvider;

    /**
     * The ID of this customer in an external payments solution, such as Stripe. This is used for creating charges or invoices in the external system via Orb.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payment_provider_id" })
    paymentProviderId?: string;

    /**
     * The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shipping_address" })
    @Type(() => shared.ShippingAddress)
    shippingAddress?: shared.ShippingAddress;

    /**
     * Tax IDs are commonly required to be displayed on customer invoices, which are added to the headers of invoices.
     *
     * @remarks
     *
     *
     * ### Supported Tax ID Countries and Types
     *
     *
     * | Country        | Type         | Description                                 |
     * |----------------|--------------|---------------------------------------------|
     * | Australia      | `au_abn`     | Australian Business Number (AU ABN)	        |
     * | Australia      | `au_arn`     | Australian Taxation Office Reference Number |
     * | Austria        | `eu_vat`     | European VAT number                         |
     * | Belgium        | `eu_vat`     | European VAT number                         |
     * | Brazil         | `br_cnpj`    | Brazilian CNPJ number                       |
     * | Brazil         | `br_cpf`     | Brazilian CPF number	                       |
     * | Bulgaria       | `bg_uic`     | Bulgaria Unified Identification Code        |
     * | Bulgaria       | `eu_vat`     | European VAT number                         |
     * | Canada         | `ca_bn`      | Canadian BN                                 |
     * | Canada         | `ca_gst_hst` | Canadian GST/HST number                     |
     * | Canada         | `ca_pst_bc`  | Canadian PST number (British Columbia)      |
     * | Canada         | `ca_pst_mb`  | Canadian PST number (Manitoba)              |
     * | Canada         | `ca_pst_sk`  | Canadian PST number (Saskatchewan)          |
     * | Canada         | `ca_qst`     | Canadian QST number (Québec)                |
     * | Chile          | `cl_tin`     | Chilean TIN                                 |
     * | Croatia        | `eu_vat`     | European VAT number                         |
     * | Cyprus         | `eu_vat`     | European VAT number                         |
     * | Czech Republic | `eu_vat`     | European VAT number                         |
     * | Denmark        | `eu_vat`     | European VAT number                         |
     * | Egypt          | `eg_tin`     | Egyptian Tax Identification Number	         |
     * | Estonia   | `eu_vat`     | European VAT number   |
     * | EU        | `eu_oss_vat` | European One Stop Shop VAT number for non-Union scheme                                                   |
     * | Finland   | `eu_vat`     | European VAT number                                                                                      |
     * | France    | `eu_vat`     | European VAT number                                                                                      |
     * | Georgia   | `ge_vat`     | Georgian VAT                                                                                             |
     * | Germany   | `eu_vat`     | European VAT number                                                                                      |
     * | Greece    | `eu_vat`     | European VAT number                                                                                      |
     * | Hong Kong | `hk_br`      | Hong Kong BR number                                                                                      |
     * | Hungary   | `eu_vat`     | European VAT number                                                                                      |
     * | Hungary   | `hu_tin`     | Hungary tax number (adószám)	                                                                            |
     * | Iceland   | `is_vat`     | Icelandic VAT                                                                                            |
     * | India     | `in_gst`     | Indian GST number                                                                                        |
     * | Indonesia | `id_npwp`    | Indonesian NPWP number                                                                                   |
     * | Ireland   | `eu_vat`     | European VAT number                                                                                      |
     * | Israel    | `il_vat`     | Israel VAT                                                                                               |
     * | Italy     | `eu_vat`     | European VAT number                                                                                      |
     * | Japan     | `jp_cn`      | Japanese Corporate Number (*Hōjin Bangō*)                                                                |
     * | Japan     | `jp_rn`      | Japanese Registered Foreign Businesses' Registration Number (*Tōroku Kokugai Jigyōsha no Tōroku Bangō*)	 |
     * | Japan     | `jp_trn`     | Japanese Tax Registration Number (*Tōroku Bangō*)	                                                       |
     * | Kenya     | `ke_pin`     | Kenya Revenue Authority Personal Identification Number                                                   |
     * | Latvia    | `eu_vat`     | European VAT number                                                                                  |
     * | Liechtenstein | `li_uid`  | Liechtensteinian UID number           |
     * | Lithuania     | `eu_vat`  | European VAT number	                  |
     * | Luxembourg    | `eu_vat`  | European VAT number	                  |
     * | Malaysia      | `my_frp`  | Malaysian FRP number                  |
     * | Malaysia      | `my_itn`  | Malaysian ITN                         |
     * | Malaysia      | `my_sst`  | Malaysian SST number                  |
     * | Malta         | `eu_vat ` | European VAT number                   |
     * | Mexico        | `mx_rfc`  | Mexican RFC number                    |
     * | Netherlands   | `eu_vat`  | European VAT number	                  |
     * | New Zealand   | `nz_gst`  | New Zealand GST number	               |
     * | Norway        | `no_vat`  | Norwegian VAT number                  |
     * | Philippines   | `ph_tin	` | Philippines Tax Identification Number |
     * | Poland        | `eu_vat`  | European VAT number                   |
     * | Portugal      | `eu_vat`  | European VAT number                   |
     * | Romania       | `eu_vat`  | European VAT number                   |
     * | Russia        | `ru_inn`  | Russian INN                           |
     * | Russia        | `ru_kpp`  | Russian KPP                           |
     * | Saudi Arabia  | `sg_gst`  | Singaporean GST                       |
     * | Singapore     | `sg_uen`  | Singaporean UEN	                      |
     * | Slovakia      | `eu_vat`  | European VAT number                   |
     * | Slovenia      | `eu_vat`  | European VAT number                   |
     * | Slovenia             | `si_tin` | Slovenia tax number (davčna številka)	             |
     * | South Africa	        | `za_vat` | South African VAT number                           |
     * | South Korea          | `kr_brn` | Korean BRN                                         |
     * | Spain                | `es_cif` | Spanish NIF number (previously Spanish CIF number) |
     * | Spain                | `eu_vat` | European VAT number	                               |
     * | Sweden               | `eu_vat` | European VAT number                                |
     * | Switzerland          | `ch_vat` | Switzerland VAT number	                            |
     * | Taiwan               | `tw_vat` | Taiwanese VAT	                                     |
     * | Thailand             | `th_vat` | Thai VAT                                           |
     * | Turkey               | `tr_tin` | Turkish Tax Identification Number                  |
     * | Ukraine              | `ua_vat` | Ukrainian VAT                                      |
     * | United Arab Emirates | `ae_trn` | United Arab Emirates TRN	                          |
     * | United Kingdom       | `eu_vat` | Northern Ireland VAT number                        |
     * | United Kingdom       | `gb_vat` | United Kingdom VAT number                          |
     * | United States        | `us_ein` | United States EIN                                  |
     *
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_id" })
    @Type(() => shared.CustomerTaxId)
    taxId?: shared.CustomerTaxId;
}

export class UpdateCustomerRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: UpdateCustomerRequestBody;

    /**
     * Orb customer ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
    customerId: string;
}

export class UpdateCustomerResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    customer?: shared.Customer;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
