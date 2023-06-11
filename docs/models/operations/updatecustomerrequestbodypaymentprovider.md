# UpdateCustomerRequestBodyPaymentProvider

This is used for creating charges or invoices in an external system via Orb. When not in test mode:
- the connection must first be configured in the Orb webapp. 
- if the provider is an invoicing provider (`stripe_invoice`, `quickbooks`, `bill.com`), any product mappings must first be configured with the Orb team.


## Values

| Name            | Value           |
| --------------- | --------------- |
| `StripeInvoice` | stripe_invoice  |
| `Quickbooks`    | quickbooks      |
| `BillCom`       | bill.com        |
| `StripeCharge`  | stripe_charge   |
| `Null`          | null            |