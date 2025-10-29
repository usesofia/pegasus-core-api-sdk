
# BankTransactionEntity


## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`bankAccount` | string
`bankAccountName` | string
`bankAccountNumber` | string
`bankAccountInstitutionName` | string
`populatedBankAccount` | [BankTransactionEntityPopulatedBankAccount](BankTransactionEntityPopulatedBankAccount.md)
`provider` | string
`providerTransactionId` | string
`amountInBrl` | number
`amountInBrlVariations` | string
`date` | any
`dateVariations` | string
`type` | string
`typeVariations` | string
`description` | string
`status` | string
`ignored` | boolean
`reconciled` | boolean
`financialRecords` | Array&lt;string&gt;
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
`createdAt` | any
`updatedAt` | any

## Example

```typescript
import type { BankTransactionEntity } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "bankAccount": null,
  "bankAccountName": null,
  "bankAccountNumber": null,
  "bankAccountInstitutionName": null,
  "populatedBankAccount": null,
  "provider": null,
  "providerTransactionId": null,
  "amountInBrl": null,
  "amountInBrlVariations": null,
  "date": null,
  "dateVariations": null,
  "type": null,
  "typeVariations": null,
  "description": null,
  "status": null,
  "ignored": null,
  "reconciled": null,
  "financialRecords": null,
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
  "createdAt": null,
  "updatedAt": null,
} satisfies BankTransactionEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BankTransactionEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


