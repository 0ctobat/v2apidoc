# Invoice items
Invoice items are the line items in an invoice, You cannot interact directly with invoice items, you must attach them to an invoice, when creating it.

## The invoice item object
> Example object

```json
{
  "id":"oc_ii_14234251155z6y1bdf99f9",
  "object":"invoice_item",
  "invoice_id":"oc_in_14545911337463c688866b",
  "description":"Monthly subscription",
  "extratax_cents":833,
  "quantity":1,
  "tax_rate":20.0,
  "tax_included_cents":1000,
  "eservice":true,
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

### Attributes
The following requirements are concerning the addition of an invoice item in an invoice, when creating it.

Attribute | Type
--------- | -----------
**id:** | **string**
**object:** | **string** equals to invoice_item
**invoice_id:** | **string required** Invoice ID the invoice item belongs to
**description:** | **string required** Description of the invoice line
**extratax_cents:** | **integer optional** The extratax amount of the line in cents. Currency applied is the invoice's currency. Mandatory if the `tax_included_cents` field is blank.
**tax_included_cents:** | **integer optional** The all tax included amount of the line in cents. Currency applied is the invoice's currency. Mandatory if the `extratax_cents` field is blank.
**tax_rate:** | **float optional** The tax rate of the transaction. Each time you create an invoice item, we try to compute the rate automatically in function of customer (B2B, B2C), transaction type (goods, services, eservices), and location (EU country, non-EU, ...). Fill this field, only if you want to override our automatic calculation, if you have a specific rate for instance.
**eservice:** | **boolean optional** Indicates if it's an online-sold service, without any manual intervention, as indicated in the 2015-EU VAT laws. Defaults to your account default value if not filled.
**created_at** | **datetime**
**updated_at** | **datetime**

## Create an invoice item

```shell
# Definition
POST https://api.octobat.com/invoice_items/

# Example request
curl https://api.octobat.com/payment_modes \
  -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
  -d description="Monthly subscription" \
  -d invoice_id="oc_in_14545911337463c688866b" \
  -d tax_included_cents=6000

# Example response
{
  "id":"oc_ii_14234251155z6y1bdf99f9",
  "object":"invoice_item",
  "invoice_id":"oc_in_14545911337463c688866b",
  "description":"Monthly subscription",
  "extratax_cents":5000,
  "quantity":1,
  "tax_rate":20.0,
  "tax_included_cents":6000,
  "eservice":true,
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```


```ruby
# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::InvoiceItem.create(
  invoice_id: "oc_in_14545911337463c688866b",
  description: "Monthly subscription",
  tax_included_cents: 6000
)

# Example response
#<Octobat::InvoiceItem id=oc_ii_14234251155z6y1bdf99f9 0x00000a> JSON: {
 "id": "oc_ii_14234251155z6y1bdf99f9",
 "object":"invoice_item",
 "invoice_id":"oc_in_14545911337463c688866b",
 "description":"Monthly subscription",
 "extratax_cents":5000,
 "quantity":1,
 "tax_rate":20.0,
 "tax_included_cents":6000,
 "eservice":true,
 "created_at": "2015-07-12T11:22:29Z",
 "updated_at": "2015-07-12T11:22:29Z"
}
```

You can add invoice items to a draft invoice from the moment it has been created until it is confirmed.

### Arguments
Attribute | Description
--------- | ------- | -----------
**id:** | **string**
**object:** | **string** equals to invoice_item
**invoice_id:** | **string required** Invoice ID the invoice item belongs to. Must be a draft invoice.
**description:** | **string required** Description of the invoice line
**extratax_cents:** | **integer optional** The extratax amount of the line in cents. Currency applied is the invoice's currency. Mandatory if the `tax_included_cents` field is blank.
**tax_included_cents:** | **integer optional** The all tax included amount of the line in cents. Currency applied is the invoice's currency. Mandatory if the `extratax_cents` field is blank.
**tax_rate:** | **float optional** The tax rate of the transaction. Each time you create an invoice item, we try to compute the rate automatically in function of customer (B2B, B2C), transaction type (goods, services, eservices), and location (EU country, non-EU, ...). Fill this field, only if you want to override our automatic calculation, if you have a specific rate for instance.
**eservice:** | **boolean optional** Indicates if it's an online-sold service, without any manual intervention, as indicated in the 2015-EU VAT laws. Defaults to your account default value if not filled.

### Returns
Returns the invoice item object if the creation succeeds. Returns an error if parameters are invalid
