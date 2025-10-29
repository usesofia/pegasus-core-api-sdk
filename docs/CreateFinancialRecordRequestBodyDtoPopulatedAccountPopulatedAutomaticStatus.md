
# CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatus

Status se conta bancária automática.

## Properties

Name | Type
------------ | -------------
`isSyncing` | boolean
`error` | [CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatusError](CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatusError.md)
`lastSyncAt` | any
`nextSyncAt` | any

## Example

```typescript
import type { CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatus } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "isSyncing": null,
  "error": null,
  "lastSyncAt": null,
  "nextSyncAt": null,
} satisfies CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


