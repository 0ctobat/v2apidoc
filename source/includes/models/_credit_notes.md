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
  "items": {
    "object":"list",
    "data": [
      {
        "id": "oc_it_146133143279h39ba598f5",
        "object": "item",
        "transaction": null,
        "document": "oc_cn_1462279788aw2y99365ac5",
        "tax_evidence": "oc_tev_1460565379am3be8f5ef71",
        "description": "Refund Entreprise Plan",
        "unit_extratax_amount": 19900,
        "currency": "EUR",
        "quantity": 1,
        "extratax_amount": 19900,
        "tax_rate": 22.0,
        "tax_amount": 4378,
        "gross_amount": 24278
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
      <td class="attribute"><strong>email_sent</strong><br/><span class="details">boolean</span></td>
      <td><p>If email is sent to the customer or not.</p></td>
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
      <td class="attribute"><strong>items</strong><br/><span class="details">list</span></td>
      <td><p>Credit note items.</p></td>
    </tr>
  </tbody>
</table>

## Create a credit note

```shell
# Definition
POST https://www.octobat.com/api/credit_notes

# Example request
$ curl https://api.octobat.com/credit_notes \
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
  "items": {"object"=>"list", "data"=>[]}
}
```


```ruby
# Definition
POST https://www.octobat.com/api/credit_notes

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
  "invoice": null,
  "pdf_file_url": null,
  "credit_note_number": "CN-AAA-2",
  "credit_note_date": "2016-05-03",
  "description": "Refund Subscription",
  "email_sent": false,
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
  "items": {"object"=>"list", "data"=>[]}
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
PATCH https://www.octobat.com/api/credit_notes/{CREDIT_NOTE_ID}

# Example request
$ curl https://api.octobat.com/credit_notes/oc_cn_1462279788aw2y99365ac5 \
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
  "customer_tax_number": "FR60528551658",
  "customer_business_type": "B2B",
  "supplier_name": "Octobat SAS",
  "supplier_address_line_1": "230 rue du Général Leclerc",
  "supplier_address_line_2": "",
  "supplier_address_city": "Ermont",
  "supplier_address_state": null,
  "supplier_address_zip": "95120",
  "supplier_address_country": "France",
  "supplier_tax_number": null,
  "legal_fields": {},
  "items": {"object"=>"list", "data"=>[]}
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
#<Octobat::CreditNote id=oc_cn_1462279788aw2y99365ac5 0x00000a> JSON: {{
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
  "customer_tax_number": "FR60528551658",
  "customer_business_type": "B2B",
  "supplier_name": "Octobat SAS",
  "supplier_address_line_1": "230 rue du Général Leclerc",
  "supplier_address_line_2": "",
  "supplier_address_city": "Ermont",
  "supplier_address_state": null,
  "supplier_address_zip": "95120",
  "supplier_address_country": "France",
  "supplier_tax_number": null,
  "legal_fields": {},
  "items": {"object"=>"list", "data"=>[]}
}
```

### Arguments
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>customer_name</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr class="first-row">
      <td class="attribute"><strong>customer_address_line_1</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr class="first-row">
      <td class="attribute"><strong>customer_address_line_2</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr class="first-row">
      <td class="attribute"><strong>customer_address_city</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr class="first-row">
      <td class="attribute"><strong>customer_address_state</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr class="first-row">
      <td class="attribute"><strong>customer_address_zip</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr class="first-row">
      <td class="attribute"><strong>customer_address_country</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr class="first-row">
      <td class="attribute"><strong>customer_tax_number</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
    <tr class="first-row">
      <td class="attribute"><strong>customer_business_type</strong><br/><span class="details">optional</span></td>
      <td><p>-</p></td>
    </tr>
  </tbody>
</table>

### Returns
Returns the full credit note object if the update succeeded. Returns an error if the credit note has already been sent by email and is no longer updatable, or if the update fails.





## Send by email
```shell
# Definition
POST https://www.octobat.com/api/invoices/{INVOICE_ID}/send?enforce_errors={TRUE/FALSE}

# Example request


# Example response

```


```ruby
# Definition
invoice = Octobat::Invoice.retrieve("oc_in_14234251141rdhb20d40fe")
enforce_errors = true # default = false
invoice.send(enforce_errors)

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

invoice = Octobat::Invoice.retrieve("oc_in_14234251141rdhb20d40fe")
invoice.send

# Example response
#<Octobat::Invoice id=oc_in_14234251141rdhb20d40fe 0x00000a> JSON: {{
  "id": "oc_in_14234251141rdhb20d40fe",
  "object": "invoice",
  "livemode": true,
  "state": "paid",
  "numbering_sequence_id": "oc_ns_14213467384iwj86515b55",
  "invoice_number": "OC-2015-100",
  "invoice_date": "2015-02-08",
  "currency": "eur",
  "pdf_file_url": null,
  "extratax_amount_cents": 6651,
  "tax_amount_cents": 1149,
  "tax_included_amount_cents": 7800,
  "customer": {
    "id": "oc_cu_1421878635hksc26e4de79",
    "object": "customer",
    "name": "My customer",
    "email": "contact@octobat.com",
    "phone_number": "+33 9 52 54 03 70",
    "billing_address_line1": null,
    "billing_address_line2": null,
    "billing_address_city": "Paris",
    "billing_address_zip": "75004",
    "billing_address_state": null,
    "billing_address_country": "France",
    "business_type": "B2C",
    "tax_number": null,
    "octobat_billing_page": "https://b.octobat.com/c/1421878635hksc26e4de79",
    "created_at": "2015-07-12T11:22:29Z",
    "updated_at": "2015-07-12T11:22:29Z"
  },
  "customer_id": "oc_cu_1421878635hksc26e4de79",
  "customer_name": "My Customer",
  "customer_address_line1": null,
  "customer_address_line2": null,
  "customer_address_city": "Paris",
  "customer_address_state": null,
  "customer_address_zip": "75004",
  "customer_address_country": "France",
  "customer_vat_number": null,
  "supplier_name": "Octobat",
  "supplier_legal_form": "Inc",
  "supplier_siret": "",
  "supplier_address": "25 rue du Petit Musc",
  "supplier_zip_code": "75004",
  "supplier_city": "Paris",
  "supplier_country": "France",
  "supplier_vat_number": "FR60528551658",
  "supplier_capital_stock": "1000",
  "business_type": "B2C",
  "compliance": {
    "errors": {
      "count": 0,
      "fields":[]
    },
    "warnings": {
      "count": 1,
      "fields": [
        "customer_address"
      ]
    }
  },
  "invoice_items": {
    "object":"list",
    "has_more": false,
    "total_count": 3,
    "data": [
      #<Octobat::InvoiceItem id=oc_ii_14234251155z6y1bdf99f9 0x00000a> JSON: {
        "id":"oc_ii_14234251155z6y1bdf99f9",
        "object":"invoice_item",
        "invoice_id":"oc_in_14234251141rdhb20d40fe",
        "description":"Monthly subscription",
        "extratax_cents":833,
        "quantity":1,
        "tax_rate":20.0,
        "tax_included_cents":1000,
        "eservice":true,
        "created_at": "2015-07-12T11:22:29Z",
        "updated_at": "2015-07-12T11:22:29Z"
      },
      #<Octobat::InvoiceItem id=oc_ii_14234251155z6y590f99f9 0x00000a> JSON: {
        "id":"oc_ii_14234251155z6y590f99f9",
        "object":"invoice_item",
        "invoice_id":"oc_in_14234251141rdhb20d40fe",
        "description":"2 hours extratim",
        "extratax_cents":1818,
        "quantity":1,
        "tax_rate":10.0,
        "tax_included_cents":2000,
        "eservice":true,
        "created_at": "2015-07-12T11:22:29Z",
        "updated_at": "2015-07-12T11:22:29Z"
      },
       #<Octobat::InvoiceItem id=oc_ii_14234271095z6y590f59fb 0x00000a> JSON: {
        "id":"oc_ii_14234271095z6y590f59fb",
        "object":"invoice_item",
        "invoice_id":"oc_in_14234251141rdhb20d40fe",
        "description":"Monthly subscription",
        "extratax_cents":4000,
        "quantity":1,
        "tax_rate":20.0,
        "tax_included_cents":4800,
        "eservice":false,
        "created_at": "2015-07-12T11:22:29Z",
        "updated_at": "2015-07-12T11:22:29Z"
      }
    ]
  },
  "payable_by": [
    {
      "id": "oc_pm_14235210139j06befa616a",
      "object": "payment_mode",
      "name": "Bank name",
      "payment_mode_type": "transfer",
      "details": {
        "iban": "FR90 17216 18009 17038133245 88"
      }
    }
  ],
  "payment": {
    "id": "oc_pa_14234412027lw37c15a717",
    "object": "payment",
    "invoice": "oc_in_14219457353oiq78b051b1",
    "payment_date": "2015-01-05",
    "customer_bank_country": "United Kingdom",
    "payment_mode": {
      "id": "oc_pm_14235210139j06befa616a",
      "object": "payment_mode",
      "name": "Bank name",
      "payment_mode_type": "transfer",
      "details": {
        "iban": "FR90 17216 18009 17038133245 88"
      }
    },
    "created_at": "2015-07-12T11:22:29Z",
    "updated_at": "2015-07-12T11:22:29Z"
  },
  "sources": [
     {
       "gateway":"stripe",
       "identifier":"ch_16xjM32Pmv0nOG11rJ9U1hXj"
     }
  ],
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

### Arguments
Attribute | Description
--------- | ------- | -----------
**enforce_errors:** | **boolean optional** Default: false. Bypass compliance errors. If true, it will result in the email to be sent even if the invoice has compliance errors. If false - by default - it will return a 422 error.

### Returns
Returns the full invoice object if the update succeeded. Returns an error if the invoice customer email is empty or if the invoice has compliance errors




## Add a refund
```shell
# Definition
POST https://www.octobat.com/api/credit_notes/{CREDIT_NOTE_ID}/refunds

# Example request
curl https://www.octobat.com/credit_notes/oc_cn_1462279419bewr052de7eb/refunds \
 -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
 -d payment_source="oc_ps_14603913028h342393e1d0" \
 -d payment_recipient="oc_pr_14603917916fhf5eb09a69" \
 -d gross_amount="1000" \


# Example response
{
  "id": "oc_txn_1461747941aj6we5567096",
  "object": "transaction",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "payment_source": "oc_ps_14603913028h342393e1d0",
  "payment_recipient": "oc_pr_14603917916fhf5eb09a69",
  "document": "oc_cn_1462279419bewr052de7eb",
  "gross_amount": 1000,
  "currency": "EUR",
  "livemode": true,
  "status": "succeeded",
  "transaction_date": "2016-04-27T09:05:39.000Z",
  "flow_type": "refund"
}
```


```ruby
# Definition
credit_note = Octobat::CreditNote.retrieve({CREDIT_NOTE_ID})
credit_note.refunds(
  payment_source: {PAYMENT_SOURCE_ID},
  payment_recipient: {PAYMENT_RECIPIENT_ID},
  gross_amount: {GROSS_AMOUNT}
)

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

credit_note = Octobat::CreditNote.retrieve("oc_cn_1462279419bewr052de7eb")
credit_note.refunds(
  payment_source: "oc_ps_14603913028h342393e1d0",
  payment_recipient: "oc_pr_14603917916fhf5eb09a69",
  gross_amount: 1000
)

# Example response
#<Octobat::CreditNote id=oc_txn_1461747941aj6we5567096 0x00000a> JSON: {{
  "id": "oc_txn_1461747941aj6we5567096",
  "object": "transaction",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "payment_source": "oc_ps_14603913028h342393e1d0",
  "payment_recipient": "oc_pr_14603917916fhf5eb09a69",
  "document": "oc_cn_1462279419bewr052de7eb",
  "gross_amount": 1000,
  "currency": "EUR",
  "livemode": true,
  "status": "succeeded",
  "transaction_date": "2016-04-27T09:05:39.000Z",
  "flow_type": "refund"
}
```

### Arguments
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>payment_source</strong><br/><span class="badge-warning">required</span></td>
      <td><p>ID of the payment source.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>payment_recipient</strong><br/><span class="badge-warning">required</span></td>
      <td><p>ID of the payment recipient.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>gross_amount</strong><br/><span class="details">optional, default is <strong>rest to be refunded</strong></span></td>
      <td><p>The amount that the customer has been refunded.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>transaction_date</strong><br/><span class="details">optional, default is <strong>current datetime</strong></span></td>
      <td><p>Date on which the transaction was created.</p></td>
    </tr>
  </tbody>
</table>

### Returns
Returns the full transaction object if the adding succeeded. Returns an error if parameters are invalid.




## List all credit notes
```shell
# Definition
GET https://api.octobat.com/credit_notes/

# Example request
$ curl https://api.octobat.com/credit_notes \
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
      "items": {"object"=>"list", "data"=>[]}
    },
    {...},
    {...}
  ]
}
```


```ruby
# Definition
GET https://www.octobat.com/api/credit_notes

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
      "invoice": null,
      "pdf_file_url": null,
      "credit_note_number": "CN-AAA-2",
      "credit_note_date": "2016-05-03",
      "description": "Refund Subscription",
      "email_sent": false,
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
      "items": {"object"=>"list", "data"=>[]}
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
  </tbody>
</table>

### Returns
A hash with a data property that contains an array of credit notes. Each entry in the array is a separate credit note object. If no credit notes are available, the resulting array will be empty. This request should never raise an error.
