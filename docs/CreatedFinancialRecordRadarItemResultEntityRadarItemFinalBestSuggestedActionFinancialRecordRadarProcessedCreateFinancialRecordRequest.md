
# CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest

Dados finais para criar registro financeiro.

## Properties

Name | Type
------------ | -------------
`direction` | string
`dueDate` | any
`contact` | string
`description` | string
`subcategory` | string
`amount` | number
`tags` | Array&lt;string&gt;
`competenceDate` | any
`files` | Array&lt;string&gt;
`pixKey` | string
`boletoCode` | string
`pixCode` | string
`invoiceNumber` | string
`completed` | boolean
`cashDate` | any
`account` | string
`discount` | number
`finesAndInterest` | number
`contactHints` | string
`subcategoryHints` | string
`bankAccountHints` | string
`tagsHints` | string
`bankTransaction` | string
`installmentFinancialRecord` | string
`installmentNumber` | number
`recurringFinancialRecord` | string
`populatedFiles` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedFilesInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedFilesInner.md)
`populatedSubcategory` | [CreateFinancialRecordRequestBodyDtoPopulatedSubcategory](CreateFinancialRecordRequestBodyDtoPopulatedSubcategory.md)
`populatedContact` | [CreateFinancialRecordRequestBodyDtoPopulatedContact](CreateFinancialRecordRequestBodyDtoPopulatedContact.md)
`populatedTags` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedTagsInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedTagsInner.md)
`populatedAccount` | [CreateFinancialRecordRequestBodyDtoPopulatedAccount](CreateFinancialRecordRequestBodyDtoPopulatedAccount.md)
`searchScore` | number
`observations` | string
`importedAt` | any
`importedBy` | string
`finalAmount` | number
`radarItem` | string

## Example

```typescript
import type { CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "direction": null,
  "dueDate": null,
  "contact": null,
  "description": null,
  "subcategory": null,
  "amount": null,
  "tags": null,
  "competenceDate": null,
  "files": null,
  "pixKey": null,
  "boletoCode": null,
  "pixCode": null,
  "invoiceNumber": null,
  "completed": null,
  "cashDate": null,
  "account": null,
  "discount": null,
  "finesAndInterest": null,
  "contactHints": null,
  "subcategoryHints": null,
  "bankAccountHints": null,
  "tagsHints": null,
  "bankTransaction": null,
  "installmentFinancialRecord": null,
  "installmentNumber": null,
  "recurringFinancialRecord": null,
  "populatedFiles": null,
  "populatedSubcategory": null,
  "populatedContact": null,
  "populatedTags": null,
  "populatedAccount": null,
  "searchScore": null,
  "observations": null,
  "importedAt": null,
  "importedBy": null,
  "finalAmount": null,
  "radarItem": null,
} satisfies CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


