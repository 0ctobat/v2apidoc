# Transactions
This is a transaction. It triggers when there is a payment or a refund.

## The transaction object
> Example object

```json
{
  "id": "oc_txn_1459936947icq9005f4668",
  "object": "transaction",
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "payment_source": "oc_ps_1459584112d83k4ef3e3bd",
  "payment_recipient": "oc_pr_14597887132yzs440d46e9",
  "document": "oc_in_14597887132yzs440der49",
  "livemode": true,
  "status": "succeeded",
  "transaction_date": "2016-03-31T00:00:00.000Z",
  "flow_type": "payment",
  "gross_amount": 2500,
  "currency": "EUR"
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
      <td class="attribute"><strong>object</strong><br/><span class="details">string, value is "<strong>transaction</strong>"</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>customer</strong><br/><span class="details">string</span></td>
      <td><p>ID of the customer.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>payment_source</strong><br/><span class="details">string</span></td>
      <td><p>ID of the payment source.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>payment_recipient</strong><br/><span class="details">string</span></td>
      <td><p>ID of the payment recipient.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>document</strong><br/><span class="details">string</span></td>
      <td><p>ID of the document if one exists.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>livemode</strong><br/><span class="details">boolean</span></td>
      <td><p>-</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>status</strong><br/><span class="details">string</span></td>
      <td><p>The status of the transaction is either <code>succeeded</code>, <code>pending</code>, or <code>failed</code>.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>transaction_date</strong><br/><span class="details">string</span></td>
      <td><p>Date on which the transaction was created.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>flow_type</strong><br/><span class="details">string</span></td>
      <td><p>The type of the transaction is either <code>payment</code> or <code>refund</code>.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>gross_amount</strong><br/><span class="details">integer</span></td>
      <td><p>The total amount that the customer has paid.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>currency</strong><br/><span class="details">string</span></td>
      <td><p>Three-letter ISO code representing the currency of the transaction.</p></td>
    </tr>
  </tbody>
</table>


## Create a transaction

```
# Definition
POST https://api.octobat.com/transactions
```

```shell
# Example Request
$ curl https://api.octobat.com/transactions \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d customer="oc_cu_1459413729au6o6a9ae061" \
   -d payment_source="oc_ps_1459584112d83k4ef3e3bd" \
   -d payment_recipient="oc_pr_14597887132yzs440d46e9" \
   -d document="oc_in_14597887132yzs440der49" \
   -d status="succeeded" \
   -d transaction_date="2016-03-31" \
   -d flow_type="payment" \
   -d gross_amount=2500 \
   -d currency="EUR"

# Example response
{
  "id": "oc_txn_1459936947icq9005f4668",
  "object": "transaction",
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "payment_source": "oc_ps_1459584112d83k4ef3e3bd",
  "payment_recipient": "oc_pr_14597887132yzs440d46e9",
  "document": "oc_in_14597887132yzs440der49",
  "livemode": true,
  "status": "succeeded",
  "transaction_date": "2016-03-31T00:00:00.000Z",
  "flow_type": "payment",
  "gross_amount": 2500,
  "currency": "EUR"
}
```

```ruby
# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::Transaction.create(
  customer: "oc_cu_1459413729au6o6a9ae061",
  payment_source: "oc_ps_1459584112d83k4ef3e3bd",
  payment_recipient: "oc_pr_14597887132yzs440d46e9",
  document: "oc_in_14597887132yzs440der49",
  status: "succeeded",
  transaction_date: "2016-03-31",
  flow_type: "payment",
  gross_amount: 2500,
  currency: 'EUR'
)

# Example response
#<Octobat::Transaction id=oc_txn_1459936947icq9005f4668 0x00000a> JSON: {
  "id": "oc_txn_1459936947icq9005f4668",
  "object": "transaction",
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "payment_source": "oc_ps_1459584112d83k4ef3e3bd",
  "payment_recipient": "oc_pr_14597887132yzs440d46e9",
  "document": "oc_in_14597887132yzs440der49",
  "livemode": true,
  "status": "succeeded",
  "transaction_date": "2016-03-31T00:00:00.000Z",
  "flow_type": "payment",
  "gross_amount": 2500,
  "currency": "EUR"
}
```

### Arguments
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>customer</strong><br/><span class="badge-warning">required</span></td>
      <td><p>The ID of an existing customer that will be charged in this request.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>payment_source</strong><br/><span class="badge-warning">required</span></td>
      <td><p>The ID of an existing payment source.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>payment_recipient</strong><br/><span class="badge-warning">required</span></td>
      <td><p>The ID of an existing payment recipient.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>document</strong><br/><span class="details">optional, default is <strong>nil</strong></span></td>
      <td><p>The ID of an existing document.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>status</strong><br/><span class="details">optional</span></td>
      <td><p>The status of the transaction is either <code>succeeded</code>, <code>pending</code>, or <code>failed</code>.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>transaction_date</strong><br/><span class="details">optional</span></td>
      <td><p>Date on which the transaction was created.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>flow_type</strong><br/><span class="details">optional</span></td>
      <td><p>The type of the transaction is either <code>payment</code> or <code>refund</code>.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>gross_amount</strong><br/><span class="badge-warning">required</span></td>
      <td><p>The total amount that the customer has paid.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>currency</strong><br/><span class="badge-warning">required</span></td>
      <td><p>Three-letter ISO code representing the currency of the transaction.</p></td>
    </tr>
  </tbody>
</table>


### Returns
Returns the transaction object if the creation succeeds. Returns an error if parameters are invalid



## Retrieve a transaction
```shell
# Definition
GET https://api.octobat.com/transactions/{TRANSACTION_ID}

# Example Request
$ curl https://api.octobat.com/transactions/oc_txn_1459957855kw89e9c7e960 \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:

# Example response
{
  "id": "oc_txn_1459957855kw89e9c7e960",
  "object": "transaction",
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "payment_source": "oc_ps_1459584112d83k4ef3e3bd",
  "payment_recipient": "oc_pr_14597887132yzs440d46e9",
  "document": "oc_in_14597887132yzs440der49",
  "livemode": true,
  "status": "succeeded",
  "transaction_date": "2016-03-31T00:00:00.000Z",
  "flow_type": "payment",
  "gross_amount": 2500,
  "currency": "EUR"
}
```

```ruby
# Definition
Octobat::Transaction.retrieve({TRANSACTION_ID})

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::Transaction.retrieve("oc_txn_1459957855kw89e9c7e960")

# Example response
#<Octobat::Transaction id=oc_txn_1459957855kw89e9c7e960 0x00000a> JSON: {
  "id": "oc_txn_1459957855kw89e9c7e960",
  "object": "transaction",
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "payment_source": "oc_ps_1459584112d83k4ef3e3bd",
  "payment_recipient": "oc_pr_14597887132yzs440d46e9",
  "document": "oc_in_14597887132yzs440der49",
  "livemode": true,
  "status": "succeeded",
  "transaction_date": "2016-03-31T00:00:00.000Z",
  "flow_type": "payment",
  "gross_amount": 2500,
  "currency": "EUR"
}
```


Retrieves the details of an existing transaction.

### Arguments
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>transaction</strong><br/><span class="badge-warning">required</span></td>
      <td><p>The identifier of the transaction to be retrieved.</p></td>
    </tr>
  </tbody>
</table>

### Returns
Returns a transaction object if a valid identifier was provided.



## List all transactions

```shell
# Definition
GET https://api.octobat.com/transactions/

# Example request
$ curl https://api.octobat.com/transactions \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt:

# Example response
{
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    {
      "id": "oc_txn_1459957855kw89e9c7e960",
      "object": "transaction",
      "customer": "oc_cu_1459413729au6o6a9ae061",
      "payment_source": "oc_ps_1459584112d83k4ef3e3bd",
      "payment_recipient": "oc_pr_14597887132yzs440d46e9",
      "document": "oc_in_14597887132yzs440der49",
      "livemode": true,
      "status": "succeeded",
      "transaction_date": "2016-03-31T00:00:00.000Z",
      "flow_type": "payment",
      "gross_amount": 1500,
      "currency": "EUR"
    },
    {...},
    {...}
  ]
}
```

```ruby
# Definition
Octobat::Transaction.all

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

Octobat::Transaction.all

# Example response
#<Octobat::ListObject:0x3fe634d74498> JSON: {
  "object": "list",
  "has_more": false,
  "total_count": 3,
  "data": [
    #<Octobat::Transaction id=oc_txn_1459957855kw89e9c7e960 0x00000a> JSON: {
      "id": "oc_txn_1459957855kw89e9c7e960",
      "object": "transaction",
      "customer": "oc_cu_1459413729au6o6a9ae061",
      "payment_source": "oc_ps_1459584112d83k4ef3e3bd",
      "payment_recipient": "oc_pr_14597887132yzs440d46e9",
      "document": "oc_in_14597887132yzs440der49",
      "livemode": true,
      "status": "succeeded",
      "transaction_date": "2016-03-31T00:00:00.000Z",
      "flow_type": "payment",
      "gross_amount": 1500,
      "currency": "EUR"
    },
    #<Octobat::Transaction[...] ...>,
    #<Octobat::Transaction[...] ...>
  ]
}
```



Returns a list of transactions.

### Returns
A hash with a data property that contains an array of transactions. Each entry in the array is a separate transaction object. If no transactions are available, the resulting array will be empty. This request should never raise an error.


<!-- ## Update a transaction

```shell
# Definition
PATCH https://api.octobat.com/transactions/{TRANSACTION_ID}

# Example request
$ curl https://api.octobat.com/transactions/oc_txn_1459957855kw89e9c7e960 \
   -u oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt: \
   -d gross_amount=1500

# Example response
{
  "id": "oc_txn_1459957855kw89e9c7e960",
  "object": "transaction",
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "payment_source": "oc_ps_1459584112d83k4ef3e3bd",
  "payment_recipient": "oc_pr_14597887132yzs440d46e9",
  "document": "oc_in_14597887132yzs440der49",
  "livemode": true,
  "status": "succeeded",
  "transaction_date": "2016-03-31T00:00:00.000Z",
  "flow_type": "payment",
  "gross_amount": 1500,
  "currency": "EUR"
}
```

```ruby
# Definition
transaction = Octobat::Transaction.retrieve({TRANSACTION_ID})
transaction.gross_amount = {NEW_GROSS_AMOUNT}
transaction.save

# Example request
>> require "octobat"
Octobat.api_key = "oc_test_skey_tkHCYYOUVrYyY5rBFZxNzgtt"

transaction = Octobat::Transaction.retrieve("oc_txn_1459957855kw89e9c7e960")
transaction.gross_amount = 1500
transaction.save

# Example response
#<Octobat::Transaction id=oc_txn_1459957855kw89e9c7e960 0x00000a> JSON: {
  "id": "oc_txn_1459957855kw89e9c7e960",
  "object": "transaction",
  "customer": "oc_cu_1459413729au6o6a9ae061",
  "payment_source": "oc_ps_1459584112d83k4ef3e3bd",
  "payment_recipient": "oc_pr_14597887132yzs440d46e9",
  "document": "oc_in_14597887132yzs440der49",
  "livemode": true,
  "status": "succeeded",
  "transaction_date": "2016-03-31T00:00:00.000Z",
  "flow_type": "payment",
  "gross_amount": 1500,
  "currency": "EUR"
}
```


Updates the specified transaction by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
This request accepts mostly the same arguments as the transaction creation call.

### Arguments
<table>
  <tbody>
    <tr class="first-row">
      <td class="attribute"><strong>customer</strong><br/><span class="badge-warning">required</span></td>
      <td><p>The ID of an existing customer that will be charged in this request.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>payment_source</strong><br/><span class="badge-warning">required</span></td>
      <td><p>The ID of an existing payment source.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>payment_recipient</strong><br/><span class="badge-warning">required</span></td>
      <td><p>The ID of an existing payment recipient.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>document</strong><br/><span class="details">optional, default is <strong>nil</strong></span></td>
      <td><p>The ID of an existing document.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>status</strong><br/><span class="details">optional</span></td>
      <td><p>The status of the transaction is either <code>succeeded</code>, <code>pending</code>, or <code>failed</code>.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>transaction_date</strong><br/><span class="details">optional</span></td>
      <td><p>Date on which the transaction was created.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>flow_type</strong><br/><span class="details">optional</span></td>
      <td><p>The type of the transaction is either <code>payment</code> or <code>refund</code>.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>gross_amount</strong><br/><span class="badge-warning">required</span></td>
      <td><p>The total amount that the customer has paid.</p></td>
    </tr>
    <tr>
      <td class="attribute"><strong>currency</strong><br/><span class="badge-warning">required</span></td>
      <td><p>Three-letter ISO code representing the currency of the transaction.</p></td>
    </tr>
  </tbody>
</table>

### Returns
Returns the transaction object if the update succeeded. Returns an error if update parameters are invalid. -->
