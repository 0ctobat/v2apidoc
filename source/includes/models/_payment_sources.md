# Payment sources
This is the payment source of a transaction.


## The payment source object
> Example object

```json
{
  "id": "oc_ps_1459584112d83k4ef3e3bd",
  "object": "payment_source",
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "source": "card_1029383qsfqs",
  "payment_source_type": "Credit Card",
  "details": {},
  "country": "FR",
  "exp_month": 12,
  "exp_year": 2017
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
      <td class="attribute"><strong>object</strong><br/><span class="details">string, value is "<strong>payment_source</strong>"</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>customer</strong><br/><span class="details">string</span></td>
      <td><p>ID of the customer.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>source</strong><br/><span class="details">string</span></td>
      <td><p>Source.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>payment_source_type</strong><br/><span class="details">string</span></td>
      <td><p>Type of the payment can be <code>Credit Card</code>, <code>Transfer</code>, or <code>Check</code> or another value.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>details</strong><br/><span class="details">json</span></td>
      <td><p>iban...........................????????????????</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>country</strong><br/><span class="details">string</span></td>
      <td><p>Two-letter ISO code representing the country of the payment source.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>exp_month</strong><br/><span class="details">integer</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>exp_year</strong><br/><span class="details">integer</span></td>
      <td><p>-</p></td>
    </tr>
  </tbody>
</table>


## Create a payment source

```
# Definition
POST https://api.octobat.com/customers/{CUSTOMER_ID}/payment_sources
```

```shell
# Example Request
$ curl https://api.octobat.com/customers/{CUSTOMER_ID}/payment_sources \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d source="card_1029383qsfqs" \
   -d payment_source_type="Credit Card" \
   -d details={} \
   -d country="FR" \
   -d exp_month=12 \
   -d exp_year=2017

# Example response
{
  "id": "oc_ps_1459584112d83k4ef3e3bd",
  "object": "payment_source",
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "source": "card_1029383qsfqs",
  "payment_source_type": "Credit Card",
  "details": {},
  "country": "FR",
  "exp_month": 12,
  "exp_year": 2017
}
```

```ruby
# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::PaymentSource.create(
  source: "card_1029383qsfqs",
  payment_source_type: "Credit Card",
  details: {},
  country: "FR",
  exp_month: 12,
  exp_year: 2017
)

# Example response
#<Octobat::PaymentSource id=oc_ps_1459584112d83k4ef3e3bd 0x00000a> JSON: {
  "id": "oc_ps_1459584112d83k4ef3e3bd",
  "object": "payment_source",
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "source": "card_1029383qsfqs",
  "payment_source_type": "Credit Card",
  "details": {},
  "country": "FR",
  "exp_month": 12,
  "exp_year": 2017
}
```

### Arguments
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>source</strong><br/><span class="details">optional</span></td>
      <td><p>Source.................</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>payment_source_type</strong><br/><span class="details">optional</span></td>
      <td><p>payment_source_type..................</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>details</strong><br/><span class="details">optional</span></td>
      <td><p>details...............</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>country</strong><br/><span class="details">optional</span></td>
      <td><p>Two-letter ISO code representing the payment source's country of the customer.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>exp_month</strong><br/><span class="details">optional, default is <strong>nil</strong></span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>exp_year</strong><br/><span class="details">optional, default is <strong>nil</strong></span></td>
      <td><p>-</p></td>
    </tr>
  </tbody>
</table>

### Returns
Returns the payment source object if the creation succeeds. Returns an error if parameters are invalid



## Retrieve an existing payment source
```shell
# Definition
GET https://api.octobat.com/customers/{CUSTOMER_ID}/payment_sources/{PAYMENT_SOURCE_ID}

# Example Request
$ curl https://api.octobat.com/customers/oc_cu_1421878635hksc26e4de79/payment_sources/oc_ps_1459584051gau52bfe848c \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:

# Example response
{
  "id": "oc_ps_1459584051gau52bfe848c",
  "object" : "payment_source",
  "customer" : "oc_cu_1459413729au6o6a9ae061",
  "source": "card_1029383qsfqs",
  "payment_source_type": "Credit Card",
  "details": {},
  "country": FR,
  "exp_month": 12,
  "exp_year": 2017
}
```

```ruby
# Definition
customer = Octobat::Customer.retrieve({CUSTOMER_ID})
payment_source = customer.payment_sources.retrieve({PAYMENT_SOURCE_ID})

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

customer = Octobat::Customer.retrieve("oc_cu_1421878635hksc26e4de79")
customer.payment_sources.retrieve("oc_ps_1459584112d83k4ef3e3bd")

# Example response
#<Octobat::PaymentSource id=oc_ps_1459584112d83k4ef3e3bd 0x00000a> JSON: {
 "id": "oc_ps_1459584112d83k4ef3e3bd",
 "object" : "payment_source",
 "customer" : "oc_cu_1459413729au6o6a9ae061",
 "source": "card_1029383qsfqs",
 "payment_source_type": "Credit Card",
 "details": {},
 "country": FR,
 "exp_month": 12,
 "exp_year": 2017
}
```


Retrieves the details of an existing payment source. You need only supply the unique payment source identifier that was returned upon payment source creation.

### Arguments
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>id</strong><br/><span class="badge-warning">required</span></td>
      <td><p>The identifier of the payment source to be retrieved.</p></td>
    </tr>
  </tbody>
</table>

### Returns
Returns a payment source object if a valid identifier was provided.


## List all payment sources

```shell
# Definition
GET https://api.octobat.com/customers/{CUSTOMER_ID}/payment_sources/

# Example request
$ curl https://api.octobat.com/customers/oc_cu_1459413729au6o6a9ae061/payment_sources \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:

# Example response
{
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    {
      "id": "oc_ps_1459584112d83k4ef3e3bd",
      "object" : "payment_source",
      "customer" : "oc_cu_1459413729au6o6a9ae061",
      "source": "card_1029383qsfqs",
      "payment_source_type": "Credit Card",
      "details": {},
      "country": "FR",
      "exp_month": 12,
      "exp_year": 2017
    },
    {...},
    {...}
  ]
}
```

```ruby
# Definition
customer = Octobat::Customer.retrieve({CUSTOMER_ID})
customer.payment_sources.all

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

customer = Octobat::Customer.retrieve("oc_cu_1459413729au6o6a9ae061")
customer.payment_sources.all

# Example response
#<Octobat::ListObject:0x3fe634d74498> JSON: {
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    #<Octobat::Customer id=oc_cu_1421878635hksc26e4de79 0x00000a> JSON: {
      "id": "oc_ps_1459584112d83k4ef3e3bd",
      "object" : "payment_source",
      "customer" : "oc_cu_1459413729au6o6a9ae061",
      "source": "card_1029383qsfqs",
      "payment_source_type": "Credit Card",
      "details": {},
      "country": "FR",
      "exp_month": 12,
      "exp_year": 2017
    },
    #<Octobat::Customer[...] ...>,
    #<Octobat::Customer[...] ...>
  ]
}
```



Returns a list of customer's payment sources.

### Returns
A hash with a data property that contains an array of payment sources. Each entry in the array is a separate payment source object. If no payment sources are available, the resulting array will be empty. This request should never raise an error.
