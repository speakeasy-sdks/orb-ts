# ListCreditNoteRequest


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `customerId`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | Filter by a specific customer (cannot be used with `external_customer_id`) |
| `externalCustomerId`                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | Filter by a specific customer (cannot be used with `customer_id`)          |
| `subscriptionId`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | Filter by a specific subscription                                          |