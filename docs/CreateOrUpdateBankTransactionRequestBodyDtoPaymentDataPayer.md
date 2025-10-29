
# CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayer


## Properties

Name | Type
------------ | -------------
`documentNumber` | [CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayerDocumentNumber](CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayerDocumentNumber.md)
`name` | string
`accountNumber` | string
`branchNumber` | string
`routingNumber` | string

## Example

```typescript
import type { CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayer } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "documentNumber": null,
  "name": null,
  "accountNumber": null,
  "branchNumber": null,
  "routingNumber": null,
} satisfies CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


