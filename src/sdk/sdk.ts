/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Availability } from "./availability";
import { Coupon } from "./coupon";
import { Credit } from "./credit";
import { CreditNote } from "./creditnote";
import { Customer } from "./customer";
import { Event } from "./event";
import { Invoice } from "./invoice";
import * as shared from "./models/shared";
import { Plan } from "./plan";
import { Subscription } from "./subscription";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production server
     */
    "https://api.withorb.com/v1",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0";
    sdkVersion = "0.1.0";
    genVersion = "2.39.0";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * API Reference: Orb powers usage-based billing for the fastest-growing software companies.
 *
 * @remarks
 * Orb's API is built with the following principles in mind:
 *
 * 1. **Predictable developer experience**: Where applicable, the Orb API uses industry-standard patterns such as cursor-based pagination and standardized error output. To help with debugging in critical API actions, the API always strives to provide detailed and actionable error messages. Aliases such as external customer IDs aid in fast integration times.
 * 2. **Reliably real time**: Orb's event-based APIs, such as event ingestion are designed to handle extremely high throughput and scale with concurrent load. Orb also provides a real-time event-level credits ledger and a highly performant webhooks architecture.
 * 3. **Flexibility at the forefront**: Features like timezone localization and the ability to amend historical usage show the flexible nature of the platform.
 */
export class SDK {
    /**
     * The Availability resource represents a customer's availability. Availability is created when a customer's invoice is paid, and is updated when a customer's transaction is refunded.
     */
    public availability: Availability;
    /**
     * The Coupon resource represents a discount that can be applied to a customer's invoice. Coupons can be applied to a customer's invoice either by the customer or by the Orb API.
     */
    public coupon: Coupon;
    /**
     * The Credits resource represents a customer's credits. Credits are created when a customer's invoice is paid, and are updated when a customer's transaction is refunded.
     */
    public credit: Credit;
    /**
     * The Credit Note resource represents a credit note that has been generated for a customer. Credit Notes are generated when a customer's billing interval has elapsed, and are updated when a customer's invoice is paid.
     */
    public creditNote: CreditNote;
    /**
     * The Customer resource represents a customer of your service. Customers are created when a customer is created in your service, and are updated when a customer's information is updated in your service.
     */
    public customer: Customer;
    /**
     * The Event resource represents an event that has been created for a customer. Events are created when a customer's invoice is paid, and are updated when a customer's transaction is refunded.
     */
    public event: Event;
    /**
     * The Invoice resource represents an invoice that has been generated for a customer. Invoices are generated when a customer's billing interval has elapsed, and are updated when a customer's invoice is paid.
     */
    public invoice: Invoice;
    /**
     * The Plan resource represents a plan that can be subscribed to by a customer. Plans define the amount of credits that a customer will receive, the price of the plan, and the billing interval.
     */
    public plan: Plan;
    /**
     * The Subscription resource represents a customer's subscription to a plan. Subscriptions are created when a customer subscribes to a plan, and are updated when a customer's plan is changed.
     */
    public subscription: Subscription;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.availability = new Availability(this.sdkConfiguration);
        this.coupon = new Coupon(this.sdkConfiguration);
        this.credit = new Credit(this.sdkConfiguration);
        this.creditNote = new CreditNote(this.sdkConfiguration);
        this.customer = new Customer(this.sdkConfiguration);
        this.event = new Event(this.sdkConfiguration);
        this.invoice = new Invoice(this.sdkConfiguration);
        this.plan = new Plan(this.sdkConfiguration);
        this.subscription = new Subscription(this.sdkConfiguration);
    }
}
