---
title: Octobat API Documentation

language_tabs:
  - shell: curl
  - ruby

toc_footers:

includes:
  

search: false
---

# Introduction
```ruby
# Bundler: Add to your Gemfile
gem "octobat"
```

```global
API Endpoint
https://api.octobat.com 
```

The Octobat API is organized around REST. Our API is designed to have predictable, resource-oriented URLs and to use HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP verbs, which can be understood by off-the-shelf HTTP clients.

JSON will be returned in all responses from the API, including errors.

To make the Octobat API as secure as possible. Authentication is performed through HTTP Basic Auth. Credentials can be found on your Octobat account menu, in the "API Keys" section.


# Authentication

```shell
# Example request
$ curl https://api.octobat.com/customers \
   -u oc_key_tkHCYYOUVrYyY5rBFZxNzgtt:
   
# curl uses the -u flag to pass basic auth credentials
# (adding a colon after your API key will prevent it 
# from asking you for a password).
```

```ruby
# Example request
require "octobat"
Octobat.api_key = "oc_key_tkHCYYOUVrYyY5rBFZxNzgtt"

# Authentication is transparently handled for you
# in subsequent method calls.
```

Authentication to the API occurs via HTTP Basic Auth. Provide your API key as the basic auth username. You do not need to provide a password.
All API requests must be made over HTTPS. Calls made over plain HTTP will fail. You must authenticate for all requests.
You can manage your API keys from your account. Your API keys carry many privileges, so be sure to keep them secret!



# Errors
```global
HTTP status codes summary

200 OK - Everything worked as expected.

401 Unauthorized - No valid API credentials provided.

403 Forbidden - You are not authorized to access the requested item.

404 Not Found - The requested item doesn't exist.

406 Unacceptable - Your request format was not supported. Use JSON.

409 Conflict - The data you submitted is in conflict with existing data.

422 Unprocessable Entity - Often missing a required parameter.

429 Too Many Requests - You sent us too many API requests in a row. Please retry later.

500, 502, 503, 504 Server errors - something went wrong on Octobat's end.

```
Octobat uses conventional HTTP response codes to indicate success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that resulted from the provided information (e.g. a required parameter was missing, a charge failed, etc.), and codes in the 5xx range indicate an error with Octobat's servers.



# Pagination
```shell
# Example request
$ curl https://api.octobat.com/customers?limit=3 \
   -u oc_key_tkHCYYOUVrYyY5rBFZxNzgtt:
  
# Example response
{
  "object": "list",
  "has_more": true,
  "total_count": 240,
  "data": [
    {
      "id": "oc_cu_1421878635hksc26e4de79",
      "object" : "customer",
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
      "vat_number": null,
      "octobat_billing_page": "https://b.octobat.com/c/1421878635hksc26e4de79",
      "created_at": "2015-07-12T11:22:29Z",
      "updated_at": "2015-07-12T11:22:29Z"
    },
    {...},
    {...}
  ]
}
```

```ruby
# Example request
require "octobat"
Octobat.api_key = "oc_key_tkHCYYOUVrYyY5rBFZxNzgtt"
Octobat::Customer.all(limit: 3)

# Example response
#<Octobat::ListObject:0x3fe634d74498> JSON: {
  "object": "list",
  "has_more": true,
  "total_count": 240,
  "data": [
    #<Octobat::Customer id=oc_cu_1421878635hksc26e4de79 0x00000a> JSON: {
     "id": "oc_cu_1421878635hksc26e4de79",
     "object": "customer",
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
     "vat_number": null,
     "octobat_billing_page": "https://b.octobat.com/c/1421878635hksc26e4de79",
     "created_at": "2015-07-12T11:22:29Z",
     "updated_at": "2015-07-12T11:22:29Z"
    },
    #<Octobat::Customer[...] ...>,
    #<Octobat::Customer[...] ...>
  ]
}

```


All top-level Octobat API resources have support for bulk fetches "list" API methods. For instance, you can list customers, list invoices.
Like Stripe, Octobat uses cursor-based pagination using the parameter `starting_after`. Pass `starting_after` parameter at the previous page last object id value to determine where to start in the list.

### Attributes
Attribute | Type
--------- | -----------
**limit** | **integer optional**  A limit on the number of objects to be returned. Must be included between 1 and 100
**starting_after** | **string optional** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
**ending_before** | **string optional** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.


### List response format
Attribute | Type
--------- | -----------
**object** | **string, value is "list"**
**data** | **array** An array containing the actual response elements, paginated by any request parameters.
**has_more** | **boolean** Whether or not there are more elements available after this page. If `false`, this page is the end of the list.
**total_count** | **boolean** The total count of all recipients that match your filters, as if there was no pagination.

# Nested objects

```shell
# Example request
$ curl https://api.octobat.com/customers?include[]=invoices \
   -u oc_key_tkHCYYOUVrYyY5rBFZxNzgtt:
```

```ruby
# Example request
require "octobat"
Octobat.api_key = "oc_key_tkHCYYOUVrYyY5rBFZxNzgtt"
Octobat::Customer.all(include: ['invoices'])
```

Many objects can be nested into their parent object in their response properties. Those objects can be expanded inline with the include request parameter. Objects that can be expanded are noted in this documentation.
This parameter is available on all API requests, and applies to the response of that request only. For example, requesting invoices on a customer will add the customer's invoices list as a property into a full customer object, and will then expand the invoices properties on that customer into a full list object.




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
   -u oc_key_tkHCYYOUVrYyY5rBFZxNzgtt:
   
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
Octobat.api_key = "oc_key_tkHCYYOUVrYyY5rBFZxNzgtt"

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



# Customers
## The customer object

> Example object

```json
{
  "id": "oc_cu_1421878635hksc26e4de79",
  "object" : "customer",
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
  "vat_number": null,
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
**vat_number:** | **string** If your customer is a business registered at EU-VAT, its VAT registration number.
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
   -u oc_key_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d email="contact@octobat.com" \
   -d name="Octobat Inc." \
   -d phone_number="+33 9 52 54 03 70" \
   -d billing_address_zip="75004" \
   -d billing_address_city="Paris" \
   -d billing_address_country="France" \
   -d business_type="B2B" \
   -d vat_number="FR60528551658"
   
# Example response
{
  "id": "oc_cu_1421878635hksc26e4de79",
  "object" : "customer",
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
  "vat_number": null,
  "octobat_billing_page": "https://b.octobat.com/c/1421878635hksc26e4de79",
  "sources": [],
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

```ruby
# Example request
>> require "octobat"
Octobat.api_key = "oc_key_tkHCYYOUVrYyY5rBFZxNzgtt"

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
  vat_number: null
)

# Example response
#<Octobat::Customer id=oc_cu_1421878635hksc26e4de79 0x00000a> JSON: {
 "id": "oc_cu_1421878635hksc26e4de79",
 "object" : "customer",
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
 "vat_number": null,
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
**vat_number:** | **string optional** If your customer is a business registered at EU-VAT, its VAT registration number.

### Returns
Returns the customer object if the creation succeeds. Returns an error if parameters are invalid



## Retrieve an existing customer
```shell
# Definition
GET https://api.octobat.com/customers/{CUSTOMER_ID}

# Example Request
$ curl https://api.octobat.com/customers/oc_cu_1421878635hksc26e4de79 \
   -u oc_key_tkHCYYOUVrYyY5rBFZxNzgtt:

# Example response
{
  "id": "oc_cu_1421878635hksc26e4de79",
  "object" : "customer",
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
  "vat_number": null,
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
Octobat.api_key = "oc_key_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::Customer.retrieve("oc_cu_1421878635hksc26e4de79")

# Example response
#<Octobat::Customer id=oc_cu_1421878635hksc26e4de79 0x00000a> JSON: {
 "id": "oc_cu_1421878635hksc26e4de79",
 "object" : "customer",
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
 "vat_number": null,
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
   -u oc_key_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d email="admin@octobat.com"
   
# Example response
{
  "id": "oc_cu_1421878635hksc26e4de79",
  "object" : "customer",
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
  "vat_number": null,
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
customer = Octobat::Customer.retrieve("oc_cu_1421878635hksc26e4de79")
customer.email = "admin@octobat.com"
...
customer.save

# Example request
>> require "octobat"
Octobat.api_key = "oc_key_tkHCYYOUVrYyY5rBFZxNzgtt"

customer = Octobat::Customer.retrieve("oc_cu_1421878635hksc26e4de79")
customer.email = "admin@octobat.com"
...
customer.save

# Example response
#<Octobat::Customer id=oc_cu_1421878635hksc26e4de79 0x00000a> JSON: {
 "id": "oc_cu_1421878635hksc26e4de79",
 "object" : "customer",
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
 "vat_number": null,
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
**vat_number:** | **string** If your customer is a business registered at EU-VAT, its VAT registration number.

### Returns
Returns the customer object if the update succeeded. Returns an error if update parameters are invalid


## List all customers

```shell
# Definition
GET https://api.octobat.com/customers/

# Example request
$ curl https://api.octobat.com/customers \
   -u oc_key_tkHCYYOUVrYyY5rBFZxNzgtt:
   
# Example response
{
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    {
      "id": "oc_cu_1421878635hksc26e4de79",
      "object" : "customer",
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
      "vat_number": null,
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
Octobat.api_key = "oc_key_tkHCYYOUVrYyY5rBFZxNzgtt"

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
     "vat_number": null,
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
   "vat_number": null,
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
  "extratax_amount_cents": 15610,
  "tax_amount_cents": 3590,
  "tax_included_amount_cents", 19200,
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
        "description":"Monthly subscription",
        "extratax_cents":833,
        "quantity":1,
        "vat_rate":20.0,
        "payment_cents":1000,
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


# Example response

```


```ruby
# Definition
POST https://www.octobat.com/api/invoices

# Example request
>> require "octobat"
Octobat.api_key = "oc_key_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::Invoice.create(
  livemode: true,
  state: "confirmed",
  currency: "eur",
  numbering_sequence_id: "oc_ns_14213467384iwj86515b55",
  customer: {
    name: "My customer",
    email: "contact@octobat.com",
    phone_number: "+33 9 52 54 03 70",
    billing_address_line1: nil,
    billing_address_line2: nil,
    billing_address_city: "Paris",
    billing_address_zip: "75004",
    billing_address_state: nil,
    billing_address_country: "France",
    business_type: "B2C",
    vat_number: nil
  },
  invoice_items: [
    {
      description: "Monthly subscription",
      payment_cents: 1000,
      eservice: true
    },
    {
      description: "2 hours extratime",
      payment_cents: 2000,
      vat_rate: 10.0
    },
    {
      description: "Monthly subscription",
      extratax_cents: 4000,
      eservice: false
    },
  ],
  evidence: {
    customer_ip_address: "137.194.15.1"
  },
  payable_by: ["oc_pm_14235210139j06befa616a"]
)

# Example response
#<Octobat::Invoice id=oc_in_14234251141rdhb20d40fe 0x00000a> JSON: {
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
  "tax_included_amount_cents", 7800,
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
    "vat_number": null,
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
        "description":"Monthly subscription",
        "extratax_cents":833,
        "quantity":1,
        "vat_rate":20.0,
        "payment_cents":1000,
        "eservice":true,
        "created_at": "2015-07-12T11:22:29Z",
        "updated_at": "2015-07-12T11:22:29Z"
      },
      #<Octobat::InvoiceItem id=oc_ii_14234251155z6y590f99f9 0x00000a> JSON: {
        "id":"oc_ii_14234251155z6y590f99f9",
        "object":"invoice_item",
        "description":"2 hours extratim",
        "extratax_cents":1818,
        "quantity":1,
        "vat_rate":10.0,
        "payment_cents":2000,
        "eservice":true,
        "created_at": "2015-07-12T11:22:29Z",
        "updated_at": "2015-07-12T11:22:29Z"
      },
       #<Octobat::InvoiceItem id=oc_ii_14234271095z6y590f59fb 0x00000a> JSON: {
        "id":"oc_ii_14234271095z6y590f59fb",
        "object":"invoice_item",
        "description":"Monthly subscription",
        "extratax_cents":4000,
        "quantity":1,
        "vat_rate":20.0,
        "payment_cents":4800,
        "eservice":false,
        "created_at": "2015-07-12T11:22:29Z",
        "updated_at": "2015-07-12T11:22:29Z"
      }
    ]
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
**livemode:** | **boolean required** 
**state:** | **string required** can be `confirmed` or `paid`, according to the paid status of the invoice
**currency:** | **string required** ISO code of the currency (eur, usd, gbp...)
**customer_id:** | **string optional** Customer identifier. Mandatory if no nested customer object is present
**customer:** | **object required** Directly creates a new customer and attachs current invoice to him. See the customer#create function to know more about customer fields
**evidence:** | **hash optional** Nested Evidence Hash. Fill it in the following way: `{"customer_ip_address":"137.194.15.1"}` to fill the customer ip address for VATMOSS evidence
**invoice_items:** | **array required** List of invoice items, see the corresponding section to have details on how to fill this section.
**payable_by:** | **array optional** List of payment modes ids. Mandatory if the invoice state is not equal to `paid`.
**payment:** | **object optional** A nested payment object. Mandatory if the invoice state equals to `paid`. See the corresponding section to have details on how to fill this object.

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
Octobat.api_key = "oc_key_tkHCYYOUVrYyY5rBFZxNzgtt"

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
  "tax_included_amount_cents", 7800,
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
    "vat_number": null,
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
        "description":"Monthly subscription",
        "extratax_cents":833,
        "quantity":1,
        "vat_rate":20.0,
        "payment_cents":1000,
        "eservice":true,
        "created_at": "2015-07-12T11:22:29Z",
        "updated_at": "2015-07-12T11:22:29Z"
      },
      #<Octobat::InvoiceItem id=oc_ii_14234251155z6y590f99f9 0x00000a> JSON: {
        "id":"oc_ii_14234251155z6y590f99f9",
        "object":"invoice_item",
        "description":"2 hours extratim",
        "extratax_cents":1818,
        "quantity":1,
        "vat_rate":10.0,
        "payment_cents":2000,
        "eservice":true,
        "created_at": "2015-07-12T11:22:29Z",
        "updated_at": "2015-07-12T11:22:29Z"
      },
       #<Octobat::InvoiceItem id=oc_ii_14234271095z6y590f59fb 0x00000a> JSON: {
        "id":"oc_ii_14234271095z6y590f59fb",
        "object":"invoice_item",
        "description":"Monthly subscription",
        "extratax_cents":4000,
        "quantity":1,
        "vat_rate":20.0,
        "payment_cents":4800,
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
Octobat.api_key = "oc_key_tkHCYYOUVrYyY5rBFZxNzgtt"

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
  "tax_included_amount_cents", 7800,
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
    "vat_number": null,
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
        "description":"Monthly subscription",
        "extratax_cents":833,
        "quantity":1,
        "vat_rate":20.0,
        "payment_cents":1000,
        "eservice":true,
        "created_at": "2015-07-12T11:22:29Z",
        "updated_at": "2015-07-12T11:22:29Z"
      },
      #<Octobat::InvoiceItem id=oc_ii_14234251155z6y590f99f9 0x00000a> JSON: {
        "id":"oc_ii_14234251155z6y590f99f9",
        "object":"invoice_item",
        "description":"2 hours extratim",
        "extratax_cents":1818,
        "quantity":1,
        "vat_rate":10.0,
        "payment_cents":2000,
        "eservice":true,
        "created_at": "2015-07-12T11:22:29Z",
        "updated_at": "2015-07-12T11:22:29Z"
      },
       #<Octobat::InvoiceItem id=oc_ii_14234271095z6y590f59fb 0x00000a> JSON: {
        "id":"oc_ii_14234271095z6y590f59fb",
        "object":"invoice_item",
        "description":"Monthly subscription",
        "extratax_cents":4000,
        "quantity":1,
        "vat_rate":20.0,
        "payment_cents":4800,
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











## Declare as paid
```shell
# Definition
PATCH https://www.octobat.com/api/invoices/{INVOICE_ID}/pay

# Example request


# Example response

```


```ruby
# Definition
invoice = Octobat::Invoice.retrieve("oc_in_14234251141rdhb20d40fe")
payment_data = {...}
invoice.pay(payment_data)

# Example request
>> require "octobat"
Octobat.api_key = "oc_key_tkHCYYOUVrYyY5rBFZxNzgtt"

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
  "tax_included_amount_cents", 7800,
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
    "vat_number": null,
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
        "description":"Monthly subscription",
        "extratax_cents":833,
        "quantity":1,
        "vat_rate":20.0,
        "payment_cents":1000,
        "eservice":true,
        "created_at": "2015-07-12T11:22:29Z",
        "updated_at": "2015-07-12T11:22:29Z"
      },
      #<Octobat::InvoiceItem id=oc_ii_14234251155z6y590f99f9 0x00000a> JSON: {
        "id":"oc_ii_14234251155z6y590f99f9",
        "object":"invoice_item",
        "description":"2 hours extratim",
        "extratax_cents":1818,
        "quantity":1,
        "vat_rate":10.0,
        "payment_cents":2000,
        "eservice":true,
        "created_at": "2015-07-12T11:22:29Z",
        "updated_at": "2015-07-12T11:22:29Z"
      },
       #<Octobat::InvoiceItem id=oc_ii_14234271095z6y590f59fb 0x00000a> JSON: {
        "id":"oc_ii_14234271095z6y590f59fb",
        "object":"invoice_item",
        "description":"Monthly subscription",
        "extratax_cents":4000,
        "quantity":1,
        "vat_rate":20.0,
        "payment_cents":4800,
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
**payment:** | **object optional** A nested payment object. Mandatory if the invoice state equals to `paid`. See the corresponding section to have details on how to fill this object.

### Returns
Returns the full invoice object if the update succeeded. Returns an error if update parameters are invalid




# Invoice items
Invoice items are the line items in an invoice, You cannot interact directly with invoice items, you must attach them to an invoice, when creating it.

## The invoice item object
> Example object

```json
{
  "id":"oc_ii_14234251155z6y1bdf99f9",
  "object":"invoice_item",
  "description":"Monthly subscription",
  "extratax_cents":833,
  "quantity":1,
  "vat_rate":20.0,
  "payment_cents":1000,
  "eservice":true,
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

### Attributes
The following requirements are concerning the addition of an invoice item in an invoice, when creating it.

Attribute | Type
--------- | -----------
**id:** | **string**
**object:** | **string** equals to invoice_item
**description:** | **string required** Description of the invoice line
**extratax_cents:** | **integer optional** The extratax amount of the line in cents. Currency applied is the invoice's currency. Mandatory if the `payment_cents` field is blank.
**payment_cents:** | **integer optional** The all tax included amount of the line in cents. Currency applied is the invoice's currency. Mandatory if the `extratax_cents` field is blank.
**vat_rate:** | **float optional** The VAT rate of the transaction. Each time you create an invoice item, we try to compute the rate automatically in function of customer (B2B, B2C), transaction type (goods, services, eservices), and location (EU country, non-EU, ...). Fill this field, only if you want to override our automatic calculation, if you have a specific rate for instance.
**eservice:** | **boolean optional** Indicates if it's an online-sold service, without any manual intervention, as indicated in the 2015-EU VAT laws. Defaults to your account default value if not filled.
**created_at** | **datetime**
**updated_at** | **datetime**


# Payment modes
## The payment mode object

> Example object

```json
{
  "id": "oc_pm_14235210139j06befa616a",
  "object": "payment_mode",
  "name": "Bank name",
  "payment_mode_type": "transfer",
  "details": {
    "iban": "FR90 17216 18009 17038133245 88"
  },
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

### Attributes
Attribute | Type
--------- | -----------
**id:** | **string**
**object:** | **string** equals to payment_mode
**name:** | **string required** Name or description of the payment mode
**payment_mode_type:** | **string** Can be `transfer`, `check`, `stripe`
**details:** | **json** Details addressed to the customer, to recieve the payment (IBAN, check recipient...)
**created_at** | **datetime**
**updated_at** | **datetime**



## Listing payment modes

```shell
# Definition
GET https://api.octobat.com/payment_modes/

# Example request
$ curl https://api.octobat.com/payment_modes \
   -u oc_key_tkHCYYOUVrYyY5rBFZxNzgtt:
   
# Example response
{
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    {
      "id": "oc_pm_14235210139j06befa616a",
      "object": "payment_mode",
      "name": "Bank name",
      "payment_mode_type": "transfer",
      "details": {
        "iban": "FR90 17216 18009 17038133245 88"
      }
    },
    {...},
    {...}
  ]
}
```

```ruby
# Definition
Octobat::PaymentMode.all

# Example request
>> require "octobat"
Octobat.api_key = "oc_key_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::PaymentMode.all

# Example response
#<Octobat::ListObject:0x3fe634d74498> JSON: {
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    #<Octobat::PaymentMode id=oc_pm_14235210139j06befa616a 0x00000a> JSON: {
      "id": "oc_pm_14235210139j06befa616a",
      "object": "payment_mode",
      "name": "Bank name",
      "payment_mode_type": "transfer",
      "details": {
        "iban": "FR90 17216 18009 17038133245 88"
      }
    },
    #<Octobat::PaymentMode[...] ...>,
    #<Octobat::PaymentMode[...] ...>
  ]
}
```

Returns a list of payment modes.

### Returns
A hash with a data property that contains an array of payment modes. Each entry in the array is a separate numbering payment mode. If no payment modes are available, the resulting array will be empty. This request should never raise an error.


# Payments
When an invoice is declared as paid, it must include a payment object within it. You cannot interact directly with payment objects, you must attach them to a paid invoice, when creating it or declaring an invoice as paid.


## The payment object

> Example object

```json
{
  "id": "oc_pa_14234412027lw37c15a717",
  "object": "payment",
  "invoice": "oc_in_14219457353oiq78b051b1",
  "payment_date": "2015-01-28",
  "customer_bank_country": "United Kingdom",
  "payment_mode": {},
  "created_at": "2015-07-12T11:22:29Z",
  "updated_at": "2015-07-12T11:22:29Z"
}
```

### Attributes
Attribute | Type
--------- | -----------
**id:** | **string**
**object:** | **string** equals to payment
**invoice:** | **string required** Identifier of the related invoice
**payment_date:** | **date required**
**customer_bank_country:** | **string required** Country name or code for the customer cheque, card or bank account
**payment_mode:** | **object required** Payment mode object. See previous section for attributes and details
**created_at:** | **datetime**
**updated_at:** | **datetime**

