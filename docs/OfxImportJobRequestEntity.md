
# OfxImportJobRequestEntity


## Properties

Name | Type
------------ | -------------
`id` | string
`bankAccountId` | string
`bankAccountName` | string
`fileName` | string
`signedUrl` | string
`maxTransactionsForAiSuggestionOnImport` | number
`requesterUserId` | string
`totalTransactions` | number
`periodStartDate` | any
`periodEndDate` | any
`createdAt` | any
`updatedAt` | any
`deletedAt` | any

## Example

```typescript
import type { OfxImportJobRequestEntity } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "bankAccountId": null,
  "bankAccountName": null,
  "fileName": null,
  "signedUrl": null,
  "maxTransactionsForAiSuggestionOnImport": null,
  "requesterUserId": null,
  "totalTransactions": null,
  "periodStartDate": null,
  "periodEndDate": null,
  "createdAt": null,
  "updatedAt": null,
  "deletedAt": null,
} satisfies OfxImportJobRequestEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OfxImportJobRequestEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


