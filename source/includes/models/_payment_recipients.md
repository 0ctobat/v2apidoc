# Payment recipients
## The payment recipient object

> Example object

```json
{
  "id": "oc_pr_14597887132yzs440d46e9",
  "object": "payment_recipient",
  "livemode": true,
  "name": "Transfer",
  "details": {
    "iban": "FR90 17216 18009 17038133245 88"
  },
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

### Attributes
Attribute | Type
--------- | -----------
**id:** | **string**
**object:** | **string**
**livemode:** | **boolean**
**name:** | **string required** Name or description of the payment recipient
**details:** | **json** Details addressed to the customer, to recieve the payment (IBAN, check recipient...)
**created_at** | **datetime**
**updated_at** | **datetime**



## Listing payment recipients

```shell
# Definition
GET https://api.octobat.com/payment_recipients/

# Example request
$ curl https://api.octobat.com/payment_recipients \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:

# Example response
{
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    {
      "id": "oc_pr_14597887132yzs440d46e9",
      "object": "payment_recipient",
      "livemode": true,
      "name": "Transfer",
      "details": {
        "iban": "FR90 17216 18009 17038133245 88"
      }
    },
    {...},
    {...}
  ]
}
```

```ruby
# Definition
Octobat::PaymentRecipient.all

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::PaymentRecipient.all

# Example response
#<Octobat::ListObject:0x3fe634d74498> JSON: {
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    #<Octobat::PaymentRecipient id=oc_pr_14597887132yzs440d46e9 0x00000a> JSON: {
      "id": "oc_pr_14597887132yzs440d46e9",
      "object": "payment_recipient",
      "livemode": true,
      "name": "Transfer",
      "details": {
        "iban": "FR90 17216 18009 17038133245 88"
      }
    },
    #<Octobat::PaymentRecipient[...] ...>,
    #<Octobat::PaymentRecipient[...] ...>
  ]
}
```

Returns a list of payment recipients.

### Returns
A hash with a data property that contains an array of payment recipients. Each entry in the array is a separate numbering payment recipient. If no payment recipients are available, the resulting array will be empty. This request should never raise an error.
