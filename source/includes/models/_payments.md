# Payments
When an invoice is declared as paid, it must include a payment object within it. You cannot interact directly with payment objects, you must attach them to a paid invoice, when creating it or declaring an invoice as paid.


## The payment object
> Example object

```json
{
  "id": "oc_pa_14234412027lw37c15a717",
  "object": "payment",
  "invoice": "oc_in_14219457353oiq78b051b1",
  "payment_date": "2015-01-28",
  "customer_bank_country": "United Kingdom",
  "payment_mode": {},
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

### Attributes
Attribute | Type
--------- | -----------
**id:** | **string**
**object:** | **string** equals to payment
**invoice:** | **string required** Identifier of the related invoice
**payment_date:** | **date required**
**customer_bank_country:** | **string required** Country name or code for the customer cheque, card or bank account
**payment_mode:** | **object required** Payment mode object. See previous section for attributes and details
**created_at:** | **datetime**
**updated_at:** | **datetime**
