---
title: Octobat API Documentation

language_tabs:
  - shell: curl
  - ruby

toc_footers:

includes:
  - models/_numbering_sequences.md
  - models/_customers.md
  - models/_invoices.md
  - models/_invoice_items.md
  - models/_payment_recipients.md
  - models/_payments.md
  - models/_payment_sources.md
  - models/_transactions.md

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
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:

# curl uses the -u flag to pass basic auth credentials
# (adding a colon after your secret API key will prevent it
# from asking you for a password).
```

```ruby
# Example request
require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

# Authentication is transparently handled for you
# in subsequent method calls.
```

Authentication to the API occurs via HTTP Basic Auth. Provide your API secret key as the basic auth username. You do not need to provide a password.
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
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:

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
      "tax_number": null,
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
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"
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
     "tax_number": null,
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
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:
```

```ruby
# Example request
require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"
Octobat::Customer.all(include: ['invoices'])
```

Many objects can be nested into their parent object in their response properties. Those objects can be expanded inline with the include request parameter. Objects that can be expanded are noted in this documentation.
This parameter is available on all API requests, and applies to the response of that request only. For example, requesting invoices on a customer will add the customer's invoices list as a property into a full customer object, and will then expand the invoices properties on that customer into a full list object.
