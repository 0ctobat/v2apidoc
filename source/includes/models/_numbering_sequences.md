# Numbering sequences
## The numbering sequence object

> Example object

```json
{
  "id": "oc_ns_14235277139j06b2fa639d",
  "object": "numbering_sequence",
  "is_default": true,
  "prefix": "OC",
  "example": "OC-2015-02-001"
}
```

### Attributes
Attribute | Type
--------- | -----------
**id:** | **string**
**object:** | **string** equals to numbering_sequence
**is_default:** | **boolean** Only one numbering sequence can be the default one, which is selected if no numbering sequence is chosen during invoice creation
**prefix:** | **string** The prefix of each invoice number in this sequence
**example:** | **string** An example of an invoice number that can be generated within this sequence.


## Listing numbering sequences

```shell
# Definition
GET https://api.octobat.com/numbering_sequences/

# Example request
$ curl https://api.octobat.com/numbering_sequences \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:

# Example response
{
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    {
      "id": "oc_ns_14235277139j06b2fa639d",
      "object": "numbering_sequence",
      "is_default": true,
      "prefix": "OC",
      "example": "OC-2015-02-001"
    },
    {...},
    {...}
  ]
}
```

```ruby
# Definition
Octobat::NumberingSequence.all

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::NumberingSequence.all

# Example response
#<Octobat::ListObject:0x3fe634d74498> JSON: {
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    #<Octobat::NumberingSequence id=oc_ns_14235277139j06b2fa639d 0x00000a> JSON: {
      "id": "oc_ns_14235277139j06b2fa639d",
      "object": "numbering_sequence",
      "is_default": true,
      "prefix": "OC",
      "example": "OC-2015-02-001"
    },
    #<Octobat::NumberingSequence[...] ...>,
    #<Octobat::NumberingSequence[...] ...>
  ]
}
```

Returns a list of numbering sequences.

### Returns
A hash with a data property that contains an array of numbering sequences. Each entry in the array is a separate numbering sequence object. If no numbering sequence are available, the resulting array will be empty. This request should never raise an error.
