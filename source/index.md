---
title: dOctobat

language_tabs:
  - ruby

toc_footers:

includes:
  

search: false
---

# Introduction

Welcome to the [Octobat](https://www.octobat.com/) documentation. 

We advice you to follow this documentation when subscribing to Octobat.

# Environment

> Example B2B current_user object

```ruby
#<User:0xaa48a8> {
  :id => 1,
  :email => "contact@octobat.com",
  :business_type => "B2B", # or B2C but business_name will be blank
  :business_name => "Octobat",
  :first_name => "Nicolas",
  :last_name => "Guillemain",
  :address => "151 rue Montmartre",
  :zip_code => "75002",
  :city => "Paris",
  :country => "France",
  :vat_number => "FR60528551658",
  :customer_stripe_id => "cus_5ApnZITyBNjwQ8"
}
```

Will be very helpful that you have these fields in your own database.

<aside class="notice">
`current_user` is your customer.
</aside>

# Requirements

To ensure that all your invoices are correctly generated, you must follow this pattern for your Stripe API calls.


## Customers & Cards

> Create a new Stripe customer

```ruby
if customer.nil?
  if current_user.business_type == "B2B"
    customer = Stripe::Customer.create(
      :email => current_user.email,
      :description => current_user.business_name,
      :metadata => {
        :business_type => current_user.business_type
      }
    )
  else # for B2C
    customer = Stripe::Customer.create(
      :email => current_user.email,
      :description => current_user.first_name+" "+current_user.last_name,
      :metadata => {
        :business_type => current_user.business_type
      }
    )
  end
  card = customer.cards.create(card: params[:stripeToken])
  current_user.update_attribute(:customer_stripe_id, customer.id)
end
```
> Or retrieve the existing customer from Stripe

```ruby
unless current_user.customer_stripe_id.nil?
  customer = Stripe::Customer.retrieve(current_user.customer_stripe_id)
  card = customer.cards.create(card: params[:stripeToken])
end
```

> Then fill the card data

```ruby
if current_user.business_type == "B2B"
  card.name = current_user.business_name if !current_user.business_name.blank?
else # for B2C
  card.name = current_user.first_name+" "+current_user.last_name if !current_user.first_name.blank? && !current_user.last_name.blank?
end

card.address_line1 = current_user.address if !current_user.address.blank?
card.address_city = current_user.city if !current_user.city.blank?
card.address_zip = current_user.zip_code if !current_user.zip_code.blank?
card.address_country = current_user.country if !current_user.country.blank?
card.save
```


<aside class="notice">
`params[:stripeToken]` obtained with Stripe.js.
</aside>

<aside class="success">
Create any charge or subscription within the `customer` object
</aside>

### Arguments

Parameter | Default | Description
--------- | ------- | -----------
business_type **optional** | Your setting value in Octobat | B2C/B2B : possible value. This is a required Octobat field to compute the VAT rate for the transaction.


## Charges

```ruby
charge = Stripe::Charge.create(
  :amount      => 400,
  :currency    => "eur",
  :card        => card,
  :customer    => current_user.customer_stripe_id, # or customer.id
  :description => 'The charge will appear on the invoice',
  :metadata => {
    :vat_rate => 21,
    :eservice => false
  }
)
```

<aside class="notice">
If you already know the VAT rate and don't need us to compute it for you, fill the metadata :vat_rate field. Thus, you don't have to fill the customer `:business_type` and the charge `:eservice` metadata.
</aside>

### Arguments

Parameter | Default | Description
--------- | ------- | -----------
vat_rate **optional** | Your setting value in Octobat | The VAT rate of this charge.
eservice **optional** | Your setting value in Octobat | Will be processed if :business_type equals to "B2C". This is a required Octobat field to compute the VAT rate for the transaction.


## Subscriptions

```ruby
plan = Stripe::Plan.retrieve("octobat")
    
if plan.nil?
  plan = Stripe::Plan.create(
    :amount => 0,
    :interval => 'month',
    :name => 'Amazing Octobat Plan',
    :currency => 'eur',
    :id => 'octobat'
  )
end

customer.subscriptions.create(
  :plan => "octobat",
  :metadata => {
    :vat_rate => 21,
    :eservice => true
  }
)
```

Dealing with subscriptions is like dealing with simple charges, you must fill the metadata field to provide Octobat its required data to generate perfectly your invoices.

### Arguments

Parameter | Default | Description
--------- | ------- | -----------
vat_rate **optional** | Your setting value in Octobat | The VAT rate of this charge.
eservice **optional** | Your setting value in Octobat | Will be processed if :business_type equals to "B2C". This is a required Octobat field to compute the VAT rate for the transaction.

## Invoice items

```ruby
Stripe::InvoiceItem.create(
  :customer => current_user.customer_stripe_id, # or customer.id
  :amount => 1000,
  :currency => "eur",
  :description => "The charge will appear on the invoice",
  :metadata => {
    :vat_rate => 21,
    :eservice => true # or false
  }
)
```

### Arguments

Parameter | Default | Description
--------- | ------- | -----------
vat_rate **optional** | Your setting value in Octobat | The VAT rate of this charge.
eservice **optional** | Your setting value in Octobat | Will be processed if :business_type equals to "B2C". This is a required Octobat field to compute the VAT rate for the transaction.
