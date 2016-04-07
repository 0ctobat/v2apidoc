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
  "exp_year": 2017,
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

### Attributes
Attribute | Type
--------- | -----------
**id:** | **string**
**object:** | **string** equals to payment source
**customer:** | **string required** Identifier of the related customer
**source:** | **string**
**payment_source_type:** | **string**
**details:** | **json**
**country:** | **string**
**exp_month:** | **integer**
**exp_year:** | **integer**
**created_at:** | **datetime**
**updated_at:** | **datetime**


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
  "exp_year": 2017,
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
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
  "exp_year": 2017,
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

### Arguments
Attribute | Description
--------- | ------- | -----------
**source:** | **string**
**payment_source_type:** | **string**
**details:** | **json**
**country:** | **string**
**exp_month:** | **integer**
**exp_year:** | **integer**

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
  "exp_year": 2017,
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
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
 "exp_year": 2017,
 "created_at": "2015-07-12T11:22:29Z",
 "updated_at": "2015-07-12T11:22:29Z"
}
```


Retrieves the details of an existing payment source. You need only supply the unique payment source identifier that was returned upon payment source creation.

### Arguments
Attribute | Description
--------- | ------- | -----------
**id:** | **required** The identifier of the payment source to be retrieved.

### Returns
Returns a payment source object if a valid identifier was provided.




## Update a payment source

```shell
# Definition
PATCH https://api.octobat.com/customers/{CUSTOMER_ID}/payment_sources/{PAYMENT_SOURCE_ID}

# Example request
$ curl https://api.octobat.com/customers/oc_cu_1459413729au6o6a9ae061/payment_sources/oc_ps_1459584112d83k4ef3e3bd \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d exp_month=11

# Example response
{
  "id": "oc_ps_1459584051gau52bfe848c",
  "object": "payment_source",
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "source": "card_1029383qsfqs",
  "payment_source_type": "Credit Card",
  "details": {},
  "country": "FR",
  "exp_month": 11,
  "exp_year": 2017,
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

```ruby
# Definition
customer = Octobat::Customer.retrieve({CUSTOMER_ID})
payment_source = customer.payment_sources.retrieve({PAYMENT_SOURCE_ID})
payment_source.exp_month = {NEW_EXP_MONTH}
payment_source.save

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

customer = Octobat::Customer.retrieve("oc_cu_1421878635hksc26e4de79")
payment_source = customer.payment_sources.retrieve("oc_ps_1459584112d83k4ef3e3bd")
payment_source.exp_month = 11
payment_source.save

# Example response
#<Octobat::PaymentSource id=oc_ps_1459584112d83k4ef3e3bd 0x00000a> JSON: {
  "id": "oc_ps_1459584051gau52bfe848c",
  "object": "payment_source",
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "source": "card_1029383qsfqs",
  "payment_source_type": "Credit Card",
  "details": {},
  "country": "FR",
  "exp_month": 11,
  "exp_year": 2017,
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```


Updates the specified payment source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
This request accepts mostly the same arguments as the payment source creation call.

### Arguments
Attribute | Description
--------- | ------- | -----------
**source:** | **string**
**payment_source_type:** | **string**
**details:** | **json**
**country:** | **string**
**exp_month:** | **integer**
**exp_year:** | **integer**

### Returns
Returns the payment source object if the update succeeded. Returns an error if update parameters are invalid.


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
      "exp_year": 2017,
      "created_at": "2015-07-12T11:22:29Z",
      "updated_at": "2015-07-12T11:22:29Z"
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
      "exp_year": 2017,
      "created_at": "2015-07-12T11:22:29Z",
      "updated_at": "2015-07-12T11:22:29Z"
    },
    #<Octobat::Customer[...] ...>,
    #<Octobat::Customer[...] ...>
  ]
}
```



Returns a list of customer's payment sources.

### Returns
A hash with a data property that contains an array of payment sources. Each entry in the array is a separate payment source object. If no payment sources are available, the resulting array will be empty. This request should never raise an error.
