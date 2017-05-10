# Credit notes
## The credit note object

> Example object

```json
{
  "id": "oc_cn_1462279788aw2y99365ac5",
  "object": "credit_note",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "credit_note_numbering_sequence": "oc_cns_1462279395ko79c927206e",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "invoice": null,
  "pdf_file_url": null,
  "credit_note_number": "CN-AAA-2",
  "credit_note_date": "2016-05-03",
  "description": "Refund Subscription",
  "email_sent": false,
  "last_sent_at": null,
  "status": "confirmed",
  "payment_status": "to refund",
  "notes": "",
  "language": "fr",
  "currency": "EUR",
  "customer_name": "John doe",
  "customer_address_line_1": "25 rue du Petit Musc",
  "customer_address_line_2": null,
  "customer_address_city": "Paris",
  "customer_address_state": null,
  "customer_address_zip": "75004",
  "customer_address_country": "France",
  "customer_country_code": "FR",
  "customer_tax_number": null,
  "customer_business_type": "B2C",
  "supplier_name": "Octobat SAS",
  "supplier_address_line_1": "230 rue du Général Leclerc",
  "supplier_address_line_2": "",
  "supplier_address_city": "Ermont",
  "supplier_address_state": null,
  "supplier_address_zip": "95120",
  "supplier_address_country": "France",
  "supplier_tax_number": null,
  "legal_fields": {},
  "sources": [],
  "items": {
    "object":"list",
    "data": [
      {
        "id": "oc_it_146133143279h39ba598f5",
        "object": "item",
        "status": "confirmed",
        "confirmed_on": "2016-05-03",
        "transaction": null,
        "invoice": null,
        "credit_note": "oc_cn_1462279788aw2y99365ac5",
        "tax_evidence": "oc_tev_1460565379am3be8f5ef71",
        "product_type": "eservice",
        "sale_mode": "B2C",
        "description": "Entreprise Plan",
        "unit_extratax_amount": 19900,
        "currency": "EUR",
        "quantity": 1,
        "extratax_amount": 19900,
        "tax_rate": 22.0,
        "tax_amount": 4378,
        "gross_amount": 24278,
        "declare_in_region": "FR",
        "tax": "VAT",
        "sources": [],
        "item_exchange": null,
        "item_workspace_currency_exchange": null
      },
      {...},
      {...}
    ]
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
      <td class="attribute"><strong>object</strong><br/><span class="details">string, value is "<strong>credit_note</strong>"</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>livemode</strong><br/><span class="details">boolean</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>customer</strong><br/><span class="details">string</span></td>
      <td><p>ID of the customer.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>credit_note_numbering_sequence</strong><br/><span class="details">string</span></td>
      <td><p>ID of the credit_note numbering sequence.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>document_template</strong><br/><span class="details">string</span></td>
      <td><p>ID of the document template.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>invoice</strong><br/><span class="details">string</span></td>
      <td><p>ID of the invoice.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>pdf_file_url</strong><br/><span class="details">string</span></td>
      <td><p>URL of the credit note PDF.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>credit_note_number</strong><br/><span class="details">string</span></td>
      <td><p>Autocalculate number of the credit note.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>credit_note_date</strong><br/><span class="details">string</span></td>
      <td><p>Date of the credit note.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>description</strong><br/><span class="details">string</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>payment_status</strong><br/><span class="details">string</span></td>
      <td><p>The payment status of the credit note is either <code>refunded</code> or <code>te refund</code>.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>status</strong><br/><span class="details">string</span></td>
      <td><p>The status of the credit note is either <code>draft</code>, <code>confirmed</code> or <code>cancelled</code>.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>email_sent</strong><br/><span class="details">boolean</span></td>
      <td><p>If email is sent to the customer or not.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>last_sent_at</strong><br/><span class="details">string</span></td>
      <td><p>Sending date if email has been sent.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>notes</strong><br/><span class="details">string</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>language</strong><br/><span class="details">string</span></td>
      <td><p>Credit note's language.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>currency</strong><br/><span class="details">string</span></td>
      <td><p>Credit note's currency.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>legal_fields</strong><br/><span class="details">json</span></td>
      <td><p>Fields depending on the supplier country.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>sources</strong><br/><span class="details">array</span></td>
      <td><p>References to the integration's objects this credit note has been created from.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>items</strong><br/><span class="details">list</span></td>
      <td><p>Credit note items.</p></td>
    </tr>
  </tbody>
</table>

## Create a credit note

```shell
# Definition
POST https://apiv2.octobat.com/credit_notes

# Example request
$ curl https://apiv2.octobat.com/credit_notes \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d customer="oc_cu_1459413729au6o6a9ae061" \
   -d description='Refund Subscription' \
   -d currency='EUR' \
   -d notes='' \


# Example response
{
  "id": "oc_cn_1462279788aw2y99365ac5",
  "object": "credit_note",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "credit_note_numbering_sequence": "oc_cns_1462279395ko79c927206e",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "invoice": null,
  "pdf_file_url": null,
  "credit_note_number": "CN-AAA-2",
  "credit_note_date": "2016-05-03",
  "description": "Refund Subscription",
  "email_sent": false,
  "last_sent_at": null,
  "status": "draft",
  "payment_status": "to refund",
  "notes": "",
  "language": "fr",
  "currency": "EUR",
  "customer_name": "John doe",
  "customer_address_line_1": "25 rue du Petit Musc",
  "customer_address_line_2": null,
  "customer_address_city": "Paris",
  "customer_address_state": null,
  "customer_address_zip": "75004",
  "customer_address_country": "France",
  "customer_country_code": "FR",
  "customer_tax_number": null,
  "customer_business_type": "B2C",
  "supplier_name": "Octobat SAS",
  "supplier_address_line_1": "230 rue du Général Leclerc",
  "supplier_address_line_2": "",
  "supplier_address_city": "Ermont",
  "supplier_address_state": null,
  "supplier_address_zip": "95120",
  "supplier_address_country": "France",
  "supplier_tax_number": null,
  "legal_fields": {},
  "sources": [],
  "items": {
    "object":"list",
    "data": []
  }
}
```


```ruby
# Definition
POST https://apiv2.octobat.com/credit_notes

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::CreditNote.create(
  customer: "oc_cu_1459413729au6o6a9ae061",
  description: 'Refund Subscription',
  currency: 'EUR',
  notes: ''
)

# Example response
#<Octobat::CreditNote id=oc_cn_1462279788aw2y99365ac5 0x00000a> JSON: {
  "id": "oc_cn_1462279788aw2y99365ac5",
  "object": "credit_note",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "credit_note_numbering_sequence": "oc_cns_1462279395ko79c927206e",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "invoice": nil,
  "pdf_file_url": nil,
  "credit_note_number": "CN-AAA-2",
  "credit_note_date": "2016-05-03",
  "description": "Refund Subscription",
  "email_sent": false,
  "last_sent_at": nil,
  "status": "draft",
  "payment_status": "to refund",
  "notes": "",
  "language": "fr",
  "currency": "EUR",
  "customer_name": "John doe",
  "customer_address_line_1": "25 rue du Petit Musc",
  "customer_address_line_2": nil,
  "customer_address_city": "Paris",
  "customer_address_state": nil,
  "customer_address_zip": "75004",
  "customer_address_country": "France",
  "customer_country_code": "FR",
  "customer_tax_number": nil,
  "customer_business_type": "B2C",
  "supplier_name": "Octobat SAS",
  "supplier_address_line_1": "230 rue du Général Leclerc",
  "supplier_address_line_2": "",
  "supplier_address_city": "Ermont",
  "supplier_address_state": nil,
  "supplier_address_zip": "95120",
  "supplier_address_country": "France",
  "supplier_tax_number": nil,
  "legal_fields": {},
  "sources": [],
  "items": {
    "object":"list",
    "data": []
  }
}
```

### Arguments
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>customer</strong><br/><span class="badge-warning">required</span></td>
      <td><p>The ID of an existing customer.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>currency</strong><br/><span class="badge-warning">required</span></td>
      <td><p>Three-letter ISO code representing the currency of the transaction.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>credit_note_numbering_sequence</strong><br/><span class="details">optional</span></td>
      <td><p>Numbering sequence ID. Fallbacks to default numbering sequence if not filled.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>invoice</strong><br/><span class="details">optional</span></td>
      <td><p>Invoice ID. The credit note is linked to this invoice.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>description</strong><br/><span class="details">optional</span></td>
      <td><p>Credit note's description.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>notes</strong><br/><span class="details">optional</span></td>
      <td><p>What you want display at the end of the credit note.</p></td>
    </tr>
  </tbody>
</table>

### Returns
Returns the full credit note object if the creation succeeded. Returns an error if parameters are invalid.




## Update a credit note
```shell
# Definition
PATCH https://apiv2.octobat.com/credit_notes/{CREDIT_NOTE_ID}

# Example request
$ curl https://apiv2.octobat.com/credit_notes/oc_cn_1462279788aw2y99365ac5 \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d customer_name="Zuuno SARL" \
   -d customer_business_type="B2B" \
   -d customer_tax_number="FR60528551658" \


# Example response
{
  "id": "oc_cn_1462279788aw2y99365ac5",
  "object": "credit_note",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "credit_note_numbering_sequence": "oc_cns_1462279395ko79c927206e",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "invoice": null,
  "pdf_file_url": null,
  "credit_note_number": "CN-AAA-2",
  "credit_note_date": "2016-05-03",
  "description": "Refund Subscription",
  "email_sent": false,
  "last_sent_at": null,
  "status": "confirmed",
  "payment_status": "to refund",
  "notes": "",
  "language": "fr",
  "currency": "EUR",
  "customer_name": "Zuuno SARL",
  "customer_address_line_1": "25 rue du Petit Musc",
  "customer_address_line_2": null,
  "customer_address_city": "Paris",
  "customer_address_state": null,
  "customer_address_zip": "75004",
  "customer_address_country": "France",
  "customer_country_code": "FR",
  "customer_tax_number": null,
  "customer_business_type": "B2B",
  "supplier_name": "Octobat SAS",
  "supplier_address_line_1": "230 rue du Général Leclerc",
  "supplier_address_line_2": "",
  "supplier_address_city": "Ermont",
  "supplier_address_state": null,
  "supplier_address_zip": "95120",
  "supplier_address_country": "France",
  "supplier_tax_number": "FR60528551658",
  "legal_fields": {},
  "sources": [],
  "items": {
    "object":"list",
    "data": [
      {
        "id": "oc_it_146133143279h39ba598f5",
        "object": "item",
        "status": "confirmed",
        "confirmed_on": "2016-05-03",
        "transaction": null,
        "invoice": null,
        "credit_note": "oc_cn_1462279788aw2y99365ac5",
        "tax_evidence": "oc_tev_1460565379am3be8f5ef71",
        "product_type": "eservice",
        "sale_mode": "B2C",
        "description": "Entreprise Plan",
        "unit_extratax_amount": 19900,
        "currency": "EUR",
        "quantity": 1,
        "extratax_amount": 19900,
        "tax_rate": 22.0,
        "tax_amount": 4378,
        "gross_amount": 24278,
        "declare_in_region": "FR",
        "tax": "VAT",
        "sources": [],
        "item_exchange": null,
        "item_workspace_currency_exchange": null
      },
      {...},
      {...}
    ]
  }
}
```


```ruby
# Definition
credit_note = Octobat::CreditNote.retrieve({CREDIT_NOTE_ID})
credit_note.customer_name = {NEW_CUSTOMER_NAME}
credit_note.customer_business_type = {NEW_CUSTOMER_BUSINESS_TYPE}
credit_note.customer_tax_number = {NEW_CUSTOMER_TAX_NUMBER}
credit_note.save

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

credit_note = Octobat::CreditNote.retrieve("oc_cn_1462279788aw2y99365ac5")
credit_note.customer_name = "Zuuno SARL"
credit_note.customer_business_type = "B2B"
credit_note.customer_tax_number = "FR60528551658"
credit_note.save


# Example response
#<Octobat::CreditNote id=oc_cn_1462279788aw2y99365ac5 0x00000a> JSON: {
  "id": "oc_cn_1462279788aw2y99365ac5",
  "object": "credit_note",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "credit_note_numbering_sequence": "oc_cns_1462279395ko79c927206e",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "invoice": nil,
  "pdf_file_url": nil,
  "credit_note_number": "CN-AAA-2",
  "credit_note_date": "2016-05-03",
  "description": "Refund Subscription",
  "email_sent": false,
  "last_sent_at": nil,
  "status": "confirmed",
  "payment_status": "to refund",
  "notes": "",
  "language": "fr",
  "currency": "EUR",
  "customer_name": "Zuuno SARL",
  "customer_address_line_1": "25 rue du Petit Musc",
  "customer_address_line_2": nil,
  "customer_address_city": "Paris",
  "customer_address_state": nil,
  "customer_address_zip": "75004",
  "customer_address_country": "France",
  "customer_country_code": "FR",
  "customer_tax_number": nil,
  "customer_business_type": "B2B",
  "supplier_name": "Octobat SAS",
  "supplier_address_line_1": "230 rue du Général Leclerc",
  "supplier_address_line_2": "",
  "supplier_address_city": "Ermont",
  "supplier_address_state": nil,
  "supplier_address_zip": "95120",
  "supplier_address_country": "France",
  "supplier_tax_number": "FR60528551658",
  "legal_fields": {},
  "sources": [],
  "items": {
    "object":"list",
    "data": [
      {
        "id": "oc_it_146133143279h39ba598f5",
        "object": "item",
        "status": "confirmed",
        "confirmed_on": "2016-05-03",
        "transaction": nil,
        "invoice": nil,
        "credit_note": "oc_cn_1462279788aw2y99365ac5",
        "tax_evidence": "oc_tev_1460565379am3be8f5ef71",
        "product_type": "eservice",
        "sale_mode": "B2C",
        "description": "Entreprise Plan",
        "unit_extratax_amount": 19900,
        "currency": "EUR",
        "quantity": 1,
        "extratax_amount": 19900,
        "tax_rate": 22.0,
        "tax_amount": 4378,
        "gross_amount": 24278,
        "declare_in_region": "FR",
        "tax": "VAT",
        "sources": [],
        "item_exchange": nil,
        "item_workspace_currency_exchange": nil
      },
      {...},
      {...}
    ]
  }
}
```

### Arguments
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>customer_name</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>customer_address_line_1</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>customer_address_line_2</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>customer_address_city</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>customer_address_state</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>customer_address_zip</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>customer_address_country</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>customer_tax_number</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>customer_business_type</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>description</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>notes</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
  </tbody>
</table>

### Returns
Returns the full credit note object if the update succeeded. Returns an error if the credit note has already been sent by email and is no longer updatable, or if the update fails.





## Send by email
```shell
# Definition
POST https://apiv2.octobat.com/credit_notes/{CREDIT_NOTE_ID}/send

# Example request


# Example response

```




```ruby
# Definition
credit_note = Octobat::CreditNote.retrieve("oc_cn_1462279788aw2y99365ac5")
credit_note.send()

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

credit_note = Octobat::CreditNote.retrieve("oc_cn_1462279788aw2y99365ac5")
credit_note.send

# Example response
#<Octobat::CreditNote id=oc_cn_1462279788aw2y99365ac5 0x00000a> JSON: {{
  "id": "oc_cn_1462279788aw2y99365ac5",
  "object": "credit_note",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "credit_note_numbering_sequence": "oc_cns_1462279395ko79c927206e",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "invoice": nil,
  "pdf_file_url": nil,
  "credit_note_number": "CN-AAA-2",
  "credit_note_date": "2016-05-03",
  "description": "Refund Subscription",
  "email_sent": true,
  "last_sent_at": "2016-08-17T16:01:37Z",
  "status": "confirmed",
  "payment_status": "to refund",
  "notes": "",
  "language": "fr",
  "currency": "EUR",
  "customer_name": "Zuuno SARL",
  "customer_address_line_1": "25 rue du Petit Musc",
  "customer_address_line_2": nil,
  "customer_address_city": "Paris",
  "customer_address_state": nil,
  "customer_address_zip": "75004",
  "customer_address_country": "France",
  "customer_country_code": "FR",
  "customer_tax_number": nil,
  "customer_business_type": "B2B",
  "supplier_name": "Octobat SAS",
  "supplier_address_line_1": "230 rue du Général Leclerc",
  "supplier_address_line_2": "",
  "supplier_address_city": "Ermont",
  "supplier_address_state": nil,
  "supplier_address_zip": "95120",
  "supplier_address_country": "France",
  "supplier_tax_number": "FR60528551658",
  "sources": [],
  "legal_fields": {},
  "items": {
    "object":"list",
    "data": [
      {
        "id": "oc_it_146133143279h39ba598f5",
        "object": "item",
        "status": "confirmed",
        "confirmed_on": "2015-05-03",
        "transaction": nil,
        "invoice": nil,
        "credit_note": "oc_cn_1462279788aw2y99365ac5",
        "tax_evidence": "oc_tev_1460565379am3be8f5ef71",
        "product_type": "eservice",
        "sale_mode": "B2C",
        "description": "Entreprise Plan",
        "unit_extratax_amount": 19900,
        "currency": "EUR",
        "quantity": 1,
        "extratax_amount": 19900,
        "tax_rate": 22.0,
        "tax_amount": 4378,
        "gross_amount": 24278,
        "declare_in_region": "FR",
        "tax": "VAT",
        "sources": [],
        "item_exchange": nil,
        "item_workspace_currency_exchange": nil
      },
      {...},
      {...}
    ]
  }
}
```

### Arguments
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>email_to</strong><br/><span class="details">optional</span></td>
      <td><p>Email receiver.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>email_title</strong><br/><span class="details">optional</span></td>
      <td><p>Email title.</p></td>
    </tr>
  </tbody>
</table>


### Returns
Returns the full credit note object if the sending succeeded. Returns an error if the credit note customer email is empty or if the credit note hasn't a confirmed status.




## Record a refund
You can record a refund linked to a credit note creating a transaction with the credit note ID. Go to <a href="http://v2apidoc.octobat.com/#create-a-transaction">Record a refund</a>.



## List all credit notes
```shell
# Definition
GET https://apiv2.octobat.com/credit_notes/

# Example request
$ curl https://apiv2.octobat.com/credit_notes \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d customer="oc_cu_1459413729au6o6a9ae061" \


# Example response
{
  "object": "list",
  "has_before": false,
  "has_more": false,
  "total_count": 3,
  "data": [
    {
      "id": "oc_cn_1462279788aw2y99365ac5",
      "object": "credit_note",
      "livemode": true,
      "customer": "oc_cu_1459413729au6o6a9ae061",
      "credit_note_numbering_sequence": "oc_cns_1462279395ko79c927206e",
      "document_template": "oc_dt_14611418085kha558d6ddf",
      "invoice": null,
      "pdf_file_url": null,
      "credit_note_number": "CN-AAA-2",
      "credit_note_date": "2016-05-03",
      "description": "Refund Subscription",
      "email_sent": false,
      "last_sent_at": null,
      "status": "confirmed",
      "payment_status": "to refund",
      "notes": "",
      "language": "fr",
      "currency": "EUR",
      "customer_name": "John doe",
      "customer_address_line_1": "25 rue du Petit Musc",
      "customer_address_line_2": null,
      "customer_address_city": "Paris",
      "customer_address_state": null,
      "customer_address_zip": "75004",
      "customer_address_country": "France",
      "customer_country_code": "FR",
      "customer_tax_number": null,
      "customer_business_type": "B2C",
      "supplier_name": "Octobat SAS",
      "supplier_address_line_1": "230 rue du Général Leclerc",
      "supplier_address_line_2": "",
      "supplier_address_city": "Ermont",
      "supplier_address_state": null,
      "supplier_address_zip": "95120",
      "supplier_address_country": "France",
      "supplier_tax_number": null,
      "legal_fields": {},
      "sources": [],
      "items": {
        "object":"list",
        "data": [
          {
            "id": "oc_it_146133143279h39ba598f5",
            "object": "item",
            "status": "confirmed",
            "confirmed_on": "2016-05-03",
            "transaction": null,
            "invoice": null,
            "credit_note": "oc_cn_1462279788aw2y99365ac5",
            "tax_evidence": "oc_tev_1460565379am3be8f5ef71",
            "product_type": "eservice",
            "sale_mode": "B2C",
            "description": "Entreprise Plan",
            "unit_extratax_amount": 19900,
            "currency": "EUR",
            "quantity": 1,
            "extratax_amount": 19900,
            "tax_rate": 22.0,
            "tax_amount": 4378,
            "gross_amount": 24278,
            "declare_in_region": "FR",
            "tax": "VAT",
            "sources": [],
            "item_exchange": null,
            "item_workspace_currency_exchange": null
          },
          {...},
          {...}
        ]
      }
    },
    {...},
    {...}
  ]
}
```


```ruby
# Definition
GET https://apiv2.octobat.com/credit_notes

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::CreditNote.all(
  customer: "oc_cu_1459413729au6o6a9ae061"
)

# Example response
#<Octobat::ListObject:0x3fe634d74498> JSON: {
  "object": "list",
  "has_before": false,
  "has_more": false,
  "total_count": 3,
  "data": [
    {
      "id": "oc_cn_1462279788aw2y99365ac5",
      "object": "credit_note",
      "livemode": true,
      "customer": "oc_cu_1459413729au6o6a9ae061",
      "credit_note_numbering_sequence": "oc_cns_1462279395ko79c927206e",
      "document_template": "oc_dt_14611418085kha558d6ddf",
      "invoice": nil,
      "pdf_file_url": nil,
      "credit_note_number": "CN-AAA-2",
      "credit_note_date": "2016-05-03",
      "description": "Refund Subscription",
      "email_sent": false,
      "last_sent_at": nil,
      "status": "confirmed",
      "payment_status": "to refund",
      "notes": "",
      "language": "fr",
      "currency": "EUR",
      "customer_name": "John doe",
      "customer_address_line_1": "25 rue du Petit Musc",
      "customer_address_line_2": nil,
      "customer_address_city": "Paris",
      "customer_address_state": nil,
      "customer_address_zip": "75004",
      "customer_address_country": "France",
      "customer_country_code": "FR",
      "customer_tax_number": nil,
      "customer_business_type": "B2C",
      "supplier_name": "Octobat SAS",
      "supplier_address_line_1": "230 rue du Général Leclerc",
      "supplier_address_line_2": "",
      "supplier_address_city": "Ermont",
      "supplier_address_state": nil,
      "supplier_address_zip": "95120",
      "supplier_address_country": "France",
      "supplier_tax_number": nil,
      "legal_fields": {},
      "sources": [],
      "items": {
        "object":"list",
        "data": [
          {
            "id": "oc_it_146133143279h39ba598f5",
            "object": "item",
            "status": "confirmed",
            "confirmed_on": "2016-05-03",
            "transaction": nil,
            "invoice": nil,
            "credit_note": "oc_cn_1462279788aw2y99365ac5",
            "tax_evidence": "oc_tev_1460565379am3be8f5ef71",
            "product_type": "eservice",
            "sale_mode": "B2C",
            "description": "Entreprise Plan",
            "unit_extratax_amount": 19900,
            "currency": "EUR",
            "quantity": 1,
            "extratax_amount": 19900,
            "tax_rate": 22.0,
            "tax_amount": 4378,
            "gross_amount": 24278,
            "declare_in_region": "FR",
            "tax": "VAT",
            "sources": [],
            "item_exchange": nil,
            "item_workspace_currency_exchange": nil
          },
          {...},
          {...}
        ]
      }
    },
    {...},
    {...}
  ]
}
```

Returns a list of credit notes.


### Arguments
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>customer</strong><br/><span class="details">optional</span></td>
      <td><p>The ID of an existing customer.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>invoice</strong><br/><span class="details">optional</span></td>
      <td><p>The ID of an existing invoice.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>starting_after</strong><br/><span class="details">optional</span></td>
      <td><p>Starting after an credit note id.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>ending_before</strong><br/><span class="details">optional</span></td>
      <td><p>Ending before an credit note id.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>credit_note_date[gte]</strong><br/><span class="details">optional</span></td>
      <td><p>Greater than or equal to a date.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>credit_note_date[lte]</strong><br/><span class="details">optional</span></td>
      <td><p>Lower than or equal to a date.</p></td>
    </tr>
  </tbody>
</table>

### Returns
A hash with a data property that contains an array of credit notes. Each entry in the array is a separate credit note object. If no credit notes are available, the resulting array will be empty. This request should never raise an error.
