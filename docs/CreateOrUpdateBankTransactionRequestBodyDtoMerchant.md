
# CreateOrUpdateBankTransactionRequestBodyDtoMerchant

Dados do comerciante da movimentação financeira.

## Properties

Name | Type
------------ | -------------
`name` | string
`businessName` | string
`cnpj` | string
`cnae` | string
`category` | string

## Example

```typescript
import type { CreateOrUpdateBankTransactionRequestBodyDtoMerchant } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "businessName": null,
  "cnpj": null,
  "cnae": null,
  "category": null,
} satisfies CreateOrUpdateBankTransactionRequestBodyDtoMerchant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrUpdateBankTransactionRequestBodyDtoMerchant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


