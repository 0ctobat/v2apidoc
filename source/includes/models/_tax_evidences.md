# Tax evidences
Permit tax automation.

## The tax evidence object
> Example object

```json
{
  "id": "oc_tev_1476028202copc58f93027",
  "object": "tax_evidence",
  "livemode": false,
  "sale_mode": "B2B",
  "product_type": "eservice",
  "tax_enabled": false,
  "tax": null,
  "tax_zone": null,
  "declare_in_region": null,
  "applied_rate": 0.0,
  "tax_details": null,
  "tax_id_validation": {
    "id": "oc_tvl_1476032361kezn4a74878c",
    "object": "tax_id_validation",
    "tax_id": "FR60528551658",
    "is_valid": true
  },
  "supplier_evidence": {
    "zip": "94080",
    "state": "California",
    "country": "US"
  },
  "supplier_localization": {
    "zip": "94080",
    "state": "California",
    "country": "US"
  },
  "customer_evidence": {
    "tax_id": "FR60528551658",
    "billing": {
      "zip": "75002",
      "state": null,
      "country": "FR"
    },
    "ip": null,
    "payment_mode": null
  },
  "customer_localization": {
    "country": "FR"
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
      <td class="attribute"><strong>object</strong><br/><span class="details">string, value is "<strong>tax_evidence</strong>"</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>livemode</strong><br/><span class="details">boolean</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>sale_mode</strong><br/><span class="details">string</span></td>
      <td><p>Values can be: B2C or B2B.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>product_type</strong><br/><span class="details">string</span></td>
      <td><p>Values can be: eservice, standard or ebook.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>tax_enabled</strong><br/><span class="details">boolean</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>tax</strong><br/><span class="details">???</span></td>
      <td><p>???</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>tax_zone</strong><br/><span class="details">???</span></td>
      <td><p>???</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>declare_in_region</strong><br/><span class="details">???</span></td>
      <td><p>???</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>applied_rate</strong><br/><span class="details">float</span></td>
      <td><p>Tax rate applied to the transaction.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>tax_details</strong><br/><span class="details">???</span></td>
      <td><p>???</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>tax_id_validation</strong><br/><span class="details">hash</span></td>
      <td><p>PLUSIEURS ATTRIBUTES</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>supplier_evidence</strong><br/><span class="details">hash</span></td>
      <td><p>PLUSIEURS ATTRIBUTES</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>supplier_localization</strong><br/><span class="details">hash</span></td>
      <td><p>PLUSIEURS ATTRIBUTES</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>customer_evidence</strong><br/><span class="details">hash</span></td>
      <td><p>PLUSIEURS ATTRIBUTES</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>customer_localization</strong><br/><span class="details">hash</span></td>
      <td><p>PLUSIEURS ATTRIBUTES</p></td>
    </tr>
  </tbody>
</table>


## Create a tax evidence

```
# Definition
POST https://api.octobat.com/tax_evidences
```

```shell
# Example Request
$ curl https://api.octobat.com/tax_evidences \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d customer="oc_cu_14760321296p4b6e6f113e" \
   -d product_type="eservice" \
   -d transaction_date= "2016-10-09"

# Example response
{
  "id": "oc_tev_1476028202copc58f93027",
  "object": "tax_evidence",
  "livemode": false,
  "sale_mode": "B2B",
  "product_type": "eservice",
  "tax_enabled": false,
  "tax": nil,
  "tax_zone": nil,
  "declare_in_region": nil,
  "applied_rate": 0.0,
  "tax_details": nil,
  "tax_id_validation": {
    "id": "oc_tvl_1476032361kezn4a74878c",
    "object": "tax_id_validation",
    "tax_id": "FR60528551658",
    "is_valid": true
  },
  "supplier_evidence": {
    "zip": "94080",
    "state": "California",
    "country": "US"
  },
  "supplier_localization": {
    "zip": "94080",
    "state": "California",
    "country": "US"
  },
  "customer_evidence": {
    "tax_id": "FR60528551658",
    "billing": {
      "zip": "75002",
      "state": nil,
      "country": "FR"
    },
    "ip": nil,
    "payment_mode": nil
  },
  "customer_localization": {
    "country": "FR"
  }
}
```

```ruby
# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::TaxEvidence.create(
  customer: "oc_cu_14760321296p4b6e6f113e",
  product_type: "eservice",
  transaction_date: "2016-10-09"
)

# Example response
#<Octobat::TaxEvidence id=oc_tev_1476028202copc58f93027 0x00000a> JSON: {
  "id": "oc_tev_1476028202copc58f93027",
  "object": "tax_evidence",
  "livemode": false,
  "sale_mode": "B2B",
  "product_type": "eservice",
  "tax_enabled": false,
  "tax": nil,
  "tax_zone": nil,
  "declare_in_region": nil,
  "applied_rate": 0.0,
  "tax_details": nil,
  "tax_id_validation": {
    "id": "oc_tvl_1476032361kezn4a74878c",
    "object": "tax_id_validation",
    "tax_id": "FR60528551658",
    "is_valid": true
  },
  "supplier_evidence": {
    "zip": "94080",
    "state": "California",
    "country": "US"
  },
  "supplier_localization": {
    "zip": "94080",
    "state": "California",
    "country": "US"
  },
  "customer_evidence": {
    "tax_id": "FR60528551658",
    "billing": {
      "zip": "75002",
      "state": nil,
      "country": "FR"
    },
    "ip": nil,
    "payment_mode": nil
  },
  "customer_localization": {
    "country": "FR"
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
      <td class="attribute"><strong>sale_mode</strong><br/><span class="details">optional, default is the customer business type.</span></td>
      <td><p>The sale mode is either <code>B2C</code> or <code>B2B</code>.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>product_type</strong><br/><span class="details">optional, default is your product_type setting.</span></td>
      <td><p>The product type is either <code>eservice</code>, <code>ebook</code> or <code>standard</code>.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>transaction_date</strong><br/><span class="details">optional</span></td>
      <td><p>Date.</p></td>
    </tr>
  </tbody>
</table>


### Returns
Returns the tax evidence object if the creation succeeds. Returns an error if parameters are invalid.
