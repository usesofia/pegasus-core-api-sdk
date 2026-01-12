
# CreateBankAccountRequestBodyDto


## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`number` | string
`considerInCashFlow` | boolean
`isAutomatic` | boolean
`isDefault` | boolean
`initialBalanceDate` | string
`initialBalanceAmount` | string
`institution` | string
`institutionName` | string
`provider` | string
`providerAccountId` | string
`providerItemId` | string
`searchScore` | number
`populatedInstitution` | [CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution](CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution.md)
`populatedAutomaticStatus` | [CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatus](CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatus.md)
`importedAt` | any
`importedBy` | string
`externalId` | string
`channel` | string

## Example

```typescript
import type { CreateBankAccountRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
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
  "provider": null,
  "providerAccountId": null,
  "providerItemId": null,
  "searchScore": null,
  "populatedInstitution": null,
  "populatedAutomaticStatus": null,
  "importedAt": null,
  "importedBy": null,
  "externalId": null,
  "channel": null,
} satisfies CreateBankAccountRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateBankAccountRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


