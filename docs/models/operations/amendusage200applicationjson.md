# AmendUsage200ApplicationJSON

OK


## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `duplicate`                                                                                                 | [AmendUsage200ApplicationJSONDuplicate](../../models/operations/amendusage200applicationjsonduplicate.md)[] | :heavy_minus_sign:                                                                                          | An array of strings, corresponding to idempotency_key's marked as duplicates (previously ingested)          |
| `ingested`                                                                                                  | *string*[]                                                                                                  | :heavy_minus_sign:                                                                                          | An array of strings, corresponding to idempotency_key's which were successfully ingested.                   |