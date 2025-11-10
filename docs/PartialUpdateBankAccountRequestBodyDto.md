
# PartialUpdateBankAccountRequestBodyDto


## Properties

Name | Type
------------ | -------------
`name` | string
`number` | string
`considerInCashFlow` | boolean
`isDefault` | boolean
`initialBalanceDate` | string
`initialBalanceAmount` | string
`institution` | string
`active` | boolean
`searchScore` | number
`populatedInstitution` | [CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution](CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution.md)
`populatedAutomaticStatus` | [CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatus](CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatus.md)
`importedAt` | any
`importedBy` | string
`channel` | string

## Example

```typescript
import type { PartialUpdateBankAccountRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "number": null,
  "considerInCashFlow": null,
  "isDefault": null,
  "initialBalanceDate": null,
  "initialBalanceAmount": null,
  "institution": null,
  "active": null,
  "searchScore": null,
  "populatedInstitution": null,
  "populatedAutomaticStatus": null,
  "importedAt": null,
  "importedBy": null,
  "channel": null,
} satisfies PartialUpdateBankAccountRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PartialUpdateBankAccountRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


