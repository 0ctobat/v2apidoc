# Credit note Numbering sequences
## The credit note numbering sequence object

> Example object

```json
{
  "id": "oc_cns_1462279395ko79c927206e",
  "object": "credit_note_numbering_sequence",
  "prefix": "CN-AAA-",
  "is_default": true,
  "next_number": "CN-AAA-1"
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
      <td class="attribute"><strong>object</strong><br/><span class="details">string, value is "<strong>credit_note_numbering_sequence</strong>"</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>prefix</strong><br/><span class="details">string</span></td>
      <td><p>The prefix of each credit note number in this sequence.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>is_default</strong><br/><span class="details">string</span></td>
      <td><p>Only one numbering sequence can be the default one, which is selected if no numbering sequence is chosen during credit note creation.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>next_number</strong><br/><span class="details">string</span></td>
      <td><p>The next credit note number that will be generated within this sequence.</p></td>
    </tr>
  </tbody>
</table>


## Listing credit note numbering sequences

```shell
# Definition
GET https://apiv2.octobat.com/credit_note_numbering_sequences/

# Example request
$ curl https://apiv2.octobat.com/credit_note_numbering_sequences \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:

# Example response
{
  "object": "list",
  "has_before": false,
  "has_more": false,
  "total_count": 3,
  "data": [
    {
      "id": "oc_cns_14622823144wil0b9768b2",
      "object": "credit_note_numbering_sequence",
      "prefix": "CN-AAA-",
      "is_default": true,
      "next_number": "CN-AAA-1"
    },
    {...},
    {...}
  ]
}
```

```ruby
# Definition
Octobat::CreditNoteNumberingSequence.all

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::CreditNoteNumberingSequence.all

# Example response
#<Octobat::ListObject:0x3fe634d74498> JSON: {
  "object": "list",
  "has_before": false,
  "has_more": false,
  "total_count": 3,
  "data": [
    #<Octobat::CreditNoteNumberingSequence id=oc_cns_14622823144wil0b9768b2 0x00000a> JSON: {
      "id": "oc_cns_14622823144wil0b9768b2",
      "object": "credit_note_numbering_sequence",
      "prefix": "CN-AAA-",
      "is_default": true,
      "next_number": "CN-AAA-1"
    },
    #<Octobat::CreditNoteNumberingSequence[...] ...>,
    #<Octobat::CreditNoteNumberingSequence[...] ...>
  ]
}
```

Returns a list of credit note numbering sequences.

### Returns
A hash with a data property that contains an array of credit note numbering sequences. Each entry in the array is a separate numbering sequence object. If no numbering sequence are available, the resulting array will be empty. This request should never raise an error.
