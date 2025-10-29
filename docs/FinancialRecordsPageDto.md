
# FinancialRecordsPageDto


## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;FinancialRecordsPageDtoItemsInner&gt;](FinancialRecordsPageDtoItemsInner.md)
`pageInfo` | [ContactsPageDtoPageInfo](ContactsPageDtoPageInfo.md)
`exportedExcelFile` | [CreateFinancialRecordRequestBodyDtoPopulatedFilesInner](CreateFinancialRecordRequestBodyDtoPopulatedFilesInner.md)
`exportedPdfTableFile` | [CreateFinancialRecordRequestBodyDtoPopulatedFilesInner](CreateFinancialRecordRequestBodyDtoPopulatedFilesInner.md)
`exportedPdfListFile` | [CreateFinancialRecordRequestBodyDtoPopulatedFilesInner](CreateFinancialRecordRequestBodyDtoPopulatedFilesInner.md)

## Example

```typescript
import type { FinancialRecordsPageDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "pageInfo": null,
  "exportedExcelFile": null,
  "exportedPdfTableFile": null,
  "exportedPdfListFile": null,
} satisfies FinancialRecordsPageDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialRecordsPageDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


