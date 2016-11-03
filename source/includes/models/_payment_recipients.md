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
  }
}
```

### Attributes
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>id</strong><br/><span class="details">string</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>object</strong><br/><span class="details">string, value is "<strong>payment_recipient</strong>"</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>livemode</strong><br/><span class="details">boolean</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>name</strong><br/><span class="details">string</span></td>
      <td><p>Name or description of the payment recipient.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>details</strong><br/><span class="details">json</span></td>
      <td><p>Details addressed to the customer, to recieve the payment (IBAN, check recipient...).</p></td>
    </tr>
  </tbody>
</table>


## Listing payment recipients

```shell
# Definition
GET https://apiv2.octobat.com/payment_recipients/

# Example request
$ curl https://apiv2.octobat.com/payment_recipients \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:

# Example response
{
  "object": "list",
  "has_before": false,
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
  "has_before": false,
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
