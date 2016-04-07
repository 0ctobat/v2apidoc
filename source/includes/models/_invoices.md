# Invoices
## The invoice object

> Example object

```json
{
  "id": "oc_in_14234251141rdhb20d40fe",
  "object": "invoice",
  "livemode": true,
  "state": "paid",
  "numbering_sequence_id": "oc_ns_14213467384iwj86515b55",
  "invoice_number": "SP2015-200",
  "invoice_date": "2015-02-08",
  "currency": "eur",
  "pdf_file_url": null,
  "extratax_amount_cents": 15610,
  "tax_amount_cents": 3590,
  "tax_included_amount_cents": 19200,
  "customer": {
   "id": "oc_cu_1421878635hksc26e4de79",
   "object": "customer",
   "name": "My Customer",
   "email": "admin@octobat.com",
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
  "customer_address_zip": "",
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
      "count": 1,
      "fields":[
        "customer_address_zip"
      ]
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
      {
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
      {...},
      {...}
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
    "id":"oc_pa_14234412027lw37c15a717",
    "object":"payment",
    "payment_date":"2015-01-05",
    "customer_bank_country":"United Kingdom",
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

## Create an invoice

```shell
# Definition
POST https://www.octobat.com/api/invoices

# Example request
$ curl https://api.octobat.com/invoices \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d customer_id="oc_cu_1421878635hksc26e4de79" \
   -d currency="eur" \
   -d payable_by[]="oc_pm_14235210139j06befa616a"


# Example response
{
  "id": "oc_in_14234251141rdhb20d40fe",
  "object": "invoice",
  "livemode": true,
  "state": "draft",
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
    "data": []
  },
  "payable_by" : [
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
  "payment": null,
  "sources": [],
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```


```ruby
# Definition
POST https://www.octobat.com/api/invoices

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::Invoice.create(
  currency: "eur",
  customer_id: "oc_cu_1421878635hksc26e4de79",
  payable_by: ["oc_pm_14235210139j06befa616a"]
)

# Example response
#<Octobat::Invoice id=oc_in_14234251141rdhb20d40fe 0x00000a> JSON: {
  "id": "oc_in_14234251141rdhb20d40fe",
  "object": "invoice",
  "livemode": true,
  "state": "draft",
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
    "data": []
  },
  "payable_by" : [
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
  "payment": null,
  "sources": [],
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

To create an invoice for a customer, you must first create it as a draft. Then, you must add invoice items upon it, and declare if it still has to be paid or if the payment has already been performed.
### Arguments

Attribute | Description
--------- | ------- | -----------
**currency:** | **string required** ISO code of the currency (eur, usd, gbp...)
**customer_id:** | **string required** Octobat Customer ID. Create one first if it still does not exist.
**numbering_sequence_id:** | **string optional** Numbering sequence ID. Fallbacks to default numbering sequence if not filled
**payable_by:** | **array optional** Array of Payment methods IDs
**description:** | **string optional** Global description of the invoice
**evidence:** | **hash optional** Nested Evidence Hash. Fill it in the following way: `{"customer_ip_address":"137.194.15.1"}` to fill the customer ip address for VATMOSS evidence

### Returns
Returns the full invoice object if the creation succeeded. Returns an error if parameters are invalid




## Update a draft invoice
```shell
# Definition
PATCH https://www.octobat.com/api/invoices/{INVOICE_ID}

# Example request


# Example response

```


```ruby
# Definition
invoice = Octobat::Invoice.retrieve("oc_in_14234251141rdhb20d40fe")
invoice.customer_address_line1 = "5th Avenue, 1830"
invoice.customer_name = "Company Inc."
invoice.save

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

invoice = Octobat::Invoice.retrieve("oc_in_14234251141rdhb20d40fe")
invoice.customer_address_line1 = "5th Avenue, 1830"
invoice.customer_name = "Company Inc."
invoice.save


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
  "customer_name": "Company Inc.",
  "customer_address_line1": "5th Avenue, 1830",
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
--------- | -------
**customer_name:** | **string optional**
**customer_address_line1:** | **string optional**
**customer_address_line2:** | **string optional**
**customer_address_city:** | **string optional**
**customer_address_zip:** | **string optional**
**customer_address_state:** | **string optional**
**customer_address_country:** | **string optional**
**customer_vat_number:** | **string optional**

### Returns
Returns the full invoice object if the update succeeded. Returns an error if the invoice has already been sent by email and is no longer updatable, or if the update fails







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











## Confirm a draft invoice
```shell
# Definition
PATCH https://www.octobat.com/api/invoices/{INVOICE_ID}/confirm

# Example request
curl https://www.octobat.com/invoices/oc_in_14234251141rdhb20d40fe/confirm \
 -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
 -X PATCH

# Example response
{
  "id": "oc_in_14234251141rdhb20d40fe",
  "object": "invoice",
  "livemode": true,
  "state": "confirmed",
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
  "payment": {},
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


```ruby
# Definition
invoice = Octobat::Invoice.retrieve("oc_in_14234251141rdhb20d40fe")
invoice.confirm

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

invoice = Octobat::Invoice.retrieve("oc_in_14234251141rdhb20d40fe")
invoice.confirm()

# Example response
#<Octobat::Invoice id=oc_in_14234251141rdhb20d40fe 0x00000a> JSON: {{
  "id": "oc_in_14234251141rdhb20d40fe",
  "object": "invoice",
  "livemode": true,
  "state": "confirmed",
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
  "payment": {},
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

### Returns
After creating a draft invoice and adding invoice items, you have to confirm it before sending it to the customer. A payment mode must have attached.
Returns the full invoice object if the update succeeded. Returns an error if update parameters are invalid















## Declare as paid
```shell
# Definition
PATCH https://www.octobat.com/api/invoices/{INVOICE_ID}/pay

# Example request
curl https://www.octobat.com/invoices/oc_in_14234251141rdhb20d40fe/pay \
 -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
 -d payment[payment_date]='2016-02-04' \
 -d payment[customer_bank_country]='UK' \
 -d payment[payment_mode]="oc_pm_14238493313wqfa5849d26" \
 -X PATCH

# Example response
{
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


```ruby
# Definition
invoice = Octobat::Invoice.retrieve("oc_in_14234251141rdhb20d40fe")
payment_data = {...}
invoice.pay(payment_data)

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

invoice = Octobat::Invoice.retrieve("oc_in_14234251141rdhb20d40fe")
invoice.pay(
  payment_date: "2015-01-05",
  customer_bank_country: "United Kingdom",
  payment_mode: "oc_pm_14235210139j06befa616a"
)

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
**payment:** | **object required** A nested payment object. See the corresponding section to have details on how to fill this object.

### Returns
Returns the full invoice object if the update succeeded. Returns an error if update parameters are invalid
