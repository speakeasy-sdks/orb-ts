# Ingest400ApplicationJSONValidationFailed


## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `validationErrors`                                                                 | *string*[]                                                                         | :heavy_minus_sign:                                                                 | An array of objects corresponding to validation failures for each idempotency_key. |