# Invoices
## The invoice object

> Example object

```json
{
  "id": "oc_in_1461320056h2qq350fdc3a",
  "object": "invoice",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "payment_recipients": ["oc_pr_14603917916fhf5eb09a69"],
  "pdf_file_url": null,
  "invoice_number": "SP2016-200",
  "invoice_date": "2016-04-26",
  "description": "Subscription",
  "payment_status": "paid",
  "status": "confirmed",
  "email_sent": false,
  "last_sent_at": null,
  "notes": "",
  "language": "en",
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
  "cancel_and_replace_invoice": null,
  "sources": [],
  "items": {
    "object":"list",
    "data": [
      {
        "id": "oc_it_146133143279h39ba598f5",
        "object": "item",
        "status": "confirmed",
        "confirmed_on": "2016-04-26",
        "transaction": null,
        "transaction": null,
        "invoice": "oc_in_1461320056h2qq350fdc3a",
        "credit_note": null,
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
        "declare_in_region": "IT",
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
      <td class="attribute"><strong>object</strong><br/><span class="details">string, value is "<strong>invoice</strong>"</span></td>
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
      <td class="attribute"><strong>invoice_numbering_sequence</strong><br/><span class="details">string</span></td>
      <td><p>ID of the invoice numbering sequence.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>document_template</strong><br/><span class="details">string</span></td>
      <td><p>ID of the document template.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>payment_recipients</strong><br/><span class="details">array</span></td>
      <td><p>IDs of payment recipients.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>pdf_file_url</strong><br/><span class="details">string</span></td>
      <td><p>URL of the invoice PDF.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>invoice_number</strong><br/><span class="details">string</span></td>
      <td><p>Autocalculate number of the invoice.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>invoice_date</strong><br/><span class="details">string</span></td>
      <td><p>Date of the invoice.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>description</strong><br/><span class="details">string</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>payment_status</strong><br/><span class="details">string</span></td>
      <td><p>The payment status of the invoice is either <code>paid</code> or <code>unpaid</code>.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>status</strong><br/><span class="details">string</span></td>
      <td><p>The status of the invoice is either <code>draft</code>, <code>confirmed</code> or <code>cancelled</code>.</p></td>
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
      <td><p>Invoice's language.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>currency</strong><br/><span class="details">string</span></td>
      <td><p>Invoice's currency.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>legal_fields</strong><br/><span class="details">json</span></td>
      <td><p>Fields depending on the supplier country.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>cancel_and_replace_invoice</strong><br/><span class="details">string</span></td>
      <td><p>ID of the invoice cancelled and replaced by this invoice.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>sources</strong><br/><span class="details">array</span></td>
      <td><p>References to the integration's objects this invoice has been created from.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>items</strong><br/><span class="details">list</span></td>
      <td><p>Invoice items.</p></td>
    </tr>
  </tbody>
</table>

## Create an invoice

```shell
# Definition
POST https://apiv2.octobat.com/invoices

# Example request
$ curl https://apiv2.octobat.com/invoices \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d customer="oc_cu_1459413729au6o6a9ae061" \
   -d payment_recipients[]="oc_pr_1461595230igdu5ce59471" \
   -d payment_recipients[]="oc_pr_14603917916fhf5eb09a69" \
   -d description='Subscription' \
   -d currency='EUR' \
   -d notes='' \


# Example response
{
  "id": "oc_in_1461320056h2qq350fdc3a",
  "object": "invoice",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "payment_recipients": ["oc_pr_14603917916fhf5eb09a69", "oc_pr_1461595230igdu5ce59471"],
  "pdf_file_url": null,
  "invoice_number": "SP2016-200",
  "invoice_date": "2016-04-26",
  "description": "Subscription",
  "payment_status": "unpaid",
  "status": "draft",
  "email_sent": false,
  "last_sent_at": null,
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
  "cancel_and_replace_invoice": null
  "sources": [],
  "items": {"object"=>"list", "data"=>[]}
}
```


```ruby
# Definition
POST https://apiv2.octobat.com/invoices

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::Invoice.create(
  customer: "oc_cu_1459413729au6o6a9ae061",
  payment_recipients: ['oc_pr_14603917916fhf5eb09a69', 'oc_pr_1461595230igdu5ce59471'],
  description: 'Subscription',
  currency: 'EUR',
  notes: ''
)

# Example response
#<Octobat::Invoice id=oc_in_1461320056h2qq350fdc3a 0x00000a> JSON: {
  "id": "oc_in_1461320056h2qq350fdc3a",
  "object": "invoice",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "payment_recipients": ["oc_pr_14603917916fhf5eb09a69", "oc_pr_1461595230igdu5ce59471"],
  "pdf_file_url": nil,
  "invoice_number": "SP2016-200",
  "invoice_date": "2016-04-26",
  "description": "Subscription",
  "payment_status": "unpaid",
  "status": "draft",
  "email_sent": false,
  "last_sent_at": nil,
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
  "cancel_and_replace_invoice": nil,
  "sources": [],
  "items": {"object"=>"list", "data"=>[]}
}
```

To create an invoice for a customer, you must first create it as a draft. Then, you must add items upon it, add payments, and declare if it still has to be paid or if the payment has already been performed.


### Arguments
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>customer</strong><br/><span class="badge-warning">required</span></td>
      <td><p>The ID of an existing customer.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>payment_recipients</strong><br/><span class="badge-warning">required</span></td>
      <td><p>The IDs of existing payment recipients.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>currency</strong><br/><span class="badge-warning">required</span></td>
      <td><p>Three-letter ISO code representing the currency of the transaction.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>invoice_numbering_sequence</strong><br/><span class="details">optional</span></td>
      <td><p>Numbering sequence ID. Fallbacks to default numbering sequence if not filled.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>description</strong><br/><span class="details">optional</span></td>
      <td><p>Invoice's description.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>notes</strong><br/><span class="details">optional</span></td>
      <td><p>What you want display at the end of the invoice.</p></td>
    </tr>
  </tbody>
</table>

### Returns
Returns the full invoice object if the creation succeeded. Returns an error if parameters are invalid




## Update a draft invoice
```shell
# Definition
PATCH https://apiv2.octobat.com/invoices/{INVOICE_ID}

# Example request
$ curl https://apiv2.octobat.com/invoices/oc_in_1461320056h2qq350fdc3a \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d customer_name="Zuuno SARL" \
   -d customer_business_type="B2B" \
   -d customer_tax_number="FR60528551658" \


# Example response
{
  "id": "oc_in_1461320056h2qq350fdc3a",
  "object": "invoice",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "payment_recipients": ["oc_pr_14603917916fhf5eb09a69", "oc_pr_1461595230igdu5ce59471"],
  "pdf_file_url": null,
  "invoice_number": "SP2016-200",
  "invoice_date": "2016-04-26",
  "description": "Subscription",
  "payment_status": "unpaid",
  "status": "draft",
  "email_sent": false,
  "last_sent_at": null,
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
  "cancel_and_replace_invoice": null,
  "sources": [],
  "items": {"object"=>"list", "data"=>[]}
}
```


```ruby
# Definition
invoice = Octobat::Invoice.retrieve({INVOICE_ID})
invoice.customer_name = {NEW_CUSTOMER_NAME}
invoice.customer_business_type = {NEW_CUSTOMER_BUSINESS_TYPE}
invoice.customer_tax_number = {NEW_CUSTOMER_TAX_NUMBER}
invoice.save

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

invoice = Octobat::Invoice.retrieve("oc_in_1461320056h2qq350fdc3a")
invoice.customer_name = "Zuuno SARL"
invoice.customer_business_type = "B2B"
invoice.customer_tax_number = "FR60528551658"
invoice.save


# Example response
#<Octobat::Invoice id=oc_in_1461320056h2qq350fdc3a 0x00000a> JSON: {{
  "id": "oc_in_1461320056h2qq350fdc3a",
  "object": "invoice",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "payment_recipients": ["oc_pr_14603917916fhf5eb09a69", "oc_pr_1461595230igdu5ce59471"],
  "pdf_file_url": nil,
  "invoice_number": "SP2016-200",
  "invoice_date": "2016-04-26",
  "description": "Subscription",
  "payment_status": "unpaid",
  "status": "draft",
  "email_sent": false,
  "last_sent_at": nil,
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
  "customer_tax_number": "FR60528551658",
  "customer_business_type": "B2B",
  "supplier_name": "Octobat SAS",
  "supplier_address_line_1": "230 rue du Général Leclerc",
  "supplier_address_line_2": "",
  "supplier_address_city": "Ermont",
  "supplier_address_state": nil,
  "supplier_address_zip": "95120",
  "supplier_address_country": "France",
  "supplier_tax_number": nil,
  "legal_fields": {},
  "cancel_and_replace_invoice": nil,
  "sources": [],
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
Returns the full invoice object if the update succeeded. Returns an error if the invoice has already been sent by email and is no longer updatable, or if the update fails





## Send by email
```shell
# Definition
POST https://apiv2.octobat.com/invoices/{INVOICE_ID}/send

# Example request


# Example response

```


```ruby
# Definition
invoice = Octobat::Invoice.retrieve("oc_in_14234251141rdhb20d40fe")
invoice.send()

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
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "payment_recipients": ["oc_pr_14603917916fhf5eb09a69", "oc_pr_1461595230igdu5ce59471"],
  "pdf_file_url": "https://www.octobat.com/invoices/oc_in_14234251141rdhb20d40fe.pdf",
  "invoice_number": "SP2016-200",
  "invoice_date": "2016-04-26",
  "description": "Subscription",
  "payment_status": "unpaid",
  "status": "confirmed",
  "email_sent": true,
  "last_sent_at": "2016-08-17T16:01:37Z",
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
  "customer_tax_number": "FR60528551658",
  "customer_business_type": "B2B",
  "supplier_name": "Octobat SAS",
  "supplier_address_line_1": "230 rue du Général Leclerc",
  "supplier_address_line_2": "",
  "supplier_address_city": "Ermont",
  "supplier_address_state": nil,
  "supplier_address_zip": "95120",
  "supplier_address_country": "France",
  "supplier_tax_number": nil,
  "legal_fields": {},
  "cancel_and_replace_invoice": nil,
  "sources": [],
  "items": {
    "object":"list",
    "data": [
      {
        "id": "oc_it_146133143279h39ba598f5",
        "object": "item",
        "status": "confirmed",
        "confirmed_on": "2016-08-12",
        "transaction": nil,
        "invoice": "oc_in_1461320056h2qq350fdc3a",
        "credit_note": nil,
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
Returns the full invoice object if the sending succeeded. Returns an error if the invoice customer email is empty or if the invoice hasn't a confirmed status.





## Confirm a draft invoice
```shell
# Definition
PATCH https://apiv2.octobat.com/invoices/{INVOICE_ID}/confirm

# Example request
curl https://www.octobat.com/invoices/oc_in_1461320056h2qq350fdc3a/confirm \
 -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
 -X PATCH

# Example response
{
  "id": "oc_in_1461320056h2qq350fdc3a",
  "object": "invoice",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "payment_recipients": ["oc_pr_14603917916fhf5eb09a69", "oc_pr_1461595230igdu5ce59471"],
  "pdf_file_url": null,
  "invoice_number": "SP2016-200",
  "invoice_date": "2016-04-26",
  "description": "Subscription",
  "payment_status": "unpaid",
  "status": "confirmed",
  "email_sent": false,
  "last_sent_at": null,
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
  "cancel_and_replace_invoice": null,
  "sources": [],
  "items": {
    "object":"list",
    "data": [
      {
        "id": "oc_it_146133143279h39ba598f5",
        "object": "item",
        "status": "confirmed",
        "confirmed_on": "2016-04-26",
        "transaction": null,
        "invoice": "oc_in_1461320056h2qq350fdc3a",
        "credit_note": null,
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
invoice = Octobat::Invoice.retrieve({INVOICE_ID})
invoice.confirm

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

invoice = Octobat::Invoice.retrieve("oc_in_1461320056h2qq350fdc3a")
invoice.confirm()

# Example response
#<Octobat::Invoice id=oc_in_1461320056h2qq350fdc3a 0x00000a> JSON: {{
  "id": "oc_in_1461320056h2qq350fdc3a",
  "object": "invoice",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "payment_recipients": ["oc_pr_14603917916fhf5eb09a69", "oc_pr_1461595230igdu5ce59471"],
  "pdf_file_url": nil,
  "invoice_number": "SP2016-200",
  "invoice_date": "2016-04-26",
  "description": "Subscription",
  "payment_status": "unpaid",
  "status": "confirmed",
  "email_sent": false,
  "last_sent_at": nil,
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
  "customer_tax_number": "FR60528551658",
  "customer_business_type": "B2B",
  "supplier_name": "Octobat SAS",
  "supplier_address_line_1": "230 rue du Général Leclerc",
  "supplier_address_line_2": "",
  "supplier_address_city": "Ermont",
  "supplier_address_state": nil,
  "supplier_address_zip": "95120",
  "supplier_address_country": "France",
  "supplier_tax_number": nil,
  "legal_fields": {},
  "cancel_and_replace_invoice": nil,
  "sources": [],
  "items": {
    "object":"list",
    "data": [
      {
        "id": "oc_it_146133143279h39ba598f5",
        "object": "item",
        "status": "confirmed",
        "confirmed_on": "2016-04-26",
        "transaction": nil,
        "invoice": "oc_in_1461320056h2qq350fdc3a",
        "credit_note": nil,
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

### Returns
After creating a draft invoice and adding invoice items, you have to confirm it before sending it to the customer. At least one item must have attached to the invoice.
Returns the full invoice object if the update succeeded. Returns an error if update parameters are invalid.




## Cancel a confirmed invoice
```shell
# Definition
PATCH https://apiv2.octobat.com/invoices/{INVOICE_ID}/cancel

# Example request
curl https://www.octobat.com/invoices/oc_in_1461320056h2qq350fdc3a/cancel \
 -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
 -X PATCH

# Example response
{
  "id": "oc_in_1461320056h2qq350fdc3a",
  "object": "invoice",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "payment_recipients": ["oc_pr_14603917916fhf5eb09a69", "oc_pr_1461595230igdu5ce59471"],
  "pdf_file_url": null,
  "invoice_number": "SP2016-200",
  "invoice_date": "2016-04-26",
  "description": "Subscription",
  "payment_status": "unpaid",
  "status": "cancelled",
  "email_sent": false,
  "last_sent_at": null,
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
  "cancel_and_replace_invoice": null,
  "sources": [],
  "items": {
    "object":"list",
    "data": [
      {
        "id": "oc_it_146133143279h39ba598f5",
        "object": "item",
        "status": "cancelled",
        "confirmed_on": "2016-04-26",
        "transaction": null,
        "invoice": "oc_in_1461320056h2qq350fdc3a",
        "credit_note": null,
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
invoice = Octobat::Invoice.retrieve({INVOICE_ID})
invoice.cancel

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

invoice = Octobat::Invoice.retrieve("oc_in_1461320056h2qq350fdc3a")
invoice.cancel()

# Example response
#<Octobat::Invoice id=oc_in_1461320056h2qq350fdc3a 0x00000a> JSON: {{
  "id": "oc_in_1461320056h2qq350fdc3a",
  "object": "invoice",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "payment_recipients": ["oc_pr_14603917916fhf5eb09a69", "oc_pr_1461595230igdu5ce59471"],
  "pdf_file_url": nil,
  "invoice_number": "SP2016-200",
  "invoice_date": "2016-04-26",
  "description": "Subscription",
  "payment_status": "unpaid",
  "status": "cancelled",
  "email_sent": false,
  "last_sent_at": nil,
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
  "customer_tax_number": "FR60528551658",
  "customer_business_type": "B2B",
  "supplier_name": "Octobat SAS",
  "supplier_address_line_1": "230 rue du Général Leclerc",
  "supplier_address_line_2": "",
  "supplier_address_city": "Ermont",
  "supplier_address_state": nil,
  "supplier_address_zip": "95120",
  "supplier_address_country": "France",
  "supplier_tax_number": nil,
  "legal_fields": {},
  "cancel_and_replace_invoice": nil,
  "sources": [],
  "items": {
    "object":"list",
    "data": [
      {
        "id": "oc_it_146133143279h39ba598f5",
        "object": "item",
        "status": "cancelled",
        "confirmed_on": "2016-04-26",
        "transaction": nil,
        "invoice": "oc_in_1461320056h2qq350fdc3a",
        "credit_note": nil,
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

Change the invoice status to 'cancelled' and create a credit note with invoice items duplicated.

### Returns
Returns the full invoice object if the update succeeded. Returns an error if update parameters are invalid.






## Cancel and replace a confirmed invoice
```shell
# Definition
PATCH https://apiv2.octobat.com/invoices/{INVOICE_ID}/cancel_and_replace

# Example request
curl https://www.octobat.com/invoices/oc_in_1476088610jx98e4b8b8d3/cancel_and_replace \
 -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
 -X PATCH

# Example response
{
  "id": "oc_in_1461320056h2qq350fdc3a",
  "object": "invoice",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "payment_recipients": ["oc_pr_14603917916fhf5eb09a69", "oc_pr_1461595230igdu5ce59471"],
  "pdf_file_url": null,
  "invoice_number": "SP2016-200",
  "invoice_date": "2016-04-26",
  "description": "Subscription",
  "payment_status": "unpaid",
  "status": "draft",
  "email_sent": false,
  "last_sent_at": null,
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
  "cancel_and_replace_invoice": "oc_in_1476088610jx98e4b8b8d3",
  "sources": [],
  "items": {
    "object":"list",
    "data": [
      {
        "id": "oc_it_146133143279h39ba598f5",
        "object": "item",
        "status": "draft",
        "confirmed_on": null,
        "customer": "oc_cu_1459413729au6o6a9ae061",
        "transaction": null,
        "invoice": "oc_in_1461320056h2qq350fdc3a",
        "credit_note": null,
        "product_type": "standard",
        "tax_evidence": "oc_tev_1460565379am3be8f5ef71",
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
invoice = Octobat::Invoice.retrieve({INVOICE_ID})
invoice.cancel_and_replace

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

invoice = Octobat::Invoice.retrieve("oc_in_1476088610jx98e4b8b8d3")
invoice.cancel_and_replace()

# Example response
#<Octobat::Invoice id=oc_in_1461320056h2qq350fdc3a 0x00000a> JSON: {{
  "id": "oc_in_1461320056h2qq350fdc3a",
  "object": "invoice",
  "livemode": true,
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
  "document_template": "oc_dt_14611418085kha558d6ddf",
  "payment_recipients": ["oc_pr_14603917916fhf5eb09a69", "oc_pr_1461595230igdu5ce59471"],
  "pdf_file_url": nil,
  "invoice_number": "SP2016-200",
  "invoice_date": "2016-04-26",
  "description": "Subscription",
  "payment_status": "unpaid",
  "status": "draft",
  "email_sent": false,
  "last_sent_at": nil,
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
  "customer_tax_number": "FR60528551658",
  "customer_business_type": "B2B",
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
  "cancel_and_replace_invoice": "oc_in_1476088610jx98e4b8b8d3",
  "items": {
    "object":"list",
    "object":"list",
    "data": [
      {
        "id": "oc_it_146133143279h39ba598f5",
        "object": "item",
        "status": "draft",
        "confirmed_on": nil,
        "customer": "oc_cu_1459413729au6o6a9ae061",
        "transaction": nil,
        "invoice": "oc_in_1461320056h2qq350fdc3a",
        "credit_note": nil,
        "product_type": "standard",
        "tax_evidence": "oc_tev_1460565379am3be8f5ef71",
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

Change the invoice status to 'cancelled', create a credit note with invoice items duplicated and create a new invoice with a 'draft' status and the same attributes than the 'cancelled' invoice.

### Returns
Returns the full 'draft' new invoice object if the cancel and replace succeeded. Returns an error if the cancel and replace action is not possible.





## Delete a draft invoice
```shell
# Definition
PATCH https://apiv2.octobat.com/invoices/{INVOICE_ID}

# Example request
curl https://www.octobat.com/invoices/oc_in_1461320056h2qq350fdc3a \
 -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
 -X DELETE

# Example response
{
  "deleted": true,
  "id": "oc_in_1461320056h2qq350fdc3a"
}
```


```ruby
# Definition
invoice = Octobat::Invoice.retrieve({INVOICE_ID})
invoice.delete

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

invoice = Octobat::Invoice.retrieve("oc_in_1461320056h2qq350fdc3a")
invoice.delete

# Example response
#<Octobat::Invoice id=oc_in_1461320056h2qq350fdc3a 0x00000a> JSON: {{
  "deleted": true,
  "id": "oc_in_1461320056h2qq350fdc3a"
}
```

You can only delete an invoice with a 'draft' status.

### Returns

Returns an object with a deleted parameter on success. If the invoice ID does not exist, this call raises an error.







## Record a payment
You can record a payment linked to an invoice creating a transaction with the invoice ID. Go to <a href="http://v2apidoc.octobat.com/#create-a-transaction">Record a payment</a>.



## List all invoices
```shell
# Definition
GET https://apiv2.octobat.com/invoices/

# Example request
$ curl https://apiv2.octobat.com/invoices \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d customer="oc_cu_1459413729au6o6a9ae061" \
   -d status="draft" \
   -d starting_after='oc_in_14611572304z2g1db98a0b' \


# Example response
{
  "object": "list",
  "has_before": true,
  "has_more": false,
  "total_count": 3,
  "data": [
    {
      "id": "oc_in_1461320056h2qq350fdc3a",
      "object": "invoice",
      "livemode": true,
      "customer": "oc_cu_1459413729au6o6a9ae061",
      "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
      "document_template": "oc_dt_14611418085kha558d6ddf",
      "payment_recipients": ["oc_pr_14603917916fhf5eb09a69", "oc_pr_1461595230igdu5ce59471"],
      "pdf_file_url": null,
      "invoice_number": "SP2016-200",
      "invoice_date": "2016-04-26",
      "description": "Subscription",
      "payment_status": "unpaid",
      "status": "draft",
      "email_sent": false,
      "last_sent_at": null,
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
      "cancel_and_replace_invoice": null,
      "items": {
        "object":"list",
        "data": [
          {
            "id": "oc_it_146133143279h39ba598f5",
            "object": "item",
            "status": "draft",
            "confirmed_on": null,
            "transaction": null,
            "invoice": "oc_in_1461320056h2qq350fdc3a",
            "credit_note": null,
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
GET https://apiv2.octobat.com/invoices

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::Invoice.all(
  customer: "oc_cu_1459413729au6o6a9ae061",
  status: "draft",
  starting_after: 'oc_in_14611572304z2g1db98a0b'
)

# Example response
#<Octobat::ListObject:0x3fe634d74498> JSON: {
  "object": "list",
  "has_before": true,
  "has_more": false,
  "total_count": 3,
  "data": [
    {
      "id": "oc_in_1461320056h2qq350fdc3a",
      "object": "invoice",
      "livemode": true,
      "customer": "oc_cu_1459413729au6o6a9ae061",
      "invoice_numbering_sequence": "oc_ns_146192091741t5175c8c47",
      "document_template": "oc_dt_14611418085kha558d6ddf",
      "payment_recipients": ["oc_pr_14603917916fhf5eb09a69", "oc_pr_1461595230igdu5ce59471"],
      "pdf_file_url": nil,
      "invoice_number": "SP2016-200",
      "invoice_date": "2016-04-26",
      "description": "Subscription",
      "payment_status": "unpaid",
      "status": "draft",
      "email_sent": false,
      "last_sent_at": nil,
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
      "cancel_and_replace_invoice": nil,
      "sources": [],
      "items": {
        "object":"list",
        "data": [
          {
            "id": "oc_it_146133143279h39ba598f5",
            "object": "item",
            "status": "draft",
            "confirmed_on": nil,
            "transaction": nil,
            "invoice": "oc_in_1461320056h2qq350fdc3a",
            "credit_note": nil,
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

Returns a list of invoices.


### Arguments
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>customer</strong><br/><span class="details">optional</span></td>
      <td><p>The ID of an existing customer.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>status</strong><br/><span class="details">optional</span></td>
      <td><p>The status of the invoice is either <code>draft</code> or <code>confirmed</code>.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>starting_after</strong><br/><span class="details">optional</span></td>
      <td><p>Starting after an invoice id.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>ending_before</strong><br/><span class="details">optional</span></td>
      <td><p>Ending before an invoice id.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>invoice_date[gte]</strong><br/><span class="details">optional</span></td>
      <td><p>Greater than or equal to a date.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>invoice_date[lte]</strong><br/><span class="details">optional</span></td>
      <td><p>Lower than or equal to a date.</p></td>
    </tr>
  </tbody>
</table>

### Returns
A hash with a data property that contains an array of invoices. Each entry in the array is a separate invoice object. If no invoices are available, the resulting array will be empty. This request should never raise an error.
