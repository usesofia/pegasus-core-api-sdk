
# OfxImportJobRequestsPageDtoItemsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`bankAccountId` | string
`bankAccountName` | string
`fileName` | string
`requesterUserId` | string
`totalTransactions` | number
`periodStartDate` | any
`periodEndDate` | any
`createdAt` | any
`updatedAt` | any
`signedUrl` | string
`searchScore` | number
`executions` | [Array&lt;OfxImportJobRequestsPageDtoItemsInnerExecutionsInner&gt;](OfxImportJobRequestsPageDtoItemsInnerExecutionsInner.md)
`nSuccessImportedTransactions` | number
`user` | [OfxImportJobRequestsPageDtoItemsInnerUser](OfxImportJobRequestsPageDtoItemsInnerUser.md)
`status` | string
`populatedBankAccount` | [OfxImportJobRequestsPageDtoItemsInnerPopulatedBankAccount](OfxImportJobRequestsPageDtoItemsInnerPopulatedBankAccount.md)

## Example

```typescript
import type { OfxImportJobRequestsPageDtoItemsInner } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "bankAccountId": null,
  "bankAccountName": null,
  "fileName": null,
  "requesterUserId": null,
  "totalTransactions": null,
  "periodStartDate": null,
  "periodEndDate": null,
  "createdAt": null,
  "updatedAt": null,
  "signedUrl": null,
  "searchScore": null,
  "executions": null,
  "nSuccessImportedTransactions": null,
  "user": null,
  "status": null,
  "populatedBankAccount": null,
} satisfies OfxImportJobRequestsPageDtoItemsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OfxImportJobRequestsPageDtoItemsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


