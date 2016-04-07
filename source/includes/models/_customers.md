# Customers
## The customer object

> Example object

```json
{
  "id": "oc_cu_1421878635hksc26e4de79",
  "object" : "customer",
  "livemode" : true,
  "name": "Octobat Inc.",
  "email": "contact@octobat.com",
  "phone_number": "+33 9 52 54 03 70",
  "billing_address_line1": null,
  "billing_address_line2": null,
  "billing_address_city": "Paris",
  "billing_address_zip": "75004",
  "billing_address_state": null,
  "billing_address_country": "France",
  "business_type": "B2B",
  "tax_number": null,
  "octobat_billing_page": "https://b.octobat.com/c/1421878635hksc26e4de79",
  "sources" : [
    {
      "gateway":"stripe",
      "identifier":"cus_5Sei7oLAHSRtel"
    }
  ],
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

### Attributes
Attribute | Type
--------- | -----------
**id:** | **string**
**object:** | **string** equals to customer
**livemode:** | **boolean**
**name:** | **string**
**email:** | **string**
**phone_number:** | **string**
**billing_address_line1:** | **string**
**billing_address_line2:** | **string**
**billing_address_city:** | **string**
**billing_address_zip:** | **string**
**billing_address_state:** | **string**
**billing_address_country:** | **string**
**business_type:** | **string** Possible values are `B2B` and `B2C`. An individual must be tagged as `B2C` while a business must be tagged as `B2B`
**tax_number:** | **string** If your customer is a business registered at EU-VAT, its VAT registration number.
**octobat_billing_page** | **string** The url of a page listing all customer's invoices
**sources** | **array** Contains a list of gateways names and identifiers which this customer is from
**created_at:** | **datetime** ISO8601 format
**updated_at:** | **datetime** ISO8601 format


## Create a customer

```
# Definition
POST https://api.octobat.com/customers
```

```shell
# Example Request
$ curl https://api.octobat.com/customers \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d email="contact@octobat.com" \
   -d name="Octobat Inc." \
   -d phone_number="+33 9 52 54 03 70" \
   -d billing_address_zip="75004" \
   -d billing_address_city="Paris" \
   -d billing_address_country="France" \
   -d business_type="B2B" \
   -d tax_number="FR60528551658"

# Example response
{
  "id": "oc_cu_1421878635hksc26e4de79",
  "object" : "customer",
  "livemode" : true,
  "name": "Octobat Inc.",
  "email": "contact@octobat.com",
  "phone_number": "+33 9 52 54 03 70",
  "billing_address_line1": null,
  "billing_address_line2": null,
  "billing_address_city": "Paris",
  "billing_address_zip": "75004",
  "billing_address_state": null,
  "billing_address_country": "France",
  "business_type": "B2B",
  "tax_number": null,
  "octobat_billing_page": "https://b.octobat.com/c/1421878635hksc26e4de79",
  "sources": [],
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

```ruby
# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::Customer.create(
  name: "Octobat Inc.",
  email: "contact@octobat.com",
  phone_number: "+33 9 52 54 03 70",
  billing_address_line1: null,
  billing_address_line2: null,
  billing_address_city: "Paris",
  billing_address_zip: "75004",
  billing_address_state: null,
  billing_address_country: "France",
  business_type: "B2B",
  tax_number: null
)

# Example response
#<Octobat::Customer id=oc_cu_1421878635hksc26e4de79 0x00000a> JSON: {
 "id": "oc_cu_1421878635hksc26e4de79",
 "object" : "customer",
 "livemode" : true,
 "name": "Octobat Inc.",
 "email": "admin@octobat.com",
 "phone_number": "+33 9 52 54 03 70",
 "billing_address_line1": null,
 "billing_address_line2": null,
 "billing_address_city": "Paris",
 "billing_address_zip": "75004",
 "billing_address_state": null,
 "billing_address_country": "France",
 "business_type": "B2B",
 "tax_number": null,
 "octobat_billing_page": "https://b.octobat.com/c/1421878635hksc26e4de79",
 "sources": [],
 "created_at": "2015-07-12T11:22:29Z",
 "updated_at": "2015-07-12T11:22:29Z"
}
```

### Arguments
Attribute | Description
--------- | ------- | -----------
**name:** | **string required**
**email:** | **string required**
**phone_number:** | **string optional**
**billing_address_line1:** | **string optional**
**billing_address_line2:** | **string optional**
**billing_address_city:** | **string required**
**billing_address_zip:** | **string required**
**billing_address_state:** | **string optional**
**billing_address_country:** | **string required**
**business_type:** | **string required** Possible values are `B2B` and `B2C`. An individual must be tagged as `B2C` while a business must be tagged as `B2B`
**tax_number:** | **string optional** If your customer is a business registered at EU-VAT, its VAT registration number.

### Returns
Returns the customer object if the creation succeeds. Returns an error if parameters are invalid



## Retrieve an existing customer
```shell
# Definition
GET https://api.octobat.com/customers/{CUSTOMER_ID}

# Example Request
$ curl https://api.octobat.com/customers/oc_cu_1421878635hksc26e4de79 \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:

# Example response
{
  "id": "oc_cu_1421878635hksc26e4de79",
  "object" : "customer",
  "livemode" : true,
  "name": "Octobat Inc.",
  "email": "contact@octobat.com",
  "phone_number": "+33 9 52 54 03 70",
  "billing_address_line1": null,
  "billing_address_line2": null,
  "billing_address_city": "Paris",
  "billing_address_zip": "75004",
  "billing_address_state": null,
  "billing_address_country": "France",
  "business_type": "B2B",
  "tax_number": null,
  "octobat_billing_page": "https://b.octobat.com/c/1421878635hksc26e4de79",
  "sources": [
    {
      "gateway":"stripe",
      "identifier":"cus_5Sei7oLAHSRtel"
    }
  ],
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

```ruby
# Definition
Octobat::Customer.retrieve({CUSTOMER_ID})

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::Customer.retrieve("oc_cu_1421878635hksc26e4de79")

# Example response
#<Octobat::Customer id=oc_cu_1421878635hksc26e4de79 0x00000a> JSON: {
 "id": "oc_cu_1421878635hksc26e4de79",
 "object" : "customer",
 "livemode" : true,
 "name": "Octobat Inc.",
 "email": "contact@octobat.com",
 "phone_number": "+33 9 52 54 03 70",
 "billing_address_line1": null,
 "billing_address_line2": null,
 "billing_address_city": "Paris",
 "billing_address_zip": "75004",
 "billing_address_state": null,
 "billing_address_country": "France",
 "business_type": "B2B",
 "tax_number": null,
 "octobat_billing_page": "https://b.octobat.com/c/1421878635hksc26e4de79",
 "sources": [
   {
     "gateway":"stripe",
     "identifier":"cus_5Sei7oLAHSRtel"
   }
 ],
 "created_at": "2015-07-12T11:22:29Z",
 "updated_at": "2015-07-12T11:22:29Z"
}
```


Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer creation.

### Arguments
Attribute | Description
--------- | ------- | -----------
**id:** | **required** The identifier of the customer to be retrieved.

### Returns
Returns a customer object if a valid identifier was provided.




## Update a customer

```shell
# Definition
PATCH https://api.octobat.com/customers/{CUSTOMER_ID}

# Example request
$ curl https://api.octobat.com/customers/oc_cu_1421878635hksc26e4de79 \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d email="admin@octobat.com"

# Example response
{
  "id": "oc_cu_1421878635hksc26e4de79",
  "object" : "customer",
  "livemode" : true,
  "name": "Octobat Inc.",
  "email": "admin@octobat.com",
  "phone_number": "+33 9 52 54 03 70",
  "billing_address_line1": null,
  "billing_address_line2": null,
  "billing_address_city": "Paris",
  "billing_address_zip": "75004",
  "billing_address_state": null,
  "billing_address_country": "France",
  "business_type": "B2B",
  "tax_number": null,
  "octobat_billing_page": "https://b.octobat.com/c/1421878635hksc26e4de79",
  "sources": [
    {
      "gateway":"stripe",
      "identifier":"cus_5Sei7oLAHSRtel"
    }
  ],
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

```ruby
# Definition
customer = Octobat::Customer.retrieve({CUSTOMER_ID})
customer.email = {NEW_EMAIL}
customer.save

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

customer = Octobat::Customer.retrieve("oc_cu_1421878635hksc26e4de79")
customer.email = "admin@octobat.com"
customer.save

# Example response
#<Octobat::Customer id=oc_cu_1421878635hksc26e4de79 0x00000a> JSON: {
 "id": "oc_cu_1421878635hksc26e4de79",
 "object" : "customer",
 "livemode" : true,
 "name": "Octobat Inc.",
 "email": "admin@octobat.com",
 "phone_number": "+33 9 52 54 03 70",
 "billing_address_line1": null,
 "billing_address_line2": null,
 "billing_address_city": "Paris",
 "billing_address_zip": "75004",
 "billing_address_state": null,
 "billing_address_country": "France",
 "business_type": "B2B",
 "tax_number": null,
 "octobat_billing_page": "https://b.octobat.com/c/1421878635hksc26e4de79",
 "sources": [
   {
     "gateway":"stripe",
     "identifier":"cus_5Sei7oLAHSRtel"
   }
 ],
 "created_at": "2015-07-12T11:22:29Z",
 "updated_at": "2015-07-12T11:22:29Z"
}
```


Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
This request accepts mostly the same arguments as the customer creation call.

### Arguments
Attribute | Description
--------- | ------- | -----------
**name:** | **string**
**email:** | **string**
**phone_number:** | **string**
**billing_address_line1:** | **string**
**billing_address_line2:** | **string**
**billing_address_city:** | **string**
**billing_address_zip:** | **string**
**billing_address_state:** | **string**
**billing_address_country:** | **string**
**business_type:** | **string** Possible values are `B2B` and `B2C`. An individual must be tagged as `B2C` while a business must be tagged as `B2B`
**tax_number:** | **string** If your customer is a business registered at EU-VAT, its VAT registration number.

### Returns
Returns the customer object if the update succeeded. Returns an error if update parameters are invalid


## List all customers

```shell
# Definition
GET https://api.octobat.com/customers/

# Example request
$ curl https://api.octobat.com/customers \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:

# Example response
{
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    {
      "id": "oc_cu_1421878635hksc26e4de79",
      "object" : "customer",
      "livemode" : true,
      "name": "Octobat Inc.",
      "email": "admin@octobat.com",
      "phone_number": "+33 9 52 54 03 70",
      "billing_address_line1": null,
      "billing_address_line2": null,
      "billing_address_city": "Paris",
      "billing_address_zip": "75004",
      "billing_address_state": null,
      "billing_address_country": "France",
      "business_type": "B2B",
      "tax_number": null,
      "octobat_billing_page": "https://b.octobat.com/c/1421878635hksc26e4de79",
      "sources": [
        {
          "gateway":"stripe",
          "identifier":"cus_5Sei7oLAHSRtel"
        }
      ],
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
Octobat::Customer.all

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::Customer.all

# Example response
#<Octobat::ListObject:0x3fe634d74498> JSON: {
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    #<Octobat::Customer id=oc_cu_1421878635hksc26e4de79 0x00000a> JSON: {
     "id": "oc_cu_1421878635hksc26e4de79",
     "object": "customer",
     "livemode" : true,
     "name": "Octobat Inc.",
     "email": "admin@octobat.com",
     "phone_number": "+33 9 52 54 03 70",
     "billing_address_line1": null,
     "billing_address_line2": null,
     "billing_address_city": "Paris",
     "billing_address_zip": "75004",
     "billing_address_state": null,
     "billing_address_country": "France",
     "business_type": "B2B",
     "tax_number": null,
     "octobat_billing_page": "https://b.octobat.com/c/1421878635hksc26e4de79",
     "sources": [
       {
         "gateway":"stripe",
         "identifier":"cus_5Sei7oLAHSRtel"
       }
     ],
     "created_at": "2015-07-12T11:22:29Z",
     "updated_at": "2015-07-12T11:22:29Z"
    },
    #<Octobat::Customer[...] ...>,
    #<Octobat::Customer[...] ...>
  ]
}
```



Returns a list of your customers.

### Returns
A hash with a data property that contains an array of customers. Each entry in the array is a separate customer object. If no customers are available, the resulting array will be empty. This request should never raise an error.
