
# CreateOrUpdateBankTransactionRequestBodyDtoPaymentData

Dados de pagamento da movimentação financeira.

## Properties

Name | Type
------------ | -------------
`payer` | [CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayer](CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayer.md)
`receiver` | [CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayer](CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayer.md)
`receiverReferenceId` | string
`paymentMethod` | string
`referenceNumber` | string
`reason` | string
`boletoMetadata` | [CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataBoletoMetadata](CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataBoletoMetadata.md)

## Example

```typescript
import type { CreateOrUpdateBankTransactionRequestBodyDtoPaymentData } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "payer": null,
  "receiver": null,
  "receiverReferenceId": null,
  "paymentMethod": null,
  "referenceNumber": null,
  "reason": null,
  "boletoMetadata": null,
} satisfies CreateOrUpdateBankTransactionRequestBodyDtoPaymentData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrUpdateBankTransactionRequestBodyDtoPaymentData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


