
# FinancialRecordDto


## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`direction` | string
`dueDate` | string
`contact` | string
`description` | string
`subcategory` | string
`amount` | string
`tags` | Array&lt;string&gt;
`competenceDate` | string
`files` | Array&lt;string&gt;
`radarItems` | Array&lt;string&gt;
`pixKey` | string
`boletoCode` | string
`pixCode` | string
`invoiceNumber` | string
`completed` | boolean
`cashDate` | string
`account` | string
`discount` | string
`finesAndInterest` | string
`finalAmount` | string
`reconciled` | boolean
`bankTransaction` | string
`installmentFinancialRecord` | string
`installmentNumber` | number
`recurringFinancialRecord` | string
`createdAt` | any
`updatedAt` | any
`populatedFiles` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedFilesInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedFilesInner.md)
`populatedSubcategory` | [CreateFinancialRecordRequestBodyDtoPopulatedSubcategory](CreateFinancialRecordRequestBodyDtoPopulatedSubcategory.md)
`populatedContact` | [CreateFinancialRecordRequestBodyDtoPopulatedContact](CreateFinancialRecordRequestBodyDtoPopulatedContact.md)
`populatedTags` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedTagsInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedTagsInner.md)
`populatedAccount` | [CreateFinancialRecordRequestBodyDtoPopulatedAccount](CreateFinancialRecordRequestBodyDtoPopulatedAccount.md)
`searchScore` | number

## Example

```typescript
import type { FinancialRecordDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "direction": null,
  "dueDate": null,
  "contact": null,
  "description": null,
  "subcategory": null,
  "amount": null,
  "tags": null,
  "competenceDate": null,
  "files": null,
  "radarItems": null,
  "pixKey": null,
  "boletoCode": null,
  "pixCode": null,
  "invoiceNumber": null,
  "completed": null,
  "cashDate": null,
  "account": null,
  "discount": null,
  "finesAndInterest": null,
  "finalAmount": null,
  "reconciled": null,
  "bankTransaction": null,
  "installmentFinancialRecord": null,
  "installmentNumber": null,
  "recurringFinancialRecord": null,
  "createdAt": null,
  "updatedAt": null,
  "populatedFiles": null,
  "populatedSubcategory": null,
  "populatedContact": null,
  "populatedTags": null,
  "populatedAccount": null,
  "searchScore": null,
} satisfies FinancialRecordDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialRecordDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


