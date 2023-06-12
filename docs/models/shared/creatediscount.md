# CreateDiscount

The subscription's override discount for this price.


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `amountDiscount`                                                                | *string*                                                                        | :heavy_minus_sign:                                                              | Only allowed if discount_type is amount                                         |
| `discountType`                                                                  | [CreateDiscountDiscountType](../../models/shared/creatediscountdiscounttype.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `percentageDiscount`                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | Only allowed if discount_type is percentage                                     |
| `usageDiscount`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | Only allowed if discount_type is usage                                          |