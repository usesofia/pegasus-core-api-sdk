
# ShouldAiSuggestActionRequestBodyDtoTransactionData

Dados da transação bancária.

## Properties

Name | Type
------------ | -------------
`bankAccount` | string
`provider` | string
`providerTransactionId` | string
`amountInBrl` | string
`date` | any
`type` | string
`description` | string
`status` | string
`aiSuggestion` | [CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestion](CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestion.md)
`ofxJobRequestId` | string
`ofxJobExecutionId` | string
`pluggyJobRequestId` | string
`pluggyJobExecutionId` | string
`externalId` | string
`amount` | number
`amountInAccountCurrency` | number
`balance` | number
`currencyCode` | string
`category` | string
`providerCode` | string
`paymentData` | [CreateOrUpdateBankTransactionRequestBodyDtoPaymentData](CreateOrUpdateBankTransactionRequestBodyDtoPaymentData.md)
`creditCardMetadata` | [CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadata](CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadata.md)
`merchant` | [CreateOrUpdateBankTransactionRequestBodyDtoMerchant](CreateOrUpdateBankTransactionRequestBodyDtoMerchant.md)
`categoryId` | string
`operationType` | string
`searchScore` | number
`importedAt` | any
`importedBy` | string

## Example

```typescript
import type { ShouldAiSuggestActionRequestBodyDtoTransactionData } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "bankAccount": null,
  "provider": null,
  "providerTransactionId": null,
  "amountInBrl": null,
  "date": null,
  "type": null,
  "description": null,
  "status": null,
  "aiSuggestion": null,
  "ofxJobRequestId": null,
  "ofxJobExecutionId": null,
  "pluggyJobRequestId": null,
  "pluggyJobExecutionId": null,
  "externalId": null,
  "amount": null,
  "amountInAccountCurrency": null,
  "balance": null,
  "currencyCode": null,
  "category": null,
  "providerCode": null,
  "paymentData": null,
  "creditCardMetadata": null,
  "merchant": null,
  "categoryId": null,
  "operationType": null,
  "searchScore": null,
  "importedAt": null,
  "importedBy": null,
} satisfies ShouldAiSuggestActionRequestBodyDtoTransactionData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ShouldAiSuggestActionRequestBodyDtoTransactionData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


