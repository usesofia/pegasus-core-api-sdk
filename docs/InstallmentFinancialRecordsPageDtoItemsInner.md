
# InstallmentFinancialRecordsPageDtoItemsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`direction` | string
`frequency` | string
`firstInstallmentDate` | string
`contact` | string
`description` | string
`subcategory` | string
`amount` | string
`tags` | Array&lt;string&gt;
`competenceDate` | string
`files` | Array&lt;string&gt;
`numberOfInstallments` | number
`installments` | [Array&lt;CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner&gt;](CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner.md)
`createdAt` | any
`updatedAt` | any
`searchScore` | number
`populatedSubcategory` | [CreateFinancialRecordRequestBodyDtoPopulatedSubcategory](CreateFinancialRecordRequestBodyDtoPopulatedSubcategory.md)
`populatedContact` | [CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact](CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact.md)
`populatedTags` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedTagsInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedTagsInner.md)
`observations` | string
`populatedFiles` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedFilesInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedFilesInner.md)
`externalId` | string
`finalAmount` | string
`discount` | string
`finesAndInterest` | string

## Example

```typescript
import type { InstallmentFinancialRecordsPageDtoItemsInner } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "direction": null,
  "frequency": null,
  "firstInstallmentDate": null,
  "contact": null,
  "description": null,
  "subcategory": null,
  "amount": null,
  "tags": null,
  "competenceDate": null,
  "files": null,
  "numberOfInstallments": null,
  "installments": null,
  "createdAt": null,
  "updatedAt": null,
  "searchScore": null,
  "populatedSubcategory": null,
  "populatedContact": null,
  "populatedTags": null,
  "observations": null,
  "populatedFiles": null,
  "externalId": null,
  "finalAmount": null,
  "discount": null,
  "finesAndInterest": null,
} satisfies InstallmentFinancialRecordsPageDtoItemsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InstallmentFinancialRecordsPageDtoItemsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


