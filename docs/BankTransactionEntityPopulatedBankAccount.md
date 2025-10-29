
# BankTransactionEntityPopulatedBankAccount

Conta bancária da movimentação financeira.

## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`name` | string
`type` | string
`number` | string
`considerInCashFlow` | boolean
`isAutomatic` | boolean
`isDefault` | boolean
`initialBalanceDate` | any
`initialBalanceAmount` | number
`institution` | string
`institutionName` | string
`active` | boolean
`provider` | string
`providerAccountId` | string
`providerItemId` | string
`searchScore` | number
`createdAt` | any
`updatedAt` | any
`populatedInstitution` | [CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution](CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution.md)
`populatedAutomaticStatus` | [CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatus](CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatus.md)

## Example

```typescript
import type { BankTransactionEntityPopulatedBankAccount } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "name": null,
  "type": null,
  "number": null,
  "considerInCashFlow": null,
  "isAutomatic": null,
  "isDefault": null,
  "initialBalanceDate": null,
  "initialBalanceAmount": null,
  "institution": null,
  "institutionName": null,
  "active": null,
  "provider": null,
  "providerAccountId": null,
  "providerItemId": null,
  "searchScore": null,
  "createdAt": null,
  "updatedAt": null,
  "populatedInstitution": null,
  "populatedAutomaticStatus": null,
} satisfies BankTransactionEntityPopulatedBankAccount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BankTransactionEntityPopulatedBankAccount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


