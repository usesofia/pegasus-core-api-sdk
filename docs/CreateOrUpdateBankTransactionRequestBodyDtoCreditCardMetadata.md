
# CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadata

Metadados de cartão de crédito da movimentação financeira.

## Properties

Name | Type
------------ | -------------
`installmentNumber` | number
`totalInstallments` | number
`totalAmount` | number
`payeeMCC` | number
`purchaseDate` | any

## Example

```typescript
import type { CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadata } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "installmentNumber": null,
  "totalInstallments": null,
  "totalAmount": null,
  "payeeMCC": null,
  "purchaseDate": null,
} satisfies CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


