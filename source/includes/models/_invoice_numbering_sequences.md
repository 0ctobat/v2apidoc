# Invoice Numbering sequences
## The invoice numbering sequence object

> Example object

```json
{
  "id": "oc_ns_146192091741t5175c8c47",
  "object": "invoice_numbering_sequence",
  "prefix": "AAA-",
  "is_default": true,
  "example": "AAA-1"
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
      <td class="attribute"><strong>object</strong><br/><span class="details">string, value is "<strong>invoice_numbering_sequence</strong>"</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>prefix</strong><br/><span class="details">string</span></td>
      <td><p>The prefix of each invoice number in this sequence.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>is_default</strong><br/><span class="details">string</span></td>
      <td><p>Only one numbering sequence can be the default one, which is selected if no numbering sequence is chosen during invoice creation.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>example</strong><br/><span class="details">string</span></td>
      <td><p>An example of an invoice number that can be generated within this sequence.</p></td>
    </tr>
  </tbody>
</table>


## Listing invoice numbering sequences

```shell
# Definition
GET https://api.octobat.com/invoice_numbering_sequences/

# Example request
$ curl https://api.octobat.com/invoice_numbering_sequences \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:

# Example response
{
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    {
      "id": "oc_ns_146192091741t5175c8c47",
      "object": "invoice_numbering_sequence",
      "prefix": "AAA-",
      "is_default": true,
      "example": "AAA-1"
    },
    {...},
    {...}
  ]
}
```

```ruby
# Definition
Octobat::InvoiceNumberingSequence.all

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::InvoiceNumberingSequence.all

# Example response
#<Octobat::ListObject:0x3fe634d74498> JSON: {
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    #<Octobat::InvoiceNumberingSequence id=oc_ns_146192091741t5175c8c47 0x00000a> JSON: {
      "id": "oc_ns_146192091741t5175c8c47",
      "object": "invoice_numbering_sequence",
      "prefix": "AAA-",
      "is_default": true,
      "example": "AAA-1"
    },
    #<Octobat::InvoiceNumberingSequence[...] ...>,
    #<Octobat::InvoiceNumberingSequence[...] ...>
  ]
}
```

Returns a list of invoice numbering sequences.

### Returns
A hash with a data property that contains an array of invoice numbering sequences. Each entry in the array is a separate numbering sequence object. If no numbering sequence are available, the resulting array will be empty. This request should never raise an error.
